import React from "react";
import styles from "./SearchedCard.module.scss";
import { TypeMovie } from "../../../../../types/types";
import Image from "next/image";

function SearchedCard({
  data,
}: {
  data: Pick<TypeMovie, "artistName" | "trackName" | "artworkUrl100">;
}) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={data.artworkUrl100}
        alt="img"
        width={40}
        height={60}
      />
      <div className={styles.additional}>
        <p className={styles.track}>{data.trackName}</p>
        <p className={styles.artist}>{data.artistName}</p>
      </div>
    </div>
  );
}

export default SearchedCard;
