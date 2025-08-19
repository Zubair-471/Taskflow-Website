import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container-max">
        <div className="text-center scroll-animate opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of teams who have already streamlined their workflow with TaskFlow. 
            Start your free trial today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
              Schedule Demo
              <CheckCircle className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-primary-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
