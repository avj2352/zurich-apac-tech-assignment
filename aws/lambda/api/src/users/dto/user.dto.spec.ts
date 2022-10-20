import { validate } from "class-validator";
import { UserQueryDTO } from './user.dto';


let userQueryDto: UserQueryDTO;

describe('DTO Validation',()=>{
    beforeAll(()=>{        
        userQueryDto = new UserQueryDTO();
    });

    it('UserQueryDTO - should not accept invalid DTO', () => {
        return validate(userQueryDto).then(errors => {
            expect(errors.length).toBe(0);            
        });    
    });    

});
