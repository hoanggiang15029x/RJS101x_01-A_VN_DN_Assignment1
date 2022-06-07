import React from "react";
import "../index.css";

export default function Staff({ staff, chooseStaff }) {
  return (
    <button className="staff" onClick={() => chooseStaff(staff)}>
      {staff.name}
    </button>
  );
}
