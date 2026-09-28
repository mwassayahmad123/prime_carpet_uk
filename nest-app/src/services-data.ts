export interface ServicePage {
  slug: string;
  name: string;
  icon: string;
  keyword: string;
  seoTitle?: string;
  metaDescription: string;
  intro: string;
  introSecondary?: string;
  benefitsIntro?: string[];
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
    benefitsIntro: [
      'We provide a thorough cleaning of your carpets, home, and furnishings. Our service is suitable for everyday dirt, deeper buildup, and many common <a href="/services/stain-removal/">carpet stains</a>.',
    ],
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
    benefitsIntro: [
      'We take a careful approach to upholstery cleaning, using methods suited to the fabric rather than treating every sofa or chair in the same way. Our service is designed to tackle everyday dirt, stains, odours, and build-up while helping protect the look and feel of your furniture.',
    ],
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
    benefitsIntro: [
      'Every rug has different cleaning needs, so we avoid using the same approach for every material. Our professional rug cleaning services are designed to remove everyday build-up while taking care of the rug\'s appearance and condition.',
    ],
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
    seoTitle: 'Mattress Cleaning London | Fresh, Deep & Careful Cleaning',
    metaDescription:
      'We provide professional mattress cleaning in London to remove dust, stains, and odours. Careful steam cleaning for different mattress types. Get a free quote.',
    intro:
      'Your mattress absorbs dust, sweat, body oils, and everyday odours over time. Our mattress cleaning service in London helps remove this built-up dirt and refresh your mattress without replacing it. We clean different mattress sizes and materials, choosing a suitable cleaning method based on the mattress condition, fabric, and stains.',
    benefitsIntro: [
      'A clean mattress can make your bedroom feel fresher and more comfortable. Our team provides a professional mattress cleaning service for homes and properties across London, with careful cleaning designed for everyday dirt, stains and unwanted odours.',
      'Whether you are looking for a professional mattress cleaner or a <a href="/">mattress cleaning company</a>, we make the booking process simple.',
    ],
    benefits: [
      'Helps remove dust, dirt and built-up debris',
      'Treats everyday stains and unwanted odours',
      'Suitable for different mattress sizes and materials',
      'Professional cleaning with a careful steam-based process',
      'Free, no-obligation quotes',
    ],
    processIntro: [
      'Our mattress cleaning process is designed to clean the mattress thoroughly while taking care of its material. We assess the mattress first, then choose the right treatment for its condition. If you want to professionally clean a mattress, our service provides a practical way to refresh a mattress without replacing it. We offer mattress deep cleaning services for mattresses that have built up dirt, stains or odours through regular use.',
      'So, if you are searching for a "mattress cleaning service near me" or a local bed cleaning service in London. If you are unsure whether your mattress needs a full clean, we can assess its condition and explain the most suitable option.',
    ],
    process: [
      { title: 'Inspection', description: 'We check the mattress for its material, overall condition, stains, marks and areas that need extra attention. This helps us decide which cleaning method is most suitable.' },
      { title: 'Vacuum & Pre-Treatment', description: 'We start by vacuuming the mattress to remove loose dust and surface debris. Stains and heavily soiled areas are then treated before the main cleaning begins.' },
      { title: 'Mattress Steam Cleaning', description: 'Our mattress steam cleaning process works into the fabric to help lift embedded dirt, sweat, and everyday build-up. Where suitable, we use controlled moisture to clean the mattress without unnecessarily soaking it.' },
      { title: 'Stain Removal & Drying', description: 'Stubborn marks are treated according to the type of stain and mattress material. After cleaning, we use a careful drying process to help reduce moisture and leave the mattress fresh and ready to use when fully dry.' },
    ],
    pricingParagraphs: [
      'Every mattress is different, so the cost can depend on its size, material, condition, and the amount of cleaning required. Contact us for a free quote with no hidden fees.',
      'Whether you need a one-off clean or regular deep mattress cleaning, <a href="/">Prime Carpet Cleaning and Upholstery Steam Cleaning</a> can arrange a convenient appointment for your home.',
    ],
    faqs: [
      {
        question: 'How much does it cost to clean a mattress in London?',
        answer: 'The price depends on the mattress size, material, condition, and the level of cleaning required. Stains and heavily soiled areas may also affect the cost. Contact us for a free, no-obligation quote based on your mattress.',
      },
      {
        question: 'Is it worth getting a mattress cleaned?',
        answer: 'Yes, professional cleaning can help remove built-up dust, dirt, sweat, stains, and odours from a mattress. It can be a useful option when your mattress is still in good condition but needs a proper refresh.',
      },
      {
        question: 'Is it better to steam or dry clean a mattress?',
        answer: 'It depends on the mattress material and its condition. Mattress steam cleaning can be suitable for many mattresses because it helps lift dirt and stains using controlled moisture. However, we assess the mattress first and choose a method that is appropriate for the material.',
      },
      {
        question: 'How often should your mattress be cleaned?',
        answer: 'There is no single schedule that works for every mattress. Many people choose professional cleaning every 6–12 months, while mattresses that receive heavier everyday use may need attention sooner. Regular vacuuming and dealing with spills quickly can also help keep your mattress fresher between professional cleans.',
      },
      {
        question: 'Can you provide professional bed cleaning?',
        answer: 'Yes. If you are looking for professional bed cleaning, we can clean mattresses as part of our specialist mattress cleaning service. For customers searching for a bed cleaner near me, we can assess the mattress and recommend a suitable cleaning approach.',
      },
    ],
  },
  {
    slug: 'stain-removal',
    name: 'Stain Removal',
    icon: '✨',
    keyword: 'Stain Removal London',
    seoTitle: 'Stain Removal London | Professional Treatment for Tough Stains',
    metaDescription:
      'We provide expert stain removal in London for carpets and upholstery. We treat wine, coffee, food, pet, and other stubborn stains. Get a free quote now.',
    intro:
      'Some stains need more than a standard carpet clean. Our stain removal service in London is designed to tackle common marks such as wine, coffee, food, mud, grease, and pet accidents. <a href="/">Prime Carpet Cleaning and Upholstery Steam Cleaning</a> assess the stain and the material first, then choose a suitable treatment to help lift the mark while taking care of the carpet, rug, or upholstery.',
    introSecondary:
      'Whether you need professional stain removal in London for your home or a one-off treatment for a difficult mark, we provide a careful and practical service based on the condition of the affected area.',
    benefitsIntro: [
      'Different stains need different treatments. We don\'t use the same approach for every mark. Our team looks at the stain, fabric, and surrounding area before deciding how to treat it. If you are searching for a "<a href="/">local stain removal company near me</a>", we can assess the problem and explain the most suitable treatment before work begins.',
    ],
    benefits: [
      'Targeted treatment for wine, coffee, food, mud, grease, pet and ink stains',
      'Suitable for carpets, rugs and upholstery',
      'Professional treatments chosen for the material and stain',
      'Can be combined with carpet cleaning and stain removal where needed',
      'Free, no-obligation quotes',
    ],
    processIntro: [
      'Our stain treatment process focuses on the problem area rather than simply cleaning the whole surface. This allows us to select the right treatment for the type of stain and the material. Carpet stain removal service is suitable for many everyday marks found in homes and workplaces. We can treat carpets, rugs, and upholstery, depending on the material and condition.',
      'For businesses that need regular or one-off treatment, we also provide commercial carpet stain removal in London for offices, rental properties, and other commercial spaces. If you\'re looking for professional carpet stain removal in London, we are here to help you. Our stain removal process:',
    ],
    process: [
      { title: 'Stain Identification', description: 'We first inspect the affected area to identify the type of stain, how long it has been there, and what material needs treatment. This helps us choose a suitable cleaning method.' },
      { title: 'Targeted Pre-Treatment', description: 'A suitable cleaning solution is carefully applied to the stain to help loosen it from the fibres. The treatment depends on the stain and the material being cleaned.' },
      { title: 'Deep Extraction', description: 'Once the stain has been treated, we use professional extraction equipment where suitable to lift loosened dirt and residue from the fibres. This forms part of our carpet stain cleaning process.' },
      { title: 'Final Inspection', description: 'We check the treated area after cleaning and let you know what has been achieved. Some older or permanent stains may not disappear completely, so we always aim to give you a realistic result rather than make promises we cannot guarantee.' },
    ],
    pricingParagraphs: [
      'Every stain and surface is different, so the cost of treatment depends on factors such as the stain type, size, age, and material. Whether you need a local stain removal service in London or are searching for carpet stain removal near you, our team can provide a straightforward quote and arrange a convenient appointment. Contact us for a free personalised quote with no hidden fees.',
    ],
    faqHeading: 'FAQs About Stain Removal Service',
    faqs: [
      {
        question: 'Can old or set-in stains be removed?',
        answer: 'Many old stains can be improved with professional treatment, but the result depends on the type of stain, how long it has been there, and whether previous cleaning products have been used. We inspect the stain first and give you an honest assessment before treatment.',
      },
      {
        question: 'Is stain removal included in a full clean?',
        answer: 'Basic stain treatment is included with our standard carpet and <a href="/services/upholstery-sofa-cleaning/">upholstery cleaning</a> where appropriate. Heavily stained areas may need more targeted treatment, which we will explain before carrying out any additional work.',
      },
      {
        question: 'What types of stains can you treat?',
        answer: 'We can treat many common stains, including wine, coffee, food, mud, grease, pet accidents, and ink. The final result depends on the stain, the material, and how long the mark has been present.',
      },
      {
        question: 'Can you remove stains from carpets and upholstery?',
        answer: 'Yes. We provide stain treatment for suitable carpets, rugs, and upholstery. Before cleaning, we check the material and stain to make sure the chosen treatment is appropriate.',
      },
      {
        question: 'Do you provide carpet stain removal?',
        answer: 'Yes. Our professional carpet stain removal service is designed for marks that need more focused treatment than everyday cleaning. We assess each stain before choosing the most suitable method.',
      },
    ],
  },
  {
    slug: 'end-of-tenancy-cleaning',
    name: 'End-of-Tenancy Cleaning',
    icon: '🔑',
    keyword: 'End of Tenancy Cleaning London',
    seoTitle: 'End of Tenancy Cleaning in London | Move-Out Cleaning',
    metaDescription:
      'Our London end-of-tenancy cleaning helps prepare your property for inspection, with detailed cleaning for kitchens, bathrooms, floors, and carpets. Call now!',
    intro:
      'Moving out of a rented property? Our end of tenancy cleaning service in London helps prepare your home for the final inspection before you hand back the keys. We focus on the areas that need the most attention, including carpets, floors, kitchens, bathrooms and other commonly used spaces.',
    introSecondary:
      'Whether you are a tenant moving out or a landlord preparing a property for its next occupant, we provide a practical clean based on the condition and requirements of the property.',
    benefitsIntro: [
      'Moving out can be stressful, especially when you need to leave the property clean and ready for inspection. Our end of tenancy cleaning services are designed to take care of the detailed cleaning so you can focus on your move.',
      'If you are searching for "end of tenancy cleaning near me", our team can discuss your property and cleaning requirements before arranging an appointment.',
    ],
    benefits: [
      'Thorough cleaning for kitchens, bathrooms, floors and living areas',
      'Carpet, rug and upholstery cleaning where required',
      'Stain and odour treatment for areas affected by everyday use',
      'Flexible appointments around your move-out date',
      'Free, no-obligation quotes',
    ],
    processIntro: [
      'Every property is different, so we start by understanding what needs to be cleaned rather than using the same checklist for every home. If you need professional tenancy cleaning, we can arrange a service around your move-out schedule. Our move-out cleaning service in London can cover the main areas of the property, with additional carpet, rug or <a href="/services/upholstery-sofa-cleaning/">upholstery cleaning</a> where needed. Our process include:',
    ],
    process: [
      { title: 'Property Check', description: 'We review the property and identify areas that need extra attention. This can include kitchens, bathrooms, floors, carpets, upholstery and other high-use areas.' },
      { title: 'Detailed Cleaning', description: 'We work through the property carefully, removing everyday dirt, dust and built-up grime. Carpets, <a href="/services/rug-cleaning/">rugs</a> and upholstered furnishings can also be cleaned where required.' },
      { title: 'Stain & Odour Treatment', description: 'Marks and unwanted odours caused by normal tenancy use are treated individually. The treatment depends on the surface, stain and condition of the area.' },
      { title: 'Final Check', description: 'Once the cleaning is complete, we check the main areas to make sure the property has been left clean and presentable for the next stage of the move-out process.' },
    ],
    pricingParagraphs: [
      'Every property is different, so the price depends on factors such as property size, condition, number of rooms, and the level of cleaning required. For customers searching for move-out cleaners near me or end of tenancy cleaners in London, we can provide a free quote based on the size, condition, and cleaning requirements of the property.',
      'Contact us for a free, personalised quote with no hidden fees. We can discuss your move-out date and explain what cleaning would be most suitable for the property.',
    ],
    faqHeading: 'FAQs About End-of-Tenancy Cleaning Service',
    faqs: [
      {
        question: 'How much does end of tenancy cleaning cost in London?',
        answer: 'The cost depends on the size of the property, number of rooms, condition, and cleaning requirements. Additional services such as carpet, rug, or upholstery cleaning may also affect the price. Contact us for a free quote based on your property.',
      },
      {
        question: 'Is getting an end of tenancy cleaning a good idea?',
        answer: 'Professional cleaning can save time and help you leave a rented property clean and presentable for the final inspection. It can be especially useful when the property needs detailed cleaning in areas that are easy to overlook during a move.',
      },
      {
        question: 'Will end-of-tenancy cleaning guarantee my deposit back?',
        answer: 'No <a href="/">cleaning company</a> can guarantee a deposit refund because this depends on the property\'s condition, tenancy agreement and the landlord or letting agent\'s assessment. A thorough clean can, however, help you address dirt, stains and general cleaning issues before the inspection.',
      },
      {
        question: 'Can you work directly with landlords or letting agents?',
        answer: 'Yes. We can coordinate the cleaning time with tenants, landlords or letting agents where required. Just let us know the property\'s access arrangements and preferred cleaning date.',
      },
      {
        question: 'Can you clean on short notice?',
        answer: 'We do our best to accommodate short-notice move-out dates, depending on availability. Contact us as early as possible with your preferred date so we can check the available options.',
      },
      {
        question: 'What does London end of tenancy cleaning include?',
        answer: 'The cleaning can cover the main areas of the property, including kitchens, bathrooms, floors and living spaces. Carpets, rugs and upholstery can also be cleaned where required. The exact service depends on the property and the level of cleaning needed.',
      },
    ],
  },
];
