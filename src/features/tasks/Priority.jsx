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

const Priority = ({ value, field, error = {} }) => {
  return (
    <>
      <Label htmlFor="priority">
        Priority<span className="text-destructive">*</span>
      </Label>
      <Select value={value} onValueChange={field.onChange}>
        <SelectTrigger
          id="priority"
          className={Boolean(error?.message) && "border-destructive border-2"}
        >
          <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
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

export default Priority;
