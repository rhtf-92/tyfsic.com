import { Link } from 'react-router-dom';
import {
    Facebook,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight
} from 'lucide-react';
import './Footer.css';

const footerLinks = {
    servicios: [
        { name: 'Desarrollo Web a Medida', href: '/servicios#desarrollo-web' },
        { name: 'Soluciones Informáticas', href: '/servicios#soluciones' },
        { name: 'Consultoría TI', href: '/servicios#consultoria' },
        { name: 'Soporte Técnico', href: '/servicios#soporte' },
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
        { name: 'Blog', href: '/blog' },
        { name: 'Contacto', href: '/contacto' },
    ],
};

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/tyfsic' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/tyfsic' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/tyfsic' },
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
                            transformación digital de empresas e instituciones educativas.
                        </p>
                        <div className="footer-contact">
                            <a href="mailto:contacto@tyfsic.com" className="contact-item">
                                <Mail size={18} />
                                <span>contacto@tyfsic.com</span>
                            </a>
                            <a href="tel:+51999999999" className="contact-item">
                                <Phone size={18} />
                                <span>+51 999 999 999</span>
                            </a>
                            <div className="contact-item">
                                <MapPin size={18} />
                                <span>Lima, Perú</span>
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
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label={social.name}
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
