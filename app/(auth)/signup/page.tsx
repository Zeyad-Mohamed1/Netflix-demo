import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "@/public/google.svg";
import Link from "next/link";
import Image from "next/image";
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";
import GoogleSignIn from "@/app/components/GoogleSignIn";
import GithubSignIn from "@/app/components/GithubSignIn";
import { redirect } from "next/navigation";

const Signup = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="POST" action="/api/auth/signup">
        <h1 className="text-3xl font-semibold text-white">Sign-Up</h1>
        <div className="space-y-4 mt-5">
          <Input
            placeholder="Email"
            type="email"
            name="email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            className="w-full bg-[#E50914]"
            variant="destructive"
          >
            Sign Up
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2">
        Already have an account?{" "}
        <Link href="/login" className="text-white hover:underline">
          Login
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignIn />
        <GoogleSignIn />
      </div>
    </div>
  );
};

export default Signup;
