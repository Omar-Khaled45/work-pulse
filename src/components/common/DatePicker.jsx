import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleAlert } from "lucide-react";

const DatePicker = ({ field, error }) => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return (
    <>
      <Label htmlFor="date-picker-simple">
        Due Date<span className="text-destructive">*</span>
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className={`justify-start font-normal ${Boolean(error?.message) && "border-destructive border-2"}`}
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        {error?.message && (
          <p className="text-destructive flex items-center gap-2">
            <CircleAlert size={18} /> {error.message}
          </p>
        )}
        <PopoverContent className="p-0" align="center">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            captionLayout="dropdown"
            disabled={(date) => date < today}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DatePicker;
