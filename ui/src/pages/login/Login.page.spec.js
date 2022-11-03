import {render} from '../../common/helpers/Test.util';
import LoginPage from './Login.page';

describe("<LoginPage/>", () => {
    
    it('renders LoginPage component', () => {        
        const app = render(<LoginPage type={'signIn'}/>);
        expect(app).toBeTruthy();        
    });

    it('consists 1 button called SignIn', () => {        
        const screen = render(<LoginPage type={'signIn'}/>);
        const loginText = screen.getByText(/Sign In using your Google account/);        
        
        // pass
        expect(loginText).toBeInTheDocument();        
    });

    it('consists 1 button called SignUp', () => {        
        const screen = render(<LoginPage type={'signUp'}/>);
        const loginText = screen.getByText(/Sign Up using your Google account/);        
        
        // pass
        expect(loginText).toBeInTheDocument();        
    });
    
});