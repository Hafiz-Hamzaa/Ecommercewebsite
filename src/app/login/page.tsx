import Image from "next/image";
import mobile from "@/app/assets/mobile.png";
import login from '@/app/assets/login.png'

export default function Login() {
  return(
    <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
  {/* Left Section */}
  <div className="w-full lg:w-[50%] h-auto lg:h-[500px] sm:mt-10 lg:mt-11 flex justify-center cursor-pointer">
    <Image
      src={mobile}
      width={400}
      height={400}
      alt="Mobile"
      className="w-[90%] lg:w-full max-w-[400px] lg:max-w-none"
    />
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-[50%] h-auto lg:h-[500px] my-11 flex flex-col justify-center items-center px-6">
    <div className="w-full max-w-[400px]">
      {/* Header */}
      <div className="text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl font-bold">Login to Exclusive</h1>
        <p className="text-sm pt-2">Enter your details below</p>
      </div>

      {/* Form */}
      <form action="" className="mt-5">
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="w-full py-2 px-3 bg-transparent border-b-2 focus:outline-none mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full py-2 px-3 bg-transparent border-b-2 focus:outline-none mb-4"
        />
        <div className="flex justify-center lg:justify-start mt-4">
          <Image src={login} alt="login" className="w-[200px]" />
        </div>
      </form>
    </div>
  </div>
</div>

  )
}
