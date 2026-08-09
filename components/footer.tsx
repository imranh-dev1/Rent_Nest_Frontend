"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import logo from "@/public/assets/Rent-Nest-logo.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  explore: [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Apartments", href: "/apartments" },
    { name: "Family Houses", href: "/properties?type=house" },
    { name: "Luxury Villas", href: "/properties?type=villa" },
  ],

  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Careers", href: "/careers" },
  ],

  support: [
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Report an Issue", href: "/report" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com",
  },
  {
    name: "X",
    icon: FaXTwitter,
    href: "https://x.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-muted/20">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto container px-4 sm:px-6 lg:px-8"> 

        {/* ───────────────── MAIN FOOTER ───────────────── */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand */}

          <div className="lg:col-span-3">

            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >

              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 ring-1 ring-primary/20 transition duration-300 group-hover:scale-105">
                <Image
                  src={logo}
                  alt="RentNest logo"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold tracking-tight">
                  RentNest
                </h2>

                <p className="text-xs font-medium text-muted-foreground">
                  Find Your Perfect Home
                </p>
              </div>

            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              A modern rental marketplace connecting tenants
              with trusted landlords and verified properties
              for a simpler, safer renting experience.
            </p>

            {/* Contact */}

            <div className="mt-7 space-y-4">

              <Link
                href="https://maps.google.com/?q=Rajshahi,Bangladesh"
                target="_blank"
                className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-background transition group-hover:border-primary/30 group-hover:bg-primary/10">
                  <MapPin
                    size={16}
                    className="text-primary"
                  />
                </span>

                <span>Rajshahi, Bangladesh</span>
              </Link>

              <a
                href="mailto:support@rentnest.com"
                className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-background transition group-hover:border-primary/30 group-hover:bg-primary/10">
                  <Mail
                    size={16}
                    className="text-primary"
                  />
                </span>

                <span>support@rentnest.com</span>
              </a>

              <a
                href="tel:+8801700000000"
                className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-background transition group-hover:border-primary/30 group-hover:bg-primary/10">
                  <Phone
                    size={16}
                    className="text-primary"
                  />
                </span>

                <span>+880 1700-000000</span>
              </a>

            </div>

            {/* Social */}

            <div className="mt-8 flex items-center gap-2.5">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}

            </div>

          </div>

          {/* Explore */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <ul className="space-y-4">

              {footerLinks.explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      size={13}
                      className="ml-1 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Company */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-4">

              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      size={13}
                      className="ml-1 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Support */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>

            <ul className="space-y-4">

              {footerLinks.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      size={13}
                      className="ml-1 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Newsletter */}

          <div className="lg:col-span-3">

            <div className="rounded-3xl border bg-background/70 p-6 shadow-sm backdrop-blur-xl">

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail size={18} />
              </div>

              <h3 className="text-lg font-semibold">
                Stay Updated
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Get new listings, rental tips and
                marketplace updates.
              </p>

              <form className="mt-5 space-y-3">

                <Input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="h-10 bg-background"
                />

                <Button
                  type="submit"
                  className="h-10 w-full rounded-xl"
                >
                  <Send
                    size={15}
                    className="mr-2"
                  />
                  Subscribe
                </Button>

              </form>

              <p className="mt-3 text-[11px] leading-5 text-muted-foreground">
                By subscribing, you agree to our
                privacy policy.
              </p>

            </div>

          </div>

        </div>

        {/* ───────────────── BOTTOM ───────────────── */}

        <div className="border-t py-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <p className="text-xs text-muted-foreground sm:text-sm">
              © 2026 RentNest. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground transition hover:text-primary sm:text-sm"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-xs text-muted-foreground transition hover:text-primary sm:text-sm"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/cookies"
                className="text-xs text-muted-foreground transition hover:text-primary sm:text-sm"
              >
                Cookie Policy
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
} 