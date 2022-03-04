import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../constants/Config";
export const SendOTPAction = createAsyncThunk(
	"auth/SendOTPAction",
	async (data, thunkAPI) => {
		try {
			const response = await axios.post(Config.apiUrl + "auth/createOTP", data);

			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
export const VerifyOTPAction = createAsyncThunk(
	"auth/VerifyOTPAction",
	async (data, thunkAPI) => {
		try {
			const response = await axios.post(Config.apiUrl + "auth/verifyOTP", data);

			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
export const LoginAction = createAsyncThunk(
	"auth/LoginAction",
	async (data, thunkAPI) => {
		try {
			const response = await axios.post(Config.apiUrl + "auth/user", data);

			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);
export const authSlice = createSlice({
	name: "auth",
	initialState: {
		inAction: null,
		error: null,
		message: null,
		otp: null,
		user: null,
		token: null,
	},
	reducers: {
		setAuth: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		clearAuth: (state) => {
			state.inAction = null;
			state.error = null;
			state.message = null;
			state.otp = null;
			state.user = null;
			state.token = null;
		},
		clearFlag: (state) => {
			state.inAction = null;
			state.error = null;
			state.message = "";
		},
	},
	extraReducers: {
		/* Send OTP */
		[SendOTPAction.pending]: (state) => {
			state.inAction = true;
		},
		[SendOTPAction.fulfilled]: (state, { payload }) => {
			state.inAction = null;

			if (payload.error) {
				state.error = true;
				state.message = payload.message;
			} else {
				state.error = false;
				state.otp = payload.data;
			}
		},
		[SendOTPAction.rejected]: (state, action) => {
			state.inAction = null;
			state.error = true;
			state.message = "Invalid request ...";
		},

		/* Verify OTP */
		[VerifyOTPAction.pending]: (state) => {
			state.inAction = true;
		},
		[VerifyOTPAction.fulfilled]: (state, { payload }) => {
			state.inAction = null;

			if (payload.error) {
				state.error = true;
				state.message = payload.message;
			} else {
				state.inAction = false;
        state.error = false;
				state.user = payload.user;
				state.token = payload.token;
			}
		},
		[VerifyOTPAction.rejected]: (state, action) => {
			state.inAction = null;
			state.error = true;
			state.message = "Invalid request ...";
		},

		/* Login Action */
		[LoginAction.pending]: (state) => {
			state.inAction = true;
		},
		[LoginAction.fulfilled]: (state, { payload }) => {
			state.inAction = null;

			if (payload.error) {
				state.error = true;
				state.message = payload.message;
			} else {
				state.error = false;
				state.user = payload.user;
				state.token = payload.token;
			}
		},

		[LoginAction.rejected]: (state, { payload }) => {},
	},
});
export const { setAuth, clearAuth, clearFlag } = authSlice.actions;
export const authSelector = (state) => state.auth;
