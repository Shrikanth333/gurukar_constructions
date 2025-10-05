import { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-muted-foreground mt-2">
          Call us now +91 88926 92007 or send a message. We will get back to you.
        </p>
        <div className="mt-6 aspect-[4/3] rounded-xl bg-muted overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
            alt="Contact Gurikar Builderss" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}


