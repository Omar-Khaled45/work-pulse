import Logo from "@/components/common/Logo";
import LoginForm from "@/features/auth/login/LoginForm";

const Login = () => {
  return (
    <div className="bg-sidebar relative flex h-screen items-center justify-center">
      <div className="absolute top-10 left-10 w-40">
        <Logo />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
