import Image from "next/image"
import picture1 from "../public/product-cover-1.jpg"
import pic2 from "../public/product-cover-2.jpg" 
import pic3 from "../public/product-cover-3.jpg" 
import pic4 from "../public/product-cover-4.jpg" 
import pic5 from "../public/product-cover-5.jpg" 
import pic6 from "../public/product-cover-6.jpg" 
import pic7 from "../public/product-cover-7.jpg" 
import pic8 from "../public/product-cover-8.jpg" 
import CardText from "./cards-text";
import type { StaticImageData } from 'next/image';


function ProductCardItem({ image, altText }: { image: StaticImageData; altText: string }) {
    return (
      <div className="w-[238px] h-[615px] mx-auto">
        <figure className="w-full h-full">
          <Image src={image} alt={altText} width={239} height={427} />
          <figcaption>
            <CardText />
          </figcaption>
        </figure>
      </div>
    );
  }
  
  export default function ProductCard() {
    const images = [picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  
    return (
      <div className="w-full flex justify-center absolute top-[1470px] left-0">
        <div className="w-[1124px] py-[80px] flex flex-col gap-[80px]">
          {/* Text Section */}
          <div className="text-center space-y-[10px]">
            <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
              Featured Products
            </h4>
            <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
            <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>
  
          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {images.map((image, index) => (
              <ProductCardItem key={index} image={image} altText={`Product ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
