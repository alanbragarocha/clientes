import React, { useState, useEffect, useCallback } from 'react';
import './EscalaIframe.css';

const EscalaIframe = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // URL da escala
  const escalaUrl = 'https://sipresb.com.br/quartaipb/eventos/escala.php';

  // Manipulador para quando o iframe carregar
  const handleIframeLoad = () => {
    setLoading(false);
    console.log('✅ Escala carregada com sucesso');
  };

  // Manipulador para quando o iframe falhar
  const handleIframeError = () => {
    setLoading(false);
    setError(true);
    console.error('❌ Erro ao carregar o iframe da escala');
  };

  // Função para tentar carregar novamente
  const handleRetry = useCallback(() => {
    setLoading(true);
    setError(false);
    setRetryCount(prev => prev + 1);
    console.log('🔄 Tentando carregar a escala novamente...');
  }, []);

  // Verificar se a URL está disponível ao montar o componente
  useEffect(() => {
    const checkUrlAvailability = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        await fetch(escalaUrl, {
          method: 'HEAD',
          mode: 'no-cors',
          signal: controller.signal
        });

        clearTimeout(timeoutId);
        // No CORS mode, não podemos verificar o status, mas se não deu erro
        // provavelmente está ok
        console.log('✅ URL da escala parece estar disponível');
      } catch (error) {
        console.error('❌ Erro ao verificar disponibilidade da URL:', error);
        setError(true);
      }
    };

    checkUrlAvailability();
  }, [retryCount, escalaUrl]); // Re-executar quando retryCount mudar

  return (
    <div className="escala-iframe-container">
      {loading && (
        <div className="iframe-loading">
          <p>Carregando escala...</p>
          <div className="loading-spinner"></div>
        </div>
      )}
      {error && (
        <div className="iframe-error">
          <p>Não foi possível carregar a escala no momento.</p>
          <p>Por favor, tente novamente mais tarde ou entre em contato com a secretaria.</p>
          <div className="iframe-actions">
            <button onClick={handleRetry} className="btn">
              <i className="fas fa-sync-alt"></i> Tentar novamente
            </button>
            <a href={escalaUrl} target="_blank" rel="noopener noreferrer" className="btn">
              <i className="fas fa-external-link-alt"></i> Abrir em nova janela
            </a>
          </div>
        </div>
      )}
      {!error && (
        <iframe
          src={`${escalaUrl}${retryCount ? '?retry=' + retryCount : ''}`}
          title="Escala de Serviços e Eventos"
          className={`escala-iframe ${loading ? 'loading' : ''}`}
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      )}
    </div>
  );
};

export default EscalaIframe;
