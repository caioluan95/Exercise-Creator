"use client";
import InputControlled from "@/core/components/form/inputs/input-controlled";
import Logo from "@/core/components/logo";
import Button from "@/core/components/buttons/button-base";
import toast from "react-hot-toast";
import { post } from "@/core/services/fetchFacade";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const authSchema = yup.object({
  name: yup.string().required("Enter a valid name"),
  email: yup.string().email().required("Enter a valid e-mail"),
  password: yup
    .string()
    .required("Enter a valid password")
    .min(8, "The password must contain at least 8 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
      "The password must contain at least one number, one capital letter and one special character"
    ),
  repeat_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "The passwords must be the same")
    .required("Repeat the password to confirm"),
});
export default function SignUp() {
  const { control, handleSubmit, formState, isValid } = useForm({
    resolver: yupResolver(authSchema),
    mode: "onChange",
  });
  const router = useRouter();
  async function onSubmit(data) {
    const response = await post("users", data);
    console.log(response.message);
    toast.success("User registered with success");
    router.replace("/");
  }

  function loginPage() {
    router.replace("/");
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
              type="text"
              id="nameInput"
              name="name"
              placeholder="name"
              hasError={formState.errors.name}
            />

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

            <InputControlled
              control={control}
              className="p-2 w-full border rounded-lg"
              name="repeat_password"
              type="password"
              id="repeatPasswordInput"
              placeholder="repeat password"
              hasError={formState.errors.passwordRepeat}
            />

            <Button
              type="submit"
              className={`bg-blue-500 p-1 rounded-md text-white w-full shadow-md ${
                !formState.isValid
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={!formState.isValid}
            >
              Register
            </Button>
            <button
              type="button"
              className="text-blue-500 underline text-sm cursor-pointer"
              onClick={loginPage}
            >
              Already have an account?
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
