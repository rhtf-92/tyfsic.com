import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../../components/common/Button';
import './NotFound.css';

const NotFound = () => {
    return (
        <motion.div
            className="not-found-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="not-found-background">
                <div className="gradient-orb gradient-orb-primary" />
                <div className="grid-background" />
            </div>

            <div className="container">
                <motion.div
                    className="not-found-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="not-found-code">
                        <span className="text-gradient">404</span>
                    </h1>
                    <h2>Página no encontrada</h2>
                    <p>
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                    </p>
                    <div className="not-found-buttons">
                        <Button href="/" icon={<Home size={18} />}>
                            Ir al Inicio
                        </Button>
                        <Button variant="ghost" onClick={() => window.history.back()} icon={<ArrowLeft size={18} />}>
                            Volver Atrás
                        </Button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default NotFound;
