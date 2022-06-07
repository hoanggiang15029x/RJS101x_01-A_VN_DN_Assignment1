import StaffList from "./components/StaffList";
import "./index.css";
import StaffInfor from "./components/StaffInfor";
import { STAFFS } from "./shared/staffs";
const staffList = STAFFS;

const showInfor = (id) => {
  alert("hello " + id);
};

function App() {
  return (
    <>
      <h1>Ứng dụng quản lý nhân sự v1.0</h1>
      <StaffList staffList={staffList} showInfor={showInfor} />
      <StaffInfor />
    </>
  );
}

export default App;
