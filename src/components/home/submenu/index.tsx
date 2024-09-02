"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export const Submenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toggleMenu}>
        <Menu size={34} color="#121212" />
        Menu
      </div>

      <ul className={`${styles.ul} ${isOpen && styles.open}`}>
        {isOpen && (
          <button onClick={toggleMenu}>
            <X size={54} color="#121212" />
          </button>
        )}

        <li>
          <Link href="/post/pagina-1">Pagina 1</Link>
        </li>
        <li>
          <Link href="/post/pagina-1">Pagina 1</Link>
        </li>
      </ul>
    </section>
  );
};
