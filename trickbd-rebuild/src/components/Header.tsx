import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://trickbd.com/wp-content/uploads/2022/01/23/logo.png"
            alt="Trickbd Logo"
            width={150}
            height={50}
          />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-3 py-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
