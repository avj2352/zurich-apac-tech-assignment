import { Test, TestingModule } from '@nestjs/testing';
import { USER_ROLE, USER_SUBSCRIPTION_TYPE } from '../../common/enums';
import { IDisplayUser } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { AuthController } from './auth.controller';

// define method isgnatures to match exactly as DAO's method signatures

type IMockAuthService = {
    googleLogin: { mockResolvedValue: (data: Promise<string>) => void };
    getUserByToken: {mockResolvedValue: (data: IDisplayUser) => void };
    logout: {mockResolvedValue: (data: Promise<any>) => void };    
};

// mocking dependencies - services, dao....
const mockAuthService = () => ({
    googleLogin: jest.fn(),
    getUserByToken: jest.fn(),
    logout: jest.fn(),
});

let authService: IMockAuthService;
let authController: AuthController;

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

describe('AuthController', () => {
    beforeAll(async()=> {        
        // bootstrap module
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [            
                AuthService,                                                                                                                 
                { provide: AuthService, useFactory: mockAuthService },                                
              ],
        }).compile();

        authController = module.get<AuthController>(AuthController);        
        authService = module.get(AuthService);

    });
  
  let response: any;  

  describe('AuthController', () => {
    describe('test google authentication', () => {
        it('should return a JSON information about the user', async () => {
            response = mockResponse();            
            expect(authController.googleAuth).toBeDefined();
            const result = await authController.googleAuth(response);
            expect(JSON.stringify(result)).toBe(JSON.stringify(mockResponse));
          });
    });
  });
});