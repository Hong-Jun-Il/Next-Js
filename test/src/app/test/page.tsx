type Props = {
  searchParams: {
    q: number;
  }
}

export default function page({searchParams}: Props) {
  return (
    <div>{searchParams.q}</div>
  )
}
