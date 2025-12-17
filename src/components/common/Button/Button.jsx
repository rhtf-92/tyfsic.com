import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    disabled = false,
    loading = false,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    className = '',
    type = 'button',
    ...props
}) => {
    const classNames = [
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        fullWidth && 'btn-full',
        loading && 'btn-loading',
        className
    ].filter(Boolean).join(' ');

    const content = (
        <>
            {loading && <span className="btn-spinner" />}
            {icon && iconPosition === 'left' && !loading && (
                <span className="btn-icon btn-icon-left">{icon}</span>
            )}
            <span className="btn-text">{children}</span>
            {icon && iconPosition === 'right' && !loading && (
                <span className="btn-icon btn-icon-right">{icon}</span>
            )}
        </>
    );

    const motionProps = {
        whileHover: disabled ? {} : { scale: 1.02 },
        whileTap: disabled ? {} : { scale: 0.98 },
        transition: { duration: 0.2 }
    };

    if (href) {
        return (
            <motion.a
                href={href}
                className={classNames}
                {...motionProps}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            className={classNames}
            onClick={onClick}
            disabled={disabled || loading}
            {...motionProps}
            {...props}
        >
            {content}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'outline']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    href: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
