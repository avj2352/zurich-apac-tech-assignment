import {render, screen} from '../../common/helpers/TestUtil';
import Header from './Header';

describe("<App/>", () => {
    
    it('renders Footer component', () => {        
        render(<Header/>);
        expect(<Header/>).toBeTruthy();        
    });

    it('consists of brand text', () => {        
        render(<Header/>);        
        const brandText = screen.getByText(/Zurich Technical Assignment/);        
        
        // pass
        expect(brandText).toBeInTheDocument();        
    });
    
});
