"use client";

import React, {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Strings from '../../shared/utils/Strings'
import AccountCard from "./AccountCard"; 
import Spacer from "@/shared/ui/components/Spacer";


const HomeLanding = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const removeTabClass = (event: React.MouseEventHandler<HTMLButtonElement>) => {
    // const selectedTab = event.target.getAttribute("data-ref");
    // const tabBodies = document.getElementsByClassName("tab-body");
    // const tabButtons = document.getElementsByClassName("tab-btn");

    // for (let i = 0; i < tabBodies.length; i++) {
    //   const tabBody = tabBodies[i];
    //   const tabButton = tabButtons[i];

    //   if (tabBody.getAttribute("data-id") === selectedTab) {
    //     tabBody.classList.remove("hidden");
    //     tabButton.classList.add("text-white");
    //     tabButton.classList.remove("text-green-600");
    //   } else {
    //     tabBody.classList.add("hidden");
    //     tabButton.classList.remove("text-white");
    //     tabButton.classList.add("text-green-600");
    //   }
    // }
  };


  const supplierDesc = "Manage suppliers and their information, track deliveries, and"
                        + "collaborate seamlessly to ensure a reliable supply chain.";
  
  const manufacturerDesc = "Streamline production processes, monitor inventory levels,"
                            + "and ensure compliance with industry regulations.";

  const carrierDesc = "Efficiently manage logistics, track shipments, and optimize" +
                          "delivery routes to ensure timely and safe transportation of" +
                          "products.";

  const distributorDesc = "Manage distribution networks, track shipments, and optimize" 
                        +"inventory to ensure timely delivery to customers.";    
                        
  const customerDesc = "Track order status, receive notifications, and access product" +
                        "information easily through our user-friendly customer portal.";                      


  return (
    <div className="bg-supply-black min-h-screen">
      <div className="pt-32">
        {/* header section */}
        
        <div className="mx-auto max-w-7xl bg-gradient-to-br from-blue-100 via-purple-200 to-green-100 xl:rounded-3xl">
          <div>
            <div className="grid grid-cols-12 items-center gap-y-8 md:gap-8">
              <div className="col-span-12 text-center md:col-span-6 md:text-left">
                <h1 className="text-3xl font-bold md:text-4xl">
                  Pharmaceutical{" "}
                  <span className="text-green-500">Supply Chain</span> Using
                  Blockchain
                </h1>
                <div className="my-5 text-sm text-gray-600 font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates delectus cupiditate perferendis voluptatibus
                  consequuntur quaerat nulla laudantium sunt dolores in.
                </div>
                <div className="inline-block cursor-pointer rounded-lg bg-gradient-to-br from-green-500 to-green-600 px-4 py-3 text-sm font-medium text-white shadow transition-all hover:scale-95 focus:scale-95">
                  Explore Now
                </div>
              </div>
              <div className="">
                <video className="mx-auto w-56 md:w-96" controls src="video.mp4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto pt-36 sm:px-0 lg:px-0" >
        <div className="sm:px-0" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4 text-text-color font-sans">
            Welcome to Our Platform
          </h2>
          <Spacer height={10}/>

          <p className="text-gray-300 text-clip overflow-hidden text-justify mb-8 font-sans">
            We provide end-to-end solutions for pharmaceutical supply chain
            management. Our platform ensures efficient tracking and delivery of
            pharmaceutical products from suppliers to manufacturers,
            distributors, customers, and carriers.
          </p>
        </div>
      </main>

    <Spacer height={10}/>
    
      {/* card */}
      <div className="max-w-7xl mx-auto pt-36 sm:px-0 lg:px-0" >
        <div className=" sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6" data-aos="fade-up" >
            <AccountCard description={supplierDesc} imageSrc="images/supplier.svg" title ={"Supplier"}/>
            <AccountCard description={manufacturerDesc} imageSrc="images/manufacturer.svg" title ={"Manufacturer"}/>
            <AccountCard description={carrierDesc} imageSrc="images/carrier.svg" title ={"Carrier"}/>
            <AccountCard description={distributorDesc} imageSrc="images/distributor.svg" title ={"Distributor"}/>
            <AccountCard description={customerDesc} imageSrc="images/customer.svg" title ={"Customer"}/>
          </div>
        </div>
      </div>
      {/* .......end of card */}

      {/* we offer section */}

      <section className="max-w-7xl mx-auto pt-36 sm:px-4 md:px-0 lg:px-8 xl:px-0">
        <div className="sm:px-4">
          <div
            className="mb-2 border-l-2 border-green-200 pl-3 text-sm font-medium text-text-color"
            data-aos="fade-up"
          >
            WHAT WE OFFER
          </div>
          <div className="max-w-screen-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold md:text-3xl lg:text-5xl text-text-color font-sans">
              Our Supply Chain Offers
            </h3>
            <p className="mt-4 text-sm text-text-color font-sans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              modi quo, laborum beatae voluptate saepe reprehenderit, itaque
              nostrum veniam quas, voluptatum sit perspiciatis repellendus
              quidem labore officia nesciunt hic dignissimos magni?
            </p>
          </div>
          <div className="mt-8" data-aos="fade-up">
            <div className="flex flex-col md:flex-row">
              <div className="md:mr-4 md:w-full md:max-w-xs">
                <button
                  data-ref="1"
                  //onClick={removeTabClass}
                  className="tab-btn text-md m-2 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full"
                >
                  Supplier
                </button>
                <button
                  data-ref="2"
                  //onClick={removeTabClass}
                  className="tab-btn text-md m-2 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full"
                >
                  Carrier
                </button>
                <button
                  data-ref="3"
                  //onClick={removeTabClass}
                  className="tab-btn text-md m-2 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full"
                >
                  Manufacturer
                </button>
                <button
                  data-ref="4"
                  //onClick={removeTabClass}
                  className="tab-btn text-md m-2 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full"
                >
                  Distributor
                </button>
                <button
                  data-ref="5"
                  //onClick={removeTabClass}
                  className="tab-btn text-md m-2 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full"
                >
                  Customer
                </button>
              </div>
              <div className="border-gray-200 md:border-l-2 md:px-4">
                <div data-id="1" className="tab-body">
                  <h4 className="text-2xl text-green-600">
                    <strong>Supplier</strong>
                  </h4>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                </div>
                <div data-id="2" className="tab-body hidden">
                  <h4 className="text-2xl text-green-600">
                    <strong>Carrier</strong>
                  </h4>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                </div>
                <div data-id="3" className="tab-body hidden">
                  <h4 className="text-2xl text-green-600 font-sans">
                    <strong>Manufacturer</strong>
                  </h4>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                </div>
                <div data-id="4" className="tab-body hidden">
                  <h4 className="text-2xl text-green-600">
                    <strong>Distributor</strong>
                  </h4>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                </div>
                <div data-id="5" className="tab-body hidden">
                  <h4 className="text-2xl text-green-600">
                    <strong>Customer</strong>
                  </h4>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                  <p className="mt-2 text-sm text-text-color font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur obcaecati consequuntur quas incidunt ratione
                    minus, ut officiis hic exercitationem. Eos itaque quas
                    officiis placeat porro minima aliquid asperiores reiciendis
                    provident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* .........> */}

      <footer className="bg-supply-black pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-text-color font-sans">
            © 2023 Pharmaceutical Supply Chain. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLanding;