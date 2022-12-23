import React from "react";
import aioimg from "../assets/img/aioimg.jpg";

export const ProductPreview = () => {
  return (
    <>
      <div className="prose p-2 text-sm prose-h1:m-0 prose-h1:text-base prose-h1:font-semibold prose-table:m-0 prose-th:text-base prose-img:m-0 desktop:container desktop:text-base desktop:prose-h1:text-lg">
        <div className="grid grid-cols-1 gap-2 desktop:grid-cols-6">
          <div className="order-2 desktop:order-1 desktop:col-span-2 desktop:row-span-2">
            <img src={aioimg} alt="All in one Image" />
          </div>
          {/* Description */}
          <div className="order-1 line-clamp-3 desktop:order-2 desktop:col-span-4 desktop:h-24">
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae dolore perspiciatis deserunt, dolores temporibus iusto
              distinctio et, quas sit maxime totam neque nam, vero consectetur
              autem adipisci inventore ipsam voluptatum.
            </h1>
          </div>
          {/* Brand price and Add to Cart */}
          <div className="order-3 prose-h1:text-base desktop:col-span-4">
            <div className="grid h-full grid-cols-1 content-end">
              <div className="font-semibold">Brand: Lenovo</div>
              <div className="text-3xl font-bold text-blue-900">sr 0,000</div>
              <button className="btn btn-primary w-full">Add to Cart</button>
            </div>
          </div>
        </div>
        {/* Table Container */}
        <div className="mt-2 desktop:container">
          <table class="table-auto">
            <thead>
              <tr>
                <th className="w-1/4">Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-1/4">SKU</td>
                <td>Lorem ipsum dolor, sit amet consecteturr</td>
              </tr>
              <tr>
                <td className="w-1/4">Brand</td>
                <td>Lorem ipsum dolor, sit amet consectetur</td>
              </tr>
              <tr>
                <td className="w-1/4">Model</td>
                <td>Lorem ipsum dolor, sit amet consectetur</td>
              </tr>
              <tr>
                <td className="w-1/4">Processor</td>
                <td>Lorem ipsum dolor, sit amet consectetur</td>
              </tr>
              <tr>
                <td className="w-1/4">Storage</td>
                <td>Lorem ipsum dolor, sit amet consectetur</td>
              </tr>
              <tr>
                <td className="w-1/4">Graphics Card</td>
                <td>Lorem ipsum dolor, sit amet consectetur.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
