import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Code,
    Server,
    Lightbulb,
    Headphones,
    Cloud,
    Smartphone,
    ArrowRight,
    CheckCircle,
    Layers,
    Zap,
    Shield,
    Clock
} from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import './ServiceDetail.css';

const servicesData = {
    'desarrollo-web': {
        icon: Code,
        title: 'Desarrollo Web a Medida',
        subtitle: 'Soluciones digitales que impulsan tu negocio',
        description: 'Creamos aplicaciones web robustas, escalables y personalizadas que se adaptan perfectamente a las necesidades de tu negocio. Utilizamos las últimas tecnologías y metodologías ágiles para entregar productos de alta calidad.',
        heroImage: '/images/desarrollo-web.jpg',
        features: [
            {
                icon: Layers,
                title: 'Arquitectura Moderna',
                description: 'Desarrollamos con React, Vue, Angular y otras tecnologías líderes.'
            },
            {
                icon: Zap,
                title: 'Alto Rendimiento',
                description: 'Optimizamos cada línea de código para máxima velocidad.'
            },
            {
                icon: Shield,
                title: 'Seguridad Garantizada',
                description: 'Implementamos las mejores prácticas de seguridad web.'
            },
            {
                icon: Clock,
                title: 'Entrega Ágil',
                description: 'Metodología Scrum para entregas incrementales y transparentes.'
            }
        ],
        services: [
            'Aplicaciones SPA y MPA',
            'Plataformas E-commerce',
            'Portales corporativos',
            'Sistemas de gestión (ERP, CRM)',
            'APIs RESTful y GraphQL',
            'Integración con servicios externos',
            'PWA (Progressive Web Apps)',
            'Dashboards y herramientas de análisis'
        ],
        technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Laravel', 'PostgreSQL', 'MongoDB', 'AWS'],
        color: 'primary'
    },
    'soluciones-informaticas': {
        icon: Server,
        title: 'Soluciones Informáticas',
        subtitle: 'Sistemas que transforman tu operación',
        description: 'Implementamos sistemas integrales que optimizan tus procesos empresariales, aumentan la productividad y te dan visibilidad total de tu operación. Desde ERPs personalizados hasta automatización de procesos.',
        features: [
            {
                icon: Layers,
                title: 'Integración Total',
                description: 'Conectamos todos tus sistemas en una sola plataforma.'
            },
            {
                icon: Zap,
                title: 'Automatización',
                description: 'Eliminamos tareas manuales repetitivas de tu operación.'
            },
            {
                icon: Shield,
                title: 'Datos Seguros',
                description: 'Protección y respaldo de tu información crítica.'
            },
            {
                icon: Clock,
                title: 'Reportes en Tiempo Real',
                description: 'Toma decisiones informadas con datos actualizados.'
            }
        ],
        services: [
            'Sistemas ERP personalizados',
            'Gestión de inventarios',
            'Automatización de procesos (RPA)',
            'Business Intelligence (BI)',
            'Integración de sistemas legacy',
            'Migración de datos',
            'Facturación electrónica',
            'Gestión documental'
        ],
        technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Power BI', 'Python', 'SQL Server', '.NET'],
        color: 'secondary'
    },
    'consultoria-ti': {
        icon: Lightbulb,
        title: 'Consultoría TI',
        subtitle: 'Estrategia tecnológica para el éxito',
        description: 'Te asesoramos estratégicamente para transformar digitalmente tu organización. Evaluamos tu situación actual, identificamos oportunidades de mejora y diseñamos la hoja de ruta tecnológica ideal.',
        features: [
            {
                icon: Layers,
                title: 'Diagnóstico Integral',
                description: 'Evaluación completa de tu infraestructura y procesos.'
            },
            {
                icon: Zap,
                title: 'Transformación Digital',
                description: 'Guía paso a paso para modernizar tu empresa.'
            },
            {
                icon: Shield,
                title: 'Ciberseguridad',
                description: 'Protección contra amenazas y vulnerabilidades.'
            },
            {
                icon: Clock,
                title: 'Roadmap Tecnológico',
                description: 'Planificación a corto, mediano y largo plazo.'
            }
        ],
        services: [
            'Auditoría tecnológica completa',
            'Planificación IT estratégica',
            'Transformación digital',
            'Optimización de infraestructura',
            'Consultoría en ciberseguridad',
            'Selección de tecnologías',
            'Capacitación técnica',
            'Gobierno de TI'
        ],
        technologies: ['ITIL', 'COBIT', 'ISO 27001', 'Agile', 'DevOps', 'Cloud Strategy'],
        color: 'primary'
    },
    'soporte-tecnico': {
        icon: Headphones,
        title: 'Soporte Técnico',
        subtitle: 'Siempre disponibles cuando nos necesitas',
        description: 'Brindamos asistencia técnica especializada las 24 horas para mantener la continuidad operativa de tu negocio. Resolvemos problemas rápidamente y prevenimos fallas antes de que ocurran.',
        features: [
            {
                icon: Clock,
                title: 'Disponibilidad 24/7',
                description: 'Soporte continuo todos los días del año.'
            },
            {
                icon: Zap,
                title: 'Respuesta Rápida',
                description: 'Tiempos de respuesta garantizados según SLA.'
            },
            {
                icon: Shield,
                title: 'Monitoreo Proactivo',
                description: 'Detectamos y resolvemos problemas antes de que te afecten.'
            },
            {
                icon: Layers,
                title: 'Soporte Multinivel',
                description: 'Desde help desk hasta especialistas de nivel 3.'
            }
        ],
        services: [
            'Help desk 24/7',
            'Mantenimiento preventivo',
            'Resolución de incidencias',
            'Backup y recuperación de datos',
            'Monitoreo de sistemas',
            'Actualizaciones y parches',
            'Soporte remoto y presencial',
            'Gestión de activos de TI'
        ],
        technologies: ['ServiceNow', 'Jira Service Management', 'Zabbix', 'Grafana', 'Ansible'],
        color: 'secondary'
    },
    'desarrollo-movil': {
        icon: Smartphone,
        title: 'Desarrollo Móvil',
        subtitle: 'Tu negocio en el bolsillo de tus clientes',
        description: 'Desarrollamos aplicaciones móviles nativas e híbridas de alto rendimiento para iOS y Android. Creamos experiencias móviles que tus usuarios amarán usar.',
        features: [
            {
                icon: Layers,
                title: 'Multiplataforma',
                description: 'Una base de código para iOS y Android.'
            },
            {
                icon: Zap,
                title: 'UX Excepcional',
                description: 'Diseño intuitivo centrado en el usuario.'
            },
            {
                icon: Shield,
                title: 'Seguridad Móvil',
                description: 'Protección de datos y autenticación segura.'
            },
            {
                icon: Clock,
                title: 'Time to Market',
                description: 'Desarrollo rápido con calidad garantizada.'
            }
        ],
        services: [
            'Apps nativas iOS (Swift)',
            'Apps nativas Android (Kotlin)',
            'Apps híbridas (React Native, Flutter)',
            'Progressive Web Apps (PWA)',
            'Integración con APIs',
            'Notificaciones push',
            'Publicación en stores',
            'Mantenimiento y actualizaciones'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store', 'Play Store'],
        color: 'primary'
    },
    'cloud-devops': {
        icon: Cloud,
        title: 'Cloud & DevOps',
        subtitle: 'Infraestructura escalable y automatizada',
        description: 'Te ayudamos a migrar a la nube y optimizar tus operaciones con prácticas DevOps modernas. Reduce costos, mejora la escalabilidad y acelera tus despliegues.',
        features: [
            {
                icon: Layers,
                title: 'Multi-Cloud',
                description: 'Estrategias para AWS, Azure y Google Cloud.'
            },
            {
                icon: Zap,
                title: 'CI/CD Automatizado',
                description: 'Pipelines de integración y despliegue continuo.'
            },
            {
                icon: Shield,
                title: 'Seguridad Cloud',
                description: 'Cumplimiento y protección de datos en la nube.'
            },
            {
                icon: Clock,
                title: 'Optimización de Costos',
                description: 'Gestión eficiente de recursos cloud.'
            }
        ],
        services: [
            'Migración a la nube',
            'Arquitectura cloud-native',
            'Infraestructura como código (IaC)',
            'CI/CD pipelines',
            'Contenedores (Docker, Kubernetes)',
            'Monitoreo y logging',
            'Optimización de costos cloud',
            'Disaster recovery'
        ],
        technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI'],
        color: 'secondary'
    }
};

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

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData[serviceId];

    if (!service) {
        return <Navigate to="/servicios" replace />;
    }

    const IconComponent = service.icon;

    return (
        <motion.div
            className="service-detail-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Hero */}
            <section className="service-detail-hero">
                <div className="hero-background">
                    <div className={`gradient-orb gradient-orb-${service.color}`} style={{ top: '-100px', right: '-100px', width: '500px', height: '500px' }} />
                    <div className="grid-background" />
                </div>

                <div className="container">
                    <motion.div
                        className="service-detail-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div className={`service-hero-icon service-hero-icon-${service.color}`} variants={itemVariants}>
                            <IconComponent size={40} />
                        </motion.div>
                        <motion.h1 variants={itemVariants}>{service.title}</motion.h1>
                        <motion.p className="service-subtitle" variants={itemVariants}>
                            {service.subtitle}
                        </motion.p>
                        <motion.p className="service-description" variants={itemVariants}>
                            {service.description}
                        </motion.p>
                        <motion.div className="service-hero-buttons" variants={itemVariants}>
                            <Button href={`/contacto?servicio=${serviceId}`} size="lg" icon={<ArrowRight />} iconPosition="right">
                                Solicitar Cotización
                            </Button>
                            <Button href="/servicios" variant="outline" size="lg">
                                Ver Todos los Servicios
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>¿Por qué elegirnos?</h2>
                        <p>Ventajas competitivas que nos diferencian en el mercado.</p>
                    </motion.div>

                    <motion.div
                        className="service-features-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {service.features.map((feature, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card variant="glass" padding="lg" className="service-feature-card">
                                    <div className={`feature-icon feature-icon-${service.color}`}>
                                        <feature.icon size={24} />
                                    </div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <section className="section services-list-section">
                <div className="container">
                    <div className="services-list-grid">
                        <motion.div
                            className="services-list-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Lo que incluye</h2>
                            <p>Servicios completos que cubrimos en esta área.</p>
                            <ul className="services-checklist">
                                {service.services.map((item, index) => (
                                    <li key={index}>
                                        <CheckCircle size={20} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="technologies-content"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card variant="glass" padding="xl">
                                <h3>Tecnologías que usamos</h3>
                                <div className="technologies-grid">
                                    {service.technologies.map((tech, index) => (
                                        <span key={index} className="technology-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="service-detail-cta"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2>¿Listo para empezar?</h2>
                        <p>Cuéntanos tu proyecto y te daremos una propuesta personalizada sin compromiso.</p>
                        <Button href={`/contacto?servicio=${serviceId}`} size="lg" icon={<ArrowRight />} iconPosition="right">
                            Contactar Ahora
                        </Button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default ServiceDetail;
