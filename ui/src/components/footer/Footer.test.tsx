import {render, screen} from '../../common/helpers/TestUtil';
import Footer from './Footer';

describe("<App/>", () => {
    
    it('renders Footer component', () => {        
        render(<Footer/>);
        expect(<Footer/>).toBeTruthy();        
    });

    it('consists links to UI, Github, Profile website references in the content', () => {        
        render(<Footer/>);        
        const picoText = screen.getByText(/Pico/);
        const gitHubText = screen.getByText(/Github Repo/);
        const profile = screen.getByText(/My Profile/);
        
        // pass
        expect(picoText).toBeInTheDocument();
        expect(gitHubText).toBeInTheDocument();
        expect(profile).toBeInTheDocument();
    });
    
});
