import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../components/users/userSlice'
import bikeReducer from '../components/bikes/bikeSlice'
import carReducer from '../components/cars/carSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    bike : bikeReducer,
    car : carReducer
  }
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
