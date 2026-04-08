import {
  FolderKanban,
  Home,
  LayoutList,
  SlidersHorizontal,
} from "lucide-react";
import { NavLink } from "react-router";

const AppNav = () => {
  return (
    <nav className="mt-10">
      <ul className="space-y-3">
        <li>
          <NavLink
            to="home"
            className={({ isActive }) =>
              `hover:bg-sidebar-accent text-sidebar-accent-foreground flex cursor-pointer items-center gap-2 rounded-lg p-2 font-semibold ${isActive && "bg-sidebar-accent"}`
            }
          >
            <Home strokeWidth={1.5} size={20} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tasks"
            className={({ isActive }) =>
              `hover:bg-sidebar-accent text-sidebar-accent-foreground flex cursor-pointer items-center gap-2 rounded-lg p-2 font-semibold ${isActive && "bg-sidebar-accent"}`
            }
          >
            <LayoutList strokeWidth={1.5} size={20} />
            My Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              `hover:bg-sidebar-accent text-sidebar-accent-foreground flex cursor-pointer items-center gap-2 rounded-lg p-2 font-semibold ${isActive && "bg-sidebar-accent"}`
            }
          >
            <FolderKanban strokeWidth={1.5} size={20} />
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              `hover:bg-sidebar-accent text-sidebar-accent-foreground flex cursor-pointer items-center gap-2 rounded-lg p-2 font-semibold ${isActive && "bg-sidebar-accent"}`
            }
          >
            <SlidersHorizontal strokeWidth={1.5} size={20} />
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
