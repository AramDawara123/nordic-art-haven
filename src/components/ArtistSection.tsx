
import React from 'react';
import { Palette, Award, Users, ArrowRight, Star, MapPin } from 'lucide-react';

const ArtistSection = () => {
  const achievements = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "20+ Years",
      description: "Of artistic mastery and innovation",
      color: "from-primary to-nordic-forest"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "50+ Exhibitions",
      description: "Across Scandinavia and Europe",
      color: "from-secondary to-nordic-sage"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "200+ Students",
      description: "Inspired and mentored to excellence",
      color: "from-nordic-sky to-nordic-deep"
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="space-y-8 lg:order-1">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium border border-primary/20">
              <Star className="w-4 h-4 fill-current" />
              <span>Featured Artist</span>
            </div>
            
            {/* Title Section */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-nordic-charcoal via-primary to-nordic-forest bg-clip-text text-transparent">
                  Astrid Nordström
                </span>
              </h2>
              <div className="flex items-center gap-2 text-nordic-stone">
                <MapPin className="w-4 h-4" />
                <span className="text-lg font-medium">Contemporary Nordic Artist</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-nordic-stone">
                Born and raised in the breathtaking landscapes of northern Norway, Astrid draws inspiration 
                from the ever-changing Nordic seasons and the profound stillness of Arctic winters.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Her contemporary approach creates a unique dialogue between past and present, inviting viewers 
                to discover new perspectives on familiar landscapes.
              </p>
            </div>

            {/* Achievement Cards - Modern Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl p-6 bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-white/90 transition-all duration-300 cursor-pointer text-center"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${achievement.color} text-white shadow-sm flex items-center justify-center`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-nordic-forest text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group">
                <span>Explore Astrid's Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative lg:order-2">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80"
                  alt="Artist at work"
                  className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">Master</div>
                  <div className="text-sm text-muted-foreground">Since 2004</div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-secondary to-nordic-sage text-white rounded-full p-4 shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
