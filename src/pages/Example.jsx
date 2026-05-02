import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// ── Logo ──────────────────────────────────────────────────────────────────────
const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
      <path
        d="M6 18l4-6 4 8 4-10 4 6 4-4"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="logoGrad"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
    <span className="text-[18px] font-bold tracking-tight text-[#1e1b4b]">
      Work<span className="text-indigo-500">Pulse</span>
    </span>
  </div>
);

// ── Eye icon ──────────────────────────────────────────────────────────────────
const EyeIcon = ({ open }) =>
  open ? (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

// ── Password helpers ──────────────────────────────────────────────────────────
const strengthLevels = [
  { label: "Weak", bar: "bg-red-400", text: "text-red-500" },
  { label: "Fair", bar: "bg-orange-400", text: "text-orange-500" },
  { label: "Good", bar: "bg-yellow-400", text: "text-yellow-600" },
  { label: "Strong", bar: "bg-green-500", text: "text-green-600" },
];

const requirements = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "One number", test: (p) => /[0-9]/.test(p) },
  { label: "One special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
];

function getStrength(pwd) {
  return requirements.filter((r) => r.test(pwd)).length;
}

// ── Reusable error message ────────────────────────────────────────────────────
const ErrorMsg = ({ message }) =>
  message ? <p className="mt-1 text-xs text-red-500">{message}</p> : null;

// ── Shared input classes ──────────────────────────────────────────────────────
const inputBase =
  "bg-[#eef0fb] border-transparent h-11 rounded-xl text-sm text-[#1e1b4b] placeholder:text-gray-400 " +
  "focus-visible:border-indigo-500 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-indigo-100";
const inputError =
  "border-red-400 bg-red-50 focus-visible:border-red-400 focus-visible:ring-red-100";

// ── Main component ────────────────────────────────────────────────────────────
export default function Example() {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const passwordValue = watch("password", "");
  const strength = getStrength(passwordValue);
  const strengthInfo = passwordValue
    ? (strengthLevels[strength - 1] ?? strengthLevels[0])
    : null;

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  // ── Success screen ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center bg-[#f1f2f6] pb-12">
        <div className="w-full self-start px-8 py-5">
          <Logo />
        </div>
        <div className="mt-4 w-full max-w-md rounded-2xl bg-white px-14 py-14 text-center shadow-[0_4px_32px_rgba(0,0,0,0.07)]">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-[#1e1b4b]">
            Account Created!
          </h2>
          <p className="mb-8 text-sm text-gray-400">
            Welcome to WorkPulse. Check your email to verify your account.
          </p>
          <Button
            className="h-11 w-full rounded-xl bg-indigo-500 font-semibold text-white hover:bg-indigo-600"
            onClick={() => setSubmitted(false)}
          >
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#f1f2f6] pb-12">
      {/* Navbar */}
      <div className="w-full self-start px-8 py-5">
        <Logo />
      </div>

      {/* Card */}
      <div className="mt-2 w-full max-w-[520px] rounded-2xl bg-white px-12 py-10 shadow-[0_4px_32px_rgba(0,0,0,0.07)]">
        <h1 className="mb-1.5 text-center text-[28px] font-bold tracking-tight text-[#1e1b4b]">
          Create an Account
        </h1>
        <p className="mb-7 text-center text-sm text-gray-400">
          Join WorkPulse and start managing your workspace
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-4"
        >
          {/* First + Last name */}
          <div className="flex gap-4">
            {/* First Name */}
            <div className="flex-1">
              <Label className="mb-1.5 block text-sm font-semibold text-gray-700">
                First Name
              </Label>
              <Input
                placeholder="John"
                className={cn(inputBase, errors.firstName && inputError)}
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters",
                  },
                })}
              />
              <ErrorMsg message={errors.firstName?.message} />
            </div>

            {/* Last Name */}
            <div className="flex-1">
              <Label className="mb-1.5 block text-sm font-semibold text-gray-700">
                Last Name
              </Label>
              <Input
                placeholder="Doe"
                className={cn(inputBase, errors.lastName && inputError)}
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Must be at least 2 characters",
                  },
                })}
              />
              <ErrorMsg message={errors.lastName?.message} />
            </div>
          </div>

          {/* Email */}
          <div>
            <Label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Email
            </Label>
            <Input
              type="email"
              placeholder="john@company.com"
              className={cn(inputBase, errors.email && inputError)}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            <ErrorMsg message={errors.email?.message} />
          </div>

          {/* Password */}
          <div>
            <Label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPwd ? "text" : "password"}
                placeholder="Create a strong password"
                className={cn(
                  inputBase,
                  "pr-11",
                  errors.password && inputError,
                )}
                {...register("password", {
                  required: "Password is required",
                  validate: (val) =>
                    getStrength(val) >= 2 || "Password is too weak",
                })}
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowPwd((v) => !v)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
              >
                <EyeIcon open={showPwd} />
              </button>
            </div>
            <ErrorMsg message={errors.password?.message} />

            {/* Strength bar */}
            {passwordValue && (
              <div className="mt-2 space-y-1.5">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1 flex-1 rounded-full transition-all duration-300",
                        i <= strength ? strengthInfo.bar : "bg-gray-200",
                      )}
                    />
                  ))}
                </div>
                <span className={cn("text-xs font-medium", strengthInfo.text)}>
                  {strengthInfo.label} password
                </span>
              </div>
            )}

            {/* Requirements checklist */}
            {passwordValue && (
              <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
                {requirements.map((r) => {
                  const met = r.test(passwordValue);
                  return (
                    <div key={r.label} className="flex items-center gap-1.5">
                      {met ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <circle cx="7" cy="7" r="7" fill="#6366f1" />
                          <path
                            d="M4 7l2 2 4-4"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <div className="h-3.5 w-3.5 shrink-0 rounded-full border-[1.5px] border-gray-300" />
                      )}
                      <span
                        className={cn(
                          "text-xs",
                          met ? "text-indigo-500" : "text-gray-400",
                        )}
                      >
                        {r.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <Label className="mb-1.5 block text-sm font-semibold text-gray-700">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                className={cn(inputBase, "pr-11", errors.confirm && inputError)}
                {...register("confirm", {
                  required: "Please confirm your password",
                  validate: (val) =>
                    val === passwordValue || "Passwords don't match",
                })}
              />
              <button
                type="button"
                tabIndex={-1}
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
              >
                <EyeIcon open={showConfirm} />
              </button>
            </div>
            <ErrorMsg message={errors.confirm?.message} />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="!mt-5 h-11 w-full rounded-xl bg-indigo-500 text-[15px] font-semibold tracking-wide text-white transition-colors hover:bg-indigo-600"
          >
            Create Account
          </Button>
        </form>

        {/* Login link */}
        <p className="mt-5 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-500 transition-opacity hover:opacity-80"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
