import Choise from './components/choices.jsx';
import { ClientImage } from './components/client.jsx';
import { Header } from './components/header.jsx';

export function ScreenMaker({ submit, onChange }) {
  const changeBorda = (value) => {
    onChange((atual) => ({ ...atual, borda: value }));
  };

  const changeMolho = (value) => {
    onChange((atual) => ({ ...atual, molho: value }));
  };

  const changeTipo = (value) => {
    onChange((atual) => ({ ...atual, tipo: value }));
  };

  return (
    <div id="screenMaker">
      <Header />
      <div className="row">
        <section>
          <Choise type="massa" onMassa={changeBorda}/>
        </section>
        <section>
          <Choise type="molho" onMolho={changeMolho}/>
        </section>

      </div>
      <div className="row">
        <section>
          <Choise type="tipo" onTipo={changeTipo}/>
        </section>
        <section>
          <ClientImage />
        </section>
      </div>
      <footer>
        <button onClick={submit} id="buttonCart"> ➡️ </button>
      </footer>
    </div>
  );
}
