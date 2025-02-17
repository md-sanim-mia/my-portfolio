import BlogForm from "@/components/Blogs/BlogForm";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession, Session } from "next-auth";
import React from "react";
export const metadata: Metadata = {
  title: "Sanim Mia | Created blog",
};
const AddBlogPage = async () => {
  const session: Session | null = await getServerSession(authOptions);
  return (
    <div>
      {" "}
      <BlogForm session={session} />{" "}
    </div>
  );
};
export default AddBlogPage;
