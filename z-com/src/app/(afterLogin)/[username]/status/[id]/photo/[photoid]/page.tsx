import Home from "@/app/(beforeLogin)/page";

type Props = {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
};

export default function page({ params }: Props) {
  return <Home />;
}
