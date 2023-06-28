import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, FormGroup, Label, Input, Form, ModalFooter } from 'reactstrap';

const RightModal = ({ isOpen, toggle }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState('public');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePrivacyChange = (e) => {
    setPrivacy(e.target.value);
  };

  const handleSave = () => {
    // Perform save logic here
    console.log('Saving:', name, description, privacy);
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modal-right">
      <ModalHeader toggle={toggle}>Create Item</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" id="name" value={name} onChange={handleNameChange} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" id="description" value={description} onChange={handleDescriptionChange} />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Privacy</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="privacy" value="public" checked={privacy === 'public'} onChange={handlePrivacyChange} />
                Public
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="privacy" value="private" checked={privacy === 'private'} onChange={handlePrivacyChange} />
                Private
              </Label>
            </FormGroup>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>Save</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default RightModal;
