import React from "react";
import CardProducts from "./CardProducts";


const Products = ({products}) => {
  // console.log(products);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping EveryDay
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam fugiat
          enim labore sunt reprehenderit saepe voluptas iste laborum veniam
          aspernatur culpa assumenda facilis accusamus expedita iure porro hic
          et nihil, dolorum est sapiente? Soluta, debitis. Minus veniam ipsum
          quod cupiditate?
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {
          products?.map(item=>(
            <CardProducts key={item._id} product={item} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
