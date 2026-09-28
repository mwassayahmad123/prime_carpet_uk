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
  pricingParagraphs?: string[];
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
    seoTitle: 'Upholstery Cleaning London | Professional Sofa Cleaning',
    metaDescription:
      'Professional upholstery cleaning in London for sofas, chairs and fabric furniture. Deep cleaning, stain treatment and deodorising. Get a free quote today.',
    intro:
      'Sofas, armchairs, and other upholstered furniture can collect dust, dirt, stains, and everyday marks over time. Our upholstery cleaning services in London help refresh your furniture and improve its overall appearance without using unnecessarily harsh cleaning methods. From family sofas to office seating, we assess the material first and choose a suitable <a href="/#services">cleaning method</a> for the fabric and its condition. If you\'re looking for professional sofa cleaning, we provide a careful service for homes and businesses across London, helping restore freshness and comfort to tired upholstery.',
    benefitsIntro:
      'We take a careful approach to upholstery cleaning, using methods suited to the fabric rather than treating every sofa or chair in the same way. Our service is designed to tackle everyday dirt, stains, odours, and build-up while helping protect the look and feel of your furniture.',
    benefits: [
      'Suitable for different fabric types',
      'Helps remove stains, odours and allergens',
      'Refreshes colour and softness',
      'Suitable for sofas, chairs, headboards and curtains',
      'Free, no-obligation quotes',
    ],
    processIntro: [
      'Our deep upholstery cleaning process starts with a furniture inspection to identify areas that need extra attention. We then select the most suitable cleaning method based on the fabric, level of soiling, and type of stains. Whether you need a couch cleaning service at home or upholstery cleaning for a workplace, we tailor the service to the furniture and its condition. We provide both residential and commercial upholstery cleaning across London.',
      'If you\'re searching for "upholstery cleaning near me" or a "<a href="/">sofa cleaning company near me</a>", you can contact us to check availability in your area. We also offer professional sofa washing for customers who want to refresh sofas affected by everyday dirt, stains, and odours.',
    ],
    process: [
      { title: 'Fabric Assessment', description: 'Before cleaning, we check the fabric type, condition, and any areas affected by stains or heavy wear. This helps us choose a suitable cleaning approach and avoid using a method that could be too harsh for the material.' },
      { title: 'Gentle Steam Clean', description: 'Where suitable for the fabric, our sofa steam cleaning process uses controlled moisture and professional equipment to lift dirt and build-up from the upholstery. We adjust the cleaning method according to the material rather than using the same process for every piece of furniture.' },
      { title: 'Stain Treatment', description: 'Spills, food marks, pet accidents, and everyday stains may need extra attention. We treat problem areas individually using suitable products and techniques to help improve their appearance while taking care of the upholstery.' },
      { title: 'Deodorising & Drying', description: 'After cleaning, we apply a suitable deodorising treatment where needed to help remove unwanted smells. We then extract as much moisture as possible to support a quicker drying time and leave your furniture feeling fresh.' },
    ],
    pricingParagraphs: [
      'Every piece of furniture is different, so the cost of cleaning can depend on the size, fabric, condition, stains, and level of cleaning required. We provide a free personalised quote for your upholstery or sofa cleaning before you book, with clear pricing and no hidden fees.',
      'Whether you need a one-off clean at home or regular cleaning for a business, you can contact us for a quote and discuss your requirements.',
    ],
    faqs: [
      {
        question: 'Is steam cleaning safe for all fabric types?',
        answer: 'Not every fabric should be cleaned in the same way. We assess the material and its condition before cleaning, then choose a suitable method. Where appropriate, sofa steam cleaning can help lift dirt and stains while using controlled moisture. We always recommend following the manufacturer\'s care instructions where available.',
      },
      {
        question: 'How often should upholstery be cleaned?',
        answer: 'For many homes, professional upholstery cleaning every 12–18 months can help keep sofas and other furniture fresh and well maintained. Homes with pets, children, heavy use, or frequent spills may need cleaning more often. Businesses with regularly used seating may also benefit from a more frequent cleaning schedule.',
      },
      {
        question: 'Is it worth getting a sofa cleaned?',
        answer: 'Professional sofa cleaning can be useful when upholstery has collected dirt, stains, dust, allergens, or unwanted odours that regular vacuuming cannot fully remove. A professional clean can help refresh the appearance and feel of your sofa and keep it better maintained over time.',
      },
      {
        question: 'How much does it cost to have upholstery cleaned in London?',
        answer: 'The price depends on factors such as the size and number of items, fabric type, condition, staining, and cleaning method required. We provide free, no-obligation quotes so you know the expected cost before booking your upholstery cleaning service.',
      },
      {
        question: 'Do you clean upholstery for homes and businesses?',
        answer: 'Yes. We provide residential upholstery cleaning for sofas, chairs, and other fabric furniture in homes, as well as commercial upholstery cleaning for offices and other business premises. The cleaning method is selected according to the furniture, fabric, and level of use.',
      },
      {
        question: 'How can I hire sofa cleaning services near me?',
        answer: 'You can hire our sofa washing services by contacting <a href="/">Prime Carpet Cleaning and Upholstery Steam Cleaning</a> by phone, WhatsApp, or our online enquiry form. Tell us about your sofa and cleaning needs, and we can provide a free, no-obligation quote and arrange a convenient appointment.',
      },
    ],
  },
  {
    slug: 'rug-cleaning',
    name: 'Rug Cleaning',
    icon: '🧵',
    keyword: 'Rug Cleaning London',
    seoTitle: 'Rug Cleaning Service in London | Deep Cleaning for All Rugs',
    metaDescription:
      'Professional rug cleaning in London for wool, synthetic, and delicate rugs. Deep cleaning, careful drying, and colour-safe methods. Get a free quote today.',
    intro:
      'Rugs can collect dust, dirt, stains, and everyday marks that regular vacuuming cannot fully remove. Our rug cleaning service in London that customers can rely on helps refresh rugs while taking care of their fibres, colours, and overall condition. We assess each rug before cleaning and choose a suitable method based on its material, construction, and level of soiling.',
    introSecondary:
      'Whether you need residential rug cleaning for your home or a commercial rug cleaning service for a workplace, we provide <a href="/#services">professional cleaning across London</a>.',
    benefitsIntro:
      'Every rug has different cleaning needs, so we avoid using the same approach for every material. Our professional rug cleaning services are designed to remove everyday build-up while taking care of the rug\'s appearance and condition.',
    benefits: [
      'Specialist care for different rug types',
      'Deep cleaning for dirt and allergens',
      'Colour-conscious cleaning',
      'Suitable for different materials',
      'Free, no-obligation quotes',
    ],
    processIntro: [
      'Our rug cleaning process is designed around the condition and material of each rug. We begin by checking the rug and preparing it for cleaning before choosing the most suitable treatment. If you\'re searching for "professional rug cleaning near me" or a "rug cleaner near me", you can contact us to check availability in your area. We provide local rug cleaning across London for both homes and businesses.',
      'Our service is also suitable for customers looking for a <a href="/">rug cleaning company in London</a> that can assess the rug before recommending the right cleaning approach. If you are looking for "rug washing near me", we can discuss your rug\'s material and cleaning requirements before providing a suitable service.',
    ],
    process: [
      { title: 'Rug Assessment', description: 'We identify the rug\'s material, construction, condition, and any areas that need extra attention. This helps us choose a cleaning method that is appropriate for the rug rather than treating every rug in exactly the same way.' },
      { title: 'Dust & Debris Removal', description: 'Loose dust, grit, hair, and surface debris are removed before the main cleaning begins. This preparation helps the deeper cleaning process work more effectively and reduces the amount of loose dirt worked further into the fibres.' },
      { title: 'Deep Steam Clean', description: 'Where suitable for the rug, our deep rug cleaning process uses controlled steam extraction to lift dirt and other build-up from the fibres. The method is adjusted according to the rug\'s material and condition.' },
      { title: 'Careful Drying', description: 'After cleaning, we remove as much moisture as possible and allow the rug to dry properly. Good airflow and suitable drying help reduce the risk of problems caused by excess moisture and allow the rug to be ready for use sooner.' },
    ],
    pricingParagraphs: [
      'The cost of cleaning can vary depending on the rug\'s size, material, condition, stains, and cleaning requirements. We provide a free personalised quote so you know what to expect before booking your rug cleaning.',
      'Whether you need to clean rugs professionally at home or require regular cleaning for a business, contact us to discuss your rug and get a clear quote with no hidden fees.',
    ],
    faqHeading: 'FAQs About Rug Cleaning',
    faqs: [
      {
        question: 'How much does it cost to have a rug cleaned in London?',
        answer: 'The price depends on factors such as the rug\'s size, material, condition, staining, and cleaning method required. We provide free, no-obligation quotes so you can understand the expected cost before booking.',
      },
      {
        question: 'Is it worth getting a rug cleaned?',
        answer: 'Yes, professional rug cleaning can be useful when a rug has collected dirt, dust, stains, allergens, or unwanted odours that regular vacuuming cannot fully remove. Professional cleaning can help refresh the rug and keep it better maintained over time.',
      },
      {
        question: 'How often should rugs be professionally cleaned?',
        answer: 'For many homes, professional rug cleaning every 12–18 months can help keep rugs fresh and well maintained. Rugs in busy homes, homes with pets or children, or areas with heavy foot traffic may need cleaning more often. Commercial rugs may also require a more regular schedule depending on daily use.',
      },
      {
        question: 'Is it better to steam clean or wash a rug?',
        answer: 'It depends on the rug\'s material, construction, condition, and care requirements. Some rugs may be suitable for controlled steam extraction, while others may need a different cleaning method. We assess the rug first and choose an approach that is suitable for the specific material rather than using the same method for every rug.',
      },
      {
        question: 'Will the colours run or fade?',
        answer: 'We check the rug before cleaning and, where appropriate, test a small area to help identify how the colours may react. We then select a suitable cleaning method designed to reduce the risk of colour bleeding or fading. Results can vary depending on the rug\'s dyes, age, material, and previous treatment.',
      },
      {
        question: 'How long until I can use the rug again?',
        answer: 'Drying time depends on the rug\'s material, thickness, size, cleaning method, airflow, and room conditions. Many rugs can be used again once they are fully dry, but we recommend avoiding heavy foot traffic until the rug has completely dried.',
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
