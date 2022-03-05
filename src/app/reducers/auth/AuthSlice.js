import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firebase from "../../database/FirebaseDB";

export const LoginAction = createAsyncThunk(
	"auth/LoginAction",
	async (data, thunkAPI) => {
		try {
			const response = await firebase
				.auth()
				.createUserWithEmailAndPassword("info@pradakshina.in", "Swadha@20684$");

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
