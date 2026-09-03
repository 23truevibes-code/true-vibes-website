export interface LegalDoc {
  id: 'terms' | 'privacy' | 'refund' | 'cookie';
  title: string;
  lastUpdated: string;
  sections: { heading: string; body: string }[];
}

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  terms: {
    id: 'terms',
    title: 'Terms & Conditions',
    lastUpdated: '01 September 2025',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By engaging the services of TRUE VIBES WHERE YOUR LOVE FINDS LOVE PRIVATE LIMITED ("True Vibes", "we", "us"), you agree to be bound by these Terms & Conditions in full. If you do not agree with any part, you must not proceed with onboarding or membership.',
      },
      {
        heading: '2. Eligibility — Strictly 21+',
        body: 'Membership is restricted to individuals aged 21 years or older at the time of onboarding. A valid government-issued photo ID is mandatory. True Vibes reserves the right to reject or terminate any membership that fails age verification.',
      },
      {
        heading: '3. Marital Status Warranty',
        body: 'Members warrant that they are unmarried, legally divorced, or widowed at the time of joining. Providing false marital information constitutes a material breach resulting in immediate termination without refund.',
      },
      {
        heading: '4. Nature of Service',
        body: 'True Vibes is a confidential introductions service only. We do not provide marriage guarantees, relationship counseling, immigration assistance, visa support, or any service beyond curated introductions between verified members.',
      },
      {
        heading: '5. No Immigration Assistance',
        body: 'True Vibes explicitly does not offer, facilitate, or assist with immigration, visa applications, or any related services. Members are solely responsible for their own immigration and legal status matters.',
      },
      {
        heading: '6. Mutual Consent',
        body: 'Contact details are shared only after explicit mutual consent from both parties. True Vibes will never share your contact information without your prior written approval.',
      },
      {
        heading: '7. Jurisdiction',
        body: 'These Terms are governed by the laws of the Republic of India. All disputes shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.',
      },
      {
        heading: '8. Code of Conduct',
        body: 'Members must not engage in harassment, misrepresentation, commercial solicitation, or any unlawful behavior. Violations result in immediate termination and potential legal action.',
      },
    ],
  },
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: '01 September 2025',
    sections: [
      {
        heading: '1. DPDP Act Compliance',
        body: 'This Privacy Policy is published in compliance with the Digital Personal Data Protection (DPDP) Act, 2023. True Vibes acts as a Data Fiduciary and processes your personal data only for the purpose of providing confidential introduction services.',
      },
      {
        heading: '2. Data We Collect',
        body: 'We collect your name, age, contact details, government ID (for verification only), location, and preferences. Sensitive personal data is not stored beyond the verification period.',
      },
      {
        heading: '3. Data Encryption & Security',
        body: 'All personal data is encrypted in transit and at rest. Access is restricted to authorized personnel only. We employ industry-standard security measures to protect against unauthorized access, alteration, or disclosure.',
      },
      {
        heading: '4. No Third-Party Selling',
        body: 'True Vibes does not sell, rent, or trade your personal data to any third party under any circumstances. Your data is never shared with advertisers, data brokers, or external marketers.',
      },
      {
        heading: '5. Data Sharing — Mutual Consent Only',
        body: 'Your profile information is shared with another member only after explicit mutual consent from both parties. No contact details are shared without your prior written approval.',
      },
      {
        heading: '6. Data Retention & Erasure',
        body: 'You may request erasure of your data at any time by emailing help.truevibes@gmail.com. We process erasure requests within 7 days of receipt. Verification data is deleted immediately after the verification process is complete.',
      },
      {
        heading: '7. Your Rights',
        body: 'Under the DPDP Act, you have the right to access, correct, or erase your personal data, and to withdraw consent for processing. To exercise these rights, contact help.truevibes@gmail.com.',
      },
    ],
  },
  refund: {
    id: 'refund',
    title: 'Refund & Cancellation Policy',
    lastUpdated: '01 September 2025',
    sections: [
      {
        heading: '1. Non-Refundable Membership',
        body: 'All gentleman membership fees are strictly non-refundable once the onboarding process has commenced. By proceeding with payment, you acknowledge and accept this no-refund policy.',
      },
      {
        heading: '2. Onboarding Commencement',
        body: 'Onboarding is considered to have commenced the moment your government ID verification is initiated. No refunds will be issued after this point under any circumstances, including but not limited to change of mind, dissatisfaction with matches, or personal circumstances.',
      },
      {
        heading: '3. Cancellation by True Vibes',
        body: 'True Vibes reserves the right to cancel a membership at any time for breach of Terms, misrepresentation, or violation of safety guidelines. In such cases, no refund shall be provided.',
      },
      {
        heading: '4. Anti-Chargeback Clause',
        body: 'Initiating a chargeback or payment dispute after onboarding has commenced is strictly prohibited. Any chargeback initiated in violation of this policy will be contested with full documentation, and the member shall be liable for all associated costs, including legal fees.',
      },
      {
        heading: '5. Ladies Sponsored Membership',
        body: 'Ladies membership is 100% sponsored and free. No payment is collected, and therefore no refund policy applies.',
      },
      {
        heading: '6. Dispute Resolution',
        body: 'All disputes regarding payments are subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.',
      },
    ],
  },
  cookie: {
    id: 'cookie',
    title: 'Cookie Policy',
    lastUpdated: '01 September 2025',
    sections: [
      {
        heading: '1. Functional Cookies Only',
        body: 'True Vibes uses only functional cookies that are strictly necessary for the basic operation of this website. These cookies enable core features such as navigation and session continuity.',
      },
      {
        heading: '2. No Tracking or Advertising Cookies',
        body: 'We do not use tracking cookies, advertising cookies, third-party analytics cookies, or any cookies that profile your behavior for marketing purposes.',
      },
      {
        heading: '3. No Third-Party Cookie Sharing',
        body: 'We do not share cookie data with any third party, including advertisers, social media platforms, or analytics providers.',
      },
      {
        heading: '4. Managing Cookies',
        body: 'Since we use only functional cookies, disabling cookies in your browser may affect basic website functionality but will not impact your privacy in any way.',
      },
      {
        heading: '5. DPDP Act Compliance',
        body: 'This Cookie Policy is published in compliance with the Digital Personal Data Protection (DPDP) Act, 2023. No explicit consent is sought for functional cookies as they are necessary for basic website operation.',
      },
    ],
  },
};
