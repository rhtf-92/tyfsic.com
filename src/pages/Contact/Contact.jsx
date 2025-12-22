import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle
} from 'lucide-react';
import Button from '../../components/common/Button';
import { SupportIllustration } from '../../components/common/Illustrations';
import './Contact.css';

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'tyfsic@gmail.com', href: 'mailto:tyfsic@gmail.com' },
    { icon: Phone, label: 'Teléfono', value: '+51 993 975 609', href: 'tel:+51993975609' },
    { icon: Phone, label: 'WhatsApp', value: '+51 993 975 609', href: 'https://wa.me/51993975609' },
    { icon: MapPin, label: 'Dirección', value: 'Jr. 28 de julio 1523-Dpto 402, Huánuco, Perú', href: null },
    { icon: Clock, label: 'Horario', value: 'Lun - Vie: 9:00 - 18:00', href: null },
];

const services = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'desarrollo-web', label: 'Desarrollo Web a Medida' },
    { value: 'soluciones', label: 'Soluciones Informáticas' },
    { value: 'consultoria', label: 'Consultoría TI' },
    { value: 'soporte', label: 'Soporte Técnico' },
    { value: 'sipaa', label: 'Demo SIPAA' },
    { value: 'otro', label: 'Otro' },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Ingresa un email válido';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
        });
    };

    return (
        <motion.div
            className="contact-page"
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
                    <div className="contact-hero-grid">
                        <motion.div
                            className="page-hero-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1>Contáctanos</h1>
                            <p className="lead">
                                Estamos listos para ayudarte a transformar tu negocio.
                                Cuéntanos sobre tu proyecto.
                            </p>
                        </motion.div>
                        <motion.div
                            className="contact-hero-illustration"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <SupportIllustration size={340} className="illustration-float" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Información de Contacto</h2>
                            <p>
                                Ponte en contacto con nosotros para discutir tu próximo proyecto
                                o resolver cualquier consulta.
                            </p>

                            <ul className="contact-list">
                                {contactInfo.map((item, index) => (
                                    <li key={index} className="contact-item">
                                        <div className="contact-icon">
                                            <item.icon size={22} />
                                        </div>
                                        <div className="contact-details">
                                            <span className="contact-label">{item.label}</span>
                                            {item.href ? (
                                                <a href={item.href} className="contact-value">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="contact-value">{item.value}</span>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="contact-cta">
                                <p>¿Prefieres una llamada?</p>
                                <Button href="tel:+51993975609" variant="outline" icon={<Phone size={18} />}>
                                    Llámanos ahora
                                </Button>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {isSuccess ? (
                                <div className="success-message">
                                    <div className="success-icon">
                                        <CheckCircle size={48} />
                                    </div>
                                    <h3>¡Mensaje Enviado!</h3>
                                    <p>
                                        Gracias por contactarnos. Nos pondremos en contacto contigo
                                        lo antes posible.
                                    </p>
                                    <Button onClick={() => setIsSuccess(false)} variant="outline">
                                        Enviar otro mensaje
                                    </Button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <h2>Envíanos un mensaje</h2>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className={`form-input ${errors.name ? 'error' : ''}`}
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Tu nombre"
                                            />
                                            {errors.name && <span className="form-error">{errors.name}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className={`form-input ${errors.email ? 'error' : ''}`}
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="tu@email.com"
                                            />
                                            {errors.email && <span className="form-error">{errors.email}</span>}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-input"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+51 999 999 999"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="company" className="form-label">
                                                Empresa
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="form-input"
                                                value={formData.company}
                                                onChange={handleChange}
                                                placeholder="Nombre de tu empresa"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="service" className="form-label">
                                            Servicio de interés
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="form-select"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            {services.map((service) => (
                                                <option key={service.value} value={service.value}>
                                                    {service.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message" className="form-label">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className={`form-textarea ${errors.message ? 'error' : ''}`}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Cuéntanos sobre tu proyecto..."
                                            rows={5}
                                        />
                                        {errors.message && <span className="form-error">{errors.message}</span>}
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        fullWidth
                                        loading={isSubmitting}
                                        icon={<Send size={18} />}
                                        iconPosition="right"
                                    >
                                        Enviar Mensaje
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
