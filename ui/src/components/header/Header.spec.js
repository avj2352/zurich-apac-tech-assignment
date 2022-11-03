import {render} from '../../common/helpers/Test.util';
import {Header} from './Header';

describe("<Header/>", () => {
    
    it('renders Header component', () => {        
        const app = render(<Header/>);
        expect(app).toBeTruthy();        
    });

    it('consists of brand text', () => {        
        const screen = render(<Header/>);        
        const brandText = screen.getByText(/Zurich Technical Assignment/);        
        
        // pass
        expect(brandText).toBeInTheDocument();        
    });
    
});