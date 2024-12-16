import ProductCard from "./productCard";
import Product1 from "../public/Products/product-cover (1).png"
import Product2 from "../public/Products/product-cover (2).png"
import Product3 from "../public/Products/product-cover (3).png"
import Product4 from "../public/Products/product-cover (4).png"
import Product5 from "../public/Products/product-cover (5).png"
import Product6 from "../public/Products/product-cover (6).png"
import Product7 from "../public/Products/product-cover (7).png"
import Product8 from "../public/Products/product-cover (8).png"
import Product9 from "../public/Products/product-cover (9).png"
import Product10 from "../public/Products/product-cover (10).png"
import Product11 from "../public/Products/product-cover (11).png"
import Product12 from "../public/Products/product-cover (12).png"
import { StaticImageData } from "next/image";

interface Product {
    image: StaticImageData;
    name: string;
    department: string;
    originalPrice: string;
    discountedPrice: string;
    colors: string[];
}
const Cards: React.FC = () => {
    const products: Product[] = [
        {
            image: Product1,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product2,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product3,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product4,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product5,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product6,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product7,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product8,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image:Product9,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product10,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product11,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
        {
            image: Product12,
            name: "Graphic Design",
            department: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center text-center mt-5 mb-7 overflow-x-hidden">
            {/* Product Cart Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            {/* Page Controls */}
            <div className="flex flex-wrap justify-center items-center space-x-4 mt-16 border-[#BDBDBD] border-2 rounded-md">
                <button className="px-4 py-2 bg-[#F3F3F3] text-[#BDBDBD] rounded-md hover:bg-gray-300 text-sm sm:px-8 sm:py-6">
                    First
                </button>

                {/* Page Numbers */}
                <div className="flex space-x-2 mt-4 sm:mt-0">
                    <button className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6">
                        1
                    </button>
                    <button className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6">
                        2
                    </button>
                    <button className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6">
                        3
                    </button>
                </div>

                <button className="px-4 py-2 text-[#23A6F0] rounded-md hover:bg-[#1D8CC8] hover:text-white text-sm sm:px-8 sm:py-6">
                    Next
                </button>
            </div>

        </div>
    );
};

export default Cards;