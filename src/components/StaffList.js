import React from "react";
import "../index.css";
import Staff from "./Staff";

export default function StaffList({ staffList, showInfor }) {
  return (
    <>
      {staffList.map((staff) => (
        <Staff key={staff.id} staff={staff} showInfor={showInfor} />
      ))}
    </>
  );
}
