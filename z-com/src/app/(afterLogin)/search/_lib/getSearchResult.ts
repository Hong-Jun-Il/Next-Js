export default async function getSearchResult({
  queryKey,
}: {
  queryKey: string[];
}) {
  console.log(queryKey);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${q}`);
}
