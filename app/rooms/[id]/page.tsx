import { notFound } from "next/navigation";
// import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { ApiResponse } from '@/app/service/http/api.interface';
import { RoomInfo } from '@/app/model/listing.model';

async function getData(id: string): Promise<ApiResponse<RoomInfo>> {
  const res = await fetch(`http://localhost:3000/api/listings/room/${id}`);

  if (!res.ok) {
    // Activate the closest `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ItemPage() {
  // const router = useRouter();
  // const id: string = (router.query.id as string) ?? "";
  const id = "123";
  // const { data, isLoading, isError } = useRoom(id);
  // const post = data && data.data;

  const resp = await getData("22995081");
  const { data } = resp;

  if (!data) {
    notFound();
  }

  return (
    <section className="w-full max-w-7xl m-auto relative pb-8">
      {/* <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script> */}
      <div>
        <h1 className="font-bold text-3xl text-black dark:text-white">
          {/* <Balancer>{post.title}</Balancer> */}
          {data.title}
        </h1>
        
        
      </div>
    </section>
  );
}
