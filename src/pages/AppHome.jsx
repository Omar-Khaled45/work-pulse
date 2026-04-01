import Heading from "@/components/common/Heading";
import { Home } from "lucide-react";

const AppHome = () => {
  return (
    <div>
      <Heading title={"Home"}>
        Welcome back, %NAME%. Here's what's happening.
      </Heading>
    </div>
  );
};

export default AppHome;
