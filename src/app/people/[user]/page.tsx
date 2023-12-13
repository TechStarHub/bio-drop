import { getUserData } from "./action";
import PeopleProfile from "@/components/People/PeopleProfile/PeopleProfile";

export default async function PeoplePage({
  params,
}: {
  params: { user: string };
}) {
  const user = params.user;
  const userData = await getUserData(user);
  // console.log(userData);
  return (
    <section className="container mx-auto px-4 ">
      <PeopleProfile userData={userData} />
    </section>
  );
}
