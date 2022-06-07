import StaffList from "./components/StaffList";
import "./index.css";
import StaffInfor from "./components/StaffInfor";
import { STAFFS } from "./shared/staffs";
import { useState } from "react";
const staffList = STAFFS;
console.log(staffList);

function App() {
  const [staffs, setStaff] = useState(null);
  const chooseStaff = (staff) => {
    console.log(staff);
    setStaff(staff);
  };
  return (
    <>
      <h1>Ứng dụng quản lý nhân sự v1.0</h1>
      <StaffList staffList={staffList} chooseStaff={chooseStaff} />
      <StaffInfor staffs={staffs} />
    </>
  );
}

export default App;
