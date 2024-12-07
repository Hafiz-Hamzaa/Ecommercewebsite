import React from "react";
export default function Contact() {
  return (

    <div className="w-full flex justify-center items-center sm:mt-3 md:mt-0 sm:mb-8 md:mb-0">
  <div className="w-full sm:w-full md:w-[90%] flex flex-col md:flex-row gap-7">
    {/* Left Side */}
    <div className="shadow-lg w-full md:w-[30%] h-auto flex flex-col justify-evenly p-4">
      <div className="pl-3">
        <div className="flex items-center">
          <span className="bg-red-500 p-3 rounded-full"></span>
          <h2 className="text-lg md:text-xl font-bold pl-3">Call To Us</h2>
        </div>
        <ul className="mt-2 flex flex-col gap-1">
          <li className="text-sm pl-3">
            We are available 24/7, 7 days a week.
          </li>
          <li className="text-sm pl-3">Phone: +8801611112222</li>
        </ul>
      </div>
      <hr className="my-4" />
      <div className="pl-3">
        <div className="flex items-center">
          <span className="bg-red-500 p-3 rounded-full"></span>
          <h2 className="text-lg md:text-xl font-bold pl-3">Write To Us</h2>
        </div>
        <ul className="mt-2 flex flex-col gap-1">
          <li className="text-sm pl-3">
            Fill out our form and we will contact you within 24 hours.
          </li>
          <li className="text-sm pl-3">Emails: customer@exclusive.com</li>
          <li className="text-sm pl-3">Emails: support@exclusive.com</li>
        </ul>
      </div>
    </div>
    {/* Right Side */}
    <div className="shadow-lg w-full md:w-[70%] h-auto p-4">
      <form className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full md:w-[48%] py-3 px-3 bg-[#F5F5F5] rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full md:w-[48%] py-3 px-3 bg-[#F5F5F5] rounded-md"
        />
        <input
          type="text"
          placeholder="Your Phone"
          className="w-full py-3 px-3 bg-[#F5F5F5] rounded-md"
        />
      </form>
      <div className="w-full bg-[#F5F5F5] mt-4 rounded-md">
        <textarea
          placeholder="Your Message"
          className="w-full h-28 p-3 bg-[#F5F5F5] rounded-md resize-none"
        ></textarea>
      </div>
      <div className="flex justify-center mt-4">
        <input
          className="py-2 px-12 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer"
          type="button"
          value="Send Message"
        />
      </div>
    </div>
  </div>
</div>


  );
}

