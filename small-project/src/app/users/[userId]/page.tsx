type PropsType = {
    params: {
        userId: string;
    }
}

export default function page({params: {userId}}: PropsType) {
  return (
    <div>page</div>
  )
}
