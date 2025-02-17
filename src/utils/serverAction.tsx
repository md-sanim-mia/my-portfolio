"use server";

import { revalidateTag } from "next/cache";

export async function deleteProject(id: string) {
  const res = await fetch(
    `https://protfilo-server.vercel.app/deleted-project/${id}`,
    {
      method: "DELETE",
    }
  );
  const result = await res.json();
  console.log(result);

  revalidateTag("projects");
}
export async function deleteBlog(id: string) {
  const res = await fetch(
    `https://protfilo-server.vercel.app/deleted-blog/${id}`,
    {
      method: "DELETE",
    }
  );
  const result = await res.json();
  console.log(result);

  revalidateTag("blogs");
}
