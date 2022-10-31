import { Test } from '@nestjs/testing';
import { HealthController } from './health.controller';

const mockResponse = () => ({
    // json: jest.fn().mockReturnThis(),
    json: jest.fn()
});  

describe('HealthController', () => {
  let controller: HealthController;
  let response: any;
  beforeEach(async () => {    
    const module = await Test.createTestingModule({
        controllers: [
          HealthController          
        ],
      }).compile();
      controller = module.get(HealthController);      
  });

  describe('HealthController', () => {
    describe('default API', () => {
        it('should return a json of server related information', async () => {
            response = mockResponse();            
            expect(controller.displayHealth).toBeDefined();
            const result = await controller.displayHealth(response);
            expect(result).toBe(undefined);
          });
    });    
  });
});