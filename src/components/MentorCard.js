import React from "react";

export default function MentorCard({ mentor }) {
  return (
    <div className="mentor-card">
      <h2>Mentor Details</h2>
      <div className="mentor-row">
        <span className="label">Name</span>
        <span className="value">{mentor.name}</span>
      </div>
      <div className="mentor-row">
        <span className="label">Mentor ID</span>
        <span className="value">{mentor.mentorId}</span>
      </div>
      <div className="mentor-row">
        <span className="label">Role</span>
        <span className="value">{mentor.role}</span>
      </div>
      <div className="mentor-row">
        <span className="label">Department</span>
        <span className="value">{mentor.department}</span>
      </div>
      <div className="mentor-row">
        <span className="label">Experience</span>
        <span className="value">{mentor.experience}</span>
      </div>
      <div className="mentor-row">
        <span className="label">Email</span>
        <span className="value">{mentor.email}</span>
      </div>
      <div className="mentor-row">
        <span className="label">Contact Number</span>
        <span className="value">{mentor.contactNumber}</span>
      </div>
    </div>
  );
}
