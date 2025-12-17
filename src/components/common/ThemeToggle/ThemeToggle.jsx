import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            className={`theme-toggle ${className}`}
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            title={isDark ? 'Tema claro' : 'Tema oscuro'}
        >
            <motion.div
                className="theme-toggle-icon"
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
        </motion.button>
    );
};

ThemeToggle.propTypes = {
    className: PropTypes.string
};

export default ThemeToggle;
