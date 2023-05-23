import React from "react";
import Nav from "../Nav";
const SupplySubmit = () => {
  return (
    <div className="bg-supply-black min-h-screen">
      <div className="max-w-7xl mx-auto sm:px-0 lg:px-0">
        <Nav
          Leftimagescr="images/navimg.svg"
          Button={
            <button className="rounded-8px text-sm font-medium h-8 w-24 ml-4 bg-black-primary">
              Click Me
            </button>
          }
          Rightimagescr="images/logout.svg"
        />
      </div>

      <div className="pt-36">
        <div className="flex justify-start ml-24">
          <div className="max-w-7xl sm:px-0 lg:px-0">
            <div className="flex items-start mb-8 ">
              <label
                htmlFor="price"
                className="block text font-medium mb-2 mr-6 text-text-color px-3 py-3 "
              >
                Price per Unit
              </label>
              <div className="flex">
                <input
                  className="border-2 border-form rounded-md px-3 py-6 bg-supply-black h-8 w-[550px] flex-grow "
                  placeholder="Enter the price of the product..."
                />
              </div>
            </div>
            <div className="flex items-start mb-8">
              <label
                htmlFor="price"
                className="block text font-medium mb-2  text-text-color pl-3 py-3 mr-2 flex-grow"
              >
                Unit
              </label>
              <div className="flex ">
                <input
                  className="border-2 border-form rounded-md px-3 py-6 bg-supply-black h-8 w-[550px]  flex-grow"
                  placeholder="Enter what unit eg:KG..."
                />
              </div>
            </div>
            <div className="flex items-start mb-8 ">
              <label
                htmlFor="total unit"
                className="block text font-medium mb-2 mr-12 text-text-color px-3 py-3"
              >
                Total Unit
              </label>
              <div className="flex">
                <input
                  className="border-2 border-form rounded-md px-3 py-6 bg-supply-black h-8 w-[550px] flex-grow ml-2 "
                  placeholder="Enter the  total price of the product..."
                />
              </div>
            </div>

            <div className="flex items-start mb-8 ">
              <label
                htmlFor="price"
                className="block text font-medium mb-2 mr-10  text-text-color px-3 py-3 "
              >
                Description
              </label>
              <div className="flex">
                <input
                  className="border-2 border-form rounded-md px-3 py-6 bg-supply-black h-8 w-[550px] flex-grow "
                  placeholder="Enter the Description of product..."
                />
              </div>
            </div>

            <div className="flex items-start mb-8 ">
              <label
                htmlFor="price"
                className="block text font-medium mb-2 mr-12 text-text-color px-3 py-3 "
              >
                Supply To
              </label>
              <div className="flex">
                <input
                  className="border-2 border-form rounded-md px-3 py-6 bg-supply-black h-8 w-[550px] flex-grow ml-1"
                  placeholder="Enter manufacturer address..."
                />
              </div>
            </div>

       

            <div className="flex items-start">
  <label
    htmlFor="From"
    className="text font-medium mb-2 mr-20 text-text-color px-3 "
  >
    From
  </label>
  <input
    className="underline text-blue border-none bg-transparent "
    value="abcdefghijkllsjd"
  />
</div>


<div className="flex items-start mb-8">
  <label
    htmlFor="productId"
    className="text font-medium  mr-10 text-text-color px-3 "
  >
    Product Id
  </label>
  <input
    className="underline text-text-color border-none bg-transparent ml-1"
    value="abcdefghijklmnop"
  />
</div>


<div className="flex items-start ">
<button className="mt-4 bg-button hover:bg-green-700 text-black font-semibold py-1 px-4 rounded-md h-10 w-[300px] mb-8 ml-2">
    Submit
  </button>

</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplySubmit;
