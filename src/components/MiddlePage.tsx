import Image from "next/image";

export default function MiddlePage() {
  return (
    <div className="min-h-screen bg-black relative bottom-[180px]  text-white flex items-center justify-center px-6">
      <div className="grid mt-10 md:grid-cols-2 gap-7 items-center max-w-6xl">
        {/* Left - Images */}
        <div className="grid grid-cols-2 gap-4">
          <Image src="/food15d.jpeg" alt="Food" width={240} height={150} className="rounded-lg" />
          <Image src="/food4b8fe.jpeg" alt="Food" width={240} height={150} className="rounded-lg mt-[47px]" />
          <Image src="/food3.jpeg" alt="Food" width={170} height={150} className="rounded-lg gap-1" />
          <Image src="/ttt.jpeg" alt="Food" width={140} height={150} className="rounded-lg relative right-[110px]" />
          <Image src="/food2.jpeg" alt="Food" width={200} height={150} className="rounded-lg relative left-[330px] bottom-[270px]" />
          <Image src="/fff.jpeg" alt="Food" width={200} height={150} className="rounded-lg relative left-[47px] bottom-[120px] " />

        </div>

        {/* Right - Content */}
        <div>
          <p className=" text-customOrange italic">Elite&apos;s Choice</p>
          <h1 className="text-4xl font-bold">
            <span className=" text-customOrange">Ex</span>tra ordinary taste <br />
            And Experienced
          </h1>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque dolor diam, pellentesque at fringilla et, blandit a urna.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 ">
            <div className=" bg-customOrange text-center px-4 py-5 rounded-lg ">
              <p>🍔 Fast Food</p>
            </div>
            <div className=" bg-customOrange rounded-lg px-4 text-center py-5 ">
              <p>🍽 Lunch</p>
            </div>
            <div className=" bg-customOrange rounded-lg text-center py-5 px-4 ">
              <p>🍲 Dinner</p>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6 bg-white text-black w-[270px] rounded-lg flex justify-center items-center">
            <span className=" w-7 h-7 py-7 bg-customOrange"></span>
            <span className="text-2xl font-semibold px-14  text-customOrange">30+</span>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}