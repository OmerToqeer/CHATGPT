import React from 'react';
import CardData from '../components/Api/Card';
import PanelHeader from "../components/PanelHeader/PanelHeader";

const Api = () => {
  // Sample data for the cards
  const cardData = [
    {
      title: 'OpenAI API Key',
      description: 'You can update your API key here. You must have a valid API key with billing enabled in your OpenAI account for DocsBot to function. Get my OpenAI key.',
      keyName: 'sk-...BfT2',
    },
    {
      title: 'OpenAI API Key',
      description: 'You can update your API key here. You must have a valid API key with billing enabled in your OpenAI account for DocsBot to function. Get my OpenAI key.',
      keyName: 'sk-...BfT2',
    }
  ];

  // Function to handle the edit action
  const handleEdit = () => {
    // Handle the edit action here
    console.log('Edit clicked');
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div>
        {cardData.map((card, index) => (
          <CardData
            key={index}
            title={card.title}
            description={card.description}
            keyName={card.keyName}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
};

export default Api;
