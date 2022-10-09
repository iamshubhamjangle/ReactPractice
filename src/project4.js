// Project 4: Iterate over products and display on DOM
import React from "react";

const Project4 = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      images: [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
      ]
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      images: [
        "https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
      ]
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      images: ["https://dummyjson.com/image/i/products/3/1.jpg"]
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      images: [
        "https://dummyjson.com/image/i/products/4/1.jpg",
        "https://dummyjson.com/image/i/products/4/2.jpg",
        "https://dummyjson.com/image/i/products/4/3.jpg",
        "https://dummyjson.com/image/i/products/4/4.jpg",
        "https://dummyjson.com/image/i/products/4/thumbnail.jpg"
      ]
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      images: [
        "https://dummyjson.com/image/i/products/5/1.jpg",
        "https://dummyjson.com/image/i/products/5/2.jpg",
        "https://dummyjson.com/image/i/products/5/3.jpg"
      ]
    }
  ];

  return (
    <div className="project">
      <h3>Project 4: Iterate over products and display on DOM</h3>
      {products.map((item) => {
        return (
          <div className="mt1" key={item.id}>
            <h5 className="my0">{item.title}</h5>
            <p className="my0">{item.description}</p>
            <p className="my0">price: ₹{item.price}</p>
            {item.images.map((i) => (
              <img className="product-img" src={i} alt=""></img>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Project4;
