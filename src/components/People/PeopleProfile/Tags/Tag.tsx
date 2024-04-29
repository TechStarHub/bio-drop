export default function Tag({ key, tag }: { key: number; tag: string }) {
  return (
    <span
      key={key}
      className="bg-sky-200 cursor-pointer text-sm text-sky-600 rounded-full px-2 transition-all duration-400 border border-sky-200 hover:border-sky-600"
    >
      {tag}
    </span>
  );
}
