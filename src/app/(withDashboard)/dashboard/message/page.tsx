import { Table } from "@/components/ui/table";
import { TMessages } from "@/types/gobol.type";

const MessagePage = async () => {
  const res = await fetch("https://protfilo-server.vercel.app/get-message", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <div className="p-6 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">User Messages</h1>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((msg: TMessages, index: number) => (
              <tr key={index}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MessagePage;
