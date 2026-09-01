export interface ServicePage {
  slug: string;
  name: string;
  icon: string;
  keyword: string;
  metaDescription: string;
  intro: string;
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_PAGES: ServicePage[] = [
  {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    icon: '🧹',
    keyword: 'Carpet Cleaning London',
    metaDescription:
      'Professional carpet steam cleaning in London. Deep extraction removes dirt, allergens and stains. Free, no-obligation quotes.',
    intro:
      'Our professional carpet steam cleaning service removes deep-down dirt, allergens, and stains from every type of carpet — leaving them fresh, soft, and looking like new. We proudly serve homes and businesses across London.',
    benefits: [
      'Deep steam extraction removes embedded dirt and allergens',
      'Tough stain treatment without damaging fibres',
      'Eco-friendly, pet and child-safe cleaning solutions',
      'Fast drying — most carpets are ready within 4–6 hours',
      'Free, no-obligation quotes',
    ],
    process: [
      { title: 'Inspection & Pre-treatment', description: 'We assess your carpet and pre-treat heavily soiled or stained areas.' },
      { title: 'Deep Steam Extraction', description: 'Professional-grade equipment lifts dirt, dust mites, and allergens from deep within the fibres.' },
      { title: 'Stain & Spot Treatment', description: 'Stubborn stains such as wine, mud, and pet marks are specially treated.' },
      { title: 'Fast-Dry Finish', description: 'A final inspection ensures every area meets our quality standard before we leave.' },
    ],
    faqs: [
      {
        question: 'How long does carpet cleaning take to dry?',
        answer: 'With our professional steam extraction, most carpets dry within 4–6 hours depending on fabric type and room ventilation.',
      },
      {
        question: 'Can you remove old or set-in stains?',
        answer: 'In most cases, yes. We use specialist pre-treatments for tough stains like wine, mud, and pet accidents — get in touch for a free assessment.',
      },
      {
        question: 'Do you move furniture during cleaning?',
        answer: 'We can clean around light furniture. For a full room clean, let us know in advance and we will discuss the best approach with you.',
      },
      {
        question: 'Is the cleaning process safe for pets and children?',
        answer: 'Yes. We use eco-friendly, non-toxic cleaning solutions that are safe for your whole family, including pets.',
      },
    ],
  },
  {
    slug: 'upholstery-sofa-cleaning',
    name: 'Upholstery & Sofa Cleaning',
    icon: '🛋️',
    keyword: 'Upholstery & Sofa Cleaning London',
    metaDescription:
      'Professional upholstery and sofa steam cleaning in London. Safe for delicate fabrics, removes odours and stains. Free quotes.',
    intro:
      'From sofas and armchairs to dining chairs and curtains, our upholstery steam cleaning service is safe, effective, and gentle on your fabric furniture — restoring colour, softness, and freshness across your London home.',
    benefits: [
      'Safe for delicate and modern fabric types',
      'Removes odours, stains and trapped allergens',
      'Restores colour and softness to tired upholstery',
      'Suitable for sofas, chairs, headboards and curtains',
      'Free, no-obligation quotes',
    ],
    process: [
      { title: 'Fabric Assessment', description: 'We check the fabric type to select the safest, most effective cleaning method.' },
      { title: 'Gentle Steam Clean', description: 'Low-moisture steam cleaning lifts dirt without soaking or damaging the fabric.' },
      { title: 'Stain Treatment', description: 'Targeted treatment for spills, pet marks, and everyday wear.' },
      { title: 'Deodorising & Drying', description: 'A deodorising finish leaves upholstery smelling fresh, with a quick drying time.' },
    ],
    faqs: [
      {
        question: 'Is steam cleaning safe for all fabric types?',
        answer: 'We assess every fabric before cleaning and adjust our method accordingly, so it is safe for the vast majority of upholstery types.',
      },
      {
        question: 'How often should upholstery be cleaned?',
        answer: 'We recommend professional cleaning every 6–12 months, or more often for households with pets or young children.',
      },
      {
        question: 'Can you remove pet odours from sofas?',
        answer: 'Yes, our deodorising treatment is specifically designed to neutralise pet and everyday odours, not just mask them.',
      },
    ],
  },
  {
    slug: 'rug-cleaning',
    name: 'Rug Cleaning',
    icon: '🧵',
    keyword: 'Rug Cleaning London',
    metaDescription:
      'Specialist rug steam cleaning in London, including wool and delicate rugs. Colour-safe, deep clean. Free quotes.',
    intro:
      'Rugs need specialist care. Our rug cleaning service uses powerful steam extraction combined with colour-safe techniques to deep clean everyday and delicate rugs alike, across London homes.',
    benefits: [
      'Specialist care for delicate and valuable rugs',
      'Deep steam extraction removes dust mites and allergens',
      'Colour-safe cleaning process',
      'Suitable for wool, synthetic and mixed-fibre rugs',
      'Free, no-obligation quotes',
    ],
    process: [
      { title: 'Rug Assessment', description: 'We identify the rug material and construction to choose the right cleaning approach.' },
      { title: 'Dust & Debris Removal', description: 'A thorough pre-clean removes loose dirt and grit before deep cleaning.' },
      { title: 'Deep Steam Clean', description: 'Colour-safe steam extraction lifts dirt from deep within the pile.' },
      { title: 'Careful Drying', description: 'Rugs are left to dry properly to avoid shrinkage or fibre damage.' },
    ],
    faqs: [
      {
        question: 'Do you clean wool and delicate rugs?',
        answer: 'Yes, we assess the material first and use a colour-safe, gentle method suited to delicate and wool rugs.',
      },
      {
        question: 'Will the colours run or fade?',
        answer: 'Our colour-safe process is designed to protect your rug\'s colours — we always test on a small area first.',
      },
      {
        question: 'How long until I can use the rug again?',
        answer: 'Most rugs are safe to walk on within a few hours, though we recommend keeping heavy foot traffic off until fully dry.',
      },
    ],
  },
  {
    slug: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    icon: '🛏️',
    keyword: 'Mattress Cleaning London',
    metaDescription:
      'Professional mattress steam cleaning in London. Removes dust mites, allergens and stains for a healthier night\'s sleep. Free quotes.',
    intro:
      'A clean mattress means healthier sleep. Our steam cleaning service removes dust mites, allergens, stains, and odours from mattresses of all sizes, across London households.',
    benefits: [
      'Removes dust mites, allergens and bacteria',
      'Eliminates odours and everyday stains',
      'Improves sleep hygiene for the whole family',
      'Eco-friendly, chemical-light steam process',
      'Free, no-obligation quotes',
    ],
    process: [
      { title: 'Inspection', description: 'We check the mattress for stains and problem areas before starting.' },
      { title: 'Vacuum & Pre-treatment', description: 'A thorough vacuum removes surface dust before targeted pre-treatment.' },
      { title: 'Steam Sanitisation', description: 'Deep steam cleaning sanitises the mattress and lifts embedded allergens.' },
      { title: 'Stain Removal & Drying', description: 'Stubborn stains are treated individually, followed by a quick-dry finish.' },
    ],
    faqs: [
      {
        question: 'How often should mattresses be cleaned?',
        answer: 'We recommend professional mattress cleaning every 6–12 months to maintain a healthy sleep environment.',
      },
      {
        question: 'Is it safe for allergy sufferers?',
        answer: 'Yes — our steam cleaning process is specifically effective at removing dust mites and allergens that can trigger allergies.',
      },
      {
        question: 'Will my mattress take long to dry?',
        answer: 'We use a low-moisture process, and most mattresses are dry and ready to use within a few hours.',
      },
    ],
  },
  {
    slug: 'stain-removal',
    name: 'Stain Removal',
    icon: '✨',
    keyword: 'Carpet & Upholstery Stain Removal London',
    metaDescription:
      'Expert stain removal for carpets, rugs and upholstery in London. Wine, pet, mud and ink stains treated. Free quotes.',
    intro:
      'From wine and pet accidents to mud and ink, our specialist stain removal service tackles tough stains that regular cleaning cannot — safely and effectively, across carpets, rugs and upholstery in London homes.',
    benefits: [
      'Specialist treatment for wine, pet, mud and ink stains',
      'Safe on carpets, rugs and upholstery',
      'No harsh chemical residue left behind',
      'Often combined with a full steam clean for best results',
      'Free, no-obligation quotes',
    ],
    process: [
      { title: 'Stain Identification', description: 'We identify the stain type to select the most effective treatment.' },
      { title: 'Targeted Pre-treatment', description: 'A specialist solution is applied directly to break down the stain.' },
      { title: 'Deep Extraction', description: 'Steam extraction lifts the loosened stain from the fibres.' },
      { title: 'Final Inspection', description: 'We check the treated area to confirm the best possible result.' },
    ],
    faqs: [
      {
        question: 'Can old or set-in stains be removed?',
        answer: 'Many old stains respond well to our treatment, though results can vary by stain type and age — we\'ll give you an honest assessment before starting.',
      },
      {
        question: 'Is stain removal included in a full clean?',
        answer: 'Basic stain treatment is included with our standard carpet and upholstery cleaning. Heavily stained items may need additional treatment, which we\'ll always discuss with you first.',
      },
      {
        question: 'What types of stains can you treat?',
        answer: 'We treat a wide range including wine, coffee, pet accidents, mud, grease, and ink on carpets, rugs and upholstery.',
      },
    ],
  },
  {
    slug: 'end-of-tenancy-cleaning',
    name: 'End-of-Tenancy Cleaning',
    icon: '🔑',
    keyword: 'End of Tenancy Carpet Cleaning London',
    metaDescription:
      'End of tenancy carpet and upholstery steam cleaning in London — help secure your deposit back. Flexible scheduling, free quotes.',
    intro:
      'Moving out? Our end-of-tenancy carpet and upholstery cleaning service is designed to help you leave the property spotless and support the return of your full deposit — available across London.',
    benefits: [
      'Helps support the return of your full deposit',
      'Thorough steam clean of carpets, rugs and upholstery',
      'Stain and odour treatment included',
      'Flexible scheduling around your move-out date',
      'Free, no-obligation quotes',
    ],
    process: [
      { title: 'Pre-Move-Out Inspection', description: 'We review the carpets and upholstery to plan the clean around your checkout requirements.' },
      { title: 'Full Steam Clean', description: 'A thorough steam clean of all carpets, rugs and upholstery in the property.' },
      { title: 'Stain & Odour Treatment', description: 'Any marks or odours from tenancy wear are treated individually.' },
      { title: 'Final Walkthrough-Ready Finish', description: 'The property is left clean and ready for your check-out inspection.' },
    ],
    faqs: [
      {
        question: 'Will this help me get my deposit back?',
        answer: 'A professional carpet and upholstery clean is one of the most common requirements from landlords and letting agents at check-out, and can support your deposit return.',
      },
      {
        question: 'Can you work directly with landlords or letting agents?',
        answer: 'Yes, we\'re happy to coordinate timing directly with landlords, letting agents, or tenants.',
      },
      {
        question: 'Can you clean on short notice?',
        answer: 'We do our best to accommodate move-out timelines — contact us via WhatsApp as early as possible to check availability.',
      },
    ],
  },
];
