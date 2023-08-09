
import { configureStore } from '@reduxjs/toolkit'
import  subitizingSlicer  from '../slices/subitizingslicers/subitizingslicer';
import taskSlicer from '../slices/taskSlice';

export const store = configureStore({
    reducer: {
        subitizing: subitizingSlicer,
        tasks: taskSlicer
    }
})