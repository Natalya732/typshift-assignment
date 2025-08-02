export const BackgroundCTAAnimations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-16 right-16 w-32 h-32 bg-white/5 rounded-full animate-bounce [animation-duration:10s] blur-md"></div>
      <div className="absolute bottom-24 left-12 w-40 h-40 bg-white/3 rounded-full animate-pulse [animation-duration:8s] blur-lg"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-white/7 rounded-full animate-ping [animation-duration:12s] blur-sm"></div>

      <div className="absolute top-2/3 right-1/3 w-28 h-28 bg-white/4 rounded-full animate-bounce [animation-duration:14s] [animation-delay:2s] blur-md"></div>
      <div className="absolute bottom-1/2 left-1/3 w-20 h-20 bg-white/8 rounded-full animate-pulse [animation-duration:9s] [animation-delay:3s] blur-sm"></div>
      <div className="absolute top-1/4 right-1/2 w-16 h-16 bg-white/6 rounded-full animate-ping [animation-duration:7s] [animation-delay:1s]"></div>

      <div className="absolute bottom-1/3 right-20 w-12 h-12 bg-white/10 rounded-full animate-bounce [animation-duration:11s] [animation-delay:4s]"></div>
      <div className="absolute top-1/2 left-16 w-14 h-14 bg-white/5 rounded-full animate-pulse [animation-duration:13s] [animation-delay:2s] blur-xs"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/2 via-transparent to-white/1 animate-pulse [animation-duration:15s]"></div>
    </div>
  );
};
