import {render} from '../common/helpers/TestUtil';
import RouterApp from './RouterApp';


describe("<RouterApp/>", () => {
    it('renders RouterApp component with Redux & ReactRouter Provider', () => {
        render(
            <RouterApp/>
        );
        expect(<RouterApp/>).toBeTruthy(); // If your app consists of multiple components use this
        // const text = screen.getByText(/Chakra, Redux, React Testing Library/);
        // expect(text).toBeInTheDocument();
    });
});