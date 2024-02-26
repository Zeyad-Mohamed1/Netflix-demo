"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "@/public/google.svg";
import { signIn } from "next-auth/react";

const GoogleSignIn = () => {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={GoogleIcon} className="w-6 h-6" alt="google icon" />
    </Button>
  );
};

export default GoogleSignIn;
