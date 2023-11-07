import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';
import { Footer } from '../footer/footer';

jest.mock('../footer/footer');
describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<App></App>);
    });
    test('renders App with Footer', () => {
      expect(Footer).toHaveBeenCalled();
    });
  });
});
