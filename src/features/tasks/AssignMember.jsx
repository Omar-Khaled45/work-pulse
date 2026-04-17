import { CircleAlert } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const AssignMember = ({ field, error }) => {
  return (
    <>
      <Label htmlFor="priority">
        Assignee<span className="text-destructive">*</span>
      </Label>
      <Select onValueChange={field.onChange}>
        <SelectTrigger
          id="priority"
          className={Boolean(error?.message) && "border-destructive border-2"}
        >
          <SelectValue placeholder="Select a member" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="User 1">User 1</SelectItem>
            <SelectItem value="User 2">User 2</SelectItem>
            <SelectItem value="User 3">User 3</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {error?.message && (
        <p className="text-destructive flex items-center gap-2">
          <CircleAlert size={18} /> {error.message}
        </p>
      )}
    </>
  );
};

export default AssignMember;
