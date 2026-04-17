import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";
import MobileTaskDetails from "./MobileTaskDetails";
import DesktopTaskDetails from "./DesktopTaskDetails";

import { useMediaQuery } from "@/hooks/use-media-query";
import { getTaskDetails } from "@/services/apiTasks";

const TaskDetails = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();

  const {
    isPending,
    isError,
    data: task,
    error,
  } = useQuery({
    queryKey: ["task-details", taskId],
    queryFn: () => getTaskDetails(taskId),
  });

  const handleClose = () => {
    navigate(-1);
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isPending) return <Loader />;

  if (isError) {
    return <Error error={error.message} />;
  }

  if (isDesktop)
    return <DesktopTaskDetails task={task} handleClose={handleClose} />;

  return <MobileTaskDetails task={task} handleClose={handleClose} />;
};

export default TaskDetails;
