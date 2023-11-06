import { Actions } from '../actions/actions';
import { Display } from '../display/display';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { List } from '../list/list';
import { AppRoutes } from '../router/app.routes';

export function App() {
  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}

export default App;
