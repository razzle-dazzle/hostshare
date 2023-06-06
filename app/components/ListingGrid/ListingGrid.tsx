type Props = {
  halfscreen?: boolean;
};

const ListingGrid = ({ children, halfscreen = false }: React.PropsWithChildren<Props>) => {
  
  // small layout when the map is on the side!
  if (halfscreen) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-[24px]">
        {children}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-[24px] my-4">
      {children}
    </div>
  );
};

export default ListingGrid;
