/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from 'react';
import { signIn, getProviders } from 'next-auth/react';
import Image from 'next/image';

export default function SignIn() {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders();
      setProviders(setupProviders);
    };
    setTheProviders();
  }, []);

  console.log({ providers });
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <div className="mt-4">
          {providers &&
            Object.values(providers).map((provider: any) => (
              <div key={provider.name} className="flex items-center justify-center">
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                >
                  <Image
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google logo"
                    width={24}
                    height={24}
                  />
                  <span>Sign in with {provider.name}</span>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}