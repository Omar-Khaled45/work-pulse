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

import { useLogin } from "../hooks/useLogin";
import { Spinner } from "@/components/ui/spinner";

const DesktopLoginForm = () => {
  const { login, isPending } = useLogin();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <Card className="w-full max-w-md gap-0 px-3 shadow-lg ring-0">
      <CardHeader className="mb-6 text-center">
        <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
        <CardDescription>
          Please enter your details to access your workspace
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex flex-col gap-3">
            <div className="mb-3 grid gap-2">
              <Label
                htmlFor="email"
                className="text-muted-foreground font-semibold"
              >
                Email
              </Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                className="bg-accent border-0 py-5 font-semibold"
                placeholder="yourname@company.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="password"
                className="text-muted-foreground font-semibold"
              >
                Password
              </Label>
              <Input
                {...register("password")}
                id="password"
                type="password"
                className="bg-accent border-0 py-5 font-semibold"
                placeholder="Enter your password"
                required
              />
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
                <Spinner /> Logging in
              </>
            ) : (
              <>Login</>
            )}
          </Button>

          <div className="flex justify-center space-x-1">
            <span>Don't have an account?</span>
            <Link to="/signup" className="text-primary float-end font-semibold">
              Sign Up
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default DesktopLoginForm;
