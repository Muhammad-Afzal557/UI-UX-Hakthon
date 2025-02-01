import { FaUtensils, FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";

export default function StatS() {
  return (
    <div className=" bg-black  text-white">
      <div className=" py-14 opacity-40   bg-black  mx-auto  grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative bottom-[190px]">
        {/* Professional Chefs */}
        <div className="flex flex-col items-center">
          <GiChefToque className=" text-customOrange text-5xl mb-2" />
          <p className="text-lg">Professional Chefs</p>
          <h2 className="text-2xl font-bold">420</h2>
        </div>

        {/* Items of Food */}
        <div className="flex flex-col items-center">
          <FaHamburger className=" text-customOrange text-5xl mb-2" />
          <p className="text-lg">Items Of Food</p>
          <h2 className="text-2xl font-bold">320</h2>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col items-center">
          <FaUtensils className=" text-customOrange text-5xl mb-2" />
          <p className="text-lg">Years Of Experience</p>
          <h2 className="text-2xl font-bold">30+</h2>
        </div>

        {/* Happy Customers */}
        <div className="flex flex-col items-center">
          <FaPizzaSlice className=" text-customOrange text-5xl mb-2" />
          <p className="text-lg">Happy Customers</p>
          <h2 className="text-2xl font-bold">220</h2>
        </div>
      </div>
    </div>
  );
}