import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskManager: {
        tasks: Array.from({length: 10}, (_, index) => ({
            id: index +1,
            status: 'not started',
        }))
    },
    answer: "no answer",
    ui: {
        currentTask: 1,
        showModal: false,
        showIntro: true
    },
};

export const taskSlicer = createSlice({
    name: "task",
    initialState,
    reducers: {
        markTaskRight(state,action) {
            const taskId = action.payload;
            const task = state.taskManager.tasks.find((task) => task.id === taskId)
            if (task) {
                task.status = 'right'
            }
        },
        markTaskWrong(state, action) {
            const taskId = action.payload
            const task = state.taskManager.tasks.find((task) => task.id === taskId)
            if (task) {
                task.status = 'wrong'
            }
        },
        UItoggleModal: (state) => {
                state.ui.showModal = !state.ui.showModal

        },
        UInextTask: (state) => {
            state.ui.currentTask += 1
        },
        UIintroSchreen: (state) => {
            state.ui.showIntro = !state.ui.showIntro
        },
        UIresetTask: () => initialState
    }
})

export const {markTaskRight, markTaskWrong, UItoggleModal, UInextTask, UIintroSchreen, UIresetTask} = taskSlicer.actions

export default taskSlicer.reducer