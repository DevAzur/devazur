import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { GithubOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Services", link: "/services" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
  ]);

  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.title}>
          DEV<span className={styles.azur}>AZUR</span>
        </a>
      </Link>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className={styles.listItem}>
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.icons_container}>
        <GithubOutlined />
        <Link href="https://github.com/DevAzur">
          <a className={styles.icons_title}>Github</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
