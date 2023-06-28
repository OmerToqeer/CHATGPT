import React from "react";
import DashboardCard from '../components/Dashboard/Card';
import { ReactComponent as Icon1 } from '../assets/img/icon1.svg';
import { ReactComponent as Icon2 } from '../assets/img/icon2.svg';
import { ReactComponent as Icon3 } from '../assets/img/icon3.svg';
import { ReactComponent as Icon4 } from '../assets/img/icon4.svg';
import GridCard from '../components/Account/Card';


// reactstrap components
import { Card, Row } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import Pricing from "components/Account/Pricing";

function Account() {
  const cardsData = [
    { title: 'Card 1', description: 'Card 1', icon: Icon1, link: "" },
    { title: 'Card 2', description: '20', icon: Icon2, link: "#" },
    { title: 'Card 3', description: '30', icon: Icon3, link: "#" },
    { title: 'Card 4', description: '40', icon: Icon4, link: "#" },
  ];

  return (
    <>
      <PanelHeader size="sm" />
      <div className="container">
        <Row style={{ justifyContent: 'space-between', marginTop: '80px', marginBottom: '50px' }}>
          {cardsData.map((card, index) => (
            <div key={index} style={{ width: '250px', }}>
              <DashboardCard icon={card.icon} title={card.title} number={card.description} link={card.link} />
            </div>
          ))}
        </Row>
      </div>
      <Pricing/>
      {/* <PricingCard/> */}
      <GridCard/>
    </>
  );
}

export default Account;
