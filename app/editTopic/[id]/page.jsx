import TopicForm from "@/components/TopicForm";
const getDetailById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
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
export default async function EditTopic({ params }) {
  const { id } = params;
  const { item } = await getDetailById(id);
  return <TopicForm id={id} item={item} />;
}
