import React from 'react';
import './Card.css'

const Card = () => {
  return (
    <div className="account-container">
      <div className="account-grid-item">
        <div className="grid-content">
        <h3 class="card-title">Update your email address</h3>
    <p class="card-description">TYou can update your email address here. This will update your email address for all of your teams.</p>
    <input type="text" class="card-input" placeholder="New Email" />
    <button class="card-button">Update</button>
        </div>
      </div>
      <div className="account-grid-item">
        <div className="grid-content">
        <h3 class="card-title">Delete Team Account</h3>
    <p class="card-description">You can delete your team account here. This will delete all of your bots, sources, questions, keys, any other data, and remove all team members. This action cannot be undone and you should cancel any subscriptions before deleting your team account.</p>
    <button class="card-button card-button-delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

