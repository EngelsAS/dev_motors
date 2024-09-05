import { Clock, Mail, Map, Phone } from "lucide-react";
import styles from "./styles.module.scss";
import { HomeProps } from "@/utils/types/home.type";

export const Footer = ({ object }: HomeProps) => {
  return (
    <footer id="contatos" className={styles.footer}>
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>

        <div className={styles.content}>
          <article className={styles.item}>
            <Mail size={28} color="#fff" />
            <div>
              <strong>Email</strong>
              <p>{object.metadata.contact.email}</p>
            </div>
          </article>
          <article className={styles.item}>
            <Phone size={28} color="#fff" />
            <div>
              <strong>Telefone</strong>
              <p>{object.metadata.contact.phone}</p>
            </div>
          </article>
          <article className={styles.item}>
            <Map size={28} color="#fff" />
            <div>
              <strong>Endereço</strong>
              <p>{object.metadata.contact.adress}</p>
            </div>
          </article>
          <article className={styles.item}>
            <Clock size={28} color="#fff" />
            <div>
              <strong>Horário</strong>
              <p>{object.metadata.contact.time}</p>
            </div>
          </article>
        </div>
      </section>

      <a
        href={object.metadata.cta_button.url}
        target="_blank"
        className={styles.link}
      >
        <Phone size={24} color="#fff" />
        {object.metadata.cta_button.title}
      </a>

      <p className={styles.copyText}>
        Todos os direitos reservados {object.title} @
        {`${new Date().getFullYear()}`}
      </p>
    </footer>
  );
};
