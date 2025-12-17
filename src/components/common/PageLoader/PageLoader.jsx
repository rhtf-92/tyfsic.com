import { motion } from 'framer-motion';
import './PageLoader.css';

const PageLoader = () => {
    return (
        <div className="page-loader">
            <motion.div
                className="page-loader-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="page-loader-spinner">
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                </div>
                <p className="page-loader-text">Cargando...</p>
            </motion.div>
        </div>
    );
};

export default PageLoader;
