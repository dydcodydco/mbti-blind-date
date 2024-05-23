type Props = {
  params: {userId: string}
}

export default function Page({ params }: Props) {
  const { userId } = params;
  return (
    <div>{userId} 유저 페이지 입니다.</div>
  )
}