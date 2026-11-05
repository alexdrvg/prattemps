import type { Ciutat } from '../dades/ciutats';

const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather';

// Munta la URL de l'API amb URLSearchParams (lat, lon, appid, units i lang)
export function urlTemps(ciutat: Ciutat, clau: string): string {
  const parametres = new URLSearchParams({
    lat: String(ciutat.lat),
    lon: String(ciutat.lon),
    appid: clau,
    units: 'metric',
    lang: 'ca',
  });
  return `${URL_BASE}?${parametres.toString()}`;
}
