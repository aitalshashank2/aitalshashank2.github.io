import { render } from '@testing-library/react';
import App from './App';

test('Should display the default landing page', () => {
    render(<App />);
});
