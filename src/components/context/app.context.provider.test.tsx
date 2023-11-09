import { AppContextProvider } from './app.context.provider';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Given AppContexProvider component', () => {
  describe('When is instantiate ', () => {
    const MockChild: React.FC = () => <div> Mock Child </div>;

    test('Its in the document ', () => {
      render(
        <AppContextProvider>
          <MockChild></MockChild>
        </AppContextProvider>
      );

      const theContextProvider = screen.getByText('Mock Child');
      expect(theContextProvider).toBeInTheDocument();
    });
  });
});
