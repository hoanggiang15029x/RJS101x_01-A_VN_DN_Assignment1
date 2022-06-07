import React from "react";
import "../index.css";

const showInfor = () => {
  alert("hello");
};

export default function Staff({ staff }) {
  return (
    <button className="staff" onClick={showInfor}>
      {staff.name}
    </button>
  );
}
