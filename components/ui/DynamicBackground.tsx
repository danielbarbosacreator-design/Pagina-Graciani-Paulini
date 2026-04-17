import React from 'react';

export const DynamicBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Animated Mesh Gradients - Super Vibrant Gold */}
            <div className="absolute inset-0">
                {/* Gold Glow 1 */}
                <div className="absolute top-[-25%] left-[-15%] w-[100%] h-[100%] bg-[#C5A059]/15 rounded-full blur-[120px] animate-pulse-slow" />

                {/* Gold Glow 2 */}
                <div className="absolute bottom-[-25%] right-[-15%] w-[100%] h-[100%] bg-[#937841]/20 rounded-full blur-[150px] animate-pulse-slower" />

                {/* Center Glow Focus */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#E0C882]/5 rounded-full blur-[100px] animate-pulse-slow" />
            </div>

            {/* Subtle Gold Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        </div>
    );
};
