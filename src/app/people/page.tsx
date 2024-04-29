import FilteredPeople from "@/components/People/FilteredPeople";

export const metadata = {
  title: "People | BioDrop",
};

export default async function People() {
  return (
    <section className="container xl:px-20 2xl:px-20 mx-auto px-4 min-h-screen">
      <FilteredPeople />
    </section>
  );
}
