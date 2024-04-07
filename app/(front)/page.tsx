/* eslint-disable @next/next/no-img-element */
'use';
import ProductItem from '@/components/products/ProductItem';
import data from '@/lib/data';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Money Swag',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
};

export default async function Home() {
  const featuredProducts = await productService.getFeatured(); // Todo: mark items as featured
  const latestProducts = await productService.getLatest(); // Returns the latest 4 products

  return (
    <>
    <section id='home'>
      {/* Featured Carousel */}
      <h1 className='text-center text-2xl'>Featured</h1>
      <div className='w-full carousel rounded-box mt-4'>
        {featuredProducts.map((product, index) => (
          <div
            key={product._id}
            id={`slide-${index}`}
            className='carousel-item relative w-full'
          >
            <Link href={`/product/${product.slug}`}>
              <p>{product.name}</p>
              <img
                src={product.banner}
                className='w-full'
                alt={product.name}
              />
            </Link>

            {/* Arrows */}
            <div
              className='absolute flex justify-between transform 
               -translate-y-1/2 left-5 right-5 top-1/2'
            >
              <a
                href={`#slide-${
                  index === 0 ? featuredProducts.length - 1 : index - 1
                }`}
                className='btn btn-circle'
              >
                ❮
              </a>
              <a
                href={`#slide-${
                  index === featuredProducts.length - 1 ? 0 : index + 1
                }`}
                className='btn btn-circle'
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Products */}
      <h2 className='text-2xl py-2'>Latest Products</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {/* Latest store */}
        {latestProducts.map((product) => (
          <ProductItem
            key={product.slug}
            product={convertDocToObj(product)}
          />
        ))}
      </div>
      </section>
    </>
  );
}
