import React from "react";
import "../index.css";

const showInfor = (id) => {
  alert("hello", id);
};

export default function Staff() {
  return (
    <button class="staff" onClick={showInfor}>
      Nguyễn Văn A
    </button>
  );
}
