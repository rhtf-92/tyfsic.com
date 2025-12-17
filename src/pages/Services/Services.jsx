import { motion } from 'framer-motion';
import {
    Code,
    Server,
    Lightbulb,
    Headphones,
    Cloud,
    Smartphone,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import './Services.css';

const services = [
    {
        id: 'desarrollo-web',
        icon: Code,
        title: 'Desarrollo Web a Medida',
        description: 'Creamos aplicaciones web robustas y escalables adaptadas a las necesidades específicas de tu negocio.',
        features: [
            'Aplicaciones SPA y MPA',
            'E-commerce personalizado',
            'Portales corporativos',
            'Sistemas de gestión (ERP, CRM)',
            'APIs RESTful y GraphQL',
            'Integración con servicios externos'
        ],
        color: 'primary'
    },
    {
        id: 'soluciones',
        icon: Server,
        title: 'Soluciones Informáticas',
        description: 'Implementamos sistemas integrales que optimizan procesos empresariales y aumentan la productividad.',
        features: [
            'Sistemas ERP personalizados',
            'Gestión de inventarios',
            'Automatización de procesos',
            'Business Intelligence',
            'Integración de sistemas',
            'Migración de datos'
        ],
        color: 'secondary'
    },
    {
        id: 'consultoria',
        icon: Lightbulb,
        title: 'Consultoría TI',
        description: 'Asesoramiento estratégico para transformar digitalmente tu organización con las mejores tecnologías.',
        features: [
            'Auditoría tecnológica',
            'Planificación IT estratégica',
            'Transformación digital',
            'Optimización de infraestructura',
            'Seguridad informática',
            'Capacitación técnica'
        ],
        color: 'primary'
    },
    {
        id: 'soporte',
        icon: Headphones,
        title: 'Soporte Técnico',
        description: 'Asistencia técnica especializada para mantener la continuidad operativa de tu negocio.',
        features: [
            'Help desk 24/7',
            'Mantenimiento preventivo',
            'Resolución de incidencias',
            'Backup y recuperación',
            'Monitoreo de sistemas',
            'Actualizaciones y parches'
        ],
        color: 'secondary'
    },
    {
        id: 'desarrollo-movil',
        icon: Smartphone,
        title: 'Desarrollo Móvil',
        description: 'Aplicaciones móviles nativas e híbridas para llevar tu negocio a cualquier dispositivo.',
        features: [
            'Apps iOS y Android',
            'Aplicaciones híbridas',
            'Progressive Web Apps (PWA)',
            'Integración con APIs',
            'Notificaciones push',
            'Mantenimiento de apps'
        ],
        color: 'primary'
    },
    {
        id: 'cloud',
        icon: Cloud,
        title: 'Cloud & DevOps',
        description: 'Infraestructura en la nube y prácticas DevOps para escalar tu negocio de forma eficiente.',
        features: [
            'Migración a la nube',
            'AWS, Azure, Google Cloud',
            'CI/CD pipelines',
            'Contenedores y Kubernetes',
            'Monitoreo y logging',
            'Optimización de costos'
        ],
        color: 'secondary'
    },
];

const process = [
    { step: 1, title: 'Análisis', description: 'Entendemos tus necesidades y objetivos' },
    { step: 2, title: 'Diseño', description: 'Creamos la arquitectura y diseño de la solución' },
    { step: 3, title: 'Desarrollo', description: 'Construimos con las mejores tecnologías' },
    { step: 4, title: 'Testing', description: 'Probamos exhaustivamente cada funcionalidad' },
    { step: 5, title: 'Despliegue', description: 'Implementamos en tu entorno de producción' },
    { step: 6, title: 'Soporte', description: 'Brindamos acompañamiento continuo' },
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

const Services = () => {
    return (
        <motion.div
            className="services-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Hero */}
            <section className="page-hero">
                <div className="hero-background">
                    <div className="gradient-orb gradient-orb-primary" style={{ top: '-100px', right: '-100px', width: '400px', height: '400px' }} />
                </div>
                <div className="container">
                    <motion.div
                        className="page-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Nuestros Servicios</h1>
                        <p className="lead">
                            Soluciones tecnológicas integrales diseñadas para impulsar
                            el crecimiento y la eficiencia de tu organización.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="services-detailed-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {services.map((service) => (
                            <motion.div key={service.id} variants={itemVariants} id={service.id}>
                                <Card variant="glass" padding="lg" className="service-detailed-card">
                                    <div className={`service-icon service-icon-${service.color}`}>
                                        <service.icon size={32} />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <ul className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <CheckCircle size={16} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        href={`/contacto?servicio=${service.id}`}
                                        variant="ghost"
                                        icon={<ArrowRight size={18} />}
                                        iconPosition="right"
                                    >
                                        Solicitar información
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section process-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Nuestro Proceso</h2>
                        <p>Metodología probada para garantizar el éxito de cada proyecto.</p>
                    </motion.div>

                    <motion.div
                        className="process-timeline"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {process.map((item) => (
                            <motion.div key={item.step} className="process-step" variants={itemVariants}>
                                <div className="process-number">{item.step}</div>
                                <div className="process-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="services-cta"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>¿Tienes un proyecto en mente?</h2>
                        <p>Cuéntanos tu idea y te ayudaremos a hacerla realidad.</p>
                        <Button href="/contacto" size="lg" icon={<ArrowRight />} iconPosition="right">
                            Iniciar Proyecto
                        </Button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Services;
