// Funcions per donar format a les dades (annex 3)

export function arrodonit(valor: number): number {
  return Math.round(valor);
}

// «cel clar» -> «Cel clar»
export function majuscula(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// m/s -> km/h, arrodonit
export function ventKmh(metresPerSegon: number): number {
  return Math.round(metresPerSegon * 3.6);
}

// Hora local de la ciutat en format hh:mm.
// Marca de temps UTC (segons) + desfasament de la ciutat (segons).
export function horaLocal(segonsUtc: number, desfasament: number): string {
  const data = new Date((segonsUtc + desfasament) * 1000);
  const hh = String(data.getUTCHours()).padStart(2, '0');
  const mm = String(data.getUTCMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}
