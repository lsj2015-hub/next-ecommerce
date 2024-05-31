'use client';

import Image from 'next/image';
import { useState } from 'react';

// const images = [
//   {
//     id: 1,
//     url: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: 2,
//     url: 'https://images.pexels.com/photos/1630344/pexels-photo-1630344.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: 3,
//     url: 'https://images.pexels.com/photos/768975/pexels-photo-768975.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
//   {
//     id: 4,
//     url: 'https://images.pexels.com/photos/1328545/pexels-photo-1328545.jpeg?auto=compress&cs=tinysrgb&w=800',
//   },
// ];

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {items.map((item: any, i: number) => (
          <div
            key={item._id}
            className="w-1/4 h-32 relative gap-4 mt-8"
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
