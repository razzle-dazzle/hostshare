import { Locations } from '@/app/model/listing.model';
import { ApiResponse } from '@/app/service/http/api.interface';
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

async function getData(): Promise<ApiResponse<Locations[]>> {
  const res = await fetch("http://localhost:3000/api/locations", {
    // cache: "no-store",
  });

  if (!res.ok) {
    // Activate the closest `error.ts` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


type ResultItem = Locations | {
  id: number;
  name: string;
}

const LocationSearch = async () => {
  const resp = await getData();
  const { data } = resp;
  const items = (data || []).map(d => {
    return {
      ...d,
      id: d.city,
      name: `${d.city}, ${d.country}`,
    }
  });
  
  const handleOnSearch = (string: string, results: any) => {
    console.log(string, results);
  };

  const handleOnSelect = (item: any) => {
    // console.log(item);
  };
  
  const formatResult = (item: Locations & { id: string, name: string}) => {
    return (
      <div className="result-wrapper">
        <span className="result-span">{item.city}, </span>
        <span className="result-span">{item.country}</span>
      </div>
    );
  };

  return (
    <div className="w-[380px] my-4">
      <ReactSearchAutocomplete<ResultItem>
        items={items}
        formatResult={formatResult}
        onSearch={handleOnSearch}
        // onSelect={handleOnSelect}
        // onClear={handleOnClear}
        styling={{ zIndex: 4 }} // To display it on top of the search box below
        autoFocus
        placeholder='Search destinations'
      />
      {/* <div style={{ marginTop: 20 }}>This text will be covered!</div> */}
    </div>
  );
};
export default LocationSearch;
