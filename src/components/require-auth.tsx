"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};
export const RequireAuth: FC<Props> = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth");
    }
  }, [router, session.status]);
  if (session.status === "loading") {
    return <div>...</div>;
  }
  return <>{children}</>;
};
