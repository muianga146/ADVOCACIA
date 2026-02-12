import { NavLink, ServiceItem, Testimonial, FooterLinkGroup } from "./types";

// Images extracted from the HTML source
export const IMAGES = {
  HERO_BG: "https://lh3.googleusercontent.com/aida-public/AB6AXuDji_-aQfOS77cl_NZJJAJQoPc4PwE8qPzajR_Vh2IoQgQksD2mBlU04U5w3zxRVO7nY-HzPy6dgv7dHjns-ZCpYYCZgpzHh2sLelj-ioyZcfF9_0oRWE6LgIjARK3RNhgOjX8Wet4v0umPx0frmS-dN62-xllHsbZ1FLw0KFaLkdMTVVe_tiYBTszpoxAE2YjGr_WxDmNLeqIOFPzUSQAKQjuyWlWsbuFKWBCklo5eQN8iKoe1nBydUBGYf2MYQwGROuDU06Upzoue",
  ABOUT_MEETING: "https://lh3.googleusercontent.com/aida-public/AB6AXuARYQVJd_dhlNSQiko9c3fG_GL7e0dgnhdsFOzKI1H3DhQ4ghEKDBX9odZDuJrZIIBTkENngXZWVOZyrYWSIOW0ZMaN945zbN0OTWxfuPvi9QIvwMOLtdKeBGUNmHCPr1-dSNglWudseBEMaaZwi3SSIDEqrRPn-hDb3Z1c8pa4_1S1YyDtnjtAyoxXE6Yb8A4gYMLgizwfioScE6YrvO9-jarFK-cHsCF_gu46Uq83DQ62Wevr1eDhyUea6T0-2kml9iglSRSwc2Ks",
  CLIENT_PORTRAIT: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-l3TNwa9ShmEoWM3lUhIGbH4-vle6qwqKhui9QGNy2G9asiebqy9270WoO8gH6APmvA1lahQIe-_g3M-jF0qrqaoNXLizgo6y5fAR3a97OKgbAV7c9D5k7Gc0rRNjM572g2M90qABdIPkpHh7cL2t2qVS9mdGWakoKSWcWI0b4xQc8D-IWQxyNPuSCGh7qLX57UnROYxkeu5lvwkjTrRcMvdWmuri3piuWV1NIyvXStMahH4jxBvLRBpQH8bFu_kVKqMu-NYReeGQ",
  FOOTER_MAP: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTW6lBXYL3mCWztbE22EhecQzAIQXjZ_7dlUkv75u250cBKIbJSv70V-x7b976e_1egMftPYsYNlSUFX08cP3F7gq9gMvUlBmpf4HS2xPm7XBb-2S6DPSVPOJcmZe1jQcJAVrI0nxERDVSuKYAv16uVczPYLheRa9NTb6Q7iCJ9ifqiqWio9HQaRW5QBdJ9YWbOkzSB2tWTUFsuISV8RTpIfYW93OK_dn10p4PZEGBGKlBZrcsvjb5hhgX4noXuIUrvTCvN8TWFWI6"
};

export const NAV_LINKS: NavLink[] = [
    { label: "Áreas de Atuação", href: "#services" },
    { label: "Advogados", href: "#lawyers" },
    { label: "Sobre o Escritório", href: "#about" },
    { label: "Insights", href: "#insights" },
];

export const SERVICES: ServiceItem[] = [
    {
        id: 1,
        icon: "business",
        title: "Direito Corporativo",
        description: "Serviços abrangentes de governança, conformidade e reestruturação para entidades Fortune 500."
    },
    {
        id: 2,
        icon: "gavel",
        title: "Litígio Civil",
        description: "Representação agressiva em disputas complexas, garantindo a proteção dos seus direitos e ativos."
    },
    {
        id: 3,
        icon: "apartment",
        title: "Imobiliário",
        description: "Navegando por zoneamento, aquisições e projetos de desenvolvimento com precisão e visão de futuro."
    },
    {
        id: 4,
        icon: "psychology",
        title: "Propriedade Intelectual",
        description: "Protegendo suas inovações e ativos criativos através de estratégias robustas de marcas e patentes."
    },
    {
        id: 5,
        icon: "account_balance",
        title: "Direito Tributário",
        description: "Otimizando resultados financeiros e garantindo conformidade com códigos domésticos e internacionais em evolução."
    },
    {
        id: 6,
        icon: "handshake",
        title: "Fusões e Aquisições",
        description: "Executando transições perfeitas e negócios de alto valor com diligência prévia completa."
    }
];

export const TESTIMONIAL: Testimonial = {
    quote: "O nível de profissionalismo e visão estratégica fornecidos pela Vance & Partners foi inigualável. Eles não apenas ganharam nosso caso; eles garantiram o futuro da nossa empresa contra litígios agressivos.",
    author: "Jonathan Reeves",
    role: "CEO",
    company: "Apex Corp",
    image: IMAGES.CLIENT_PORTRAIT
};

export const FOOTER_LINKS: Record<string, FooterLinkGroup> = {
    quickLinks: {
        title: "Links Rápidos",
        links: [
            { label: "Sobre o Escritório", href: "#" },
            { label: "Nossos Advogados", href: "#" },
            { label: "Áreas de Atuação", href: "#" },
            { label: "Resultados de Casos", href: "#" },
            { label: "Carreiras", href: "#" },
            { label: "Imprensa e Mídia", href: "#" }
        ]
    },
    services: {
        title: "Serviços",
        links: [
            { label: "Direito Corporativo", href: "#" },
            { label: "Imobiliário", href: "#" },
            { label: "Propriedade Intelectual", href: "#" },
            { label: "Litígio", href: "#" },
            { label: "Planejamento Patrimonial", href: "#" }
        ]
    }
};