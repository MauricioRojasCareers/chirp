const Navbar = () => {
  return (
    <div className=" w-full p-4 md:md:max-w-sm bg-red-200">
      <div className="flex justify-around border-2 p-4 gap-4">
        <input
          placeholder="Type something!"
          className="bg-transparent outline-none grow"
        ></input>
        <button>Post</button>
      </div>
    </div>
  );
};

export default Navbar;
