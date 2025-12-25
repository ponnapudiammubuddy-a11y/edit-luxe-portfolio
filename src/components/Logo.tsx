import veLogo from '@/assets/ve-logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo = ({ size = 'md', animated = false }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${animated ? 'animate-logo-reveal' : ''} 
        relative flex items-center justify-center 
        transition-all duration-300 hover:scale-110`}
    >
      <img 
        src={veLogo} 
        alt="VE Edit Logo" 
        className="w-full h-full object-contain drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
      />
    </div>
  );
};

export default Logo;
