import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useLogin } from "../hooks/useLogin";
import { Spinner } from "@/components/ui/spinner";

const MobileLoginForm = () => {
  const { login, isPending } = useLogin();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="w-full max-w-md px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="text-center text-3xl! font-bold">
              Welcome Back
            </FieldLegend>
            <FieldDescription className="text-center text-base">
              Please enter your details to access your workspace
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="text-muted-foreground font-semibold"
                >
                  Email
                </FieldLabel>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="bg-accent border-0 py-5 font-semibold"
                  placeholder="yourname@company.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel
                  htmlFor="password"
                  className="text-muted-foreground font-semibold"
                >
                  Password
                </FieldLabel>
                <Input
                  {...register("password")}
                  id="password"
                  type="password"
                  className="bg-accent border-0 py-5 font-semibold"
                  placeholder="Enter your password"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <div>
            <Link
              to="/reset-password"
              className="text-primary float-end font-semibold"
            >
              Forget Password?
            </Link>
          </div>

          <Field orientation="vertical">
            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? (
                <>
                  <Spinner /> Signing in
                </>
              ) : (
                <>
                  Sign in <ArrowRight />
                </>
              )}
            </Button>
          </Field>
        </FieldGroup>
      </form>

      <div className="mt-10 flex justify-center space-x-1">
        <span>Don't have an account?</span>
        <Link to="/signup" className="text-primary float-end font-semibold">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default MobileLoginForm;
