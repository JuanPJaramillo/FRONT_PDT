import { createSlice } from '@reduxjs/toolkit';

export const homePageSlice = createSlice({
    name: 'homePage',
    initialState: {
        isLoading: false,
        allFlights: [],
        allDataFlights: [],
        departureCity: null,
        arrivalCity: null,
        departureDate: null,
        arrivalDate: null,
        countAdult: 0,
        countChild: 0
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },

        getAllFlights: (state, action) => {
            state.allFlights = action.payload;
        },

        getAllDataFlights: (state, action) => {
            state.allDataFlights = action.payload;
        },

        deleteAllDataFlights: (state) => {
            state.allDataFlights = [];
        },

        setDepartureCity: (state, action) => {
            state.departureCity = action.payload;
        },

        setArrivalCity: (state, action) => {
            state.arrivalCity = action.payload;
        },

        setDepartureDate: (state, action) => {
            state.departureDate = action.payload;
        },

        setArrivalDate: (state, action) => {
            state.arrivalDate = action.payload;
        },

        SumCountAdult: (state, action) => {
            if (action.payload === 'Sum') {
                state.countAdult = state.countAdult + 1;
            } else {
                state.countAdult = state.countAdult - 1;
            }
        },

        RestCountChild: (state, action) => {
            if (action.payload === 'Sum') {
                state.countChild = state.countChild + 1;
            } else {
                state.countChild = state.countChild - 1;
            }
        },
    },
})

export const { startLoading, stopLoading, getAllFlights, setDepartureCity, setArrivalCity, setDepartureDate, setArrivalDate, SumCountAdult, RestCountChild, getAllDataFlights, deleteAllDataFlights } = homePageSlice.actions
