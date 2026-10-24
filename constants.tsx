
import { Section, BlueprintContent } from './types';

export const BLUEPRINT_DATA: Record<Section, BlueprintContent> = {
  [Section.SIX_HOUR_PROTOCOL]: {
    title: "UNVALIDATED — DO NOT USE",
    icon: "ShieldAlert",
    description: "The previous six-hour protocol contained unsafe and unsupported food, foraging, tool and coastal-risk instructions. It has been withdrawn from actionable display pending expert review.",
    steps: [
      "Do not use this page to make emergency, foraging, food-safety or water-safety decisions.",
      "Do not enter surf, tidal pools or unstable coastal terrain to obtain food or tools.",
      "Do not eat unidentified wild organisms or rely on smell, colour, appearance or a test bite to establish safety.",
      "Do not treat raw fish, sun-heated rocks or improvised tools as validated safety methods.",
      "In immediate danger, move away from hazards if safe and contact local emergency or rescue services."
    ],
    details: {
      "Status": "Not validated for any particular location, species, season, jurisdiction or user.",
      "What changed": "Actionable six-hour harvesting instructions have been replaced with a stop-use notice.",
      "Release gate": "Do not restore survival instructions until authoritative sources, local applicability and qualified review are documented."
    }
  },
  [Section.DOCTRINE]: {
    title: "Operational Doctrine",
    icon: "Anchor",
    description: "The core mindset of Blue Sea Print is active calories over passive observation, governed by environmental purity.",
    details: {
      "Objective": "To achieve 2,500 calories and 60g protein per person, per day, using only local coastal resources.",
      "Success Metric": "Measured in 'Stable Meal Days' (SMD). A system is only successful if it provides nutrition without cumulative toxin intake.",
      "Pollution Principle": "An autonomous system is a clean system. Site selection is 50% of the work. If the sea is sick, the harvest is poison.",
      "Core Rule": "Expend less energy capturing food than the food provides. Factor in the long-term energy cost of treating pollution-related illness."
    }
  },
  [Section.PATHWAY]: {
    title: "Start-From-Nothing Pathway",
    icon: "Navigation",
    description: "A 30-day progression from zero tools to a stable system, incorporating systematic pollution mapping.",
    details: {
      "Day 1: The Scavenge": "Focus on intertidal zone foraging. Screen for 'Forever Chemicals'. Avoid areas near marinas or industrial ports.",
      "Week 1: The Passive Trap": "Construction of two 'Shore Traps'. Position them away from river mouths that carry agricultural runoff.",
      "Month 1: The Cycle": "Transition to deep-water long-lining. Deeper water generally offers lower concentrations of coastal microplastics and surface oils.",
      "Mapping Phase": "Maintain a 'Red Map' of local contamination sources: sewage outlets, farm runoff, and plastic accumulation points."
    }
  },
  [Section.PRIMITIVES]: {
    title: "Tool Primitives",
    icon: "Wrench",
    description: "Understand the physics, not the brand. Scavenge for functionality, screen for toxicity.",
    details: {
      "The Gorge Hook": "A double-pointed splinter of bone or hardwood. If using scavenged metal, ensure it is not lead-based or coated in toxic anti-fouling paint.",
      "The Fixed-Wall Trap": "Stone or brush weirs. Avoid using pressure-treated wood (contains arsenic/copper) for the structure.",
      "The Line": "Twisted plant fibers or scavenged rope. Scrub scavenged synthetics to remove micro-algae that may have absorbed harbor toxins.",
      "Container Selection": "Avoid 'High Risk' plastics: Number 3 (PVC), 6 (Polystyrene), and 7 (Polycarbonate/BPA). Prioritize glass or stainless steel scavenge."
    }
  },
  [Section.NUTRITION]: {
    title: "Nutrition Reality",
    icon: "Activity",
    description: "Avoiding 'Rabbit Starvation' and 'Toxin Bioaccumulation'.",
    details: {
      "The Fat Gap": "Most white fish are too lean. Oily fish are better but store more fat-soluble toxins (PCBs). Balance is required.",
      "Bioaccumulation": "Apex predators (Shark, Barracuda) accumulate mercury. Small, fast-growing species (Sardines, Mackerel) are the 'Cleanest' protein source.",
      "Micronutrients": "Seaweed is a mineral powerhouse but can absorb heavy metals like lead or cadmium in polluted ports. Only harvest from high-energy, open-water zones.",
      "Organ Meats": "The liver is nutritional insurance but also the fish's filter. If the water is questionable, discard the liver to avoid concentrated contaminants."
    }
  },
  [Section.PRESERVATION]: {
    title: "Preservation & Continuity",
    icon: "Box",
    description: "Defeating the 'Feast or Famine' cycle without introducing chemical contaminants.",
    details: {
      "Solar Salt": "1 liter yields ~35g salt. Filter through fine cloth to remove microplastics before evaporation.",
      "Cold Smoking": "Use only clean hardwoods. Avoid 'driftwood' if it appears oily or treated, as burning toxic residues will coat the food.",
      "Air-Drying": "Ensure high-airflow areas are away from coastal roads to avoid exhaust soot/lead contamination.",
      "Storage": "Use clay pots or verified 'Food Grade' scavenged plastic. Ensure seals are airtight to prevent insect and airborne pollutant entry."
    }
  },
  [Section.LEARNING]: {
    title: "Learning Loop",
    icon: "RotateCcw",
    description: "Survival is an iterative feedback system including environmental health monitoring.",
    details: {
      "The Daily Log": "Track: Tide, clarity, and 'Contamination Markers' (oil patches, dead sea-life, unusual foam).",
      "Mistake Correction": "If catch smells metallic or chemical, move the entire operation 5km. Do not 'wash' polluted food; discard it.",
      "Observation": "Watch the indicator species. If crabs are dying or birds are avoiding an area, the water is toxic. Follow the life, avoid the rot."
    }
  },
  [Section.SAFETY]: {
    title: "Safety & Limits",
    icon: "ShieldCheck",
    description: "This prototype is not a validated survival, food-safety or emergency resource.",
    details: {
      "Wild food": "Do not identify or consume wild seaweed, shellfish, fish or other organisms based on this app. Appearance, smell and a test bite do not reliably establish safety.",
      "Marine toxins": "Some marine biotoxins are not reliably removed by cooking. Follow current local public-health and fisheries advisories; do not harvest when status is unknown.",
      "Pollution": "Visual inspection and smell cannot rule out chemical, sewage or microbial contamination. No generic distance or waiting period can certify a site safe.",
      "Coastal hazards": "Do not enter surf, tidal pools, isolated coastlines or unstable rocks to obtain food or tools. Conditions can change rapidly.",
      "Food preparation": "Raw fish, ceviche, sun-heated rocks and improvised cooking methods are not validated food-safety methods.",
      "Emergency response": "Prioritise personal safety, known safe food and drinking water, and contact with local emergency or rescue services where needed.",
      "Evidence status": "Safety-critical guidance is not validated. Use current authoritative local sources and qualified advice."
    }
  },
  [Section.FAILURE]: {
    title: "Failure Scenarios",
    icon: "Zap",
    description: "How to recover when the environment or gear fails due to pollution or wear.",
    details: {
      "Acute Poisoning": "If nausea or numbness occurs after eating, induce vomiting and hydrate with the cleanest water available. Move to a new site immediately.",
      "Oil Spill Recovery": "If a spill occurs, all fixed-wall traps are compromised. Switch to deep-water lines or move to the windward side of the island.",
      "Micro-Abrasion": "Discard lines that are fraying; they shed microplastics into your harvest zone. Replace with natural fibers if synthetics degrade.",
      "Infection": "Wounds in polluted water are 10x more dangerous. Treat with high-saline washes or boiled seaweed immediately."
    }
  },
  [Section.AI_ASSISTANT]: {
    title: "Field Intelligence",
    icon: "Cpu",
    description: "Ask specific questions about species, tool construction, pollution screening, or local conditions.",
    details: {}
  }
};
