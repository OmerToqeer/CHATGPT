import React, { useState } from "react";
import { CardTwo, CardOne } from "components/Team/Card";
import Modal from "../components/Drawer/Modal";
import PanelHeader from "../components/PanelHeader/PanelHeader";


function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTeam = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "100px" }}>
            <CardOne />
          </div>
          <div className="col-md-12">
            <CardTwo onAddTeam={handleAddTeam} />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
}

export default Team;
