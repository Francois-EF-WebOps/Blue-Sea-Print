
import { Section, BlueprintContent } from './types';

export const BLUEPRINT_DATA: Record<Section, BlueprintContent> = {
  [Section.SIX_HOUR_PROTOCOL]: {
    title: "6-Hour Survival Protocol",
    icon: "Timer",
    description: "From 'Documentation in Hand' to 'Eating' in 360 minutes. A strict, high-speed deployment for immediate survival with critical pollution screening.",
    timeline: [
      {
        label: "H0-1: Assessment & Screening",
        duration: "60 min",
        tasks: [
          "Check Tide: Identify if water is rising or falling. Locate high-tide line.",
          "Pollution Scan: Identify oil sheens, chemical odors, or urban runoff. Avoid stagnant areas.",
          "Resource Scan: Locate rocks (shellfish), pools (fish), and beach (tools).",
          "Safety Brief: Establish 'Never Back to Sea' and 'Toxin Avoidance' rules."
        ]
      },
      {
        label: "H1-2: Tool Primitive Build",
        duration: "60 min",
        tasks: [
          "Shell Knife: Chip a flat stone against a hammer-stone for a sharp edge.",
          "Container: Scavenge non-toxic plastics. Avoid containers previously holding fuel/oil.",
          "Digging Stick: Sharpen a wrist-thick hardwood stick on rough stone."
        ]
      },
      {
        label: "H2-4: The Primary Harvest",
        duration: "120 min",
        tasks: [
          "Shellfish: Pry 20+ mussels. Avoid individuals near storm drains or industrial pipes.",
          "Seaweed: Harvest fresh growth. Avoid seaweed tangled with microplastics or tar balls.",
          "Pool Trap: Build a rock weir. Ensure the pool is well-flushed by tides to prevent toxin build-up."
        ]
      },
      {
        label: "H4-5: Process & Decontaminate",
        duration: "60 min",
        tasks: [
          "Cleaning: Rinse in the cleanest moving seawater available. Remove all sediment.",
          "Purge: Soak clams in seawater for 20 mins to expel sand and potentially trapped micro-debris.",
          "Sun Cooking: Place fillets on dark rocks. Ensure rocks are free of oil residues or avian waste."
        ]
      },
      {
        label: "H5-6: Consumption & Observation",
        duration: "60 min",
        tasks: [
          "Test Bite: Eat small piece of seaweed. Wait for metallic/chemical aftertastes.",
          "Main Meal: Consume protein slowly. If any off-smells are detected, discard immediately.",
          "Log & Rest: Record water clarity and visible pollution for future site selection."
        ]
      }
    ],
    details: {
      "Pollution Rule": "If water has a persistent oily sheen or smells of sewage, move 2km up-current before harvesting.",
      "Success Metric": "200+ calories consumed from a verified low-contamination site.",
      "Safety Warning": "Filter feeders (mussels) concentrate toxins. In polluted zones, prioritize mobile fish over stationary shellfish.",
      "Legal Shield": "Categorize as 'Emergency Subsistence' if questioned by authorities."
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
    title: "Safety & Ethics",
    icon: "ShieldCheck",
    description: "Protecting the system, the sea, and your own biology from man-made threats.",
    details: {
      "Chemical Runoff": "After heavy rain, rivers flush fertilizers and pesticides into the sea. Wait 48 hours for tidal flushing before harvesting near estuaries.",
      "Microplastics": "Assume all filter feeders contain some. Purge in clean water and consume sparingly in urban zones.",
      "Red Tide (Biotoxins)": "Biotoxins can be exacerbated by agricultural nutrient runoff. If the water is reddish or abnormally green/foamy, stop all harvesting.",
      "Ethics of Extraction": "Leave the site cleaner than you found it. Every piece of plastic scavenged for a tool is one less piece of pollution in the system."
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
