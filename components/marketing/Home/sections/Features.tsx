import React from 'react';
import { Leaf, Heart, Truck, Gift, Award, NotebookPen } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const FeaturesBar: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <NotebookPen className="w-6 h-6 text-purple-400" />,
      title: "Premium Quality",
      subtitle: "Paper",
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      title: "Kid Friendly",
      subtitle: "& Safe",
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400 fill-pink-100" />,
      title: "Unique Designs",
      subtitle: "for Everyone",
    },
    {
      icon: <Truck className="w-6 h-6 text-purple-500" />,
      title: "Fast & Secure",
      subtitle: "Delivery",
    },
    {
      icon: <Gift className="w-6 h-6 text-purple-400" />,
      title: "Perfect for",
      subtitle: "Gifts",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500 fill-amber-100" />,
      title: "Loved by",
      subtitle: "Thousands",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full border border-gray-100 py-4 px-8 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 divide-gray-100 lg:divide-x">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 justify-start lg:justify-center ${
                index !== 0 ? 'lg:pl-4' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 p-2 bg-slate-50 rounded-xl">
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-gray-800 text-sm tracking-wide">
                  {feature.title}
                </span>
                <span className="text-gray-500 text-xs font-medium">
                  {feature.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;