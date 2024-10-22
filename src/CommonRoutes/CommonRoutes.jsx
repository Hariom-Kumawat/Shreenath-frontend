import { Route, Routes } from "react-router-dom";
import { RoutesLink } from "../ApiHelper/RoutesLink";

import Layout from "../components/layout/Admin/Layout";
import LoginPage from "../Pages/Auth/Login";
import ForgetPasswordPage from "../Pages/Auth/ForgetPassword";
import VerifyOTPPage from "../Pages/Auth/VerifyOTP";
import NewPasswordPage from "../Pages/Auth/NewPassword";

// admin
import Dashboard from "../Pages/Admin/DashBoard.js/DashBoard";

// sites
import Sites from "../Pages/Admin/Sites/Sites";
import AddSiteForm from "../components/AddSiteForm";
import Customers from "../Pages/Admin/Sites/Customers";
import AddCustomerForm from "../components/AddCustomerForm";
import Vendors from "../Pages/Admin/Sites/Vendors";
import AddVendorForm from "../components/AddVendorForm";

//hrm
import Attendance from '../Pages/Admin/HRM/Attendance'
import Leave from "../Pages/Admin//HRM/Leave";
import Holidays from "../Pages/Admin/HRM/Holidays";
import Reimbursement from "../Pages/Admin/HRM/Reimbursement";
import AttRegularizationRequest from "../Pages/Admin/HRM/Att-Regularization-Req";

//masters
import Department from "../Pages/Admin/Masters/Department";
import Designation from "../Pages/Admin/Masters/Designation";
import EmployeeOnBoard from "../Pages/Admin/Masters/Employee-On-Board";
import AddEmployeeOnBoardForm from "../components/Add-EmployeeOnBoardForm";
import ShiftAndTimeConfiguration from "../Pages/Admin/Masters/Shift&Time-Configuration";
import AddShiftAndTimeConfigForm from "../components/Add-Shift&TimeConfigurationForm";
import LeaveConfiguration from "../Pages/Admin/Masters/Leave-Configuration";
import AddLeaveConfigForm from "../components/Add-Leave-ConfigurationForm";


// user
import SwitchUser from "../Pages/Auth/SwitchUser";
import UserLayout from "../components/layout/User/Layout";
import UserDashboard from "../Pages/User/Dashboard/Dashboard";
import UserAttendance from "../Pages/User/Attendance/Attendance";
import AttendanceList from '../Pages/User/Attendance/AttendanceList'
import UserLeave from '../Pages/User/Leave/UserLeave';
import LeaveRequest from "../Pages/User/Leave/LeaveRequest";


const CommonRoutes = () => {
  return (
    <Routes>
      {/* Auth */}
      <Route path={RoutesLink?.login_route} element={<LoginPage />} />
      <Route path={RoutesLink?.forget_password_route} element={<ForgetPasswordPage />} />
      <Route path={RoutesLink?.verifyOTP_route} element={<VerifyOTPPage />} />
      <Route path={RoutesLink?.newPassword_route} element={<NewPasswordPage />} />
      {/* // switch user   */}
      <Route path={RoutesLink?.switch_user} element={<SwitchUser />} />

      {/* // adimin */}
      <Route path={RoutesLink?.layout_route} element={<Layout />}>

        {/* hrm routes */}
        <Route path={RoutesLink?.dashboard_route} element={<Dashboard />} />
        <Route path={RoutesLink?.attendance_route} element={<Attendance />} />
        <Route path={RoutesLink?.leave_route} element={<Leave />} />
        <Route path={RoutesLink?.holidays_route} element={<Holidays />} />
        <Route path={RoutesLink?.att_regularization_request} element={<AttRegularizationRequest />} />
        <Route path={RoutesLink?.reimbursement_route} element={<Reimbursement />} />

        {/* master routes */}
        <Route path={RoutesLink?.department_route} element={<Department />} />
        <Route path={RoutesLink?.designation_route} element={<Designation />} />

        <Route path={RoutesLink?.shiftAndTimeCongiguration_route} element={<ShiftAndTimeConfiguration />} />
        <Route path={RoutesLink?.add_shiftAndTimeCongiguration_route} element={<AddShiftAndTimeConfigForm />} />

        <Route path={RoutesLink?.leave_configuration_route} element={<LeaveConfiguration />} />
        <Route path={RoutesLink?.add_leave_configuration_route} element={<AddLeaveConfigForm />} />

        <Route path={RoutesLink?.employeeOnBoard_route} element={<EmployeeOnBoard />} />
        <Route path={RoutesLink?.add_employeeOnBoard_route} element={<AddEmployeeOnBoardForm />} />

        {/* sites routes */}
        <Route path={RoutesLink?.sites_route} element={<Sites />} />
        <Route path={RoutesLink?.add_site_route} element={<AddSiteForm />} />

        <Route path={RoutesLink?.vendors_route} element={<Vendors />} />
        <Route path={RoutesLink?.add_vendor_route} element={<AddVendorForm />} />

        <Route path={RoutesLink?.customers_route} element={<Customers />} />
        <Route path={RoutesLink?.add_customer_route} element={<AddCustomerForm />} />
      </Route>

      {/* user */}
      <Route path={RoutesLink?.user_layout} element={<UserLayout />}>
        <Route path={RoutesLink?.user_dashboard} element={<UserDashboard />} />
        <Route path={RoutesLink?.user_attendance} element={<UserAttendance />} />
        <Route path={RoutesLink?.user_attendance_list} element={<AttendanceList />} />
        <Route path={RoutesLink?.user_leave} element={<UserLeave />} />
        <Route path={RoutesLink?.user_leave_request} element={<LeaveRequest />} />


      </Route>



    </Routes >
  );
};
export default CommonRoutes;
