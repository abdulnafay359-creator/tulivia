"use client"

import { HeroSection } from "./sections/HeroSection"
import { StorySection } from "./sections/StorySection"
import { MissionVisionSection } from "./sections/MissionVisionSection"
import { ValuesSection } from "./sections/ValuesSection"
import { TeamSection } from "./sections/TeamSection"
import { ContactFormSection } from "./sections/ContactFormSection"
import { ContactMethodsSection } from "./sections/ContactMethodsSection"
import { FAQSection } from "./sections/FAQSection"
import { CTASection } from "./sections/CTASection"

export const AboutPage = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TeamSection />
      <ContactFormSection />
      <ContactMethodsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
