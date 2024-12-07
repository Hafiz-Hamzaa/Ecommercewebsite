import Image from "next/image";
import mobile from "@/app/assets/mobile.png";
import google from '@/app/assets/Google SIgn up.png'
import Link from "next/link";

export default function Signup() {
  return (
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
        <div className="text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold">Create an account</h1>
          <p className="text-sm pt-2">Enter your details below</p>
        </div>
        <form className="mt-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2 px-3 mt-4 bg-transparent border-b-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="w-full py-2 px-3 mt-4 bg-transparent border-b-2 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-3 mt-4 bg-transparent border-b-2 focus:outline-none"
          />
          <input
            type="button"
            value="Create Account"
            className="w-full py-2 mt-6 bg-red-600 text-white rounded-md cursor-pointer hover:bg-red-700"
          />
          <div className="flex justify-center mt-6">
            <Image src={google} alt="Google Logo" className="w-[150px] sm:w-[200px]" />
          </div>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login">
              <span className="underline text-red-600 font-medium">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  
  );
}
