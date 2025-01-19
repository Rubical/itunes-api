import React from "react";
import Image from "next/image";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Oops. Nothing was found.</p>
      <Image
        src={"/not-found.png"}
        alt="nothing-found"
        width={180}
        height={130}
        className={styles.image}
      />
    </div>
  );
}

export default NotFound;
