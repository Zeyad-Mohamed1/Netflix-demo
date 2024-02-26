import Image from "next/image";
import React from "react";
import BackgroundImage from "@/public/login_background.jpg";
import Logo from "@/public/netflix_logo.svg";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <Image
        src={Logo}
        alt="logo"
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        priority
      />
      {children}
    </div>
  );
}

export default layout;
