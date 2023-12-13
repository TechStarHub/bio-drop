import SearchPeople from "@/components/People/Search";
import PeopleCard from "@/components/People/PeopleCard";
import peopleJson from "@/data/people.json";

export const metadata = {
  title: "People | BioDrop",
};

// async function getPeople() {
//   const res = await fetch("/data/people.json");
//   const people = await res.json();

//   return people;
// }

export default async function People() {
  const people = peopleJson;
  return (
    <section className="container xl:px-20 2xl:px-20 mx-auto px-4 min-h-screen">
      <SearchPeople />
      <p className="mt-2 text-lg font-medium">People ({people.length})</p>
      <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-rows mt-2">
        {people.map((person: any) => (
          <PeopleCard key={person.id} people={person} />
        ))}
      </div>
    </section>
  );
}
