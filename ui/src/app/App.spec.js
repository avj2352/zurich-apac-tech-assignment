import {render} from '../common/helpers/Test.util';
import App from './App';

describe("<App/>", () => {
    it('renders App component with Redux & ReactRouter Provider', () => {        
        const app = render(<App/>);
        expect(app).toBeTruthy(); // If your app consists of multiple components use this
        // const text = screen.getByText(/Chakra, Redux, React Testing Library/);
        // expect(text).toBeInTheDocument();
    });

    it('consists of a title - Zurich Technical Assignment', () => {        
        const screen = render(<App/>);        
        const text = screen.getByText(/Zurich/);
        expect(text).toBeInTheDocument();
    });
    
});