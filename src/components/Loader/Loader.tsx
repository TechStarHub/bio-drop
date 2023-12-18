type LoaderProps = {
  size?: number;
};

export default function Loader({ size = 24 }: LoaderProps) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={"/loading.svg"}
        width={size}
        height={size}
        alt="loading"
        className=""
      />
    </div>
  );
}
