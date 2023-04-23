import { useState } from "react";
import ListingCard from "./components/ListingCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex flex-row p-4">
        <div className="p-2 ">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>
    </>
  );
}

export default App;
