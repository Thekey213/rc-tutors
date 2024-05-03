import React from 'react';
import { useParams } from 'react-router-dom';

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
        return <div>Tutor not found</div>;
    }

    return (
        <div>
            <h2>{tutor.tutorName}</h2>
            <img src={tutor.tutorImage} alt={`${tutor.tutorName}'s profile`} />
            {/* You can add more details about the tutor here */}
        </div>
    );
};

export default TutorDetails;
