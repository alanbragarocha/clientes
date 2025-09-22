/**
 * Admin Storage - Gerencia o armazenamento de dados do painel administrativo
 * Este módulo fornece funções para salvar e recuperar dados do servidor e localStorage
 */

const AdminStorage = {
  /**
   * Salvar dados no servidor e no armazenamento local
   * @param {string} key - Chave para armazenar os dados
   * @param {Object} data - Dados a serem armazenados
   * @returns {Promise} - Promessa que resolve quando os dados são salvos
   */
  save: function (key, data) {
    return new Promise((resolve, reject) => {
      try {
        // Primeiro, tentar salvar no localStorage como fallback
        if (window.localStorage) {
          window.localStorage.setItem(key, JSON.stringify(data));
        }

        // Tentar salvar no servidor
        fetch("../admin/api/data.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "same-origin",
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.success) {
              console.log("Dados salvos com sucesso no servidor");
              resolve(true);
            } else {
              console.warn(
                "Erro ao salvar no servidor, usando localStorage apenas:",
                result.message
              );
              resolve(true); // Ainda resolvemos como true porque salvamos no localStorage
            }
          })
          .catch((error) => {
            console.warn(
              "Erro ao salvar no servidor, usando localStorage apenas:",
              error
            );
            resolve(true); // Ainda resolvemos como true porque salvamos no localStorage
          });
      } catch (error) {
        console.error("Erro ao salvar dados:", error);
        reject(error);
      }
    });
  },

  /**
   * Recuperar dados do servidor ou armazenamento local
   * @param {string} key - Chave para recuperar os dados
   * @returns {Promise} - Promessa que resolve com os dados recuperados
   */
  get: function (key) {
    return new Promise((resolve, reject) => {
      // Tentar buscar do servidor primeiro
      fetch("../admin/api/data.php", {
        method: "GET",
        credentials: "same-origin",
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.success && result.data) {
            console.log("Dados recuperados do servidor");
            resolve(result.data);
          } else {
            // Se não conseguir do servidor, tentar do localStorage
            this.getFromLocalStorage(key)
              .then((localData) => {
                if (localData) {
                  console.log("Dados recuperados do localStorage");
                  resolve(localData);
                } else {
                  console.log("Nenhum dado encontrado");
                  resolve(null);
                }
              })
              .catch(reject);
          }
        })
        .catch((error) => {
          console.warn(
            "Erro ao recuperar dados do servidor, tentando localStorage:",
            error
          );

          // Tentar do localStorage
          this.getFromLocalStorage(key)
            .then((localData) => {
              if (localData) {
                console.log("Dados recuperados do localStorage");
                resolve(localData);
              } else {
                console.log("Nenhum dado encontrado");
                resolve(null);
              }
            })
            .catch(reject);
        });
    });
  },

  /**
   * Recuperar dados do armazenamento local
   * @param {string} key - Chave para recuperar os dados
   * @returns {Promise} - Promessa que resolve com os dados recuperados
   */
  getFromLocalStorage: function (key) {
    return new Promise((resolve, reject) => {
      try {
        if (window.localStorage) {
          const data = window.localStorage.getItem(key);
          if (data) {
            resolve(JSON.parse(data));
          } else {
            resolve(null);
          }
        } else {
          resolve(null);
        }
      } catch (error) {
        console.error("Erro ao recuperar dados do localStorage:", error);
        reject(error);
      }
    });
  },

  /**
   * Limpar dados do armazenamento local
   * @param {string} key - Chave para limpar os dados (opcional)
   * @returns {Promise} - Promessa que resolve quando os dados são limpos
   */
  clear: function (key) {
    return new Promise((resolve, reject) => {
      try {
        if (window.localStorage) {
          if (key) {
            window.localStorage.removeItem(key);
          } else {
            window.localStorage.clear();
          }
        }
        resolve(true);
      } catch (error) {
        console.error("Erro ao limpar dados:", error);
        reject(error);
      }
    });
  },
};
