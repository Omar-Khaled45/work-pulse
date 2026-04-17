import { useEffect, useState } from "react";
import { PanelLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "@/components/common/Container";

const Header = ({ setIsSidebarOpened }) => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "" : "dark"));
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="border-b-border bg-background relative flex items-center border-b p-3">
      <button
        className="hover:bg-accent transition-300 absolute cursor-pointer rounded-lg p-2"
        onClick={() => setIsSidebarOpened((prev) => !prev)}
      >
        <PanelLeft size={20} />
      </button>
      <Container className="flex justify-end px-10">
        <Button variant="secondary" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </Button>
      </Container>
    </header>
  );
};

export default Header;
