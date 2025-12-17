import { motion } from 'framer-motion';
import {
    Target,
    Eye,
    Heart,
    Award,
    Users,
    Building
} from 'lucide-react';
import Card from '../../components/common/Card';
import './About.css';

const values = [
    { icon: Target, title: 'Innovación', description: 'Buscamos constantemente nuevas formas de resolver problemas con tecnología de vanguardia.' },
    { icon: Heart, title: 'Compromiso', description: 'Nos dedicamos al éxito de nuestros clientes como si fuera el nuestro propio.' },
    { icon: Award, title: 'Excelencia', description: 'Cada proyecto es una oportunidad para superar las expectativas.' },
    { icon: Users, title: 'Colaboración', description: 'Trabajamos de la mano con nuestros clientes para lograr los mejores resultados.' },
];

const team = [
    { name: 'Juan Pérez', role: 'CEO & Fundador', initials: 'JP' },
    { name: 'María García', role: 'CTO', initials: 'MG' },
    { name: 'Carlos López', role: 'Lead Developer', initials: 'CL' },
    { name: 'Ana Torres', role: 'Project Manager', initials: 'AT' },
];

const timeline = [
    { year: '2014', title: 'Fundación', description: 'Nace T&F Soluciones Informáticas con la visión de transformar empresas.' },
    { year: '2016', title: 'Primeros Clientes', description: 'Consolidamos nuestra cartera con clientes del sector educativo.' },
    { year: '2018', title: 'Lanzamiento SIPAA', description: 'Desarrollamos y lanzamos nuestra primera versión de SIPAA.' },
    { year: '2020', title: 'Expansión', description: 'Crecemos a nivel nacional con clientes en todo el Perú.' },
    { year: '2023', title: 'SIPAA 2.0', description: 'Lanzamos la nueva versión de SIPAA con IA integrada.' },
    { year: '2024', title: 'Presente', description: 'Continuamos innovando y expandiendo nuestros servicios.' },
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

const About = () => {
    return (
        <motion.div
            className="about-page"
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
                        <h1>Sobre Nosotros</h1>
                        <p className="lead">
                            Más de una década impulsando la transformación digital de
                            empresas e instituciones educativas en el Perú.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container">
                    <div className="mission-vision-grid">
                        <motion.div
                            className="mission-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card variant="glass" padding="xl">
                                <div className="mv-icon">
                                    <Target size={32} />
                                </div>
                                <h3>Nuestra Misión</h3>
                                <p>
                                    Brindar soluciones tecnológicas innovadoras y de alta calidad que
                                    impulsen el crecimiento y la eficiencia de nuestros clientes,
                                    contribuyendo al desarrollo tecnológico del Perú.
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div
                            className="vision-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card variant="glass" padding="xl">
                                <div className="mv-icon mv-icon-secondary">
                                    <Eye size={32} />
                                </div>
                                <h3>Nuestra Visión</h3>
                                <p>
                                    Ser reconocidos como la empresa líder en soluciones tecnológicas
                                    para el sector educativo y empresarial en Latinoamérica,
                                    destacando por nuestra innovación y excelencia.
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section values-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Nuestros Valores</h2>
                        <p>Los principios que guían cada decisión y acción de nuestro equipo.</p>
                    </motion.div>

                    <motion.div
                        className="values-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {values.map((value, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card variant="glass" padding="lg" className="value-card">
                                    <div className="value-icon">
                                        <value.icon size={28} />
                                    </div>
                                    <h4>{value.title}</h4>
                                    <p>{value.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section timeline-section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Nuestra Historia</h2>
                        <p>Un recorrido por los hitos más importantes de nuestra empresa.</p>
                    </motion.div>

                    <motion.div
                        className="timeline"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {timeline.map((item, index) => (
                            <motion.div key={index} className="timeline-item" variants={itemVariants}>
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Nuestro Equipo</h2>
                        <p>Profesionales apasionados por la tecnología y la innovación.</p>
                    </motion.div>

                    <motion.div
                        className="team-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {team.map((member, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card variant="glass" padding="lg" className="team-card">
                                    <div className="team-avatar">{member.initials}</div>
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Clients */}
            <section className="section clients-section" id="clientes">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Clientes que Confían en Nosotros</h2>
                        <p>Empresas e instituciones que han elegido T&F como su socio tecnológico.</p>
                    </motion.div>

                    <motion.div
                        className="clients-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="client-logo">
                                <Building size={40} />
                                <span>Cliente {i}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
