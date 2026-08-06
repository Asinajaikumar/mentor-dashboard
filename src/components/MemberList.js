import React from "react";

function StatusPill({ status }) {
  const cls =
    status === "Completed"
      ? "status completed"
      : status === "Pending"
      ? "status pending"
      : "status inprogress";
  return <span className={cls}>{status}</span>;
}

export default function MemberList({ members }) {
  return (
    <div className="member-list">
      <h2>Team Members (10)</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Employee ID</th>
              <th>Role</th>
              <th>Task Assigned</th>
              <th>Task Status</th>
              <th>Joining Date</th>
              <th>Performance</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.employeeId}>
                <td>{m.name}</td>
                <td>{m.employeeId}</td>
                <td>{m.role}</td>
                <td>{m.taskAssigned}</td>
                <td>
                  <StatusPill status={m.taskStatus} />
                </td>
                <td>{m.joiningDate}</td>
                <td>{m.performance}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
