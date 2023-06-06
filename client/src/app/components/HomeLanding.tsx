"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AccountCard from "./AccountCard";
import Spacer from "@/shared/ui/components/Spacer";
import Strings from "@/shared/utils/Strings";
import UserRole from "@/shared/models/UserRole.model";

const HomeLanding = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [selectedTab, setSelectedTab] = useState(UserRole.SUPPLIER);
  const [selectedTabDesc, setSelectedTabDesc] = useState(Strings.SUPPLIER_DESC);

  const onClickTab = (tab: UserRole) => {
    setSelectedTab(tab);
    switch (tab) {
      case UserRole.SUPPLIER:
        setSelectedTabDesc(Strings.SUPPLIER_DESC);
        break;
      case UserRole.MANUFACTURER:
        setSelectedTabDesc(Strings.MANUFACTURER_DESC);
        break;
      case UserRole.CARRIER:
        setSelectedTabDesc(Strings.TRANSPORTER_DESC);
        break;
      case UserRole.RETAILER:
        setSelectedTabDesc(Strings.RETAILER_DESC);
        break;
      case UserRole.CUSTOMER:
        setSelectedTabDesc(Strings.CUSTOMER_DESC);
        break;
    }
  };

  const supplierDesc =
    "Manage suppliers and their information, track deliveries, and" +
    "collaborate seamlessly";

  const manufacturerDesc =
    "Streamline production processes, monitor inventory levels,";

  const carrierDesc =
    "Efficiently manage logistics, track shipments, and optimize";

  const distributorDesc =
    "Manage distribution networks, track shipments, and optimize";

  const customerDesc =
    "Track order status, receive notifications, and access product";

  return (
    <div className="bg-supply-black min-h-screen">
      <div className="pt-36">
      <div className="mx-auto bg-gradient-to-br from-blue-100 via-purple-200 to-green-100 xl:rounded-3xl" data-aos="fade-up">
  <button className="flex items-center pl-8 pr-5 py-0.5 text-sm font-medium text-header rounded-full bg-gradient-to-br from-text-color to-text-color shadow text-left">
    Quality Medication Assurance
    <div className="h-10 w-10 flex items-center justify-center ml-3">
      <img src="icon.svg" alt="headerbutton" />
    </div>
  </button>
 
    
  <div className="grid grid-cols-12 items-start gap-y-4 md:gap-8">
    <div className="col-span-12 text-center md:col-span-6 md:text-left">
      
      <h1 className="text-text-color pt-8 font-bold text-3xl pb-8">Securely Empowering <div>Pharmacy Supply Chain</div> with Blockchain <div>Innovation</div></h1>
      <p className="my-5 text-lg text-onSecondary-dark pr-8 pb-10">
        We make our customers' pharmacy experience efficient, personalized, and exceptional.
      </p> 
      <div className="flex content-justify">
        <button className="flex items-center px-16 py-2 text-sm font-medium text-onPrimary-dark rounded-full bg-green1 from-text-color to-text-color shadow transition-all hover:scale-95 focus:scale-95 text-justify">
          Explore
        </button>
        <button className="flex items-center px-12 ml-4 py-0.5 text-sm font-medium text-header rounded-full bg-gradient-to-br from-text-color to-text-color shadow transition-all hover:scale-95 focus:scale-95 text-justify">
          Let's know
        </button>
      </div>
    </div>

    <div className="col-span-6 md:col-span-6 flex justify-end ">
        <img className="w-58 mb-10" src="home_banner.svg" alt="Banner" />
    </div> 
  </div>
</div>
</div>

      <main className="mx-auto pt-16 sm:px-0 lg:px-0">
        <div className="sm:px-0" data-aos="fade-up">
          <h2 className="text-3xl underline-offset-4 opacity-55 font-semibold mb-8 text-text-color">
            Welcome to Our Platform
          </h2>
          <Spacer height={12} />

          <div className="text-gray-300 text-clip w-3/5 overflow-hidden mb-8 text-justify">
            <p>
              We are delighted to welcome you to our cutting-edge platform
              revolutionizing the pharmacy supply chain through blockchain
              technology. With our innovative solutions, we are dedicated to
              enhancing the integrity, security, and efficiency of
              pharmaceutical distribution.
            </p>

            <br />

            <p>
              Our platform leverages the power of blockchain to create a
              transparent and tamper-proof ecosystem, ensuring that every step
              of the supply chain is traceable and secure.
            </p>
            <br />
            <p>
              {" "}
              From manufacturers and distributors to pharmacies and healthcare
              providers, our platform serves as a centralized hub for
              transparent and accountable transactions.
            </p>
            <br />
          </div>
        </div>
      </main>

      {/* card */}

      <div className="mx-auto pt-32 sm:px-0 lg:px-0">
        <div className="flex justify-center" data-aos="fade-up">
          <AccountCard
            description={supplierDesc}
            imageSrc="supplier.svg"
            title={"Supplier"}
          />
          <AccountCard
            description={manufacturerDesc}
            imageSrc="manufacturer.svg"
            title={"Manufacturer"}
          />
          <AccountCard
            description={carrierDesc}
            imageSrc="carrier.svg"
            title={"Carrier"}
          />
        </div>
        <div className="flex justify-center pt-6" data-aos="fade-up">
          <AccountCard
            description={distributorDesc}
            imageSrc="distributor.svg"
            title={"Distributor"}
          />
          <AccountCard
            description={customerDesc}
            imageSrc="customer.svg"
            title={"Customer"}
          />
        </div>
      </div>
      {/* .......end of card */}

      {/* we offer section */}

      <div className="mx-auto pt-32 sm:px-0 lg:px-0">
        <div className="sm:px-4">
          <div
            className="mb-2 border-l-2 border-green-200 pl-3 text-sm font-medium text-onSecondary-dark"
            data-aos="fade-up"
          >
            WHAT WE OFFER
          </div>
          <div className="max-w-screen-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold md:text-3xl lg:text-5xl text-text-color">
              Our Supply Chain Offers
            </h3>
            <p className="mt-4 text-md text-onSecondary-dark text-justify text-clip w-5/5 overflow-hidden mb-8 ">
              Our platform is dedicated to revolutionizing the pharmaceutical
              supply chain by leveraging the power of blockchain technology. We
              understand the unique needs and challenges faced by suppliers,
              carriers, manufacturers, retailers, and customers within this
              complex ecosystem. Therefore, we have tailored our offerings to
              address their specific requirements and deliver value at every
              stage of the supply chain. Below, you will find a comprehensive
              overview of the offerings we provide to each customer segment. Our
              goal is to enhance transparency, efficiency, and trust while
              ensuring the integrity and safety of pharmaceutical products.
            </p>
          </div>
          <div className="mt-16" data-aos="fade-up">
            <div className="flex flex-col md:flex-row">
              <div className="md:mr-4 md:w-full md:max-w-xs">
                <button
                  data-ref="1"
                  onClick={() => onClickTab(UserRole.SUPPLIER )}
                  className={`${
                    selectedTab == UserRole.SUPPLIER && "text-white"
                  } tab-btn text-md mb-4 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full`}
                >
                  Supplier
                </button>
                <button
                  data-ref="2"
                  onClick={() => onClickTab(UserRole.CARRIER)}
                  className={`${
                    selectedTab == UserRole.CARRIER && "text-white"
                  } tab-btn text-md mb-4 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full`}
                >
                  Carrier
                </button>
                <button
                  onClick={() => onClickTab(UserRole.MANUFACTURER)}
                  className={`${
                    selectedTab == UserRole.MANUFACTURER && "text-white"
                  } tab-btn text-md mb-4 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full`}
                >
                  Manufacturer
                </button>
                <button
                  data-ref="4"
                  onClick={() => onClickTab(UserRole.RETAILER)}
                  className={`${
                    selectedTab == UserRole.RETAILER && "text-white"
                  } tab-btn text-md mb-4 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full`}
                >
                  Retailer
                </button>
                <button
                  onClick={() => onClickTab(UserRole.CUSTOMER)}
                  className={`${
                    selectedTab == UserRole.CUSTOMER && "text-white"
                  } tab-btn text-md mb-4 ml-0 mt-0 inline-block text-center md:text-right font-medium text-green-600 hover:text-white md:w-full`}
                >
                  Customer
                </button>
              </div>

              <div className="border-gray-200 md:border-l-2 md:px-4">
                <div data-id="1" className="tab-body" data-aos="fade-up">
                  <h4 className="text-2xl text-start text-green-600">
                    <strong>{Object.values(selectedTab)}</strong>
                  </h4>
                  <p className="mt-6 text-sm text-onSecondary-dark">
                    {selectedTabDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* .........> */}

      <div className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-text-color">
            © 2023 Pharmaceutical Supply Chain. All rights reserved.
          </div>
        </div>
      </div>

      <div className="pt-16"></div>
    </div>
  );
};

export default HomeLanding;
