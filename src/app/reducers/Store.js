import { configureStore } from "@reduxjs/toolkit";
import { attendanceSlice } from "./attendance/AttendanceSlice";
import { authSlice } from "./auth/AuthSlice";
import { employeeSlice } from "./employee/EmployeeSlice";
import { profileSlice } from "./profile/ProfileSlice";

export default configureStore({
	reducer: {
		auth: authSlice.reducer,
		profile: profileSlice.reducer,
		employee: employeeSlice.reducer,
		attandance: attendanceSlice.reducer,
	},
});
