// ChatArea.jsx
import React from 'react';

const ChatArea = () => {
  return (
    <div className="col-md-6 col-lg-7 col-xl-8" style={{ backgroundColor: '#eee' }}>
      <ul className="list-unstyled mt-5 chat-messages">
        <li className="d-flex justify-content-between mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
            alt="avatar"
            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
            width="60"
          />
          <div className="card">
            <div className="card-header d-flex justify-content-between p-3">
              <p className="fw-bold mb-0">Brad Pitt</p>
              <p className="text-muted small mb-0">
                <i className="far fa-clock"></i> 12 mins ago
              </p>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </li>
        <li className="d-flex justify-content-between mb-4">
          <div className="card w-100">
            <div className="card-header d-flex justify-content-between p-3">
              <p className="fw-bold mb-0">Me</p>
              <p className="text-muted small mb-0">
                <i className="far fa-clock"></i> 13 mins ago
              </p>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
            alt="avatar"
            className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
            width="60"
          />
        </li>
        <li className="d-flex justify-content-between mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
            alt="avatar"
            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
            width="60"
          />
          <div className="card">
            <div className="card-header d-flex justify-content-between p-3">
              <p className="fw-bold mb-0">Brad Pitt</p>
              <p className="text-muted small mb-0">
                <i className="far fa-clock"></i> 10 mins ago
              </p>
            </div>
            <div className="card-body">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <li className="bg-white mb-3">
        <div className="d-flex justify-content-between align-items-center input-group">
          <div className="form-outline w-75">
            <textarea className="form-control" id="textAreaExample2" rows="1" placeholder="Text here"></textarea>
          </div>
          <button type="button" className="btn btn-success btn-rounded ms-3">Send</button>
        </div>
      </li>
    </div>
  );
};

export default ChatArea;
