import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import RightModal from '../components/Drawer/RightDrawer';
import './Bots.css';
import PanelHeader from "../components/PanelHeader/PanelHeader";


function BotsPage() {
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const bots = [
    { id: 1, name: 'Bot 1', description: 'Description for Bot 1' },
    { id: 2, name: 'Bot 2', description: 'Description for Bot 2' },
    { id: 3, name: 'Bot 3', description: 'Description for Bot 3' }
  ];

  const handleCardClose = (bot) => {
    setSelectedBot(bot);
    setConfirmationModalOpen(true);
  };

  const handleConfirmationModalClose = () => {
    setSelectedBot(null);
    setConfirmationModalOpen(false);
  };

  const handleDeleteBot = () => {
    // Perform deletion logic here
    setConfirmationModalOpen(false);
  };

  return (
<>
      <PanelHeader size="sm" />
    <div className="BotsPage">
      <div className="CardHeader">
        <button className="AddBotButton" onClick={toggleModal}>Add Bot</button>
      </div>
      {bots.map(bot => (
        <Card key={bot.id}>
          <div className="CloseIcon" onClick={() => handleCardClose(bot)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M12.354 3.354a.5.5 0 0 1 0 .708L8.707 8l3.647 3.646a.5.5 0 1 1-.708.708L8 8.707l-3.646 3.647a.5.5 0 1 1-.708-.708L7.293 8 3.646 4.354a.5.5 0 0 1 .708-.708L8 7.293l3.646-3.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <CardBody>
            <CardTitle tag="h3">{bot.name}</CardTitle>
            <CardText>{bot.description}</CardText>
            <div className="IconContainer">
              {/* Icon code here */}
            </div>
          </CardBody>
        </Card>
      ))}
      <Modal isOpen={confirmationModalOpen} toggle={handleConfirmationModalClose}>
        <ModalHeader toggle={handleConfirmationModalClose}>Confirmation</ModalHeader>
        <ModalBody>
          Are you sure you want to delete the bot: {selectedBot && selectedBot.name}?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleDeleteBot}>Delete</Button>
          <Button color="secondary" onClick={handleConfirmationModalClose}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <RightModal isOpen={isModalOpen} toggle={toggleModal} />
    </div>
    </>
  );
}

export default BotsPage;
