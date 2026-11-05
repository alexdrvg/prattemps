import type { Ciutat } from '../dades/ciutats';
import estils from './LlistaCiutats.module.css';

type Props = {
  ciutats: Ciutat[];
  triadaId: string;
  alTriar: (id: string) => void;
};

export default function LlistaCiutats({ ciutats, triadaId, alTriar }: Props) {
  return (
    <nav className={estils.caixa} aria-labelledby="titol-ciutats">
      <h2 id="titol-ciutats" className={estils.etiqueta}>
        Ciutats
      </h2>
      <ul className={estils.llista}>
        {ciutats.map((ciutat) => (
          <li key={ciutat.id} className={estils.element}>
            <button
              type="button"
              className={estils.boto}
              aria-pressed={ciutat.id === triadaId}
              onClick={() => alTriar(ciutat.id)}
            >
              {ciutat.nom}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
