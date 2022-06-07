import StaffList from "./components/StaffList";
import "./index.css";

import { STAFFS } from "./shared/staffs";
const staffList = STAFFS;

function App() {
  return (
    <>
      <h1>Ứng dụng quản lý nhân sự v1.0</h1>
      <StaffList staffList={staffList} />
    </>
  );
}

export default App;
