
import { Section, BlueprintContent } from './types';

export const BLUEPRINT_DATA: Record<Section, BlueprintContent> = {
  [Section.SIX_HOUR_PROTOCOL]: {
    title: "6-Hour Survival Protocol",
    icon: "Timer",
    description: "From 'Documentation in Hand' to 'Eating' in 360 minutes. A strict, high-speed deployment for immediate survival.",
    timeline: [
      {
        label: "H0-1: Assessment & Preparation",
        duration: "60 min",
        tasks: [
          "Check Tide: Identify if water is rising or falling. Locate high-tide line.",
          "Resource Scan: Locate rocks (shellfish), pools (fish), and beach (tools).",
          "Safety Brief: Establish 'Never Back to Sea' rule and identification limits."
        ]
      },
      {
        label: "H1-2: Tool Primitive Build",
        duration: "60 min",
        tasks: [
          "Shell Knife: Chip a flat stone against a hammer-stone for a sharp edge.",
          "Container: Scavenge large shells, plastic, or use a folded hat/shirt.",
          "Digging Stick: Sharpen a wrist-thick hardwood stick on rough stone."
        ]
      },
      {
        label: "H2-4: The Primary Harvest",
        duration: "120 min",
        tasks: [
          "Shellfish: Pry 20+ mussels or limpets from rocks using the digging stick.",
          "Seaweed: Harvest green (Sea Lettuce) or red (Dulse) seaweed. Avoid brown sludge.",
          "Pool Trap: Build a simple rock weir in a tide pool to trap retreating fish."
        ]
      },
      {
        label: "H4-5: Process & Heat",
        duration: "60 min",
        tasks: [
          "Cleaning: Rinse catch in seawater. Purge sand from clams. Gut fish.",
          "Sun Cooking: Place thin fillets on dark, sun-heated rocks. Cover with seaweed.",
          "Ceviche: Chop fish into small pieces; soak in acidic juice if citrus is found."
        ]
      },
      {
        label: "H5-6: Consumption & Planning",
        duration: "60 min",
        tasks: [
          "Test Bite: Eat small piece of seaweed. Wait 15 mins for reaction.",
          "Main Meal: Consume protein and seaweed slowly. Do not overfill.",
          "Log & Rest: Record what worked. Identify 3 improvements for the next 6-hour cycle."
        ]
      }
    ],
    details: {
      "Success Metric": "200+ calories consumed with no injury and a plan for the next 12 hours.",
      "Safety Warning": "If light is fading, stop processing. prioritize shelter before the 6-hour meal if exposure is a risk.",
      "Legal Shield": "Categorize as 'Emergency Subsistence' if questioned by authorities."
    }
  },
  [Section.DOCTRINE]: {
    title: "Operational Doctrine",
    icon: "Anchor",
    description: "The core mindset of Blue Sea Print is active calories over passive observation.",
    details: {
      "Objective": "To achieve 2,500 calories and 60g protein per person, per day, using only local coastal resources.",
      "Success Metric": "Measured in 'Stable Meal Days' (SMD). A system is successful if it provides 21 consecutive SMDs regardless of weather fluctuations.",
      "Core Rule": "Expend less energy capturing food than the food provides. If a 10km row nets one 500g fish, the system is failing."
    }
  },
  [Section.PATHWAY]: {
    title: "Start-From-Nothing Pathway",
    icon: "Navigation",
    description: "A 30-day progression from zero tools to a stable system.",
    details: {
      "Day 1: The Scavenge": "Focus on intertidal zone foraging. Limpets, mussels, seaweed (nori, kelp). Tools: Sharp rock or found scrap metal.",
      "Week 1: The Passive Trap": "Construction of two 'Shore Traps' (stone-walled pools) and three 'Bottle Traps' (discarded plastic) for small bait/crustaceans.",
      "Month 1: The Cycle": "Transition to deep-water long-lining and the establishment of a 7-day preservation buffer. You are now eating from last week's catch, not today's."
    }
  },
  [Section.PRIMITIVES]: {
    title: "Tool Primitives",
    icon: "Wrench",
    description: "Understand the physics, not the brand.",
    details: {
      "The Gorge Hook": "A double-pointed splinter of bone or hardwood. Tied in the center. Swallows flat, rotates 90 degrees when pulled.",
      "The Fixed-Wall Trap": "Stone or brush weirs built in tidal bottlenecks. Requires zero daily maintenance. Harvests on the ebb tide.",
      "The Line": "Twisted plant fibers (nettle, inner cedar bark) or scavenged synthetic rope unraveled and re-plied for strength."
    }
  },
  [Section.NUTRITION]: {
    title: "Nutrition Reality",
    icon: "Activity",
    description: "Avoiding 'Rabbit Starvation' (protein poisoning).",
    details: {
      "The Fat Gap": "Most white fish (cod, snapper) are too lean. You must target oily species (mackerel, sardines) or utilize the liver and organs.",
      "Micronutrients": "Seaweed is the primary source of Vitamin C and minerals. Shellfish provide Zinc and B12. Never discard the guts of small fish; they are nutritional insurance.",
      "Tradeoffs": "High-mercury apex predators (sharks) should be avoided for long-term health, but prioritized in acute calorie emergencies."
    }
  },
  [Section.PRESERVATION]: {
    title: "Preservation & Continuity",
    icon: "Box",
    description: "Defeating the 'Feast or Famine' cycle.",
    details: {
      "Solar Salt": "The foundational preservative. 1 liter of seawater yields ~35g of salt. Necessary for long-term storage.",
      "Cold Smoking": "A low-temperature wood fire in a confined barrel or pit. Reduces moisture and adds antiseptic phenols. Shelf life: 3-6 months.",
      "Air-Drying (Stockfish)": "Eviscerated lean fish hung in high-airflow areas. Requires specific humidity. Shelf life: Up to 1 year."
    }
  },
  [Section.LEARNING]: {
    title: "Learning Loop",
    icon: "RotateCcw",
    description: "Survival is an iterative feedback system.",
    details: {
      "The Daily Log": "Track: Tide height, water clarity, wind direction, and yield. Patterns emerge in 14 days.",
      "Mistake Correction": "If a trap is empty for 3 days, move it. If fish are rot-scented, increase salt ratio by 20%.",
      "Observation": "Watch the birds. They communicate the location and depth of bait balls more accurately than any sonar."
    }
  },
  [Section.SAFETY]: {
    title: "Safety & Ethics",
    icon: "ShieldCheck",
    description: "Protecting the system and the sea.",
    details: {
      "Red Tide (Biotoxins)": "Never harvest filter feeders (mussels) after heavy rain or in unusually warm water. Paralytic Shellfish Poisoning is fatal.",
      "Scale Control": "Harvest only what the immediate group can process in 48 hours. Waste is a signal of system inefficiency.",
      "Legal Shield": "Stay within 'Subsistence' or 'Artisanal' definitions. Avoid commercial gears (nets larger than 2m) to minimize regulatory conflict."
    }
  },
  [Section.FAILURE]: {
    title: "Failure Scenarios",
    icon: "Zap",
    description: "How to recover without external help.",
    details: {
      "Loss of Gear": "Return to Day 1 pathway. Use the 'Scavenge' phase to rebuild cords and hooks from bone and beach plastic.",
      "Infection": "Sea-water cuts must be treated with high-saline washes or boiled seaweed poultices immediately. Do not ignore minor abrasions.",
      "Environmental Shift": "Storms may bury your weirs. Shift focus to deep-water hand-lines until the sediment settles."
    }
  },
  [Section.AI_ASSISTANT]: {
    title: "Field Intelligence",
    icon: "Cpu",
    description: "Ask specific questions about species, tool construction, or local conditions.",
    details: {}
  }
};
