import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Add Team</h2>
          <button className="close-button" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="teamName">Team Name</label>
              <input type="text" id="teamName" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description"></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="invite-button">Invite</button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
