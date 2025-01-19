"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useSearchDataQuery } from "@/libs/ITunesApi";
import { AlignJustify, X } from "lucide-react";
import Loader from "@/components/UI/Loader/Loader";
import NotFound from "@/components/UI/NotFound/NotFound";
import SearchedCard from "@/components/Layout/Header/SearchedCard/SearchedCard";
import styles from "./Header.module.scss";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const router = useRouter();
  const path = usePathname();

  const { register, watch } = useForm();
  const inputData = watch("search");

  const { data, error, isFetching } = useSearchDataQuery(inputData, {
    skip: !inputData,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    setMobileNav(false);
  }, [path]);

  useEffect(() => {
    if (typeof window !== "undefined" && mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNav]);

  const checkIsActivePage = (currentPath: string) => {
    return path === currentPath;
  };

  return (
    <header className={styles.header}>
      <button onClick={() => router.push("/")} className={styles.headerLogo}>
        <Image src={"/logo.png"} alt="logo" width={50} height={50} />
        <p className={styles.headerLogoText}>CaTunes</p>
      </button>
      <div className={styles.desktopNav}>
        <button
          onClick={() => router.push("/")}
          className={`${styles.desktopNavLink} ${
            checkIsActivePage("/") && styles.desktopNavLink__active
          }`}
        >
          Movie
        </button>
        <button
          onClick={() => router.push("/music")}
          className={`${styles.desktopNavLink} ${
            checkIsActivePage("/music") && styles.desktopNavLink__active
          }`}
        >
          Music
        </button>
        <button
          onClick={() => router.push("/book")}
          className={`${styles.desktopNavLink} ${
            checkIsActivePage("/book") && styles.desktopNavLink__active
          }`}
        >
          Book
        </button>
      </div>
      <div
        className={`${styles.mobileNavMenu} ${
          !mobileNav ? styles.mobileNavMenu__hidden : ""
        }`}
      >
        <button
          className={`${styles.mobileNavLink} ${
            checkIsActivePage("/") && styles.mobileNavLink__active
          }`}
          onClick={() => {
            router.push("/");
          }}
        >
          Movie
        </button>
        <button
          className={`${styles.mobileNavLink} ${
            checkIsActivePage("/music") && styles.mobileNavLink__active
          }`}
          onClick={() => {
            router.push("/music");
          }}
        >
          Music
        </button>
        <button
          className={`${styles.mobileNavLink} ${
            checkIsActivePage("/book") && styles.mobileNavLink__active
          }`}
          onClick={() => {
            router.push("/book");
          }}
        >
          Book
        </button>
      </div>
      <button
        onClick={() => setMobileNav((prevState) => !prevState)}
        className={styles.mobileMenuToggle}
      >
        {mobileNav ? <X /> : <AlignJustify />}
      </button>

      <form
        onSubmit={(event) => event.preventDefault()}
        className={styles.searchBar}
      >
        <input
          placeholder="Music, films, books..."
          className={styles.searchBarInput}
          {...register("search")}
          autoComplete="off"
        />
        <div
          className={`${styles.searchResultsDropdown} ${
            inputData && styles.searchResultsDropdown__visible
          }`}
        >
          {isFetching ? (
            <Loader />
          ) : error || !data?.resultCount ? (
            <NotFound />
          ) : (
            data.results.map((el, index) => (
              <SearchedCard key={index} data={el} />
            ))
          )}
        </div>
      </form>
    </header>
  );
}

export default Header;
