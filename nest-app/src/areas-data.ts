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
  whyChooseIntro: string;
  whyChoosePoints: string[];
  howItWorksIntro: string;
  steps: AreaStep[];
  areasIntro: string;
  majorTowns: string[];
  otherTowns: string;
  faqs: AreaFaq[];
  ctaText: string;
}

export const AREA_PAGES: AreaPage[] = [
  {
    slug: 'berkshire',
    name: 'Berkshire',
    seoTitle: 'Carpet Cleaning Berkshire | Professional Local Service',
    metaDescription:
      'Professional carpet cleaning in Berkshire for homes and businesses. Deep cleaning, stain treatment and more from Prime Carpet Cleaning.',
    intro: [
      'Looking for professional carpet cleaning in Berkshire? Prime Carpet Cleaning and Upholstery Steam Cleaning helps homeowners, tenants, landlords and businesses across the county keep their carpets fresh, clean and well maintained.',
      'From family homes in Reading and Wokingham to offices and commercial spaces around Slough and Bracknell, we use professional steam extraction equipment to lift everyday dirt, stains, allergens and odours from your carpets. Call us, message us on WhatsApp or send an enquiry for a free, no-obligation quote.',
    ],
    homesBusinessesTitle: 'Carpet Cleaning for Homes and Businesses',
    homesBusinesses: [
      'Berkshire is a busy county, and its carpets show it. Commuter households in Maidenhead, Windsor and Wokingham, family homes with children and pets, and rental properties in Reading and Newbury all put carpets under constant everyday use. Regular professional cleaning removes the dirt that vacuuming alone leaves behind and helps carpets look and feel fresher for longer.',
      'We also clean carpets for businesses across the county, including offices, shops and other commercial spaces. If you manage a property in Slough, Bracknell or Ascot, we can discuss the size of the space and the level of cleaning needed before giving you a clear quote.',
      'Alongside carpet cleaning, we offer a range of related services, so you can arrange everything with one team:',
    ],
    whyChooseIntro:
      'Choosing a carpet cleaner is about trust as much as results. Here is what customers across Berkshire can expect when they book with us.',
    whyChoosePoints: [
      'Professional steam extraction equipment for a deeper clean than vacuuming alone',
      'Pet and child-friendly cleaning solutions',
      'Clear quotes with no hidden fees',
      'Easy booking by phone, WhatsApp or online enquiry',
      'Residential and commercial carpet cleaning',
      'Each carpet assessed before cleaning, so the method suits the material',
    ],
    howItWorksIntro:
      'Every Berkshire job follows the same careful process, adjusted to your carpet and your property.',
    steps: [
      {
        title: 'Carpet Inspection',
        description:
          'We start by checking the carpet type, its condition and any problem areas, such as busy walkways, pet marks or older stains, so we can choose a suitable cleaning method.',
      },
      {
        title: 'Pre-treatment',
        description:
          'Heavily soiled areas and visible marks are pre-treated before the main clean, giving the cleaning solution time to loosen dirt from the fibres.',
      },
      {
        title: 'Deep Cleaning',
        description:
          'Professional steam extraction lifts dirt, dust and allergens from deep within the carpet, leaving it looking fresher and feeling cleaner.',
      },
      {
        title: 'Stain Treatment',
        description:
          'Marks such as wine, coffee, mud and pet accidents are assessed individually, and we use treatment suited to the stain and the carpet.',
      },
      {
        title: 'Drying and Final Check',
        description:
          'We remove as much moisture as possible during extraction to help the carpet dry sooner, then check the cleaned areas before we finish.',
      },
    ],
    areasIntro:
      'We provide carpet cleaning across Berkshire, from the larger towns along the M4 corridor to smaller towns and villages in the west of the county.',
    majorTowns: ['Reading', 'Slough', 'Bracknell', 'Maidenhead', 'Windsor', 'Newbury'],
    otherTowns:
      'We also cover Wokingham, Thatcham, Sandhurst, Crowthorne, Hungerford and Ascot, along with the surrounding areas.',
    faqs: [
      {
        question: 'Do you provide carpet cleaning in Berkshire?',
        answer:
          'Yes. We provide professional carpet cleaning for homes and businesses across Berkshire, including Reading, Slough, Bracknell, Maidenhead, Windsor and Newbury.',
      },
      {
        question: 'What areas of Berkshire do you cover?',
        answer:
          'We cover towns across the county, including Reading, Slough, Bracknell, Maidenhead, Windsor, Newbury, Wokingham, Thatcham, Sandhurst, Crowthorne, Hungerford and Ascot. If your town is not listed, get in touch and we will check whether we can help.',
      },
      {
        question: 'How much does carpet cleaning cost in Berkshire?',
        answer:
          'The cost depends on the number of rooms, the size and condition of the carpet, any stains and the type of property. We provide free, no-obligation quotes so you know what to expect before booking.',
      },
      {
        question: 'How long does carpet cleaning take?',
        answer:
          'It depends on the size of the property and the condition of the carpets. A single room is much quicker than a whole house, and heavily soiled or stained carpets can take longer. We can give you a realistic idea when we provide your quote.',
      },
      {
        question: 'How long does a carpet take to dry after cleaning?',
        answer:
          'With professional steam extraction, most carpets dry within 4–6 hours. Drying time can vary with the carpet material, room temperature and airflow, so opening a window can help.',
      },
      {
        question: 'Can you remove difficult carpet stains?',
        answer:
          'We can treat many common stains, including wine, coffee, mud, food and pet accidents. Results depend on the stain, the carpet and how long the mark has been there, and we will give you an honest assessment first. You can read more about our <a href="/services/stain-removal/">stain removal service</a>.',
      },
      {
        question: 'Do you clean carpets in homes and businesses?',
        answer:
          'Yes. We clean carpets in private homes, rental properties and commercial spaces such as offices and shops across Berkshire.',
      },
    ],
    ctaText:
      'Ready for cleaner, fresher carpets? Contact us for a free, no-obligation quote and we will arrange a convenient appointment anywhere in Berkshire.',
  },
  {
    slug: 'surrey',
    name: 'Surrey',
    seoTitle: 'Carpet Cleaning Surrey | Professional Local Service',
    metaDescription:
      'Professional carpet cleaning in Surrey for homes and businesses. Deep cleaning, stain treatment and more from Prime Carpet Cleaning.',
    intro: [
      'Need a reliable carpet cleaner in Surrey? Prime Carpet Cleaning and Upholstery Steam Cleaning provides carpet cleaning for homes, rental properties and businesses throughout the county.',
      'Whether you live in a family house in Guildford or Woking, a flat in Epsom or Redhill, or manage a commercial space near Staines-upon-Thames, our team uses professional equipment to remove built-up dirt, stains, allergens and odours. Contact us for a free, no-obligation quote by phone, WhatsApp or our online form.',
    ],
    homesBusinessesTitle: 'Carpet Cleaning for Homes and Businesses',
    homesBusinesses: [
      'Surrey homes range from modern flats to characterful older properties, and carpets in each need slightly different care. We take the time to look at your carpet before cleaning, whether it is a wool blend in a Godalming or Dorking home or a hard-wearing synthetic carpet in a busy family house in Camberley.',
      'Landlords and letting agents in Guildford, Woking and Leatherhead can use professional cleaning to prepare properties between tenancies, and businesses across the county can keep offices and shared spaces presentable with regular cleaning. We are happy to discuss one-off cleans or repeat visits.',
      'Our carpet cleaning sits alongside a wider set of services you can arrange in the same booking:',
    ],
    whyChooseIntro:
      'There are plenty of cleaners to choose from in Surrey. These are the things we focus on for every customer.',
    whyChoosePoints: [
      'Professional steam extraction for a thorough, deep clean',
      'Eco-friendly cleaning solutions that are pet and child-friendly',
      'Transparent, fixed quotes with no hidden fees',
      'Flexible booking by phone, WhatsApp or online enquiry',
      'Homes, rental properties and commercial spaces all catered for',
      'A careful assessment of your carpet before any cleaning starts',
    ],
    howItWorksIntro:
      'Our Surrey carpet cleaning follows five clear stages, so you always know what to expect on the day.',
    steps: [
      {
        title: 'Carpet Inspection',
        description:
          'We look at the carpet material, its age and condition, and note any stained or heavily soiled areas, so the cleaning approach fits your carpet rather than a one-size-fits-all routine.',
      },
      {
        title: 'Pre-treatment',
        description:
          'Problem areas are treated before the main clean. This helps break down ground-in dirt, grease and marks so they lift more easily during extraction.',
      },
      {
        title: 'Deep Cleaning',
        description:
          'Our professional extraction equipment draws dirt, dust and other build-up out of the fibres, helping carpets look brighter and feel fresher underfoot.',
      },
      {
        title: 'Stain Treatment',
        description:
          'Stubborn marks get individual attention. We assess each stain and choose a suitable treatment, taking care to protect the carpet fibres and colour.',
      },
      {
        title: 'Drying and Final Check',
        description:
          'We extract as much moisture as we can to support faster drying, then check the cleaned areas to make sure everything has been properly treated.',
      },
    ],
    areasIntro:
      'Our Surrey coverage spans the county, from the larger towns in the north and centre to market towns in the south and west.',
    majorTowns: ['Guildford', 'Woking', 'Epsom', 'Redhill', 'Reigate', 'Staines-upon-Thames'],
    otherTowns:
      'We also cover Camberley, Farnham, Leatherhead, Godalming, Dorking and Ashford, as well as nearby villages.',
    faqs: [
      {
        question: 'Do you provide carpet cleaning in Surrey?',
        answer:
          'Yes. We clean carpets for homes, rental properties and businesses across Surrey, including Guildford, Woking, Epsom, Redhill, Reigate and Staines-upon-Thames.',
      },
      {
        question: 'What areas of Surrey do you cover?',
        answer:
          'We cover Guildford, Woking, Epsom, Redhill, Reigate, Staines-upon-Thames, Camberley, Farnham, Leatherhead, Godalming, Dorking and Ashford, plus surrounding areas. Not sure if we reach you? Send us your postcode and we will let you know.',
      },
      {
        question: 'How much does carpet cleaning cost in Surrey?',
        answer:
          'Prices depend on the number of rooms, the size of the carpets, their condition and any staining. We give free, no-obligation quotes, so you will know the expected cost before you decide to book.',
      },
      {
        question: 'How long does carpet cleaning take?',
        answer:
          'The time depends on how many rooms you need cleaned and how soiled the carpets are. A small flat will usually take less time than a large family house. We will give you a sensible estimate when we quote.',
      },
      {
        question: 'How long does a carpet take to dry after cleaning?',
        answer:
          'Most carpets are dry within 4–6 hours after steam extraction. Thicker carpets, cooler rooms and poor ventilation can add to this, so we recommend opening windows where possible.',
      },
      {
        question: 'Can you remove difficult carpet stains?',
        answer:
          'Often, yes. We regularly treat stains such as red wine, coffee, mud, grease and pet accidents. Very old or heavily set stains may not disappear completely, and we will always be honest about what is realistic. See our <a href="/services/stain-removal/">stain removal service</a> for more detail.',
      },
      {
        question: 'Do you clean carpets in homes and businesses?',
        answer:
          'Yes. We clean carpets in houses, flats, rental properties and commercial premises throughout Surrey.',
      },
    ],
    ctaText:
      'Get in touch today for a free, no-obligation quote and a convenient appointment for carpet cleaning anywhere in Surrey.',
  },
  {
    slug: 'hampshire',
    name: 'Hampshire',
    seoTitle: 'Carpet Cleaning Hampshire | Professional Local Service',
    metaDescription:
      'Professional carpet cleaning in Hampshire for homes and businesses. Deep cleaning, stain treatment and more from Prime Carpet Cleaning.',
    intro: [
      'Prime Carpet Cleaning and Upholstery Steam Cleaning offers professional carpet cleaning across Hampshire for homeowners, tenants, landlords and local businesses.',
      'Hampshire covers a lot of ground, from the coastal cities of Southampton and Portsmouth to historic Winchester and busy towns such as Basingstoke and Andover. Wherever you are, our team brings professional equipment and a careful approach to lifting dirt, stains and odours from your carpets. Ask for a free, no-obligation quote today.',
    ],
    homesBusinessesTitle: 'Carpet Cleaning for Homes and Businesses',
    homesBusinesses: [
      'With such a varied county, no two Hampshire jobs are quite the same. A terraced house in Portsmouth, a family home in Fareham or Havant, and a larger property outside Winchester can all have very different carpets and cleaning needs. We assess each one individually, rather than applying the same routine everywhere.',
      'Towns such as Aldershot, Farnborough, Fleet and Eastleigh have plenty of rental properties and busy households, where carpets can quickly pick up everyday dirt. Our service also suits businesses in Basingstoke, Southampton and Gosport that want clean, presentable floors for staff and visitors.',
      'You can also book other cleaning services alongside your carpet clean:',
    ],
    whyChooseIntro:
      'Honest pricing, a careful clean and easy communication matter most when you book a carpet cleaner. That is how we work for customers across Hampshire.',
    whyChoosePoints: [
      'Professional steam extraction equipment for deeper cleaning',
      'Cleaning solutions designed to be pet and child-friendly',
      'Free quotes with clear pricing and no hidden fees',
      'Simple booking by phone, WhatsApp or online enquiry form',
      'Residential and commercial customers welcome',
      'Carpet type and condition checked before we begin',
    ],
    howItWorksIntro:
      'Here is how a typical carpet clean works for our Hampshire customers, from first look to final check.',
    steps: [
      {
        title: 'Carpet Inspection',
        description:
          'We examine the carpet fibre, its condition and any heavily used or stained areas, then decide on the most suitable cleaning method for that particular carpet.',
      },
      {
        title: 'Pre-treatment',
        description:
          'We apply pre-treatment to soiled areas and visible marks so that ingrained dirt is loosened ahead of the deep clean.',
      },
      {
        title: 'Deep Cleaning',
        description:
          'Steam extraction gets into the carpet pile to lift out embedded dirt, dust and allergens, rather than just treating the surface.',
      },
      {
        title: 'Stain Treatment',
        description:
          'For marks that need extra attention, we choose a treatment to suit the stain and the carpet. We explain what to expect before we start.',
      },
      {
        title: 'Drying and Final Check',
        description:
          'Moisture is extracted as thoroughly as possible to help the carpet dry sooner, and we check the finished result before we finish.',
      },
    ],
    areasIntro:
      'We cover Hampshire from the south coast up to the Surrey and Berkshire borders, including the main cities and many of the smaller towns in between.',
    majorTowns: ['Southampton', 'Portsmouth', 'Winchester', 'Basingstoke', 'Andover', 'Farnborough'],
    otherTowns:
      'We also cover Aldershot, Eastleigh, Fareham, Gosport, Havant and Fleet, along with the villages around them.',
    faqs: [
      {
        question: 'Do you provide carpet cleaning in Hampshire?',
        answer:
          'Yes. We provide carpet cleaning across Hampshire for homes and businesses, including Southampton, Portsmouth, Winchester, Basingstoke, Andover and Farnborough.',
      },
      {
        question: 'What areas of Hampshire do you cover?',
        answer:
          'We cover Southampton, Portsmouth, Winchester, Basingstoke, Andover, Farnborough, Aldershot, Eastleigh, Fareham, Gosport, Havant and Fleet, and many of the areas around them. If you are somewhere else in the county, just ask.',
      },
      {
        question: 'How much does carpet cleaning cost in Hampshire?',
        answer:
          'The price depends on how many rooms you need cleaned, the size and condition of the carpets, and whether there are stains to treat. We provide a free, no-obligation quote so there are no surprises.',
      },
      {
        question: 'How long does carpet cleaning take?',
        answer:
          'A single room can be done fairly quickly, while a whole property takes longer. Heavily soiled carpets or those with several stains may need extra time. We will tell you what to expect when we provide your quote.',
      },
      {
        question: 'How long does a carpet take to dry after cleaning?',
        answer:
          'Most carpets are ready within 4–6 hours after professional steam extraction. Humidity, ventilation and carpet thickness all play a part, so good airflow helps.',
      },
      {
        question: 'Can you remove difficult carpet stains?',
        answer:
          'We can treat many stubborn marks, including wine, coffee, grease, mud and pet accidents. Older stains are harder, and we will give you a realistic assessment first. Find out more about our <a href="/services/stain-removal/">stain removal service</a>.',
      },
      {
        question: 'Do you clean carpets in homes and businesses?',
        answer:
          'Yes. We clean carpets in private homes, rental properties and commercial spaces across Hampshire.',
      },
    ],
    ctaText:
      'Contact us for a free, no-obligation quote and arrange carpet cleaning at a time that suits you anywhere in Hampshire.',
  },
];
