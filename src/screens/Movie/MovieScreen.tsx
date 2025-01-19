"use client";

import { useGetBaseMoviesQuery } from "@/libs/ITunesApi";
import { getRandomData } from "@/utils/getRandomData";
import Loader from "@/components/UI/Loader/Loader";
import MovieCard from "@/screens/Movie/MovieCard/MovieCard";
import styles from "./MovieScreen.module.scss";

export default function MovieScreen() {
  const { data, isLoading } = useGetBaseMoviesQuery();

  const randomizedData = data ? getRandomData(data, 12) : [];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={styles.main}>
      {randomizedData.map((el, index) => (
        <MovieCard key={index} data={el} />
      ))}
    </main>
  );
}
