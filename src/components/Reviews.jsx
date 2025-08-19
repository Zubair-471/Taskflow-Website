import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "TaskFlow has completely transformed how our team manages projects. The collaboration features are incredible, and the analytics help us identify bottlenecks before they become problems.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      company: "Self-employed",
      content: "As a freelancer, I need to juggle multiple clients and deadlines. TaskFlow's smart scheduling feature has been a game-changer. It's like having a personal assistant that never sleeps.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      content: "The cross-platform sync is flawless. I can start a task on my phone during my commute and continue it on my desktop at work. The interface is so intuitive that our team adopted it instantly.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section id="reviews" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16 scroll-animate opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our users have to say about their experience with TaskFlow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {reviews.map((review, index) => (
            <div key={index} className="scroll-animate opacity-0">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role} at {review.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-primary-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    "{review.content}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-animate opacity-0">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5 from 10,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
