/* eslint-disable @next/next/no-img-element */
// this will have the featured and latest products

import ProductItem from '@/components/products/ProductItem';
import data from '@/lib/data';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { statistics } from '../constants';
import AboutUs from '../(sections)/AboutUs';
import Services from '../(sections)/Services';
import SpecialOffer from '../(sections)/SpecialOffer';
import CustomerReviews from '../(sections)/CustomerReviews';
import Subscribe from '../(sections)/Subscribe';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || '$avvy\'s World',
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
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
          <p className='text-xl text-primary'>Our Summer collections</p>

          <h1 className='mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              The New Arrival
            </span>
            <br />
            <span className='text-primary inline-block mt-3'>Swagger</span>{' '}
            Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Discover stylish brand arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <Link href={'/search'}>
            <button className='btn btn-primary'>Shop now</button>
          </Link>

          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        </div>



        
        {/* Featured Carousel */}
        <section id='featured'>
        <div className="flex flex-col justify-start gap-5 mt-20">
        <h2 className="text-4xl font-bold text-center">Our <span className="text-primary">Featured</span> Products</h2>
        <p className="mt-2 text-slate-gray text-center">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
      </div>
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
        </section>

        {/* Latest Products */}
        <h2 className='text-2xl py-2'>Latest Products</h2>
        <section id='latest'>
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
      </section>

      {/* About Us */}
      <AboutUs />
      {/* Services */}
      <Services />
      {/* Special Offer */}
      <SpecialOffer />
      {/* Customer reviews */}
      <CustomerReviews />
      {/* Subscribe to newletter */}
      <Subscribe />
    </>
  );
}
