import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserDetails } from '../../async/AsyncCalls';

const initialState = {
  status: 'idle',
  token: '',
  profile: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
  }
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchUserProfileAsync = createAsyncThunk(
  'profile/getUserDetails',
  async () => {
    console.log('Dispatch profile');
    const response = await getUserDetails();
    // The value we return becomes the `fulfilled` action payload
    console.log('profile details: ', response);
    return response;
  }
);

export const userProfileSlice = createSlice({
  name: 'profile',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {  
    updateProfile: (state, action) => {
       state.profile = action.payload;
    }  
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfileAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserProfileAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.profile = action.payload;
      });
  },
});

export const { updateProfile } = userProfileSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserProfile = (state) => state.profile.data;

export default userProfileSlice.reducer;