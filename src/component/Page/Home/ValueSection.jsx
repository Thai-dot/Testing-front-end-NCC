import React from "react";
import ValueCard from "./ValueCard";

import htmlIcon from "../../../asset/image/html-icon.png";
import cssIcon from "../../../asset/image/css-icon.png";
import urlIcon from "../../../asset/image/url-icon.png";

export default function ValueSection() {
  const valueArray = [
    {
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel rem hic possimus officia ipsa ab natus ullam, quibusdam optio eveniet sunt recusandae qui doloribus nobis rerum quaerat autem ex quasi nihil itaque. Sint corporis vitae facilis consequatur, doloribus distinctio laborum natus aliquid voluptates odio animi fuga a commodi labore similique excepturi modi reiciendis iste repellendus dolore quas amet iure! Unde alias ex saepe quam nam reprehenderit dicta tempora fuga?",
      img: cssIcon,
    },
    {
      title: "Lorem ipsum dolor sit ameas",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel rem hic possimus officia ipsa ab natus ullam, quibusdam optio eveniet sunt recusandae qui doloribus nobis rerum quaerat autem ex quasi nihil itaque. Sint corporis vitae facilis consequatur, doloribus distinctio laborum natus aliquid voluptates odio animi fuga a commodi labore similique excepturi modi reiciendis iste repellendus dolore quas amet iure! Unde alias ex saepe quam nam reprehenderit dicta tempora fuga?",
      img: htmlIcon,
    },
    {
      title: "Lorem ipsum dolor sit amd",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel rem hic possimus officia ipsa ab natus ullam, quibusdam optio eveniet sunt recusandae qui doloribus nobis rerum quaerat autem ex quasi nihil itaque. Sint corporis vitae facilis consequatur, doloribus distinctio laborum natus aliquid voluptates odio animi fuga a commodi labore similique excepturi modi reiciendis iste repellendus dolore quas amet iure! Unde?",
      img: urlIcon,
    },
  ];

  return (
    <section className="value-section">
      {valueArray.map((item) => {
        return (
          <ValueCard
            key={item.title}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        );
      })}
    </section>
  );
}
