
import React from "react";
import DashboardCard from '../components/Dashboard/Card';
import { ReactComponent as Icon1 } from '../assets/img/icon1.svg';
import { ReactComponent as Icon2 } from '../assets/img/icon2.svg';
import { ReactComponent as Icon3 } from '../assets/img/icon3.svg';
import { ReactComponent as Icon4 } from '../assets/img/icon4.svg';
import PanelHeader from "../components/PanelHeader/PanelHeader";

// reactstrap components
import {
  Row,
} from "reactstrap";
import GridCard from "components/Dashboard/GridCard";
// import PanelHeader from "components/PanelHeader/PanelHeader";

function Dashboard() {

  const cardsData = [
    { title: 'Card 1', description: 'Card 1', icon: <svg>...</svg>, link:"#" },
    { title: 'Card 2', description: '20', icon: <svg>...</svg> , link:"#"},
    { title: 'Card 3', description: '30', icon: <svg>...</svg>, link:"#" },
    { title: 'Card 4', description: '40', icon: <svg>...</svg>, link:"#" },
  ];
  
  return (
    <>
      <PanelHeader size="sm" />
      <div className="container">
    <Row style={{justifyContent: 'space-between', marginTop:'80px', marginBottom:'50px'}}>
      <div style={{width: '215px'}}>
      <DashboardCard icon={Icon1} title="Card 1" number={42} />
      </div>
      <div style={{width: '215px'}}>
      <DashboardCard icon={Icon2} title="Card 2" number={27} />
      </div>
      <div style={{width: '215px'}}>
      <DashboardCard icon={Icon3} title="Card 3" number={15} />
      </div>
      <div style={{width: '215px'}}>
      <DashboardCard icon={Icon4} title="Card 4" number={33} />
      </div>
      <div style={{width: '215px'}}>
      <DashboardCard icon={Icon4} title="Card 4" number={33} />
      </div>
      </Row>
      </div>
      <div>
  <GridCard
  />

      </div>
    </>
  );
}

export default Dashboard;
