import {render} from '../../common/helpers/Test.util';
import HomePage from './Home.page';

describe("<HomePage/>", () => {
    
    it('renders HomePage component', () => {        
        const app = render(<HomePage/>);
        expect(app).toBeTruthy();        
    });

    it('consists 2 buttons - Login button and Github button', () => {        
        const screen = render(<HomePage/>);        
        const loginText = screen.getByText(/Zurich/);
        const gitHubText = screen.getByText(/Github Repo/);        
        
        // pass
        expect(loginText).toBeInTheDocument();
        expect(gitHubText).toBeInTheDocument();        
    });
    
});