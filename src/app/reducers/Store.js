import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/AuthSlice";
import { profileSlice } from "./profile/ProfileSlice";

export default configureStore({
	reducer: {
		auth: authSlice.reducer,
		profile: profileSlice.reducer,
	},
});
