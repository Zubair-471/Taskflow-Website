import React from 'react';
import { Calendar, Users, BarChart3, Zap, Shield, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Task Scheduling",
      description: "Intelligent scheduling that adapts to your workflow and automatically prioritizes tasks based on deadlines and importance."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team. Share tasks, assign responsibilities, and track progress in real-time."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Get detailed insights into your productivity patterns and optimize your workflow with data-driven recommendations."
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with instant sync across all your devices."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and secure with enterprise-grade protection."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Access your tasks anywhere - web, mobile, and desktop apps available."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to organize your tasks and boost your productivity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="scroll-animate opacity-0">
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="scroll-animate opacity-0">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
