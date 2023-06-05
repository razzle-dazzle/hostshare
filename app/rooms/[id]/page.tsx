import { notFound } from "next/navigation";
// import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { useRoom } from '@/app/hooks/useListing';
// import { useRouter } from "next/router";

export default async function ItemPage() {
  // const router = useRouter();
  // const id: string = (router.query.id as string) ?? "";
  const id = "123";
  const { data, isLoading, isError } = useRoom(id);
  const post = data && data.data;

  
  if (!post) {
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
          {post.title}
        </h1>
        
        
      </div>
    </section>
  );
}
