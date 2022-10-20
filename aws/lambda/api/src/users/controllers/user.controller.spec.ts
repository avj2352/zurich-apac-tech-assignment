import { Test, TestingModule } from '@nestjs/testing';
import { USER_ROLE, USER_SUBSCRIPTION_TYPE } from '../../common/enums';
import { AuthService } from '../../auth/services/auth.service';
import { UserController } from './user.controller';
import { UserService } from '../services/user.service';
import { UserQueryDTO } from '../dto/user.dto';
import { IDisplayUser } from '../../auth/models/user.model';

// define method isgnatures to match exactly as DAO's method signatures

type IMockAuthService = {
    googleLogin: { mockResolvedValue: (data: Promise<string>) => void };
    getUserByToken: {mockResolvedValue: (data: IDisplayUser) => void };
    logout: {mockResolvedValue: (data: Promise<any>) => void };    
};

type IMockUserService = {
    fetchUsers: { mockResolvedValue: (data: Promise<Object[]>) => void };    
};

// mocking dependencies - services, dao....
const mockAuthService = () => ({
    googleLogin: jest.fn(),
    getUserByToken: jest.fn(),
    logout: jest.fn(),
});

// mocking dependencies - services, dao....
const mockUserService = () => ({
    fetchUsers: jest.fn(),    
});

let authService: IMockAuthService;
let userService: IMockUserService;
let userController: UserController;
let mockDTO: UserQueryDTO;

function getTestUser(): IDisplayUser {
    return {        
        firstName: 'Test',   
        lastName: 'User',   
        email: 'test@gmail.com',
        role: USER_ROLE.FREE,        
        subscribed: 0,
        subscriptionType: USER_SUBSCRIPTION_TYPE.NONE
    }
}

const mockResponse = () => ({
    // json: jest.fn().mockReturnThis(),
    json: jest.fn()
});  

describe('UserController', () => {
    beforeAll(async()=> {        
        // bootstrap module
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [            
                AuthService,
                UserService,
                { provide: AuthService, useFactory: mockAuthService },
                { provide: UserService, useFactory: mockUserService },
              ],
        }).compile();

        userController = module.get<UserController>(UserController);        
        authService = module.get(AuthService);
        userService = module.get(UserService);
        mockDTO = new UserQueryDTO();

    });
  
  let response: any;  

  describe('UserController', () => {
    describe('test GET /users - fetchUsers', () => {
        it('should return a valid JSON information from Request response API', async () => {
            const mockUserResponse: Promise<Object[]> = Promise.resolve([]);
            const expectedResult: Promise<Object[]> = Promise.resolve([]);
            const query: UserQueryDTO = {page: 0};
            const accessToken: string = `testToken`;
            // mock services & dependencies
            userService.fetchUsers.mockResolvedValue(mockUserResponse);
            authService.getUserByToken.mockResolvedValue(getTestUser());
            // call test method
            const result = await userController.search(accessToken, query);
            // assert
            expect(userService.fetchUsers).toHaveBeenCalled();
            expect(typeof(result)).toEqual(typeof(expectedResult));
          });
    });
  });
});