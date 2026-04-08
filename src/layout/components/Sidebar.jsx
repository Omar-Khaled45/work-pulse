import { X } from "lucide-react";

import AppNav from "@/components/common/AppNav";
import Logo from "@/components/common/Logo";

const Sidebar = ({ isSidebarOpened, setIsSidebarOpened }) => {
  return (
    <aside
      className={`text-foreground bg-sidebar fixed inset-0 z-1 w-64 overflow-hidden md:static ${isSidebarOpened ? "translate-x-0" : "-translate-x-full md:w-0"}`}
    >
      <div
        className="absolute top-5 right-2 md:hidden"
        onClick={() => setIsSidebarOpened(false)}
      >
        <X />
      </div>
      <div className="w-64">
        <div className="mt-8 flex flex-col p-5 md:mt-0">
          <Logo />
          <AppNav />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
