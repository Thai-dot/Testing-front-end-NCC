import React from "react";

export default function ValueCard({ title, text, img }) {
  return (
    <div className="value-card">
      <h2  className="value-card-title">
        {title}
      </h2>
      <p>
        <p>
          <img
            width={128}
            height={128}
            src={img}
            alt={`${title} icon`}
            style={{
              float: "left",
              marginRight: "10px",
            }}
          />
          {text}
        </p>
      </p>
    </div>
  );
}
