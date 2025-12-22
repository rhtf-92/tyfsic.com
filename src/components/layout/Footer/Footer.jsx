import { Link } from 'react-router-dom';
import {
    Facebook,
    Linkedin,
    Instagram,
    Twitter,
    Youtube,
    Mail,
    Phone,
    MapPin,
    Clock,
    ArrowUpRight
} from 'lucide-react';
import './Footer.css';

const footerLinks = {
    servicios: [
        { name: 'Desarrollo Web a Medida', href: '/servicios/desarrollo-web' },
        { name: 'Soluciones Informáticas', href: '/servicios/soluciones-informaticas' },
        { name: 'Consultoría TI', href: '/servicios/consultoria-ti' },
        { name: 'Soporte Técnico', href: '/servicios/soporte-tecnico' },
    ],
    sipaa: [
        { name: 'Características', href: '/sipaa#caracteristicas' },
        { name: 'Módulos', href: '/sipaa#modulos' },
        { name: 'Beneficios', href: '/sipaa#beneficios' },
        { name: 'Solicitar Demo', href: '/contacto?asunto=demo-sipaa' },
    ],
    empresa: [
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Clientes', href: '/nosotros#clientes' },
        { name: 'Contacto', href: '/contacto' },
    ],
};

// Social links - URLs pending
const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                {/* Main Footer */}
                <div className="footer-main">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-text">T&F</span>
                            <span className="logo-subtext">Soluciones Informáticas</span>
                        </Link>
                        <p className="footer-description">
                            Tu socio tecnológico de confianza. Más de 10 años impulsando la
                            transformación digital de empresas e instituciones educativas en Perú.
                        </p>
                        <div className="footer-contact">
                            <a href="mailto:tyfsic@gmail.com" className="contact-item">
                                <Mail size={18} />
                                <span>tyfsic@gmail.com</span>
                            </a>
                            <a href="tel:+51993975609" className="contact-item">
                                <Phone size={18} />
                                <span>+51 993 975 609</span>
                            </a>
                            <a
                                href="https://wa.me/51993975609"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item whatsapp"
                            >
                                <Phone size={18} />
                                <span>WhatsApp</span>
                            </a>
                            <div className="contact-item">
                                <MapPin size={18} />
                                <span>Jr. 28 de julio 1523-Dpto 402, Huánuco, Perú</span>
                            </div>
                            <div className="contact-item">
                                <Clock size={18} />
                                <span>Lun - Vie: 9:00 - 18:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-column-title">Servicios</h4>
                            <ul className="footer-list">
                                {footerLinks.servicios.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="footer-link">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-column-title">
                                SIPAA
                                <span className="badge-new">Producto</span>
                            </h4>
                            <ul className="footer-list">
                                {footerLinks.sipaa.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="footer-link">
                                            {link.name}
                                            {link.name === 'Solicitar Demo' && (
                                                <ArrowUpRight size={14} />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-column-title">Empresa</h4>
                            <ul className="footer-list">
                                {footerLinks.empresa.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="footer-link">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider" />

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} T&F Soluciones Informáticas y Consultoría EIRL.
                        Todos los derechos reservados.
                    </p>

                    <div className="footer-social">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="social-link"
                                aria-label={social.name}
                                title={`${social.name} - Próximamente`}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
