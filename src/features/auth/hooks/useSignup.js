import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signup as signupAPI } from "@/services/apiAuth";

export const useSignup = () => {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: (userData) => signupAPI(userData),

    onSuccess: () => {
      navigate("/workspaces", { replace: true });
    },

    onError: (err) => {
      console.log("Error: ", err);
    },
  });

  return { signup, isPending };
};
