import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ className = '' }) => {
    return (
        <svg
            className={`logo ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 50"
            width="200"
            height="50"
            aria-label="T&F Soluciones Informáticas"
        >
            <defs>
                <linearGradient id="brand-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
            </defs>

            {/* Icon: Code brackets */}
            <g className="logo-icon" transform="translate(0, 10)">
                <path
                    d="M 12 0 L 2 15 L 12 30"
                    stroke="url(#brand-gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M 22 30 L 32 15 L 22 0"
                    stroke="url(#brand-gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="38" cy="15" r="3" fill="url(#brand-gradient)" />
            </g>

            {/* Text: T&F */}
            <text
                x="50"
                y="32"
                className="logo-text"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontSize="28"
                fontWeight="800"
            >
                T&F
            </text>

            {/* Subtext: SIC EIRL */}
            <text
                x="52"
                y="45"
                className="logo-subtext"
                fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontSize="10"
                fontWeight="500"
                letterSpacing="1"
            >
                SIC EIRL
            </text>
        </svg>
    );
};

Logo.propTypes = {
    className: PropTypes.string
};

export default Logo;
