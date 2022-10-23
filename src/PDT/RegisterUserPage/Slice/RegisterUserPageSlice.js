import { createSlice } from '@reduxjs/toolkit';

export const RegisterUserPageSlice = createSlice({
    name: 'registerUserPage',
    initialState: {
        departureCity: '',
        arrivalCity: '',
        money: 0,
        hour: null,
        countAdultRegister: 0,
        countChildRegister: 0,
        totalAdults: [],
        documentAdults: '',
        nameAdults: '',
        dateBirthAdults: null,
        totalChild: [],
        documentChild: '',
        nameChild: '',
        dateBirthChild: null,
    },
    reducers: {
        setDataFlight: (state, action) => {
            state.departureCity = action.payload.data1;
            state.arrivalCity = action.payload.data2;
            state.money = action.payload.data3;
            state.hour = action.payload.data4;
        },
        setDocumentAdults: (state, action) => {
            state.documentAdults = action.payload;
        },
        setNameAdults: (state, action) => {
            state.nameAdults = action.payload;
        },
        setDateBirthAdults: (state, action) => {
            state.dateBirthAdults = action.payload;
        },
        onAddTotalAdults: (state, action) => {
            state.totalAdults = action.payload;
        },
        onDeleteTotalAdults: (state) => {
            state.documentAdults = '';
            state.nameAdults = '';
            state.dateBirthAdults = null;
        },
        setDocumentChild: (state, action) => {
            state.documentChild = action.payload;
        },
        setNameChild: (state, action) => {
            state.nameChild = action.payload;
        },
        setDateBirthChild: (state, action) => {
            state.dateBirthChild = action.payload;
        },
        onAddTotalChild: (state, action) => {
            state.totalChild = action.payload;
        },
        onDeleteTotalChild: (state) => {
            state.documentChild = '';
            state.nameChild = '';
            state.dateBirthChild = null;
        },
        setCountAdultRegister: (state, action) => {
            state.countAdultRegister = action.payload;
        },
        setCountChildRegister: (state, action) => {
            state.countChildRegister = action.payload;
        },
    },
})

export const { setCountAdultRegister, setCountChildRegister, setDocumentAdults, setNameAdults, setDateBirthAdults, onDeleteTotalAdults,
    onAddTotalAdults, setDocumentChild, setNameChild, setDateBirthChild, onAddTotalChild, onDeleteTotalChild, setDataFlight } = RegisterUserPageSlice.actions
