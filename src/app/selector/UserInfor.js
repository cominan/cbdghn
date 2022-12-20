import { createSlice } from '@reduxjs/toolkit'


export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        initValue: {
            user:'',
        }
    },
    reducers: {
        userInfor: (state, action) => {
            state.initValue.user = action.payload
        }
    }
})


export const { userInfor } = UserSlice.actions
export const user = (state) => state.user.initValue.user
export default UserSlice.reducer