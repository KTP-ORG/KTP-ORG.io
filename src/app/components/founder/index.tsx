'use client';

import React from 'react';
import { Linkedin, Github, Twitter, Mail, Award, Briefcase, GraduationCap, Users } from 'lucide-react';

interface SocialLink {
    platform: 'linkedin' | 'github' | 'twitter' | 'email';
    url: string;
}

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    experience: string;
    expertise: string[];
    achievements: string[];
    education?: string;
    previousCompanies?: string[];
    socialLinks?: SocialLink[];
    imageUrl?: string;
}

interface TeamMemberCardProps extends TeamMember { }

interface FoundingTeamProps {
    teamIntro?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
    name,
    role,
    bio,
    experience,
    expertise,
    achievements,
    education,
    previousCompanies,
    socialLinks,
    imageUrl
}) => {
    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case 'linkedin': return <Linkedin className="w-5 h-5" />;
            case 'github': return <Github className="w-5 h-5" />;
            case 'twitter': return <Twitter className="w-5 h-5" />;
            case 'email': return <Mail className="w-5 h-5" />;
            default: return <Mail className="w-5 h-5" />;
        }
    };

    const initials = name.split(' ').map(n => n[0]).join('');

    return (
        <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-600/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden group hover:scale-[1.02]">
            {/* Header Section */}
            <div className="p-8 text-center border-b border-gray-600/40">
                {/* Profile Image/Avatar */}
                <div className="relative mb-6">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300"
                        />
                    ) : (
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto border-4 border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110">
                            <span className="text-2xl font-bold text-white">{initials}</span>
                        </div>
                    )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-purple-400 font-semibold text-lg mb-4">{role}</p>

                {/* Social Links */}
                {socialLinks && socialLinks.length > 0 && (
                    <div className="flex justify-center space-x-3">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-700/50 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-300 hover:text-white"
                            >
                                {getSocialIcon(link.platform)}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-6">
                {/* Bio */}
                <div>
                    <p className="text-gray-300 leading-relaxed text-sm">{bio}</p>
                </div>

                {/* Experience */}
                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        <h4 className="text-sm font-semibold text-white">Experience</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{experience}</p>
                </div>

                {/* Education */}
                {education && (
                    <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <GraduationCap className="w-4 h-4 text-purple-300" />
                            <h4 className="text-sm font-semibold text-white">Education</h4>
                        </div>
                        <p className="text-gray-100 text-sm">{education}</p>
                    </div>
                )}

                {/* Previous Companies */}
                {previousCompanies && previousCompanies.length > 0 && (
                    <div>
                        <div className="flex items-center space-x-2 mb-3">
                            <Users className="w-4 h-4 text-purple-300" />
                            <h4 className="text-sm font-semibold text-white">Previous Companies</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {previousCompanies.map((company, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-600/50 text-gray-100 rounded text-xs"
                                >
                                    {company}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Expertise */}
                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <Award className="w-4 h-4 text-purple-300" />
                        <h4 className="text-sm font-semibold text-white">Expertise</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {expertise.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-purple-500/25 text-purple-200 rounded-full text-xs font-medium border border-purple-500/40 hover:border-purple-400/60 transition-colors duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Key Achievements */}
                <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                        {achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-100 text-xs leading-relaxed">{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const FoundingTeam: React.FC<FoundingTeamProps> = ({
    teamIntro = "Our founding team brings together decades of experience from leading technology companies, with a proven track record of building and scaling successful products that serve millions of users worldwide."
}) => {
    const teamMembers: TeamMember[] = [
        {
            name: "Sarah Chen",
            role: "CEO & Co-Founder",
            bio: "Visionary leader with 15+ years in automotive software and AI systems. Previously led engineering teams of 200+ at Tesla, driving innovation in autonomous vehicle technology.",
            experience: "15+ years in AI/ML and automotive software engineering",
            education: "MS Computer Science, Stanford University",
            previousCompanies: ["Tesla", "Google", "Apple"],
            expertise: ["AI/ML Strategy", "Product Leadership", "Team Building", "Automotive Tech", "Startup Scaling"],
            achievements: [
                "Led development of Tesla's Autopilot AI systems serving 1M+ vehicles",
                "Scaled engineering organization from 20 to 200+ engineers",
                "Published 15+ patents in autonomous vehicle technology",
                "Raised $50M+ in venture funding across 3 startups"
            ],
            socialLinks: [
                { platform: 'linkedin', url: '#' },
                { platform: 'twitter', url: '#' },
                { platform: 'email', url: 'mailto:sarah@techflow.ai' }
            ]
        },
        {
            name: "Marcus Rodriguez",
            role: "CTO & Co-Founder",
            bio: "Expert systems architect with deep expertise in distributed computing and cloud infrastructure. Former Senior Engineer at Google Cloud, architecting systems serving billions of users.",
            experience: "12+ years in distributed systems and cloud architecture",
            education: "PhD Computer Science, MIT",
            previousCompanies: ["Google Cloud", "Amazon Web Services", "Microsoft Azure"],
            expertise: ["Cloud Architecture", "Distributed Systems", "DevOps", "Kubernetes", "Security"],
            achievements: [
                "Architected Google Cloud systems serving 1B+ daily requests",
                "Led migration of 500+ enterprise customers to cloud infrastructure",
                "Created open-source tools with 100K+ GitHub stars",
                "Speaker at 20+ major tech conferences worldwide"
            ],
            socialLinks: [
                { platform: 'linkedin', url: '#' },
                { platform: 'github', url: '#' },
                { platform: 'email', url: 'mailto:marcus@techflow.ai' }
            ]
        },
        {
            name: "Aisha Patel",
            role: "Head of Product",
            bio: "Product strategy expert with a proven track record in fintech and developer tools. Former Product Lead at Stripe, launching payment solutions used by 2M+ businesses globally.",
            experience: "10+ years in product management and fintech",
            education: "MBA Harvard Business School, BS Engineering Stanford",
            previousCompanies: ["Stripe", "Square", "PayPal", "Airbnb"],
            expertise: ["Product Strategy", "User Experience", "Market Research", "Growth", "Fintech"],
            achievements: [
                "Launched Stripe products serving 2M+ businesses globally",
                "Drove 300% user growth and $100M+ in additional revenue",
                "Led product teams of 50+ designers and engineers",
                "Recognized as 'Top 40 Under 40' by Fortune Magazine"
            ],
            socialLinks: [
                { platform: 'linkedin', url: '#' },
                { platform: 'twitter', url: '#' },
                { platform: 'email', url: 'mailto:aisha@techflow.ai' }
            ]
        }
    ];

    const teamStats = [
        { value: "45+", label: "Combined Years Experience" },
        { value: "3B+", label: "Users Impacted Previously" },
        { value: "5", label: "Successful Exits" },
        { value: "25+", label: "Patents Filed" }
    ];

    return (
        <section id="team" className="py-24 px-6 bg-black relative">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-800/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 bg-purple-600/15 border border-purple-500/30 rounded-full px-6 py-3 text-sm backdrop-blur-sm mb-8">
                        <Users className="w-4 h-4 text-purple-300" />
                        <span className="text-purple-200 font-medium">Our Team</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                        <span className='text-white'> Meet our </span> <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Founding Team</span>
                    </h2>

                    <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-12">
                        {teamIntro}
                    </p>

                    {/* Team Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {teamStats.map((stat, index) => (
                            <div key={index} className="bg-black/40 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                                <div className="text-3xl font-bold text-purple-300 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-200">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Members Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>

                {/* Why Our Team Section */}
                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
                    <div className="text-center mb-10">
                        <h3 className="text-4xl font-bold text-white mb-6">Why Our Team Wins</h3>
                        <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                            The perfect combination of technical expertise, business acumen, and startup experience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Proven Track Record</h4>
                            <p className="text-gray-100 text-sm leading-relaxed">
                                Multiple successful exits, billions in revenue generated, and millions of users served across previous ventures
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Complementary Skills</h4>
                            <p className="text-gray-100 text-sm leading-relaxed">
                                Technical depth, product vision, and business strategy perfectly balanced across our founding team
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="w-8 h-8 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">Industry Expertise</h4>
                            <p className="text-gray-100 text-sm leading-relaxed">
                                Deep knowledge across AI/ML, cloud infrastructure, fintech, and developer tools from leading companies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundingTeam;