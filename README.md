# Omroadlines Elevate

# ORL (Omroadlines) Marketing Website UI/UX Specification

## Project Goal

Design a premium, modern, conversion-focused marketing website for Omroadlines (ORL), a B2B freight and trucking company.

This is **NOT** an ERP, customer portal, or SaaS application.

The website has three primary goals:

1. Generate qualified freight inquiries.

2. Build trust with procurement teams and enterprise customers.

3. Rank well on Google through strong SEO and location-specific content.

The overall experience should feel premium, fast, trustworthy, and enterprise-grade.

---

# Design Philosophy

The design should communicate:

- Trust

- Reliability

- Speed

- Scale

- Professionalism

- Modern logistics

Think of the design quality of:

- Volvo Trucks

- Maersk

- FedEx

- Mercedes-Benz Trucks

- Stripe

- Linear

- Rivian Fleet

Avoid generic logistics templates.

The experience should feel cinematic while remaining highly usable.

---

# Visual Language

## Theme

Modern Industrial Minimalism

Large typography

Lots of whitespace

Glassmorphism used subtly

Premium gradients

Large photography

Dark + White balance

Motion everywhere but never distracting.

---

# Color Palette

Primary

Deep Navy

#081B33

Secondary

Industrial Blue

#1B66FF

Accent

Orange

#FF7A00

Success

#18C964

Background

#F7F9FC

Cards

White

Primary Text

#111827

Secondary Text

#6B7280

Borders

#E5E7EB

---

# Typography

Headings

General Sans

Alternative

Satoshi

Body

Inter

Display headings

Weight

700–800

Body

Weight

400–500

Large spacing.

Minimal line-height.

---

# Layout

Responsive 12-column grid.

Container

1440px

Desktop padding

80px

Tablet

32px

Mobile

20px

Spacing system

8

16

24

32

48

64

96

128

Rounded corners

16–24px

Cards should breathe.

---

# Motion Guidelines (GSAP)

The motion language should reinforce movement and logistics.

Everything should feel smooth and intentional.

Use:

- GSAP

- ScrollTrigger

- SplitText

- Flip

- MotionPathPlugin

- Lenis

- Parallax

- Magnetic Buttons

Animation style

Fade + Slide

Mask reveals

Image scaling

Clip-path reveals

Horizontal movement

Counters

Marquee

Route drawing animations

Page transitions

Avoid overusing bounces.

Use Power3 easing.

---

# Navigation

Transparent navigation over hero.

On scroll:

- White glass background

- Blur

- Small shadow

- Reduced height

Navigation

Logo

Services

Industries

Coverage

About

Resources

Contact

Get Quote

The "Get Quote" button should always remain visible.

Sticky navigation.

Floating WhatsApp button.

Floating Call button on mobile.

---

# Homepage

## Hero

Full-screen cinematic hero.

Background

Drone footage of trucks moving on highways.

Dark overlay.

Headline

Trusted Freight Transportation Across India

Moving Business.

Not Just Goods.

Subheading

Reliable Full Truck Load, Part Load,

Dedicated Fleet,

Industrial Logistics,

Pan India Freight Solutions.

Primary CTA

Get Quote

Secondary CTA

Call Now

Animated scroll indicator.

Background map fades in.

Truck moves subtly.

Headline reveals line by line.

---

## Trust Statistics

Dark strip below hero.

Animated counters.

Example

15+ Years

400+ Fleet

50+ Cities

98.7% On-Time Delivery

1.2M+ Tons Delivered

Counters animate when visible.

---

## Why Choose ORL

Six premium cards.

Examples

GPS Enabled Fleet

Verified Drivers

Cargo Insurance

24×7 Support

Pan India Coverage

Fast Dispatch

Hover Effects

Lift

Glow

Border animation

Icon animation

---

## Services

Large alternating sections.

Each service includes

Large image

Description

Key benefits

CTA

Services

Full Truck Load

Part Load

ODC & Heavy Equipment

Express Freight

Dedicated Fleet

Cards animate into view.

---

## Industries Served

Interactive cards.

Manufacturing

FMCG

Automotive

Pharma

Agriculture

Retail

Hover expands card.

Background image changes.

---

## Coverage Network

Interactive India map.

Animated route lines.

Cities glow.

Hovering over a city displays

Trips Completed

Fleet Available

Average Transit Time

Routes Served

No live tracking.

---

## Case Studies

Premium large cards.

Each contains

Client Challenge

Solution

Implementation

Results

Metrics animate.

---

## Testimonials

Horizontal GSAP slider.

Each testimonial includes

Company Logo

Client Name

Designation

Route

Quote

Real testimonials only.

---

## Client Logos

Infinite marquee animation.

Recognizable client logos.

---

## Certifications

Cards for

GST

Insurance

Compliance

Transport License

ISO (if applicable)

Animated stamp effect.

---

## Final CTA

Large dark banner.

Need Reliable Freight?

Let's Move Your Cargo.

Button

Request a Quote

---

# Services Pages

Dedicated page for every service.

Structure

Hero

Overview

Benefits

Industries Served

Fleet Images

Process

FAQs

Sticky Quote Form

CTA

---

# Industry Pages

Separate landing pages.

Manufacturing Logistics

FMCG Logistics

Pharma Logistics

Agriculture Logistics

Automotive Logistics

E-commerce Logistics

Each page contains

Industry challenges

ORL solution

Relevant fleet

Case study

CTA

---

# Route Pages

Dedicated SEO pages.

Examples

Delhi → Mumbai

Delhi → Bangalore

Delhi → Chennai

Mumbai → Ahmedabad

Each page contains

Distance

Estimated Transit Time

Available Fleet

Popular Cargo

Pricing Estimate

FAQ

Quote CTA

---

# About Us

Storytelling page.

Timeline

Leadership

Mission

Vision

Fleet

Infrastructure

Safety Standards

Driver Vetting

Maintenance Policy

Cargo Insurance

Real team photos.

---

# Careers

Driver recruitment.

Office hiring.

Benefits

Culture

Open Positions

Application Form

---

# Contact

Split layout.

Left

Contact Form

Right

Google Map

Office Address

Phone

Email

WhatsApp

Office Hours

---

# Quote Experience

Quote should be available everywhere.

Maximum fields

Origin

Destination

Load Type

Name

Phone

Success page

Thank You!

Our logistics team will contact you within 2 hours.

---

# Enterprise Inquiry

Separate page.

Fields

Company Name

Monthly Shipment Volume

Preferred Routes

Fleet Requirement

Email

Phone

Message

---

# Freight Cost Estimator

Interactive calculator.

Inputs

Distance

Truck Type

Weight

Load Type

Outputs

Estimated Cost Range

Estimated Transit Time

CTA

Get Accurate Quote

Numbers animate smoothly.

---

# Resources / Blog

Magazine layout.

Topics

Freight Cost Guide

E-Way Bill Guide

Seasonal Capacity Updates

Industry News

Transportation Regulations

Best Practices

Reading time

Author

Related articles

---

# FAQ

Searchable accordion.

Smooth expansion animation.

Topics

Pricing

Insurance

Delivery Time

Tracking

Fleet

Safety

Documentation

---

# Footer

Four-column layout.

Company

Services

Industries

Resources

Quick Links

Contact Information

WhatsApp

Newsletter

Social Links

Copyright

---

# Conversion Features

Sticky Get Quote button

Floating WhatsApp

Floating Call button

Callback Request Widget

Live Chat

Download Company Profile PDF

Download Rate Card PDF

Enterprise Inquiry Form

Freight Cost Calculator

Availability Banner

FAQ

Testimonials

Case Studies

Client Logos

Trust Statistics

---

# SEO Requirements

Service pages

Industry pages

Location pages

Google Business Profile optimization

NAP consistency

LocalBusiness Schema

Service Schema

Fast loading

Core Web Vitals optimized

Meta Titles

Meta Descriptions

Structured Data

XML Sitemap

Robots.txt

Image Optimization

---

# Performance

Lighthouse Score above 95

LCP below 2.5 seconds

CLS below 0.1

Use AVIF/WebP

Lazy loading

Code splitting

Server-side rendering

Motion disabled for prefers-reduced-motion users

---

# Recommended Technology Stack

Framework

Next.js 15 (App Router)

Language

TypeScript

Styling

Tailwind CSS

UI Library

shadcn/ui

Animation

GSAP

ScrollTrigger

SplitText

Flip

MotionPathPlugin

Smooth Scroll

Lenis

Forms

React Hook Form

Validation

Zod

State Management

Zustand

Icons

Lucide

Maps

SVG India Map

Analytics

Google Analytics 4

Google Tag Manager

Microsoft Clarity

Meta Pixel

Deployment

Vercel

or

Docker + Nginx

---

# Sitemap

Home

Services

    Full Truck Load

    Part Load

    ODC & Heavy Equipment

    Express Freight

    Dedicated Fleet

Industries

    Manufacturing

    FMCG

    Pharma

    Automotive

    Agriculture

    E-commerce

Coverage

    Delhi to Mumbai

    Delhi to Bangalore

    Delhi to Chennai

    Mumbai to Ahmedabad

    Additional High-Intent Routes

About Us

Safety & Compliance

Case Studies

Resources

Careers

Contact

Get Quote

Enterprise Inquiry

Privacy Policy

Terms & Conditions

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
