// Card.js
import React from 'react';

const Card = ({ icon: Icon, title, number, link }) => {
  return (
    <div className="card">
      <div className="card-header">
        <Icon className="card-icon" />
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-footer">
        <p className="card-number">{number}</p>
        <a href="#" className="view-all">
          View All <span className="arrow">&#8594;</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
