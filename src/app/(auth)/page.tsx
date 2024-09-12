"use client";
import SignOutPage from "@/components/sign-out";
import { useSession } from "next-auth/react";

export default function Home() {
  const auth = useSession();
  const email = auth.data?.user?.email;
  console.log(auth.data?.expires);
  
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div>
        <h1 className="p-2 bg-rose-800 hover:bg-rose-500 text-white my-4 rounded-sm">
          Home: {email || "no email"}
        </h1>
        <div>
          <SignOutPage />
        </div>
      </div>
    </div>
  );
}
