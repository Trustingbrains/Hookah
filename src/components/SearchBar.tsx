import { Search, Mic } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }: { searchTerm: string; setSearchTerm: (val: string) => void }) => (
  <div className="relative px-4 pb-4">
    <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    <input
      type="text"
      placeholder='Search "hookah flavors"'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full pl-12 pr-12 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
    />
    <Mic className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
  </div>
);

export default SearchBar;
