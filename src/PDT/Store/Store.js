import { configureStore } from '@reduxjs/toolkit';
import { homePageSlice } from '../HomePage/Slice/HomePageSlice';
import { RegisterUserPageSlice } from '../RegisterUserPage/Slice/RegisterUserPageSlice';

export const store = configureStore({
    reducer: {
        homePage: homePageSlice.reducer,
        registerUserPage: RegisterUserPageSlice.reducer
    },
})