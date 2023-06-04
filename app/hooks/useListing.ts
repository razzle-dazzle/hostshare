import useSWR from "swr";
// import axios from "axios";
import { ListingModel } from "../model/listing.model";

type FetcherListingsType = () => Promise<{
  data: ListingModel[] | null;
}>;

// https://swr.vercel.app/docs/data-fetching
// const fetcher = (url: string) => axios.get(url).then(res => res.data);
const fetcherListings: FetcherListingsType = () =>
  fetch(`/api/listings`).then((res) => res.json());

const useListings = () => {
  const { data, error, isLoading } = useSWR(`/api/listings`, fetcherListings);

  return {
    data,
    isLoading,
    isError: error,
  };
};

type FetcherPropertyType = (id: string) => Promise<{
  data: ListingModel | null;
}>;

/** A property is a single Airbnb property */
const fetcherProperty: FetcherPropertyType = (id) =>
  fetch(`/api/listings/item/${id}`).then((res) => res.json());

const useProperty = (id: string) => {
  const { data, error, isLoading } = useSWR(`/api/listings/item/${id}`, () =>
    fetcherProperty(id)
  );

  if (!id) {
    // throw new Error('No ID!');
    return {
      data: null,
      isLoading: true,
      isError: false,
    };
  }

  return {
    data,
    isLoading,
    isError: error,
  };
};

export { useListings, useProperty };
