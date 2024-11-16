import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*-------left section-------*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Book your doctor’s appointment in just minutes—quick, easy, and
            hassle-free! Connect with top healthcare professionals, explore
            specialists, and secure your spot with just a few clicks. Your
            health, your convenience—right at your fingertips!
          </p>
        </div>

        {/*-------center section-------*/}
        <div>
          <p className="text-xl font-medium mb-5">Comapny</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li> Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/*-------right section-------*/}
        <div>
          <p className="text-xl font-medium mb-5"> GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-4867</li>
            <li>hkhimanshu3104@gmail.com</li>
          </ul>
        </div>
      </div>
      {/*-------right section-------*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Prescripto-All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
