import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./layout/AppLayout";

import MyTasks from "./pages/MyTasks";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import AppHome from "./pages/AppHome";
import ProjectDetails from "./pages/ProjectDetails";

const queryClient = new QueryClient();

window.__TANSTACK_QUERY_CLIENT__ = queryClient;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<AppHome />} />
            <Route path="tasks" element={<MyTasks />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<ProjectDetails />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
