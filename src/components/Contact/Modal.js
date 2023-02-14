import React from "react";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal fade show d-block" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content bg-white border border-the-primary">
          <div className="modal-body text-center py-4">
            <p>
              We've received your inquiry, we'll get back to you as soon as
              possible. Thank you!"
            </p>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="btn btn-dark-moderate-orange px-5 button"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
