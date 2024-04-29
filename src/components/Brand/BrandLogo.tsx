import Image from "next/image";

export default function BrandLogo() {
  return (
    <div className="flex items-center group">
      <Image
        src="/bio-drop.png"
        className=" scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out"
        alt="Brand Logo"
        width={50}
        height={50}
      />
      <span className="text-2xl font-bold -translate-x-[50px] group-hover:translate-x-0 transition-all duration-500 ease-in-out ">
        <span className="flex items-center ">
          <span className="">Bio</span>
          <span className="">Drop</span>
        </span>
      </span>
    </div>
  );
}
