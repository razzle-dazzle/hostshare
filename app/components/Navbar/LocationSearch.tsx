"use client";

import { Locations } from "@/app/model/listing.model";
import { ApiResponse } from "@/app/service/http/api.interface";
import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import useSWR from "swr";

type FetcherLocationsType = () => Promise<ApiResponse<Locations[]>>;

const fetcherLocations: FetcherLocationsType = () =>
  fetch(`/api/locations`).then((res) => res.json());

type ResultItem =
  | Locations
  | {
      id: number;
      name: string;
    };

const LocationSearch = () => {
  const { data, error, isLoading } = useSWR(`/api/locations`, fetcherLocations);
  if (isLoading) {
    return <div className="w-[300px] md:w-[370px] my-4">Loading...</div>;
  }

  const handleOnSearch = (string: string, results: any) => {
    console.log("Handle on search here");
    // console.log(string, results);
  };

  const handleOnSelect = (item: any) => {
    // console.log(item);
  };

  const formatResult = (item: Locations & { id: string; name: string }) => {
    return (
      <div className="result-wrapper">
        <span className="result-span">{item.city}, </span>
        <span className="result-span">{item.country}</span>
      </div>
    );
  };

  const items: ResultItem[] = (data && data.data ? data.data : []).map((d) => {
    return {
      ...d,
      id: d.city,
      name: `${d.city}, ${d.country}`,
    };
  });

  return (
    <div className="w-[300px] sm:w-[370px] md:w-[470px] lg:w-[570px] my-4">
      <ReactSearchAutocomplete<ResultItem>
        items={items}
        formatResult={formatResult}
        onSearch={handleOnSearch}
        // onSelect={handleOnSelect}
        // onClear={handleOnClear}
        styling={{ zIndex: 4 }} // To display it on top of the search box below
        autoFocus
        maxResults={8}
        placeholder="Search destinations"
      />
      {/* <div style={{ marginTop: 20 }}>This text will be covered!</div> */}
    </div>
  );
};
export default LocationSearch;
