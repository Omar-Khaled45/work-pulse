import { useNavigate } from "react-router";
import Logo from "@/components/common/Logo";
import { Inbox } from "lucide-react";

const EmailVerification = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-background relative flex h-screen items-center justify-center">
			<div className="absolute top-10 left-10 w-40">
				<Logo />
			</div>
			<div className="container flex justify-center">
				<div className="mt-15 text-center leading-8 tracking-wide">
					<div className="mb-5 flex w-full justify-center">
						<Inbox size={100} />
					</div>
					<h1 className="mb-2 text-xl font-bold md:text-2xl">
						Verify Your Email
					</h1>
					<p>
						Almost there! We have sent an email to
						<span className="font-bold"> email</span>.
					</p>
					<p>Please follow the instructions to verify your email</p>
					<div>
						<button
							className="bg-primary mt-3 rounded-full px-4 py-2 text-sm font-semibold text-white"
							onClick={() => navigate("/login")}
						>
							Back to Log In
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmailVerification;
