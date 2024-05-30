// 'use client';

import CategoryList from '@/components/category-list';
import ProductList from '@/components/product-list';
import Slider from '@/components/slider';
import { useWixclient } from '@/hooks/use-wix-client';
import { wixClientServer } from '@/lib/wix-client-server';
import { useEffect } from 'react';

const HomePage = async () => {
  // const wixClient = useWixclient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wikClient.products.queryProducts().find();
  //     console.log(res);
  //   };

  //   getProducts();
  // }, [wixClient]);

  const wikClient = await wixClientServer();

  const res = await wikClient.products.queryProducts().find();

  console.log(res);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
