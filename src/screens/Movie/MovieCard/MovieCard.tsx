import React from "react";
import { useRouter } from "next/navigation";
import { TypeMovie } from "../../../../types/types";
import Image from "next/image";
import styles from "./MovieCard.module.scss";

function MovieCard({ data }: { data: TypeMovie }) {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{data.trackName}</h2>
      <span className={styles.genre}>{data.primaryGenreName}</span>
      <div className={styles.main}>
        <Image
          src={data.artworkUrl100}
          className={styles.image}
          alt={"poster"}
          width={80}
          height={120}
        />
        <div className={styles.info}>
          <h3 className={styles.director}>Director - {data.artistName}</h3>
          <p className={styles.country}>Country - {data.country}</p>
          <button
            onClick={() => router.push(data.trackViewUrl)}
            className={styles.button}
          >
            Watch On ITunes
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
