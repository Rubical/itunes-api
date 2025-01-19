export type TypeMovie = {
  artistName: string;
  trackName: string;
  country: string;
  primaryGenreName: string;
  artworkUrl100: string;
  trackViewUrl: string;
};

export type TypeMusic = {
  artistName: string;
  trackName: string;
  artworkUrl100: string;
  trackViewUrl: string;
};

export type TypeBook = {
  artistName: string;
  trackName: string;
  artworkUrl100: string;
  trackViewUrl: string;
  genres: string[];
  price: number;
  averageUserRating: number;
  userRatingCount: number;
};
