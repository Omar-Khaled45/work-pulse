import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Calendar, CalendarDayButton } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

const DatePicker = ({ field }) => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return (
    <Field>
      <Label htmlFor="date-picker-simple">
        Due Date<span className="text-destructive">*</span>
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-simple"
            className="justify-start font-normal"
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="center">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) => date < today}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
};

export default DatePicker;
