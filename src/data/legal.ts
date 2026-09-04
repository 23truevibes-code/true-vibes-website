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
    title: 'Terms & Conditions of Service',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED (CIN: U63122MH2025PTC462886) — Registered Office: B2 GORAI-1 SIDHI CHS LTD, PLOT NO 14 SECTOR 1, Borivali West, Mumbai – 400092, Maharashtra, India.',
    lastUpdated: '01 September 2025',
    sections: [
      {
        heading: '1. Acceptance of Contract',
        body: 'These Terms constitute a legally binding electronic contract under the Indian Information Technology Act, 2000 and applicable international electronic contract laws. By accessing, registering, or continuing to use the services of True Vibes, you irrevocably accept all terms herein. If you do not agree, you must discontinue use immediately.',
      },
      {
        heading: '2. Mandatory 21+ Age & Identity Verification',
        body: 'Membership is strictly restricted to individuals aged 21 years or older. Mandatory submission of a government-issued photo ID (Passport, Aadhaar, National ID, or Driver\'s License) is required prior to profile consideration. Submitting forged, altered, or third-party documents constitutes criminal fraud and will result in immediate termination, blacklisting, and criminal reporting.',
      },
      {
        heading: '3. Marital Warranty & Exclusivity',
        body: 'This service is strictly reserved for individuals who are Unmarried, Legally Divorced (with a final decree absolute), or Widowed. Married or legally separated persons are strictly barred from membership. False marital declarations constitute a material breach resulting in immediate termination without refund.',
      },
      {
        heading: '4. Criminal History Warranty',
        body: 'Members warrant that they have never been convicted of a felony, sexual offense, crime of violence, or crime of moral turpitude, and are not registered on any sex offender registry in any jurisdiction. True Vibes reserves the right to verify and reject any profile at its sole discretion.',
      },
      {
        heading: '5. Community Guidelines & Prohibited Conduct',
        body: 'Zero tolerance for harassment, stalking, hate speech, defamation, impersonation, extortion, money solicitation, or offensive communications. True Vibes strictly prohibits commercial solicitation, escort services, sex work, or prostitution of any kind. Violations result in immediate termination, blacklisting, and potential legal action.',
      },
      {
        heading: '6. Staff Protection Policy',
        body: 'Zero tolerance for abusive, threatening, or vulgar communications directed at True Vibes personnel, matchmakers, or support staff. Any such conduct results in immediate membership termination, permanent blacklisting, and criminal reporting to the relevant authorities.',
      },
      {
        heading: '7. Financial Interactions Warning',
        body: 'Members must never send money, wire funds, extend loans, or share bank details with any introduced match. True Vibes accepts zero liability for any financial transactions conducted between members. Any request for money from a match should be reported immediately to help.truevibes@gmail.com.',
      },
      {
        heading: '8. Safe Dating & Diligence Disclaimer',
        body: 'True Vibes verifies identity credentials but does not conduct exhaustive physical background, psychological, or criminal investigations. Members are solely responsible for verifying potential matches through their own diligence. All initial meetings must occur in daylight public venues. True Vibes does not guarantee the character, intentions, or safety of any introduced member.',
      },
      {
        heading: '9. Disclaimer of Relational Outcomes',
        body: 'True Vibes is a matchmaking and introduction consultancy. The company does not warrant, promise, or guarantee marriage, compatibility, relational success, response rates, or mutual attraction. The outcome of any introduction depends entirely on the individuals involved.',
      },
      {
        heading: '10. Limitation of Liability',
        body: 'True Vibes, its directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, punitive, or consequential damages, personal injury, emotional distress, or financial losses arising from member conduct, introductions, or use of the service. Members accept full responsibility for their interactions.',
      },
      {
        heading: '11. Termination & Account Revocation',
        body: 'The company reserves the unilateral right to suspend, terminate, or blacklist any profile without refund upon breach of any covenant, guideline, or warranty herein. No prior notice is required. Terminated members are permanently barred from re-registration.',
      },
      {
        heading: '12. Governing Law & Exclusive Jurisdiction',
        body: 'These Terms are governed strictly by the laws of the Republic of India. All claims, legal proceedings, and disputes arising from or relating to this service are subject exclusively to the jurisdiction of competent courts in Mumbai, Maharashtra, India.',
      },
    ],
  },
  privacy: {
    id: 'privacy',
    title: 'Global Privacy Policy & Data Fiduciary Notice',
    subtitle: 'Compliant with the Digital Personal Data Protection (DPDP) Act, 2023 (India), GDPR (EU/UK), and CalOPPA/CCPA (US). Data Fiduciary: True Vibes Where Your Love Finds Love Pvt Ltd.',
    lastUpdated: '01 September 2025',
    sections: [
      {
        heading: '1. Information We Collect',
        body: 'We collect personal identification data including your full legal name, date of birth, contact number, email address, and residential city. We also collect partner preference parameters and official government-issued identity documents solely for the purpose of identity and age verification.',
      },
      {
        heading: '2. Purpose Limitation & Processing',
        body: 'Your data is processed strictly for manual profile matching, identity authentication, customer support, and regulatory compliance. We do not sell, rent, monetize, or publicly catalog user data to any third party under any circumstances.',
      },
      {
        heading: '3. Confidentiality Protocol',
        body: 'Member details and photos are never listed in public directories, indexed by search engines, or made accessible to non-matched members. Your profile is shared privately and confidentially only with mutually matched, verified members — and only after explicit mutual consent.',
      },
      {
        heading: '4. Cross-Border Data Transfers',
        body: 'User records from both domestic and international applicants are stored in secured, encrypted enterprise servers. International data transfers adhere to standard data protection clauses and applicable transfer mechanisms under DPDP, GDPR, and CalOPPA/CCPA frameworks.',
      },
      {
        heading: '5. Data Retention & Automated Erasure',
        body: 'Government ID documents are stored strictly in restricted encrypted vaults during active membership. Inactive profile records are purged following tenure expiration. Verification data is deleted immediately after the verification process is complete.',
      },
      {
        heading: '6. User Rights (DPDP & GDPR)',
        body: 'Users have the right to access, rectify, restrict processing, and request permanent erasure of their personal data ("Right to be Forgotten"). You may also withdraw consent for data processing at any time. To exercise any of these rights, contact our Data Grievance Officer.',
      },
      {
        heading: '7. Grievance Redressal & Data Deletion',
        body: 'Data erasure requests and privacy complaints are executed within 7 business days of receipt. Contact our Data Grievance Officer at help.truevibes@gmail.com for any privacy-related requests, complaints, or grievances.',
      },
    ],
  },
  refund: {
    id: 'refund',
    title: 'Refund, Cancellation & Replacement Policy',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED — All fees represent administrative consultation and personalized matchmaking curation.',
    lastUpdated: '01 September 2025',
    sections: [
      {
        heading: '1. Operational Nature of Service',
        body: 'True Vibes fees — Domestic ₹2,124 INR (incl. 18% GST) / International $70.80 USD (incl. 18% GST) — represent administrative consultation, manual ID verification, and personalized matchmaking curation. These services commence immediately upon payment confirmation.',
      },
      {
        heading: '2. Strictly Non-Refundable Policy',
        body: 'Once payment is completed and administrative verification has commenced, membership fees are strictly non-refundable under any circumstances. This applies regardless of matching velocity, number of introductions received, or user choice to discontinue. By proceeding with payment, you irrevocably accept this no-refund policy.',
      },
      {
        heading: '3. Replacement Mechanism',
        body: 'If an introduced match does not progress mutually, members are entitled to up to four (4) replacement introductions over the active 3-month membership term. Replacements are provided strictly under the one-at-a-time protocol — a new introduction is shared only after the previous one has concluded.',
      },
      {
        heading: '4. Fraudulent Chargeback Policy',
        body: 'Any unauthorized payment dispute or credit card chargeback initiated without legal merit constitutes fraud. It will result in immediate permanent blacklisting, forfeiture of all remaining services, and formal recovery action in Mumbai jurisdiction. The member shall be liable for all associated costs including legal fees.',
      },
    ],
  },
  cookie: {
    id: 'cookie',
    title: 'Cookie & Tracking Policy',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED — We use only essential operational cookies.',
    lastUpdated: '01 September 2025',
    sections: [
      {
        heading: '1. Purpose of Cookies',
        body: 'We use essential operational cookies and telemetry to enable secure navigation, remember your preferences, and protect against fraudulent bot access. These cookies are necessary for the basic functioning of the website.',
      },
      {
        heading: '2. Cookie Types',
        body: 'Essential Cookies: Necessary for site security, session management, and core functionality. Performance & Analytics: Anonymized operational metrics to monitor and improve site performance. No data from these cookies is used to profile or identify you personally.',
      },
      {
        heading: '3. Third-Party Tracking',
        body: 'We do not deploy intrusive third-party cross-site advertising trackers. We do not sell browsing data to data brokers, advertisers, or any external party. No behavioral profiling is conducted for marketing purposes.',
      },
      {
        heading: '4. User Management',
        body: 'Users can modify cookie preferences through their browser settings at any time. Disabling cookies may affect basic website functionality but will not impact your privacy. Continued use of this website constitutes full consent to essential operational cookies.',
      },
    ],
  },
  contact: {
    id: 'contact',
    title: 'Contact Us',
    subtitle: 'TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED',
    lastUpdated: '01 September 2025',
    sections: [
      {
        heading: 'Get in Touch',
        body: 'For membership enquiries, onboarding support, or any questions about our matchmaking services, please reach out to us using the details below. Our team is available to assist you during business hours.',
      },
      {
        heading: 'Email',
        body: 'help.truevibes@gmail.com — For all enquiries, support requests, and grievance redressal.',
      },
      {
        heading: 'Phone',
        body: '+91 79770 04902 — Available for member support during active membership hours.',
      },
      {
        heading: 'Registered Office',
        body: 'B2 GORAI-1 SIDHI CHS LTD, PLOT NO 14 SECTOR 1, Borivali West, Mumbai – 400092, Maharashtra, India.',
      },
      {
        heading: 'Grievance Redressal',
        body: 'DPDP data deletion & requests resolved within 7 business days via help.truevibes@gmail.com.',
      },
    ],
  },
};
