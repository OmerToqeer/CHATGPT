import React from 'react';
import './Card.css';

const Card = ({ title, description, keyName, onEdit }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <div className="card-description">{description}</div>
        <br/>
        <div className="card-details">
          <p className="card-key">Key: {keyName}</p>
          <a href="#" className="card-edit" onClick={onEdit}>
            <i className="fa fa-edit"></i> Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
