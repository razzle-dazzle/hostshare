"use client";

import useSWR from "swr";
// import axios from "axios";
import { Categories, ListingModel, RoomInfoBasic } from "../model/listing.model";

type FetcherListingsType = () => Promise<{
  data: RoomInfoBasic[] | null;
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

type FetcherRoomType = (id: string) => Promise<{
  data: ListingModel["info"] | null;
}>;

/** A property is a single Airbnb property */
const fetcherRoom: FetcherRoomType = (id) =>
  fetch(`/api/listings/room/${id}`).then((res) => res.json());

const useRoom = (id: string) => {
  const { data, error, isLoading } = useSWR(`/api/listings/room/${id}`, () =>
    fetcherRoom(id)
  );

  if (!id) {
    // @todo...
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



type FetcherCategoriesType = () => Promise<{
  data: Categories[];
}>;
/** A list of categories */
const fetcherCategories: FetcherCategoriesType = () =>
  fetch(`/api/categories`).then((res) => res.json());

const useCategories = () => {
  const { data, error, isLoading } = useSWR('/api/categories', () =>
    fetcherCategories()
  );


  if (!data?.data || data?.data.length === 0) {
    // @todo...
    return {
      data: null,
      isLoading: true,
      isError: true,
    };
  }

  return {
    data,
    isLoading,
    isError: error,
  };
};

export { useListings, useRoom, useCategories };
