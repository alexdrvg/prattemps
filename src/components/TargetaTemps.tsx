import type { ReactNode } from 'react';
import type { Ciutat } from '../dades/ciutats';
import type { Temps } from '../tipus';
import { CLAU_OWM } from '../config/claus';
import { useApi } from '../hooks/useApi';
import { urlTemps } from '../utils/urlTemps';
import Carregant from './Carregant';
import CaixaError from './CaixaError';
import DetallTemps from './DetallTemps';
import estils from './TargetaTemps.module.css';

type Props = {
  ciutat: Ciutat;
};

// Targeta blanca: demana el temps i decideix què mostrar
// (avís sense clau, error, dades o carregant).
export default function TargetaTemps({ ciutat }: Props) {
  const url = CLAU_OWM ? urlTemps(ciutat, CLAU_OWM) : null;
  const { dades, error } = useApi<Temps>(url);

  let contingut: ReactNode;

  if (!CLAU_OWM) {
    contingut = <CaixaError missatge="Falta la clau d'OpenWeather" />;
  } else if (error) {
    contingut = <CaixaError missatge={error} />;
  } else if (dades) {
    contingut = <DetallTemps ciutat={ciutat} temps={dades} />;
  } else {
    contingut = <Carregant ciutat={ciutat.nom} />;
  }

  return <section className={estils.targeta}>{contingut}</section>;
}