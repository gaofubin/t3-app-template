"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useFormContext } from "react-hook-form";

interface ComboboxDemoProps<T> {
    data: T[] | undefined;
    fieldName: keyof T;
}
export function ComboboxDemo<T>({ data, fieldName }: ComboboxDemoProps<T>) {
    const [open, setOpen] = React.useState(false);
    const form = useFormContext();

    const handleSelect = (item: T) => {
        form.setValue(fieldName as string, item[fieldName]);
        // setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {form.getValues(fieldName as string)
                        ? (
                            data?.find(
                                (item) =>
                                    item[fieldName] === form.getValues(fieldName as string)
                            )?.[fieldName] || ""
                        ).toString()
                        : "Select..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <ScrollArea className="h-72">
                        <CommandGroup>
                            {data?.map((item) => (
                                <CommandItem
                                    value={item[fieldName] as string}
                                    key={item[fieldName] as string}
                                    onSelect={() => handleSelect(item)}
                                >
                                    <Check
                                        className={`mr-2 h-4 w-4 ${item[fieldName] === form.getValues(fieldName as string)
                                                ? "opacity-100"
                                                : "opacity-0"
                                            }`}
                                    />
                                    {item[fieldName] as string}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </ScrollArea>
                </Command>
            </PopoverContent>
        </Popover>
    );
}