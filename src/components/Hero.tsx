
import Image from "next/image"

const Hero = () => {
  return (
    <div className=' '>
      <div className=' flex  '>
        <div className=' h-[110px] w-[0.1px]  mt-[48px] ml-[100px] border-[1px] font-thin'>
        </div>
        <div className=' ml-8 mt-4 '>
        <h1 className=' font-greatVibes text-customOrange  mt-24 italic text-2xl'>Its Quick & Amusing!</h1>
        <h1 className=' flex text-customOrange text-5xl w-[470px] '>Th<p className=' text-white'>
          e Art of speed<p className=' relative right-[50px] 5'>food Quality  </p></p></h1>
          <p className=' w-[280px] text-[11px] text-justify mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium veniam, fugiat velit consequature</p>
      <button className=' bg-customOrange p-2 pl-7 pr-7 mt-7 rounded-[100px] text-sm'>See Menu</button>
        </div>
         {/* right side of hero  */}
        <div className=' w-[800px] h-[670] mt-20 ml-5  '>
       <Image src="090e8f8.png" alt=""  className=' w-[240px] h-[240px] rotate-90 ml-[270px] mt-14'/>
       <div className=' w-[300px] h-[300px] ml-10 border-solid border-[1px] rounded-[300px] relative bottom-[240px] '>
       <Image src="4cfe9d.png" alt="" className=' w-[80px] h-[80px] relative left-4'/>
       <Image src="8aaaaaaaa.png" alt="" className=' w-[72px] h-[72px] relative top-2 right-8'/>
       <Image src="0fdb.png" alt="" className=' w-[50px] h-[50px] relative right-3'/>
       <Image src="2bdba8148c7.png" alt="" className=' w-[40px] h-[40px] relative left-[60px]'/>
       {/* main image  */}
         <div className=' w-[400px] h-[400px] relative bottom-[270px] left-[0px] bg-hero-pattern bg-repeat bg-cover bg-bottom '>

         </div>

       </div>
        </div>
      </div>
      <div className=' relative bottom-[400px] h-[110px] w-[0.1px]   ml-[100px] border-[1px] font-thin'>
        </div>
    </div>
  )
}

export default Hero



// <Image src="15aa0f490ba.png" alt=""  className=' relative  bottom-[400px] left-[70px]  w-[624px] h-[633px] '/>