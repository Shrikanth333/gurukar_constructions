import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Projects",
};

const sample = {
  ongoing: [
    { title: "Belwadi Residency", img: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=600&h=400&fit=crop" },
    { title: "Bogadi Residency", img: "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=600&h=400&fit=crop" }
  ],
  upcoming: [
    { title: "JP Nagar Residential", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop" },
    { title: "Ilwala House", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop" }
  ],
  completed: [
    { title: "Old Kesare", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
    { title: "Raghavendra Nagar", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" },
    { title: "Siddharth Nagar", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop" }
  ],
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-muted-foreground mt-2">Explore ongoing, upcoming and completed works.</p>
      <Tabs defaultValue="ongoing" className="mt-6">
        <TabsList>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        {Object.entries(sample).map(([key, items]) => (
          <TabsContent key={key} value={key}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(({ title, img }) => (
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
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}


