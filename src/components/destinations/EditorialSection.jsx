import { Info, Umbrella, Coffee, Map } from "lucide-react";

export default function EditorialSection() {
  const tips = [
    {
      icon: Umbrella,
      title: "Tropical Weather",
      desc: "Malaysia is hot and humid year-round. Pack light, breathable clothes and always carry an umbrella for sudden showers.",
    },
    {
      icon: Coffee,
      title: "Food Culture",
      desc: "Eating is a national pastime. Don't be afraid to try street food (hawker stalls) – it's often better than restaurants!",
    },
    {
      icon: Map,
      title: "Getting Around",
      desc: "Grab (our version of Uber) is the most convenient way to move around cities. Trains are great in KL.",
    },
  ];

  return (
    <section className="py-20 bg-white/5 border-y border-white/5 mt-20">
      <div className="container px-4">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
              Travel Essentials
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Good to Know <br />
              <span className="text-slate-400">Before You Go</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              To make the most of your Malaysian adventure, a little local
              knowledge goes a long way. Here are a few tips to help you
              navigate culture, climate, and cuisine like a pro.
            </p>
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">
                    Need a custom itinerary?
                  </h4>
                  <p className="text-sm text-slate-300">
                    We specialize in tailoring trips to your specific interests.
                    Let us handle the logistics while you enjoy the journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl glass-panel hover:bg-white/10 transition-colors ${idx === 2 ? "sm:col-span-2" : ""}`}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 text-primary">
                  <tip.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
