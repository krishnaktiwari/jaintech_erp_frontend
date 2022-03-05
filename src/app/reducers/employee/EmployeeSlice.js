import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../constants/Config";

export const fetchEmployee = createAsyncThunk(
	"employee/fetchEmployee",
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
export const employeeSlice = createSlice({
	name: "employee",
	initialState: {
		inAction: null,
		error: null,
		message: null,
		employee: null,
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
		[fetchEmployee.pending]: (state) => {
			state.inAction = true;
		},
		[fetchEmployee.fulfilled]: (state, { payload }) => {
			state.inAction = false;
			if (payload.error) {
				state.error = true;
				state.message = payload.message;
			} else {
				state.error = false;
				state.employee = payload.user;
			}
		},
		[fetchEmployee.rejected]: (state, { payload }) => {
			state.inAction = false;
		},
	},
});
export const { clearFlag } = employeeSlice.actions;
export const employeeSelector = (state) => state.employee;
