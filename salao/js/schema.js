// Schema.org JSON-LD for Beauty Salon
// Local Business structured data for SEO

const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Salão de Beleza Suellen Marcelino",
    "description": "Salão de beleza especializado em corte, coloração, micropigmentação, manicure e tratamentos capilares em Campos dos Goytacazes.",
    "url": "https://salaosuellenmarcelino.com.br",
    "logo": "https://salaosuellenmarcelino.com.br/assets/images/logo.png",
    "image": "https://salaosuellenmarcelino.com.br/assets/images/hero-bg.jpg",
    "telephone": "+5522996069670",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. Manoel Gomes Pinto, 236",
        "addressLocality": "Campos dos Goytacazes",
        "addressRegion": "RJ",
        "postalCode": "28013-650",
        "addressCountry": "BR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -21.75,
        "longitude": -41.33333333333333
    },
    "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-16:00",
        "Su closed"
    ],
    "priceRange": "$$",
    "servedCuisine": [],
    "serviceType": "Beauty Salon",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Beleza",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Corte e Escova",
                    "description": "Cortes modernos e escovas profissionais para todos os tipos de cabelo"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Coloração",
                    "description": "Técnicas avançadas de coloração, luzes e mechas"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Micropigmentação",
                    "description": "Técnica avançada para sobrancelhas, lábios e olhos com resultados naturais"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Manicure e Pedicure",
                    "description": "Cuidados completos para suas unhas com produtos de qualidade"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Tratamentos Capilares",
                    "description": "Hidratação, reconstrução e tratamentos capilares especializados"
                }
            }
        ]
    },
    "sameAs": [
        "https://www.instagram.com/suellenkauagabryellgmaio/",
        "https://wa.me/5522996069670"
    ]
};

// Function to inject JSON-LD schema into head
function injectBusinessSchema() {
    // Remove existing schema if any
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
        existingSchema.remove();
    }

    // Create new schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(businessSchema, null, 2);

    // Add to head
    document.head.appendChild(script);

    console.log('✅ Business Schema JSON-LD injected successfully');
}

// Function to update schema with current date
function updateSchemaWithCurrentDate() {
    const currentDate = new Date().toISOString().split('T')[0];

    // Add dateModified to schema
    businessSchema.dateModified = currentDate;
    businessSchema.datePublished = "2025-01-01"; // Set initial publication date

    // Re-inject with updated data
    injectBusinessSchema();
}

// Initialize schema on page load
document.addEventListener('DOMContentLoaded', function() {
    updateSchemaWithCurrentDate();
});

// Export for manual use
if (typeof window !== 'undefined') {
    window.businessSchema = businessSchema;
    window.injectBusinessSchema = injectBusinessSchema;
    window.updateSchemaWithCurrentDate = updateSchemaWithCurrentDate;
}
