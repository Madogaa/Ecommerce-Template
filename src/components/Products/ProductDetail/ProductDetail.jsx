import React, { useState } from "react";

import { products as initialProducts } from '../../../mocks/products.json'
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { idProduct } = useParams();
  const product = initialProducts.find(product => product.id == idProduct)

  const [coverImage, setCoverImage] = useState(product.image[0])

  const handleImageCover = image => setCoverImage(image)


  return (
    <div className="product-detail">
      <div className="image-galery flex w-1/2 h-screen mt-12">
          <ul className="flex flex-col gap-2 h-full p-4 bg-red-100">
              {product.image.map((image) => (
              <li key={image.id} className="bg-white">
                <button onClick={() => handleImageCover(image)} className="flex justify-center h-52 w-52">
                  <img className="max-w-full max-h-full" src={image.url} alt="" />
                </button>
              </li>
              ))}
          </ul>
          <img className="w-full max-h-full " src={coverImage.url} alt="Imagen" />
      </div>
    </div>
  );
}

export default ProductDetail;
