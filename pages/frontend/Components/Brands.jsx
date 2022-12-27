import Banner596x249 from "../assets/img/default_img/Banner596x249.jpg";
export const Brands = () => {
  return (
    <>
      <div className="m-2 desktop:container">
        <div className="my-2 inline-block rounded-xl bg-blue-900 py-1 px-3 text-white drop-shadow">
          Shop by Brand
        </div>
        <div className="h-18 grid snap-x snap-mandatory grid-cols-3 gap-2 desktop:grid-cols-6">
          <div className="h-18  cursor-pointer snap-start snap-always overflow-hidden rounded-md bg-blue-900">
            <img src={Banner596x249} alt="" />
          </div>
          <div className="h-18  cursor-pointer snap-start snap-always overflow-hidden rounded-md bg-blue-900">
            <img src={Banner596x249} alt="" />
          </div>
          <div className="h-18 cursor-pointer snap-start snap-always overflow-hidden rounded-md bg-blue-900">
            <img src={Banner596x249} alt="" />
          </div>
          <div className="h-18 cursor-pointer snap-start snap-always overflow-hidden rounded-md bg-blue-900">
            <img src={Banner596x249} alt="" />
          </div>
          <div className="h-18 cursor-pointer snap-start snap-always overflow-hidden rounded-md bg-blue-900">
            <img src={Banner596x249} alt="" />
          </div>
          <div className="h-18 cursor-pointer snap-start snap-always overflow-hidden rounded-md bg-blue-900">
            <img src={Banner596x249} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
