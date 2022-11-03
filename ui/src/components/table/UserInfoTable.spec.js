import {render} from '../../common/helpers/Test.util';
import {UserInfoTable} from './UserInfoTable';

describe("<UserInfoTable/>", () => {
    
    it('renders UserInfoTable component', () => {        
        const app = render(<UserInfoTable 
            userInfoList={[]} 
            page={0} 
            total={0} 
            onPageTurn={()=>console.log('pae turned')}/>);
        expect(app).toBeTruthy();        
    });    
    
});