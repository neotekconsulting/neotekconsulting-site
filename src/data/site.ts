export const site = {
  name: 'NeoTek Consulting',
  legalName: 'NeoTek Consulting LLC',
  domain: 'neotekconsulting.com',
  url: 'https://neotekconsulting.com',
  email: 'contact@neotekconsulting.com',
  schedulingEmail: 'jeff@neotekconsulting.com',
  phone: '(253) 283-7593',
  serviceArea:
    'Serving Tacoma, Pierce County, the greater Puget Sound region, and clients across North America remotely.',
  hours: 'Monday-Friday, 9:00 AM-5:00 PM Pacific',
  callAvailability: 'Tuesday-Thursday, 10:00 AM-7:00 PM Pacific',
  responsePromise: 'We typically respond within one business day.',
  tagline: 'AI Automation That Makes Business Sense',
  positioning:
    'NeoTek helps businesses use specialized AI agents and workflow automation to save time, save money, reduce manual work, and modernize operations.',
  polishedPositioning:
    'NeoTek Consulting helps businesses use specialized AI agents and workflow automation to save time, reduce costs, eliminate repetitive work, and modernize operations.',
  bookingUrl: 'https://calendar.app.google/qjUhQ3X3ndwUZszk9',
  leadMagnetUrl: 'https://preview.mailerlite.io/forms/2382745/188577829904975284/share',
  venmoUrl: 'https://venmo.com/u/NeoTekConsulting',
  squareUrl: 'https://square.link/u/DHWMe6AT',
  paypalUrl: 'https://paypal.me/NeoTekConsulting?country.x=US&locale.x=en_US',  
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61590418801909',
    googleProfile: '#replace-with-google-business-profile'
  }
} as const;

export const serviceAreas = [
  'Tacoma',
  'Pierce County',
  'Gig Harbor',
  'Lakewood',
  'University Place',
  'Puyallup',
  'Federal Way',
  'Olympia',
  'Seattle',
  'Bellevue',
  'Renton',
  'Kent',
  'Everett',
  'Bremerton',
  'Puget Sound',
  'Washington State'
];

export const navItems = [
  { label: 'Services', href: '/services/' },
  { label: 'Research', href: '/research/' },
  { label: 'Assessment', href: '/assessment/' },
  { label: 'AI Agents', href: '/ai-agents/' },
  { label: 'Early Access', href: '/early-access/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' }
];

export const primaryUseCases = [
  'Email triage and draft replies',
  'Customer intake assistant',
  'Appointment scheduling assistant',
  'Voice/phone intake assistant'
];

export const phaseTwoUseCases = [
  'Internal knowledge assistant',
  'Document summarization',
  'Meeting notes and action items'
];

export const industries = [
  'Clinics and wellness practices',
  'Professional services',
  'Nonprofits',
  'Home services and trades',
  'Creators, media, and music businesses',
  'Retail and local shops',
  'Restaurants and hospitality',
  'Education and training',
  'Churches and faith-based organizations'
];

export const assessmentIncludes = [
  'Workflow discovery call',
  'Review of current tools, systems, and pain points',
  'Identification of high-value AI and automation opportunities',
  'Prioritized automation roadmap',
  'Risk, privacy, and data-sensitivity notes',
  'Recommended tools or deployment options',
  'Estimated implementation phases',
  'Written summary/report',
  'Follow-up review call to walk through the findings'
];

export const services = [
  {
    title: 'Free AI Automation Feasibility Call',
    price: 'Free',
    description:
      'A call of up to 30 minutes to discuss your business workflows, repetitive tasks, AI automation opportunities, and whether NeoTek may be a good fit.'
  },
  {
    title: 'AI Readiness & Automation Assessment',
    price: '$1,500',
    description:
      'A two-week assessment that reviews your workflows, current tools, pain points, automation opportunities, privacy considerations, and implementation options. Includes a written roadmap, recommended phases, and a follow-up review call.'
  },
  
  {
    title: 'AI Agent Workflow Automation',
    description:
      'Design and implementation of specialized AI Agent workflows that help with customer intake, scheduling, email triage, follow-up, internal knowledge access, document workflows, and routine operations.'
  },
  {
    title: 'Email Triage & Draft Reply Automation',
    description:
      'AI-assisted email workflows that help organize incoming messages, identify priority items, and draft responses for human review.'
  },
  {
    title: 'Customer Intake Assistant',
    description:
      'AI-supported intake workflows that help collect customer information, route requests, reduce manual follow-up, and improve response time.'
  },
  {
    title: 'Appointment Scheduling Assistant',
    description:
      'Automation for scheduling, rescheduling, reminders, and appointment-related communication across common business workflows.'
  },
  {
    title: 'Voice / Phone Intake Assistant',
    description:
      'Planning and implementation for voice or phone intake workflows that help capture caller needs, route requests, and support follow-up.'
  },
  {
    title: 'Local & Private AI Agent Deployment',
    description:
      'AI Agent deployment options designed around privacy, cost control, and portability. Depending on client needs, NeoTek can evaluate local, remote, containerized, or cloud-based deployment models.'
  },
  {
    title: 'Monthly AI Automation Support',
    price: '$500/month',
    description:
      'Available after an assessment and approved implementation plan. Includes a monthly check-in, prioritized small-request queue, workflow tweaks, prompt adjustments, configuration support, and preferred client pricing for larger projects.'
  }
];

export const automationsGuide = [
  {
    title: 'Email triage and draft replies',
    description:
      'Sort routine messages, identify urgent items, and draft replies for human review.'
  },
  {
    title: 'Customer intake assistant',
    description:
      'Collect the right information up front and route requests to the right person or workflow.'
  },
  {
    title: 'Appointment scheduling assistant',
    description:
      'Help with scheduling, rescheduling, reminders, and appointment-related communication.'
  },
  {
    title: 'Voice/phone intake assistant',
    description:
      'Capture caller needs, summarize the request, and support follow-up without losing context.'
  },
  {
    title: 'Missed-call follow-up',
    description:
      'Respond faster when a call is missed and route the prospect to the next best action.'
  },
  {
    title: 'SMS follow-up and reminders',
    description:
      'Send approved reminders, check-ins, or next-step prompts for common customer journeys.'
  },
  {
    title: 'Meeting notes and action items',
    description:
      'Turn meetings into summaries, decisions, next steps, and follow-up tasks.'
  },
  {
    title: 'Document summarization',
    description:
      'Summarize long documents, policies, forms, or notes into usable takeaways.'
  },
  {
    title: 'Internal knowledge assistant',
    description:
      'Help staff find answers from approved internal documents, FAQs, and procedures.'
  },
  {
    title: 'Lead follow-up and routing',
    description:
      'Prioritize inbound leads, prepare context, and route them to the right person or sequence.'
  }
];
