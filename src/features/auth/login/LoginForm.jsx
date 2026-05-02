import { useMediaQuery } from "@/hooks/use-media-query";
import DesktopLoginForm from "@/features/auth/login/DesktopLoginForm";
import MobileLoginForm from "@/features/auth/login/MobileLoginForm";

const LoginForm = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) return <DesktopLoginForm />;

  return <MobileLoginForm />;
};

export default LoginForm;
