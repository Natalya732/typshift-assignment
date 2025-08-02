export const BackgroundHeroAnimations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/8 rounded-full animate-bounce [animation-duration:3s] blur-sm"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse [animation-duration:3s] blur-sm"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/6 rounded-full animate-ping [animation-duration:6s]"></div>

      <div className="absolute top-1/2 left-20 w-20 h-20 bg-primary/12 rounded-full animate-bounce [animation-duration:7s] [animation-delay:2s]"></div>
      <div className="absolute bottom-1/3 right-1/2 w-28 h-28 bg-primary/7 rounded-full animate-pulse [animation-duration:9s] blur-xs"></div>
      <div className="absolute top-2/3 right-16 w-16 h-16 bg-primary/9 rounded-full animate-ping [animation-duration:4s] [animation-delay:1s]"></div>

      <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-primary/15 rounded-full animate-bounce [animation-duration:10s] [animation-delay:3s]"></div>
      <div className="absolute bottom-1/4 left-1/2 w-14 h-14 bg-primary/8 rounded-full animate-pulse [animation-duration:6s] [animation-delay:4s]"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-primary/3 animate-pulse [animation-duration:12s]"></div>
    </div>
  );
};
