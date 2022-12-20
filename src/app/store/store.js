import { configureStore } from '@reduxjs/toolkit'
import dataCitis from '../selector/dataCitySlice'
import userInfors from '../selector/UserInfor'


export const store = configureStore({
    reducer: {
        city: dataCitis,
        user: userInfors,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})