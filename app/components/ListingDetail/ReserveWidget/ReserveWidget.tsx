import { RoomInfo } from "@/app/model/listing.model";

type Props = {
  data: RoomInfo;
};

const ReserveWidget = ({ data }: Props) => {
  return (
    <div className="text-black dark:text-white">
      <div className="sticky">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sit,
          quibusdam impedit adipisci, sequi ipsa, facilis voluptate distinctio
          aliquam vitae facere delectus nemo placeat commodi doloribus et quos
          quam rem consequatur quae dolorum neque nesciunt perferendis
          reiciendis. Excepturi velit odit quae reiciendis deleniti. Cumque,
          voluptas mollitia? Suscipit iusto nostrum ullam corrupti magni
          asperiores, et necessitatibus eum voluptatum repellendus cumque velit
          sit id, ipsum maxime dicta. Ipsum maxime laudantium quos repellendus
          mollitia aspernatur! Aspernatur numquam nihil quidem voluptates nisi
          est atque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sit,
          quibusdam impedit adipisci, sequi ipsa, facilis voluptate distinctio
          aliquam vitae facere delectus nemo placeat commodi doloribus et quos
          quam rem consequatur quae dolorum neque nesciunt perferendis
          reiciendis. Excepturi velit odit quae reiciendis deleniti. Cumque,
          voluptas mollitia? Suscipit iusto nostrum ullam corrupti magni
          asperiores, et necessitatibus eum voluptatum repellendus cumque velit
          sit id, ipsum maxime dicta. Ipsum maxime laudantium quos repellendus
          mollitia aspernatur! Aspernatur numquam nihil quidem voluptates nisi
          est atque!
        </p>
      </div>
    </div>
  );
};

export default ReserveWidget;
