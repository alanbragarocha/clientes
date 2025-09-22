# 💄 Salão de Beleza Suellen Marcelino

Um site moderno e responsivo para o Salão de Beleza Suellen Marcelino, localizado em Campos dos Goytacazes/RJ. O projeto foi desenvolvido com foco na experiência do usuário, acessibilidade e SEO.

![Versão](https://img.shields.io/badge/versão-1.0.0-blue.svg)
![Licença](https://img.shields.io/badge/licença-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Características Principais

- ✨ **Design Moderno**: Interface elegante com tema dourado sofisticado
- 📱 **Totalmente Responsivo**: Adaptável para todos os dispositivos
- 🚀 **Otimizado para SEO**: Meta tags, Schema.org e sitemap
- ⚡ **Performance**: Carregamento rápido com imagens otimizadas
- 🎨 **Experiência do Usuário**: Navegação intuitiva e animações suaves
- 📞 **Integração WhatsApp**: Botão flutuante e links diretos
- ♿ **Acessibilidade**: Seguindo padrões WCAG

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica moderna
- **CSS3**: Estilização avançada com Grid e Flexbox
- **JavaScript ES6+**: Funcionalidades interativas
- **CSS Variables**: Sistema de design consistente
- **REM Units**: Responsividade e acessibilidade aprimoradas

### SEO e Performance
- **Meta Tags**: Open Graph, Twitter Cards
- **Schema.org**: Dados estruturados para negócios locais
- **Sitemap.xml**: Indexação otimizada
- **Robots.txt**: Controle de rastreamento
- **.htaccess**: Otimizações do servidor Apache

## 📁 Estrutura do Projeto

```
salao/
├── index.html                 # Página principal
├── styles.css                # Estilos principais
├── README.md                 # Documentação
├── robots.txt                # Controle de bots
├── sitemap.xml              # Mapa do site
├── .htaccess                # Configurações Apache
├── update-dates.sh          # Script de atualização de datas
├── js/                      # Scripts JavaScript
│   ├── config.js           # Configurações centralizadas
│   ├── schema.js           # Schema.org JSON-LD
│   ├── script.js           # Funcionalidades principais
│   └── README.md           # Documentação dos scripts
└── assets/                  # Recursos estáticos
    └── images/
        ├── hero-bg.jpg     # Imagem principal
        ├── logo.png        # Logotipo
        ├── instagram.png   # Ícone Instagram
        ├── whatsapp.png    # Ícone WhatsApp
        ├── gallery/        # Galeria de trabalhos
        └── icons/          # Ícones SVG
```

## 🎨 Seções do Site

### 🏠 **Hero Section**
- Banner principal com call-to-action
- Botão direto para WhatsApp
- Imagem de fundo otimizada

### 💅 **Serviços**
1. **Corte & Escova** - Cortes modernos e escovas profissionais
2. **Coloração** - Técnicas avançadas de coloração, luzes e mechas
3. **Manicure & Pedicure** - Cuidados completos para unhas
4. **Tratamentos** - Hidratação e reconstrução capilar
5. **Micropigmentação** - Sobrancelhas, lábios e olhos naturais

### 🖼️ **Galeria**
- Showcase dos trabalhos realizados
- Imagens otimizadas para web
- Layout responsivo em grid

### 💬 **Depoimentos**
- 9 depoimentos de clientes reais
- Sistema de avaliação com estrelas
- Experiências diversificadas

### 📍 **Contato**
- Informações de localização
- Horários de funcionamento
- Mapa interativo do Google Maps
- WhatsApp para agendamento

## 🚀 Funcionalidades JavaScript

### 📱 Menu Responsivo
```javascript
// Menu mobile com animações suaves
function initMobileMenu() {
    // Controle de abertura/fechamento
    // Animações do ícone hambúrguer
    // Navegação por âncoras
}
```

### 📅 Datas Automáticas
```javascript
// Atualização automática de anos e datas
function initAutomaticDates() {
    // Copyright dinâmico
    // Datas de conteúdo
}
```

### 🔍 Schema.org SEO
```javascript
// Dados estruturados para negócios locais
const businessSchema = {
    "@type": "BeautySalon",
    "name": "Salão de Beleza Suellen Marcelino",
    // ... dados completos do negócio
}
```

## 📞 Integração WhatsApp

O site possui integração completa com WhatsApp para facilitar o agendamento:

- **Botão Flutuante**: Sempre visível no canto inferior direito
- **Links por Serviço**: Mensagem pré-formatada para cada serviço
- **Call-to-Actions**: Múltiplos pontos de contato

### Mensagens Personalizadas
- Corte & Escova: `"Olá! Gostaria de agendar um Corte & Escova"`
- Coloração: `"Olá! Gostaria de agendar uma Coloração"`
- Manicure: `"Olá! Gostaria de agendar Manicure & Pedicure"`
- Tratamentos: `"Olá! Gostaria de agendar um Tratamento Capilar"`
- Micropigmentação: `"Olá! Gostaria de agendar uma Micropigmentação"`

## 🎨 Sistema de Design

### 🎨 Paleta de Cores
```css
:root {
    --primary-color: #d4af37;      /* Dourado principal */
    --primary-dark: #b8941f;       /* Dourado escuro */
    --primary-light: #e8c970;      /* Dourado claro */
    --secondary-color: #2c3e50;    /* Azul escuro */
    --accent-color: #e74c3c;       /* Vermelho destaque */
    --text-dark: #2c3e50;          /* Texto escuro */
    --text-light: #7f8c8d;         /* Texto claro */
    --white: #ffffff;              /* Branco */
    --light-bg: #f8f9fa;          /* Fundo claro */
}
```

### 📐 Sistema de Espaçamentos
```css
:root {
    --spacing-xs: 0.25rem;    /* 4px */
    --spacing-sm: 0.5rem;     /* 8px */
    --spacing-md: 1rem;       /* 16px */
    --spacing-lg: 1.5rem;     /* 24px */
    --spacing-xl: 2rem;       /* 32px */
    --spacing-2xl: 3rem;      /* 48px */
}
```

### 🔤 Tipografia
```css
:root {
    --font-xs: 0.75rem;       /* 12px */
    --font-sm: 0.875rem;      /* 14px */
    --font-base: 1rem;        /* 16px */
    --font-lg: 1.125rem;      /* 18px */
    --font-xl: 1.25rem;       /* 20px */
    --font-2xl: 1.5rem;       /* 24px */
    --font-3xl: 1.875rem;     /* 30px */
    --font-4xl: 2.25rem;      /* 36px */
    --font-5xl: 3rem;         /* 48px */
}
```

## 📊 SEO e Analytics

### Meta Tags Implementadas
- **Title**: Otimizado com palavras-chave locais
- **Description**: Descrição atrativa com call-to-action
- **Keywords**: Termos relevantes para beleza e localização
- **Open Graph**: Compartilhamento otimizado em redes sociais
- **Twitter Cards**: Visualização aprimorada no Twitter

### Schema.org
```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Salão de Beleza Suellen Marcelino",
  "description": "Salão de beleza especializado em cortes, coloração, micropigmentação e tratamentos capilares",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Manoel Gomes Pinto, 236",
    "addressLocality": "Campos dos Goytacazes",
    "addressRegion": "RJ",
    "postalCode": "28013-650",
    "addressCountry": "BR"
  },
  "telephone": "+5522996069670",
  "url": "https://salaosuellenmarcelino.com.br",
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-16:00"
  ]
}
```

## 🚀 Instalação e Uso

### Pré-requisitos
- Servidor web (Apache, Nginx, ou similar)
- Suporte a HTML5, CSS3 e JavaScript ES6+

### Instalação Local
```bash
# Clone o repositório
git clone https://github.com/alanbragarocha/em-desenvolvimento.git

# Navegue para a pasta do projeto
cd em-desenvolvimento/salao

# Abra o index.html em um servidor local
# Ou use Python para servidor local:
python3 -m http.server 8000

# Acesse: http://localhost:8000
```

### Deploy para Produção
1. Faça upload dos arquivos para seu servidor web
2. Configure o domínio personalizado
3. Atualize as URLs no `sitemap.xml` e `schema.js`
4. Teste todas as funcionalidades
5. Configure SSL/HTTPS

## 🔧 Configuração

### Personalização
1. **Dados do Negócio**: Edite `js/config.js`
2. **Cores**: Modifique as variáveis CSS em `:root`
3. **Conteúdo**: Altere textos diretamente no `index.html`
4. **Imagens**: Substitua arquivos na pasta `assets/images/`

### WhatsApp
```javascript
// Em js/config.js
const SiteConfig = {
    whatsapp: {
        number: '5522996069670',
        messages: {
            default: 'Olá! Gostaria de agendar um horário...'
        }
    }
};
```

## 📱 Responsividade

### Breakpoints
- **Mobile**: até 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Funcionalidades Mobile
- Menu hambúrguer animado
- Botão WhatsApp flutuante
- Imagens otimizadas
- Touch-friendly buttons
- Navegação por swipe (galeria)

## ♿ Acessibilidade

### Recursos Implementados
- **Semantic HTML**: Estrutura clara para leitores de tela
- **Alt Text**: Todas as imagens possuem texto alternativo
- **ARIA Labels**: Labels descritivos para elementos interativos
- **Contrast Ratio**: Cores com contraste adequado
- **Keyboard Navigation**: Navegação por teclado funcional
- **REM Units**: Respeita configurações de zoom do usuário

## 🧪 Testes

### Checklist de Teste
- [ ] **Responsividade**: Teste em diferentes dispositivos
- [ ] **Performance**: PageSpeed Insights > 90
- [ ] **SEO**: Search Console sem erros
- [ ] **WhatsApp**: Links funcionando corretamente
- [ ] **Formulários**: Validação e envio
- [ ] **Imagens**: Carregamento e otimização
- [ ] **Menu Mobile**: Animações suaves
- [ ] **Cross-browser**: Chrome, Firefox, Safari, Edge

### Ferramentas Recomendadas
- **Lighthouse**: Auditoria de performance e SEO
- **Wave**: Teste de acessibilidade
- **GTMetrix**: Análise de velocidade
- **Mobile-Friendly Test**: Google
- **Rich Results Test**: Dados estruturados

## 📈 Performance

### Otimizações Implementadas
- **Imagens Comprimidas**: Redução de até 70% no tamanho
- **CSS Minificado**: Remoção de espaços desnecessários
- **Lazy Loading**: Carregamento sob demanda
- **CDN Ready**: Preparado para Content Delivery Network
- **Caching**: Headers de cache otimizados

### Métricas Esperadas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🔒 Segurança

### Medidas Implementadas
- **HTTPS**: Certificado SSL obrigatório
- **Content Security Policy**: Headers de segurança
- **XSS Protection**: Sanitização de inputs
- **Robots.txt**: Controle de acesso de bots
- **No Sensitive Data**: Nenhum dado sensível exposto

## 🤝 Contribuição

### Como Contribuir
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Guidelines
- Siga os padrões de código existentes
- Documente suas mudanças
- Teste em diferentes dispositivos
- Mantenha a acessibilidade

## 📞 Suporte

### Informações de Contato
- **Cliente**: Suellen Marcelino
- **WhatsApp**: (22) 99606-9670
- **Endereço**: R. Manoel Gomes Pinto, 236 - Parque Oliveira Botelho, Campos dos Goytacazes - RJ
- **CEP**: 28013-650

### Horários de Funcionamento
- **Segunda a Sexta**: 8h às 18h
- **Sábado**: 8h às 16h
- **Domingo**: Fechado

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎉 Agradecimentos

- **Suellen Marcelino**: Cliente e proprietária do salão
- **Comunidade Open Source**: Ferramentas e inspirações
- **Google Fonts**: Tipografias utilizadas
- **Font Awesome**: Ícones e elementos visuais

---
