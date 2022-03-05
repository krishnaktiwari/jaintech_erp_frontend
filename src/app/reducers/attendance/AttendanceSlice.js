import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../constants/Config";

export const fetchAttendance = createAsyncThunk(
	"attendance/fetchAttendance",
	async (data, { getState }, thunkAPI) => {
		const { auth } = getState();

		try {
			const response = await axios.post(Config.apiUrl + "user/findById", data, {
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
export const attendanceSlice = createSlice({
	name: "attendance",
	initialState: {
		inAction: null,
		error: null,
		message: null,
		attendance: null,
	},
	reducers: {
		clearFlag: (state) => {
			inAction = null;
			state.error = null;
			state.message = null;
			return state;
		},
	},
	extraReducers: {
		[fetchAttendance.pending]: (state) => {
			state.inAction = true;
		},
		[fetchAttendance.fulfilled]: (state, { payload }) => {
			state.inAction = false;
			if (payload.error) {
				state.error = true;
				state.message = payload.message;
			} else {
				state.error = false;
				state.attendance = payload.user;
			}
		},
		[fetchAttendance.rejected]: (state, { payload }) => {
			state.inAction = false;
		},
	},
});
export const { clearFlag } = attendanceSlice.actions;
export const attendanceSelector = (state) => state.attendance;
