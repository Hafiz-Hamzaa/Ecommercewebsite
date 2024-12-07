import Image from "next/image";
import whislit from '@/app/assets/Wishlist.png'
import user from '@/app/assets/user (1).png'
import Cart from '@/app/assets/Cart1.png'
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* Promo Banner */}
      <div className="max-sm:text-[10px] bg-black h-[48px] text-center py-4 text-white">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </div>

      {/* Navbar */}
      <nav className="mt-9 flex flex-wrap items-center justify-between px-6 lg:px-24">
        {/* Logo */}
        <div className="text-[24px] text-black font-bold">Exclusive</div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 lg:gap-12 justify-center items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/signup">Signup</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex bg-[#F5F5F5] w-[343px] h-[38px] rounded py-2 items-center">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] px-4 text-[14px] font-normal text-gray-400 w-full focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="hidden lg:flex gap-4">
          <Image src={whislit} alt="wishlist" />
          <Image src={Cart} alt="cart" />
          <Image src={user} alt="user" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
