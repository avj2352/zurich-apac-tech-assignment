import {render, screen} from "@testing-library/react";
import App from './App';

describe("<App/>", () => {
    it('renders App component with Redux & ReactRouter Provider', () => {        
        render(<App/>);
        expect(<App/>).toBeTruthy(); // If your app consists of multiple components use this
        // const text = screen.getByText(/Chakra, Redux, React Testing Library/);
        // expect(text).toBeInTheDocument();
    });

    it('consists of a title - Zurich Technical Assignment', () => {        
        render(<App/>);        
        const text = screen.getByText(/Zurich/);
        expect(text).toBeInTheDocument();
    });
    
});