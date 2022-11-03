import userProfileReducer, { updateProfile } from './Profile.slice';
  
  describe('user profile reducer', () => {
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
    // expected
    const expectedState = {
        status: 'idle',
        token: '',
        profile: {
          id: '01GGVDPJ7BQWN9T6RQMPMNRM2R',
          email: 'test.user@gmail.com',
          firstName: 'Test',
          lastName: 'User',
        }
      };
  
    it('should update profile', () => {
      const actual = userProfileReducer(initialState, updateProfile(expectedState.profile));
      expect(actual).toEqual(expectedState);
    });
  });
  