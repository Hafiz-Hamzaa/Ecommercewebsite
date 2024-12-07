import Image from "next/image" 
import banner from '@/app/assets/banner-image.png'
import flash from '@/app/assets/flash-img.png'
import item from '@/app/assets/item.png'
import item01 from '@/app/assets/item01.png'
import item02 from '@/app/assets/item02.png'
import item03 from '@/app/assets/item03.png'
import browse from '@/app/assets/browse.png'
import cate1 from '@/app/assets/Category-Camera.png'
import cate2 from '@/app/assets/Category-CellPhone.png'
import cate3 from '@/app/assets/Category-Computer.png'
import cate4 from '@/app/assets/Category-SmartWatch.png'
import cate5 from '@/app/assets/Category-Headphone.png'
import cate6 from '@/app/assets/Category-Gamepad.png'
import product from '@/app/assets/Product.png'
import cart from '@/app/assets/Cart.png'
import cart01 from '@/app/assets/Cart (1).png'
import cart02 from '@/app/assets/Cart (2).png'
import cart03 from '@/app/assets/Cart (3).png'
import explore from '@/app/assets/Explore.png'
import image from '@/app/assets/Image.png'
import heavitem from '@/app/assets/Heavyitem.png'
import icon from '@/app/assets/icons.png'
import icon01 from '@/app/assets/icons01.png'
 export default function Home(){
  return(
    <div>
      <div className="flex flex-wrap px-4 sm:px-10 lg:px-24">
  {/* Sidebar Text */}
  <div className="max-sm:hidden w-full sm:w-1/3 text-[14px] sm:text-[16px] font-normal leading-6 mt-6 sm:mt-10">
    <p className="mb-4 sm:mb-0">
      Womans Fashion <br />
      Mens Fashion <br />
      Electronics <br />
      Home & Lifestyles <br />
      Medicine <br />
      Sports & Outdoor <br />
      Health & Beauty <br />
      Babies & Toys <br />
      Jents Fashion <br />
      Ladies Fashion <br />
      Children Fashion
    </p>
  </div>

  {/* Banner Image */}
  <div className="w-full sm:w-2/3 mt-6 sm:mt-10">
    <Image
      src={banner}
      alt="banner"
      width={1092}
      height={344}
      className="w-full h-auto object-cover"
    />
  </div>
</div>

{/* Flash Image */}
<div className="mt-16 flex justify-center px-4">
  <Image
    src={flash}
    alt="img"
    className="w-full sm:w-[80%] lg:w-auto h-auto object-contain"
  />
</div>

{/* Product Images */}
{/* Product Images */}
<div className="flex justify-center flex-wrap gap-6 mt-12">
  <Image
    src={item}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={item01}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={item02}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={item03}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
</div>


    <div className="flex justify-center items-center mt-12">
  <button className="hover:bg-[#f17575] w-[234px] h-[56px] rounded bg-[#DB4444] px-12 py-4 text-[16px] font-medium text-white">View All Products</button>
  </div>

  <div className="mt-16 flex justify-center px-4">
  <Image
    src={browse}
    alt="img"
    className="w-full sm:w-[80%] lg:w-auto h-auto object-contain"
  />
</div>

  <div className="flex justify-center gap-4 mt-8 flex-wrap">
    <div className="max-sm:-[120px] max-sm:h-[135px] w-[170px] h-[145px] border-2 border-black rounded hover:bg-[#ad5151]">
      <Image src={cate1} alt="img"  className="py-6 ml-12 "/>
      <span className="ml-12 relative bottom-3">Camera</span>
    </div>
    <div className="max-sm:-[120px] max-sm:h-[135px] w-[170px] h-[145px] border-2 border-black  rounded hover:bg-[#ad5151]">
    <Image src={cate2} alt="img"  className="py-6 ml-12 "/>
    <span className="ml-12 relative bottom-3">Phone</span>
    </div>
    <div className="max-sm:-[120px] max-sm:h-[135px] w-[170px] h-[145px] border-2 border-black  rounded hover:bg-[#ad5151]">
    <Image src={cate3} alt="img"  className="py-6 ml-12 "/>
    <span className="ml-12 relative bottom-3">Computer</span>
    </div>
    <div className="max-sm:-[120px] max-sm:h-[135px] w-[170px] h-[145px] border-2 border-black  rounded hover:bg-[#ad5151]">
    <Image src={cate4} alt="img" className="py-6 ml-12 "/>
    <span className="ml-12 relative bottom-3">Smart Watch</span>
    </div>
    <div className="max-sm:-[120px] max-sm:h-[135px] w-[170px] h-[145px] border-2 border-black  rounded hover:bg-[#ad5151]">
    <Image src={cate5} alt="img" className="py-6 ml-12 "/>
    <span className="ml-12 relative bottom-3">Gaming</span>
    </div>
    <div className="max-sm:-[120px] max-sm:h-[135px] w-[170px] h-[145px] border-2 border-black  rounded hover:bg-[#ad5151]">
    <Image src={cate6} alt="img" className="py-6 ml-12 "/>
    <span className="ml-12 relative bottom-3">Headphone</span>
    </div>
  </div>

  <div className="mt-16 flex justify-center px-4">
  <Image
    src={product}
    alt="img"
    className="w-full sm:w-[80%] lg:w-auto h-auto object-contain"
  />
</div>

{/* Product Images */}
{/* Product Images */}
<div className="flex justify-center flex-wrap gap-6 mt-12">
  <Image
    src={cart}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={cart01}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={cart02}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={cart03}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
</div>

    <div>
      <Image src={image} alt="img" className="mt-16 m-auto"/>
    </div>

     
    <div className="mt-16 flex justify-center px-4">
  <Image
    src={explore}
    alt="img"
    className="w-full sm:w-[80%] lg:w-auto h-auto object-contain"
  />
</div>
<div className="flex justify-center flex-wrap gap-6 mt-12">
  <Image
    src={item}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={item01}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={item02}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={item03}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
</div>


    <div className="flex justify-center flex-wrap gap-6 mt-12">
  <Image
    src={cart}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={cart01}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={cart02}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
  <Image
    src={cart03}
    alt="product"
    className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[250px] h-auto object-contain"
  />
</div>

  <div className="flex justify-center items-center mt-12">
  <button className="hover:bg-[#f17575] w-[234px] h-[56px] rounded bg-[#DB4444] px-12 py-4 text-[16px] font-medium text-white">View All Products</button>
  </div>

  <Image src={heavitem} alt="item" className="m-auto"/>

  <div className="flex justify-center gap-14 mt-20 flex-wrap max-sm:w-[120px] max-sm:m-auto max-sm:mt-12">
    <Image src={icon} alt="icon"/>
    <Image src={icon01} alt="icon"/>
    <Image src={icon01} alt="icon"/>
  </div>    
  </div>
  )
}