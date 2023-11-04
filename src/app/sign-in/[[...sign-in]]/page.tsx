import { SignIn } from "@clerk/nextjs";

export default function PageSignIn() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-5">
      <SignIn />
    </div>
  );
}
