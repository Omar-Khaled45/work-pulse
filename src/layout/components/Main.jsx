import { Outlet } from "react-router";

import Container from "@/components/common/Container";

const Main = () => {
  return (
    <main className="scrollbar bg-background flex-1 overflow-y-auto">
      <Container className="@container py-10">
        <Outlet />
      </Container>
    </main>
  );
};

export default Main;
