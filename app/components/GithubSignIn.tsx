"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";

const GithubSignIn = () => {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size="icon">
      <GithubIcon className="w-4 h-4" />
    </Button>
  );
};

export default GithubSignIn;
