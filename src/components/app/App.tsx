import { ButtonNewCharacter } from '../button-new-character/button.new.character';
import { Display } from '../display/display';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function App() {
  return (
    <>
      <Header></Header>
      <Display></Display>
      <Footer></Footer>
      <ButtonNewCharacter></ButtonNewCharacter>
    </>
  );
}

export default App;
