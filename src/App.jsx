import { Routes, Route, Navigate, useLocation } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./layout/AppLayout";

import MyTasks from "@/pages/MyTasks";
import Projects from "@/pages/Projects";
import Settings from "@/pages/Settings";
import AppHome from "@/pages/AppHome";
import ProjectDetails from "@/pages/ProjectDetails";
import Workspaces from "@/pages/Workspaces";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

import TaskDetails from "@/features/tasks/TaskDetails";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import Example from "./pages/Example";

const queryClient = new QueryClient();

window.__TANSTACK_QUERY_CLIENT__ = queryClient;

const App = () => {
  const location = useLocation();

  const state = location.state;

  return (
    <QueryClientProvider client={queryClient}>
      <Routes location={state?.backgroundLocation || location}>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<AppHome />} />
          <Route path="tasks" element={<MyTasks />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<ProjectDetails />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="workspaces" element={<Workspaces />} />
        <Route path="example" element={<Example />} />
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
