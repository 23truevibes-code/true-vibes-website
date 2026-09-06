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
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC442886',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Introduction',
        body: 'This platform, website, and executive matchmaking directory ("Service") is owned and operated by TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED ("True Vibes", "Company", "we", "us", or "our"). By registering, accessing, or utilizing our Service, you confirm your agreement to these professional Terms and Conditions. Continued interaction with platform interfaces signifies structured concurrence with published operational protocols.',
      },
      {
        heading: '1. Age Qualifications (21+)',
        body: 'The Service is reserved exclusively for candidates maintaining verified majority standing of 21 years of age or older. Platform registration and interaction privileges are restricted exclusively to individuals satisfying these statutory maturity criteria.',
      },
      {
        heading: '2. Government Credential Authentication',
        body: 'All prospective members must submit authentic, officially recognized civil identification credentials. Submission of documentation departing from authenticated public records results in immediate profile deactivation, forfeiture of administrative processing privileges, and formal statutory compliance review.',
      },
      {
        heading: '3. Civil Marital Status Verification',
        body: 'This platform is dedicated strictly to individuals holding unencumbered civil single status under governing law, including unmarried, legally dissolved, or widowed individuals. Platform onboarding is reserved exclusively for candidates satisfying these individual civil prerequisites.',
      },
      {
        heading: '4. Statutory Background Representation',
        body: 'You warrant and declare that you maintain an unblemished statutory background, possessing no adverse judicial adjudications, active civil restrictions, or inclusion on regulatory disqualification registries under any jurisdiction.',
      },
      {
        heading: '5. Non-Assignable Personal Account',
        body: 'Your registered profile credentials and introduction access are strictly personal and non-assignable. Subleasing, secondary distribution, commercial brokering, or unauthorized sharing of account credentials and introduction records is explicitly prohibited.',
      },
      {
        heading: '6. Introduction Scope & Operational Tenure',
        body: 'True Vibes delivers structured introduction consultation rounds within selected domestic or cross-border regional jurisdictions based on chosen tier specifications. Membership subscriptions operate on an active administrative term of ninety (90) calendar days commencing upon credential verification.',
      },
      {
        heading: '7. Curated Consultation Adjustments',
        body: 'Members may request up to 4 sequential introductory portfolio updates during the active 3-month administrative term, subject to operational review and directory availability.',
      },
      {
        heading: '8. Prohibition of Commercial or Unlawful Solicitations',
        body: 'True Vibes operates exclusively as an executive matrimonial introduction service. The platform strictly prohibits any non-matrimonial commercial engagements, transactional arrangements, or unapproved professional solicitations across all touchpoints.',
      },
      {
        heading: '9. Prohibition of Monetary Solicitations',
        body: 'Members are strictly prohibited from soliciting personal funds, third-party financing, digital asset transfers, speculative investments, or bilateral economic assistance from other participants across platform interfaces.',
      },
      {
        heading: '10. Professional Communication & Interpersonal Decorum',
        body: 'Members must uphold dignified interpersonal communication. Departures from civil decorum, hostile messaging, or unauthorized dissemination of confidential correspondence will result in immediate profile exclusion and administrative review.',
      },
      {
        heading: '11. Authorized Service Scope',
        body: 'The platform interface is reserved exclusively for authentic personal introductions, strictly prohibiting promotional commercialization, lead harvesting, unsolicited marketing, or third-party enterprise outreach.',
      },
      {
        heading: '12. Service Operational Standards',
        body: 'Platform introduction workflows and digital administrative interfaces are delivered under standard enterprise deployment protocols, maintaining consistent maintenance benchmarks.',
      },
      {
        heading: '13. Interpersonal Autonomy & Outcomes',
        body: 'True Vibes facilitates curated introduction opportunities. Platform curation functions independently of bilateral correspondence velocity, subjective personal affinity, or independent mutual decisions undertaken by participating members.',
      },
      {
        heading: '14. Interpersonal Discretion & Subsequent Communications',
        body: 'True Vibes facilitates digital matrimonial introductions; participating members exercise independent personal discretion and standard civic safety precautions during subsequent off-platform interpersonal introductions.',
      },
      {
        heading: '15. Platform Administrative Governance',
        body: 'The Company maintains administrative authority to suspend or restrict platform access where member conduct departs from published community decorum or contractual provisions.',
      },
      {
        heading: '16. Regulatory Indemnification',
        body: 'Members agree to hold True Vibes, its directors, and operational personnel harmless against administrative liabilities or external claims arising directly from individual non-compliance with these published platform terms.',
      },
      {
        heading: '17. Limitation of Service Scope',
        body: 'Platform administrative obligations arising in connection with service delivery are limited strictly to the total subscription amount remitted by the member for the active service tenure.',
      },
      {
        heading: '18. Governing Framework & Commercial Arbitration',
        body: 'These Terms are governed by the statutory laws of India. Any disputes arising in connection with platform operations shall be submitted to commercial arbitration under governing dispute resolution frameworks within Mumbai, Maharashtra, India.',
      },
      {
        heading: '19. Periodic Term Alignments',
        body: 'Operational terms may be updated periodically to reflect statutory alignments and regulatory updates, with revised versions published through official platform interfaces.',
      },
    ],
  },
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC442886',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Introduction',
        body: 'This Privacy Policy describes how TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED (operating under the brand True Vibes) processes, authenticates, and safeguards personal credentials in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and international data governance protocols.',
      },
      {
        heading: '1. Data Fiduciary Governance',
        body: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED acts as the designated Data Fiduciary, governing the limited processing and technical safeguard frameworks for onboarding documentation in accordance with statutory data principles.',
      },
      {
        heading: '2. Categories of Submitted Credentials',
        body: 'To verify identity authenticity and facilitate introductory curation, we process:\n\n- Verification Credentials: Basic demographic attributes (substantiating statutory 21+ age qualifications), current civil marital standing, and statutory identity documentation verified via encrypted authentication conduits.\n- Profile Parameters: Primary communication email, city of residence, professional discipline, educational background, and authenticated display media voluntarily submitted for curation.\n- Technical Telemetry & Metadata: Standard network parameters, user-agent details, interface interaction telemetry, and referral URL attributes utilized strictly to preserve interface session integrity and system security.',
      },
      {
        heading: '3. Lawful Purpose Specification',
        body: 'Submitted credentials are processed exclusively for:\n\n- Validating statutory age qualifications and authenticating civil onboarding records.\n- Facilitating curated matrimonial introductions based on mutual lifestyle alignment and explicit user consent.\n- Preserving platform security, maintaining community integrity standards, and preventing unauthorized system interactions.\n- Administering transactional documentation and meeting corporate recordkeeping obligations.',
      },
      {
        heading: '4. Confidential Data Protection & Zero-Sale Protocol',
        body: 'True Vibes enforces a comprehensive zero-sale policy: member credentials, personal contact information, and submitted biographical media are strictly non-sale assets and are never commercialized, leased, or distributed to third-party data brokers.',
      },
      {
        heading: '5. Private Directory Infrastructure',
        body: 'Profile portfolios within True Vibes operate within a protected authenticated ecosystem, restricted strictly to verified registered participants and permanently shielded from public search engine indexing.',
      },
      {
        heading: '6. Enterprise Encryption & Transmission Security',
        body: 'User records are maintained across enterprise cloud repositories protected by standard TLS/SSL cryptographic encryption in transit, segmented access authorization boundaries, and administrative security controls.',
      },
      {
        heading: '7. Data Subject Rights & Erasure Protocols (DPDP Act)',
        body: 'Under the DPDP Act, 2023, members maintain statutory rights to access, update, or request the secure erasure of their biographical records. Upon receipt of an erasure authorization from the registered email channel, primary platform directory records are securely de-identified or archived within standard statutory processing windows. Aggregated technical analytics conform to standard service provider retention schedules.',
      },
      {
        heading: '8. Statutory Compliance & Data Redressal Desk',
        body: 'In accordance with the DPDP Act and Information Technology Rules, 2021, statutory inquiries regarding credential processing may be directed to our designated compliance desk:\n\n- Compliance Desk: Operations Management Desk, TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED\n- Official Address: B2, Gorai-1, Borivali (West), Mumbai - 400092, Maharashtra, India\n- Official Compliance Channel: help@truevibes.in\n- Administrative Response: Formal receipt acknowledgement within 48 hours.',
      },
      {
        heading: '9. Campaign Measurement Protocols',
        body: 'Standard conversion measurement parameters evaluate aggregated landing page responsiveness in accordance with active browser preference settings.',
      },
    ],
  },
  refund: {
    id: 'refund',
    title: 'Refund and Cancellation Policy',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC462886',
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
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC462886',
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
