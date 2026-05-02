import Logo from "@/components/common/Logo";
import SignupForm from "@/features/auth/signup/SignupForm";
import { useMediaQuery } from "@/hooks/use-media-query";

const Signup = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  return (
    <div className="bg-sidebar relative flex h-screen items-center justify-center">
      {isDesktop && (
        <div className="absolute top-5 left-5 w-40">
          <Logo />
        </div>
      )}
      <SignupForm />
    </div>
  );
};

export default Signup;
