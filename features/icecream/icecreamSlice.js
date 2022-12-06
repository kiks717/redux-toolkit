const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState= {
    numOfIceCreams : 20
};

const iceCreamSlice = createSlice({
    name : 'icecream',
    initialState,
    reducers : {
        ordered : (state) => {
            state.numOfIceCreams--
        },
        restocked: (state,actions) => {
            state.numOfIceCreams += actions.payload
        },
    },
    //buy cake and get icecream for free
    // extraReducers: {
    //     ['cake/ordered'] : (state) => {
    //         state.numOfIceCreams--/mutiramo stanje pomocu immera
    //     }
    // }
    extraReducers : (builder) => {
        builder.addCase(cakeActions.ordered,state => {
            //prvi argument je action type a to je ordered
            state.numOfIceCreams--
        })
    }
    
});

module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;
            // ovako ce biti exportovano(icecreamActions)
