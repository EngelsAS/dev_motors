"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { MenuProps } from "@/utils/types/menu.type";

interface SubmenuProps {
  menu: MenuProps;
}

export const Submenu = ({ menu }: SubmenuProps) => {
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
        {menu.objects.map((item, index) => (
          <li key={index}>
            <Link href={`/post/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
