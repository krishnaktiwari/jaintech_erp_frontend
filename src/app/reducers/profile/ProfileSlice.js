import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Config from "../../constants/Config";

export const fetchProfile = createAsyncThunk(
	"profile/fetchProfile",
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
export const profileSlice = createSlice({
	name: "profile",
	initialState: {
		inAction: null,
		error: null,
		message: null,
		profile: null,
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
		[fetchProfile.pending]: (state) => {
			state.inAction = true;
		},
		[fetchProfile.fulfilled]: (state, { payload }) => {
			state.inAction = false;
			if (payload.error) {
				state.error = true;
				state.message = payload.message;
			} else {
				state.error = false;
				state.profile = payload.user;
			}
		},
		[fetchProfile.rejected]: (state, { payload }) => {
			state.inAction = false;
		},
	},
});
export const { clearFlag } = profileSlice.actions;
export const profileSelector = (state) => state.profile;
