import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../../common/Button';
import ThemeToggle from '../../common/ThemeToggle';
import Logo from '../../common/Logo';
import './Header.css';

const navigation = [
    { name: 'Inicio', href: '/' },
    {
        name: 'Servicios',
        href: '/servicios',
        submenu: [
            { name: 'Desarrollo Web a Medida', href: '/servicios/desarrollo-web' },
            { name: 'Soluciones Informáticas', href: '/servicios/soluciones-informaticas' },
            { name: 'Consultoría TI', href: '/servicios/consultoria-ti' },
            { name: 'Soporte Técnico', href: '/servicios/soporte-tecnico' },
            { name: 'Desarrollo Móvil', href: '/servicios/desarrollo-movil' },
            { name: 'Cloud & DevOps', href: '/servicios/cloud-devops' },
        ]
    },
    { name: 'SIPAA', href: '/sipaa', featured: true },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveSubmenu(null);
    }, [location]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="header-nav container">
                {/* Logo */}
                <Link to="/" className="header-logo">
                    <Logo />
                </Link>

                {/* Desktop Navigation */}
                <ul className="header-menu hide-mobile">
                    {navigation.map((item) => (
                        <li
                            key={item.name}
                            className={`menu-item ${item.submenu ? 'has-submenu' : ''}`}
                            onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                        >
                            <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                    `menu-link ${isActive ? 'active' : ''} ${item.featured ? 'featured' : ''}`
                                }
                            >
                                {item.name}
                                {item.submenu && <ChevronDown size={16} />}
                            </NavLink>

                            {item.submenu && (
                                <AnimatePresence>
                                    {activeSubmenu === item.name && (
                                        <motion.ul
                                            className="submenu"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.submenu.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link to={subItem.href} className="submenu-link">
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Header Actions */}
                <div className="header-actions hide-mobile">
                    <ThemeToggle />
                    <Button href="/contacto" size="sm">
                        Solicitar Cotización
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-actions hide-desktop">
                    <ThemeToggle />
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <ul className="mobile-menu-list">
                            {navigation.map((item) => (
                                <li key={item.name} className="mobile-menu-item">
                                    <NavLink
                                        to={item.href}
                                        className={({ isActive }) =>
                                            `mobile-menu-link ${isActive ? 'active' : ''} ${item.featured ? 'featured' : ''}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                    {item.submenu && (
                                        <ul className="mobile-submenu">
                                            {item.submenu.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link to={subItem.href} className="mobile-submenu-link">
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="mobile-menu-cta">
                            <Button href="/contacto" fullWidth>
                                Solicitar Cotización
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
