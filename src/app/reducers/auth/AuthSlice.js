import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firebase from "../../database/FirebaseDB";

export const LoginAction = createAsyncThunk(
	"auth/LoginAction",
	async (data, thunkAPI) => {
		try {
			const response = await firebase
				.auth()
				.signInWithEmailAndPassword(data.login_id, data.password);

			return response;
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
		/* Login Action */
		[LoginAction.pending]: (state) => {
			console.log("Action Pending");
			state.inAction = true;
		},
		[LoginAction.fulfilled]: (state, { payload }) => {
			console.log("Action Fulfilled");
			state.inAction = null;

			state.token = payload.user._delegate.accessToken;

			state.user = payload.user._delegate;

			state.error = false;

			/*
			if (payload.error) {
				state.error = true;
				state.message = payload.message;
			} else {
				state.error = false;
				state.user = payload.user;
				state.token = payload.token;
			}
      */
		},

		[LoginAction.rejected]: (state, { payload }) => {
			console.log("Action rejected");
			state.inAction = null;
		},
	},
});
export const { setAuth, clearAuth, clearFlag } = authSlice.actions;
export const authSelector = (state) => state.auth;
