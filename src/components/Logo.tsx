import veLogo from '@/assets/ve-logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo = ({ size = 'md', animated = false }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20',
    lg: 'w-40 h-40',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${animated ? 'animate-logo-reveal' : ''} 
        relative flex items-center justify-center 
        transition-all duration-500 ease-out
        hover:scale-110 hover:rotate-y-12
        [transform-style:preserve-3d] [perspective:1000px]
        group cursor-pointer`}
    >
      <img 
        src={veLogo} 
        alt="VE Edit Logo" 
        className="w-full h-full object-contain drop-shadow-[0_0_15px_hsl(var(--primary)/0.6)]
          transition-all duration-500 ease-out
          group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.8)]
          group-hover:[transform:rotateY(15deg)_rotateX(5deg)]"
      />
    </div>
  );
};

export default Logo;
