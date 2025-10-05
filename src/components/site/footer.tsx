import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-semibold">Gurukar Builders</div>
          <p className="text-muted-foreground mt-2">
            897/1, NS Road, Lakshmipuram, Mysuru, Karnataka 570004
          </p>
          <p className="text-muted-foreground mt-1">info@gurukarbuildersconstructions.com</p>
          <p className="text-muted-foreground mt-1">(+91) 89511 89622</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-medium">Quick Links</div>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Legal</div>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li><Link href="#">Privacy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right text-muted-foreground">
          © {new Date().getFullYear()} Gurukar Builders. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


