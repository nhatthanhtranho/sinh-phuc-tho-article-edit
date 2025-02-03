import React from 'react';

const SquareImage = ({ src, alt = "Image", className = "" }) => {
    return (
        <div className={`w-40 h-40 bg-gray-300 flex items-center justify-center ${className}`}>
            {src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            ) : (
                <span className="text-gray-500">Cannot load Image</span>
            )}
        </div>
    );
};

export default SquareImage;