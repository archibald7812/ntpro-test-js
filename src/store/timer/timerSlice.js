import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	timer: false
}

export const timerSlice = createSlice({
	name: 'timer',
	initialState: initialState,
	reducers: {
		startTimer: (state, action) => {
			state.timer = true
		},
		stopTimer: (state, action) => {
			state.timer = false
		},
	}
})

export const { startTimer, stopTimer } = timerSlice.actions