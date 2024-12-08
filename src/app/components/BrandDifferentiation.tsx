import React from 'react';
import { Inter_Tight } from 'next/font/google';

const inter = Inter_Tight({ subsets: ['latin'] });

const BrandDifferentiation: React.FC = () => {
  return (
    <section className={`${inter.className} px-6 py-12 bg-white`}>
      <h2 className="text-3xl font-light mb-8 text-zinc-600 text-center my-10 bottom-14"> {/* Apply your desired color */}
        What makes our brand different
      </h2>
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Desktop Layout */}
        <div className="text-left"> {/* Align text to the left */}
          <div className="text-2xl mb-4 text-center">🚚</div>
          <h3 className="font-light text-2xl mb-2">Next day as standard</h3>
          <p className="text-lg text-gray-600">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>
        <div className="text-left"> {/* Align text to the left */}
          <div className="text-2xl mb-4 text-center">🎨</div>
          <h3 className="font-light text-2xl mb-2">Made by true artisans</h3>
          <p className="text-lg text-gray-600">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>
        <div className="text-left"> {/* Align text to the left */}
          <div className="text-2xl mb-4 text-center">💸</div>
          <h3 className="font-light text-2xl mb-2">Unbeatable prices</h3>
          <p className="text-lg text-gray-600">
            For our materials and quality you won’t find better prices anywhere.
          </p>
        </div>
        <div className="text-left"> {/* Align text to the left */}
          <div className="text-2xl mb-4 text-center">♻️</div>
          <h3 className="font-light text-2xl mb-2">Recycled packaging</h3>
          <p className="text-lg text-gray-600">
            We use 100% recycled packaging to ensure our footprint is manageable.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:hidden">
        {/* Mobile Layout */}
        <div className="text-center">
          <div className="text-2xl mb-4">🚚</div>
          <h3 className="font-semibold text-lg mb-2">Next day as standard</h3>
          <p className="text-sm text-gray-600">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-4">🎨</div>
          <h3 className="font-semibold text-lg mb-2">Made by true artisans</h3>
          <p className="text-sm text-gray-600">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-4">💸</div>
          <h3 className="font-semibold text-lg mb-2">Unbeatable prices</h3>
          <p className="text-sm text-gray-600">
            For our materials and quality you won’t find better prices anywhere.
          </p>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-4">♻️</div>
          <h3 className="font-semibold text-lg mb-2">Recycled packaging</h3>
          <p className="text-sm text-gray-600">
            We use 100% recycled packaging to ensure our footprint is manageable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandDifferentiation;