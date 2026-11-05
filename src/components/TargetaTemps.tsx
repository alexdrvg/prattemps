import type { ReactNode } from 'react';
import type { Ciutat } from '../dades/ciutats';
import type { Temps } from '../tipus';
import { CLAU_OWM } from '../config/claus';
import { useApi } from '../hooks/useApi';
import { missatgeError } from '../utils/missatgeError';
import { urlTemps } from '../utils/urlTemps';
import Carregant from './Carregant';
import CaixaError from './CaixaError';
import DetallTemps from './DetallTemps';
import estils from './TargetaTemps.module.css';

type Props = {
  ciutat: Ciutat;
};

// Targeta blanca: demana el temps i decideix què mostrar
// (avís sense clau, carregant, error o dades).
export default function TargetaTemps({ ciutat }: Props) {
  const url = CLAU_OWM ? urlTemps(ciutat, CLAU_OWM) : null;
  const { dades, status, carregant } = useApi<Temps>(url);

  let contingut: ReactNode = null;

  if (!CLAU_OWM) {
    contingut = <CaixaError missatge="Falta la clau d'OpenWeather" />;
  } else if (carregant) {
    contingut = <Carregant ciutat={ciutat.nom} />;
  } else if (status !== null) {
    contingut = <CaixaError missatge={missatgeError(status)} />;
  } else if (dades) {
    contingut = <DetallTemps ciutat={ciutat} temps={dades} />;
  }

  return <section className={estils.targeta}>{contingut}</section>;
}
