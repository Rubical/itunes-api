"use client";

import { useGetBaseMusicQuery } from "@/libs/ITunesApi";
import { getRandomData } from "@/utils/getRandomData";
import Loader from "@/components/UI/Loader/Loader";
import MusicCard from "@/screens/Music/MusicCard/MusicCard";
import styles from "./MusicScreen.module.scss";

export default function MusicScreen() {
  const { data, isLoading } = useGetBaseMusicQuery();

  const randomizedData = data ? getRandomData(data, 20) : [];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={styles.main}>
      {randomizedData.map((el, index) => (
        <MusicCard key={index} data={el} />
      ))}
    </main>
  );
}
