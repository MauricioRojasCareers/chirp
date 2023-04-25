import { useState } from "react";
import { BiRepost } from "react-icons/bi";

export const Repost = () => {
  const [repost, setRepost] = useState(false);
  return (
    <>
      <div className="items-center flex cursor-pointer">
        <button onClick={() => setRepost((prevState) => !prevState)}>
          <BiRepost size={25} className={repost ? "fill-green-600" : ""} />
        </button>
      </div>
    </>
  );
};
