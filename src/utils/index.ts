export function pathToUsername(path: string): string {
  const pathArr = path.split("/");
  const username = pathArr[pathArr.length - 1];
  return username;
}
