import React from "react";
import "../index.css";
import Staff from "./Staff";

export default function StaffList({ staffList }) {
  return (
    <>
      {staffList.map((staff) => (
        <Staff key={staff.id} staff={staff} />
      ))}
    </>
  );
}
