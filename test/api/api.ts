const BASE_URL: string = "https://jsonplaceholder.typicode.com";

type Props = {
  endPoint: string;
  options?: RequestInit;
};

export default async function fetchInstance<T extends Record<string, any>>({
  endPoint,
  options = {},
}: Props): Promise<T[]> {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`, options);

    if (!response.ok) throw new Error(`HTTP ERROR: ${response.status}`);

    return response.json() as Promise<T[]>;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(`${endPoint}에러`);
  }
}
