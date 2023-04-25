import { HeartButton } from "./HeartButton";
import { Text } from "./Text";
import { dummy } from "../data/Dummy";
import { Repost } from "./Repost";

const ListingCard = () => {
  return (
    <>
      {/* <div className="border-b-2 pb-3">
        <div className="flex  gap-4  mt-4 text-sm">
          <Text data={dummy} />
        </div>
        <div className="flex flex-row gap-2 justify-center">
          <Repost />
          <HeartButton />
        </div>
      </div> */}
      {/* 
      <div className=" w-full p-4 md:md:max-w-sm bg-red-200">
        <div className="flex justify-around border-2 p-4 gap-4">
          <input
            placeholder="Type something!"
            className="bg-transparent outline-none grow"
          ></input>
          <button>Post</button>
        </div>
      </div> */}

      <div className="bg-green-200 md:md:max-w-xl  p-2">
        <Text data={dummy} />
      </div>
    </>
  );
};

export default ListingCard;
