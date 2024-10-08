import { HomeProps } from "@/utils/types/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";

export const Services = ({ object }: HomeProps) => {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>

        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="Imagem ilustrativa sobre a empresa"
            quality={100}
            fill={true}
            sizes="(min-width: 768px) 100vw"
            src={object.metadata.about.banner.url}
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.services}>
        {object.metadata.services.map((service, index) => (
          <article className={styles.service} key={index}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="Imagem do serviço"
                quality={100}
                fill={true}
                sizes="(min-width: 768px) 100vw"
                src={service.image.url}
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
};
