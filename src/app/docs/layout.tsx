import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs | BioDrop",
  description: "A simplae app for sharing your bio links",
};

import SideBar from "@/components/Docs/SideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full min-h-screen">
        <aside className="hidden sm:block h-full">
          <SideBar />
        </aside>
        <section className="w-full ">{children}</section>
      </div>
    </>
  );
}
