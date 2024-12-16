import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../component/Header';
import LoginNavbar from "../component/LoginNavbar"
import Cards from "../component/products";
import TrustedCompanies from '../component/comapnies';
import FilterSection from '../component/filter-section';
import ImageGrid from '../component/product-image';

const Hero = () => {
    return (
        <>
        <Header />
        <LoginNavbar/>
            <div className="px-6 mt-4 gap-4">
                <div className='flex justify-between items-center'>
                    <h2 className='text-[#252B42] font-bold text-[24px]'>Shop</h2>
                    <div className="text-[#252B42] font-bold text-[14px] flex items-center gap-1">
                        Home <div className="text-[#BDBDBD] text-[25px]" ><FiChevronRight />{" "}</div>
                        <span className="text-[#737373]">Shop</span>
                    </div>
                </div>
                <div>
                    <ImageGrid/>
                </div>
            </div>
            <div className='mt-10 h-20 items-center'>
                <FilterSection/>
            </div>
            <div className='mt-10 bg-gray-300 h-20 items-center'>
               <TrustedCompanies/> 
            </div>
                
            <Cards/>
        </>
    );
};

export default Hero;