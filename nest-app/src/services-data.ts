export interface ServicePage {
  slug: string;
  name: string;
  icon: string;
  keyword: string;
  seoTitle?: string;
  metaDescription: string;
  intro: string;
  introSecondary?: string;
  benefitsIntro?: string;
  benefits: string[];
  processIntro?: string[];
  process: { title: string; description: string }[];
  faqHeading?: string;
  faqs: { question: string; answer: string }[];
}

export const SERVICES_PAGES: ServicePage[] = [
  {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    icon: '🧹',
    keyword: 'Carpet Cleaning Services in London',
    seoTitle: 'Carpet Cleaning Services London | Deep Steam Cleaning',
    metaDescription:
      'Professional carpet cleaning services in London using deep steam extraction, stain treatment, and fast drying. For homes and businesses. Get a free quote.',
    intro:
      'Our carpet cleaning services in London help remove built-up dirt, stains, allergens, dust, and everyday marks from your carpets. We use professional steam extraction equipment to clean deep into the carpet fibres while helping your carpets look fresher and feel cleaner. Whether you need cleaning for your home, rental property, or workplace, we offer a careful service based on your carpet\'s type, condition, and cleaning needs.',
    introSecondary:
      'If you are searching for "professional carpet cleaner near me", our local team delivers convenient deep carpet cleaning across London. We also offer free, no-obligation quotes so you can understand the service before <a href="/#contact">booking</a>.',
    benefitsIntro:
      'We provide a thorough cleaning of your carpets, home, and furnishings. Our service is suitable for everyday dirt, deeper buildup, and many common <a href="/services/stain-removal/">carpet stains</a>.',
    benefits: [
      'Deep steam extraction removes embedded dirt and allergens',
      'Tough stain treatment without damaging fibres',
      'Eco-friendly, pet and child-safe cleaning solutions',
      'Fast drying — most carpets are ready within 4–6 hours',
      'Free, no-obligation quotes',
    ],
    processIntro: [
      'Our carpet washing service gives carpets a deeper clean while keeping the process practical for homes, rental properties, and workplaces. We provide residential and commercial carpet cleaning in London, adjusting our service to suit different property types and cleaning needs.',
      'For customers searching for a "<a href="/">carpet cleaning company near me</a>", Prime Carpet Cleaning provides local service across London. Whether you need to freshen up carpets at home or maintain carpets in a busy workplace, our professional carpet washing service in London removes everyday dirt, stains, and general wear. Our process includes:',
    ],
    process: [
      { title: 'Inspection & Pre-treatment', description: 'We start by checking the carpet\'s material, condition, and any areas that need extra attention. Heavily soiled sections and visible stains are noted before the main cleaning begins.' },
      { title: 'Deep Steam Extraction', description: 'Our steam carpet cleaners use professional extraction equipment to lift dirt, dust, allergens, and other build-up from the carpet fibres. The cleaning method is adjusted to suit the carpet and its condition.' },
      { title: 'Stain & Spot Treatment', description: 'Stubborn marks such as wine, coffee, mud, food, and pet accidents may need additional treatment. We assess each stain before choosing a suitable cleaning solution and treatment method.' },
      { title: 'Fast-Dry Finish', description: 'After cleaning, we check the carpet to make sure the main areas have been properly treated. We also help improve drying by removing as much moisture as possible during the extraction process.' },
    ],
    faqHeading: 'FAQs About Carpet Cleaning',
    faqs: [
      {
        question: 'How long does carpet cleaning take to dry?',
        answer: 'With our professional steam extraction, most carpets dry within 4–6 hours. Drying time can vary depending on the carpet material, amount of moisture used, room temperature, airflow, and ventilation.',
      },
      {
        question: 'How much do carpet cleaners charge?',
        answer: 'The cost depends on factors such as the number of rooms, carpet size, carpet condition, stains, and the cleaning required. We provide free, no-obligation quotes so you can understand the expected cost before booking your carpet cleaning service.',
      },
      {
        question: 'How often should carpets be professionally cleaned?',
        answer: 'For many homes, professional carpet cleaning every 12–18 months can help keep carpets fresh and well maintained. Homes with children, pets, heavy foot traffic, or frequent spills may benefit from more regular cleaning. Commercial properties may also need cleaning more often depending on daily use.',
      },
      {
        question: 'What is the best time of year to clean carpet?',
        answer: 'Carpets can be professionally cleaned at any time of year. Warmer months can make drying easier because rooms can often be ventilated more easily, but there is no need to wait for a particular season. If your carpet has stains, heavy dirt, or unpleasant odours, cleaning can be useful whenever it is needed.',
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
      'Sofas, armchairs, and other fabric furniture collect dust, dirt, and everyday marks over time. Our upholstery and sofa cleaning service helps refresh your furniture without being harsh on the fabric. From family sofas to office seating, we carefully select the right cleaning method for the material to help restore freshness, colour, and comfort.',
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
      'Different rugs need different levels of care. Our rug cleaning service removes dirt, stains, and odours while protecting the rug\'s fibres and colours. Whether you have an everyday rug or a more delicate piece, we assess it first and use a suitable cleaning method to give it the care it needs.',
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
      'Your mattress can collect dust, allergens, sweat, and odours over time. Professional mattress cleaning helps freshen the surface and remove unwanted build-up, creating a cleaner sleeping environment for your home. We clean mattresses of different sizes and can recommend the right approach based on their condition and fabric.',
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
      'Some stains need more than regular carpet cleaning. Our stain removal service tackles common marks such as wine, coffee, mud, food, and pet accidents using treatments suited to the carpet or fabric. We assess the stain and material before treatment, helping us choose an approach that is effective while protecting the surface wherever possible.',
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
      'Moving out of a rented property? Our end-of-tenancy carpet and upholstery cleaning helps freshen the areas that often show the most wear before you hand back the keys. We can clean carpets and upholstered furnishings to help leave the property looking clean and well cared for. Service availability depends on the property and cleaning requirements.',
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
