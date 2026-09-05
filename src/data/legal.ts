export interface LegalDoc {
  id: 'terms' | 'privacy' | 'refund' | 'cookie' | 'contact';
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: { heading: string; body: string }[];
}

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  terms: {
    id: 'terms',
    title: 'Terms and Conditions',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC462886',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Introduction',
        body: 'This platform, website, and matchmaking service ("Service") is owned and operated by TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED (hereinafter referred to as "True Vibes", "Company", "we", "us", or "our").\n\nBy registering, accessing, or utilizing our Service, you agree to be legally bound by these Terms and Conditions. If you do not agree, do not use the Service.',
      },
      {
        heading: '1. Strict Age Restriction (21+)',
        body: 'The Service is strictly reserved for individuals aged 21 years or older. Anyone below 21 is barred from registering or accessing any part of the platform.',
      },
      {
        heading: '2. Government Identity Verification',
        body: 'All users must upload a valid, authentic government-issued photo identity card. Uploading forged, altered, or fraudulent ID results in immediate account cancellation, loss of fees, and notification to law enforcement.',
      },
      {
        heading: '3. Marital Status Criteria',
        body: 'This platform is strictly for people who are legally single, unmarried, divorced, or widowed. Married persons are strictly barred from membership.',
      },
      {
        heading: '4. Criminal Background Representation',
        body: 'You warrant and declare that you have no convictions for violent offenses, sexual crimes, theft, or fraud, and that you are not listed on any sex offender registry worldwide.',
      },
      {
        heading: '5. Non-Transferable Personal Account',
        body: 'Your registered profile is exclusively for your private use. Sharing, selling, renting, or transferring your login or matched contacts to any other individual is strictly banned.',
      },
      {
        heading: '6. Service Validity & Profile Scope',
        body: 'True Vibes provides curated, personal matchmaking introductions. Depending on your chosen plan, the service includes access to 30 to 50 curated profiles across 1 domestic city or up to 2 international locations. Every membership holds a strict validity period of 3 months from the date of profile activation.',
      },
      {
        heading: '7. Profile Replacements',
        body: 'You may request up to 4 profile replacements during your active 3-month cycle. Replacements are provided one at a time upon review and valid assessment by the platform.',
      },
      {
        heading: '8. Zero Tolerance: Anti-Escort & Anti-Sex Work',
        body: 'True Vibes strictly bans prostitution, escort operations, paid dates, or commercial adult services. Any violation triggers immediate account termination and reporting to cyber authorities.',
      },
      {
        heading: '9. Financial Fraud & Prohibited Solicitation',
        body: 'Users must never ask other members for money, loans, gifts, digital wallet transfers, cryptocurrency investments, or financial aid.',
      },
      {
        heading: '10. Harassment, Abuse & Conduct',
        body: 'Stalking, harassment, hate remarks, abusive language, non-consensual sharing of materials, or hostile behavior toward fellow members or staff is met with immediate cancellation and potential legal action.',
      },
      {
        heading: '11. Ban on Commercial Use',
        body: 'The platform cannot be utilized for lead collection, outside marketing, spam, affiliate promotions, or unauthorized business outreach.',
      },
      {
        heading: '12. "As-Is" Provision',
        body: 'All introductions and technical services are provided on an "as-is" and "as-available" basis without performance guarantees or implied uptime warranties.',
      },
      {
        heading: '13. No Guarantee of Match or Marriage',
        body: 'True Vibes does not warrant, promise, or guarantee marriage, relationships, compatibility, or positive responses from introductions. Connections depend strictly on individual mutual choice.',
      },
      {
        heading: '14. Personal Offline Safety',
        body: 'While True Vibes authenticates identity documents, we do not oversee private individual conduct offline. Members are entirely responsible for their own safety and discretion when meeting anyone in person.',
      },
      {
        heading: '15. Right of Unilateral Termination',
        body: 'The Company reserves the full legal discretion to suspend, restrict, or delete any account without advance warning or refund if safety rules or these Terms are breached.',
      },
      {
        heading: '16. Indemnity',
        body: 'You agree to hold harmless, defend, and indemnify True Vibes, its directors, and operational staff from any claims, disputes, legal penalties, or financial damages resulting from your actions or breach of these Terms.',
      },
      {
        heading: '17. Maximum Financial Liability',
        body: 'Under all circumstances, the overall financial liability of True Vibes and its management regarding any platform dispute shall never exceed the total membership fee paid by that user.',
      },
      {
        heading: '18. Governing Law & Mumbai Jurisdiction',
        body: 'These Terms are governed solely under Indian law. Any legal claims, disputes, or proceedings must be submitted strictly to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra, India.',
      },
      {
        heading: '19. Modification of Terms',
        body: 'True Vibes reserves the right to amend these Terms at its sole discretion. Continued usage after modifications indicates binding agreement to the revised Terms.',
      },
    ],
  },
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC462886 | Last Updated: 2026',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Introduction',
        body: 'This Privacy Policy describes how TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED, operating under the brand True Vibes ("we", "us", or "our"), collects, processes, and protects your personal data in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and international data safety norms.',
      },
      {
        heading: '1. Data Fiduciary Role',
        body: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED acts as the "Data Fiduciary" responsible for determining the purpose and security protocol for all personal data submitted by users on this platform.',
      },
      {
        heading: '2. Categories of Data Collected',
        body: 'To ensure identity authenticity and safe introductions, we collect:\n\n- Identity Credentials: Full legal name, date of birth (to verify 21+ eligibility), marital status, gender, and government-issued ID proof (Passport, Voter ID, Driver\'s License, or other official ID).\n- Contact Details: Active telephone number, primary email address, and city of residence.\n- Matchmaking Profile Data: Professional background, lifestyle habits, partner preferences, and verified personal photographs.\n- Technical Metadata: IP address, device identifiers, browser type, and security access logs.',
      },
      {
        heading: '3. Lawful Use of Information',
        body: 'All collected information is processed strictly for:\n\n- Verifying identity documents and enforcing mandatory 21+ eligibility.\n- Curating relevant introductions based on mutual interest and consent.\n- Preventing fraudulent accounts, spam, and unauthorized commercial conduct.\n- Managing user queries and fulfilling Indian legal and tax recordkeeping obligations.',
      },
      {
        heading: '4. Strict Ban on Data Selling',
        body: 'True Vibes enforces a zero-sale standard: We never sell, monetize, rent, or distribute user personal details or photographs to third-party advertisers, data aggregators, or external lead brokers.',
      },
      {
        heading: '5. Privacy by Design & No Public Profiles',
        body: '- Profiles on True Vibes are fully private and are never indexed on public search engines (such as Google or Bing).\n- Photographs and personal details are shared solely with verified, matched members based on mutual criteria.',
      },
      {
        heading: '6. Secure Storage & Data Protection',
        body: 'User data is stored on certified cloud servers protected by end-to-end SSL/TLS encryption, robust firewall architectures, and restricted, authenticated access protocols.',
      },
      {
        heading: '7. User Rights & Permanent Erasure (DPDP Act)',
        body: 'Under the DPDP Act, you have the right to access, rectify, or request permanent erasure of your personal data:\n\n- Erasure Request: You may request profile deletion and complete data removal at any time by sending an email from your registered account to our support channel.\n- Processing Timeline: Your data will be permanently purged from active systems within 7 business days, except records strictly required for ongoing legal or statutory tax compliance.',
      },
      {
        heading: '8. Grievance Redressal Officer',
        body: 'In accordance with the DPDP Act and the Information Technology Rules, 2021, any concerns, complaints, or questions regarding personal data processing may be addressed directly to:\n\n- Officer Name: Vishal Kisave\n- Designation: Operations Manager\n- Entity: TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED\n- Grievance Redressal Email: help@truevibes.in\n- Response Timeline: All submitted grievances will be acknowledged within 48 hours and addressed within statutory timelines.',
      },
      {
        heading: '9. Advertising Metrics & Meta Pixel',
        body: 'Our platform utilizes Meta Pixel (Facebook Pixel) to assess conversion metrics and optimize ad delivery. This technology tracks website interactions strictly for analytics. You may manage your tracking preferences or opt out directly via facebook.com/ads/preferences.',
      },
    ],
  },
  refund: {
    id: 'refund',
    title: 'Refund and Cancellation Policy',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC462886 | Last Updated: 2026',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Introduction',
        body: 'This Refund and Cancellation Policy applies to all membership packages and matchmaking services offered by TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED, operating under the brand True Vibes.',
      },
      {
        heading: '1. Full Pricing Disclosure',
        body: 'All package rates are transparently published including mandatory taxes:\n\n- Domestic Matchmaking Package: ₹1,800 + 18% GST (₹324) = ₹2,124 Total (INR)\n- International Matchmaking Package: $60.00 + Applicable Tax = $70.80 Total (USD)\n\nThere are no recurring concealed subscriptions, unexpected processing fees, or hidden registration charges.',
      },
      {
        heading: '2. Strict Non-Refundable Policy',
        body: 'All fees submitted to TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED are strictly NON-REFUNDABLE once user onboarding, document inspection, or profile processing has started.\n\nOperational Justification: Matchmaking introduces substantial non-recoverable operational labor and immediate verification costs upon payment, including manual verification of ID credentials, onboarding preference assessment, profile setup, dedicated matchmaking staff curation hours, and secure server maintenance.',
      },
      {
        heading: '3. Immediate Commencement & Waiver of Cooling-Off',
        body: 'By paying the membership fee and sending your registration details, you explicitly request that matchmaking services begin right away. You acknowledge and agree that any statutory cooling-off cancellation period is waived once service fulfillment starts.',
      },
      {
        heading: '4. Structured Replacement Framework',
        body: 'While cash refunds are not issued, client matchmaking assistance is supported through our Replacement Protocol:\n\n- Validity: Usable strictly within your active 3-month membership period.\n- Allotted Quota: Members can receive up to 4 profile replacements during their active tenure.\n- Issuance: Replacements are provided one at a time when an introduction cannot progress or communication fails to establish.\n- Non-Transferable: Unused replacement quotas expire automatically at the end of the 3-month validity and cannot be converted into cash or carried over.',
      },
      {
        heading: '5. Voluntary Service Cancellation',
        body: 'You can deactivate your account and halt introductions at any point by sending an email from your registered address to our official support desk. Account deactivation permanently pauses profile circulation. Voluntary cancellation does not qualify the member for any partial, pro-rata, or full financial refund.',
      },
      {
        heading: '6. Chargeback Abuse Penalties',
        body: 'Platform access logs, verified IP stamps, and user consents are systematically preserved. Raising an unjustified, fraudulent, or retaliatory chargeback leads to immediate permanent ban and network blacklisting. TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED reserves full rights to pursue legal action in Mumbai courts to recover disputed amounts, administrative fees, and associated legal expenditures.',
      },
      {
        heading: '7. Nature of Service & Shipping Exclusion',
        body: 'All offerings consist exclusively of digital matchmaking consultations, identity verification, and profile introductions. No tangible merchandise, parcel deliveries, or physical shipments are involved; therefore, no physical shipping policy applies.',
      },
    ],
  },
  cookie: {
    id: 'cookie',
    title: 'Cookie and Company Policy',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC462886 | Last Updated: 2026',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Introduction',
        body: 'This website and the True Vibes brand are owned and operated by TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED, an incorporated private limited company under the Companies Act, 2013 in India.',
      },
      {
        heading: '1. Corporate Identification',
        body: '- Registered Legal Entity: TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED\n- Corporate Identification Number (CIN): U63122MH2025PTC462886\n- Statutory Filings & Jurisdiction: Mumbai, Maharashtra, India',
      },
      {
        heading: '2. Cookie Usage & Session Handling',
        body: 'True Vibes uses cookies and session identifiers exclusively for platform security and smooth site navigation:\n\n- Essential Authentication Cookies: Mandatory for verifying authenticated user logins, preserving active form sessions, and preventing unauthorized bot actions.\n- Security & Anti-Fraud Cookies: Implemented to detect suspicious device behavior, prevent multi-account spam, and block malicious traffic.\n- Performance & Diagnostics: Used to measure page render speeds and identify layout errors across different browsers.\n- User Options: You can adjust cookie preferences via browser settings. However, disabling essential security cookies may degrade your ability to complete onboarding or access secure areas.',
      },
      {
        heading: '3. Anti-Escort Statutory Statement',
        body: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED explicitly disassociates itself from escort agencies, prostitution, paid companionship, or adult sex work. The platform operates solely for personal matchmaking introductions between consenting adults. Any misuse for paid offline dating or commercial sexual transactions results in instant account termination and referral to cyber authorities.',
      },
      {
        heading: '4. No Success or Marriage Guarantee',
        body: 'True Vibes provides no guarantee, express or implied, regarding dating outcomes, relationship permanence, compatibility, or marriage. Match introductions depend strictly upon reciprocal consent and personal preferences between participating individuals.',
      },
      {
        heading: '5. Immigration, Relocation & Visa Disclaimer',
        body: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED does not provide immigration consulting, international visa sponsorships, legal advice, or foreign residency assistance. Any international connections made through the platform are purely personal matchmaking introductions between private citizens.',
      },
    ],
  },
  contact: {
    id: 'contact',
    title: 'Contact Us',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC462886',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Registered Office Address',
        body: 'B2, Gorai-1, Borivali (West), Mumbai - 400092, Maharashtra, India',
      },
      {
        heading: 'Customer Support',
        body: '- Email: help@truevibes.in\n- Operating Hours: Monday to Saturday, 10:00 AM – 6:00 PM IST',
      },
      {
        heading: 'Grievance Redressal Officer',
        body: '- Name: Vishal Kisave\n- Designation: Operations Manager\n- Email: help@truevibes.in\n- Response Time: Acknowledgment within 48 hours',
      },
    ],
  },
};
