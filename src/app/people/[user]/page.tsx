import { getUserData } from "./action";
import PeopleProfile from "@/components/People/PeopleProfile/PeopleProfile";

export async function generateMetadata(
  props: {
    params: Promise<{ user: string }>;
  }
) {
  const params = await props.params;
  const userData = await getUserData(params.user);
  return {
    title: `${userData.name} | BioDrop`,
  };
}

export default async function PeoplePage(
  props: {
    params: Promise<{ user: string }>;
  }
) {
  const params = await props.params;
  const user = params.user;
  const userData = await getUserData(user);
  // console.log(userData);
  return (
    <section className="container mx-auto px-4 ">
      <PeopleProfile userData={userData} />
    </section>
  );
}
