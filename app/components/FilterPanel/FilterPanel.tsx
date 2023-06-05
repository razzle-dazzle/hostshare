import { Categories } from "@/app/model/listing.model";
import Image from "next/image";
type Props = {
  categories: Categories[];
};

const FilterPanel = ({ categories }: Props) => {
  return (
    <div className="grid gap-8 w-full" style={{
      gridAutoColumns: 'max-content',
      gridAutoFlow: 'column',
      gridTemplateAreas: 'none',
      gridTemplateRows: '78px',
      paddingLeft: 24,
      paddingRight: 24,
      overflow: 'hidden',
      overflowX: 'scroll',
      maxWidth: '100%',
    }}>
      {categories.map((category, index) => {
        return <CategoryItem key={index} {...category}></CategoryItem>;
      })}
    </div>
  );
};

const CategoryItem = (category: Categories) => {
  const src = `/icons/${category.type}.jpg`;
  return (
    <div className="flex flex-col items-center justify-center w-full h-full my-3 mb-2.5 py-1 transition-colors cursor-pointer text-[#171717]">
      <Image src={src} alt={category.type} width={24} height={24} />
      <p className="whitespace-nowrap text-black dark:text-white m-0 text-xs font-semibold">{category.title}</p>
    </div>
  );
};

export default FilterPanel;
