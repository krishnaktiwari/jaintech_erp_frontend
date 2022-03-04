import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../constants/Config";
export const fetchUser = createAsyncThunk(
	"user/fetchUser",
	async (data, { getState }, thunkAPI) => {
		const { auth } = getState();

		try {
			const response = await axios.post(
				Config.apiUrl + "user/fetchUser",
				data,
				{
					headers: {
						Authorization: auth.token,
					},
				}
			);

			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);

export const addUser = createAsyncThunk(
	"user/addUser",
	async (data, { getState }, thunkAPI) => {
		const { auth } = getState();


		try {
			const response = await axios.post(Config.apiUrl + "user/create", data, {
				headers: {
					Authorization: auth.token,
				},
			});

			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.response.data);
		}
	}
);

export const userSlice = createSlice({
	name: "user",
	initialState: {
		inAction: null,
		error: null,
		message: null,
		userList: null,
	},
	reducers: {
		clearFlag: (state) => {
			state.inAction = null;
			state.error = null;
			state.message = "";
		},
	},
	extraReducers: {
		[fetchUser.pending]: (state) => {
			state.inAction = true;
		},
		[fetchUser.fulfilled]: (state, { payload }) => {
			state.inAction = null;

			if (payload.error) {
				state.error = true;
				state.message = payload.message;
			} else {
				state.error = false;
				state.userList = payload.userList;
			}
		},
		[fetchUser.rejected]: (state, { payload }) => {
			state.inAction = null;

			state.error = true;
			state.message = "Going something wrong ...";
		},
		/*-----------------------------------------------------*/
		/* ADD USER */
		[addUser.pending]: (state) => {
			state.inAction = true;
		},
		[addUser.fulfilled]: (state, { payload }) => {
			if (payload.error) {
				state.error = true;
				state.message = payload.message;
			} else {
				state.error = false;
			}
		},
		[addUser.rejected]: (state, { payload }) => {
			state.inAction = null;

			state.error = true;
			state.message = "Going something wrong ...";
		},
	},
});
export const { clearFlag } = userSlice.actions;
export const userSelector = (state) => state.user;
