import { RequireAuth } from "@/components/require-auth";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const AuthLayout: FC<Props> = ({ children }) => {
  return <RequireAuth>{children}</RequireAuth>;
};

export default AuthLayout;
