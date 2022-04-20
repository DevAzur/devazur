import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { GithubOutlined } from "@ant-design/icons";
import Image from "next/image";

const Navbar = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Services", link: "/services" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Link href="/">
          <Image src="/images/logo.png" width={120} height={50} className={styles.image}/>
        </Link>
      </div>
      <div className={styles.items_container}>
        {items.map((item) => {
          return (
            <Link href={item.link} key={item.id}>
              <a className={styles.items}>{item.name}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
