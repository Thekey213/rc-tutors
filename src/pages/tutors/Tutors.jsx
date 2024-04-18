import React from 'react';
import './tutors.css'; // Import the CSS file

const Tutors = ({ tutorModules }) => {
    return (
        <div className="container">
            {tutorModules.map((faculty, facultyIndex) => (
                <div key={`faculty-${facultyIndex}`}>
                    <hr className="divider" />
                    <div className="mt-4">
                        <h3>{faculty.faculty}</h3>
                        <div className="row">
                            {faculty.modules.map((module, moduleIndex) => (
                                <div key={`module-${moduleIndex}`} className="col-4">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5 className="card-title">{module.moduleName}</h5>
                                            <hr className="divider" />
                                            <div className="tutors-container">
                                                {module.tutors.map((tutor, tutorIndex) => (
                                                    <div key={`tutor-${tutorIndex}`} className="col-12">
                                                        <div className="d-flex align-items-center">
                                                            <img src={tutor.tutorImage} className="img-fluid rounded-circle tutor-img" alt={`${tutor.tutorName}'s profile`} />
                                                            <span className="mt-2 tutor-name" role="button">{tutor.tutorName}</span>
                                                        </div>
                                                        <hr className="divider" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tutors;
