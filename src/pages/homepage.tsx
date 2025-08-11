import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Banners from "../components/Banners";
import ProductGrid from "../components/ProductGrid";
import MoreProductsGrid from "../components/MoreProductsGrid";
import FreeDeliveryBanner from "../components/FreeDeliveryBanner";

import BottomNavigation from "../components/BottomNavigation";


const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow px-4 py-2 space-y-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Banners />
        <ProductGrid selectedCategory={selectedCategory} searchTerm={searchTerm} />
        <FreeDeliveryBanner />
        <MoreProductsGrid selectedCategory={selectedCategory} searchTerm={searchTerm} />
      </main>

      
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
