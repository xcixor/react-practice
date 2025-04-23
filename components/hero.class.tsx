"use client";
import React, { Component } from "react";

type Props = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
};

class HeroClass extends Component<Props> {
  render() {
    const { title, subtitle, imageUrl, ctaText, ctaLink } = this.props;

    return (
      <div className="relative flex min-h-[600px] items-center justify-center">
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">{title}</h1>
          <p className="mb-8 text-lg md:text-xl">{subtitle}</p>
          <a
            href={ctaLink}
            className="hover:bg-opacity-90 inline-block rounded-full bg-white px-8 py-3 font-semibold text-black transition-all duration-300"
          >
            {ctaText}
          </a>
        </div>
      </div>
    );
  }
}

export default HeroClass;
