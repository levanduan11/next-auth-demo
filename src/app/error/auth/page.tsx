"use client";
import { useRouter } from "next/navigation";

export default function AuthErrorPage() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen bg-green-900">
      <div className="bg-white p-5 shadow rounded-sm">
        <h5 className="">認証エラーが発生しました。もう一度お試しください。</h5>
        <div className="flex justify-center p-7">
          <button
            className="text-white py-2 px-9 text-center mx-auto rounded bg-rose-700 hover:bg-rose-300"
            onClick={() => router.replace("/auth")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
