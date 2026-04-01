import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SidebarTrigger } from "@/components/ui/sidebar";

import Container from "@/components/common/Container";

const Header = () => {
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
      <SidebarTrigger className="hover:bg-accent absolute p-2" />
      <Container className="flex justify-between px-10">
        <InputGroup className={"w-sm bg-white"}>
          <InputGroupInput
            id="inline-start-input"
            placeholder="Search Everything"
          />
          <InputGroupAddon align="inline-start">
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
        <Button variant="secondary" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </Button>
      </Container>
    </header>
  );
};

export default Header;
