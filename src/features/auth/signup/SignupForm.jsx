import { useMediaQuery } from "@/hooks/use-media-query";
import DesktopSignupForm from "@/features/auth/signup/DesktopSignupForm";
import MobileSignupForm from "@/features/auth/signup/MobileSignupForm";

const SignupForm = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) return <DesktopSignupForm />;

  return <MobileSignupForm />;
};

export default SignupForm;
