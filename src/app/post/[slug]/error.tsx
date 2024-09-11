"use client";

import Link from "next/link";
import styles from "./error.module.scss";

const Error = () => {
  return (
    <div className={styles.error}>
      <h1>Ops, essa página não existe!</h1>
      <Link href={"/"}>Voltar para a Home</Link>
    </div>
  );
};

export default Error;
