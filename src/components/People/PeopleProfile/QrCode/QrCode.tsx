"use client";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState, useMemo, use } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import QRCode from "qrcode";
import domtoimage from "dom-to-image";
import CopyBtn from "../CopyBtn/CopyBtn";
import Loader from "@/components/Loader/Loader";
import { pathToUsername } from "@/utils";

type QrCodeProps = {
  image: string;
};

export default function QrCode({ image }: QrCodeProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const qrContainerRef = useRef<HTMLDivElement>(null);

  const [downloadLoading, setDownloadLoading] = useState(false);

  const pathname = usePathname();
  const url = `https://bio-drop.netlify.app${pathname}`;

  const username = useMemo(() => pathToUsername(pathname), [pathname]);

  useEffect(() => {
    if (canvasRef.current === null) return;
    QRCode.toCanvas(
      canvasRef.current,
      url,
      {
        width: 280,
        errorCorrectionLevel: "H",
      },
      (err: any) => {
        if (err) throw err;
      }
    );
  }, [url]);

  // download canvas as png
  const handleDownload = () => {
    setDownloadLoading(true);
    setTimeout(() => {
      setDownloadLoading(false);
    }, 2000);
    domtoimage
      .toPng(qrContainerRef.current as HTMLElement)
      .then(function (dataUrl: string) {
        const link = document.createElement("a");
        link.download = `${username}-biodrop-qr.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error: unknown) {
        console.error("oops, something went wrong!", error);
      });
  };

  // open dialog when clicked
  const handleQrClick = () => {
    dialogRef.current?.showModal();
  };
  // close dialog when clicked outside
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.addEventListener("click", (e) => {
        if (e.target === dialogRef.current) {
          dialogRef.current?.close();
        }
      });
    } else {
      console.log("window not defined");
    }
  }, []);

  return (
    <>
      <div
        onClick={handleQrClick}
        className=" bg-slate-200/50 cursor-pointer p-1 rounded flex justify-center items-center absolute bottom-0 right-0"
      >
        <BsQrCodeScan className="text-3xl" />
      </div>
      <dialog
        ref={dialogRef}
        className=" backdrop:bg-black/20 backdrop-blur-sm bg-white rounded-lg p-4"
      >
        <div ref={qrContainerRef} className="relative">
          <canvas ref={canvasRef}></canvas>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded">
            <img
              src={image}
              className="rounded"
              alt="Qr profile image"
              width={70}
              height={70}
            />
          </span>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-center">Scan to share</h1>
          <p className="text-sm text-center">
            Scan this QR code to share your profile
          </p>
          <span className="flex flex-col gap-2 justify-center mt-2">
            <button
              onClick={handleDownload}
              className="text-sm bg-sky-400 rounded px-3 py-1 text-white font-medium outline outline-sky-500 hover:shadow-md  "
            >
              {downloadLoading ? (
                <Loader size={20} />
              ) : (
                <>
                  <span className="">Download</span>
                  <FaDownload className="inline-block ml-2 text-md " />
                </>
              )}
            </button>
            <CopyBtn label="Copy to clipboard" toBeCopied={url} />
          </span>
        </div>
      </dialog>
    </>
  );
}
