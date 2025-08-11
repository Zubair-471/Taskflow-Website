import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
      <div className="container-max">
        <div className="text-center" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            TaskFlow
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Organize your tasks, boost your productivity, and achieve more with our intuitive task management app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center">
              Watch Demo
              <CheckCircle className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Setup in 2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
