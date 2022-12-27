import Banner596x249 from "../assets/img/default_img/Banner596x249.jpg";
export const Brands = () => {
  return (
    <>
      <div className="desktop:container">
        <div className="p-1 font-semibold">Shop by Brand</div>
        <div className="flex snap-x snap-mandatory items-center justify-center gap-2 overflow-auto">
          <div className="w-28 snap-start rounded border bg-blue-900">
            <img src={Banner596x249} alt="Sample Mada Logo" />
          </div>
        </div>
        <div className="w-28 snap-start rounded border bg-blue-900">
          <img src={Banner596x249} alt="Sample Mada Logo" />
        </div>
      </div>
    </>
  );
};
