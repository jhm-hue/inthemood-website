import React from 'react';

const Moodboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Moodboard & Inspiration</h1>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Visual inspiration, behind-the-scenes moments, and latest news from our creative journey.
          </p>

          {/* News Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">March 15, 2024</div>
                  <h3 className="font-semibold text-lg mb-2">Project Update</h3>
                  <p className="text-gray-600">Latest updates from our current production...</p>
                </div>
              </article>
              
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">March 10, 2024</div>
                  <h3 className="font-semibold text-lg mb-2">Award Recognition</h3>
                  <p className="text-gray-600">We're honored to receive recognition for...</p>
                </div>
              </article>
              
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">March 5, 2024</div>
                  <h3 className="font-semibold text-lg mb-2">New Partnership</h3>
                  <p className="text-gray-600">Excited to announce our collaboration with...</p>
                </div>
              </article>
            </div>
          </div>

          {/* Inspiration Gallery */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Visual Inspiration</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moodboard;