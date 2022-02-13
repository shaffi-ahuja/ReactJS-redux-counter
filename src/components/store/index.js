import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });
export const counterActions = counterSlice.actions;
export default store; //to connect with react app

// const subscriberFunction = () => {
//     console.log(store.getState());
//   };
// store.subscribe(subscriberFunction);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
