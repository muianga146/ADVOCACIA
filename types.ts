export interface ServiceItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface FooterLinkGroup {
    title: string;
    links: NavLink[];
}