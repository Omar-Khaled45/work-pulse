import { useNavigate } from "react-router";

import Loader from "@/components/common/Loader";
import Error from "@/components/common/Error";
import MobileTaskDetails from "@/features/tasks/MobileTaskDetails";
import DesktopTaskDetails from "@/features/tasks/DesktopTaskDetails";

import { useMediaQuery } from "@/hooks/use-media-query";
import { useGetTaskDetails } from "@/features/tasks/useGetTaskDetails";

const TaskDetails = () => {
  const { isFetchingTaskDetails, task, isError, error } = useGetTaskDetails();

  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isFetchingTaskDetails) return <Loader />;

  if (isError) {
    return <Error error={error.message} />;
  }

  if (isDesktop)
    return <DesktopTaskDetails task={task} handleClose={handleClose} />;

  return <MobileTaskDetails task={task} handleClose={handleClose} />;
};

export default TaskDetails;
