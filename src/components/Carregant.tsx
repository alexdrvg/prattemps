import estils from './Carregant.module.css';

type Props = {
  ciutat: string;
};

export default function Carregant({ ciutat }: Props) {
  return (
    <div className={estils.carregant} role="status">
      <span className={estils.spinner} aria-hidden="true" />
      <span>Carregant el temps: {ciutat}…</span>
    </div>
  );
}
