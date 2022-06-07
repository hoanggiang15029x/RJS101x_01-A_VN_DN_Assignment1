import React from "react";
import "../index.css";

const showInfor = (id) => {
  alert("hello", id);
};

export default function Staff({ staff }) {
  return (
    <button className="staff" onClick={showInfor}>
      {staff.name}
    </button>
  );
}
