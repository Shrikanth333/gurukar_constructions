export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Excellence Across Every Department</h1>
          <p className="text-muted-foreground mt-4">
            At Gurikar Builders, we excel in every aspect of the construction process.
            Our team delivers outstanding results with long-term guarantees, adopting new technologies
            to stay at the forefront of the industry.
          </p>
        </div>
        <div className="aspect-[4/3] rounded-xl bg-muted overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop" 
            alt="Gurikar Builders team" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[{ k: "Professional Experience", v: "10+" }, { k: "Employees", v: "10+" }, { k: "Clients", v: "100+" }, { k: "Projects", v: "50+" }].map((s) => (
          <div key={s.k}>
            <div className="text-3xl font-semibold">{s.v}</div>
            <div className="text-sm text-muted-foreground">{s.k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


