import React from 'react'

type Props = {
    title: string;
    subtitle: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
}

const Hero = ({title, subtitle, imageUrl, ctaText, ctaLink}: Props) => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8">
          {subtitle}
        </p>
        <a 
          href={ctaLink}
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
        >
          {ctaText}
        </a>
      </div>
    </div>
  )
}

export default Hero