import { getItemBySlug } from "@/utils/actions/get-data";
import styles from "./styles.module.scss";
import { PostProps } from "@/utils/types/post.type";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import Image from "next/image";
import { Metadata } from "next";

export const generateMetadata = async ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  try {
    const { objects }: PostProps = await getItemBySlug(slug);

    return {
      title: `DevMotors - ${objects[0].title}`,
      description: `${objects[0].metadata.description.text}`,
      keywords: [
        "devmotors",
        "troca de oleo",
        "troca de óleo",
        "devmotors troca de oleo",
      ],
      openGraph: {
        images: [objects[0].metadata.banner.url],
        title: `DevMotors - ${objects[0].title}`,
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "DevMotors - Sua oficina especializada!",
      description: "Oficina de carros.",
    };
  }
};

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { objects }: PostProps = await getItemBySlug(slug);

  return (
    <>
      <Hero
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        heading={objects[0].title}
        icon={<Phone size={24} color="#fff" />}
      />

      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url}
                target="_blank"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              fill={true}
              src={objects[0].metadata.description.banner.url}
              sizes="(min-width: 768px) 100vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Page;
