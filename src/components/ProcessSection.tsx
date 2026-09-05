import { useState } from 'react';
import {
  UserCheck,
  Users2,
  FileLock2,
  Target,
  Eye,
  HeartHandshake,
  PhoneCall,
  RefreshCw,
  Settings2,
  ShieldAlert,
  ChevronDown,
} from 'lucide-react';

const onboardingCards = [
  {
    icon: UserCheck,
    title: 'Personal Guidance',
    desc: 'After submitting your initial interest, a dedicated coordinator connects directly via our official secure support desk to guide you through verification, explain active cycles, and manage introductions.',
  },
  {
    icon: Users2,
    title: 'Community Transparency',
    desc: 'Explore our member safety guidelines, code of conduct, and authentic community feedback on our official secure verification resources via our secure support desk prior to onboarding.',
  },
  {
    icon: FileLock2,
    title: 'Confidential Profile Setup',
    desc: 'Your preferences, background, and identity credentials are processed via our private onboarding form to ensure complete data safety.',
  },
];

const visibleSteps = [
  {
    num: '01',
    icon: Target,
    title: 'Connection Intent',
    desc: 'Select your connection goal: Friendship & Social Networking, Meaningful Connections, Long-Term Partnership, or Compatibility Matches.',
  },
  {
    num: '02',
    icon: Eye,
    title: 'Verified Confidential Outreach & Privacy Priority',
    desc: "To preserve privacy and dignity, we never share profiles as an open public directory. For enhanced safety, other members' private profiles, photos, and contact details are never shared without their explicit YES. In practice, this means we first share your verified profile for initial review. All profile sharing is done strictly based on your location and your selected category / preferences. We share a profile with compatible members based on live availability. Your profile remains active for outreach during your 3-month validity period.",
  },
  {
    num: '03',
    icon: HeartHandshake,
    title: 'Mutual Interest Exchange — No Photo Without YES',
    desc: "A match is created only on mutual interest. If a member reviews your profile and says 'Yes, you can share my profile', only then their curated profile is shared with you. If no member shows interest in your profile, no profile will be shared with you. We do not forward random photos. This is why we cannot guarantee a match — detail sharing happens only when someone shows interest in your profile.",
  },
];

const hiddenSteps = [
  {
    num: '04',
    icon: PhoneCall,
    title: 'Double Confirmation & Contact Exchange',
    desc: 'Personal contact details are exchanged strictly after explicit confirmation from both sides.',
  },
  {
    num: '05',
    icon: RefreshCw,
    title: 'Turnaround Timeline & How Our 3-Month Validity Works',
    desc: 'Screening and initial profile reviews begin within 2-4 working days. Normally, an initial match / interest response is received within 1-2 weeks. On average, many responses arrive within 2-4 days itself. However, if for any reason no interest is received in the first week, the same outreach process is repeated in the second week, and this continues throughout your 3-month validity. For some members with niche preferences, it may take longer than 2 weeks depending on live availability and mutual compatibility. This timeline is an average and not a guarantee. The reason we have kept a 3-month validity is that more than half of the matches get rejected after the initial conversation or meeting because the bonding does not match. So even if it does not work out with the first or second introduction, we have kept 3 months so that your bonding can match with the third or fourth introduction.',
  },
  {
    num: '06',
    icon: HeartHandshake,
    title: 'Replacement Policy — Important Rule',
    desc: 'Replacement is not on-demand for just wanting a new profile. A replacement / next match within 3 months will only be provided when both members inform our coordinator that their bonding is not matching / they are not compatible for any reason. This means you cannot continue talking to the first match and also ask for a second or third match at the same time. Double dating or talking to 2-3 people simultaneously is strictly not allowed. Both sides must confirm closure — that "our match is not working" — only then we will provide you the next verified introduction. This is to ensure we can help everyone fairly. During your 3-month validity, you can change / apply for up to 3-4 new introduction cycles if mutual incompatibility is confirmed. After 3 months, if you wish to continue, you will need to renew your plan.',
  },
  {
    num: '07',
    icon: Settings2,
    title: 'Profile Updates & Support',
    desc: 'During your 3-month validity, you can update your location, photos, or preferences anytime. For any updates, to know how many members your profile was shared with, or to check if any response has arrived, you can directly call or message our Customer Support number provided after onboarding.',
  },
  {
    num: '08',
    icon: ShieldAlert,
    title: 'Operational Disclaimer, Safety & Code of Conduct',
    desc: 'We are a curated introduction and matchmaking facilitator. We provide active outreach, continuous support, and verified profiles for 3 months; however, individual chemistry, reciprocal interest, and final relationship outcomes naturally depend on mutual affinity and cannot be guaranteed. If no mutual interest is received during the validity period, we cannot create a match forcibly.\n\nSafety & Financial Disclaimer: After a match and number exchange, any further conversation, meeting, or any kind of payment / financial transaction you do with any member is entirely at your own risk and is not our responsibility. Our role is only to facilitate verified introductions.\n\nCode of Conduct: Any form of abusive language, misbehavior, vulgar talk, or harassment towards our Customer Support team will result in instant blocking of your ID and your membership will be non-refundable.',
  },
];

export default function ProcessSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="process-section" className="section-pad bg-cream-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-maroon-600">How Our Onboarding & Matchmaking Works</p>
          <h2 className="font-serif text-3xl font-semibold text-maroon-800 sm:text-4xl">
            Privacy-First, Consent-Based Process
          </h2>
        </div>

        {/* Onboarding Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {onboardingCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-maroon-200/60 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-maroon-700/10 text-maroon-700 transition group-hover:scale-110 group-hover:bg-maroon-700 group-hover:text-cream-50">
                <card.icon className="h-5 w-5" />
              </span>
              <h3 className="mb-2 font-serif text-base font-semibold text-maroon-800">{card.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal-700">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Matchmaking Steps */}
        <div className="mt-12 space-y-4">
          {visibleSteps.map((step) => (
            <div
              key={step.num}
              className="flex items-start gap-4 rounded-2xl border border-champagne-300/40 bg-white/80 p-5 sm:p-6"
            >
              <div className="flex shrink-0 flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 text-cream-50 shadow-md">
                  <step.icon className="h-5 w-5" />
                </span>
                <span className="mt-2 font-serif text-sm font-semibold text-maroon-700">{step.num}</span>
              </div>
              <div>
                <h3 className="mb-1.5 font-serif text-base font-semibold text-maroon-800 sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal-700">{step.desc}</p>
              </div>
            </div>
          ))}

          {/* Collapsible Accordion */}
          <div className="overflow-hidden rounded-2xl border border-champagne-300/40 bg-white/80">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:px-6"
            >
              <span className="font-serif text-base font-semibold text-maroon-800 sm:text-lg">
                View Full Process & Guidelines
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-maroon-600 transition-transform duration-300 ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expanded && (
              <div className="animate-fade-in space-y-4 px-5 pb-6 sm:px-6">
                {hiddenSteps.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-4 rounded-xl border border-maroon-200/40 bg-cream-50 p-4 sm:p-5"
                  >
                    <div className="flex shrink-0 flex-col items-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 text-cream-50 shadow-md">
                        <step.icon className="h-5 w-5" />
                      </span>
                      <span className="mt-2 font-serif text-sm font-semibold text-maroon-700">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="mb-1.5 font-serif text-base font-semibold text-maroon-800 sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="whitespace-pre-line text-sm leading-relaxed text-charcoal-700">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
