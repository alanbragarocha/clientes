import { useState, useEffect } from 'react';
import igrejaApiService from '../services/igrejaApi';

// Hook personalizado para buscar eventos da agenda online
export const useEventosOnline = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState(null);

  const fetchEventos = async (forcarAtualizacao = false) => {
    try {
      setLoading(true);
      setError(null);

      let eventosOnline;

      if (forcarAtualizacao) {
        console.log('🔄 Forçando atualização dos eventos...');
        eventosOnline = await igrejaApiService.forcarAtualizacao();
      } else {
        eventosOnline = await igrejaApiService.fetchEventosOnline();
      }

      if (eventosOnline && eventosOnline.length > 0) {
        setEventos(eventosOnline);
        setUltimaAtualizacao(new Date());

        // Log para debug
        const status = igrejaApiService.getStatusAtualizacao();
        console.log('📊 Status da atualização:', status);

      } else {
        setError('Nenhum evento encontrado');
        setEventos([]);
      }

    } catch (err) {
      setError('Erro ao carregar eventos online');
      console.error('Erro ao buscar eventos:', err);
      setEventos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventos();
  }, []);

  return {
    eventos,
    loading,
    error,
    ultimaAtualizacao,
    refetch: fetchEventos,
    forcarAtualizacao: () => fetchEventos(true)
  };
};

// Função para formatar data brasileira
export const formatarDataBrasileira = (data) => {
  // Verificar se a data é uma string válida
  if (!data || typeof data !== 'string' || !data.includes('/')) {
    return 'Data não informada';
  }

  try {
    const [dia, mes, ano] = data.split('/');
    if (!dia || !mes || !ano) {
      return 'Data inválida';
    }

    const date = new Date(ano, mes - 1, dia);

    // Verificar se a data é válida
    if (isNaN(date.getTime())) {
      return 'Data inválida';
    }

    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  } catch (error) {
    console.error('Erro ao formatar data:', error);
    return 'Data inválida';
  }
};

// Função para verificar se o evento é hoje ou próximo
export const isEventoProximo = (data) => {
  // Verificar se a data é uma string válida
  if (!data || typeof data !== 'string' || !data.includes('/')) {
    return false;
  }

  try {
    const [dia, mes, ano] = data.split('/');
    if (!dia || !mes || !ano) {
      return false;
    }

    const eventoDate = new Date(ano, mes - 1, dia);

    // Verificar se a data é válida
    if (isNaN(eventoDate.getTime())) {
      return false;
    }

    const hoje = new Date();
    const diffTime = eventoDate.getTime() - hoje.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays >= 0 && diffDays <= 7; // Próximos 7 dias
  } catch (error) {
    console.error('Erro ao verificar se evento é próximo:', error);
    return false;
  }
};
