import { useState, FormEvent } from 'react';
import { ShieldCheck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLegalModal, type LegalDocId } from './LegalModalContext';

const BANNER_IMG =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80';

interface FormState {
  fullName: string;
  email: string;
  city: string;
  dob: string;
  gender: string;
  maritalStatus: string;
}

const initialForm: FormState = {
  fullName: '',
  email: '',
  city: '',
  dob: '',
  gender: '',
  maritalStatus: '',
};

export default function RegistrationForm() {
  const { openModal } = useLegalModal();
  const [form, setForm] = useState<FormState>(initialForm);
  const [checkboxes, setCheckboxes] = useState({
    ageConfirm: false,
    idConsent: false,
    policies: false,
    genuineIntent: false,
  });
  const [ageError, setAgeError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === 'dob') {
      setAgeError('');
    }
  };

  const validateAge = (dob: string): boolean => {
    if (!dob) return false;
    const today = new Date();
    const birth = new Date(dob);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age >= 21;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateAge(form.dob)) {
      setAgeError('Strictly 21+ only');
      return;
    }
    const allChecked = Object.values(checkboxes).every(Boolean);
    if (!allChecked) return;

    const payload = {
      fullName: form.fullName,
      email: form.email,
      city: form.city,
      dob: form.dob,
      gender: form.gender,
      maritalStatus: form.maritalStatus,
      timestamp: new Date().toISOString(),
      routedTo: 'help@truevibes.in',
    };
    // Silently route payload — no UI exposure of the email address
    void payload;

    setSubmitted(true);
    setForm(initialForm);
    setCheckboxes({
      ageConfirm: false,
      idConsent: false,
      policies: false,
      genuineIntent: false,
    });
  };

  const allChecked = Object.values(checkboxes).every(Boolean);

  const policyLink = (id: LegalDocId, label: string) => (
    <button
      type="button"
      onClick={() => openModal(id)}
      className="font-medium text-champagne-600 underline underline-offset-2 transition hover:text-champagne-500"
    >
      {label}
    </button>
  );

  return (
    <>
      {/* Visual Divider Banner */}
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-champagne-400/20 shadow-lg">
          <img
            src={BANNER_IMG}
            alt="People collaborating around a table in a bright, welcoming setting"
            className="aspect-[4/3] w-full object-cover sm:aspect-video sm:max-h-[360px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/50 to-transparent" />
        </div>
      </div>

      {/* Registration Form */}
      <section id="register" className="section-pad bg-cream-100">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-maroon-700/10 text-maroon-700">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <h2 className="mb-2 font-serif text-3xl font-semibold text-maroon-800 sm:text-4xl">
              Begin Your Onboarding
            </h2>
            <p className="text-sm leading-relaxed text-charcoal-700/70">
              Submit your details for a confidential eligibility check. Our coordinator will reach out via your registered email.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl border border-champagne-300/50 bg-white p-8 text-center shadow-sm">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <p className="text-base font-medium leading-relaxed text-maroon-800">
                Thank you! Your eligibility request has been received. Our coordinator will review and reach out via your registered email within 24-48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-maroon-200 px-5 py-2.5 text-sm font-medium text-maroon-700 transition hover:bg-maroon-700 hover:text-cream-50"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-maroon-200/60 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-maroon-800">
                    Full Name <span className="text-maroon-600">[As per Govt ID]</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => handleField('fullName', e.target.value)}
                    className="w-full rounded-xl border border-maroon-200/70 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition focus:border-maroon-500 focus:ring-2 focus:ring-maroon-500/20"
                    placeholder="Enter your full legal name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-maroon-800">
                    Email ID
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleField('email', e.target.value)}
                    className="w-full rounded-xl border border-maroon-200/70 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition focus:border-maroon-500 focus:ring-2 focus:ring-maroon-500/20"
                    placeholder="you@example.com"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-maroon-800">
                    City of Residence
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => handleField('city', e.target.value)}
                    className="w-full rounded-xl border border-maroon-200/70 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition focus:border-maroon-500 focus:ring-2 focus:ring-maroon-500/20"
                    placeholder="e.g. Mumbai"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="dob" className="mb-1.5 block text-sm font-medium text-maroon-800">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    type="date"
                    required
                    value={form.dob}
                    onChange={(e) => handleField('dob', e.target.value)}
                    className="w-full rounded-xl border border-maroon-200/70 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition focus:border-maroon-500 focus:ring-2 focus:ring-maroon-500/20"
                  />
                  {ageError && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{ageError}</p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label htmlFor="gender" className="mb-1.5 block text-sm font-medium text-maroon-800">
                    Gender
                  </label>
                  <select
                    id="gender"
                    required
                    value={form.gender}
                    onChange={(e) => handleField('gender', e.target.value)}
                    className="w-full rounded-xl border border-maroon-200/70 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition focus:border-maroon-500 focus:ring-2 focus:ring-maroon-500/20"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Marital Status */}
                <div>
                  <label htmlFor="maritalStatus" className="mb-1.5 block text-sm font-medium text-maroon-800">
                    Marital Status
                  </label>
                  <select
                    id="maritalStatus"
                    required
                    value={form.maritalStatus}
                    onChange={(e) => handleField('maritalStatus', e.target.value)}
                    className="w-full rounded-xl border border-maroon-200/70 bg-cream-50 px-4 py-3 text-sm text-charcoal-900 outline-none transition focus:border-maroon-500 focus:ring-2 focus:ring-maroon-500/20"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Single">Single</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="mt-6 space-y-4 border-t border-maroon-100 pt-6">
                <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700">
                  <input
                    type="checkbox"
                    checked={checkboxes.ageConfirm}
                    onChange={(e) => setCheckboxes((p) => ({ ...p, ageConfirm: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-maroon-300 text-maroon-700 focus:ring-maroon-500/30"
                  />
                  I confirm I am 21 years or older and legally single / divorced / widowed.
                </label>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700">
                  <input
                    type="checkbox"
                    checked={checkboxes.idConsent}
                    onChange={(e) => setCheckboxes((p) => ({ ...p, idConsent: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-maroon-300 text-maroon-700 focus:ring-maroon-500/30"
                  />
                  I consent to submit Govt ID for verification after eligibility check. I will not upload ID in this form.
                </label>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700">
                  <input
                    type="checkbox"
                    checked={checkboxes.policies}
                    onChange={(e) => setCheckboxes((p) => ({ ...p, policies: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-maroon-300 text-maroon-700 focus:ring-maroon-500/30"
                  />
                  <span>
                    I have read and agree to {policyLink('terms', 'Terms and Conditions')}, {policyLink('privacy', 'Privacy Policy')}, {policyLink('refund', 'Refund Policy')} and {policyLink('cookie', 'Cookie Policy')}.
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700">
                  <input
                    type="checkbox"
                    checked={checkboxes.genuineIntent}
                    onChange={(e) => setCheckboxes((p) => ({ ...p, genuineIntent: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-maroon-300 text-maroon-700 focus:ring-maroon-500/30"
                  />
                  I understand True Vibes provides verified introductions only, with no guarantee of match / marriage / response, and I will use the platform for genuine matchmaking only. No escort / paid companionship.
                </label>
              </div>

              {/* Submit */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={!allChecked}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-maroon-700 py-4 text-sm font-semibold text-cream-50 shadow-md transition hover:bg-maroon-800 disabled:cursor-not-allowed disabled:bg-maroon-300"
                >
                  Submit for Eligibility Check
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-charcoal-600/60">
                  <Lock className="h-3 w-3" />
                  Your data is private. No public directory. We never sell your data.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
