# 📁 Pasta JavaScript - Salão de Beleza Suellen Marcelino

Esta pasta contém todos os arquivos JavaScript organizados do site.

## 📄 Arquivos

### `config.js`
**Configurações centralizadas do site**
- Informações do negócio (nome, telefone, redes sociais)
- Endereço completo com coordenadas GPS
- Horários de funcionamento
- Lista de serviços oferecidos
- Configurações de SEO
- Funções utilitárias (WhatsApp, horários, etc.)

### `schema.js`
**Schema.org JSON-LD para SEO**
- Dados estruturados para Google
- Schema BeautySalon otimizado
- Injeção dinâmica no HTML
- Atualização automática de datas
- Informações completas do negócio local

### `script.js`
**Funcionalidades principais do site**
- Menu mobile responsivo
- Sistema de datas automáticas
- Gerenciamento de eventos
- Integração com outros scripts

## 🚀 Como usar

### Ordem de carregamento no HTML:
1. `config.js` - Configurações básicas
2. `schema.js` - Dados estruturados
3. `script.js` - Funcionalidades principais

### Funções globais disponíveis:

#### SiteConfig
```javascript
// Informações do negócio
SiteConfig.business.name
SiteConfig.business.phone
SiteConfig.business.whatsapp

// Endereço
SiteConfig.address.street
SiteConfig.address.city

// Serviços
SiteConfig.services[0].name
```

#### SiteUtils
```javascript
// Gerar link do WhatsApp
SiteUtils.generateWhatsAppLink("Olá! Gostaria de agendar");

// Verificar se está aberto
SiteUtils.isOpenNow(); // true/false

// Horário formatado
SiteUtils.getFormattedSchedule();
```

#### Schema Functions
```javascript
// Atualizar schema com data atual
window.updateSchemaWithCurrentDate();

// Acessar dados do schema
window.businessSchema;

// Re-injetar schema
window.injectBusinessSchema();
```

## 🔧 Manutenção

### Para atualizar informações do negócio:
1. Edite `config.js`
2. As mudanças serão refletidas automaticamente

### Para adicionar novos serviços:
1. Adicione no array `SiteConfig.services` em `config.js`
2. Adicione também no `businessSchema` em `schema.js`

### Para modificar horários:
1. Edite `SiteConfig.schedule` em `config.js`
2. Atualize `openingHours` em `schema.js`

## 📊 Performance

- ✅ Arquivos organizados e modulares
- ✅ Carregamento otimizado
- ✅ Funções globais disponíveis
- ✅ Sistema de cache amigável
- ✅ SEO otimizado com Schema.org

## 🐛 Debug

Para verificar se os scripts carregaram corretamente:
```javascript
// No console do navegador:
console.log(window.SiteConfig);
console.log(window.SiteUtils);
console.log(window.businessSchema);
```
