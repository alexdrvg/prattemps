import { useState } from 'react';
import { CIUTATS } from './dades/ciutats';
import Capcalera from './components/Capcalera';
import LlistaCiutats from './components/LlistaCiutats';
import TargetaTemps from './components/TargetaTemps';
import estils from './App.module.css';

const CIUTAT_INICIAL = 'prat';

export default function App() {
  const [ciutatId, setCiutatId] = useState(CIUTAT_INICIAL);
  const ciutat = CIUTATS.find((c) => c.id === ciutatId) ?? CIUTATS[0];

  return (
    <div className={estils.pagina}>
      <Capcalera />
      <main className={estils.contingut}>
        <LlistaCiutats
          ciutats={CIUTATS}
          triadaId={ciutat.id}
          alTriar={setCiutatId}
        />
        <TargetaTemps key={ciutat.id} ciutat={ciutat} />
      </main>
      <footer className={estils.peu}>
        Dades: OpenWeather · Prat FP · 0488 Desenvolupament d'interfícies
      </footer>
    </div>
  );
}
