import { useEffect, useState } from 'react';

type Resultat<T> = {
  url: string;
  dades: T | null;
  status: number | null; // codi HTTP d'error (0 = error de xarxa)
};

type EstatApi<T> = {
  dades: T | null;
  status: number | null;
  carregant: boolean;
};

// Hook genèric: fa un GET a la URL i tipa la resposta amb T (sense any).
// Si la URL canvia mentre hi ha una petició en curs, es cancel·la amb
// AbortController i la resposta antiga s'ignora.
export function useApi<T>(url: string | null): EstatApi<T> {
  const [resultat, setResultat] = useState<Resultat<T> | null>(null);

  useEffect(() => {
    if (url === null) return;

    const controlador = new AbortController();

    async function carrega(adreca: string) {
      try {
        const resposta = await fetch(adreca, { signal: controlador.signal });
        if (!resposta.ok) {
          setResultat({ url: adreca, dades: null, status: resposta.status });
          return;
        }
        const dades = (await resposta.json()) as T;
        setResultat({ url: adreca, dades, status: null });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return; // resposta antiga: s'ignora
        }
        setResultat({ url: adreca, dades: null, status: 0 });
      }
    }

    void carrega(url);

    return () => controlador.abort();
  }, [url]);

  // Només comptem el resultat si és de la URL actual
  const actual = resultat !== null && resultat.url === url ? resultat : null;

  return {
    dades: actual?.dades ?? null,
    status: actual?.status ?? null,
    carregant: url !== null && actual === null,
  };
}
