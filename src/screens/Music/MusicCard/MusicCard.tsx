import React from "react";
import { useRouter } from "next/navigation";
import { TypeMusic } from "../../../../types/types";
import Image from "next/image";
import styles from "./MusicCard.module.scss";

function MusicCard({ data }: { data: TypeMusic }) {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <Image
        src={data.artworkUrl100}
        className={styles.image}
        alt={"poster"}
        width={60}
        height={60}
      />
      <div className={styles.info}>
        <h3 className={styles.artist}>{data.artistName}</h3>
        <h4 className={styles.composition}>{data.trackName}</h4>
      </div>
      <button
        onClick={() => router.push(data.trackViewUrl)}
        className={styles.button}
      >
        Listen On ITunes
      </button>
    </div>
  );
}

export default MusicCard;
