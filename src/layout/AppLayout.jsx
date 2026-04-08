import Overlay from "@/components/common/Overlay";
import Header from "@/layout/components/Header";
import Main from "@/layout/components/Main";
import Sidebar from "@/layout/components/Sidebar";
import { useState } from "react";

const AppLayout = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(
    () => window.matchMedia("(min-width: 48rem)").matches,
  );

  return (
    <div className="bg-sidebar flex h-screen w-full p-2">
      {isSidebarOpened && (
        <Overlay state={isSidebarOpened} setState={setIsSidebarOpened} />
      )}
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl shadow-xl md:z-10">
        <Header setIsSidebarOpened={setIsSidebarOpened} />
        <Main />
      </div>
    </div>
  );
};

export default AppLayout;
