// Site Configuration
// Configurações centralizadas do site do Salão de Beleza Suellen Marcelino

const SiteConfig = {
    // Informações do negócio
    business: {
        name: "Salão de Beleza Suellen Marcelino",
        phone: "+5522996069670",
        phoneFormatted: "(22) 99606-9670",
        whatsapp: "https://wa.me/5522996069670",
        instagram: "https://www.instagram.com/suellenkauagabryellgmaio/",
        email: "", // Adicionar se necessário
        website: "https://salaosuellenmarcelino.com.br"
    },

    // Endereço
    address: {
        street: "R. Manoel Gomes Pinto, 236",
        neighborhood: "Parque Oliveira Botelho",
        city: "Campos dos Goytacazes",
        state: "RJ",
        zipCode: "28013-650",
        country: "Brasil",
        coordinates: {
            lat: -21.75,
            lng: -41.33333333333333
        }
    },

    // Horários de funcionamento
    schedule: {
        monday: { open: "08:00", close: "18:00", closed: false },
        tuesday: { open: "08:00", close: "18:00", closed: false },
        wednesday: { open: "08:00", close: "18:00", closed: false },
        thursday: { open: "08:00", close: "18:00", closed: false },
        friday: { open: "08:00", close: "18:00", closed: false },
        saturday: { open: "08:00", close: "16:00", closed: false },
        sunday: { open: "", close: "", closed: true }
    },

    // Serviços
    services: [
        {
            id: "corte-escova",
            name: "Corte & Escova",
            description: "Cortes modernos e escovas profissionais para todos os tipos de cabelo",
            icon: "cut.svg",
            whatsappText: "Olá! Gostaria de agendar um Corte & Escova"
        },
        {
            id: "coloracao",
            name: "Coloração",
            description: "Técnicas avançadas de coloração, luzes e mechas",
            icon: "palette.svg",
            whatsappText: "Olá! Gostaria de agendar uma Coloração"
        },
        {
            id: "manicure-pedicure",
            name: "Manicure & Pedicure",
            description: "Cuidados completos para suas unhas com produtos de qualidade",
            icon: "hand-sparkles.svg",
            whatsappText: "Olá! Gostaria de agendar Manicure & Pedicure"
        },
        {
            id: "tratamentos",
            name: "Tratamentos",
            description: "Hidratação, reconstrução e tratamentos capilares especializados",
            icon: "spa.svg",
            whatsappText: "Olá! Gostaria de agendar um Tratamento Capilar"
        },
        {
            id: "micropigmentacao",
            name: "Micropigmentação",
            description: "Técnica avançada para sobrancelhas, lábios e olhos com resultados naturais",
            icon: "micropigmentation.svg",
            whatsappText: "Olá! Gostaria de agendar uma Micropigmentação"
        }
    ],

    // SEO e Meta
    seo: {
        title: "Salão de Beleza Suellen Marcelino - Campos dos Goytacazes | Corte, Coloração, Micropigmentação",
        description: "Salão de beleza Suellen Marcelino em Campos dos Goytacazes/RJ. Especialistas em corte, coloração, micropigmentação, manicure e tratamentos capilares. Agende pelo WhatsApp (22) 99606-9670!",
        keywords: "salão de beleza, Suellen Marcelino, Campos dos Goytacazes, corte cabelo, coloração, micropigmentação, manicure, pedicure, tratamentos capilares, salão feminino, beleza",
        ogImage: "assets/images/hero-bg.jpg",
        canonicalUrl: "https://salaosuellenmarcelino.com.br"
    },

    // Configurações do site
    settings: {
        autoUpdateDates: true,
        enableWhatsappFloat: true,
        enableGoogleMaps: true,
        enableSchema: true,
        themeColor: "#d4a574"
    }
};

// Funções utilitárias
const SiteUtils = {
    // Formatar telefone para WhatsApp
    formatPhoneForWhatsApp: (phone) => {
        return phone.replace(/\D/g, '');
    },

    // Gerar link do WhatsApp com mensagem
    generateWhatsAppLink: (message = '') => {
        const phone = SiteConfig.business.phone.replace(/\D/g, '');
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ''}`;
    },

    // Obter horário de funcionamento formatado
    getFormattedSchedule: () => {
        const schedule = SiteConfig.schedule;
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const dayNames = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

        return days.map((day, index) => ({
            day: dayNames[index],
            ...schedule[day]
        }));
    },

    // Verificar se está aberto agora
    isOpenNow: () => {
        const now = new Date();
        const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const currentTime = now.getHours() * 60 + now.getMinutes();

        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const todaySchedule = SiteConfig.schedule[days[currentDay]];

        if (todaySchedule.closed) return false;

        const openTime = parseInt(todaySchedule.open.replace(':', '')) * 0.6;
        const closeTime = parseInt(todaySchedule.close.replace(':', '')) * 0.6;

        return currentTime >= openTime && currentTime <= closeTime;
    }
};

// Exportar configurações globalmente
if (typeof window !== 'undefined') {
    window.SiteConfig = SiteConfig;
    window.SiteUtils = SiteUtils;
}

// Log de inicialização
console.log('✅ Site Configuration loaded successfully');
console.log('🏪 Business:', SiteConfig.business.name);
console.log('📍 Location:', `${SiteConfig.address.city}, ${SiteConfig.address.state}`);
console.log('📱 Phone:', SiteConfig.business.phoneFormatted);
