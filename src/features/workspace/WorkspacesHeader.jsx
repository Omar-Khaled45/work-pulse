import Container from "@/components/common/Container";
import HeaderDropdownMenu from "@/components/common/HeaderDropdownMenu";
import Logo from "@/components/common/Logo";

const WorkspacesHeader = () => {
  return (
    <header className="border-b-border relative z-20 border-b py-3 shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <HeaderDropdownMenu />
        </div>
      </Container>
    </header>
  );
};

export default WorkspacesHeader;
