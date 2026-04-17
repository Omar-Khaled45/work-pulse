import { Routes, Route, Navigate, useLocation } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./layout/AppLayout";

import MyTasks from "./pages/MyTasks";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import AppHome from "./pages/AppHome";
import ProjectDetails from "./pages/ProjectDetails";

import TaskDetails from "./features/tasks/TaskDetails";

const queryClient = new QueryClient();

window.__TANSTACK_QUERY_CLIENT__ = queryClient;

const App = () => {
  const location = useLocation();

  const state = location.state;

  return (
    <QueryClientProvider client={queryClient}>
      <Routes location={state?.backgroundLocation || location}>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<AppHome />} />
          <Route path="tasks" element={<MyTasks />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetails />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="task/:taskId" element={<TaskDetails />} />
        </Routes>
      )}
    </QueryClientProvider>
  );
};

export default App;
