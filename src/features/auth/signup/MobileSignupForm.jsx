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
import { CircleAlert } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useLogin } from "../hooks/useLogin";
import { Spinner } from "@/components/ui/spinner";
import InputErrorMessage from "@/components/common/InputErrorMessage";
import Logo from "@/components/common/Logo";

const MobileSignupForm = () => {
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="w-full max-w-lg px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="mb-3 flex items-center gap-2 text-center text-3xl! font-bold">
              Welcome To <Logo />
            </FieldLegend>
            <FieldDescription className="text-center text-base">
              Let's Create Your Account
            </FieldDescription>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel
                    htmlFor="first_name"
                    className="text-muted-foreground font-semibold"
                  >
                    First Name
                  </FieldLabel>
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
                </Field>
                <Field>
                  <FieldLabel
                    htmlFor="last_name"
                    className="text-muted-foreground font-semibold"
                  >
                    Last Name
                  </FieldLabel>
                  <Input
                    {...register("last_name", {
                      required: "Please add your last name.",
                    })}
                    aria-invalid={Boolean(errors.last_name)}
                    id="last_name"
                    type="last_name"
                    className="bg-accent border-0 py-5"
                    placeholder="Last Name"
                  />
                  {errors.last_name && (
                    <InputErrorMessage
                      icon={<CircleAlert size={18} />}
                      message={errors.last_name.message}
                    />
                  )}
                </Field>
              </div>

              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="text-muted-foreground font-semibold"
                >
                  Email
                </FieldLabel>
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
                  type="email"
                  className="bg-accent border-0 py-5"
                  placeholder="yourname@company.com"
                />
                {errors.email && (
                  <InputErrorMessage
                    icon={<CircleAlert size={18} />}
                    message={errors.email.message}
                  />
                )}
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="password"
                  className="text-muted-foreground font-semibold"
                >
                  Password
                </FieldLabel>
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
              </Field>

              <Field>
                <FieldLabel
                  htmlFor="confirm_password"
                  className="text-muted-foreground font-semibold"
                >
                  Confirm Password
                </FieldLabel>
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
                  <Spinner /> Creating Account
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </Field>
        </FieldGroup>
      </form>

      <div className="mt-3 flex justify-center space-x-1">
        <span>Already have an account?</span>
        <Link to="/login" className="text-primary float-end font-semibold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileSignupForm;
