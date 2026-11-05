import estils from './Capcalera.module.css';

export default function Capcalera() {
  return (
    <header className={estils.capcalera}>
      <div className={estils.logo} aria-hidden="true">
        <span className={estils.sol} />
      </div>
      <div>
        <h1 className={estils.titol}>PratTemps</h1>
        <p className={estils.subtitol}>
          El temps ara mateix a vuit ciutats de Catalunya
        </p>
      </div>
    </header>
  );
}
