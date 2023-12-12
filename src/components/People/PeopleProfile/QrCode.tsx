"use client";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import QRCode from "qrcode";

type QrCodeProps = {
  image: string;
};

export default function QrCode({ image }: QrCodeProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const pathname = usePathname();
  const url = `https://bio-drop.netlify.app${pathname}`;

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
    const link = document.createElement("a");
    link.download = "BioDrop-QR.png";
    link.href = canvasRef.current?.toDataURL() || "";
    link.click();
  };

  // open dialog when clicked
  const handleQrClick = () => {
    dialogRef.current?.showModal();
  };
  // close dialog when clicked outside
  window.document.addEventListener("click", (e) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  });
  return (
    <>
      <div
        onClick={handleQrClick}
        className=" bg-slate-200/50 cursor-pointer p-1 rounded flex justify-center items-center absolute bottom-0 right-0"
      >
        <BsQrCodeScan className="text-3xl" />
      </div>
      <dialog ref={dialogRef} className=" bg-white rounded-lg p-4">
        <div className="relative">
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
          <span className="flex justify-center mt-2">
            <button
              onClick={handleDownload}
              className="text-sm bg-sky-400 rounded px-3 py-1 text-white font-medium outline outline-sky-500 hover:shadow-md  "
            >
              Download
              <FaDownload className="inline-block ml-2 text-md " />
            </button>
          </span>
        </div>
      </dialog>
    </>
  );
}
