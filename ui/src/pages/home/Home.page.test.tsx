import {render, screen} from '../../common/helpers/TestUtil';
import HomePage from './Home.page';

describe("<App/>", () => {
    
    it('renders HomePage component', () => {        
        render(<HomePage/>);
        expect(<HomePage/>).toBeTruthy();        
    });

    it('consists 2 buttons - Login button and Github button', () => {        
        render(<HomePage/>);        
        const LoginText = screen.getByText(/Zurich/);
        const gitHubText = screen.getByText(/Github Repo/);        
        
        // pass
        expect(LoginText).toBeInTheDocument();
        expect(gitHubText).toBeInTheDocument();        
    });
    
});
