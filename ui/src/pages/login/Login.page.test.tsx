import {render, screen} from '../../common/helpers/TestUtil';
import LoginPage from './Login.page';

describe("<App/>", () => {
    
    it('renders HomePage component', () => {        
        render(<LoginPage type={'signIn'}/>);
        expect(<LoginPage type={'signIn'}/>).toBeTruthy();        
    });

    it('consists 1 button called SignIn', () => {        
        render(<LoginPage type={'signIn'}/>);
        const LoginText = screen.getByText(/Sign In using your Google account/);        
        
        // pass
        expect(LoginText).toBeInTheDocument();        
    });

    it('consists 1 button called SignUp', () => {        
        render(<LoginPage type={'signUp'}/>);
        const LoginText = screen.getByText(/Sign Up using your Google account/);        
        
        // pass
        expect(LoginText).toBeInTheDocument();        
    });
    
});
