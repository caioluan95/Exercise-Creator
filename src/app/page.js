"use client";
import InputControlled from "@/core/components/form/inputs/input-controlled";
import Logo from "@/core/components/logo";
import Button from "@/core/components/buttons/button-base";
import toast from "react-hot-toast";
import { useAuth } from "@/core/contexts/auth/authProvider";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const authSchema = yup.object({
  email: yup.string().email().required("Enter a valid e-mail"),
  password: yup
    .string()
    .required("Enter a valid password")
    .min(8, "The password must contain at least 8 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
      "The password must contain at least one number, one capital letter and one special character"
    ),
});

export default function SignIn() {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(authSchema),
    mode: "onChange",
  });

  const router = useRouter();

  const { login } = useAuth();

  async function onSubmit(data) {
    const response = await login(data);

    if (response.data) {
      toast.success("User successfully logged in");
      router.replace("/dashboard");
    } else {
      toast.error("Authentication failed");
    }
  }

  function recoverPassword() {
    router.push("/pass_recovery");
  }

  function createAccount() {
    router.push("/sign_up");
  }

  return (
    <main className="flex min-h-screen flex-col items-center align-between">
      <div className="flex h-screen flex-col items-center justify-center">
        <div>
          <Logo />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-8 rounded w-96 space-y-4">
            <InputControlled
              control={control}
              className="p-2 w-full border rounded-lg"
              name="email"
              type="email"
              id="emailInput"
              placeholder="e-mail"
              hasError={formState.errors.email}
            />

            <InputControlled
              control={control}
              className="p-2 w-full border rounded-lg"
              name="password"
              type="password"
              id="passwordInput"
              placeholder="password"
              hasError={formState.errors.password}
            />

            <Button
              type="submit"
              className={`bg-sky-400 p-1 rounded-md text-white w-full shadow-md cursor-pointer`}
            >
              Login
            </Button>

            <div className="flex justify-between">
              <button
                type="button"
                className="text-blue-500 underline text-sm cursor-pointer"
                onClick={recoverPassword}
              >
                Forgot your password?
              </button>
              <button
                type="button"
                className="text-blue-500 underline text-sm cursor-pointer"
                onClick={createAccount}
              >
                Register now.
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
