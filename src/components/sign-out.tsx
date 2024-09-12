import { signOutAction } from "@/server/sign-out-action";

export default function SignOutPage() {
  return (
    <div>
      <form
        action={signOutAction}
      >
        <button
          className="text-white p-3 rounded bg-green-900 hover:bg-green-500"
          type="submit"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}
