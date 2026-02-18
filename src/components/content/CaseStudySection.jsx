import React from "react";
import { Clock, Map, Star, Zap } from "lucide-react";

export default function CaseStudySection({ data }) {
  if (!data) return null;

  return (
    <section className="py-12 border-t border-white/5">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
          {data.title}
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          {data.body}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Insights Grid */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">
            Key Insights
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {data.insights.map((item, idx) => (
              <div key={idx}>
                <div className="text-gray-400 text-sm mb-1">{item.label}</div>
                <div className="text-white font-bold text-lg">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Moments */}
        <div className="space-y-6">
          <h3 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">
            {data.story.morning ? "A Perfect Day" : "Experience Highlights"}
          </h3>
          <div className="space-y-6">
            {data.story.morning ? (
              // Destination Timeline
              <>
                <TimelineItem
                  icon={<Zap className="w-5 h-5" />}
                  time="Morning"
                  text={data.story.morning}
                />
                <TimelineItem
                  icon={<Star className="w-5 h-5" />}
                  time="Afternoon"
                  text={data.story.afternoon}
                />
                <TimelineItem
                  icon={<Map className="w-5 h-5" />}
                  time="Evening"
                  text={data.story.night}
                />
              </>
            ) : (
              // Experience Bullets
              <>
                <TimelineItem
                  icon={<Zap className="w-5 h-5" />}
                  time="See"
                  text={data.story.see}
                />
                <TimelineItem
                  icon={<Star className="w-5 h-5" />}
                  time="Taste/Learn"
                  text={data.story.taste || data.story.learn}
                />
                <TimelineItem
                  icon={<Map className="w-5 h-5" />}
                  time="Takeaway"
                  text={data.story.takeaway}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const TimelineItem = ({ icon, time, text }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
      {icon}
    </div>
    <div>
      <div className="font-bold text-white mb-1">{time}</div>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);
