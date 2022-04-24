import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Contact", link: "/contact" },
    { id: 2, name: "Home", link: "/" },
    { id: 3, name: "Work", link: "/project" },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.mail_container}>
        <p>contact@devazur.fr</p>
      </div>
      <div className={styles.link}>
        {items.map((item) => {
          return (
            <div key={item.id} className={styles.listItem}>
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.icons_container}>
        <Link href="https://github.com/DevAzur">
          <a>
            <GithubOutlined />
          </a>
        </Link>
        <Link href="https://github.com/DevAzur">
          <a>
            <LinkedinOutlined />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
