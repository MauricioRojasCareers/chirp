import { AiFillHeart } from "react-icons/ai";

import { useState } from "react";

export const HeartButton = () => {
  const [like, setLike] = useState(false);

  return (
    <div className="flex items-center ">
      <button onClick={() => setLike((prevState) => !prevState)}>
        <AiFillHeart className={like ? "fill-rose-500" : ""} size={25} />
      </button>
    </div>
  );
};
