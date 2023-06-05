import { notFound } from "next/navigation";
// import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { useProperty } from '@/app/hooks/useListing';
import { useRouter } from "next/router";

export default async function ItemPage() {
  const router = useRouter();
  const id: string = (router.query.id as string) ?? "";
  const { data, isLoading, isError } = useProperty(id);
  const post = data && data.data;

  
  if (!post) {
    notFound();
  }

  // const [allViews, tweets] = await Promise.all([
  //   getViewsCount(),
  //   getTweets(post.tweetIds),
  // ]);

  return (
    <section className="w-full max-w-7xl m-auto relative pb-8">
      {/* <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script> */}
      <div>
        <h1 className="font-bold text-3xl text-black dark:text-white">
          {/* <Balancer>{post.title}</Balancer> */}
          {post.info.title}
        </h1>
        
        {/* <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm">
          <div className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md px-2 py-1 tracking-tighter">
            {post.publishedAt}
          </div>
          <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
          
        </div>
        
        <div className="my-8 mt-12 text-neutral-800 dark:text-orange-300 text-xl">
          <Link href="/projects">&laquo; Back to all projects</Link>
        </div> */}
      </div>
    </section>
  );
}
