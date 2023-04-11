import React from 'react';

interface ContentProps {
  title?: string;
  subtitle?: string;
  button: string;
  buttonLink?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

export default function Content({
  title = "Boost your productivity.",
  subtitle = "Start using Workflow today.",
  button = "Sign Up for free",
  buttonLink = '/',
  backgroundImage,
  backgroundColor = "bg-indigo-700",
}: ContentProps) {
  return (
    <div
      className={`${backgroundColor} bg-cover bg-no-repeat`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
      }}
    >
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          <span className="block">{title}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blsck">
          {subtitle}
        </p>
        <a
          href={buttonLink}
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 sm:w-auto"
        >
          {button}
        </a>
      </div>
    </div>
  );
}
