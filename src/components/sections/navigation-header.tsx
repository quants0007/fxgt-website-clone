"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tradingLinks = {
  markets: [
    { title: "Forex", href: "/forex/" },
    { title: "Precious Metals", href: "/precious-metals/" },
    { title: "Energies", href: "/energies/" },
    { title: "Equity Indices", href: "/equity-indices/" },
    { title: "Stocks", href: "/stocks/" },
  ],
  accountFeatures: [
    { title: "Account Comparison", href: "/trading-account-types/" },
    { title: "Deposits & Withdrawals", href: "/deposits-and-withdrawals/" },
    { title: "Leverage & Margin", href: "/leverage-types/" },
    { title: "Copy Trading", href: "/copy-trading/" },
  ],
  toolsAndPlatforms: [
    { title: "Client Portal", href: "/client-portal/" },
    { title: "VPS Sponsorship", href: "/metatrader-vps-sponsorship-program/" },
  ],
};

const platformLinks = {
  fxgtPlatforms: [
    { title: "Fusion FX App", href: "/fxgt-app/" },
    { title: "Fusion FX Trader", href: "/fxgt-trader/" },
  ],
  mt5: [
    { title: "Windows", href: "/metatrader-5-for-windows/" },
    { title: "MacOS", href: "/metatrader-5-for-mac/" },
    { title: "Android", href: "/metatrader-5-for-android/" },
    { title: "iOS", href: "/metatrader-5-for-ios/" },
  ],
  mt4: [
    { title: "Windows", href: "/metatrader-4-for-windows/" },
    { title: "MacOS", href: "/metatrader-4-for-macos/" },
    { title: "Android", href: "/metatrader-4-for-android/" },
    { title: "iOS", href: "/mt4-for-ios/" },
  ],
};

const companyLinks = {
  aboutUs: [
    { title: "About Fusion FX", href: "/about-fxgt/" },
    { title: "Security of Funds", href: "/security-of-funds/" },
    { title: "Company news", href: "/blog/category/company-news/" },
    { title: "Contact Us", href: "/contact/" },
    { title: "Fusion FX Careers", href: "https://fxgtcareers.com/" },
    { title: "Legal", href: "/legal/" },
  ],
  blogPosts: [
    {
      title: "Fusion FX App and Web Trader Now Live – Dive In...",
      href: "/blog/fxgt-app-and-web-trader-now-live/",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Frame-427319906-100x100_png-6.webp",
    },
    {
      title: "The All-New Optimus Account by Fusion FX: Made for ...",
      href: "/blog/the-all-new-optimus-account-by-fxgt-com-made-for-day-trading/",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/new-acc-type-2-100x100-7.webp",
    },
    {
      title: "AUDUSD Gains on Hot Inflation as Markets Eye Fed...",
      href: "/blog/audusd-gains-on-hot-inflation-as-markets-eye-fed-rate-decision/",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/JPK-08_5-100x100-8.webp",
    },
  ],
};

const researchLinks = {
  researchAndEducation: [
    { title: "Blog", href: "/blog" },
    { title: "Market Analysis", href: "/blog/category/market-analysis/" },
    { title: "Economic Calendar", href: "/economic-calendar/" },
    { title: "Holiday Calendar", href: "/trading-holidays-calendar/" },
  ],
};

const MenuColumn = ({
  title,
  links,
}: {
  title: string;
  links: { href: string; title: string }[];
}) => (
  <div className="flex flex-col space-y-2">
    <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.title}>
          <NavigationMenuLink asChild>
            <a
              href={link.href}
              className="text-sm font-normal text-muted-foreground hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  </div>
);

const NavigationHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/fxgt-logo_png-1.webp"
            alt="Fusion FX Logo"
            width={128}
            height={25}
            className="filter invert brightness-0"
          />
        </Link>
        <nav className="hidden xl:block">
          <NavigationMenu>
            <NavigationMenuList className="font-body">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-secondary-foreground">
                  Trading
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-3 gap-6 p-6">
                    <MenuColumn title="Markets" links={tradingLinks.markets} />
                    <MenuColumn
                      title="Account Features"
                      links={tradingLinks.accountFeatures}
                    />
                    <MenuColumn
                      title="Tools & Platforms"
                      links={tradingLinks.toolsAndPlatforms}
                    />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-secondary-foreground">
                  Platforms
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-4 gap-6 p-6">
                    <MenuColumn
                      title="Fusion FX Platforms"
                      links={platformLinks.fxgtPlatforms}
                    />
                    <MenuColumn title="MT5 Platforms" links={platformLinks.mt5} />
                    <MenuColumn title="MT4 Platforms" links={platformLinks.mt4} />

                    <div className="flex flex-col justify-between -my-2 -mr-2 bg-accent rounded-r-md p-4">
                      <div className="relative mx-auto w-32 h-48">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/mobile-app-device_png-2.webp"
                          alt="Fusion FX App"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-foreground">
                          Download the Fusion FX App
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/qrcode-final-5.webp"
                            alt="QR Code"
                            width={60}
                            height={60}
                          />
                          <div className="flex flex-col gap-2">
                            <a href="https://play.google.com/store/apps/details?id=com.fxgt.app">
                              <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/google-play-1-3.webp"
                                alt="Google Play"
                                width={100}
                                height={30}
                              />
                            </a>
                            <a href="https://apps.apple.com/app/fxgt-trade-the-markets/id6680187341">
                              <Image
                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/app-store-1-4.webp"
                                alt="App Store"
                                width={100}
                                height={30}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/trading-promotions/"
                  className="bg-transparent hover:bg-accent focus:bg-accent text-base text-secondary-foreground font-medium h-10 px-4 py-2 flex items-center rounded-md"
                >
                  Promotions
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-secondary-foreground">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[650px] grid-cols-[1fr_2fr] gap-6 p-6">
                    <MenuColumn title="About Us" links={companyLinks.aboutUs} />
                    <div className="flex flex-col">
                      <h3 className="mb-2 font-semibold text-foreground">
                        What's New
                      </h3>
                      <div className="flex-grow space-y-3">
                        {companyLinks.blogPosts.map((post) => (
                          <a
                            key={post.title}
                            href={post.href}
                            className="flex items-center gap-3 group"
                          >
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={48}
                              height={48}
                              className="rounded-md"
                            />
                            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                              {post.title}
                            </p>
                          </a>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/EN-1_jpg-9.webp"
                          alt="Menu Banner"
                          width={380}
                          height={35}
                          className="rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-secondary-foreground">
                  Research
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[250px] p-4">
                    <MenuColumn
                      title="Research & Education"
                      links={researchLinks.researchAndEducation}
                    />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="https://mypartners.fxgt.com/"
                  className="bg-transparent hover:bg-accent focus:bg-accent text-base text-secondary-foreground font-medium h-10 px-4 py-2 flex items-center rounded-md"
                >
                  Partners
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="hidden xl:flex items-center space-x-2">
          <Button variant="outline" asChild className="font-semibold text-sm h-auto py-2 px-4 border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/log-in/">Log in</Link>
          </Button>
          <Button asChild className="font-semibold text-sm h-auto py-3 px-6 rounded-lg">
            <Link href="/register/">Register now</Link>
          </Button>
        </div>
        <div className="xl:hidden">
          <Sheet
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
          >
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-[320px] sm:max-w-sm bg-background p-6 flex flex-col">
              <nav className="flex-grow overflow-y-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="trading">
                    <AccordionTrigger>Trading</AccordionTrigger>
                    <AccordionContent className="pl-4">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="markets">
                          <AccordionTrigger className="text-sm">Markets</AccordionTrigger>
                          <AccordionContent className="pl-4 space-y-2 pt-2">
                            {tradingLinks.markets.map(link => <SheetClose asChild key={link.title}><Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary">{link.title}</Link></SheetClose>)}
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="acc-features">
                          <AccordionTrigger className="text-sm">Account Features</AccordionTrigger>
                          <AccordionContent className="pl-4 space-y-2 pt-2">
                            {tradingLinks.accountFeatures.map(link => <SheetClose asChild key={link.title}><Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary">{link.title}</Link></SheetClose>)}
                          </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="tools">
                          <AccordionTrigger className="text-sm">Tools & Platforms</AccordionTrigger>
                          <AccordionContent className="pl-4 space-y-2 pt-2">
                            {tradingLinks.toolsAndPlatforms.map(link => <SheetClose asChild key={link.title}><Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary">{link.title}</Link></SheetClose>)}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                 
                  <AccordionItem value="platforms">
                    <AccordionTrigger>Platforms</AccordionTrigger>
                    <AccordionContent className="pl-4">
                       <Accordion type="single" collapsible>
                        <AccordionItem value="fxgt-platforms">
                          <AccordionTrigger className="text-sm">Fusion FX Platforms</AccordionTrigger>
                          <AccordionContent className="pl-4 space-y-2 pt-2">{platformLinks.fxgtPlatforms.map(link => <SheetClose asChild key={link.title}><Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary">{link.title}</Link></SheetClose>)}</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="mt5">
                           <AccordionTrigger className="text-sm">MT5 Platforms</AccordionTrigger>
                           <AccordionContent className="pl-4 space-y-2 pt-2">{platformLinks.mt5.map(link => <SheetClose asChild key={link.title}><Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary">{link.title}</Link></SheetClose>)}</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="mt4">
                           <AccordionTrigger className="text-sm">MT4 Platforms</AccordionTrigger>
                           <AccordionContent className="pl-4 space-y-2 pt-2">{platformLinks.mt4.map(link => <SheetClose asChild key={link.title}><Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary">{link.title}</Link></SheetClose>)}</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <SheetClose asChild><Link href="/trading-promotions/" className="flex items-center py-4 font-medium border-b border-border">Promotions</Link></SheetClose>

                  <AccordionItem value="company">
                    <AccordionTrigger>Company</AccordionTrigger>
                    <AccordionContent className="pl-4 space-y-2 pt-2">{companyLinks.aboutUs.map(link => <SheetClose asChild key={link.title}><Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary">{link.title}</Link></SheetClose>)}</AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="research">
                    <AccordionTrigger>Research</AccordionTrigger>
                    <AccordionContent className="pl-4 space-y-2 pt-2">{researchLinks.researchAndEducation.map(link => <SheetClose asChild key={link.title}><Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary">{link.title}</Link></SheetClose>)}</AccordionContent>
                  </AccordionItem>

                   <SheetClose asChild><Link href="https://mypartners.fxgt.com/" className="flex items-center py-4 font-medium border-b border-border">Partners</Link></SheetClose>
                </Accordion>
              </nav>

              <div className="mt-6 flex flex-col space-y-2">
                <SheetClose asChild>
                  <Button variant="outline" asChild className="w-full font-semibold border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <Link href="/log-in/">Log in</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild className="w-full font-semibold">
                    <Link href="/register/">Register now</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;