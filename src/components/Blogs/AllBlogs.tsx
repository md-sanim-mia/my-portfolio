"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TBlogs } from "@/types/gobol.type";
import { deleteBlog } from "@/utils/serverAction";
import { Delete, Edit } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
const AllBlogs = ({ data }: { data: TBlogs[] }) => {
  const handileCliceDeleted = async (id: string) => {
    const result = await deleteBlog(id);
    console.log(result);
    toast.success("success fully  blog deleted");
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="text-white">
            <TableHead className="text-white">Author Name</TableHead>
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="text-white">Date</TableHead>
            <TableHead className="text-white">Updated Blog</TableHead>
            <TableHead className="text-right text-white">
              {" "}
              Delted Blog
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: TBlogs, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item?.author}</TableCell>
              <TableCell>{item?.title}</TableCell>
              <TableCell>{item?.date}</TableCell>
              <TableCell>
                <Link href={`/dashboard/allblogs/${item?._id}`}>
                  {" "}
                  <Edit className="hover:text-red-600 cursor-pointer" />
                </Link>
              </TableCell>
              <TableCell
                className="text-right grid justify-end pr-6
              "
              >
                <Delete
                  className="hover:text-red-600 cursor-pointer"
                  onClick={() => handileCliceDeleted(item?._id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBlogs;
