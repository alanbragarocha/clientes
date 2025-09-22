import { useState, useEffect } from 'react';

const useEscalasOnline = () => {
  const [escalasOnline, setEscalasOnline] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEscalas = async () => {
      try {
        setLoading(true);

        // Por enquanto, vamos simular dados baseados na estrutura do site
        // Em produção, você precisaria de um proxy/API para contornar CORS
        const mockData = [
          {
            id: 1,
            data: "15/09/2025",
            tipo: "Culto Dominical Manhã",
            ministerio: "Louvor",
            responsaveis: "Marcos (Líder), João, Ana, Pedro",
            observacoes: "Ensaio sexta às 19h"
          },
          {
            id: 2,
            data: "15/09/2025",
            tipo: "Culto Dominical Noite",
            ministerio: "Louvor",
            responsaveis: "Rebeca (Líder), Lucas, Mateus, Raquel",
            observacoes: "Música especial: Hino 234"
          },
          {
            id: 3,
            data: "15/09/2025",
            tipo: "Culto Dominical",
            ministerio: "Recepção",
            responsaveis: "José e Maria",
            observacoes: "Chegar 30min antes"
          },
          {
            id: 4,
            data: "15/09/2025",
            tipo: "Escola Dominical",
            ministerio: "Ensino",
            responsaveis: "Patrícia (Infantil), Fernando (Adolescentes)",
            observacoes: "Material disponível na secretaria"
          },
          {
            id: 5,
            data: "22/09/2025",
            tipo: "Culto Dominical Manhã",
            ministerio: "Louvor",
            responsaveis: "Daniel (Líder), Paulo, Marta, Ester",
            observacoes: "Ensaio sexta às 19h"
          },
          {
            id: 6,
            data: "22/09/2025",
            tipo: "Culto Dominical",
            ministerio: "Sonoplastia",
            responsaveis: "Rodrigo",
            observacoes: "Testar equipamentos 1h antes"
          }
        ];

        // Simular delay de network
        await new Promise(resolve => setTimeout(resolve, 1000));

        setEscalasOnline(mockData);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar escalas:', err);
        setError('Erro ao carregar escalas. Usando dados locais.');
        setEscalasOnline([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEscalas();
  }, []);

  const agruparPorMinisterio = (escalas) => {
    return escalas.reduce((grupos, escala) => {
      const ministerio = escala.ministerio;
      if (!grupos[ministerio]) {
        grupos[ministerio] = [];
      }
      grupos[ministerio].push(escala);
      return grupos;
    }, {});
  };

  const agruparPorData = (escalas) => {
    return escalas.reduce((grupos, escala) => {
      const data = escala.data;
      if (!grupos[data]) {
        grupos[data] = [];
      }
      grupos[data].push(escala);
      return grupos;
    }, {});
  };

  return {
    escalasOnline,
    loading,
    error,
    agruparPorMinisterio,
    agruparPorData
  };
};

export default useEscalasOnline;
