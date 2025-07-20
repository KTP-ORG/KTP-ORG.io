'use client';

import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    Star,
    Zap,
    Globe,
    Users,
    TrendingUp,
    Sparkles,
    Lightbulb,
    Target,
    Eye,
    Heart,
    Linkedin,
    Github,
    Twitter,
    Code,
    Briefcase,
    GraduationCap
} from 'lucide-react';

// TypeScript interfaces
interface TeamMemberProps {
    name: string;
    role: string;
    bio: string;
    expertise: string[];
    image?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
}

interface CompanyOverviewProps {
    companyName: string;
    problem: string;
    solution: string;
    valueProposition: string;
}

interface MissionVisionProps {
    mission: string;
    vision: string;
    values: string[];
}

// Sample data
const companyData = {
    name: "TechFlow",
    problem: "Startups struggle with fragmented tech stacks and inefficient workflows, leading to 60% slower development cycles and increased costs.",
    solution: "An AI-powered platform that unifies development workflows, automates deployment pipelines, and provides intelligent code optimization.",
    valueProposition: "Reduce development time by 50% while maintaining enterprise-grade security and scalability."
};

const teamMembers: TeamMemberProps[] = [
    {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        bio: "Former VP of Engineering at Tesla, led teams of 200+ engineers. 15 years in automotive software and AI systems.",
        expertise: ["Leadership", "AI/ML", "Product Strategy", "Team Building"],
        linkedin: "#",
        twitter: "#"
    },
    {
        name: "Marcus Rodriguez",
        role: "CTO & Co-Founder",
        bio: "Ex-Senior Engineer at Google Cloud, architect of distributed systems serving 1B+ users. PhD in Computer Science from MIT.",
        expertise: ["Cloud Architecture", "Distributed Systems", "DevOps", "Security"],
        linkedin: "#",
        github: "#"
    },
    {
        name: "Aisha Patel",
        role: "Head of Product",
        bio: "Former Product Lead at Stripe, launched payment solutions used by 2M+ businesses. Expert in fintech and developer tools.",
        expertise: ["Product Management", "UX Design", "Market Research", "Growth Strategy"],
        linkedin: "#",
        twitter: "#"
    }
];

const missionVisionData = {
    mission: "To democratize cutting-edge technology and empower every startup to build world-class products without the complexity of traditional enterprise solutions.",
    vision: "A world where innovative ideas can be brought to life instantly, regardless of technical constraints or resource limitations.",
    values: [
        "Innovation First",
        "Developer Experience",
        "Transparency",
        "Sustainable Growth",
        "Global Impact",
        "Continuous Learning"
    ]
};

// Company Overview Component
const CompanyOverview: React.FC<CompanyOverviewProps> = ({
    companyName,
    problem,
    solution,
    valueProposition
}) => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6">
                        About <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">{companyName}</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Revolutionizing how startups build and scale their technology infrastructure
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Problem */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">The Problem</h3>
                        <p className="text-gray-300 leading-relaxed">{problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                            <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Our Solution</h3>
                        <p className="text-gray-300 leading-relaxed">{solution}</p>
                    </div>

                    {/* Value Proposition */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Value Proposition</h3>
                        <p className="text-gray-300 leading-relaxed">{valueProposition}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Team Member Card Component
const TeamMemberCard: React.FC<TeamMemberProps> = ({
    name,
    role,
    bio,
    expertise,
    linkedin,
    github,
    twitter
}) => {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
            {/* Profile Image Placeholder */}
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">{name.split(' ').map(n => n[0]).join('')}</span>
            </div>

            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{role}</p>
                <p className="text-gray-300 leading-relaxed text-sm">{bio}</p>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {expertise.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
                {linkedin && (
                    <a href={linkedin} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                        <Linkedin className="w-5 h-5 text-white" />
                    </a>
                )}
                {github && (
                    <a href={github} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                        <Github className="w-5 h-5 text-white" />
                    </a>
                )}
                {twitter && (
                    <a href={twitter} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                        <Twitter className="w-5 h-5 text-white" />
                    </a>
                )}
            </div>
        </div>
    );
};

// Founding Team Component
const FoundingTeam: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-gray-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6">
                        Meet Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Founding Team</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A diverse team of industry veterans with complementary skills and a shared vision for the future of technology
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>

                {/* Team Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                        <div className="text-gray-400">Combined Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                        <div className="text-gray-400">Previous Exits</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">1B+</div>
                        <div className="text-gray-400">Users Served Previously</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                        <div className="text-gray-400">Patents Filed</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Mission & Vision Component
const MissionVision: React.FC<MissionVisionProps> = ({ mission, vision, values }) => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6">
                        Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Purpose</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Mission */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{mission}</p>
                    </div>

                    {/* Vision */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6">
                            <Eye className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{vision}</p>
                    </div>
                </div>

                {/* Values */}
                <div className="text-center">
                    <h3 className="text-3xl font-bold mb-8 text-white">Core Values</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-purple-500/20 to-purple-700/20 border border-purple-500/30 rounded-xl p-4 hover:border-purple-400 transition-colors duration-300"
                            >
                                <span className="text-purple-300 font-semibold">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Main Startup Components Container
const StartupComponents: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <CompanyOverview companyName={'Velora'} {...companyData} />
            <FoundingTeam />
            <MissionVision {...missionVisionData} />
        </div>
    );
};

export default StartupComponents;