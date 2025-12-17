import { motion } from 'framer-motion';
import {
    Code,
    Server,
    Lightbulb,
    Headphones,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Zap,
    Shield,
    TrendingUp
} from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import './Home.css';

const stats = [
    { value: '50+', label: 'Proyectos Completados' },
    { value: '30+', label: 'Clientes Satisfechos' },
    { value: '10+', label: 'Años de Experiencia' },
    { value: '24/7', label: 'Soporte Disponible' },
];

const services = [
    {
        icon: Code,
        title: 'Desarrollo Web a Medida',
        description: 'Creamos aplicaciones web robustas y escalables adaptadas a las necesidades específicas de tu negocio.',
        color: 'primary'
    },
    {
        icon: Server,
        title: 'Soluciones Informáticas',
        description: 'Implementamos sistemas integrales que optimizan tus procesos empresariales y aumentan la productividad.',
        color: 'secondary'
    },
    {
        icon: Lightbulb,
        title: 'Consultoría TI',
        description: 'Asesoramiento estratégico para transformar digitalmente tu organización con las mejores tecnologías.',
        color: 'primary'
    },
    {
        icon: Headphones,
        title: 'Soporte Técnico',
        description: 'Asistencia técnica especializada para mantener la continuidad operativa de tu negocio.',
        color: 'secondary'
    },
];

const sipaaFeatures = [
    { icon: Zap, text: 'Alto Rendimiento' },
    { icon: Shield, text: 'Seguridad Avanzada' },
    { icon: TrendingUp, text: 'Reportes en Tiempo Real' },
    { icon: CheckCircle, text: 'Cumplimiento SUNEDU' },
];

const testimonials = [
    {
        quote: 'T&F transformó completamente nuestra gestión académica con SIPAA. La eficiencia aumentó un 70% en el primer semestre.',
        author: 'María García',
        role: 'Directora Académica',
        company: 'IEST San José'
    },
    {
        quote: 'Excelente equipo profesional. Entregaron nuestro sistema de gestión en tiempo récord y con una calidad excepcional.',
        author: 'Carlos Mendoza',
        role: 'Gerente de TI',
        company: 'Corporación Andina'
    },
    {
        quote: 'El soporte técnico es impecable. Siempre responden rápido y resuelven cualquier problema de manera eficiente.',
        author: 'Luis Torres',
        role: 'Administrador de Sistemas',
        company: 'Instituto Tecnológico del Norte'
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};

const Home = () => {
    return (
        <motion.div
            className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="gradient-orb gradient-orb-1" />
                    <div className="gradient-orb gradient-orb-2" />
                    <div className="grid-background" />
                </div>

                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div className="hero-badge" variants={itemVariants}>
                            <Sparkles size={16} />
                            <span>Innovación Digital para tu Empresa</span>
                        </motion.div>

                        <motion.h1 className="hero-title" variants={itemVariants}>
                            Transformamos ideas en{' '}
                            <span className="text-gradient-animated">
                                soluciones digitales
                            </span>{' '}
                            innovadoras
                        </motion.h1>

                        <motion.p className="hero-description" variants={itemVariants}>
                            Más de 10 años impulsando el éxito de empresas e instituciones
                            educativas con tecnología de vanguardia y soluciones a medida.
                        </motion.p>

                        <motion.div className="hero-buttons" variants={itemVariants}>
                            <Button href="/contacto" size="lg" icon={<ArrowRight />} iconPosition="right">
                                Solicitar Cotización
                            </Button>
                            <Button href="/servicios" variant="outline" size="lg">
                                Ver Servicios
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div className="hero-stats" variants={itemVariants}>
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Nuestros Servicios</h2>
                        <p>
                            Soluciones tecnológicas integrales diseñadas para impulsar
                            el crecimiento y la eficiencia de tu organización.
                        </p>
                    </motion.div>

                    <motion.div
                        className="services-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card variant="glass" padding="lg" className="service-card">
                                    <div className={`card-icon card-icon-${service.color}`}>
                                        <service.icon />
                                    </div>
                                    <h3 className="card-title">{service.title}</h3>
                                    <p className="card-description">{service.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="services-cta"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button href="/servicios" variant="ghost" icon={<ArrowRight />} iconPosition="right">
                            Ver todos los servicios
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* SIPAA Section */}
            <section className="section sipaa-section">
                <div className="container">
                    <div className="sipaa-content">
                        <motion.div
                            className="sipaa-info"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="badge">
                                <Sparkles size={14} />
                                Producto Destacado
                            </div>
                            <h2>
                                SIPAA
                                <span className="sipaa-subtitle">
                                    Sistema Integral de Procesos Académicos y Administrativos
                                </span>
                            </h2>
                            <p>
                                La solución completa para la gestión educativa de Institutos
                                de Educación Superior (IES/IEST). Cumpliendo los más altos
                                estándares de rendimiento, optimización y operatividad.
                            </p>

                            <ul className="sipaa-features">
                                {sipaaFeatures.map((feature, index) => (
                                    <li key={index} className="sipaa-feature">
                                        <feature.icon size={20} />
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="sipaa-buttons">
                                <Button href="/sipaa" icon={<ArrowRight />} iconPosition="right">
                                    Conocer más
                                </Button>
                                <Button href="/contacto?asunto=demo-sipaa" variant="outline">
                                    Solicitar Demo
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="sipaa-visual"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="sipaa-mockup">
                                <div className="mockup-header">
                                    <div className="mockup-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span className="mockup-title">SIPAA Dashboard</span>
                                </div>
                                <div className="mockup-content">
                                    <div className="mockup-sidebar">
                                        <div className="mockup-nav-item active"></div>
                                        <div className="mockup-nav-item"></div>
                                        <div className="mockup-nav-item"></div>
                                        <div className="mockup-nav-item"></div>
                                    </div>
                                    <div className="mockup-main">
                                        <div className="mockup-stats">
                                            <div className="mockup-stat-card"></div>
                                            <div className="mockup-stat-card"></div>
                                            <div className="mockup-stat-card"></div>
                                        </div>
                                        <div className="mockup-chart"></div>
                                        <div className="mockup-table">
                                            <div className="mockup-row"></div>
                                            <div className="mockup-row"></div>
                                            <div className="mockup-row"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Lo que dicen nuestros clientes</h2>
                        <p>
                            Empresas e instituciones que confían en nosotros para
                            impulsar su transformación digital.
                        </p>
                    </motion.div>

                    <motion.div
                        className="testimonials-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card variant="glass" padding="lg" className="testimonial-card">
                                    <p className="testimonial-quote">"{testimonial.quote}"</p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">
                                            {testimonial.author.charAt(0)}
                                        </div>
                                        <div className="author-info">
                                            <span className="author-name">{testimonial.author}</span>
                                            <span className="author-role">
                                                {testimonial.role} - {testimonial.company}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="cta-glow" />
                        <h2>¿Listo para transformar tu negocio?</h2>
                        <p>
                            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar
                            tus objetivos tecnológicos.
                        </p>
                        <Button href="/contacto" size="lg" icon={<ArrowRight />} iconPosition="right">
                            Agendar Consulta Gratuita
                        </Button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
