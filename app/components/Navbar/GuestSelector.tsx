import { useState } from "react";
import { Button } from "../Shadcn/Button";
import { Plus, Minus } from "lucide-react";

const blocks: { title: string; subtitle: string }[] = [
  {
    title: "Adults",
    subtitle: "Ages 13 or above",
  },
  {
    title: "Children",
    subtitle: "Ages 2-12",
  },
  {
    title: "Infants",
    subtitle: "Under 2",
  },
  {
    title: "Pets",
    subtitle: "Excludes service animals",
  },
];

type Props = {};
const GuestSelector = (props: Props) => {
  const handleValueChange = (newValue: number, index: number) => {
    console.log(newValue, index);
  };

  return (
    <div className="text-black dark:text-white">
      {blocks.map((block, index) => (
        <SelectionBlock
          key={index}
          {...block}
          onValueChange={handleValueChange}
        />
      ))}
    </div>
  );
};

interface SelectionBlockProps {
  onValueChange: (newValue: number, index: number) => void;
  title: string;
  subtitle: string;
}

const SelectionBlock = ({
  onValueChange,
  title,
  subtitle,
}: SelectionBlockProps) => {
  const [value, setValue] = useState(0);
  const handleValueChange = (plusMinus: "plus" | "minus") => {
    console.log("Handle increment / decrement here and emit...");
  };
  return (
    <div className="grid grid-cols-2 gap-2 my-4">
      <div className="flex flex-col justify-start">
        <div className="font-semibold">{title}</div>
        <div className='font-sm text-gray-500'>{subtitle}</div>
      </div>

      <div className="flex justify-end items-center gap-1">
        <Button
          variant="secondary"
          className="rounded-full"
          onClick={() => handleValueChange("plus")}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <div className="text-md w-8 text-center">{value}</div>
        <Button
          variant="secondary"
          className="rounded-full"
          onClick={() => handleValueChange("minus")}
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
export default GuestSelector;
