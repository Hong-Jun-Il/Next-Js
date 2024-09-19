const Base_URL: string = "https://jsonplaceholder.typicode.com";

type PropsType = {
  endPoint: string;
  options?: Partial<RequestInit>;
};

export async function fetchInstanse<T extends Record<string, any>>({
  endPoint,
  options = {},
}: PropsType): Promise<T[]> {
  const response = await fetch(`${Base_URL}/${endPoint}`, options);

  if (!response.ok) throw new Error(`HTTP Error! ${response.status}`);

  return response.json() as Promise<T[]>;
}
