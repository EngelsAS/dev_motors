import { getItemBySlug } from "@/utils/actions/get-data";
import styles from "./styles.module.scss";
import { PostProps } from "@/utils/types/post.type";

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { objects }: PostProps = await getItemBySlug(slug);
  console.log(objects);

  return <div>page</div>;
};

export default Page;
