type Props = {};

const ListingGrid = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] mt-4">
      {children}
    </div>
  );
};

export default ListingGrid;
