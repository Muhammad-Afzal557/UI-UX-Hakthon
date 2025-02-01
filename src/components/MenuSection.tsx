
"use client"
import { useState } from "react";
import Image from "next/image";

const menuCategories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];

const menuItems = [
  { category: "Breakfast", name: "Lettuce Leaf", price: "12.5$", image: "/01b.jpeg" },
  { category: "Breakfast", name: "Fresh Breakfast", price: "14.5$", image: "/02.jpeg" },
  { category: "Breakfast", name: "Mild Butter", price: "12.5$", image: "/03.jpeg" },
  { category: "Breakfast", name: "Fresh Bread", price: "12.5$", image: "/04.jpeg" },
  { category: "Soups", name: "Glow Cheese", price: "12.5$", image: "/glow-cheese.jpg" },
  { category: "Soups", name: "Italian Pizza", price: "14.5$", image: "/italian-pizza.jpg" },
  { category: "Soups", name: "Slice Beef", price: "12.5$", image: "/slice-beef.jpg" },
  { category: "Soups", name: "Mushroom Pizza", price: "12.5$", image: "/mushroom-pizza.jpg" },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Breakfast");


  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl relative bottom-[200px] mx-auto px-6">
        {/* Section Title */}
        <p className="text-customOrange font-greatVibes italic text-center">Elite&apos;s Choice</p>
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-customOrange">Fr</span>om Our Menu
        </h2>

        {/* Categories */}
        <div className="flex justify-center space-x-6 text-lg font-semibold mb-8">
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`${
                activeCategory === category ? "text-customOrange" : "text-gray-400"
              } hover:text-customOrange transition`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Big Image */}
          <div className="flex justify-center">
          <Image 
          src="/Leafs6.png"
          alt="Big Dish"
          width={350} 
          height={350}
          className=" relative left-[280px] bottom-[40px] rotate-12"
          />
            <Image
              src="/bigdishae73b7.png"
              alt="Big Dish"
              width={590}
              height={50}
              className=" relative right-[140px] bottom-[70px]"
            />
          </div>

          {/* Right: Food List */}
          <div className="space-y-4">
            {menuItems
              .filter((item) => item.category === activeCategory)
              .map((item) => (
                <div key={item.name} className="flex items-center space-x-4">
                  <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-400 text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
                  </div>
                  <span className="text-customOrange font-bold">{item.price}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}