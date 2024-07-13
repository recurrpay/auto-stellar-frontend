import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown, Check } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import { cn } from "@/app/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const FundModal = () => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    amount: "",
    token: "XLM",
  });

  const currencies = [
    { label: "XLM", value: "XLM" },
    { label: "USDC", value: "USDC" },
    { label: "USDT", value: "USDT" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInputs((prev) => ({ ...prev, [name]: value }));
  };

  const selectedCurrency = currencies.find(
    (currency) => currency.value === userInputs.token,
  );
  console.log("currencies" + currencies);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Funds</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Deposit Funds</DialogTitle>
            <DialogDescription>Deposit Funds to your account</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center justify-between gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <div className="flex gap-4">
                <Input
                  id="amount"
                  name="amount"
                  value={userInputs.amount}
                  onChange={handleChange}
                  className=""
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[100px] justify-between",
                        !userInputs.token && "text-muted-foreground",
                      )}
                    >
                      {selectedCurrency
                        ? selectedCurrency.label
                        : "Select Currency"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command label="Command Menu">
                      <CommandInput placeholder="Search currency..." />
                      <CommandEmpty>No Currency Found</CommandEmpty>
                      <CommandGroup>
                        {currencies.map((currency) => (
                          <CommandItem
                            key={currency.value}
                            value={currency.value}
                            onSelect={() => {
                              setUserInputs((prev) => ({
                                ...prev,
                                token: currency.value,
                              }));
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                currency.value === userInputs.token
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            {currency.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" className="mt-4 w-full">
              Deposit Funds
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FundModal;
