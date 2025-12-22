import PropTypes from 'prop-types';

/**
 * SVG Illustration: Web Development
 * Shows developer with code and web elements
 */
export const WebDevelopmentIllustration = ({ className = '', size = 300 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Background Elements */}
        <circle cx="200" cy="200" r="180" fill="url(#dev-gradient)" opacity="0.1" />

        {/* Browser Window */}
        <rect x="80" y="100" width="240" height="180" rx="12" fill="var(--color-surface-1, #f1f5f9)" />
        <rect x="80" y="100" width="240" height="30" rx="12" fill="var(--color-surface-2, #e2e8f0)" />
        <circle cx="100" cy="115" r="5" fill="#ef4444" />
        <circle cx="118" cy="115" r="5" fill="#f59e0b" />
        <circle cx="136" cy="115" r="5" fill="#22c55e" />

        {/* Code Lines */}
        <rect x="100" y="145" width="80" height="6" rx="3" fill="url(#code-gradient)" />
        <rect x="100" y="160" width="120" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" opacity="0.4" />
        <rect x="115" y="175" width="90" height="6" rx="3" fill="url(#code-gradient)" opacity="0.7" />
        <rect x="115" y="190" width="60" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" opacity="0.4" />
        <rect x="100" y="205" width="100" height="6" rx="3" fill="url(#code-gradient)" opacity="0.8" />
        <rect x="100" y="220" width="70" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" opacity="0.4" />
        <rect x="115" y="235" width="50" height="6" rx="3" fill="url(#code-gradient)" opacity="0.6" />
        <rect x="100" y="250" width="40" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" opacity="0.4" />

        {/* Preview Panel */}
        <rect x="225" y="145" width="80" height="120" rx="4" fill="var(--color-background, #ffffff)" stroke="var(--color-border, #e2e8f0)" />
        <rect x="235" y="155" width="60" height="8" rx="2" fill="url(#code-gradient)" />
        <rect x="235" y="170" width="40" height="4" rx="2" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />
        <rect x="235" y="185" width="60" height="40" rx="4" fill="url(#dev-gradient)" opacity="0.2" />
        <rect x="235" y="235" width="50" height="4" rx="2" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />
        <rect x="235" y="245" width="35" height="4" rx="2" fill="var(--color-text-muted, #94a3b8)" opacity="0.3" />

        {/* Floating Elements */}
        <rect x="60" y="290" width="50" height="50" rx="8" fill="url(#dev-gradient)" opacity="0.2" />
        <path d="M75 315 L85 305 L95 315 L85 325 Z" fill="url(#code-gradient)" />

        <circle cx="340" cy="150" r="25" fill="url(#dev-gradient)" opacity="0.15" />
        <path d="M332 150 L340 142 L348 150 L340 158 Z" fill="url(#code-gradient)" opacity="0.8" />

        <rect x="290" y="290" width="40" height="40" rx="20" fill="url(#dev-gradient)" opacity="0.2" />
        <text x="310" y="316" textAnchor="middle" fontSize="16" fill="url(#code-gradient)" fontFamily="monospace">&lt;/&gt;</text>

        <defs>
            <linearGradient id="dev-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="code-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
        </defs>
    </svg>
);

WebDevelopmentIllustration.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number
};

/**
 * SVG Illustration: Cloud Solutions
 * Shows cloud infrastructure and data flow
 */
export const CloudSolutionsIllustration = ({ className = '', size = 300 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="200" cy="200" r="180" fill="url(#cloud-gradient)" opacity="0.08" />

        {/* Main Cloud */}
        <ellipse cx="200" cy="160" rx="100" ry="60" fill="var(--color-surface-1, #f1f5f9)" />
        <ellipse cx="140" cy="180" rx="50" ry="35" fill="var(--color-surface-1, #f1f5f9)" />
        <ellipse cx="260" cy="175" rx="45" ry="32" fill="var(--color-surface-1, #f1f5f9)" />
        <ellipse cx="200" cy="190" rx="80" ry="45" fill="var(--color-surface-2, #e2e8f0)" />

        {/* Cloud Icon */}
        <circle cx="200" cy="165" r="30" fill="url(#cloud-gradient)" opacity="0.2" />
        <path d="M185 165 L200 150 L215 165 L208 165 L208 180 L192 180 L192 165 Z" fill="url(#cloud-gradient)" />

        {/* Data Flow Lines */}
        <line x1="150" y1="220" x2="150" y2="280" stroke="url(#cloud-gradient)" strokeWidth="3" strokeDasharray="8 4" opacity="0.6" />
        <line x1="200" y1="230" x2="200" y2="300" stroke="url(#cloud-gradient)" strokeWidth="3" strokeDasharray="8 4" opacity="0.6" />
        <line x1="250" y1="220" x2="250" y2="280" stroke="url(#cloud-gradient)" strokeWidth="3" strokeDasharray="8 4" opacity="0.6" />

        {/* Server Icons */}
        <rect x="125" y="280" width="50" height="35" rx="4" fill="var(--color-surface-1, #f1f5f9)" stroke="url(#cloud-gradient)" strokeWidth="2" />
        <rect x="133" y="288" width="20" height="3" rx="1" fill="url(#cloud-gradient)" />
        <rect x="133" y="295" width="15" height="3" rx="1" fill="var(--color-text-muted, #94a3b8)" />
        <circle cx="163" cy="297" r="5" fill="#22c55e" />

        <rect x="175" y="295" width="50" height="40" rx="4" fill="var(--color-surface-1, #f1f5f9)" stroke="url(#cloud-gradient)" strokeWidth="2" />
        <rect x="183" y="303" width="20" height="3" rx="1" fill="url(#cloud-gradient)" />
        <rect x="183" y="310" width="25" height="3" rx="1" fill="var(--color-text-muted, #94a3b8)" />
        <rect x="183" y="317" width="15" height="3" rx="1" fill="var(--color-text-muted, #94a3b8)" />
        <circle cx="213" cy="305" r="5" fill="#22c55e" />

        <rect x="225" y="280" width="50" height="35" rx="4" fill="var(--color-surface-1, #f1f5f9)" stroke="url(#cloud-gradient)" strokeWidth="2" />
        <rect x="233" y="288" width="20" height="3" rx="1" fill="url(#cloud-gradient)" />
        <rect x="233" y="295" width="18" height="3" rx="1" fill="var(--color-text-muted, #94a3b8)" />
        <circle cx="263" cy="297" r="5" fill="#22c55e" />

        {/* Floating Icons */}
        <circle cx="80" cy="120" r="20" fill="url(#cloud-gradient)" opacity="0.15" />
        <path d="M75 120 L80 115 L85 120 L80 125 Z" fill="url(#cloud-gradient)" />

        <circle cx="320" cy="130" r="18" fill="url(#cloud-gradient)" opacity="0.15" />
        <rect x="312" y="125" width="16" height="10" rx="2" fill="url(#cloud-gradient)" />

        <defs>
            <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
        </defs>
    </svg>
);

CloudSolutionsIllustration.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number
};

/**
 * SVG Illustration: Analytics Dashboard
 * Shows charts and data visualization
 */
export const AnalyticsIllustration = ({ className = '', size = 300 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="200" cy="200" r="180" fill="url(#analytics-gradient)" opacity="0.08" />

        {/* Dashboard Frame */}
        <rect x="60" y="80" width="280" height="220" rx="16" fill="var(--color-surface-1, #f1f5f9)" stroke="var(--color-border, #e2e8f0)" strokeWidth="2" />

        {/* Header */}
        <rect x="75" y="100" width="80" height="8" rx="4" fill="url(#analytics-gradient)" />
        <rect x="75" y="115" width="50" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />

        {/* Stats Cards */}
        <rect x="75" y="135" width="75" height="45" rx="8" fill="var(--color-background, #ffffff)" stroke="var(--color-border, #e2e8f0)" />
        <rect x="85" y="145" width="30" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />
        <text x="85" y="170" fontSize="16" fontWeight="bold" fill="url(#analytics-gradient)">+24%</text>

        <rect x="160" y="135" width="75" height="45" rx="8" fill="var(--color-background, #ffffff)" stroke="var(--color-border, #e2e8f0)" />
        <rect x="170" y="145" width="35" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />
        <text x="170" y="170" fontSize="16" fontWeight="bold" fill="url(#analytics-gradient)">1.2K</text>

        <rect x="245" y="135" width="75" height="45" rx="8" fill="var(--color-background, #ffffff)" stroke="var(--color-border, #e2e8f0)" />
        <rect x="255" y="145" width="40" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />
        <text x="255" y="170" fontSize="16" fontWeight="bold" fill="#14b8a6">98%</text>

        {/* Chart Area */}
        <rect x="75" y="195" width="165" height="90" rx="8" fill="var(--color-background, #ffffff)" stroke="var(--color-border, #e2e8f0)" />

        {/* Line Chart */}
        <polyline
            points="90,260 110,240 130,250 150,220 170,230 190,200 210,210 225,195"
            stroke="url(#analytics-gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <polygon
            points="90,260 110,240 130,250 150,220 170,230 190,200 210,210 225,195 225,270 90,270"
            fill="url(#analytics-gradient)"
            opacity="0.1"
        />

        {/* Pie Chart */}
        <circle cx="285" cy="240" r="35" fill="url(#analytics-gradient)" opacity="0.3" />
        <path d="M285 205 A35 35 0 0 1 315 255 L285 240 Z" fill="url(#analytics-gradient)" />
        <path d="M285 205 A35 35 0 0 0 255 230 L285 240 Z" fill="#14b8a6" />

        {/* Floating Elements */}
        <circle cx="350" cy="320" r="25" fill="url(#analytics-gradient)" opacity="0.15" />
        <rect x="340" y="312" width="20" height="16" rx="3" fill="url(#analytics-gradient)" />

        <circle cx="50" cy="310" r="20" fill="url(#analytics-gradient)" opacity="0.1" />

        <defs>
            <linearGradient id="analytics-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
        </defs>
    </svg>
);

AnalyticsIllustration.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number
};

/**
 * SVG Illustration: Mobile App
 * Shows mobile device with app interface
 */
export const MobileAppIllustration = ({ className = '', size = 300 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="200" cy="200" r="180" fill="url(#mobile-gradient)" opacity="0.08" />

        {/* Phone Frame */}
        <rect x="130" y="60" width="140" height="280" rx="20" fill="var(--color-surface-2, #e2e8f0)" />
        <rect x="138" y="75" width="124" height="250" rx="4" fill="var(--color-background, #ffffff)" />

        {/* Notch */}
        <rect x="175" y="65" width="50" height="6" rx="3" fill="var(--color-surface-3, #cbd5e1)" />

        {/* App Header */}
        <rect x="148" y="90" width="104" height="30" rx="4" fill="url(#mobile-gradient)" />
        <rect x="158" y="100" width="60" height="6" rx="3" fill="white" opacity="0.8" />
        <rect x="158" y="110" width="40" height="4" rx="2" fill="white" opacity="0.5" />

        {/* App Content */}
        <rect x="148" y="130" width="104" height="50" rx="8" fill="var(--color-surface-1, #f1f5f9)" />
        <circle cx="173" cy="155" r="15" fill="url(#mobile-gradient)" opacity="0.2" />
        <rect x="195" y="145" width="50" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" />
        <rect x="195" y="156" width="35" height="4" rx="2" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />

        <rect x="148" y="190" width="104" height="50" rx="8" fill="var(--color-surface-1, #f1f5f9)" />
        <circle cx="173" cy="215" r="15" fill="#14b8a6" opacity="0.2" />
        <rect x="195" y="205" width="45" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" />
        <rect x="195" y="216" width="30" height="4" rx="2" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />

        <rect x="148" y="250" width="104" height="50" rx="8" fill="var(--color-surface-1, #f1f5f9)" />
        <circle cx="173" cy="275" r="15" fill="url(#mobile-gradient)" opacity="0.2" />
        <rect x="195" y="265" width="55" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" />
        <rect x="195" y="276" width="40" height="4" rx="2" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />

        {/* Home Button */}
        <rect x="180" y="310" width="40" height="5" rx="2.5" fill="var(--color-surface-3, #cbd5e1)" />

        {/* Floating Elements */}
        <circle cx="80" cy="150" r="25" fill="url(#mobile-gradient)" opacity="0.15" />
        <rect x="70" y="142" width="20" height="16" rx="3" fill="url(#mobile-gradient)" />

        <circle cx="320" cy="250" r="20" fill="#14b8a6" opacity="0.15" />
        <path d="M315 250 L320 245 L325 250 L320 255 Z" fill="#14b8a6" />

        <rect x="290" y="120" width="40" height="40" rx="8" fill="url(#mobile-gradient)" opacity="0.1" />
        <circle cx="310" cy="140" r="10" fill="url(#mobile-gradient)" opacity="0.5" />

        <defs>
            <linearGradient id="mobile-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
        </defs>
    </svg>
);

MobileAppIllustration.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number
};

/**
 * SVG Illustration: Support & Consulting
 * Shows headset and chat elements
 */
export const SupportIllustration = ({ className = '', size = 300 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="200" cy="200" r="180" fill="url(#support-gradient)" opacity="0.08" />

        {/* Headset */}
        <path
            d="M140 200 C140 145 160 100 200 100 C240 100 260 145 260 200"
            stroke="url(#support-gradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
        />

        {/* Ear Pieces */}
        <rect x="120" y="175" width="30" height="60" rx="15" fill="url(#support-gradient)" />
        <rect x="250" y="175" width="30" height="60" rx="15" fill="url(#support-gradient)" />

        {/* Microphone */}
        <path d="M200 235 L200 270" stroke="url(#support-gradient)" strokeWidth="6" strokeLinecap="round" />
        <rect x="180" y="265" width="40" height="20" rx="10" fill="url(#support-gradient)" />

        {/* Chat Bubbles */}
        <rect x="280" y="100" width="80" height="45" rx="10" fill="var(--color-surface-1, #f1f5f9)" stroke="url(#support-gradient)" strokeWidth="2" />
        <rect x="292" y="112" width="50" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" />
        <rect x="292" y="124" width="35" height="6" rx="3" fill="var(--color-text-muted, #94a3b8)" opacity="0.5" />
        <polygon points="285,145 295,145 290,155" fill="var(--color-surface-1, #f1f5f9)" />

        <rect x="50" y="150" width="70" height="40" rx="10" fill="url(#support-gradient)" />
        <rect x="62" y="162" width="45" height="5" rx="2.5" fill="white" opacity="0.8" />
        <rect x="62" y="172" width="30" height="5" rx="2.5" fill="white" opacity="0.5" />
        <polygon points="115,170 125,170 120,180" fill="url(#support-gradient)" />

        {/* Floating Elements */}
        <circle cx="330" cy="280" r="25" fill="url(#support-gradient)" opacity="0.15" />
        <path d="M322 280 L330 272 L338 280 L330 288 Z" fill="url(#support-gradient)" />

        <circle cx="70" cy="290" r="20" fill="#14b8a6" opacity="0.15" />
        <text x="70" y="296" textAnchor="middle" fontSize="16" fill="#14b8a6">✓</text>

        <circle cx="320" cy="200" r="15" fill="url(#support-gradient)" opacity="0.2" />
        <circle cx="80" cy="100" r="18" fill="url(#support-gradient)" opacity="0.1" />

        <defs>
            <linearGradient id="support-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
        </defs>
    </svg>
);

SupportIllustration.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number
};

/**
 * SVG Illustration: Team Collaboration
 * Shows people working together
 */
export const TeamIllustration = ({ className = '', size = 300 }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="200" cy="200" r="180" fill="url(#team-gradient)" opacity="0.08" />

        {/* Central Person */}
        <circle cx="200" cy="150" r="35" fill="url(#team-gradient)" />
        <rect x="160" y="195" width="80" height="90" rx="15" fill="url(#team-gradient)" />

        {/* Left Person */}
        <circle cx="100" cy="180" r="28" fill="#14b8a6" />
        <rect x="70" y="215" width="60" height="70" rx="12" fill="#14b8a6" />

        {/* Right Person */}
        <circle cx="300" cy="180" r="28" fill="#a855f7" />
        <rect x="270" y="215" width="60" height="70" rx="12" fill="#a855f7" />

        {/* Connection Lines */}
        <line x1="135" y1="200" x2="165" y2="185" stroke="url(#team-gradient)" strokeWidth="3" strokeDasharray="6 4" opacity="0.4" />
        <line x1="265" y1="200" x2="235" y2="185" stroke="url(#team-gradient)" strokeWidth="3" strokeDasharray="6 4" opacity="0.4" />
        <line x1="100" y1="285" x2="200" y2="285" stroke="url(#team-gradient)" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
        <line x1="200" y1="285" x2="300" y2="285" stroke="url(#team-gradient)" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />

        {/* Floating Elements */}
        <rect x="60" y="100" width="35" height="35" rx="8" fill="url(#team-gradient)" opacity="0.2" />
        <rect x="70" y="110" width="15" height="15" rx="3" fill="url(#team-gradient)" opacity="0.5" />

        <circle cx="340" cy="120" r="20" fill="#14b8a6" opacity="0.2" />
        <path d="M335 120 L340 115 L345 120 L340 125 Z" fill="#14b8a6" />

        <circle cx="200" cy="340" r="25" fill="url(#team-gradient)" opacity="0.15" />
        <rect x="190" y="332" width="20" height="16" rx="3" fill="url(#team-gradient)" opacity="0.5" />

        <defs>
            <linearGradient id="team-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
        </defs>
    </svg>
);

TeamIllustration.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number
};

export default {
    WebDevelopmentIllustration,
    CloudSolutionsIllustration,
    AnalyticsIllustration,
    MobileAppIllustration,
    SupportIllustration,
    TeamIllustration
};
