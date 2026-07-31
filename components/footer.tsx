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
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";

import logo from "@/public/assets/Rent-Nest-logo.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Properties",
    href: "/properties",
  },
  {
    name: "Apartments",
    href: "/apartments",
  },
  {
    name: "Agents",
    href: "/agents",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const companyLinks = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

const supportLinks = [
  {
    name: "Help Center",
    href: "/help",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
  },
  {
    name: "Report Issue",
    href: "/report",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    icon: FaGithub,
    href: "#",
  },
  {
    icon: FaXTwitter,
    href: "#",
  },
];

export default function Footer() {

  return (
    <footer className="border-t bg-muted/20">

      {/* Top */}

      <div className="container mx-auto px-4 pt-20 pb-6">

        <div className="grid gap-14 lg:grid-cols-12">

          {/* Brand */}

          <div className="lg:col-span-4">

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image
                src={logo}
                alt="RentNest"
                width={70}
                height={70}
              />

              <div>
                <h2 className="text-2xl font-bold">
                  RentNest
                </h2>

                <p className="text-xs text-muted-foreground">
                  Find Your Perfect Home
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-muted-foreground">
              RentNest is a trusted rental platform that
              connects tenants and landlords with verified
              listings, secure experiences, and an easy
              property management solution.
            </p>

            {/* Contact */}

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                Rajshahi, Bangladesh
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                support@rentnest.com
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                +880 1700-000000
              </div>

            </div>

            {/* Social */}

            <div className="mt-8 flex items-center gap-3">

              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Icon className="text-lg" />
                  </Link>
                );
              })}

            </div>

          </div>

          {/* Quick Links */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Company */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-4">

              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Support */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-lg font-semibold">
              Support
            </h3>

            <ul className="space-y-4">

              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>
          {/* Newsletter */}

          <div className="lg:col-span-2">

            <div className="rounded-3xl border bg-background p-6 shadow-sm">

              <h3 className="text-xl font-bold">
                Stay Updated
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Subscribe to receive the latest property
                listings, rental tips, and exclusive offers.
              </p>

              <form className="mt-6 space-y-3">

                <Input
                  type="email"
                  placeholder="Enter your email"
                />

                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>

              </form>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t pt-8 mt-8">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <p className="text-sm text-muted-foreground">
              © 2026 RentNest. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-6">

              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/cookies"
                className="text-sm text-muted-foreground transition hover:text-primary"
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