import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Spinner } from "@/components/ui/spinner";
import { CircleAlert } from "lucide-react";
import InputErrorMessage from "@/components/common/InputErrorMessage";
import { useSignup } from "../hooks/useSignup";

const DesktopSignupForm = () => {
  const { signup, isPending } = useSignup();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      first_name:
        data.first_name.charAt(0).toUpperCase() +
        data.first_name.slice(1, data.first_name.length),
      last_name:
        data.last_name.charAt(0).toUpperCase() +
        data.last_name.slice(1, data.last_name.length),
    };

    signup(formattedData);
  };

  return (
    <Card className="w-full max-w-md gap-0 px-3 shadow-lg ring-0">
      <CardHeader className="mb-6 text-center">
        <CardTitle className="text-3xl font-semibold">
          Welcome to Work Pulse
        </CardTitle>
        <CardDescription>Let's Create Your Account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label
                  htmlFor="first_name"
                  className="text-muted-foreground font-semibold"
                >
                  First Name
                </Label>
                <Input
                  {...register("first_name", {
                    required: "Please add your first name.",
                  })}
                  aria-invalid={Boolean(errors.first_name)}
                  id="first_name"
                  type="text"
                  className="bg-accent border-0 py-5"
                  placeholder="First Name"
                />
                {errors.first_name && (
                  <InputErrorMessage
                    icon={<CircleAlert size={18} />}
                    message={errors.first_name.message}
                  />
                )}
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="last_name"
                  className="text-muted-foreground font-semibold"
                >
                  Last Name
                </Label>
                <Input
                  {...register("last_name", {
                    required: "Please add your last name.",
                  })}
                  aria-invalid={Boolean(errors.last_name)}
                  id="last_name"
                  type="text"
                  className="bg-accent border-0 py-5"
                  placeholder="Last Name"
                />
                {errors.last_name && (
                  <InputErrorMessage
                    icon={<CircleAlert size={18} />}
                    message={errors.last_name.message}
                  />
                )}
              </div>
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="email"
                className="text-muted-foreground font-semibold"
              >
                Email
              </Label>
              <Input
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                aria-invalid={Boolean(errors.email)}
                id="email"
                type="text"
                className="bg-accent border-0 py-5"
                placeholder="yourname@company.com"
              />
              {errors.email && (
                <InputErrorMessage
                  icon={<CircleAlert size={18} />}
                  message={errors.email.message}
                />
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-muted-foreground">
                Password
              </Label>
              <Input
                {...register("password", {
                  required: "Please enter your password.",
                  minLength: { value: 8, message: "At least 8 characters." },
                })}
                aria-invalid={Boolean(errors.password)}
                id="password"
                type="password"
                className="bg-accent border-0 py-5"
                placeholder="Enter your password"
              />
              {errors.password && (
                <InputErrorMessage
                  icon={<CircleAlert size={18} />}
                  message={errors.password.message}
                />
              )}
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="confirm_password"
                className="text-muted-foreground font-semibold"
              >
                Confirm Password
              </Label>
              <Input
                {...register("confirm_password", {
                  required: "Please re-enter your password",
                  validate: (value) =>
                    value === getValues("password") ||
                    "Passwords do not match.",
                })}
                aria-invalid={Boolean(errors.confirm_password)}
                id="confirm_password"
                type="password"
                className="bg-accent border-0 py-5"
                placeholder="Enter your password again"
              />
              {errors.confirm_password && (
                <InputErrorMessage
                  icon={<CircleAlert size={18} />}
                  message={errors.confirm_password.message}
                />
              )}
            </div>

            <div>
              <Link
                to="/reset-password"
                className="text-primary float-end font-semibold"
              >
                Forget Password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="mb-6 w-full"
            size="lg"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Spinner /> Creating Account
              </>
            ) : (
              "Create Account"
            )}
          </Button>

          <div className="flex justify-center space-x-1">
            <span>Already have an account?</span>
            <Link to="/login" className="text-primary float-end font-semibold">
              Login
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DesktopSignupForm;
