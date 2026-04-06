import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { SearchIcon, SearchX } from "lucide-react";

import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Filter = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value) => {
    searchParams.set("status", value);
    setSearchParams(searchParams);
  };

  const handleSearchQuery = () => {
    if (searchQuery.length < 3 && searchQuery !== "") {
      setIsOpen(true);
      return;
    }

    if (searchQuery === "") {
      searchParams.delete("q");
      setSearchParams(searchParams);
    } else {
      searchParams.set("q", searchQuery);
      setSearchParams(searchParams);
    }
  };

  const removeFilter = () => {
    searchParams.delete("status");
    searchParams.delete("q");
    setSearchQuery("");
    setSearchParams(searchParams);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchQuery(searchParams.get("q") || "");
  }, [searchParams]);

  return (
    <>
      <Field orientation="horizontal" className="max-w-xl">
        <InputGroup className={"bg-white"}>
          <InputGroupInput
            id="inline-start-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <InputGroupAddon align="inline-start">
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>

        <Button onClick={handleSearchQuery}>Search</Button>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="flex flex-col items-center sm:max-w-md">
            <DialogTitle>
              <SearchX strokeWidth={1.5} size={50} />
            </DialogTitle>
            <DialogDescription className="text-center text-lg font-semibold">
              Please enter at least 3 characters for searching.
            </DialogDescription>
            <DialogClose asChild>
              <Button type="button" size="lg">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>

        <Select
          value={searchParams.get("status") || "all"}
          onValueChange={(value) => handleChange(value)}
        >
          <SelectTrigger className="w-45 bg-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {(searchQuery !== "" ||
          (searchParams.get("status") &&
            searchParams.get("status") !== "all")) && (
          <Button variant="outline" onClick={removeFilter}>
            Remove Filters
          </Button>
        )}
      </Field>
    </>
  );
};

export default Filter;
