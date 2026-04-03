/* ════════════════════════════════════════════════════════════════
   DR. ARJUN RAMESH NAIR — NEPHROLOGIST WEBSITE
   script.js  ·  Complete Application Logic
════════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────────
   DOCTOR SVG ILLUSTRATION
   A professional illustrated portrait — clearly artistic,
   no real person depicted.
────────────────────────────────────────────────────────────────*/
const DOCTOR_SVG_LARGE = `
<svg viewBox="0 0 440 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrated portrait of Dr. Arjun Ramesh Nair, Nephrologist">
  <defs>
    <linearGradient id="bgHero" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c1b35"/>
      <stop offset="100%" stop-color="#172e5c"/>
    </linearGradient>
    <linearGradient id="coatG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8f8f8"/>
      <stop offset="100%" stop-color="#e4e4e4"/>
    </linearGradient>
    <linearGradient id="skinG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c8844a"/>
      <stop offset="100%" stop-color="#b06e30"/>
    </linearGradient>
    <linearGradient id="floorG" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a3a6a" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0c1b35" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#c09a2e" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#c09a2e" stop-opacity="0"/>
    </radialGradient>
    <filter id="softshadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="rgba(0,0,0,0.5)"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="440" height="560" fill="url(#bgHero)" rx="16"/>
  <ellipse cx="220" cy="220" rx="200" ry="180" fill="url(#glow)"/>

  <!-- Decorative ring -->
  <circle cx="220" cy="220" r="190" fill="none" stroke="#c09a2e" stroke-width="0.6" stroke-dasharray="8 6" opacity="0.2"/>

  <!-- Body shadow/floor gradient -->
  <ellipse cx="220" cy="520" rx="130" ry="30" fill="rgba(0,0,0,0.3)"/>

  <!-- White coat — body -->
  <path d="M 80 540 L 70 350 Q 68 300 100 270 L 155 260 L 220 285 L 285 260 L 320 265 Q 370 290 372 350 L 362 540 Z"
        fill="url(#coatG)" filter="url(#softshadow)"/>

  <!-- Coat lapels -->
  <path d="M 155 260 L 195 310 L 220 290 L 220 285 Z" fill="#d8d8d8"/>
  <path d="M 285 260 L 245 310 L 220 290 L 220 285 Z" fill="#ebebeb"/>

  <!-- Shirt collar & tie -->
  <path d="M 193 268 L 220 285 L 247 268 L 240 254 L 220 260 L 200 254 Z" fill="#1a3a7a"/>
  <!-- Tie -->
  <polygon points="220,272 212,320 220,315 228,320" fill="#c09a2e" opacity="0.9"/>
  <polygon points="216,312 224,312 220,330" fill="#a07828"/>

  <!-- Arms -->
  <path d="M 100 270 Q 62 310 58 380 Q 56 420 72 440 L 96 440 Q 88 420 94 380 Q 100 330 120 295 Z"
        fill="url(#coatG)"/>
  <path d="M 340 270 Q 378 310 382 380 Q 384 420 368 440 L 344 440 Q 352 420 346 380 Q 340 330 320 295 Z"
        fill="#ebebeb"/>

  <!-- Left hand -->
  <ellipse cx="80" cy="450" rx="22" ry="18" fill="url(#skinG)"/>
  <!-- Right hand / clipboard -->
  <ellipse cx="360" cy="450" rx="22" ry="18" fill="url(#skinG)"/>

  <!-- Clipboard in right hand -->
  <rect x="330" y="390" width="58" height="74" fill="white" rx="4" stroke="#ccc" stroke-width="1.5"/>
  <rect x="347" y="383" width="24" height="12" fill="#aaa" rx="3"/>
  <rect x="334" y="404" width="50" height="60" fill="#f5f5f5" rx="3"/>
  <line x1="339" y1="416" x2="378" y2="416" stroke="#1a3a7a" stroke-width="1.5"/>
  <line x1="339" y1="426" x2="378" y2="426" stroke="#1a3a7a" stroke-width="1.5"/>
  <line x1="339" y1="436" x2="370" y2="436" stroke="#1a3a7a" stroke-width="1.5"/>
  <line x1="339" y1="446" x2="365" y2="446" stroke="#c09a2e" stroke-width="1.5"/>
  <line x1="339" y1="456" x2="362" y2="456" stroke="#c09a2e" stroke-width="1.5"/>

  <!-- Stethoscope -->
  <path d="M 168 278 Q 148 320 152 380 Q 155 415 185 425 Q 220 432 255 425 Q 285 415 288 380 Q 292 320 272 278"
        fill="none" stroke="#c09a2e" stroke-width="5" stroke-linecap="round" opacity="0.9"/>
  <circle cx="220" cy="428" r="14" fill="#b08020"/>
  <circle cx="220" cy="428" r="10" fill="#c09a2e"/>
  <circle cx="220" cy="428" r="5"  fill="#8a6010"/>
  <!-- Earpieces -->
  <path d="M 166 275 Q 162 262 155 255" stroke="#8a6010" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M 274 275 Q 278 262 285 255" stroke="#8a6010" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="153" cy="253" r="5" fill="#6a4a08"/>
  <circle cx="287" cy="253" r="5" fill="#6a4a08"/>

  <!-- Name badge on coat -->
  <rect x="135" y="330" width="80" height="34" fill="white" rx="4" stroke="#ddd" stroke-width="1"/>
  <rect x="135" y="330" width="80" height="6" fill="#1a3a7a" rx="4"/>
  <text x="175" y="348" font-size="8.5" text-anchor="middle" fill="#0c1b35" font-family="Georgia, serif" font-weight="600">Dr. A.R. Nair</text>
  <text x="175" y="358" font-size="7"   text-anchor="middle" fill="#1a7a7a" font-family="Georgia, serif">NEPHROLOGIST</text>

  <!-- Neck -->
  <rect x="200" y="232" width="40" height="46" fill="url(#skinG)" rx="6"/>

  <!-- Head -->
  <ellipse cx="220" cy="196" rx="72" ry="82" fill="url(#skinG)"/>

  <!-- Hair — top -->
  <path d="M 148 180 Q 148 120 182 108 Q 200 102 220 102 Q 240 102 258 108 Q 292 120 292 180 Q 280 158 220 155 Q 160 158 148 180 Z"
        fill="#120800"/>
  <!-- Side hair -->
  <path d="M 149 185 Q 143 210 148 235" stroke="#120800" stroke-width="14" fill="none" stroke-linecap="round"/>
  <path d="M 291 185 Q 297 210 292 235" stroke="#120800" stroke-width="14" fill="none" stroke-linecap="round"/>

  <!-- Glasses frame -->
  <circle cx="196" cy="196" r="18" fill="rgba(240,240,255,0.12)" stroke="#2a2a2a" stroke-width="2.5"/>
  <circle cx="244" cy="196" r="18" fill="rgba(240,240,255,0.12)" stroke="#2a2a2a" stroke-width="2.5"/>
  <line x1="214"  y1="196" x2="226" y2="196" stroke="#2a2a2a" stroke-width="2"/>
  <line x1="148"  y1="192" x2="178" y2="195" stroke="#2a2a2a" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="292"  y1="192" x2="262" y2="195" stroke="#2a2a2a" stroke-width="1.8" stroke-linecap="round"/>

  <!-- Eyes -->
  <ellipse cx="196" cy="196" rx="8"  ry="7"  fill="#1a0800"/>
  <ellipse cx="244" cy="196" rx="8"  ry="7"  fill="#1a0800"/>
  <ellipse cx="198" cy="194" rx="2.5" ry="2.5" fill="white" opacity="0.9"/>
  <ellipse cx="246" cy="194" rx="2.5" ry="2.5" fill="white" opacity="0.9"/>

  <!-- Eyebrows -->
  <path d="M 180 181 Q 196 175 212 180" stroke="#1a0800" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M 228 180 Q 244 175 260 181" stroke="#1a0800" stroke-width="3" fill="none" stroke-linecap="round"/>

  <!-- Nose -->
  <path d="M 217 200 Q 211 218 214 226 Q 220 232 226 226 Q 229 218 223 200"
        fill="#a86828" stroke="none" opacity="0.6"/>
  <path d="M 212 225 Q 220 228 228 225" fill="none" stroke="#8a5220" stroke-width="1.5" stroke-linecap="round"/>

  <!-- Smile -->
  <path d="M 200 238 Q 220 252 240 238" fill="none" stroke="#7a3a18" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Cheek blush -->
  <ellipse cx="170" cy="218" rx="16" ry="10" fill="#d06040" opacity="0.18"/>
  <ellipse cx="270" cy="218" rx="16" ry="10" fill="#d06040" opacity="0.18"/>

  <!-- Medical cross decoration -->
  <rect x="22" y="32" width="12" height="36" fill="#c09a2e" opacity="0.3" rx="3"/>
  <rect x="12" y="42" width="32" height="12" fill="#c09a2e" opacity="0.3" rx="3"/>

  <!-- Decorative kidney shape (top-right) -->
  <path d="M 400 40 Q 415 30 425 45 Q 432 58 420 68 Q 408 72 400 62 Q 393 52 400 40 Z"
        fill="none" stroke="#c09a2e" stroke-width="1.5" opacity="0.25"/>

  <!-- Stars / credentials dots -->
  <circle cx="30"  cy="500" r="2" fill="#c09a2e" opacity="0.3"/>
  <circle cx="40"  cy="510" r="1.5" fill="#c09a2e" opacity="0.2"/>
  <circle cx="50"  cy="495" r="2.5" fill="#c09a2e" opacity="0.25"/>
  <circle cx="400" cy="505" r="2" fill="#c09a2e" opacity="0.3"/>
  <circle cx="415" cy="490" r="1.5" fill="#c09a2e" opacity="0.2"/>
</svg>`;

/* Smaller version for booking card */
const DOCTOR_SVG_SMALL = DOCTOR_SVG_LARGE.replace('viewBox="0 0 440 560"', 'viewBox="0 0 440 560"');

/* ──────────────────────────────────────────────────────────────
   GALLERY DATA — 28 Illustrated Milestones
────────────────────────────────────────────────────────────────*/
const galleryData = [
  { year:"2002", caption:"Medical School Admission — Grant Medical College",     icon:"📚", period:"Early Days",    bg:"linear-gradient(135deg,#1a2a5a,#2a4a8a)" },
  { year:"2003", caption:"First Anatomy Lab — Learning Human Structure",          icon:"🔬", period:"College Years",  bg:"linear-gradient(135deg,#1a4a2a,#2a7a4a)" },
  { year:"2004", caption:"Clinical Rotation — Wards &amp; OPD",                  icon:"🏥", period:"College Years",  bg:"linear-gradient(135deg,#3a1a4a,#5a2a7a)" },
  { year:"2005", caption:"Community Health Camp — Rural Maharashtra",             icon:"❤️", period:"College Years",  bg:"linear-gradient(135deg,#5a1a1a,#8a2a2a)" },
  { year:"2006", caption:"Senior Internship — KEM Hospital, Mumbai",             icon:"⚕️", period:"College Years",  bg:"linear-gradient(135deg,#1a3a5a,#1a6a8a)" },
  { year:"2007", caption:"MBBS Graduation Ceremony — University of Mumbai",      icon:"🎓", period:"Graduation",     bg:"linear-gradient(135deg,#4a3a0a,#8a6a1a)" },
  { year:"2007", caption:"MD Admission — General Medicine, KEM Hospital",        icon:"📋", period:"Post-Grad",      bg:"linear-gradient(135deg,#1a2a4a,#2a4a7a)" },
  { year:"2008", caption:"Research Work — Internal Medicine Department",          icon:"🧬", period:"Post-Grad",      bg:"linear-gradient(135deg,#1a4a3a,#1a7a6a)" },
  { year:"2009", caption:"First Research Paper Published — JAPI Journal",        icon:"📝", period:"Post-Grad",      bg:"linear-gradient(135deg,#3a2a0a,#6a4a1a)" },
  { year:"2010", caption:"MD Convocation — General Medicine",                    icon:"🏆", period:"MD Graduation",  bg:"linear-gradient(135deg,#4a2a0a,#8a4a0a)" },
  { year:"2010", caption:"DM Nephrology Admission — AIIMS, New Delhi",           icon:"🔭", period:"DM Fellowship",  bg:"linear-gradient(135deg,#1a1a4a,#1a2a7a)" },
  { year:"2011", caption:"Kidney Research Lab — Glomerular Disease Studies",     icon:"💉", period:"DM Fellowship",  bg:"linear-gradient(135deg,#1a3a2a,#1a6a4a)" },
  { year:"2012", caption:"DM Thesis — CKD Management &amp; Dialysis Outcomes",  icon:"📊", period:"DM Fellowship",  bg:"linear-gradient(135deg,#3a1a3a,#5a2a5a)" },
  { year:"2013", caption:"DM Nephrology Convocation — AIIMS New Delhi",          icon:"🎓", period:"DM Graduation",  bg:"linear-gradient(135deg,#3a3a0a,#6a6a1a)" },
  { year:"2013", caption:"Renal Transplant Fellowship — CMC Vellore",            icon:"✈️", period:"Fellowship",    bg:"linear-gradient(135deg,#0a3a3a,#1a6a6a)" },
  { year:"2014", caption:"First Independent Nephrology OPD — Mumbai",            icon:"👨‍⚕️",period:"Career Start", bg:"linear-gradient(135deg,#2a0a4a,#4a1a7a)" },
  { year:"2015", caption:"National Nephrology Conference — New Delhi",            icon:"🎤", period:"Career",        bg:"linear-gradient(135deg,#0a4a3a,#1a7a5a)" },
  { year:"2016", caption:"Nair Kidney Clinic Inauguration — Bandra, Mumbai",     icon:"🏥", period:"Career",        bg:"linear-gradient(135deg,#4a0a2a,#7a1a4a)" },
  { year:"2017", caption:"Advanced Dialysis Unit Launch",                        icon:"⚙️", period:"Career",        bg:"linear-gradient(135deg,#0a2a3a,#1a5a7a)" },
  { year:"2018", caption:"Kidney Transplant Programme — 100th Transplant",       icon:"💙", period:"Milestone",     bg:"linear-gradient(135deg,#0a3a4a,#1a6a8a)" },
  { year:"2019", caption:"Maharashtra Medical Excellence Award Ceremony",         icon:"🏅", period:"Award",         bg:"linear-gradient(135deg,#4a3a0a,#8a6a0a)" },
  { year:"2020", caption:"COVID-19 Frontline Kidney Care — Critical Unit",       icon:"🦠", period:"Pandemic Era",  bg:"linear-gradient(135deg,#3a0a0a,#5a1a1a)" },
  { year:"2021", caption:"International Nephrology Summit — Online Keynote",     icon:"🌐", period:"Recent",        bg:"linear-gradient(135deg,#0a2a4a,#1a4a8a)" },
  { year:"2022", caption:"Teaching &amp; Mentoring PG Residents",                icon:"📖", period:"Recent",        bg:"linear-gradient(135deg,#0a4a1a,#1a7a2a)" },
  { year:"2022", caption:"Kidney Awareness Camp — 500+ Screenings",              icon:"🩺", period:"Recent",        bg:"linear-gradient(135deg,#1a3a4a,#1a5a6a)" },
  { year:"2023", caption:"Chief Nephrologist Appointment — Mumbai General",      icon:"⭐", period:"Recent",        bg:"linear-gradient(135deg,#4a2a0a,#7a4a0a)" },
  { year:"2024", caption:"Advanced Renal Fibrosis Research Publication",         icon:"🔬", period:"Present",       bg:"linear-gradient(135deg,#1a2a4a,#2a4a6a)" },
  { year:"2025", caption:"Continuing Excellence in Nephrology &amp; Patient Care",icon:"💊",period:"Present",       bg:"linear-gradient(135deg,#2a0a3a,#4a1a5a)" },
];

/* ──────────────────────────────────────────────────────────────
   DOCUMENTS DATA — 7 Sample Certificates
────────────────────────────────────────────────────────────────*/
const documentsData = [
  {
    icon: "🏥",
    type: "Medical Licence",
    institution: "Maharashtra Medical Council",
    title: "Certificate of Medical Registration",
    fields: [
      { label: "Holder",      value: "Dr. Arjun Ramesh Nair" },
      { label: "Reg. No.",    value: "MH-20**-*****-NE", masked: true },
      { label: "Qualification", value: "MBBS, MD, DM (Nephrology)" },
      { label: "Speciality",  value: "Nephrology — DM Certified" },
      { label: "Issued By",   value: "Maharashtra Medical Council" },
      { label: "Valid Upto",  value: "Life Registration" },
    ],
    year: "2013",
    sig: "Registrar, Maharashtra Medical Council (***** — masked)"
  },
  {
    icon: "🎓",
    type: "Degree Certificate",
    institution: "University of Mumbai",
    title: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
    fields: [
      { label: "Graduate",    value: "Arjun Ramesh Nair" },
      { label: "Roll No.",    value: "MUM-MED-20**-***", masked: true },
      { label: "College",     value: "Grant Medical College, Mumbai" },
      { label: "Passed With", value: "Distinction" },
      { label: "Year",        value: "2007" },
    ],
    year: "2007",
    sig: "Vice Chancellor, University of Mumbai (Sig. *** — masked)"
  },
  {
    icon: "🎓",
    type: "Post-Graduate Degree",
    institution: "University of Mumbai",
    title: "Doctor of Medicine — MD (General Medicine)",
    fields: [
      { label: "Graduate",    value: "Dr. Arjun Ramesh Nair" },
      { label: "Roll No.",    value: "KEM-PG-20**-***", masked: true },
      { label: "College",     value: "KEM Hospital & Seth G.S. Medical College" },
      { label: "Speciality",  value: "General Medicine" },
      { label: "Year",        value: "2010" },
    ],
    year: "2010",
    sig: "Dean, Seth G.S. Medical College (Sig. *** — masked)"
  },
  {
    icon: "🏆",
    type: "Super-Speciality Degree",
    institution: "All India Institute of Medical Sciences, New Delhi",
    title: "Doctorate of Medicine — DM (Nephrology)",
    fields: [
      { label: "Candidate",   value: "Dr. Arjun Ramesh Nair" },
      { label: "Roll No.",    value: "AIIMS-DM-20**-***", masked: true },
      { label: "Department",  value: "Department of Nephrology" },
      { label: "Thesis",      value: "Management of CKD — Outcomes Study" },
      { label: "Year",        value: "2013" },
    ],
    year: "2013",
    sig: "Director, AIIMS New Delhi (Sig. *** — masked)"
  },
  {
    icon: "⚕️",
    type: "Membership Certificate",
    institution: "Indian Medical Association",
    title: "Life Membership Certificate",
    fields: [
      { label: "Member",      value: "Dr. Arjun Ramesh Nair" },
      { label: "Member ID",   value: "IMA-MH-*****", masked: true },
      { label: "Category",    value: "Life Member" },
      { label: "State Branch", value: "IMA Maharashtra" },
      { label: "Member Since", value: "2008" },
    ],
    year: "2008",
    sig: "National President, IMA (Sig. *** — masked)"
  },
  {
    icon: "📜",
    type: "Board Certificate",
    institution: "National Board of Examinations (NBE), New Delhi",
    title: "Diplomate of National Board — DNB (Nephrology)",
    fields: [
      { label: "Diplomate",   value: "Dr. Arjun Ramesh Nair" },
      { label: "NBE Roll No.", value: "NBE-***-20**", masked: true },
      { label: "Speciality",  value: "Nephrology" },
      { label: "Result",      value: "Passed with Merit" },
      { label: "Year",        value: "2014" },
    ],
    year: "2014",
    sig: "Executive Director, NBE (Sig. *** — masked)"
  },
  {
    icon: "🏠",
    type: "Domicile Certificate",
    institution: "Government of Maharashtra",
    title: "Certificate of Domicile — Maharashtra State",
    fields: [
      { label: "Applicant",   value: "Arjun Ramesh Nair" },
      { label: "Father's Name", value: "Ramesh G. Nair (** — masked)", masked: true },
      { label: "Address",     value: "Bandra West, Mumbai – 400 0** (masked)", masked: true },
      { label: "State",       value: "Maharashtra" },
      { label: "Purpose",     value: "Medical Admission / Practice Verification" },
    ],
    year: "2002",
    sig: "Sub-Divisional Officer, Mumbai (Sig. *** — masked)"
  },
];

/* ──────────────────────────────────────────────────────────────
   INIT ON DOM READY
────────────────────────────────────────────────────────────────*/
document.addEventListener('DOMContentLoaded', () => {
  setMinDate();
  insertDoctorPortraits();
  renderGallery();
  renderDocuments();
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
});

/* ──────────────────────────────────────────────────────────────
   ROUTING — Hash-based tab switching
────────────────────────────────────────────────────────────────*/
function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'home';
  switchTab(hash, false);
}

function switchTab(tabName, updateHash = true) {
  const validTabs = ['home', 'book', 'documents', 'gallery'];
  const target = validTabs.includes(tabName) ? tabName : 'home';

  // Hide all sections
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // Show target section
  const targetEl = document.getElementById(target);
  if (targetEl) targetEl.classList.add('active');

  // Highlight nav link
  const navEl = document.querySelector(`[data-tab="${target}"]`);
  if (navEl) navEl.classList.add('active');

  // Update URL
  if (updateHash) {
    history.pushState(null, '', `#${target}`);
  }

  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ──────────────────────────────────────────────────────────────
   MOBILE MENU TOGGLE
────────────────────────────────────────────────────────────────*/
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('open');
}

/* ──────────────────────────────────────────────────────────────
   INSERT DOCTOR PORTRAITS (SVG)
────────────────────────────────────────────────────────────────*/
function insertDoctorPortraits() {
  const heroEl = document.getElementById('heroPortrait');
  if (heroEl) heroEl.innerHTML = DOCTOR_SVG_LARGE;

  const cardEl = document.getElementById('docCardPortrait');
  if (cardEl) cardEl.innerHTML = DOCTOR_SVG_SMALL;
}

/* ──────────────────────────────────────────────────────────────
   SET MIN DATE FOR BOOKING
────────────────────────────────────────────────────────────────*/
function setMinDate() {
  const dateInput = document.getElementById('pt-date');
  if (dateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 1); // minimum tomorrow
    dateInput.min = today.toISOString().split('T')[0];
  }
}

/* ──────────────────────────────────────────────────────────────
   BOOKING FORM — SUBMIT
────────────────────────────────────────────────────────────────*/
function submitBooking() {
  const name    = document.getElementById('pt-name').value.trim();
  const mobile  = document.getElementById('pt-mobile').value.trim();
  const problem = document.getElementById('pt-problem').value.trim();
  const address = document.getElementById('pt-address').value.trim();
  const date    = document.getElementById('pt-date').value;
  const time    = document.getElementById('pt-time').value;
  const notes   = document.getElementById('pt-notes').value.trim();

  const errorEl = document.getElementById('form-error');

  // Validation
  if (!name || !mobile || !problem || !address || !date || !time) {
    errorEl.textContent = '⚠️ Please fill in all required fields marked with *.';
    errorEl.classList.remove('hidden');
    errorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  if (!/^[+\d\s\-()]{8,15}$/.test(mobile)) {
    errorEl.textContent = '⚠️ Please enter a valid mobile number (e.g. +91 98765 43210).';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');

  // Generate booking ID
  const bookingId = 'NKC-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
  const booking = { id: bookingId, name, mobile, problem, address, date, time, notes,
                    bookedAt: new Date().toISOString() };

  // Save to localStorage
  saveBooking(booking);

  // Show confirmation
  showConfirmation(booking);

  // Reset form
  document.getElementById('pt-name').value    = '';
  document.getElementById('pt-mobile').value  = '';
  document.getElementById('pt-problem').value = '';
  document.getElementById('pt-address').value = '';
  document.getElementById('pt-date').value    = '';
  document.getElementById('pt-time').value    = '';
  document.getElementById('pt-notes').value   = '';
}

function showConfirmation(b) {
  const el = document.getElementById('booking-confirm');
  const body = document.getElementById('confirm-body');

  const items = [
    { label: 'Booking ID',      value: `<span class="booking-id">${b.id}</span>` },
    { label: 'Patient Name',    value: b.name },
    { label: 'Date',            value: formatDate(b.date) },
    { label: 'Time Slot',       value: b.time },
    { label: 'Doctor',          value: 'Dr. Arjun Ramesh Nair' },
    { label: 'Clinic',          value: 'Nair Kidney & Nephrology Clinic, Bandra West, Mumbai' },
    { label: 'Concern',         value: b.problem.substring(0, 80) + (b.problem.length > 80 ? '…' : '') },
    { label: 'Booked At',       value: new Date(b.bookedAt).toLocaleString('en-IN') },
  ];

  body.innerHTML = items.map(i =>
    `<div class="confirm-item">
       <div class="ci-label">${i.label}</div>
       <div class="ci-value">${i.value}</div>
     </div>`
  ).join('');

  el.classList.remove('hidden');
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ──────────────────────────────────────────────────────────────
   TRACK BOOKING
────────────────────────────────────────────────────────────────*/
function trackBooking() {
  const mobile = document.getElementById('track-mobile').value.trim();
  const resultEl = document.getElementById('track-result');

  if (!mobile) {
    resultEl.innerHTML = '<p class="track-not-found">⚠️ Please enter your registered mobile number.</p>';
    resultEl.classList.remove('hidden');
    return;
  }

  const bookings = getBookings();

  // Normalize mobile for comparison (digits only)
  const normalise = m => m.replace(/\D/g, '');
  const inputDigits = normalise(mobile);

  const found = bookings.filter(b =>
    normalise(b.mobile).endsWith(inputDigits.slice(-10)) ||
    normalise(b.mobile) === inputDigits
  );

  if (found.length === 0) {
    resultEl.innerHTML = `<p class="track-not-found">🔍 No booking found for the number <strong>${mobile}</strong>. Please verify your number and try again.</p>`;
    resultEl.classList.remove('hidden');
    return;
  }

  const cardsHTML = found.map(b => `
    <div class="track-booking-card" style="margin-bottom:18px;">
      <div class="track-booking-header">
        <span class="tbh-id">${b.id}</span>
        <span class="tbh-status">✓ Confirmed</span>
      </div>
      <div class="track-grid">
        <div class="track-item"><div class="t-label">Patient Name</div><div class="t-val">${maskName(b.name)}</div></div>
        <div class="track-item"><div class="t-label">Mobile</div><div class="t-val">${maskMobile(b.mobile)}</div></div>
        <div class="track-item"><div class="t-label">Date</div><div class="t-val">${formatDate(b.date)}</div></div>
        <div class="track-item"><div class="t-label">Time Slot</div><div class="t-val">${b.time}</div></div>
        <div class="track-item"><div class="t-label">Address</div><div class="t-val">${maskAddress(b.address)}</div></div>
        <div class="track-item"><div class="t-label">Concern</div><div class="t-val">${maskConcern(b.problem)}</div></div>
        <div class="track-item" style="grid-column:span 2">
          <div class="t-label">Clinic Location</div>
          <div class="t-val">Nair Kidney & Nephrology Clinic, 201 Shanta Sadan, Linking Road, Bandra West, Mumbai 400 050</div>
        </div>
      </div>
    </div>
  `).join('');

  resultEl.innerHTML = `
    <div>
      <h4 style="color:var(--gold-bright);font-family:'Cormorant Garamond',serif;font-size:1.1rem;margin-bottom:16px;">
        📋 Found ${found.length} Booking${found.length > 1 ? 's' : ''} — Details (Partially Masked for Privacy)
      </h4>
      ${cardsHTML}
    </div>`;
  resultEl.classList.remove('hidden');
}

/* ──────────────────────────────────────────────────────────────
   MASKING UTILITIES
────────────────────────────────────────────────────────────────*/
function maskName(name) {
  if (!name) return '●●●●';
  const parts = name.trim().split(/\s+/);
  return parts.map(p => {
    if (p.length <= 1) return p + '●';
    return p[0] + '●'.repeat(Math.min(p.length - 1, 4));
  }).join(' ');
}

function maskMobile(mobile) {
  if (!mobile) return '+91 ●●●●● ●●●●●';
  const digits = mobile.replace(/\D/g, '');
  if (digits.length < 8) return '●●●● ●●●●●';
  const last2 = digits.slice(-2);
  const first2 = digits.length >= 12 ? digits.slice(0, 4) : '+91 ' + digits[0];
  return `${first2} ●●●●● ●●●${last2}`;
}

function maskAddress(addr) {
  if (!addr) return '●●●●●●●';
  const words = addr.trim().split(/\s+/);
  if (words.length <= 2) return words[0][0] + '●●●●●●';
  return words[0] + ' ' + words[1][0] + '●●●●, ●●●●●●●';
}

function maskConcern(text) {
  if (!text) return '●●●●●';
  const words = text.trim().split(/\s+/);
  const shown = words.slice(0, 2).join(' ');
  return shown + (words.length > 2 ? ' ●●●●●' : '');
}

/* ──────────────────────────────────────────────────────────────
   LOCAL STORAGE
────────────────────────────────────────────────────────────────*/
const STORAGE_KEY = 'nkc_bookings_v1';

function saveBooking(booking) {
  const existing = getBookings();
  existing.push(booking);
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(existing)); } catch(e) {}
}

function getBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

/* ──────────────────────────────────────────────────────────────
   DATE FORMATTER
────────────────────────────────────────────────────────────────*/
function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const [y, m, d] = dateStr.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${parseInt(d)} ${months[parseInt(m)-1]} ${y}`;
  } catch { return dateStr; }
}

/* ──────────────────────────────────────────────────────────────
   RENDER GALLERY
────────────────────────────────────────────────────────────────*/
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = galleryData.map((item, i) => `
    <div class="gallery-card" style="animation-delay:${i * 0.04}s">
      <div class="gallery-card-img" style="background:${item.bg};">
        <div class="gallery-period-tag">${item.period}</div>
        <div class="gallery-card-icon">${item.icon}</div>
        <div class="gallery-year-badge">${item.year}</div>
      </div>
      <div class="gallery-card-caption">
        <div class="gallery-caption-text">${item.caption}</div>
        <div class="gallery-num">#${String(i+1).padStart(2,'0')}</div>
      </div>
    </div>
  `).join('');
}

/* ──────────────────────────────────────────────────────────────
   RENDER DOCUMENTS
────────────────────────────────────────────────────────────────*/
function renderDocuments() {
  const grid = document.getElementById('docsGrid');
  if (!grid) return;

  grid.innerHTML = documentsData.map(doc => `
    <div class="cert-card">
      <div class="cert-watermark">SAMPLE</div>
      <div class="cert-header">
        <span class="cert-seal-icon">${doc.icon}</span>
        <div class="cert-header-text">
          <div class="cert-type">${doc.type}</div>
          <div class="cert-inst">${doc.institution}</div>
        </div>
      </div>
      <div class="cert-body">
        <div class="cert-title-text">${doc.title}</div>
        <div class="cert-fields">
          ${doc.fields.map(f => `
            <div class="cert-field">
              <span class="cf-label">${f.label}</span>
              <span class="cf-value ${f.masked ? 'masked' : ''}">${f.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="cert-footer">
        <div class="cert-sig-line">Authorised by: ${doc.sig}</div>
        <div class="cert-year">${doc.year}</div>
      </div>
    </div>
  `).join('');
}

/* ──────────────────────────────────────────────────────────────
   SCROLL-BASED HEADER SHRINK
────────────────────────────────────────────────────────────────*/
window.addEventListener('scroll', () => {
  const header = document.getElementById('siteHeader');
  if (header) {
    header.style.boxShadow = window.scrollY > 20
      ? '0 4px 20px rgba(0,0,0,0.3)'
      : '';
  }
});
// ====== SYSTEM STATE & INITIALIZATION ======
const defaultMenu = [
    { id: 1, name: "Premium Cappuccino", price: 150, img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80" },
    { id: 2, name: "Hazelnut Latte", price: 180, img: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400&q=80" },
    { id: 3, name: "Truffle Chocolate Cake", price: 250, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" },
    { id: 4, name: "Avocado Toast", price: 220, img: "https://images.unsplash.com/photo-1588137378633-bea1336ce1f2?w=400&q=80" }
];

if (!localStorage.getItem('menu')) localStorage.setItem('menu', JSON.stringify(defaultMenu));
if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([]));
if (!localStorage.getItem('orders')) localStorage.setItem('orders', JSON.stringify([]));

let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    updateNav();
    initTheme();
    initFakeNotifications();
    
    const path = window.location.pathname;
    if (path.includes('menu.html')) renderMenu();
    if (path.includes('login.html')) initLogin();
    if (path.includes('admin.html')) initAdmin();
    if (path.includes('index.html') || path === '/' || path === '') initHome();
});

// ====== GLOBAL UI & UTILS ======
function toggleTheme() {
    const body = document.body;
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
}
function initTheme() {
    if (localStorage.getItem('theme') === 'dark') document.body.dataset.theme = 'dark';
}

function updateNav() {
    const authLink = document.getElementById('auth-link');
    if(authLink) {
        if (currentUser) {
            authLink.innerHTML = `<a href="#" onclick="logout()">Logout (${currentUser.name})</a>`;
        } else {
            authLink.innerHTML = `<a href="login.html">Login</a>`;
        }
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cart');
    window.location.reload();
}

// ====== AUTHENTICATION ======
function initLogin() {
    const form = document.getElementById('auth-form');
    if(!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isLogin = document.getElementById('form-title').innerText === 'Login';
        const phone = document.getElementById('phone').value;
        const pass = document.getElementById('password').value;
        
        let users = JSON.parse(localStorage.getItem('users'));
        
        if (isLogin) {
            const user = users.find(u => u.phone === phone && u.password === pass);
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.href = 'menu.html';
            } else {
                alert('Invalid Credentials!');
            }
        } else {
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            users.push({ name, phone, address, password: pass, role: phone==='admin'?'admin':'user' });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful! Please login.');
            toggleAuthMode();
        }
    });
}
function toggleAuthMode() {
    const title = document.getElementById('form-title');
    const signupFields = document.querySelectorAll('.signup-only');
    const toggleBtn = document.getElementById('toggle-auth');
    if (title.innerText === 'Login') {
        title.innerText = 'Sign Up';
        signupFields.forEach(f => f.style.display = 'block');
        toggleBtn.innerText = 'Already have an account? Login';
    } else {
        title.innerText = 'Login';
        signupFields.forEach(f => f.style.display = 'none');
        toggleBtn.innerText = 'New here? Sign Up';
    }
}

// ====== MENU & CART ======
function renderMenu() {
    const menu = JSON.parse(localStorage.getItem('menu'));
    const container = document.getElementById('menu-container');
    if(!container) return;
    container.innerHTML = menu.map(item => `
        <div class="menu-item glass-card" style="padding: 0;">
            <img src="${item.img}" alt="${item.name}" class="menu-img">
            <div class="menu-content">
                <h3>${item.name}</h3>
                <p class="menu-price">₹${item.price}</p>
                <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
    updateCartUI();
}

function addToCart(id) {
    if (!currentUser) {
        alert('Please login to place an order!');
        window.location.href = 'login.html';
        return;
    }
    const menu = JSON.parse(localStorage.getItem('menu'));
    const item = menu.find(m => m.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) existing.qty += 1;
    else cart.push({ ...item, qty: 1 });
    
    localStorage.setItem('cart', JSON.stringify(cart));
    toggleCart();
    updateCartUI();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if(modal) modal.classList.toggle('open');
}

function updateCartUI() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!container) return;
    
    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price} x ${item.qty}</p>
            </div>
            <button class="btn btn-outline" style="padding: 2px 8px;" onclick="removeFromCart(${index})">X</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalEl.innerText = `₹${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function checkout() {
    if (cart.length === 0) return alert("Cart is empty!");
    const orders = JSON.parse(localStorage.getItem('orders'));
    const newOrder = {
        id: 'ORD' + Math.floor(Math.random() * 10000),
        user: currentUser.name,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.qty), 0),
        status: 'Preparing',
        time: new Date().toLocaleTimeString()
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    cart = [];
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartUI();
    toggleCart();
    alert(`Order Placed! ID: ${newOrder.id}`);
    renderOrderTracker(newOrder);
}

// ====== LIVE ORDER TRACKING ======
function renderOrderTracker(order) {
    const tracker = document.getElementById('live-tracker');
    if(!tracker) return;
    tracker.innerHTML = `
        <div class="tracker-container">
            <h3>Tracking Order: ${order.id}</h3>
            <p>Status: <strong>${order.status}</strong></p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${order.status==='Preparing'?'33%':order.status==='Out for delivery'?'66%':'100%'}"></div>
            </div>
        </div>
    `;
}

// ====== ADMIN PANEL ======
function initAdmin() {
    if (!currentUser || currentUser.phone !== 'admin') {
        document.getElementById('admin-content').innerHTML = `
            <div class="glass-card text-center">
                <h2>Admin Login Required</h2>
                <p>Login with phone: <b>admin</b> to access dashboard.</p>
                <br><a href="login.html" class="btn">Go to Login</a>
            </div>`;
        return;
    }
    renderAdminOrders();
}

function renderAdminOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const tbody = document.getElementById('admin-orders');
    if(!tbody) return;
    tbody.innerHTML = orders.map((o, i) => `
        <tr>
            <td>${o.id}</td>
            <td>${o.user}</td>
            <td>₹${o.total}</td>
            <td>
                <select onchange="updateOrderStatus(${i}, this.value)">
                    <option value="Preparing" ${o.status==='Preparing'?'selected':''}>Preparing</option>
                    <option value="Out for delivery" ${o.status==='Out for delivery'?'selected':''}>Out for delivery</option>
                    <option value="Delivered" ${o.status==='Delivered'?'selected':''}>Delivered</option>
                </select>
            </td>
        </tr>
    `).join('');
}

function updateOrderStatus(index, status) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    orders[index].status = status;
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Status Updated!');
}

// ====== FAKE POPUPS ======
function initFakeNotifications() {
    const names = ["Rahul", "Priya", "Amit", "Sneha", "Vikram"];
    const items = ["Cappuccino ☕", "Hazelnut Latte 🥤", "Chocolate Cake 🍰", "Avocado Toast 🥪"];
    
    setInterval(() => {
        const name = names[Math.floor(Math.random() * names.length)];
        const item = items[Math.floor(Math.random() * items.length)];
        
        const div = document.createElement('div');
        div.className = 'notification-popup';
        div.innerHTML = `🔔 <b>${name}</b> just ordered <b>${item}</b>`;
        document.body.appendChild(div);
        
        setTimeout(() => div.classList.add('show'), 100);
        setTimeout(() => {
            div.classList.remove('show');
            setTimeout(() => div.remove(), 500);
        }, 4000);
    }, 15000); // Pops up every 15 seconds
}