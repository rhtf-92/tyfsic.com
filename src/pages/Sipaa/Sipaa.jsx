import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    Shield,
    TrendingUp,
    Users,
    Calendar,
    CreditCard,
    FileText,
    Bell,
    BarChart3,
    Settings,
    CheckCircle,
    ArrowRight,
    Play
} from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import './Sipaa.css';

const features = [
    { icon: Zap, title: 'Alto Rendimiento', description: 'Optimizado para manejar grandes volúmenes de datos con respuesta inmediata.' },
    { icon: Shield, title: 'Seguridad Avanzada', description: 'Protección de datos con los más altos estándares de encriptación.' },
    { icon: TrendingUp, title: 'Escalabilidad', description: 'Crece con tu institución sin perder rendimiento ni eficiencia.' },
    { icon: Settings, title: 'Flexibilidad', description: 'Adaptable a las necesidades específicas de cada institución.' },
    { icon: Users, title: 'Multi-usuario', description: 'Gestión de roles y permisos para diferentes niveles de acceso.' },
    { icon: BarChart3, title: 'Reportes Analíticos', description: 'Dashboards interactivos con métricas en tiempo real.' },
];

const modules = [
    {
        id: 'academico',
        title: 'Módulo Académico',
        icon: Calendar,
        features: [
            'Gestión de matrículas',
            'Control de asistencias',
            'Registro de calificaciones',
            'Programación de horarios',
            'Gestión de planes de estudio',
            'Seguimiento académico'
        ]
    },
    {
        id: 'administrativo',
        title: 'Módulo Administrativo',
        icon: CreditCard,
        features: [
            'Gestión de pagos y cobranzas',
            'Control de becas y descuentos',
            'Administración de personal',
            'Inventario y activos',
            'Gestión documental',
            'Facturación electrónica'
        ]
    },
    {
        id: 'reportes',
        title: 'Módulo de Reportes',
        icon: FileText,
        features: [
            'Dashboard analítico',
            'Reportes SUNEDU',
            'Indicadores de gestión',
            'Estadísticas académicas',
            'Exportación múltiples formatos',
            'Reportes personalizados'
        ]
    },
    {
        id: 'comunicaciones',
        title: 'Módulo de Comunicaciones',
        icon: Bell,
        features: [
            'Notificaciones push',
            'Mensajería interna',
            'Comunicados institucionales',
            'Portal de padres/tutores',
            'Integración WhatsApp',
            'Email automatizado'
        ]
    },
];

const benefits = [
    { value: '-60%', label: 'Tiempo de Procesos' },
    { value: '+95%', label: 'Satisfacción Usuario' },
    { value: '100%', label: 'Cumplimiento Normativo' },
    { value: '24/7', label: 'Soporte Técnico' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const Sipaa = () => {
    const [activeModule, setActiveModule] = useState('academico');

    return (
        <motion.div
            className="sipaa-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Hero */}
            <section className="sipaa-hero">
                <div className="hero-background">
                    <div className="gradient-orb gradient-orb-primary" style={{ top: '-150px', right: '-100px', width: '500px', height: '500px' }} />
                    <div className="gradient-orb gradient-orb-secondary" style={{ bottom: '-100px', left: '-50px', width: '300px', height: '300px' }} />
                    <div className="grid-background" />
                </div>

                <div className="container">
                    <motion.div
                        className="sipaa-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div className="sipaa-badge" variants={itemVariants}>
                            Sistema Integral de Gestión Educativa
                        </motion.div>
                        <motion.h1 variants={itemVariants}>
                            <span className="text-gradient">SIPAA</span>
                        </motion.h1>
                        <motion.p className="sipaa-subtitle" variants={itemVariants}>
                            Sistema Integral de Procesos Académicos y Administrativos
                        </motion.p>
                        <motion.p className="sipaa-description" variants={itemVariants}>
                            La solución completa para la gestión educativa de Institutos de Educación
                            Superior (IES/IEST). Cumpliendo los más altos estándares de rendimiento,
                            optimización, flexibilidad y operatividad.
                        </motion.p>
                        <motion.div className="sipaa-hero-buttons" variants={itemVariants}>
                            <Button href="/contacto?asunto=demo-sipaa" size="lg" icon={<ArrowRight />} iconPosition="right">
                                Solicitar Demo Gratuita
                            </Button>
                            <Button variant="outline" size="lg" icon={<Play size={18} />}>
                                Ver Video
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="section" id="caracteristicas">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Características Principales</h2>
                        <p>Diseñado para optimizar cada aspecto de la gestión educativa.</p>
                    </motion.div>

                    <motion.div
                        className="features-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {features.map((feature, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card variant="glass" padding="lg" className="feature-card">
                                    <div className="feature-icon">
                                        <feature.icon size={28} />
                                    </div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Modules */}
            <section className="section modules-section" id="modulos">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Módulos del Sistema</h2>
                        <p>Una suite completa de herramientas para cada área de tu institución.</p>
                    </motion.div>

                    <motion.div
                        className="modules-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="modules-tabs">
                            {modules.map((module) => (
                                <button
                                    key={module.id}
                                    className={`module-tab ${activeModule === module.id ? 'active' : ''}`}
                                    onClick={() => setActiveModule(module.id)}
                                >
                                    <module.icon size={20} />
                                    <span>{module.title}</span>
                                </button>
                            ))}
                        </div>

                        <div className="modules-content">
                            {modules.map((module) => (
                                <motion.div
                                    key={module.id}
                                    className={`module-panel ${activeModule === module.id ? 'active' : ''}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                        opacity: activeModule === module.id ? 1 : 0,
                                        x: activeModule === module.id ? 0 : 20
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="module-header">
                                        <module.icon size={32} />
                                        <h3>{module.title}</h3>
                                    </div>
                                    <ul className="module-features">
                                        {module.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <CheckCircle size={18} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section benefits-section" id="beneficios">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Beneficios Comprobados</h2>
                        <p>Resultados reales de instituciones que ya usan SIPAA.</p>
                    </motion.div>

                    <motion.div
                        className="benefits-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div key={index} className="benefit-item" variants={itemVariants}>
                                <span className="benefit-value">{benefit.value}</span>
                                <span className="benefit-label">{benefit.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="sipaa-cta"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="cta-glow" />
                        <h2>Transforma la gestión de tu institución</h2>
                        <p>
                            Agenda una demostración personalizada y descubre cómo SIPAA
                            puede optimizar los procesos de tu institución educativa.
                        </p>
                        <Button href="/contacto?asunto=demo-sipaa" size="lg" icon={<ArrowRight />} iconPosition="right">
                            Agendar Demo Gratuita
                        </Button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Sipaa;
