import userInfoReducer, { updateList } from './User.slice';
  
  describe('user info reducer', () => {
    const initialState = {
        status: 'idle',  
        data: [{
          id: 0,
          email: '',
          first_name: '',
          last_name: '',
          avatar: ''
        }]
      };
    // expected
    const expectedState = {
        status: 'idle',
        data: [{
            id: 1,
            email: 'test@gmail.com',
            first_name: 'Test',
            last_name: 'User',
            avatar: 'https://google.com'
        }]
    }
  
    it('should update list', () => {
      const actual = userInfoReducer(initialState, updateList(expectedState.data));
      expect(actual).toEqual(expectedState);
    });
  });
  