import React from 'react';
import { useParams } from 'react-router-dom';
import './TutorDetails.css'; // Import CSS for styling

const TutorDetails = ({ tutorModules }) => {
    const { tutorName } = useParams(); // Get the tutorName parameter from the URL

    // Find the tutor object based on the tutorName
    let tutor;
    for (const faculty of tutorModules) {
        for (const module of faculty.modules) {
            tutor = module.tutors.find(t => t.tutorName === decodeURIComponent(tutorName));
            if (tutor) break;
        }
        if (tutor) break;
    }

    if (!tutor) {
        return <div className="tutor-not-found">Tutor not found</div>;
    }

    return (
        <div className="tutor-details-container">
            <div className="tutor-details">
               
                <img src={tutor.tutorImage} alt={`${tutor.tutorName}'s profile`} className="tutor-image" />
                 <h2 className="mt-4 text-dark text-decoration-none tutor-name">{tutor.tutorName}</h2>
                <p className="tutor-bio">{tutor.bio}</p>
                <div className="tutor-info">
                    <p><strong>Academic Year:</strong> {tutor.academicYear}</p>
                    <p><strong>Average Marks:</strong> {tutor.averageMarks}</p>
                    <p><strong>Skills:</strong> {tutor.skills.join(", ")}</p>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;
