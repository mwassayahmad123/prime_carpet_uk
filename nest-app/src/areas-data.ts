export interface AreaStep {
  title: string;
  description: string;
}

export interface AreaFaq {
  question: string;
  answer: string;
}

export interface AreaPage {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  homesBusinessesTitle: string;
  homesBusinesses: string[];
  whyChooseIntro: string[];
  whyChoosePoints: string[];
  whyChooseAfter?: string;
  howItWorksIntro: string;
  steps: AreaStep[];
  areasIntro: string;
  majorTowns: string[];
  otherTowns: string;
  // When set, the areas section lists every town (no "Major Towns" split) and uses these paragraphs.
  allTowns?: string[];
  areasBody?: string[];
  areasAfter?: string[];
  crossLinks?: boolean;
  faqs: AreaFaq[];
  ctaText: string;
  ctaParagraphs?: string[];
}

export const AREA_PAGES: AreaPage[] = [
  {
    slug: 'berkshire',
    name: 'Berkshire',
    seoTitle: 'Carpet Cleaning Berkshire | Professional Carpet Cleaners',
    metaDescription:
      'Need carpet cleaning in Berkshire? Prime provides professional carpet cleaning for homes, rentals, and businesses across local towns. Get a free quote today.',
    intro: [
      'Looking for reliable carpet cleaning in Berkshire? Prime Carpet Cleaning and Upholstery Steam Cleaning provides <a href="/services/carpet-cleaning/">carpet cleaning</a> for homeowners, tenants, landlords, and businesses who want to keep their carpets clean, fresh, and comfortable.',
      'Our Berkshire service area includes Reading, Slough, Bracknell, Maidenhead, Windsor, Newbury, Wokingham, Thatcham, Sandhurst, Crowthorne, Hungerford and Ascot. Whether you need one room cleaned, several carpets refreshed, or <a href="/services/end-of-tenancy-cleaning/">help with a rental property</a> or commercial space, we can discuss your requirements and recommend a suitable cleaning service.',
      'Carpets collect dirt, dust, everyday marks, and other debris as people walk across them. Over time, this can affect how they look and feel. Professional cleaning can help remove accumulated dirt and refresh carpets that <a href="/blog/how-often-should-you-vacuum-your-carpet/">regular vacuuming</a> may not fully clean.',
      'Call us, message us on WhatsApp, or send an enquiry to request a free, no-obligation quote.',
    ],
    homesBusinessesTitle: 'Carpet Cleaning for Homes and Businesses in Berkshire',
    homesBusinesses: [
      'Carpets experience different types of use depending on the property. In family homes, everyday foot traffic, children, pets, food spills and <a href="/blog/how-to-remove-mud-stains-from-carpet/">muddy shoes can leave marks</a> and dirt behind. In offices, shops and other commercial spaces, regular use can cause certain areas to become noticeably dirtier than others.',
      'Our residential and commercial carpet cleaning service in Berkshire is suitable for a range of properties, including family homes, rental properties, landlord properties, offices and shops. We help refresh carpets in bedrooms, living rooms, hallways and other frequently used spaces, as well as clean carpets as part of general property care or when preparing a rental home for its next occupants. For offices, shops and other commercial spaces, our service can help address dirt and marks that build up in areas used by employees, customers and visitors.',
      "The right cleaning approach depends on the carpet's material, condition, and level of soiling. Some carpets need extra attention in busy walkways, while others may have individual stains or areas that require pre-treatment. Vacuuming remains an important part of <a href=\"/blog/carpet-care-and-maintenance-guide/\">everyday carpet care</a>, but it may not remove all the dirt and marks that build up over time. A professional assessment helps identify what the carpet needs before cleaning begins.",
    ],
    whyChooseIntro: [
      'Finding the right carpet cleaners is about more than removing visible dirt. You want a service that understands your requirements, checks the carpet before cleaning, and explains what to expect.',
      'Here is what you can expect from <a href="https://maps.app.goo.gl/zpVifVrEM7aDHazT8" target="_blank" rel="noopener noreferrer">Prime Carpet Cleaning</a>:',
    ],
    whyChoosePoints: [
      '<strong>Professional equipment:</strong> Equipment designed to clean carpets more deeply than everyday vacuuming.',
      "<strong>Careful carpet assessment:</strong> We check the carpet's material and condition to help choose a suitable cleaning approach.",
      '<strong>Pet and child-friendly cleaning solutions:</strong> We use suitable cleaning solutions for residential spaces and can discuss any specific concerns before cleaning.',
      '<strong>Clear, no-obligation quotes:</strong> You can understand the expected cost before deciding whether to book.',
      '<strong>Easy booking:</strong> Contact us by phone, WhatsApp, or online enquiry.',
      '<strong>Residential and commercial services:</strong> Cleaning options for homes, rental properties and businesses.',
      '<strong>Careful stain treatment:</strong> We assess common marks such as coffee, wine, food, mud and pet accidents before choosing a suitable treatment.',
    ],
    whyChooseAfter:
      'Every carpet is different, so we do not assume that the same treatment will be right for every property. We aim to make the booking process straightforward and explain the work before cleaning starts.',
    howItWorksIntro:
      'Our cleaning process is adjusted to the carpet and property rather than treating every job in the same way. The carpet material, condition, amount of dirt, and type of staining can all affect the approach.',
    steps: [
      {
        title: 'Carpet Inspection',
        description:
          'We begin by looking at the carpet, its material, and its overall condition. We check areas that may need extra attention, including busy walkways, visible stains, pet marks, and heavily used sections.<br><br>Carpet fibres can respond differently to <a href="/blog/how-to-choose-the-right-carpet-cleaning-products/">cleaning products</a> and <a href="/blog/carpet-cleaning-methods-explained/">methods</a>. Checking the material and condition helps us decide how the carpet should be treated and whether any areas need special attention.<br><br>We can also discuss any particular concerns you have, such as older stains, pet accidents, or areas that seem dirtier than the rest of the room.',
      },
      {
        title: 'Pre-Treatment',
        description:
          'Areas with heavier dirt or visible marks may need additional treatment before the main cleaning process.<br><br>We apply a suitable <a href="/blog/how-to-clean-carpet-stains/">cleaning solution</a> to help loosen dirt and prepare the carpet for deeper cleaning. The treatment depends on the type of mark, the carpet material, and the condition of the affected area.<br><br>Pre-treatment can help with common stains and built-up dirt, but results vary. Some old, set-in, or previously treated marks may be difficult to remove completely.',
      },
      {
        title: 'Deep Carpet Cleaning',
        description:
          "We then use professional carpet cleaning equipment to remove loosened dirt and moisture from the carpet.<br><br>This helps refresh carpets that have become dull through regular use and can remove dirt that normal vacuuming may leave behind. The cleaning approach is selected with the carpet's condition and material in mind.<br><br>The aim is to clean the carpet carefully without using an unsuitable treatment or applying more moisture than necessary.",
      },
      {
        title: 'Stain Treatment',
        description:
          'Not every stain can be treated in the same way. <a href="/blog/how-to-remove-red-wine-stains-from-carpet/">Wine</a>, <a href="/blog/how-to-remove-coffee-stains-from-carpet/">coffee</a>, food, mud, and pet accidents can all behave differently.<br><br>We assess individual marks and use a suitable treatment based on the stain and the carpet. The age of a stain, the type of substance, and any previous cleaning attempts can affect the result.<br><br>We will explain that some old or difficult stains may not disappear completely. This helps set realistic expectations before the cleaning work begins.',
      },
      {
        title: 'Drying and Final Check',
        description:
          'During cleaning, we remove as much moisture as possible to help the carpet dry sooner.<br><br>Once cleaning is complete, we check the treated areas and make sure the work has been finished properly. Drying time can vary depending on the carpet material, the amount of moisture, room temperature, and airflow.<br><br>Good ventilation and improved airflow can help the carpet dry. We can also explain any relevant drying guidance after the cleaning is complete.',
      },
    ],
    areasIntro: '',
    majorTowns: ['Reading', 'Slough', 'Bracknell', 'Maidenhead', 'Windsor', 'Newbury'],
    otherTowns: '',
    allTowns: [
      'Reading',
      'Slough',
      'Bracknell',
      'Maidenhead',
      'Windsor',
      'Newbury',
      'Wokingham',
      'Thatcham',
      'Sandhurst',
      'Crowthorne',
      'Hungerford',
      'Ascot',
    ],
    areasBody: [
      'Prime Carpet Cleaning provides professional <a href="/services/carpet-cleaning/">carpet cleaning services</a> across Berkshire, helping homeowners, landlords, tenants and businesses keep their carpets fresh, clean and well cared for.',
      'Our service area includes:',
    ],
    areasAfter: [
      'We also provide related cleaning services in Berkshire, depending on your requirements. These include <a href="/services/rug-cleaning/">rug cleaning</a>, <a href="/services/upholstery-sofa-cleaning/">upholstery cleaning</a> and <a href="/services/end-of-tenancy-cleaning/">end of tenancy cleaning</a>.',
      'If you are looking for a carpet cleaner in Berkshire, contact us with your town or postcode and a few details about the carpets you need cleaned. We can check whether your location is within our service area and discuss the available options.',
      'If your town is not listed above, you can still contact us. We will check whether we can provide the service at your address rather than assume that every location is covered.',
    ],
    crossLinks: true,
    faqs: [
      {
        question: 'Do you provide carpet cleaning in Berkshire?',
        answer:
          'Yes. We provide professional carpet cleaning for homes, rental properties and businesses across our Berkshire service area, including Reading, Slough, Bracknell, Maidenhead, Windsor and Newbury. <a href="/#contact">Contact us</a> with your location to check availability.',
      },
      {
        question: 'What areas of Berkshire do you cover?',
        answer:
          'Our listed service areas include Reading, Slough, Bracknell, Maidenhead, Windsor, Newbury, Wokingham, Thatcham, Sandhurst, Crowthorne, Hungerford and Ascot. If your town is not listed, contact us, and we can check whether we can help.',
      },
      {
        question: 'How much does carpet cleaning cost in Berkshire?',
        answer:
          'The cost depends on several factors, including the number of rooms, carpet size, condition, level of staining, and type of property. To request a quote, tell us where the property is and which areas need cleaning. We provide a free, no-obligation quote so you can understand the expected cost before booking.',
      },
      {
        question: 'How long does carpet cleaning take?',
        answer:
          'Cleaning time depends on the size of the property and the condition of the carpets. A single room will usually take less time than a whole property, while heavily soiled or stained carpets may need additional attention. We can give you a more realistic estimate after discussing your requirements.',
      },
      {
        question: 'How long does a carpet take to dry after cleaning?',
        answer:
          'Most carpets will dry within 4–6 hours after <a href="/blog/dry-carpet-cleaning-vs-steam-cleaning/">professional steam extraction</a>, although this is a guide rather than a guaranteed drying time. Carpet material, room temperature, ventilation, airflow, and the amount of moisture can all affect <a href="/blog/how-to-dry-carpet-after-cleaning/">how quickly a carpet dries</a>. Opening windows, where practical, and improving airflow can help.',
      },
      {
        question: 'Can you remove difficult carpet stains?',
        answer:
          'We can treat many common stains, including wine, coffee, food, mud, and <a href="/blog/how-to-remove-pet-urine-stains-from-carpet/">pet accidents</a>. However, results depend on the type of stain, the carpet material, and how long the mark has been present. Previous cleaning attempts can also affect the outcome.<br><br>We will assess the stain and give you an honest idea of what may be possible. For more serious marks, you can also learn about our <a href="/services/stain-removal/">stain removal service</a>.',
      },
      {
        question: 'Do you clean carpets in homes and businesses?',
        answer:
          'Yes. We provide carpet cleaning for private homes, rental properties and commercial spaces such as offices and shops across our listed Berkshire service area. The cleaning requirements can differ depending on the property and how often the carpets are used.',
      },
      {
        question: 'Should I vacuum before professional carpet cleaning?',
        answer:
          'Vacuuming can help remove loose dirt, dust, and debris before a cleaning appointment. If you can do so safely and comfortably, vacuuming the areas being cleaned may be useful. Let us know if there are any areas you are unable to prepare.',
      },
      {
        question: 'Do I need to move furniture before carpet cleaning?',
        answer:
          'It is helpful to remove small items and personal belongings from the areas being cleaned. Whether larger furniture needs to be moved depends on the room and the areas you want cleaned. Discuss this when booking so expectations are clear before the appointment.',
      },
    ],
    ctaText: '',
    ctaParagraphs: [
      'If your carpets are tired, stained or heavily used, professional cleaning can help refresh them and remove accumulated dirt.',
      'Prime Carpet Cleaning provides carpet cleaning for homes, rental properties and businesses across its listed Berkshire service area. Whether you need help with one room, several carpets or a larger commercial property, we can discuss your needs and recommend a suitable service.',
      'When you contact us, share your town or postcode, the number of rooms, and any particular stains or concerns. This will help us understand the work involved and provide a more relevant quote.',
      'Call us, message us on WhatsApp, or send an online enquiry today for a free, no-obligation quote.',
    ],
  },
  {
    slug: 'surrey',
    name: 'Surrey',
    seoTitle: `Carpet Cleaning Surrey | Professional Local Carpet Cleaners`,
    metaDescription: `Looking for carpet cleaning in Surrey? Get professional carpet cleaning for homes and businesses, plus rug and upholstery cleaning. Request a free quote today.`,
    intro: [
      `Looking for dependable carpet cleaning in Surrey? <a href="/">Prime Carpet Cleaning and Upholstery Steam Cleaning</a> provides professional cleaning for homes, rental properties, and businesses across the county.`,
      `Carpets can gradually lose their fresh look as dirt, spills, and everyday foot traffic build up. Our cleaning service is designed to give carpets a thorough clean while taking their material and condition into account. Whether you need a few rooms refreshed or a larger property cleaned, we can discuss what you need and provide a free, no-obligation quote.`,
    ],
    homesBusinessesTitle: `Carpet Cleaning for Homes and Businesses`,
    homesBusinesses: [
      `Carpets in a home or workplace can face very different types of use. Family rooms may deal with food spills, muddy shoes and regular foot traffic, while office carpets can become worn in entrances, corridors and other busy areas. Our residential and commercial carpet cleaning in Surrey is suitable for both types of property. We clean carpets in houses, flats, rental properties, offices, shops and other commercial spaces.`,
      `For homeowners, a professional clean can help refresh carpets that have become dull or marked through everyday use. Landlords and tenants may need carpets cleaned when preparing a rental property for a new tenancy, while businesses may want their carpets looking presentable for staff and visitors.`,
      `We work with different carpet materials and conditions, assessing each carpet before cleaning to choose the right approach. We also offer cleaning services for soft furnishings and rental properties. Our services include:`,
    ],
    whyChooseIntro: [
      `When choosing a carpet cleaning company in Surrey, it helps to know what you can expect before the work starts. We keep the process straightforward and focus on providing a careful service from the first assessment to the final check.`,
      `Alongside <a href="/services/carpet-cleaning/">carpet cleaning</a>, we also offer rug cleaning, <a href="/services/upholstery-sofa-cleaning/">upholstery cleaning</a> and end of tenancy cleaning in Surrey. These services can help keep rugs, sofas and rental properties clean and fresh, whether you need help with one item or several areas of your property.`,
      `Our service includes:`,
    ],
    whyChoosePoints: [
      `<strong>Professional cleaning equipment</strong> to provide a thorough clean`,
      `<strong>Careful carpet assessment</strong> before cleaning begins`,
      `<strong>Suitable cleaning solutions</strong> based on the carpet and its condition`,
      `<strong>Attention to stains and heavily used areas</strong>`,
      `<strong>Clear, no-obligation quotes</strong> before you book`,
      `<strong>Services for homes, rental properties and businesses</strong>`,
      `<strong>Simple booking</strong> by phone, WhatsApp or online enquiry`,
    ],
    howItWorksIntro: `Our carpet cleaning services in Surrey follow a straightforward process. The exact treatment can vary depending on the carpet, but the main stages help us prepare, clean, and check the carpet properly.`,
    steps: [
      {
        title: `Carpet Inspection`,
        description: `We start by checking the carpet and looking at its material, condition, and level of use. We also identify areas that may need extra attention, such as visible stains, entrance areas, or heavily walked-on sections. This allows us to decide how the carpet should be cleaned before any treatment begins.`,
      },
      {
        title: `Pre-Treatment`,
        description: `Some carpets need preparation before the main cleaning stage. Where necessary, we apply a suitable treatment to areas with built-up dirt, grease, or other marks. This helps loosen the dirt so we can remove it more effectively during the main clean.`,
      },
      {
        title: `Deep Cleaning`,
        description: `The main cleaning stage removes loosened dirt and build-up from the carpet using professional equipment. Our carpet deep cleaning in Surrey is suitable when carpets need more than their usual vacuuming.`,
      },
      {
        title: `Stain Treatment`,
        description: `Stains are assessed individually because not every mark responds to the same treatment. <a href="/blog/how-to-remove-coffee-stains-from-carpet/">Coffee</a>, wine, food, mud, and <a href="/blog/how-to-remove-pet-urine-stains-from-carpet/">pet accidents</a> can all affect carpet fibres differently. We treat suitable stains according to the carpet and the type of mark. Older stains or marks that have already been treated with household products may be more difficult to remove, so we give realistic advice about the likely result.`,
      },
      {
        title: `Drying and Final Check`,
        description: `After cleaning, we remove as much moisture as possible to help the carpet dry. Drying time depends on the carpet, room temperature, ventilation, and airflow.<br><br>We then check the cleaned areas to make sure the work has been completed properly and that the areas needing attention have been treated.`,
      },
    ],
    areasIntro: ``,
    majorTowns: [`Guildford`, `Woking`, `Epsom`, `Redhill`, `Reigate`, `Staines-upon-Thames`],
    otherTowns: ``,
    areasBody: [
      `We provide carpet cleaning services for Surrey customers and can cover a wide range of residential and commercial areas.`,
    ],
    areasAfter: [
      `We also serve nearby areas where available. If your location is not listed, contact us with your postcode and cleaning requirements, and we can confirm whether we cover your area.`,
      `For customers who need cleaning outside Surrey, we also cover <a href="/areas/berkshire/carpet-cleaning/">Berkshire</a> and <a href="/areas/hampshire/carpet-cleaning/">Hampshire</a>.`,
    ],
    faqs: [
      {
        question: `What areas of Surrey do you cover?`,
        answer: `We cover Guildford, Woking, Epsom, Redhill, Reigate, Staines-upon-Thames, Camberley, Farnham, Leatherhead, Godalming, Dorking and Ashford, along with nearby areas where available.`,
      },
      {
        question: `How much does carpet cleaning cost in Surrey?`,
        answer: `The cost depends on factors such as the number of rooms, carpet size, condition, and <a href="/services/stain-removal/">staining</a>. We provide a free, no-obligation quote based on the work required.`,
      },
      {
        question: `How long does carpet cleaning take?`,
        answer: `Cleaning time depends on the size of the property, number of rooms, and condition of the carpets. We can give you a more useful estimate once we know what needs to be cleaned.`,
      },
      {
        question: `How long does a carpet take to dry after cleaning?`,
        answer: `Drying time varies depending on the carpet and room conditions. Many carpets can dry within several hours, while thicker carpets or rooms with limited airflow may take longer. Good ventilation can help.`,
      },
      {
        question: `Can you remove difficult carpet stains?`,
        answer: `We can treat many common stains, including coffee, wine, food, mud, <a href="/blog/how-to-remove-oil-from-carpet/">grease</a> and pet accidents. However, some older or deeply set stains may not disappear completely. We will assess the stain and give you an honest idea of what may be possible.`,
      },
      {
        question: `Do you clean carpets in homes and businesses?`,
        answer: `Yes. We provide carpet cleaning for houses, flats, rental properties, offices, shops and other suitable commercial premises across Surrey.`,
      },
    ],
    ctaText: ``,
    ctaParagraphs: [
      `Prime Carpet Cleaning helps homeowners, landlords, tenants, and businesses keep their properties clean and fresh across Surrey. Call us or send an online enquiry for your free, no-obligation quote.`,
    ],
  },
  {
    slug: 'hampshire',
    name: 'Hampshire',
    seoTitle: `Carpet Cleaning Hampshire | Professional Carpet Care`,
    metaDescription: `Professional carpet cleaning in Hampshire for homes, rentals, and businesses. Expert carpet care, effective stain treatment, and a free, no-obligation quote.`,
    intro: [
      `Keeping carpets clean in a busy home or workplace is not always easy. Daily foot traffic, spills, muddy shoes, and dust can gradually leave carpets looking dull and worn. <a href="https://maps.app.goo.gl/zpVifVrEM7aDHazT8" target="_blank" rel="noopener noreferrer">Prime Carpet Cleaning and Upholstery Steam Cleaning</a> helps homeowners, tenants, landlords and businesses keep their carpets in better condition with carpet <a href="/#services">cleaning services</a> in Hampshire.`,
      `From Southampton and Portsmouth to Winchester, Basingstoke and Andover, Hampshire has a mix of homes, rental properties and commercial buildings. Each carpet has its own material, age and level of wear, so we look at these factors before deciding how it should be cleaned. You can contact us for a free, no-obligation quote based on your cleaning needs.`,
    ],
    homesBusinessesTitle: `Carpet Cleaning for Homes and Businesses`,
    homesBusinesses: [
      `Different properties put different demands on their carpets. In a family home, carpets may be affected by food and <a href="/blog/how-to-remove-red-wine-stains-from-carpet/">drink spills</a>, muddy footwear, pets and regular movement between rooms. In an office or shop, the busiest areas are often entrances, walkways and spaces used by customers or staff throughout the day.`,
      `Our residential and commercial carpet cleaning in Hampshire is suitable for houses, flats, rental properties, offices, shops and other workplaces. Rather than treating every carpet in the same way, we consider its material and condition before cleaning.`,
      `Landlords and tenants can also benefit from professional rental property <a href="/services/carpet-cleaning/">carpet cleaning</a> when carpets need attention between tenancies. We also provide upholstery cleaning, rug cleaning, and end of tenancy cleaning in Hampshire. These services are ideal for removing everyday dirt and keeping sofas, chairs, <a href="/services/rug-cleaning/">rugs</a>, and carpets fresh and clean.`,
    ],
    whyChooseIntro: [
      `A good carpet clean is not simply about making the surface look better. The condition of the carpet, the type of fibre and the areas that receive the most use all affect how it should be treated.`,
      `If you are comparing <a href="/">carpet cleaning companies in Hampshire</a>, look for a service that takes the time to understand your carpet rather than relying on a one-size-fits-all approach.`,
      `Customers can also expect:`,
    ],
    whyChoosePoints: [
      `Professional steam extraction equipment`,
      `Suitable cleaning methods for different carpet types`,
      `Extra attention to stained and heavily used areas`,
      `Cleaning solutions suitable for homes with children and pets`,
      `Clear, no-obligation quotes`,
      `Flexible appointments for residential and commercial properties`,
      `Booking by phone, WhatsApp or online enquiry`,
    ],
    howItWorksIntro: `A professional <a href="/blog/how-to-clean-carpet-stains/">carpet clean</a> involves more than simply applying water and extracting it. The carpet is prepared first, then cleaned and checked at the end.`,
    steps: [
      {
        title: `Carpet Inspection`,
        description: `We begin by looking at the carpet's material, condition, and overall level of soiling. We also identify high-traffic sections, visible stains, and areas that may require additional care.`,
      },
      {
        title: `Pre-treatment`,
        description: `Areas with built-up dirt or noticeable marks can be treated before the main clean. Pre-treatment helps loosen soil that has become attached to the carpet fibres, making it easier to remove during extraction.`,
      },
      {
        title: `Deep Cleaning`,
        description: `The main cleaning stage uses professional steam extraction equipment to work through the carpet pile and remove loosened dirt and residue. Professional carpet cleaning in Hampshire customers choose can be particularly useful when regular vacuuming is no longer enough to improve the appearance of a heavily used carpet.`,
      },
      {
        title: `Stain Treatment`,
        description: `Stains are assessed individually because different marks can respond differently to treatment. We can work on common stains such as coffee, wine, food, mud, grease, and pet accidents. With older or deeply set stains, we explain beforehand what level of improvement may be realistic.`,
      },
      {
        title: `Drying and Final Check`,
        description: `After cleaning, as much moisture as possible is extracted from the carpet. We then check the finished areas before leaving. Drying time depends on the carpet, room temperature, ventilation, and humidity, so good airflow can help speed up the process.`,
      },
    ],
    areasIntro: ``,
    majorTowns: [`Southampton`, `Portsmouth`, `Winchester`, `Basingstoke`, `Andover`, `Farnborough`],
    otherTowns: ``,
    areasBody: [
      `Hampshire is a large county, so our service area includes a wide range of residential and commercial locations.`,
    ],
    areasAfter: [
      `We also work in surrounding villages and nearby residential areas. If your town is not listed, send us your postcode, and we can check whether your location falls within our service area.`,
      `Our wider service area also includes nearby counties, with carpet cleaning available in <a href="/areas/berkshire/carpet-cleaning/">Berkshire</a> and <a href="/areas/surrey/carpet-cleaning/">Surrey</a>.`,
    ],
    faqs: [
      {
        question: `Do you provide carpet cleaning in Hampshire?`,
        answer: `Yes. We clean carpets in homes, rental properties and commercial premises throughout Hampshire, including Southampton, Portsmouth, Winchester, Basingstoke and surrounding areas.`,
      },
      {
        question: `What areas of Hampshire do you cover?`,
        answer: `We cover Southampton, Portsmouth, Winchester, Basingstoke, Andover, Farnborough, Aldershot, Eastleigh, Fareham, Gosport, Havant, Fleet and nearby areas. Contact us if you are outside these locations.`,
      },
      {
        question: `How much does carpet cleaning cost in Hampshire?`,
        answer: `The price depends on the number of rooms, carpet size, condition, and any additional <a href="/services/stain-removal/">stain treatment</a> required. We can give you a free, no-obligation quote before booking.`,
      },
      {
        question: `How long does carpet cleaning take?`,
        answer: `Cleaning time varies according to the size of the property, number of rooms, and condition of the carpets. We can give you a more accurate estimate after discussing the job.`,
      },
      {
        question: `How long does a carpet take to dry after cleaning?`,
        answer: `Many carpets take around 4–6 hours to dry after professional steam extraction. Actual drying time can vary because of ventilation, humidity, carpet thickness, and room conditions.`,
      },
      {
        question: `Can you remove difficult carpet stains?`,
        answer: `We can treat many common stains, including coffee, wine, grease, mud, and <a href="/blog/how-to-remove-pet-urine-stains-from-carpet/">pet accidents</a>. Older stains can be more difficult to remove, so we assess them first and explain what results may be possible.`,
      },
      {
        question: `Do you clean carpets in homes and businesses?`,
        answer: `Yes. We work with homeowners, landlords, tenants and businesses, including offices, shops and other commercial properties.`,
      },
    ],
    ctaText: ``,
    ctaParagraphs: [
      `Clean carpets can make a noticeable difference to the look and feel of a room. If yours have become dull, marked or heavily soiled, professional cleaning can help refresh them without replacing the carpet.`,
      `Whether you need several rooms cleaned at home, carpets prepared for a new tenant, or commercial carpet cleaning in Hampshire, Prime Carpet Cleaning and Upholstery Steam Cleaning can help. Get in touch today for a free, no-obligation quote and find a convenient time for your carpet cleaning in Hampshire.`,
    ],
  },
];
