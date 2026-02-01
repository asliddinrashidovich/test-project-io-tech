import Image from "next/image";

function HeroLoader() {
  return (
    <div className="z-50 hero relative h-screen py-5 md:py-5 md:px-10 flex items-center">
      <div className="max-w-325 w-full mx-auto flex justify-between items-center gap-20">
        <div className="w-full">
          <h1 className="text-white text-[40px] leading-7 font-bold mb-8.75">
            Lorem Ipsum
          </h1>
          <p className="text-white text-[18px] leading-7 font-medium mb-17">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa culpa cumque non veniam ipsum hic sint tenetur dolor voluptates.
          </p>
          <button className="bg-white text-[#4B2615] py-4 px-8 rounded-xl cursor-pointer font-medium text-[18px] leading-7">
            Read More
          </button>
        </div>
        <div className="max-w-80 w-full max-h-100">
          <Image
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s`}
            alt="hero image"
            width={320}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default HeroLoader;
