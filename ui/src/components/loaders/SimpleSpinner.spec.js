import {render} from '../../common/helpers/Test.util';
import {SimpleSpinner} from './SimpleSpinner';

describe("<SimpleSpinner/>", () => {
    
    it('renders SimpleSpinner component', () => {        
        const app = render(<SimpleSpinner isLoading={true}/>);
        expect(app).toBeTruthy();        
    });    
    
});