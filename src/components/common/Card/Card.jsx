import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({
    children,
    variant = 'default',
    hover = true,
    glow = false,
    padding = 'md',
    className = '',
    onClick,
    ...props
}) => {
    const classNames = [
        'card',
        `card-${variant}`,
        `card-padding-${padding}`,
        hover && 'card-hover',
        glow && 'card-glow',
        onClick && 'card-clickable',
        className
    ].filter(Boolean).join(' ');

    return (
        <motion.div
            className={classNames}
            onClick={onClick}
            whileHover={hover ? { y: -8 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'glass', 'solid', 'gradient']),
    hover: PropTypes.bool,
    glow: PropTypes.bool,
    padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Card;
