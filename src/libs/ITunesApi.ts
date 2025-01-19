import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeBook, TypeMovie, TypeMusic } from "../../types/types";

interface ITunesResponse<T> {
  resultCount: number;
  results: T[];
}

export const iTunesApi = createApi({
  reducerPath: "iTunesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://itunes.apple.com/search" }),
  endpoints: (builder) => ({
    getBaseMovies: builder.query<
      { resultCount: number; results: TypeMovie[] },
      void
    >({
      query: () => `?media=movie&term=a`,
    }),
    getBaseMusic: builder.query<
      { resultCount: number; results: TypeMusic[] },
      void
    >({
      query: () => `?media=music&term=a`,
    }),
    getBaseBooks: builder.query<
      { resultCount: number; results: TypeBook[] },
      void
    >({
      query: () => `?media=ebook&term=a`,
    }),
    searchData: builder.query<
      ITunesResponse<TypeMovie | TypeBook | TypeMusic>,
      { searchParams: string }
    >({
      query: (searchParams) => `?media=all&term=${searchParams}`,
    }),
  }),
});

export const {
  useGetBaseMoviesQuery,
  useGetBaseMusicQuery,
  useGetBaseBooksQuery,
  useSearchDataQuery,
} = iTunesApi;
