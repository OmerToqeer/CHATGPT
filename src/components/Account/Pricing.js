import React, { useState } from 'react';
import './Pricing.css'

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState('yearly');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="Pricing-card ">
      <div className="card-header">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${selectedTab === 'yearly' ? 'active' : ''}`}
              onClick={() => handleTabChange('yearly')}
            >
              Yearly
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${selectedTab === 'monthly' ? 'active' : ''}`}
              onClick={() => handleTabChange('monthly')}
            >
              Monthly
            </button>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <div className="pricing-plans">
          <div className="pricing-plan">
            <h3 className="plan-title">Hobby</h3>
            <div className="plan-price">
              {selectedTab === 'yearly' ? '$99/year' : '$10/month'}
            </div>
            <ul className="plan-features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="btn btn-primary">Buy Now</button>
          </div>
          <div className="pricing-plan">
            <h3 className="plan-title">Power</h3>
            <div className="plan-price">
              {selectedTab === 'yearly' ? '$199/year' : '$20/month'}
            </div>
            <ul className="plan-features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="btn btn-primary">Buy Now</button>
          </div>
          <div className="pricing-plan">
            <h3 className="plan-title">Pro</h3>
            <div className="plan-price">
              {selectedTab === 'yearly' ? '$299/year' : '$30/month'}
            </div>
            <ul className="plan-features">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
