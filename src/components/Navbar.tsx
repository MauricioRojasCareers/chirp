const Navbar = () => {
  return (
    <div className="h-20 w-full p-4 mt-20">
      <div className="flex justify-around border-2 p-4 gap-4">
        <input
          placeholder="Type something!"
          className="bg-transparent outline-none grow"
        ></input>
        <button>Post</button>
        <p>Small change</p>
      </div>
    </div>
  );
};

export default Navbar;
