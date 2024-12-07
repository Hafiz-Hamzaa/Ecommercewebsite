import Image from "next/image"
import top from '@/app/assets/top.png'
import top01 from '@/app/assets/top01.png'
import top02 from '@/app/assets/top02.png'
import top03 from '@/app/assets/top03.png'
import top04 from '@/app/assets/top04.png'
export default function Footer() {
    return (
      <div>
        <div className="bg-black flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-20 mt-20 py-10">
          <Image
            src={top}
            alt="footer"
            className="w-[80px] h-[100px] md:w-[120px] md:h-[150px] lg:w-[150px] lg:h-[200px]"
          />
          <Image
            src={top01}
            alt="footer"
            className="w-[80px] h-[110px] md:w-[120px] md:h-[180px] lg:w-[150px] lg:h-[220px]"
          />
          <Image
            src={top02}
            alt="footer"
            className="w-[60px] h-[150px] md:w-[100px] md:h-[200px] lg:w-[120px] lg:h-[260px]"
          />
          <Image
            src={top03}
            alt="footer"
            className="w-[50px] h-[160px] md:w-[80px] md:h-[220px] lg:w-[90px] lg:h-[270px]"
          />
          <Image
            src={top04}
            alt="footer"
            className="w-[80px] h-[110px] md:w-[120px] md:h-[180px] lg:w-[150px] lg:h-[220px]"
          />
        </div>
      </div>
    );
  }
  