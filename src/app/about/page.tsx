import Image from "next/image"
import about from '@/app/assets/Side Image.png'
import box from '@/app/assets/Frame 870.png'
import box01 from '@/app/assets/Frame 871.png'
import box02 from '@/app/assets/Frame 872.png'
import box03 from '@/app/assets/Frame 873.png'
import men from '@/app/assets/Frame 887.png'
import women from '@/app/assets/Frame 888.png'
import young from '@/app/assets/Frame 889.png'
import icon from '@/app/assets/icons.png'
import icon01 from '@/app/assets/icons01.png'
export default function About () {
    return(
        <div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
    <div className="mt-10 lg:mt-40 lg:ml-36 text-center lg:text-left">
        <h1 className="text-[36px] lg:text-[54px] font-semibold">Our Story</h1>
        <p className="mt-6 lg:mt-16 text-sm lg:text-base">
            Launced in 2015, Exclusive is South Asia's premier online shopping <br className="hidden lg:block" />
            marketplace with an active presence in Bangladesh. Supported <br className="hidden lg:block" />
            by a wide range of tailored marketing, data, and service solutions, <br className="hidden lg:block" />
            Exclusive has 10,500 sellers and 300 brands and serves 3 <br className="hidden lg:block" />
            million customers across the region.
        </p>
        <p className="mt-4 lg:mt-12 text-sm lg:text-base">
            Exclusive has more than 1 Million products to offer, growing at a <br className="hidden lg:block" />
            very fast pace. Exclusive offers a diverse assortment in categories <br className="hidden lg:block" />
            ranging from consumer.
        </p>
    </div>
    <Image 
        src={about} 
        alt="about-img" 
        className="mt-6 lg:mt-10 w-[90%] max-w-[300px] md:max-w-[500px] lg:max-w-[705px] h-auto" 
    />
</div>

<div className="flex flex-wrap justify-center gap-6 mt-28">
    <Image 
        src={box} 
        alt="box" 
        className="w-[80%] max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] h-auto" 
    />
    <Image 
        src={box01} 
        alt="box" 
        className="w-[80%] max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] h-auto" 
    />
    <Image 
        src={box02} 
        alt="box" 
        className="w-[80%] max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] h-auto" 
    />
    <Image 
        src={box03} 
        alt="box" 
        className="w-[80%] max-w-[150px] sm:max-w-[200px] lg:max-w-[250px] h-auto" 
    />
</div>

<div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-20">
    <Image 
        src={men} 
        alt="icon" 
        className="w-[70px] sm:w-[220px] lg:w-[240px] h-auto  max-sm:w-[140px]" 
    />
    <Image 
        src={women} 
        alt="icon" 
        className="w-[70px] sm:w-[220px] lg:w-[240px] h-auto  max-sm:w-[140px]" 
    />
    <Image 
        src={young} 
        alt="icon" 
        className="w-[70px] sm:w-[220px] lg:w-[240px] h-auto max-sm:w-[140px]" 
    />
</div>

<div className="flex justify-center gap-14 mt-20 flex-wrap max-sm:w-[120px] max-sm:m-auto max-sm:mt-12">
    <Image src={icon} alt="icon"/>
    <Image src={icon01} alt="icon"/>
    <Image src={icon01} alt="icon"/>
  </div> 


        </div>
    )
}