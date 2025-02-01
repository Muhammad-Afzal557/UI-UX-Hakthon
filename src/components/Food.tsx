import Image from "next/image"

const Food = () => {
  return (
    <div className=' w-[1370px] bg-black h-[462px] relative bottom-44  flex'>
    <div className=" ml-28 mt-14">
        <div className=''>
      <h1 className='font-greatVibes text-customOrange italic text-2xl  ml-[470px]'>Food Categaroy</h1>
      <h1 className=' text-customOrange text-4xl ml-[400px] flex'>Ch <p className=' text-white'>oose Food Iteam</p></h1>
      </div>
      <div className=' flex gap-7 mt-8 ml-4 sm:flex-wrap'>
        <div className=' flex'>
    <Image src="sssssf96.jpeg" alt="" className=' w-[240px] h-[240px] rounded-[8px]'  />
    sdf
    </div>

    <Image src="assdffe7f3.jpeg" alt=""  className=' w-[240px] h-[240px] rounded-[8px]'/>
    <Image src="qq928.jpeg" alt="" className=' w-[240px] h-[240px] rounded-[8px]' />
    <Image src="vvvvf40c2fc.jpeg" alt=""  className=' w-[240px] h-[240px] rounded-[8px]'/>
      </div>

    </div>
    </div>

  )
}

export default Food
