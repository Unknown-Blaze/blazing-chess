'use client';

/**
 * Blazing Chess Academy - Coaches Features Section
 * Highlights: Coach selection, trial class, ages, certifications
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function CoachesFeatures() {
  const features = [
    {
      icon: '♟️',
      title: 'Coach Selection',
      description: 'Meet coaches with teaching and tournament experience. Choose based on their expertise in opening theory, tactics, endgames and personality fit.',
      highlight: 'Personalized match',
    },
    {
      icon: '⏱️',
      title: 'Free Trial Lesson',
      description: 'Book your first lesson free. Get a feel for the coaching approach, curriculum style, and learning environment before committing.',
      highlight: 'Risk-free debut',
    },
    {
      icon: '♔',
      title: 'All Levels Coached',
      description: 'From beginner foundations (age 4) to adult competitors (age 80+). Absolute beginners to tournament-ready players. We can develop every level.',
      highlight: 'Ages 4-80+',
    },
    {
      icon: '✓',
      title: 'MoE-Certified Pros',
      description: 'All coaches hold Ministry of Education teaching certification. Professional standards, structured syllabus, proven results in tournament play.',
      highlight: 'Official credentials',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/boards_with_children_hands_owis.jpg')" }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-lg shadow-amber-200/30">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Your{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Chess Coaches
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Passionate, MoE-certified instructors with teaching and tournament experience and the patience to grow your game
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-200/40"
            >
              <CardHeader>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl text-gray-900">{feature.title}</CardTitle>
                <CardDescription className="text-amber-800 font-semibold text-sm mt-2">
                  {feature.highlight}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coach Profile Showcase */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-amber-200 shadow-lg shadow-amber-100/60">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Experienced Tournament Coaches</h3>
            <p className="text-gray-700">Young professionals (20-26) with competitive chess background and proven teaching track record</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">♞</div>
              <h4 className="text-gray-900 font-bold mb-2">Tournament Players</h4>
              <p className="text-gray-700 text-sm">Coaches with active tournament experience and competitive ratings. They know what it takes to win at every level.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📖</div>
              <h4 className="text-gray-900 font-bold mb-2">Structured Teaching</h4>
              <p className="text-gray-700 text-sm">Follow proven curricula in openings, tactics, and endgames. Clear progression from beginner to competitive play.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h4 className="text-gray-900 font-bold mb-2">Certified Educators</h4>
              <p className="text-gray-700 text-sm">All MoE certified. Professional standards, structured assessment, and accountability in student development.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-lg border border-amber-200 shadow-sm">
            <div className="text-3xl font-bold text-amber-800 mb-2">20-26</div>
            <div className="text-sm text-gray-700">Coach Age Range</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-amber-200 shadow-sm">
            <div className="text-3xl font-bold text-amber-800 mb-2">4-80</div>
            <div className="text-sm text-gray-700">Student Age Range</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-amber-200 shadow-sm">
            <div className="text-3xl font-bold text-amber-800 mb-2">100%</div>
            <div className="text-sm text-gray-700">MoE Certified</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-amber-200 shadow-sm">
            <div className="text-3xl font-bold text-amber-800 mb-2">Free</div>
            <div className="text-sm text-gray-700">Trial Class</div>
          </div>
        </div>
      </div>
    </section>
  );
}
