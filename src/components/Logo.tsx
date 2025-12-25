interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo = ({ size = 'md', animated = false }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-lg',
    lg: 'w-24 h-24 text-2xl',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${animated ? 'animate-logo-reveal' : ''} 
        relative rounded-full bg-gradient-primary flex items-center justify-center 
        font-display font-bold text-primary-foreground
        glow-effect transition-all duration-300 hover:scale-110`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-50 blur-md" />
      <span className="relative z-10 tracking-tight">VE</span>
      <div 
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
      >
        <div className="w-full h-full animate-sweep" />
      </div>
    </div>
  );
};

export default Logo;
