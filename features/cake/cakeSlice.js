const createSlice = require('@reduxjs/toolkit').createSlice;


const initialState= {
    numOfCakes : 10
    //ovo definise stanje sa kojim pocinjemo
};

const cakeSlice = createSlice({
    name : 'cake',
    initialState, //ako je stanje i naziv isti mozemo ovako pisati a inace bi bilo
    // initalState : initalState

    reducers: {
        ordered : (state) => {
            state.numOfCakes--
            //direktno mutiramo niz
            //ovo je moguce jer createSlice koristi immer 
        },
        restocked: (state,action) => {
            state.numOfCakes += action.payload
        },
    }
});

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions