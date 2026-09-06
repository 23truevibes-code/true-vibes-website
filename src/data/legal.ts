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
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC442886',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Introduction',
        body: 'This Refund and Cancellation Policy governs all individual membership enrollments and introductory curation services provisioned by TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED.',
      },
      {
        heading: '1. Pricing Transparency',
        body: 'Package options and inclusive statutory taxation schedules are detailed conclusively on final checkout summaries prior to authorization:\n\n- Domestic Introduction Package: ₹1,800 + 18% GST (₹324) = ₹2,124 Total (INR)\n- International Introduction Package: $60.00 + Applicable Statutory Taxes = $70.80 Total (USD)\n\nAll packages represent fixed-tenure consultation enrollments without recurring billing or concealed administrative surcharges.',
      },
      {
        heading: '2. Committed Administrative Allocation',
        body: 'Subscription fees remitted to TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED facilitate immediate administrative onboarding, document credential authentication, manual verification labor, and directory provisioning. Consequently, operational fees remain fully committed once administrative access is provisioned.',
      },
      {
        heading: '3. Immediate Administrative Fulfillment',
        body: 'By authorizing the subscription fee and submitting biographical credentials, you formally instruct the immediate deployment of customized screening and active introductory directory allocation.',
      },
      {
        heading: '4. Structured Introduction Adjustments',
        body: 'While financial reversals are excluded once onboarding commences, members are supported through structured introductory portfolio adjustments. Members may receive up to 4 sequential introductory portfolio updates during their active 90-day enrollment window where mutual communication fails to progress. Introductory consultation allowances are designed for deployment within the active enrollment period.',
      },
      {
        heading: '5. Voluntary Membership Concession',
        body: 'Members may pause or conclude introduction circulation at any time by lodging an official request through their registered email. Because system resources are allocated at onboarding, voluntary cessations operate without retrospective fee adjustments.',
      },
      {
        heading: '6. Payment Reconciliation Protocols',
        body: 'Platform access tokens, timestamped authorization logs, and verified submission records are preserved to support accounting fidelity. Unsubstantiated payment disputes will be formally reconciled with acquiring banking conduits using preserved system authorization logs.',
      },
      {
        heading: '7. Intangible Service Classification & Shipping Exclusion',
        body: 'All deliverables consist entirely of intangible digital consultation workflows, identity authentication, and curated matrimonial introductions; physical delivery mechanisms or parcel shipments do not apply.',
      },
    ],
  },
  cookie: {
    id: 'cookie',
    title: 'Cookie and Company Policy',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC442886',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Introduction',
        body: 'This portal is owned and operated by TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED, an incorporated private limited entity under the Companies Act, 2013 in India.',
      },
      {
        heading: '1. Corporate Identification',
        body: '- Registered Corporate Entity: TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED\n- Corporate Identification Number (CIN): U63122MH2025PTC442886\n- Statutory Registry: Mumbai, Maharashtra, India',
      },
      {
        heading: '2. Session Tokens & System Architecture',
        body: 'True Vibes deploys standardized session tokens and analytical measurement protocols exclusively to maintain platform integrity and seamless interface navigation:\n\n- Essential Session Tokens: Mandatory for authenticating member logins and preserving form states.\n- System Security Identifiers: Applied to preserve secure session connectivity and prevent unauthorized multi-device concurrency.\n- Performance Measurement Tags: Evaluate interface responsiveness to optimize loading benchmarks across various viewing environments, incorporating standard third-party campaign measurement tags governed by browser configurations.',
      },
      {
        heading: '3. Authentic Matrimonial Engagement Policy',
        body: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED operates strictly for verified long-term matrimonial introductions. Any diversion into unauthorized transactional relationships or commercial interactions results in instant account termination and administrative exclusion.',
      },
      {
        heading: '4. Introduction Scope & Subjective Disclaimers',
        body: 'True Vibes provides professional introduction curation services and disclaims warranties regarding subjective interpersonal outcomes, individual compatibility, or subsequent contractual commitments between consenting adults.',
      },
      {
        heading: '5. Cross-Border Introduction Scope',
        body: 'True Vibes facilitates curated cultural introductions. All personal relocation, regulatory documentation, or sovereign travel authorizations remain under the independent purview of participating individuals.',
      },
    ],
  },
  contact: {
    id: 'contact',
    title: 'Contact Us',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED | CIN: U63122MH2025PTC442886',
    lastUpdated: '2026',
    sections: [
      {
        heading: 'Registered Corporate Office',
        body: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED\nCIN: U63122MH2025PTC442886\nB2, Gorai-1, Borivali (West), Mumbai - 400092, Maharashtra, India',
      },
      {
        heading: 'Customer Support Operations',
        body: 'Active administrative assistance is available through secure digital channels:\n\n- Official Support: help@truevibes.in\n- Operational Schedule: Monday to Saturday, 10:00 AM - 6:00 PM IST',
      },
      {
        heading: 'Statutory Compliance & Data Redressal Desk',
        body: '- Governance Desk: Operations Management Desk, TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED\n- Dedicated Channel: help@truevibes.in\n- Acknowledgement Window: Formal receipt acknowledgement within 48 hours.',
      },
    ],
  },
};
