import type { Ciutat } from '../dades/ciutats';
import type { Temps } from '../tipus';
import {
  arrodonit,
  horaLocal,
  majuscula,
  ventKmh,
} from '../utils/format';
import DadaTemps from './DadaTemps';
import estils from './DetallTemps.module.css';

type Props = {
  ciutat: Ciutat;
  temps: Temps;
};

// Mostra les 12 dades de la figura 1 (1-6 aquí, 7-12 amb DadaTemps)
export default function DetallTemps({ ciutat, temps }: Props) {
  const condicio = temps.weather[0];
  const descripcio = majuscula(condicio?.description ?? '');
  const { main, wind, sys } = temps;

  return (
    <article>
      {/* 1. Ciutat i país */}
      <h2 className={estils.ciutat}>
        {ciutat.nom}
        <span className={estils.pais}>, {sys.country}</span>
      </h2>

      {/* 2. Hora de la mesura (hora local de la ciutat) */}
      <p className={estils.hora}>
        Actualitzat a les {horaLocal(temps.dt, temps.timezone)}
      </p>

      <div className={estils.principal}>
        {/* 3. Icona */}
        <div className={estils.icona}>
          {condicio && (
            <img
              src={`https://openweathermap.org/img/wn/${condicio.icon}@2x.png`}
              alt={descripcio}
              width={100}
              height={100}
            />
          )}
        </div>

        <div className={estils.resum}>
          {/* 4. Temperatura */}
          <p className={estils.temperatura}>{arrodonit(main.temp)} °C</p>
          {/* 5. Descripció */}
          <p className={estils.descripcio}>{descripcio}</p>
          {/* 6. Màxima i mínima */}
          <p className={estils.minmax}>
            Màx. {arrodonit(main.temp_max)}° · Mín. {arrodonit(main.temp_min)}°
          </p>
        </div>
      </div>

      <dl className={estils.dades}>
        {/* 7 */}
        <DadaTemps
          icona="🌡️"
          etiqueta="Sensació"
          valor={`${arrodonit(main.feels_like)} °C`}
        />
        {/* 8 */}
        <DadaTemps icona="💧" etiqueta="Humitat" valor={`${main.humidity} %`} />
        {/* 9 */}
        <DadaTemps
          icona="💨"
          etiqueta="Vent"
          valor={`${ventKmh(wind.speed)} km/h`}
        />
        {/* 10 */}
        <DadaTemps
          icona="⏱️"
          etiqueta="Pressió"
          valor={`${main.pressure} hPa`}
        />
        {/* 11 */}
        <DadaTemps
          icona="🌅"
          etiqueta="Sortida del sol"
          valor={horaLocal(sys.sunrise, temps.timezone)}
        />
        {/* 12 */}
        <DadaTemps
          icona="🌇"
          etiqueta="Posta del sol"
          valor={horaLocal(sys.sunset, temps.timezone)}
        />
      </dl>
    </article>
  );
}
