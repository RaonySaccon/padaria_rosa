export default function Gallery() {
  const images = [
    "https://placehold.co/600x800/ffb3b3/333?text=1",
    "https://placehold.co/800x400/b3d9ff/333?text=2",
    "https://placehold.co/400x400/b3ffb3/333?text=3",
    "https://placehold.co/400x400/ffffb3/333?text=4",
    "https://placehold.co/600x800/ffb3ff/333?text=5",
  ];

  return (
    <div className="min-h-screen py-20 flex items-center justify-center bg-pink-200">
      <div
        className="grid gap-2 w-10/12 lg:w-8/12 lg:gap-4 h-auto 
        grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 
        auto-rows-[150px] sm:auto-rows-[200px] lg:grid-rows-4"
      >
        <div
          className="col-span-2 row-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-5"
          data-aos="fade-right"
        >
          <img
            src={images[0]}
            alt="Imagem 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="col-span-2 lg:col-start-3 lg:col-end-7 lg:row-start-1 lg:row-end-3"
          data-aos="zoom-in"
        >
          <img
            src={images[1]}
            alt="Imagem 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-5"
          data-aos="fade-up"
        >
          <img
            src={images[2]}
            alt="Imagem 3"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="lg:col-start-5 lg:col-end-7 lg:row-start-3 lg:row-end-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={images[3]}
            alt="Imagem 4"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="col-span-2 row-span-2 lg:col-start-7 lg:col-end-9 lg:row-start-1 lg:row-end-5 sm:hidden lg:block"
          data-aos="fade-left"
        >
          <img
            src={images[4]}
            alt="Imagem 5"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
