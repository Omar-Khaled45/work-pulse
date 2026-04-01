import { Plus, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TaskItemsContainer from "@/features/tasks/TaskItemsContainer";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import Heading from "@/components/common/Heading";

const MyTasks = () => {
  return (
    <>
      <div className="flex justify-between space-y-3 @max-md:mb-3 @max-md:flex-col @md:items-center">
        <Heading title={"My Tasks"}>
          Track and manage individual action items.
        </Heading>
        <Button size="lg" className="@max-md:w-full">
          <Plus /> Add Task
        </Button>
      </div>

      <div className="mb-5">
        <Field orientation="horizontal" className="max-w-xl">
          <InputGroup className={"bg-white"}>
            <InputGroupInput id="inline-start-input" placeholder="Search..." />
            <InputGroupAddon align="inline-start">
              <SearchIcon className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
          <Select>
            <SelectTrigger className="w-45 bg-white">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="to-do">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-45 bg-white">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="to-do">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </div>

      <TaskItemsContainer />
    </>
  );
};

export default MyTasks;
