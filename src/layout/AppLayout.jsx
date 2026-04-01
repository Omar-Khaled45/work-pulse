import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/layout/components/Header";
import Main from "@/layout/components/Main";
import AppSidebar from "@/layout/components/AppSidebar";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <div className="bg-sidebar flex h-screen w-full p-2">
        <AppSidebar />
        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl shadow-xl">
          <Header />
          <Main />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
