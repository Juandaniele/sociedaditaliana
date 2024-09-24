'use client';
import Image from "next/image";

const images = [
  '/handball.jpeg',
  '/gimnasio.jpeg',
  '/patin.jpeg',
  '/voley.jpeg',
];

const Carousel = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {images.map((image, index) => (
        <Image 
          key={index} 
          src={image} 
          alt={`Image ${index + 1}`} 
          className="w-52 h-52 object-cover rounded-lg" 
        />
      ))}
    </div>
  );
};

export default Carousel;
