"use client";
import Button from "@/core/components/buttons/button-base";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  function loginPage() {
    router.push("/sign_in");
  }

  return (
    <>
      <p>Page</p>
      <br />
      <br />
      <Button
        type="button"
        className="text-blue-500 underline text-sm cursor-pointer"
        onClick={loginPage}
      >
        Login Page
      </Button>
    </>
  );
}
