import {
createSlice
}
from
"@reduxjs/toolkit";

const recommendationSlice =
createSlice({

name:"recommendation",

initialState:{

products:[]

},

reducers:{

setRecommendations:
(state,action)=>{

state.products =
action.payload;

}

}

});

export const {

setRecommendations

}
=
recommendationSlice.actions;

export default
recommendationSlice.reducer;