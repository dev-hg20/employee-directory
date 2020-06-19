import React from "react";
import "./style.css";

function FriendCard(props) {
  const { emp } = props;
  return (
    <div className="card">
      <div className="img-container">
        <img alt={emp.name} src={emp.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {emp.name}
          </li>
          <li>
            <strong>Title:</strong> {emp.title}
          </li>
          <li>
            <strong>Start Date:</strong> {emp.startdate}
          </li>
          <li>
            <strong>Telephone:</strong> {emp.telephone}
          </li>
          <li>
            <strong>Email:</strong> {emp.email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
