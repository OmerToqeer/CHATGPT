import React, { useState } from "react";
import './Card.css'
import Divider from '../Divider'
import Modal from "../Drawer/Modal";
import '@fortawesome/fontawesome-free/css/all.min.css';



export const CardOne = () => {
  return (
    <div className="card" style={{ marginRight: '20px' }}>
    <div className="card-body">
      <div className="row">
        <div className="col-md-8">
            <h5>Current Team</h5>
            <p>Switch between different team dashboards that you have access to.</p>
          <div className="input-group">
            <select className="form-select" style={{ flex: '1' }}>
              {/* Dropdown options here */}
            </select>
          </div>
        </div>
        <div className="col-md-4">
        <h5>Rename Team</h5>
            <p>Enter a new team name for.</p>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Small Input" />
            {/* <button className="btn btn-primary" type="button">Button</button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export const CardTwo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTeam = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div class="card">
  <div class="card-header">
  <div class="profile-info">
      <h4>Glowingsoft Android Dev's Team: Members</h4>
      <p>View and manage the members of this team.</p>
    </div>
    <button className="add-team-button" onClick={handleAddTeam}>Add Team</button>
  </div>
    <hr className="card-divider" />
  <div class="card-body">
    <div class="profile">
      {/* <img src="profile-image.jpg" alt="Profile Image" class="profile-image"> */}
    </div>
      <div className="title-group">
      <div class="card-body">
    <div class="profile">
    <img class="rounded-circle" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" style={{height:'70px', width: '70px', marginRight: '10px'}} />
    </div>
    <div class="profile-info">
      <h4>Glowingsoft Android Dev</h4>
      <div class="container">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
<p className="ml-1">test@email.com</p>
      </div>
    </div>
  </div>
        <div>
          <h3 className="title-stock">Role</h3>
          <p className="subtitle">Owner</p>
        </div>
      </div>
    </div>
    {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>

  );
};
