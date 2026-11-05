import estils from './DadaTemps.module.css';

type Props = {
  icona: string;
  etiqueta: string;
  valor: string;
};

export default function DadaTemps({ icona, etiqueta, valor }: Props) {
  return (
    <div className={estils.dada}>
      <dt className={estils.etiqueta}>
        <span aria-hidden="true">{icona}</span> {etiqueta}
      </dt>
      <dd className={estils.valor}>{valor}</dd>
    </div>
  );
}
