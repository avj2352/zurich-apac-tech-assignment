import { Test } from '@nestjs/testing';
import { AuthService } from '../../auth/services/auth.service';
import { UserDao } from '../dao/user.dao';
import { UserService } from './user.service';

type IMockUserDao  = { 
    fetchUsers: { mockResolvedValue: (data: Promise<Object[]>) => void };    
};

// mocking - DAO layer
const mockUserDao = () => ({
    fetchUsers: jest.fn()    
});

// mocking - dependencies
const mockAuthService = () => ({});

let userDao: IMockUserDao;    
let userService: UserService;

describe('UserService', ()=> {    
    
    beforeEach(async () => {
        const module = await Test.createTestingModule({
          providers: [            
            AuthService,
            UserService,                                                       
            { provide: UserDao, useFactory: mockUserDao },                                
            { provide: AuthService, useFactory: mockAuthService },                                
          ],
        }).compile();
    
        userService = module.get(UserService);
        userDao = module.get(UserDao);
    
    });

    describe('Check Method Signatures', () => {

        it('calls underlying userDao.fetchUsers and returns a valid JSON response', async () => {
          // mocking the DAO layer 
          const mockData: Object[] = [];
          const mockResult: Promise<Object[]> = Promise.resolve(mockData);
          userDao.fetchUsers.mockResolvedValue(mockResult);
          const result = await userService.fetchUsers(1);
          expect(result).toBeTruthy();
        });
        
    });

});