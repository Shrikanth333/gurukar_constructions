import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="bg-gradient-to-b from-background to-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Excellence Across Every Department
            </h1>
            <p className="text-muted-foreground mt-4">
              Full-service construction in Mysuru: residential, commercial, interiors and project management.
            </p>
            <div className="mt-8 flex gap-3">
              <Button>Get Free Consultation</Button>
              <Button variant="outline">Explore Projects</Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-semibold">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-semibold">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-semibold">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-xl bg-card border border-border shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop" 
                alt="Modern construction site" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">Quality Services</h2>
          <p className="text-muted-foreground mt-2">Commercial, Residential, Semi-commercial, Renovation, Extensions, Interiors, Approvals.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "COMMERCIAL PROJECTS", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" },
              { title: "RESIDENTIAL PROJECTS", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop" },
              { title: "SEMI-COMMERCIAL", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" },
              { title: "RENOVATION", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" },
              { title: "EXTENSION PROJECTS", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" },
              { title: "INTERIORS & WALK THROUGH", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop" }
            ].map(({ title, img }) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>We ensure quality, innovation and timely delivery.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-md bg-muted overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Explore Our Packages</h2>
          <Tabs defaultValue="basic" className="mt-6">
            <TabsList>
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="luxury">Luxury</TabsTrigger>
            </TabsList>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
              {[
                { value: "basic", price: "1799 / SQFT" },
                { value: "medium", price: "1950 / SQFT" },
                { value: "premium", price: "2150 / SQFT" },
                { value: "luxury", price: "2300 / SQFT" },
              ].map((plan) => (
                <TabsContent key={plan.value} value={plan.value} className="m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-baseline justify-between">
                        <span className="capitalize">{plan.value} Plan</span>
                        <span className="text-base font-medium text-muted-foreground">{plan.price}</span>
                      </CardTitle>
                      <CardDescription>Well-balanced inclusions to start your build.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Frame Structure</li>
                        <li>Quality fittings and finishes</li>
                        <li>Vitrified Tiles Flooring</li>
                        <li>Reliable wiring and plumbing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {["Raise a Request","Meet our Expert","Book with Us","Receive Design","Track & Transact","Settle In"].map((step, idx) => (
              <Card key={step}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3"><span className="text-muted-foreground">Step {idx + 1}</span> {step}</CardTitle>
                  <CardDescription>We guide you through each milestone transparently.</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent Projects</h2>
            <Button variant="outline">View all</Button>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Belwadi Residency", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop" },
              { title: "Bogadi Residency", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" },
              { title: "JP Nagar Residential", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop" }
            ].map(({ title, img }) => (
              <Card key={title}>
                <CardContent className="p-0">
                  <div className="aspect-video rounded-t-lg bg-muted overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover" />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <div className="mt-6 grid gap-4">
            {[
              { q: "What services does Gurikar Builders offer?", a: "Design-build: residential, commercial, interiors, project management." },
              { q: "What areas do you serve?", a: "Primarily Mysuru and surrounding areas." },
              { q: "Do you offer free consultations?", a: "Yes, schedule a free consultation to discuss your project." },
            ].map((f) => (
              <Card key={f.q}>
                <CardHeader>
                  <CardTitle className="text-base">{f.q}</CardTitle>
                  <CardDescription>{f.a}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-2xl font-semibold">Ready to build?</h2>
          <p className="text-muted-foreground mt-2">Speak with our experts and get an estimate.</p>
          <div className="mt-6 flex justify-center">
            <Button>Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
