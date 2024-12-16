import Image from "next/image";
import Card1 from "../public/Products/card-cover(1).jpg"
import Card2 from "../public/Products/card-cover(2).jpg"
import Card3 from "../public/Products/card-cover(3).jpg"
import Card4 from "../public/Products/card-cover(4).jpg"
import Card5 from "../public/Products/card-cover(5).jpg"

const imageData = [
  { src: Card1, alt: "CLOTHS 1", title: "CLOTHS", items: "5 Items" },
  { src: Card2, alt: "CLOTHS 2", title: "CLOTHS", items: "5 Items" },
  { src: Card3, alt: "CLOTHS 3", title: "CLOTHS", items: "5 Items" },
  { src: Card4, alt: "CLOTHS 4", title: "CLOTHS", items: "5 Items" },
  { src: Card5, alt: "CLOTHS 5", title: "CLOTHS", items: "5 Items" },
];

export default function ImageGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {imageData.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-md">
            <Image
              src={item.src}
              alt={item.alt}
              width={300}
              height={400}
              className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">{item.title}</span>
              <span className="text-white text-sm">{item.items}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
