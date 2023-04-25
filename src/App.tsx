import { Header } from "./components/Header/Header";
import ListingCard from "./components/ListingCard";
import Navbar from "./components/Navbar";

import { SlSocialTwitter } from "react-icons/sl";

function App() {
  return (
    <>
      <div className="flex flex-row fixed">
        <div className="left-0 w-[20%] p-2 h-screen bg-green-800 flex justify-around items-center flex-col">
          <SlSocialTwitter size={25} />
          <SlSocialTwitter size={25} />
          <SlSocialTwitter size={25} />
          <SlSocialTwitter size={25} />
          <SlSocialTwitter size={25} />
          <SlSocialTwitter size={25} />
          <SlSocialTwitter size={25} />
          <SlSocialTwitter size={25} />
          <SlSocialTwitter size={25} />
          <SlSocialTwitter size={25} />
        </div>
        <div className="flex flex-col items-center w-screen bg-red-600">
          <Header />

          {/* <Navbar />
          <ListingCard /> */}
        </div>
      </div>
    </>
  );
}

export default App;
