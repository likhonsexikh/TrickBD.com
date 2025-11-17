const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Home
            </a>
          </li>
          <li>
            <a href="/android" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Android
            </a>
          </li>
          <li>
            <a href="/freene" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              FreeNet
            </a>
          </li>
          <li>
            <a href="/programming" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Programming
            </a>
          </li>
          <li>
            <a href="/categories" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Categories
            </a>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <a href="/login" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Login
            </a>
          </li>
          <li>
            <a href="/register" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
