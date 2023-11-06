import { Actions } from '../actions/actions';
import { Display } from '../display/display';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { List } from '../list/list';

export function App() {
  return (
    <>
      <Header></Header>
      <Display></Display>
      <Actions></Actions>
      <List></List>
      <Footer></Footer>
    </>
  );
}

export default App;
