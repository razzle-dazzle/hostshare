import { RoomInfo } from "@/app/model/listing.model";
import { DatePickerWithRange } from "../../Shadcn/DatePicker";
import { Button } from "../../Shadcn/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../Shadcn/Select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Shadcn/Accordion";

type Props = {
  data: RoomInfo;
};

const ReserveWidget = ({ data }: Props) => {
  return (
    <div className="md:sticky md:top-5 border-zinc-200 border-solid rounded-t-lg md:rounded-lg shadow-2xl dark:bg-slate-800">
      <div className="text-black dark:text-white">
        <div className="px-3 py-3 md:px-6 md:py-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:hidden">
                <div className="flex justify-between items-center w-full px-1">
                  <span>Reserve</span>
                  <span>
                    {data.currency.symbol}{data.price} / night
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {/* Price and reviews */}
                <div className="flex mb-6 md:mb-8">
                  <div className="flex-1 flex items-center gap-1.5">
                    <span className="text-xl font-semibold">
                      {data.currency.symbol}{data.price}
                    </span>
                    <span className="text-md text-gray-600 dark:text-white">
                      night
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-end">
                    <span className="text-gray-600 dark:text-white text-sm">
                      (65 reviews)
                    </span>
                  </div>
                </div>

                <div className="my-2">
                  <hr />
                </div>

                <div className="my-6 md:my-8">
                  <p className="text-md font-semibold mb-2">
                    Check-in / Check-out
                  </p>
                  <DatePickerWithRange></DatePickerWithRange>
                </div>

                <div className="my-6 md:my-8">
                  <p className="text-md font-semibold mb-2">Guests</p>
                  <FakeGuestSelect></FakeGuestSelect>
                </div>

                <div className="mt-6 md:mt-8">
                  <Button variant="destructive" className="rounded-md w-full">
                    Check availability
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ReserveWidget;

const FakeGuestSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Choose guests" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Guests</SelectLabel>
          <SelectItem value="1">1 Guest</SelectItem>
          <SelectItem value="2">2 Guest</SelectItem>
          <SelectItem value="3">3 Guest</SelectItem>
          <SelectItem value="4">4 Guest</SelectItem>
          <SelectItem value="5">5 Guest</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
