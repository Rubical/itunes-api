import React from "react";
import { useRouter } from "next/navigation";
import { TypeBook } from "../../../../types/types";
import Image from "next/image";
import styles from "./BookCard.module.scss";

function BookCard({ data }: { data: TypeBook }) {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <Image
        src={data.artworkUrl100}
        className={styles.image}
        alt={"poster"}
        width={80}
        height={120}
      />
      <p className={styles.genre}>{data.genres[0]}</p>
      <h2 className={styles.title}>
        {data.artistName} - {data.trackName}
      </h2>
      <div className={styles.infoContainer}>
        <div className={styles.infoBox}>
          <p className={styles.infoTitle}>Rating</p>
          <p className={styles.infoText}>{data.averageUserRating}</p>
        </div>
        <div className={styles.infoBox}>
          <p className={styles.infoTitle}>Rating count</p>
          <p className={styles.infoText}>{data.userRatingCount}</p>
        </div>
        <div className={styles.infoBox}>
          <p className={styles.infoTitle}>Price</p>
          <p className={styles.infoText}>${data.price}</p>
        </div>
      </div>
      <button
        onClick={() => router.push(data.trackViewUrl)}
        className={styles.button}
      >
        Read On ITunes
      </button>
    </div>
  );
}

export default BookCard;
