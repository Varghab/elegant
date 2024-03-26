import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import copy from 'copy-to-clipboard';

const DemoCredentials = () => {
    const [isCopied, setIsCopied] = useState({email:false, password:false});
    const copyFunction = ({label, type}:{label:string, type:string}) => {
        setIsCopied({...isCopied, [type]: true});
        copy(label);
        
    }

  return (
    <div className="mt-4 py-4 px-6 rounded-lg bg-neutral-100">
      <p className="text-xl font-[500]">Demo Credentials - </p>
      <span className="flex mt-2 gap-2 items-center w-full flex-wrap">
        <p className="flex-1 text-sm sm:text-md">Email - shibvarghab@gmail.com</p>
        <FaRegCopy
          className="cursor-pointer"
          onClick={() =>
            copyFunction({ label: "shibvarghab@gmail.com", type: "email" })
          }
        />
       { isCopied.email && <p
          className={`transition-opacity duration-150 ease-in-out ${
            isCopied.email ? "opacity-1" : "opacity-0"
          }`}
        >
          Copied
        </p>}
      </span>
      <span className="flex items-center gap-2 flex-wrap">
        <p className="flex-1 text-sm sm:text-md">Password - Shib@123456</p>
        <FaRegCopy
          onClick={() =>
            copyFunction({ label: "Shib@123456", type: "password" })
          }
          className="cursor-pointer"
        />
        {isCopied.password&&<p
          className={`transition-opacity duration-150 ease-in-out ${
            isCopied.password ? "opacity-1" : "opacity-0"
          }`}
        >
          Copied
        </p>}
      </span>
    </div>
  );
};

export default DemoCredentials;
