import estils from './CaixaError.module.css';

type Props = {
  missatge: string;
};

export default function CaixaError({ missatge }: Props) {
  return (
    <p className={estils.error} role="alert">
      {missatge}
    </p>
  );
}
