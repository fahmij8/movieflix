import { ErrorApi } from "types/api/error";
import { AsyncStruct } from "types/context";

export interface StructSearchResult extends AsyncStruct {
  data: SearchResult | undefined;
}

export interface SearchResult extends ErrorApi {
  Search: Search[];
  totalResults: string;
  Response: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
