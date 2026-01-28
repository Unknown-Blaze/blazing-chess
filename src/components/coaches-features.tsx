'use client';

/**
 * Blazing Chess Academy - Coaches Features Section
 * Highlights: Coach selection, trial class, ages, certifications
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function CoachesFeatures() {
  const features = [
    {
      icon: '👥',
      title: 'Choose Your Coach',
      description: 'Meet our passionate young coaches (ages 20-26) and select the one that best fits your learning style.',
      highlight: 'Personalized match',
    },
    {
      icon: '📚',
      title: 'Free Trial Class',
      description: 'Try your first class for free. Experience our teaching style and see if it\'s the right fit for you.',
      highlight: 'Zero commitment',
    },
    {
      icon: '🎯',
      title: 'All Ages Welcome',
      description: 'From young beginners (age 4) to adults (age 80+), we teach everyone. Chess has no age limit!',
      highlight: 'Ages 4-80+',
    },
    {
      icon: '✓',
      title: 'MoE Certified Coaches',
      description: 'All our coaches are Ministry of Education certified, ensuring professional and quality instruction.',
      highlight: 'Certified excellence',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Our Coaches
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn from dedicated young professionals committed to bringing out your best
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-950 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <CardHeader>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
                <CardDescription className="text-amber-400 font-semibold text-sm mt-2">
                  {feature.highlight}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coach Profile Showcase */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-950 rounded-2xl p-8 md:p-12 border border-amber-500/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Young, Passionate Coaches</h3>
            <p className="text-gray-400">Aged 20-26, bringing energy and modern teaching methods</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h4 className="text-white font-bold mb-2">Strategic Thinkers</h4>
              <p className="text-gray-400 text-sm">Coaches who understand modern chess strategy and can explain complex concepts simply</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h4 className="text-white font-bold mb-2">Energetic & Patient</h4>
              <p className="text-gray-400 text-sm">Patient instructors who adapt their teaching to each student&apos;s pace and learning style</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎓</div>
              <h4 className="text-white font-bold mb-2">MoE Certified</h4>
              <p className="text-gray-400 text-sm">Officially certified educators committed to structured learning and student development</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg border border-amber-500/10">
            <div className="text-3xl font-bold text-amber-400 mb-2">20-26</div>
            <div className="text-sm text-gray-400">Coach Age Range</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg border border-amber-500/10">
            <div className="text-3xl font-bold text-amber-400 mb-2">4-80</div>
            <div className="text-sm text-gray-400">Student Age Range</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg border border-amber-500/10">
            <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
            <div className="text-sm text-gray-400">MoE Certified</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-gray-900 to-gray-950 rounded-lg border border-amber-500/10">
            <div className="text-3xl font-bold text-amber-400 mb-2">Free</div>
            <div className="text-sm text-gray-400">Trial Class</div>
          </div>
        </div>
      </div>
    </section>
  );
}
