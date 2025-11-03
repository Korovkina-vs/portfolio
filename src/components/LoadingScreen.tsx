import { useEffect, useState } from 'react';
import Group405 from '../imports/Group405';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showPhrase, setShowPhrase] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // When reaching 100%, show the phrase
          setTimeout(() => {
            setShowPhrase(true);
          }, 300);
          // Then fade out after showing the phrase
          setTimeout(() => {
            setFadeOut(true);
          }, 2500);
          // Finally complete loading
          setTimeout(() => {
            onLoadingComplete();
          }, 3300);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-800 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 border-t-2 border-l-2 border-white w-12 h-12" />
      <div className="absolute top-8 right-8 border-t-2 border-r-2 border-white w-12 h-12" />
      <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-white w-12 h-12" />
      <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-white w-12 h-12" />

      <div className="text-center flex flex-col items-center justify-center">
        {/* Logo */}
        <div 
          className={`mb-24 w-[500px] h-[60px] ${progress < 100 ? 'animate-rock' : ''}`}
        >
          <Group405 />
        </div>

        {/* Percentage - fades out when reaching 100 */}
        <div
          className={`transition-opacity duration-500 ${
            progress >= 100 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <p className="text-white text-6xl tabular-nums" style={{ fontWeight: 600 }}>
            {progress}%
          </p>
        </div>

        {/* Phrase - fades in when reaching 100 */}
        <div
          className={`absolute transition-all duration-1000 ${
            showPhrase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-white text-3xl max-w-2xl px-6 italic" style={{ fontWeight: 500 }}>
            Cut out the excess. Create something new.
          </p>
        </div>
      </div>
    </div>
  );
}
