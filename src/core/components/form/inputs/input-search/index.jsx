import { IoMdSearch } from "react-icons/io";

export default function InputSearch() {
  return (
    <div>
      <div className="flex md:order-2">
        <div className="relative md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoMdSearch classNameName="text-gray-500" />
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full min-w-32 p-2 ps-10 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-sky-100"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}
