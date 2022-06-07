import React from "react";
import "../index.css";

export default function Staff({ staff, showInfor }) {
  return (
    <button className="staff" onClick={() => showInfor(staff.name)}>
      {staff.name}
    </button>
  );
}
