import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

jest.mock('../pages/home/home', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="mocked-home">Mocked Home Component</div>;
    },
  };
});

jest.mock('../pages/error-page/error.page', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="mocked-error">Mocked Error Component</div>;
    },
  };
});

jest.mock('../pages/my-universe/my.universe', () => {
  return {
    __esModule: true,
    default: () => {
      return (
        <div data-testid="mocked-my.universe">Mocked My Universe Component</div>
      );
    },
  };
});

jest.mock('../pages/add-form-page/add.form.page', () => {
  return {
    __esModule: true,
    default: () => {
      return (
        <div data-testid="mocked add.form.page">
          Mocked Add.Form.Page Component
        </div>
      );
    },
  };
});

jest.mock('../pages/details-page/detail.page', () => {
  return {
    __esModule: true,

    default: () => {
      return <div data-testid="mocked detail.page">Mocked Details Page </div>;
    },
  };
});

describe('When we render', () => {
  test('the component should render Home', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/home']}>
          <AppRoutes></AppRoutes>
        </Router>
      );
    });
    const element = screen.getByTestId('mocked-home');
    expect(element).toBeInTheDocument();
  });
  test('the component should render Error', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/*']}>
          <AppRoutes></AppRoutes>
        </Router>
      );
    });
    const element = screen.getByTestId('mocked-error');
    expect(element).toBeInTheDocument();
  });
  test('the component should render My universe', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/my-universe']}>
          <AppRoutes></AppRoutes>
        </Router>
      );
    });
    const element = screen.getByTestId('mocked-my.universe');
    expect(element).toBeInTheDocument();
  });
  test('he component should render Add Form Page', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/add']}>
          <AppRoutes></AppRoutes>
        </Router>
      );
    });
    const element = screen.getByTestId('mocked add.form.page');
    expect(element).toBeInTheDocument();
  });
  test('he component should render Detail Page', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/details/:id']}>
          <AppRoutes></AppRoutes>
        </Router>
      );
    });
    const element = screen.getByTestId('mocked detail.page');
    expect(element).toBeInTheDocument();
  });
});
