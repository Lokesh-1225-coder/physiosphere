export interface ConditionItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  badge: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  benefits: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  condition: string;
  quote: string;
  rating: number;
  isSample: boolean;
}

export interface LocationZone {
  zone: string;
  areas: string[];
}

export const BRAND_INFO = {
  name: "PhysioSphere",
  tagline: "Advanced Physiotherapy",
  fullTagline: "Expert Physiotherapy Care, Right at Your Home",
  location: "Hyderabad, Telangana, India",
  phonePrimary: "7675069960",
  phoneSecondary: "9441677882",
  phoneFormattedPrimary: "+91 76750 69960",
  phoneFormattedSecondary: "+91 94416 77882",
  whatsapp: "7675069960",
  whatsappUrl: "https://wa.me/917675069960?text=Hello%20PhysioSphere%2C%20I%20am%20interested%20in%20booking%20a%20home%20physiotherapy%20appointment.%20Please%20share%20the%20details.",
  emailPrimary: "info.physiosphere.in@gmail.com",
  emailDoctor: "dr.venu882@gmail.com",
  teamCount: 8,
  doctorVenu: {
    name: "Dr. Venu",
    qualification: "B.P.T",
    title: "Senior Home Physiotherapist",
    experienceYears: "4+",
    patientsTreated: "600+",
    bio: "Dr. Venu (B.P.T) is an experienced physiotherapist with 4+ years of clinical and home rehabilitation expertise, having treated over 600 patients across Hyderabad with personalized manual therapy and exercise protocols."
  }
};

export const CONDITIONS_TREATED: ConditionItem[] = [
  {
    id: "back-pain",
    name: "Back Pain",
    category: "Orthopaedic",
    shortDesc: "Targeted mobilization, spinal stability exercises, and ergonomics to relieve acute and chronic back discomfort.",
    detailedDesc: "Comprehensive home rehabilitation for lower, mid, and upper back stiffness, muscle spasms, and postural strain.",
    iconName: "Activity",
    badge: "Common Condition",
    image: "/images/conditions/back-pain.jpg"
  },
  {
    id: "neck-pain-cervical",
    name: "Neck Pain & Cervical Spondylosis",
    category: "Orthopaedic",
    shortDesc: "Gentle cervical traction, isometric strengthening, and manual therapy to ease stiffness and radiating pain.",
    detailedDesc: "Specialized care designed to restore neck mobility, reduce nerve compression sensations, and correct tech-neck posture.",
    iconName: "ShieldAlert",
    badge: "Specialized Care",
    image: "/images/conditions/neck-pain-cervical.jpg"
  },
  {
    id: "knee-pain",
    name: "Knee Pain",
    category: "Orthopaedic",
    shortDesc: "Strengthening quadriceps, hamstrings, and knee stabilizers to enhance joint support and pain-free walking.",
    detailedDesc: "Evidence-based therapy targeting ligament strains, meniscus discomfort, patellofemoral pain, and functional mobility.",
    iconName: "HeartPulse",
    badge: "Mobility Focus",
    image: "/images/conditions/knee-pain.jpg"
  },
  {
    id: "frozen-shoulder",
    name: "Frozen Shoulder",
    category: "Orthopaedic",
    shortDesc: "Gradual capsular stretching, scapular stabilization, and joint mobilizations to restore full shoulder reach.",
    detailedDesc: "Structured multi-phase rehabilitation tailored to freezing, frozen, or thawing stages for pain relief and range of motion.",
    iconName: "RotateCcw",
    badge: "Recovery Protocol",
    image: "/images/conditions/frozen-shoulder.jpg"
  },
  {
    id: "slip-disc-herniated",
    name: "Slip Disc & Herniated Disc",
    category: "Spine Care",
    shortDesc: "McKenzie extensions, nerve flossing, and deep core conditioning to reduce disc pressure safely.",
    detailedDesc: "Carefully calibrated non-invasive home interventions to decompress lumbar and cervical nerves and restore daily functions.",
    iconName: "Layers",
    badge: "Spine Care",
    image: "/images/conditions/slip-disc-herniated.jpg"
  },
  {
    id: "sciatica",
    name: "Sciatica",
    category: "Spine & Nerve",
    shortDesc: "Decompress sciatic nerve pathways, piriformis release, and specialized mobility drills for lasting nerve relief.",
    detailedDesc: "Targeted relief from radiating tingling, numbness, and shooting leg sensations through progressive at-home protocols.",
    iconName: "Zap",
    badge: "Nerve Relief",
    image: "/images/conditions/sciatica.jpg"
  },
  {
    id: "arthritis-joint-pain",
    name: "Arthritis & Joint Pain",
    category: "Geriatric & Joint",
    shortDesc: "Low-impact range of motion, hydro-mimicking home routines, and joint offloading strategies.",
    detailedDesc: "Tailored regimens for osteoarthritis and rheumatoid joint stiffness to maintain independence and ease day-to-day movement.",
    iconName: "Sparkles",
    badge: "Joint Health",
    image: "/images/conditions/arthritis-joint-pain.jpg"
  },
  {
    id: "sports-injuries",
    name: "Sports Injuries",
    category: "Sports Rehab",
    shortDesc: "Acute sprain/strain care, muscle rebuilding, biomechanics correction, and safe return-to-sport protocols.",
    detailedDesc: "Personalized recovery for active individuals and athletes recovering from ligament tears, tendinitis, and muscle pulls.",
    iconName: "Trophy",
    badge: "Active Rehab",
    image: "/images/conditions/sports-injuries.jpg"
  },
  {
    id: "post-surgery-rehab",
    name: "Post-Surgery Rehabilitation",
    category: "Post-Operative",
    shortDesc: "Safe bedside mobility, swelling management, scar tissue mobilization, and progressive weight-bearing exercises.",
    detailedDesc: "Structured home rehab for total knee replacement (TKR), total hip replacement (THR), spine surgeries, and arthroscopies.",
    iconName: "Stethoscope",
    badge: "Post-Surgical",
    image: "/images/conditions/post-surgery-rehab.jpg"
  },
  {
    id: "stroke-rehab",
    name: "Stroke Rehabilitation",
    category: "Neurological",
    shortDesc: "Neuro-developmental techniques, motor relearning, hemiplegic side activation, and functional retraining.",
    detailedDesc: "Patient-centered neuro-rehab delivered in familiar home surroundings to foster neural plasticity, balance, and independence.",
    iconName: "BrainCircuit",
    badge: "Neuro Care",
    image: "/images/conditions/stroke-rehab.jpg"
  },
  {
    id: "neurological-conditions",
    name: "Neurological Conditions",
    category: "Neurological",
    shortDesc: "Therapy for Parkinson's disease, neuropathy, and balance impairments to optimize functional coordination.",
    detailedDesc: "Adaptive movement strategies, gait refinement, and endurance protocols to support independence in daily living.",
    iconName: "Activity",
    badge: "Neuro Care",
    image: "/images/conditions/neurological-conditions.jpg"
  },
  {
    id: "post-fracture-rehab",
    name: "Post-Fracture Rehabilitation",
    category: "Post-Trauma",
    shortDesc: "Overcoming cast stiffness, rebuilding lost muscle mass, and safe joint re-conditioning after bone healing.",
    detailedDesc: "Guided progressive loading protocols following cast removal or orthopedic hardware fixation to restore normal limb use.",
    iconName: "Bone",
    badge: "Bone Recovery",
    image: "/images/conditions/post-fracture-rehab.jpg"
  },
  {
    id: "elderly-physiotherapy",
    name: "Elderly Physiotherapy",
    category: "Geriatric",
    shortDesc: "Gentle senior-specific mobility, balance preservation, fall prevention, and endurance support in the comfort of home.",
    detailedDesc: "Compassionate bedside and home-based care tailored to senior citizens, eliminating stressful travel and clinic waiting times.",
    iconName: "Users",
    badge: "Senior Care",
    image: "/images/conditions/elderly-physiotherapy.jpg"
  },
  {
    id: "posture-correction",
    name: "Posture Correction",
    category: "Ergonomics",
    shortDesc: "Rebalancing slouched shoulders, forward head tilt, and postural muscle fatigue with tailored corrective drills.",
    detailedDesc: "Ideal for desk workers and remote professionals across Hyderabad experiencing muscle strain from prolonged sitting.",
    iconName: "Compass",
    badge: "Ergonomics",
    image: "/images/conditions/posture-correction.jpg"
  },
  {
    id: "balance-gait-training",
    name: "Balance & Gait Training",
    category: "Functional",
    shortDesc: "Proprioception exercises, walking posture correction, and steady footing drills to minimize fall hazards.",
    detailedDesc: "Comprehensive balance assessments and progressive obstacle-safe home walking practice for unsteadiness.",
    iconName: "Footprints",
    badge: "Fall Prevention",
    image: "/images/conditions/balance-gait-training.jpg"
  },
  {
    id: "muscle-weakness-mobility",
    name: "Muscle Weakness & Mobility Issues",
    category: "Functional",
    shortDesc: "Graduated resistance exercises, functional transfer training, and vitality building for bedridden or weakened individuals.",
    detailedDesc: "Empowering patients to transition smoothly from bed to chair, stand securely, and walk comfortably within their homes.",
    iconName: "Dumbbell",
    badge: "Strength & Movement",
    image: "/images/conditions/muscle-weakness-mobility.jpg"
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "orthopaedic",
    title: "Orthopaedic Physiotherapy",
    shortDesc: "Comprehensive rehabilitation for bone, joint, ligament, and tendon disorders delivered at home.",
    detailedDesc: "From chronic back and neck discomfort to knee osteoarthritis and shoulder stiffness, our physiotherapists use manual therapy, mobilization, and strengthening routines to reduce pain and restore full functional movement.",
    benefits: ["Manual joint mobilization", "Strengthening weakened stabilizer muscles", "Ergonomic & postural retraining", "Targeted pain-relief techniques"],
    iconName: "Activity"
  },
  {
    id: "neurological",
    title: "Neurological Physiotherapy",
    shortDesc: "Specialized neuro-rehabilitation helping stroke, Parkinson's, and neuropathy patients regain independence.",
    detailedDesc: "Our home sessions leverage neuroplasticity principles, motor retraining, and functional task drills in the patient's comfortable environment, avoiding stressful clinic commutes.",
    benefits: ["Neuro-developmental therapy", "Gait & balance coordination", "Upper limb functional retraining", "Caregiver positioning education"],
    iconName: "BrainCircuit"
  },
  {
    id: "sports",
    title: "Sports Physiotherapy",
    shortDesc: "Advanced injury management, biomechanical corrections, and safe athletic return for sports enthusiasts.",
    detailedDesc: "Whether suffering from runner's knee, ankle sprains, rotator cuff strains, or tennis elbow, we design tailored home conditioning programs to accelerate recovery and prevent re-injury.",
    benefits: ["Targeted muscle re-education", "Kinetic chain assessment", "Functional agility drills", "Safe return-to-sport roadmap"],
    iconName: "Trophy"
  },
  {
    id: "post-operative",
    title: "Post-Operative Rehabilitation",
    shortDesc: "Critical bedside care following knee/hip replacements, spinal surgeries, and fracture fixations.",
    detailedDesc: "Commencing immediately after hospital discharge, our therapists assist with safe ambulation, swelling reduction, gentle joint range recovery, and progressive resistance training.",
    benefits: ["Deep vein thrombosis (DVT) prevention exercises", "Surgical site protection & safe transfers", "Progressive weight-bearing assistance", "Daily recovery milestones"],
    iconName: "ShieldAlert"
  },
  {
    id: "geriatric",
    title: "Geriatric Physiotherapy",
    shortDesc: "Gentle, respectful physical therapy designed to keep senior citizens active, mobile, and safe from falls.",
    detailedDesc: "We assess home hazards, strengthen core and leg muscles, practice safe stair climbing, and enhance confidence so seniors can enjoy dignified independence in their familiar surroundings.",
    benefits: ["Fall-risk reduction strategies", "Gentle arthritis management", "Bed mobility & chair transfer training", "Compassionate, patient pacing"],
    iconName: "HeartPulse"
  },
  {
    id: "pediatric",
    title: "Pediatric Physiotherapy",
    shortDesc: "Gentle developmental support and posture guidance for children and adolescents at home.",
    detailedDesc: "Focused on motor development, postural coordination, sports-related growing pains, and pediatric orthopaedic rehabilitation in a welcoming, stress-free family atmosphere.",
    benefits: ["Developmental milestone encouragement", "Play-based therapeutic movements", "Postural alignment exercises", "Parent guidance & home drills"],
    iconName: "Sparkles"
  },
  {
    id: "pain-management",
    title: "Pain Management",
    shortDesc: "Non-invasive, drug-free modalities and physical techniques to overcome persistent pain.",
    detailedDesc: "Combining trigger point therapy, therapeutic stretches, neuromuscular release, and heat/cold guidance to manage chronic spine, joint, and muscular discomfort naturally.",
    benefits: ["Drug-free pain alleviation", "Myofascial trigger point release", "Active movement pacing", "Long-term recurrence prevention"],
    iconName: "Zap"
  },
  {
    id: "mobility-rehab",
    title: "Mobility & Rehabilitation Training",
    shortDesc: "Comprehensive functional re-training to overcome prolonged bed rest, weakness, and loss of stamina.",
    detailedDesc: "Designed for individuals recovering from prolonged illness, hospital stays, or debility, systematically progressing from bed-bound exercises to independent walking.",
    benefits: ["Cardiopulmonary stamina rebuilding", "Sit-to-stand transitions", "Adaptive assistive device training", "Gradual daily activity resumption"],
    iconName: "Footprints"
  }
];

export const BENEFITS_OF_HOME_PHYSIO = [
  {
    number: "01",
    title: "Convenience & Comfort",
    desc: "Receive top-tier physiotherapy in the familiar surroundings of your home without stepping into crowded clinical waiting rooms.",
    iconName: "Home"
  },
  {
    number: "02",
    title: "Personalized One-to-One Attention",
    desc: "Our dedicated physiotherapist focuses 100% of their session time on you, providing continuous guidance and real-time posture corrections.",
    iconName: "UserCheck"
  },
  {
    number: "03",
    title: "No Travel Requirements",
    desc: "Eliminate stressful commutes through Hyderabad traffic, which can often aggravate back, knee, and post-operative pain before your session even starts.",
    iconName: "Car"
  },
  {
    number: "04",
    title: "Flexible Scheduling",
    desc: "Book session slots that fit your personal routine, work commitments, and family schedule for maximum convenience.",
    iconName: "Clock"
  },
  {
    number: "05",
    title: "Comfortable Recovery Environment",
    desc: "Recovering in your private space reduces anxiety, encourages active participation, and allows family members to stay informed.",
    iconName: "Smile"
  },
  {
    number: "06",
    title: "Better Exercise Supervision",
    desc: "Exercises are tailored to your real-life environment—using your actual bed, chairs, and stairs—making your home routine easier to practice correctly.",
    iconName: "Eye"
  },
  {
    number: "07",
    title: "Support for Elderly Patients",
    desc: "Senior citizens and mobility-restricted individuals benefit immensely from safe, compassionate bedside care without difficult transfers.",
    iconName: "HeartHandshake"
  },
  {
    number: "08",
    title: "Consistent Rehabilitation",
    desc: "Because sessions take place at your doorstep, missed appointments due to weather, transport, or fatigue are dramatically reduced.",
    iconName: "CheckCircle2"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Book an Appointment",
    desc: "Submit your contact details, service requirement, and preferred time via our simple Book Now form, WhatsApp, or direct call.",
    iconName: "Calendar"
  },
  {
    step: "02",
    title: "Our Team Contacts You",
    desc: "A member of our clinical coordination team promptly calls you to understand your medical history, symptoms, and exact home address.",
    iconName: "PhoneCall"
  },
  {
    step: "03",
    title: "Physiotherapist Assignment",
    desc: "We coordinate with our team of 8 physiotherapists across Hyderabad to assign an experienced specialist matching your location and condition.",
    iconName: "UserCog"
  },
  {
    step: "04",
    title: "Home Physiotherapy Session",
    desc: "Your assigned physiotherapist arrives at your doorstep for in-depth physical assessment and customized treatment to begin your recovery.",
    iconName: "Home"
  }
];

export const TESTIMONIALS_SAMPLE: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajeshwar Rao",
    location: "Kukatpally, Hyderabad",
    condition: "Post Knee Replacement Rehabilitation",
    quote: "After my knee surgery, traveling to a clinic was nearly impossible. PhysioSphere arranged a specialist who visited my home daily. The gentle guided exercises and constant encouragement made a massive difference to my walking confidence.",
    rating: 5,
    isSample: true
  },
  {
    id: "test-2",
    name: "Sunita Reddy",
    location: "Banjara Hills, Hyderabad",
    condition: "Severe Cervical Spondylosis",
    quote: "Long hours at my computer caused unbearable neck pain and numbness in my fingers. Dr. Venu's assessment and targeted home exercises brought remarkable relief within a few sessions. Very professional and polite.",
    rating: 5,
    isSample: true
  },
  {
    id: "test-3",
    name: "Venkatramiah Naidu",
    location: "Dilsukhnagar, Hyderabad",
    condition: "Elderly Mobility & Balance Support",
    quote: "My 78-year-old father had become fearful of walking after a fall. The physiotherapist from PhysioSphere was extremely patient, friendly, and structured a safe routine right in our living room. Truly grateful for their home service.",
    rating: 5,
    isSample: true
  },
  {
    id: "test-4",
    name: "Ananya Sharma",
    location: "Gachibowli, Hyderabad",
    condition: "Lumbar Disc Bulge & Sciatica",
    quote: "I couldn't sit or drive due to severe lower back pain radiating down my leg. Having an experienced physiotherapist treat me at home helped me recover comfortably while managing my work. Highly recommended!",
    rating: 5,
    isSample: true
  }
];

export const FAQ_ITEMS = [
  {
    question: "What is home physiotherapy?",
    answer: "Home physiotherapy is a professional healthcare service where qualified, licensed physiotherapists visit your residence to evaluate, diagnose, and treat physical pain, injuries, mobility restrictions, and post-operative conditions in the comfort of your own home."
  },
  {
    question: "Which conditions can be treated at home?",
    answer: "A wide variety of conditions can be effectively managed at home, including back pain, neck pain, cervical spondylosis, knee arthritis, sciatica, frozen shoulder, sports injuries, post-surgical recovery (such as knee/hip replacement), stroke rehabilitation, post-fracture recovery, and age-related balance problems."
  },
  {
    question: "How do I book a physiotherapist with PhysioSphere?",
    answer: "Booking is quick and simple! You can click the 'Book Now' button anywhere on our website and fill out the short form, message us on WhatsApp at 7675069960, or directly call 7675069960 / 9441677882. Our team will contact you to confirm details and match you with a therapist."
  },
  {
    question: "Do you provide physiotherapy across Hyderabad?",
    answer: "Yes, PhysioSphere has a dedicated team of 8 physiotherapists positioned across Central, East, South, West, and North Hyderabad. We cover major residential hubs including Banjara Hills, Gachibowli, Kukatpally, Madhapur, Uppal, Dilsukhnagar, LB Nagar, Secunderabad, and many surrounding areas."
  },
  {
    question: "How many sessions will I need for my recovery?",
    answer: "The number of sessions depends on your specific diagnosis, chronicity of pain, tissue healing time, and physical goals. During your initial assessment session, the physiotherapist conducts a thorough physical evaluation and recommends a personalized treatment plan with expected milestones."
  },
  {
    question: "Can elderly patients receive home physiotherapy?",
    answer: "Absolutely. Home physiotherapy is especially beneficial for senior citizens. It avoids stressful car rides, stairs, and clinic waiting rooms. Our physiotherapists specialize in gentle balance training, fall prevention, joint mobility, and functional movement using the patient's familiar household environment."
  },
  {
    question: "Do you provide post-surgery rehabilitation at home?",
    answer: "Yes, post-operative rehabilitation is one of our primary specializations. We support patients recovering from Total Knee Replacement (TKR), Total Hip Replacement (THR), spine surgeries, and fracture fixations with safe bedside mobility, swelling management, and progressive exercise programs."
  },
  {
    question: "Can I speak directly with a physiotherapist before booking?",
    answer: "Yes. When you submit your request or reach out via phone/WhatsApp, our clinical coordinator or senior physiotherapist Dr. Venu will speak with you to understand your condition, answer your questions, and ensure home physiotherapy is appropriate for your needs."
  },
  {
    question: "How will I know whether a physiotherapist is available in my area?",
    answer: "Our team reviews incoming appointment requests and checks the current schedule and geographical location of our 8 physiotherapists. We promptly confirm slot availability and therapist assignment during our initial coordination call."
  },
  {
    question: "How can I contact PhysioSphere directly?",
    answer: "You can reach us by phone at 7675069960 or 9441677882, via WhatsApp at 7675069960, or by email at info.physiosphere.in@gmail.com and dr.venu882@gmail.com."
  }
];

export const HYDERABAD_ZONES: LocationZone[] = [
  {
    zone: "Central Hyderabad",
    areas: [
      "Abids",
      "Himayatnagar",
      "Ameerpet",
      "Begumpet",
      "Somajiguda",
      "Punjagutta",
      "Banjara Hills",
      "Jubilee Hills",
      "Kachiguda",
      "Nallakunta",
      "Chikkadpally",
      "Domalguda",
      "Narayanguda",
      "Kavadiguda",
      "Gandhinagar",
      "Ramnagar",
      "Hyderguda",
      "Adikmet"
    ]
  },
  {
    zone: "East Hyderabad",
    areas: [
      "Uppal",
      "Nagole",
      "Tarnaka",
      "Habsiguda",
      "Nacharam",
      "Ramanthapur",
      "Moula Ali",
      "Kushaiguda",
      "Ghatkesar",
      "Malkajgiri",
      "Mallapur",
      "Peerzadiguda",
      "Boduppal",
      "Ecil",
      "Anandbagh",
      "Lallaguda"
    ]
  },
  {
    zone: "South & Southeast Hyderabad",
    areas: [
      "LB Nagar",
      "Kothapet",
      "Dilsukhnagar",
      "Karmanghat",
      "Vanasthalipuram",
      "Champapet",
      "Saidabad",
      "Santosh Nagar",
      "Saroor Nagar",
      "Meerpet",
      "Attapur",
      "Rajendra Nagar",
      "Malakpet",
      "New Malakpet",
      "New Mallepally",
      "Moghalpura",
      "Yakhutpura",
      "Bahadurpura",
      "Mansoorabad",
      "Maruthi Nagar",
      "Chaitanyapuri",
      "Moosarambagh",
      "Hayath Nagar"
    ]
  },
  {
    zone: "West Hyderabad",
    areas: [
      "Madhapur",
      "HITEC City",
      "Gachibowli",
      "Financial District",
      "Kondapur",
      "Kokapet",
      "Manikonda",
      "Kukatpally",
      "KPHB",
      "Miyapur",
      "Lingampally",
      "Mehdipatnam",
      "Tolichowki",
      "Borabanda",
      "Kompally",
      "Chandanagar",
      "Nallagandla",
      "Puppalaguda",
      "Raidurg",
      "Shaikpet",
      "Hafeezpet",
      "Kothaguda",
      "Madinaguda",
      "Nizampet",
      "Bachupally",
      "Pragathi Nagar",
      "JNTU",
      "Hydernagar",
      "Serilingampally",
      "Film Nagar",
      "Khajaguda",
      "Gudimalkapur",
      "Langarhouz",
      "Masabtank"
    ]
  },
  {
    zone: "North & Secunderabad",
    areas: [
      "Secunderabad",
      "Alwal",
      "Bowenpally",
      "Sainikpuri",
      "Neredmet",
      "Lothkunta",
      "East Marredpally",
      "West Marredpally",
      "Yapral",
      "Suraram",
      "Jeedimetla",
      "Jagathgirigutta",
      "Hasmathpet",
      "Sitaphalmandi",
      "Mettuguda",
      "Moosapet",
      "Bharat Nagar",
      "Motinagar",
      "Erragadda",
      "Shakthi Nagar",
      "Shivarampalli"
    ]
  }
];
