// import { fakePost } from '@/fake-data';
// import { PostModel } from "@/models/post.model";
// import BcnPostService from "@/services/post.service";
// import type { NextApiRequest, NextApiResponse } from "next";

// export default async function postHandler(
//   req: NextApiRequest,
//   res: NextApiResponse<{
//     data: PostModel | null;
//   }>
// ) {
//   // return res.status(200).json({ data: fakePost });

//   const { query, method } = req;
//   // const id = parseInt(query.id as string, 10);
//   const id = query.id as string;
  
//   switch (method) {
//     case "GET": {
//       // fetch post data
//       const post = await BcnPostService.fetchPostById("foo", id);
//       if (!post) {
//         res.status(200).json({ data: null });
        
//       } else {
//         res.status(200).json({ data: post });
//       }
//       break;
//     }
//     // case "PUT":
//     //   // Update or create data in your database
//     //   res.status(200).json({ id, name: name || `User ${id}` });
//     //   break;
//     default: {
//       // res.setHeader("Allow", ["GET", "PUT"]);
//       res.setHeader("Allow", ["GET"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//     }
//   }
// }
