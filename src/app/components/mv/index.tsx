'use client';

import React from 'react';
import { Heart, Eye, Star, Target, Compass, Lightbulb, Globe, Shield, Zap, Users } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface MissionVisionProps {
  companyName?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-600/40 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group hover:scale-[1.02]">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300">
        {title}
      </h4>
      <p className="text-gray-100 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const MissionVision: React.FC<MissionVisionProps> = ({
  companyName = "TechFlow"
}) => {
  const missionStatement = `To democratize cutting-edge technology and empower every startup to build world-class products without the complexity of traditional enterprise solutions. We believe that innovation should not be limited by technical barriers or resource constraints.`;
  
  const visionStatement = `A world where brilliant ideas can be transformed into reality instantly, where startups can compete with enterprise giants from day one, and where technology serves as an enabler rather than a barrier to entrepreneurial success.`;

  const coreValues = [
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible, embracing emerging technologies and pioneering new approaches to solve complex problems."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Developer Experience",
      description: "Every decision we make is filtered through the lens of developer experience. We build tools that developers love to use and that make their lives easier."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Transparency",
      description: "We believe in open communication, clear processes, and honest relationships with our customers, partners, and each other."
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Results-Driven",
      description: "We measure our success by the success of our customers. Every feature and decision is made with clear, measurable outcomes in mind."
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Impact",
      description: "We're building technology that can positively impact startups and developers around the world, regardless of their location or background."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Continuous Learning",
      description: "We foster a culture of learning and growth, encouraging experimentation and learning from both successes and failures."
    }
  ];

  const impactMetrics = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Our Goals",
      metrics: [
        { value: "1M+", label: "Developers Empowered by 2030" },
        { value: "10K+", label: "Startups Successfully Launched" },
        { value: "50+", label: "Countries with Active Users" }
      ]
    },
    {
      icon: <Compass className="w-8 h-8 text-white" />,
      title: "Our Impact",
      metrics: [
        { value: "70%", label: "Reduction in Time-to-Market" },
        { value: "50%", label: "Lower Infrastructure Costs" },
        { value: "10x", label: "Faster Development Cycles" }
      ]
    }
  ];

  return (
    <section id="mission" className="py-24 px-6 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-600/10 border border-purple-500/20 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
            <Heart className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300">Our Purpose</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className='text-white'> Mission </span> <span className="bg-gradient-to-r from-purple-400 to-white-800 bg-clip-text text-transparent">&</span> <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Vision</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Driving the future of technology with purpose, passion, and a commitment to empowering the next generation of innovators
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-purple-100 transition-colors duration-300">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {missionStatement}
            </p>
            <div className="border-t border-gray-600/50 pt-6">
              <p className="text-purple-400 font-semibold text-sm">
                "Technology should amplify human potential, not complicate it."
              </p>
              <p className="text-gray-400 text-sm mt-2">— {companyName} Team</p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-purple-100 transition-colors duration-300">
              Our Vision
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {visionStatement}
            </p>
            <div className="border-t border-gray-600/50 pt-6">
              <p className="text-purple-400 font-semibold text-sm">
                "Every great idea deserves the chance to change the world."
              </p>
              <p className="text-gray-400 text-sm mt-2">— Vision 2030</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">Core Values</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every product we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>

        {/* Impact & Goals */}
        <div className="grid lg:grid-cols-2 gap-12">
          {impactMetrics.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/20">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                  {section.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{section.title}</h3>
              </div>

              <div className="space-y-6">
                {section.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm border border-gray-600/30 rounded-xl hover:border-purple-400/50 transition-all duration-300">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">{metric.value}</div>
                      <div className="text-sm text-gray-300">{metric.label}</div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
            <h3 className="text-4xl font-bold text-white mb-6">Join Our Mission</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of the revolution that's transforming how startups build and scale technology. 
              Together, we're creating the future of development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-white">
                Start Building Today
              </button>
              <button className="backdrop-blur-sm bg-white/5 border border-white/10 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;