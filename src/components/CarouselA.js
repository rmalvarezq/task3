import React from "react";

import { Carousel, Button } from "antd";

const items = [
  {
    key: "1",
    title: "Diseño web",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatibus reprehenderit sed nemo labore nam ex repudiandae et facilis, minus cumque, recusandae error, fugiat optio aperiam perspiciatis culpa quod! Ducimus.",
  },
  {
    key: "2",
    title: "Backend developer",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatibus reprehenderit sed nemo labore nam ex repudiandae et facilis, minus cumque, recusandae error, fugiat optio aperiam perspiciatis culpa quod! Ducimus.",
  },
  {
    key: "3",
    title: "Ios and Android developer",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatibus reprehenderit sed nemo labore nam ex repudiandae et facilis, minus cumque, recusandae error, fugiat optio aperiam perspiciatis culpa quod! Ducimus.",
  },
  {
    key: "4",
    title: "React Native Developer",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatibus reprehenderit sed nemo labore nam ex repudiandae et facilis, minus cumque, recusandae error, fugiat optio aperiam perspiciatis culpa quod! Ducimus.",
  },
];
export default function CarouselA() {
  return (
    <>
      <div id="hero" className="heroBlock">
        <Carousel>
          {items.map((item) => {
            return (
              <div key={item.key} className="container-fluid" id="color-white">
                <div className="content">
                  <h3 id="color-white">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
