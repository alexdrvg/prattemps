// Clau d'OpenWeather: ve del fitxer .env (variable VITE_OWM_KEY).
// Si no hi ha clau, queda com a cadena buida i la web mostra un avís.
export const CLAU_OWM: string = (import.meta.env.VITE_OWM_KEY ?? '').trim();
