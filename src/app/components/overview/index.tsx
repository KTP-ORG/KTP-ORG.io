'use client';

import React from 'react';
import { Zap, Target, Lightbulb, TrendingUp, Users, Shield } from 'lucide-react';

interface ProblemSolutionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    stats?: {
        value: string;
        label: string;
    };
}

interface CompanyOverviewProps {
    companyName?: string;
    foundedYear?: string;
    location?: string;
    industry?: string;
}

const ProblemSolutionCard: React.FC<ProblemSolutionCardProps> = ({
    icon,
    title,
    description,
    gradient,
    stats
}) => {
    return (
        <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50 hover:border-purple-500/50 transition-all duration-500 group hover:scale-[1.02]">
            <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-100 transition-colors duration-300">
                {title}
            </h3>

            <p className="text-gray-100 leading-relaxed text-lg mb-6">
                {description}
            </p>

            {stats && (
                <div className="border-t border-gray-600/50 pt-4">
                    <div className="text-3xl font-bold text-purple-400 mb-1">{stats.value}</div>
                    <div className="text-sm text-gray-400">{stats.label}</div>
                </div>
            )}
        </div>
    );
};

const CompanyOverview: React.FC<CompanyOverviewProps> = ({
    companyName = "TechFlow",
    foundedYear = "2023",
    location = "San Francisco, CA",
    industry = "AI & Development Tools"
}) => {
    const companyData = {
        problem: {
            title: "The Development Crisis",
            description: "Startups waste 60% of their development time on infrastructure setup, deployment complexities, and manual processes. Traditional development workflows are fragmented, leading to delayed launches and increased costs that can kill promising ventures.",
            stats: { value: "60%", label: "Time Wasted on Setup" }
        },
        solution: {
            title: "AI-Powered Automation",
            description: "TechFlow unifies the entire development lifecycle with intelligent automation. Our platform handles infrastructure provisioning, code optimization, automated testing, and deployment pipelines, allowing teams to focus purely on innovation.",
            stats: { value: "10x", label: "Faster Development" }
        },
        value: {
            title: "Unprecedented Efficiency",
            description: "Transform your startup's trajectory with our comprehensive platform. Reduce time-to-market by 70%, cut infrastructure costs by 50%, and scale seamlessly from MVP to enterprise-level applications with zero configuration overhead.",
            stats: { value: "70%", label: "Faster Time-to-Market" }
        }
    };

    const achievements = [
        { icon: <Users className="w-6 h-6" />, value: "500+", label: "Startups Powered" },
        { icon: <TrendingUp className="w-6 h-6" />, value: "$50M+", label: "Revenue Generated" },
        { icon: <Shield className="w-6 h-6" />, value: "99.9%", label: "Security Rating" },
        { icon: <Zap className="w-6 h-6" />, value: "24/7", label: "Support Coverage" }
    ];

    return (
        <section id="about" className="py-24 px-6 bg-black relative">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 bg-purple-600/15 border border-purple-500/30 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
                        <span className="text-purple-200 font-medium">Company Overview</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                        <span className='text-white'>Revolutionizing</span> <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Startup</span> <span className="bg-gradient-to-r from-purple-400 to-white-600 bg-clip-text text-transparent">Development</span>
                    </h2>

                    <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-12">
                        {companyName} is transforming how startups build and scale technology. Founded in {foundedYear} and based in {location},
                        we're pioneering the future of {industry.toLowerCase()} with our comprehensive automation platform.
                    </p>

                    {/* Company Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                                    {achievement.icon}
                                </div>
                                <div className="text-2xl font-bold text-purple-400 mb-1">{achievement.value}</div>
                                <div className="text-sm text-gray-400">{achievement.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Problem, Solution, Value Proposition */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    <ProblemSolutionCard
                        icon={<Zap className="w-8 h-8 text-white" />}
                        title={companyData.problem.title}
                        description={companyData.problem.description}
                        gradient="bg-gradient-to-r from-red-500 to-orange-500"
                        stats={companyData.problem.stats}
                    />

                    <ProblemSolutionCard
                        icon={<Lightbulb className="w-8 h-8 text-white" />}
                        title={companyData.solution.title}
                        description={companyData.solution.description}
                        gradient="bg-gradient-to-r from-purple-500 to-purple-700"
                        stats={companyData.solution.stats}
                    />

                    <ProblemSolutionCard
                        icon={<Target className="w-8 h-8 text-white" />}
                        title={companyData.value.title}
                        description={companyData.value.description}
                        gradient="bg-gradient-to-r from-green-500 to-emerald-500"
                        stats={companyData.value.stats}
                    />
                </div>

                {/* What We Do Section */}
                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-white mb-6">What We Do</h3>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                            We provide an end-to-end platform that eliminates the complexity of modern software development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI Code Generation",
                                description: "Intelligent code generation and optimization powered by advanced machine learning algorithms"
                            },
                            {
                                title: "Infrastructure Automation",
                                description: "Automated provisioning, scaling, and management of cloud infrastructure across multiple providers"
                            },
                            {
                                title: "Deployment Pipelines",
                                description: "Continuous integration and deployment with zero-configuration setup and intelligent rollback capabilities"
                            },
                            {
                                title: "Security & Compliance",
                                description: "Enterprise-grade security built-in with automated compliance monitoring and threat detection"
                            },
                            {
                                title: "Performance Analytics",
                                description: "Real-time monitoring and analytics with predictive insights and automated optimization"
                            },
                            {
                                title: "Team Collaboration",
                                description: "Integrated development environment with real-time collaboration and project management tools"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-500/40 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                                <p className="text-gray-100 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyOverview;