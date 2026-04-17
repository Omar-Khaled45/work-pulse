import {
  FolderKanban,
  Home,
  LayoutList,
  SlidersHorizontal,
} from "lucide-react";
import { NavLink, useLocation } from "react-router";

import Logo from "@/components/common/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const location = useLocation();

  const items = [
    { title: "Home", to: "/home", icon: Home },
    { title: "My Tasks", to: "/tasks", icon: LayoutList },
    { title: "Projects", to: "/projects", icon: FolderKanban },
    { title: "Settings", to: "/settings", icon: SlidersHorizontal },
  ];

  return (
    <Sidebar className="border-none p-3">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="mt-4">
          <SidebarGroupContent>
            <SidebarMenu className={"space-y-2"}>
              {items.map((item) => {
                const isActive = item.to === location.pathname;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className="p-5"
                      asChild
                      isActive={isActive}
                    >
                      <NavLink to={item.to} className="gap-4 text-lg!">
                        <item.icon className="size-5!" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
