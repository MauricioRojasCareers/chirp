const Navbar = () => {
  return (
    <div className="h-20 w-full p-4 mt-20">
      <div className="flex justify-around">
        <input
          placeholder="Type something!"
          className="bg-transparent outline-none "
        ></input>
        <button>Post</button>
      </div>
    </div>
  );
};

export default Navbar;
