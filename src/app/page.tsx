"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="USA Super Stores"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="Affordable Everyday Essentials in Your Neighborhood"
      description="Wide selection. Unbeatable prices. Friendly service right here in the Upper East Side."
      buttons={[
        {
          text: "Call Now",
          href: "tel:2125550199",
        },
        {
          text: "Get Directions",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/pretty-young-hipster-woman-sitting-supermarket-trolley-supermarket_1153-3670.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/blissful-hispanic-fashionista-woman-posing-after-shopping-with-sincere-smile_197531-5696.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-blonde-woman-with-white-t-shirt_273609-6643.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cropped-shot-dark-skinned-smiling-young-woman-with-afro-hairstyle-dressed-casual-summer-clothing_273609-3169.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-joyful-woman-holding-mobile-phone_171337-4024.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blissful-hispanic-fashionista-woman-posing-after-shopping-with-sincere-smile_197531-5696.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Join 5,000+ happy neighbors"
      marqueeItems={[
        {
          type: "text",
          text: "Fresh Produce",
        },
        {
          type: "text",
          text: "Home Essentials",
        },
        {
          type: "text",
          text: "Low Prices",
        },
        {
          type: "text",
          text: "Open Daily",
        },
        {
          type: "text",
          text: "Fast Checkout",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Our Mission",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/pretty-young-hipster-woman-sitting-supermarket-trolley-supermarket_1153-3670.jpg",
          alt: "Store exterior",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Fresh Produce",
          price: "Varies",
          variant: "Fresh",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-woman-supermarket_273609-15864.jpg?_wi=1",
        },
        {
          id: "p2",
          name: "Household Goods",
          price: "Discounted",
          variant: "Essentials",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-woman-serving-food-container-while-buying-bulk-supermarket_662251-1368.jpg",
        },
        {
          id: "p3",
          name: "Snacks & Drinks",
          price: "Low Price",
          variant: "Variety",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-bread_23-2149081062.jpg",
        },
        {
          id: "p4",
          name: "Organic Pantry",
          price: "Affordable",
          variant: "Healthy",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-woman-supermarket_273609-15864.jpg?_wi=2",
        },
      ]}
      title="Daily Essentials"
      description="High quality goods at prices you'll love."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Resident",
          company: "Upper East Side",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blissful-hispanic-fashionista-woman-posing-after-shopping-with-sincere-smile_197531-5696.jpg",
        },
        {
          id: "t2",
          name: "Michael C.",
          role: "Resident",
          company: "Upper East Side",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-woman-with-white-t-shirt_273609-6643.jpg?_wi=1",
        },
        {
          id: "t3",
          name: "Emily R.",
          role: "Resident",
          company: "Upper East Side",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/cropped-shot-dark-skinned-smiling-young-woman-with-afro-hairstyle-dressed-casual-summer-clothing_273609-3169.jpg",
        },
        {
          id: "t4",
          name: "David K.",
          role: "Resident",
          company: "Upper East Side",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-joyful-woman-holding-mobile-phone_171337-4024.jpg",
        },
        {
          id: "t5",
          name: "Jessica L.",
          role: "Resident",
          company: "Upper East Side",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-woman-with-white-t-shirt_273609-6643.jpg?_wi=2",
        },
      ]}
      title="What Our Neighbors Say"
      description="Trusted by the Upper East Side community."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Call Now or Visit Today"
      description="Located in the heart of NYC. Open daily for your convenience."
      buttons={[
        {
          text: "Call Now",
          href: "tel:2125550199",
        },
        {
          text: "Get Directions",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="USA Super Stores"
      copyrightText="© 2025 USA Super Stores | NYC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
