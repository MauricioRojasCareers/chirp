import { HeartButton } from "./HeartButton";
import { Hello } from "./Hello";
import { dummy } from "../data/Dummy";
import { Repost } from "./Repost";

const ListingCard = () => {
  return (
    <div className="hover:bg-zinc-800 p-4 flex flex-row gap-3 border-b-2 ">
      <Hello data={dummy} />
      <Repost />
      <HeartButton />
    </div>
  );
};

export default ListingCard;
