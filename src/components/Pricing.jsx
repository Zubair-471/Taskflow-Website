import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 50 tasks",
        "Basic task organization",
        "Mobile app access",
        "Email support",
        "1GB storage"
      ],
      notIncluded: [
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "secondary",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "For professionals who need more power",
      features: [
        "Unlimited tasks",
        "Advanced task organization",
        "Team collaboration (up to 5 members)",
        "Analytics & insights",
        "Priority support",
        "10GB storage",
        "Custom integrations",
        "Time tracking"
      ],
      notIncluded: [
        "Advanced team features"
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "primary",
      popular: true
    },
    {
      name: "Team",
      price: "$29",
      period: "per month",
      description: "For teams that need to scale",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Advanced team analytics",
        "Role-based permissions",
        "SSO integration",
        "API access",
        "100GB storage",
        "Dedicated support"
      ],
      notIncluded: [],
      buttonText: "Contact Sales",
      buttonVariant: "primary",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for you. All plans include a 14-day free trial with no commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div key={index} className="scroll-animate opacity-0">
              <div className={`relative bg-white p-8 rounded-2xl border-2 h-full flex flex-col ${
                plan.popular 
                  ? 'border-primary-500 shadow-xl scale-105' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              } transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-900 mb-3 mt-6">Not included:</h4>
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 mt-auto ${
                  plan.buttonVariant === 'primary' 
                    ? 'btn-primary' 
                    : 'btn-secondary'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-animate opacity-0">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your enterprise?
          </p>
          <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Contact our sales team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
