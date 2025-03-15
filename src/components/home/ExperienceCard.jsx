import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        {/* Company Logo */}
        <img
          className="bg-white mb-3"
          src={data.companylogo}
          alt={data.company}
          style={{ width: "100px", height: "auto", objectFit: "contain" }}
        />

        {/* Role & Company Name */}
        <p className="lead">
          <strong>{data.role} at {data.company}</strong>
          <br />
          {data.date}
        </p>

        {/* Role Description as Bullet Points */}
        {data.description && data.description.length > 0 && (
          <ul className="text-left mx-auto" style={{ maxWidth: "80%" }}>
            {data.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </Col>
  );
}

export default ExperienceCard;
