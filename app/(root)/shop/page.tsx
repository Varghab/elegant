import React, { Suspense } from "react";
const ShopProducts = React.lazy(()=> import("@/components/shared/ShopProducts"));
const Filter = React.lazy(() => import("@/components/shared/Filter"));


const Shop = () => {
  return (
    <div className="min-h-screen wrapper ">
      <div className="sm:min-h-[25rem] min-h-[20rem] bg-[url('/assets/images/shopbanner.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center">
        <div className="text-center">
          <p>Home / Shop</p>
          <h4 className="text-3xl font-bold mt-6">Shop Page</h4>
          <p className="mt-2 p-regular-18 ">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>
      <Suspense fallback={"Loading..."}>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-6 py-8">
          <section className="sm:col-span-1">
            <Filter />
          </section>
          <section className="sm:col-span-3">
            <ShopProducts />
            <div className="mx-auto w-max mt-6">
              <button className="py-2 px-6 border-2 border-neutral-700 rounded-full">Show more</button>
            </div>
          </section>
        </div>
      </Suspense>
    </div>
  );
};

export default Shop;
