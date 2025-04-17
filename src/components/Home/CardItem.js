import React from 'react';

const CardItem = ({ title, text, buttonText, link }) => {
  return (
    <div className="col-md-4 d-flex align-items-stretch mb-4">
      <div className="card shadow-lg border-0 rounded-4 text-center p-3 card-hover" style={{ backgroundColor: '#ffffffcc', backdropFilter: 'blur(5px)' }}>
        <div className="card-body d-flex flex-column">
          <h4 className="card-title mb-3 text-primary fw-bold">{title}</h4>
          <p className="card-text flex-grow-1">{text}</p>
          <a href={link} className="btn btn-outline-primary mt-3 rounded-pill px-4 py-2">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
