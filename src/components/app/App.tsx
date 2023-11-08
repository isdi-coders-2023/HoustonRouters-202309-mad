import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { List } from '../list/list';
import { AppRoutes } from '../router/app.routes';

export function App() {
  return (
    <>
      <Header></Header>
      <List></List>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
