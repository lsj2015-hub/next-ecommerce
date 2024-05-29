import Add from '@/components/add';
import CustomizeProducts from '@/components/customize-products';
import ProductImages from '@/components/product-images';

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          obcaecati deleniti eaque quis, expedita nulla repellendus esse, rerum
          tempora dolorem officiis quisquam pariatur? Iste modi harum
          blanditiis, obcaecati facilis voluptate!
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            non libero vitae soluta quod impedit est id dolor eaque voluptatum
            dolorum, reprehenderit aperiam, natus ipsam exercitationem
            voluptatem animi vero nihil?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            non libero vitae soluta quod impedit est id dolor eaque voluptatum
            dolorum, reprehenderit aperiam, natus ipsam exercitationem
            voluptatem animi vero nihil?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            non libero vitae soluta quod impedit est id dolor eaque voluptatum
            dolorum, reprehenderit aperiam, natus ipsam exercitationem
            voluptatem animi vero nihil?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
