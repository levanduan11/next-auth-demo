"use server";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function signOutAction() {
  try {
    await signOut();
    redirect("/auth/signin");
  } catch (error) {
    console.log(error);
    redirect("/auth/signin");
  }
}
