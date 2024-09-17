const BASE_URL = "https://jsonplaceholder.typicode.com";

export default async function fetchInstance<T>(
  endPoint: string,
  requestOptions: Partial<RequestInit> = {},
): Promise<T> {
  const response = await fetch(`${BASE_URL}/${endPoint}`, requestOptions);

  if (!response.ok) throw new Error(`HTTP Error! status: ${response.status}`);

  return response.json() as Promise<T>;
}
