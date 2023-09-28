import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch(process.env.BASED_URL + "api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fecth data");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading data: ", error);
  }
};
export default async function TopicsList() {
  const { data } = await getTopics();
  return (
    <>
      {data.map((item) => (
        <div
          key={item._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{item.title}</h2>
            <div>{item.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={item._id} />
            <Link href={`editTopic/${item._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
