import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Canyon Crest Dental",
    tagline: "Crafting Healthy, Beautiful Smiles",
    phone: "(909) 417-0953",
    phoneHref: "tel:+19094170953",
    email: "info@canyoncrestdental.com",
    address: "5225 Canyon Crest Drive # 209, Riverside, CA 92507",
    city: "Riverside",
    serviceAreas: ["Riverside, CA"],
    license: "CA Dental License #XXXXX",
    since: "1998",
    google_rating: "4.8",
    review_count: "1870",
    emergency: true,
    theme: "forest",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Cosmetic Dentistry", desc: "Enhance your smile with veneers, bonding, and more for a radiant, confident look.", urgent: false },
    { icon: "shield-check", title: "Dental Implants", desc: "Restore missing teeth with durable, natural-looking implants that blend seamlessly with your smile.", urgent: false },
    { icon: "thermometer", title: "Emergency Dentistry", desc: "Immediate care for toothaches, broken teeth, and other urgent dental issues to relieve pain fast.", urgent: true },
    { icon: "sparkles", title: "Invisalign Clear Aligners", desc: "Straighten your teeth discreetly and comfortably with custom-made clear aligners.", urgent: false },
    { icon: "wrench", title: "General Dentistry", desc: "Comprehensive care including exams, cleanings, and fillings to maintain optimal oral health.", urgent: false },
    { icon: "heart", title: "Sedation Dentistry", desc: "Relax during your dental procedures with safe and effective sedation options for a comfortable experience.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Riverside, CA", stars: 5, text: "I had a fantastic experience at Canyon Crest Dental. Dr. Smith and his team were incredibly kind and professional when I came in for a crown. They explained every step of the process, and I felt completely at ease. The results are amazing, and I can't stop smiling! Highly recommend their exceptional service." },
    { name: "Mark T.", location: "Riverside, CA", stars: 5, text: "After years of avoiding the dentist, I finally visited Canyon Crest Dental for a cleaning and check-up. The staff was so welcoming, and the hygienist was gentle and thorough. I was nervous about the cost, but their Quality Care Membership made it affordable. My teeth feel great, and I'm actually looking forward to my next appointment!" },
    { name: "Emily R.", location: "Riverside, CA", stars: 5, text: "My son had a dental emergency over the weekend, and Canyon Crest Dental was there for us. They got him in right away, and Dr. Lee was wonderful with him, making him feel comfortable despite the pain. The in-house lab meant we got a quick solution. We are so grateful for their prompt and compassionate care." }
  ],

  trustBadges: [
    "Invisalign Gold Plus Provider", "Full-Service Dental Office", "In-House Lab", "Quality Care Membership", "Custom Treatment Plans", "Pearl Dental AI"
  ],

  stats: [
    { value: 4.8, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1870, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 25, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Flexible Scheduling", desc: "We offer convenient appointment times to fit your busy lifestyle." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront costs with no hidden fees, and membership options." },
    { icon: "award", title: "Experienced Dentists", desc: "Our team of highly skilled and certified professionals provides top-tier care." },
    { icon: "thumbs-up", title: "Patient-Centered Care", desc: "Your comfort and satisfaction are our top priorities in every visit." },
    { icon: "phone", title: "Emergency Support", desc: "We're here for urgent dental needs, providing prompt and effective relief." },
    { icon: "truck", title: "Advanced Technology", desc: "Utilizing the latest dental innovations for precise and efficient treatments." }
  ],

  formServiceOptions: ["Anti-Snoring Devices", "Athletic Mouth Guards", "Bone grafts", "Cold Sore Treatment", "Cosmetic Dentistry", "Dental Implants", "Exam & Cleaning", "Emergency Dentistry", "Fresh Breath", "General Dentistry", "Invisalign", "Laser Therapy", "Nightguards", "Oral Surgery", "Orthodontics", "Periodontal Disease", "Root Canals", "Sedation Dentistry", "Teeth Whitening", "Tension and Headaches", "Tooth Decay & Repair", "Pearl Dental AI", "LANAP®"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!