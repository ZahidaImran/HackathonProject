export default function FilterSection() {
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t-2 border-b-2 border-[#E5E5E5] py-4 px-4 md:px-6 bg-white">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                <span className="text-[#737373] text-sm sm:text-base font-bold">Showing all 12 results</span>
            </div>

            {/* Views and Sorting Controls */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
                {/* Views Options */}
                <div className="flex items-center justify-center space-x-2">
                    <span className="text-[#737373] font-bold text-sm">Views:</span>
                    <button className="p-2 border rounded hover:bg-gray-200 focus:outline-none">
                        {/* Grid View Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-5 w-5 text-[#252B42]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h4v4H4zM4 14h4v4H4zM14 6h4v4h-4zM14 14h4v4h-4z" />
                        </svg>
                    </button>
                    <button className="p-2 border rounded hover:bg-gray-200 focus:outline-none">
                        {/* List View Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-5 w-5 text-[#252B42]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Sorting Dropdown */}
                <div className="w-full md:w-auto">
                    <select className="w-full md:w-auto p-2 border rounded text-[#737373] focus:outline-none">
                        <option value="popularity">Popularity</option>
                        <option value="price">Price: Low to High</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>

                {/* Filter Button */}
                <div className="w-full md:w-auto">
                    <button className="w-full md:w-auto px-4 py-2 text-white bg-[#23A6F0] rounded hover:bg-[#1D8CC8] focus:outline-none">
                        Filter
                    </button>
                </div>
            </div>
        </div>

    )
}