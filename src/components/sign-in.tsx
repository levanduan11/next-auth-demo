import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <div className="bg-white shadow p-4">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="p-3 bg-rose-600 hover:bg-rose-300 text-white rounded-sm"
          type="submit"
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
}
