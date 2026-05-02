import { PanelLeft } from "lucide-react";

import Container from "@/components/common/Container";
import HeaderDropdownMenu from "@/components/common/HeaderDropdownMenu";

const Header = ({ setIsSidebarOpened }) => {
  return (
    <header className="border-b-border bg-background relative flex items-center border-b p-3">
      <button
        className="hover:bg-accent transition-300 absolute cursor-pointer rounded-lg p-2"
        onClick={() => setIsSidebarOpened((prev) => !prev)}
      >
        <PanelLeft size={20} />
      </button>
      <Container className="flex justify-end px-10">
        <HeaderDropdownMenu />
      </Container>
    </header>
  );
};

export default Header;
