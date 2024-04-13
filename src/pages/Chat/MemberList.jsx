// MemberList.jsx
import React from 'react';

const MemberList = () => {
  return (
    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 bg-white">
      <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>
      <div className="card">
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li className="p-2 border-bottom" style={{ backgroundColor: '#eee' }}>
              <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">John Doe</p>
                    <p className="small text-muted">Hello, Are you there?</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-muted mb-1">Just now</p>
                  <span className="badge bg-danger float-end">1</span>
                </div>
              </a>
            </li>
            <li className="p-2 border-bottom">
              <a href="#!" className="d-flex justify-content-between">
                <div className="d-flex flex-row">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                    alt="avatar"
                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                    width="60"
                  />
                  <div className="pt-1">
                    <p className="fw-bold mb-0">Danny Smith</p>
                    <p className="small text-muted">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="small text-muted mb-1">5 mins ago</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
