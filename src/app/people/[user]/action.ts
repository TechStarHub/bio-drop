"use server";
export async function getUserData(username: string) {
  return import(`@/data/users/${username}.json`).then((res) => res.default);
}
