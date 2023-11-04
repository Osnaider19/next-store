import { SignUp } from "@clerk/nextjs";
export default function PageSignUp() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-5">
      <SignUp />
    </div>
  );
}
