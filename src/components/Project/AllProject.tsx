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
import { TProject } from "@/types/gobol.type";
import { deleteProject } from "@/utils/serverAction";
import { Delete, Edit } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const AllProject = ({ data }: { data: TProject[] }) => {
  const handileCliceDeleted = async (_id: string) => {
    await deleteProject(_id);
    toast.success("success fully  project deleted");
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="text-white">
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="text-white">Date</TableHead>
            <TableHead className="text-white"> Duration</TableHead>
            <TableHead className="text-white">Update Project</TableHead>
            <TableHead className="text-right text-white">
              Deleted Project
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: TProject, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item?.title}</TableCell>
              <TableCell>{item?.date}</TableCell>
              <TableCell>{item?.duration}</TableCell>
              <TableCell>
                <Link href={`/dashboard/allproject/${item?._id}`}>
                  {" "}
                  <Edit className="hover:text-red-600 cursor-pointer" />
                </Link>
              </TableCell>
              <TableCell className="text-right grid justify-end pr-6">
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

export default AllProject;
