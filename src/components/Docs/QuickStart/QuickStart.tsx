import PageContent from "./PageContent";
import Index from "./PageIndex";

export default function GetStarted() {
  return (
    <div className="flex w-full">
      <PageContent />
      <Index />
    </div>
  );
}
