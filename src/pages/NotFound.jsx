import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-Full flex items-center justify-center bg-gray-100 flex-col">
      <h1 className="text-6xl ">Oops !! NOT FOUND</h1>
      <Link
        to="/"
        className="mt-5 px-7 py-3 font-semibold bg-violet-500 hover:bg-violet-800 cursor-pointer text-white rounded-xl"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
