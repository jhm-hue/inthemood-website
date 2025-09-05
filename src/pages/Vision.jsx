import React from 'react';

const Vision = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Our Vision</h1>
          
          <div className="prose prose-lg mx-auto mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At INTHEMOOD PICTURES, we believe in the transformative power of visual storytelling. 
              Our vision is to create authentic, compelling narratives that resonate with audiences 
              and leave lasting impressions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                We are dedicated to producing high-quality films and series that explore 
                the human experience through innovative cinematography, compelling narratives, 
                and authentic character development.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="text-gray-700 space-y-2">
                <li>• Authenticity in storytelling</li>
                <li>• Innovation in production techniques</li>
                <li>• Collaboration with talented artists</li>
                <li>• Commitment to quality</li>
                <li>• Respect for diverse perspectives</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Team Member</h3>
                <p className="text-gray-600">Role</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Team Member</h3>
                <p className="text-gray-600">Role</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">Team Member</h3>
                <p className="text-gray-600">Role</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;