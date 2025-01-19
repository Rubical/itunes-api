"use client";

import { useGetBaseBooksQuery } from "@/libs/ITunesApi";
import { getRandomData } from "@/utils/getRandomData";
import Loader from "@/components/UI/Loader/Loader";
import BookCard from "@/screens/Book/BookCard/BookCard";
import styles from "./BookScreen.module.scss";

export default function BookScreen() {
  const { data, isLoading } = useGetBaseBooksQuery();

  const randomizedData = data ? getRandomData(data, 20) : [];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={styles.main}>
      {randomizedData.map((el, index) => (
        <BookCard key={index} data={el} />
      ))}
    </main>
  );
}
