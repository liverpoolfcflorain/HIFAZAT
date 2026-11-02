const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const languageToggle = document.querySelector('#languageToggle');
const year = document.querySelector('#year');
const pageCopy = {
  en: {
    topline: 'Student-led • Pakistan',
    toplineNote: 'A safer conversation starts here.',
    nav: ['Why it matters', 'The four sessions', 'Safeguarding', 'For schools <span aria-hidden="true">↗</span>'],
    heroEyebrow: 'Child rights, safety &amp; protection',
    heroTitle: 'Know your rights.<br><em>Trust your voice.</em><br>Find safe help.',
    heroLede: 'Hifazat Guide gives children the words, confidence and trusted pathways to understand boundaries and speak up safely — in a way that feels familiar, respectful and age-appropriate.',
    heroButton: 'Explore the guide <span aria-hidden="true">↓</span>',
    heroLink: 'Why this matters <span aria-hidden="true">↘</span>',
    heroFoot: 'Built with students, counsellors, teachers &amp; families',
    trust: ['years old', 'guided sessions', 'pilot schools', 'shared language of safety'],
    principles: [['Understand', 'Rights, dignity and personal boundaries explained without jargon or shame.'], ['Notice', 'Simple, age-appropriate examples that help children recognise unsafe situations.'], ['Reach out', 'Practical next steps and trusted support pathways that protect dignity.']],
    whyEyebrow: 'The reason we built it',
    whyTitle: 'Safety is easier to practise when we have the <em>right words.</em>',
    whyText: 'Children do not need fear-based lessons. They need clear language, patient adults and the confidence to recognise when something does not feel right — then know what to do next. Examples are adapted for Pakistan’s classroom context and an Islamically respectful understanding of dignity.',
    whyLink: 'Our commitment to care <span aria-hidden="true">↘</span>',
    quoteCaption: 'Knowledge becomes protection when it is shared with care.',
    audienceEyebrow: 'Find your way in',
    audienceTitle: 'One guide.<br><em>Different starting points.</em>',
    audienceIntro: 'Hifazat Guide is designed as a shared language across the people who make a child feel supported.',
    audience: [
      ['For children', '“I want to understand.”', 'Learn what your rights and boundaries mean, and where you can go for help.'],
      ['For parents', '“I want to listen well.”', 'See how supportive, culturally respectful conversations can begin at home.'],
      ['For teachers', '“I want to guide safely.”', 'Understand the session flow, adult responsibilities and safe escalation.'],
      ['For schools', '“I want to bring it here.”', 'Explore the pilot model and what a thoughtful school partnership involves.']
    ],
    programmeEyebrow: 'The classroom journey',
    programmeTitle: 'Four conversations.<br><em>One stronger voice.</em>',
    programmeText: 'Every session is structured, guided and intentionally non-graphic. A counsellor or trained teacher is present throughout.',
    programmeSmall: 'Talk. Understand. Stay safe.',
    sessions: [
      ['Understanding Rights &amp; Dignity', 'Introduce rights, dignity and respectful treatment.'],
      ['Personal Boundaries &amp; Unsafe Situations', 'Recognise boundaries and identify situations that feel unsafe.'],
      ['Discipline vs Abuse', 'Discuss the distinction with age-appropriate examples.'],
      ['What To Do &amp; Who To Approach', 'Practise safe responses and trusted support pathways.']
    ],
    timelineEyebrow: 'From idea to impact',
    timelineTitle: 'A model that moves<br><em>with intention.</em>',
    timelineIntro: 'The October pilot cycle builds the guide carefully: research first, then delivery, reflection and a model that can travel.',
    timeline: [
      ['01—07 OCTOBER', 'Research &amp; development', 'Review laws and policies, consult counsellors, teachers and parents, and prepare the Urdu video, facilitator guide and surveys.', 'Output: pilot package ready'],
      ['08—22 OCTOBER', 'School-based sessions', 'Deliver the four-session programme with counsellor or teacher presence, trained student volunteers and anonymous pre/post surveys.', 'Output: completed pilot + data'],
      ['23—29 OCTOBER', 'Report &amp; advocacy', 'Compare learning, gather stakeholder feedback, document lessons and shape a replicable model for additional schools.', 'Output: impact report + model']
    ],
    pilotNote: '<strong>Pilot schools identified in the source plan:</strong> Humaira Riaz School, House Uplift, Campus School and Hope Schools.',
    safeEyebrow: 'Our safeguarding promise',
    safeTitle: 'Care is not a footnote.<br>It is the <em>method.</em>',
    safeText: 'Hifazat Guide keeps children at the centre while making adult responsibility clear. The content is emotionally safe, the language is culturally respectful, and the route to support never depends on a child sharing more than they choose.',
    safePoints: [['Protect privacy', 'Surveys are anonymous; personal or sensitive disclosures are not collected.'], ['Keep trusted adults present', 'A counsellor or trained teacher supports every session and follows established referral procedures.'], ['Escalate responsibly', 'Concerns are handled through the school’s safeguarding pathway, not by student volunteers.']],
    impactEyebrow: 'Learn, listen, improve',
    impactTitle: 'Measure what changes.<br><em>Protect what is shared.</em>',
    impactText: 'We look for shifts in awareness, understanding and confidence — never for personal stories. The goal is an evidence-based guide that can be refined without losing its care.',
    impactRows: [['Awareness', 'Do children recognise their rights and respectful treatment?'], ['Understanding', 'Can children identify boundaries and unsafe situations?'], ['Confidence', 'Do children know what safe help-seeking can look like?']],
    impactFoot: ['Student • teacher • counsellor feedback', 'Evidence with care →'],
    ctaEyebrow: 'There is room at the table',
    ctaTitle: 'Let’s make safer<br>conversations <em>normal.</em>',
    ctaText: 'Are you a school, counsellor, teacher or community partner who wants to understand the model? Start the conversation.',
    ctaButton: 'Talk with the team <span aria-hidden="true">↗</span>',
    ctaSmall: 'We reply with care and clarity.',
    footerText: 'A student-led initiative for child rights, safety and protection in Pakistan.'
  },
  ur: {
    topline: 'طلبہ کی قیادت • پاکستان',
    toplineNote: 'محفوظ گفتگو کا آغاز یہاں سے ہوتا ہے۔',
    nav: ['یہ کیوں اہم ہے', 'چار نشستیں', 'حفاظتی اصول', 'اسکولوں کے لیے <span aria-hidden="true">↗</span>'],
    heroEyebrow: 'بچوں کے حقوق، حفاظت اور تحفظ',
    heroTitle: 'اپنے حقوق جانیں۔<br><em>اپنی آواز پر بھروسہ کریں۔</em><br>محفوظ مدد حاصل کریں۔',
    heroLede: 'حفاظت گائیڈ بچوں کو اپنی حدود سمجھنے، محفوظ طریقے سے بات کرنے اور قابلِ اعتماد مدد تک پہنچنے کے لیے آسان زبان، اعتماد اور عملی راستے فراہم کرتی ہے۔',
    heroButton: 'گائیڈ دیکھیں <span aria-hidden="true">↓</span>',
    heroLink: 'یہ کیوں اہم ہے <span aria-hidden="true">↘</span>',
    heroFoot: 'طلبہ، کونسلرز، اساتذہ اور خاندانوں کے ساتھ تیار کردہ',
    trust: ['سال عمر', 'رہنمائی نشستیں', 'پائلٹ اسکول', 'حفاظت کی مشترکہ زبان'],
    principles: [['سمجھیں', 'حقوق، وقار اور ذاتی حدود کو بغیر مشکل الفاظ یا شرمندگی کے سمجھیں۔'], ['پہچانیں', 'عمر کے مطابق آسان مثالوں سے غیر محفوظ حالات کو پہچانیں۔'], ['رابطہ کریں', 'وقار کی حفاظت کرنے والے عملی اگلے قدم اور مدد کے راستے جانیں۔']],
    whyEyebrow: 'ہم نے یہ کیوں بنایا',
    whyTitle: 'حفاظت کی مشق آسان ہوتی ہے جب ہمارے پاس <em>صحیح الفاظ ہوں۔</em>',
    whyText: 'بچوں کو خوف پر مبنی اسباق کی ضرورت نہیں۔ انہیں واضح زبان، صبر کرنے والے بڑوں اور یہ سمجھنے کے اعتماد کی ضرورت ہے کہ کچھ درست محسوس نہ ہو تو اگلا محفوظ قدم کیا ہے۔ مثالیں پاکستان کے کلاس روم اور عزت و وقار کی اسلامی سمجھ کے مطابق ڈھالی گئی ہیں۔',
    whyLink: 'ہماری نگہداشت کی ذمہ داری <span aria-hidden="true">↘</span>',
    quoteCaption: 'علم، نگہداشت کے ساتھ بانٹا جائے تو تحفظ بن جاتا ہے۔',
    audienceEyebrow: 'اپنے لیے راستہ منتخب کریں',
    audienceTitle: 'ایک گائیڈ۔<br><em>آغاز کے مختلف راستے۔</em>',
    audienceIntro: 'حفاظت گائیڈ ان تمام لوگوں کے لیے مشترکہ زبان بنائی گئی ہے جو کسی بچے کو سہارا دیتے ہیں۔',
    audience: [
      ['بچوں کے لیے', '“میں سمجھنا چاہتا ہوں۔”', 'اپنے حقوق اور حدود کو سمجھیں اور جانیں کہ مدد کے لیے کہاں جانا ہے۔'],
      ['والدین کے لیے', '“میں بہتر سننا چاہتا ہوں۔”', 'گھر میں معاون اور ثقافتی طور پر بااحترام گفتگو کا آغاز دیکھیں۔'],
      ['اساتذہ کے لیے', '“میں محفوظ رہنمائی کرنا چاہتا ہوں۔”', 'نشستوں کے مراحل، بڑوں کی ذمہ داری اور محفوظ حوالہ سمجھیں۔'],
      ['اسکولوں کے لیے', '“میں اسے یہاں لانا چاہتا ہوں۔”', 'پائلٹ ماڈل اور بامقصد اسکول شراکت کے تقاضے جانیں۔']
    ],
    programmeEyebrow: 'کلاس روم کا سفر',
    programmeTitle: 'چار گفتگوئیں۔<br><em>ایک مضبوط آواز۔</em>',
    programmeText: 'ہر نشست باقاعدہ، رہنمائی کے ساتھ اور غیر گرافک انداز میں ہوتی ہے۔ ہر نشست میں کونسلر یا تربیت یافتہ استاد موجود ہوتا ہے۔',
    programmeSmall: 'بات کریں۔ سمجھیں۔ محفوظ رہیں۔',
    sessions: [
      ['حقوق اور وقار کو سمجھنا', 'حقوق، وقار اور بااحترام برتاؤ کا تعارف۔'],
      ['ذاتی حدود اور غیر محفوظ حالات', 'حدود کو پہچانیں اور غیر محفوظ محسوس ہونے والی صورتوں کو سمجھیں۔'],
      ['نظم و ضبط اور بدسلوکی میں فرق', 'عمر کے مطابق مثالوں سے دونوں میں فرق پر گفتگو۔'],
      ['کیا کرنا ہے اور کس سے رابطہ کرنا ہے', 'محفوظ ردِعمل اور قابلِ اعتماد مدد کے راستے سیکھیں۔']
    ],
    timelineEyebrow: 'خیال سے اثر تک',
    timelineTitle: 'ایک ماڈل جو <br><em>سوچ سمجھ کر آگے بڑھے۔</em>',
    timelineIntro: 'اکتوبر کا پائلٹ پہلے تحقیق، پھر عمل، غور و فکر اور ایسے ماڈل کے ذریعے گائیڈ کو احتیاط سے تیار کرتا ہے جو آگے بڑھ سکے۔',
    timeline: [
      ['01—07 اکتوبر', 'تحقیق اور تیاری', 'قوانین اور پالیسیوں کا جائزہ، کونسلرز، اساتذہ اور والدین سے مشاورت، اردو ویڈیو، رہنما گائیڈ اور سروے کی تیاری۔', 'نتیجہ: پائلٹ پیکیج تیار'],
      ['08—22 اکتوبر', 'اسکول نشستیں', 'کونسلر یا استاد کی موجودگی، تربیت یافتہ طلبہ رضاکار اور گمنام پہلے/بعد کے سروے کے ساتھ چار نشستیں۔', 'نتیجہ: مکمل پائلٹ اور ڈیٹا'],
      ['23—29 اکتوبر', 'رپورٹ اور وکالت', 'سیکھنے کا موازنہ، فریقین کی رائے، اسباق کی دستاویز اور مزید اسکولوں کے لیے قابلِ تکرار ماڈل۔', 'نتیجہ: اثر رپورٹ اور ماڈل']
    ],
    pilotNote: '<strong>ماخذ منصوبے میں شناخت کیے گئے پائلٹ اسکول:</strong> حمیرا ریاض اسکول، ہاؤس اپ لفٹ، کیمپس اسکول اور ہوپ اسکولز۔',
    safeEyebrow: 'حفاظت کا ہمارا وعدہ',
    safeTitle: 'نگہداشت کوئی حاشیہ نہیں۔<br>یہ ہمارا <em>طریقہ ہے۔</em>',
    safeText: 'حفاظت گائیڈ بچوں کو مرکز میں رکھتے ہوئے بڑوں کی ذمہ داری واضح کرتی ہے۔ مواد جذباتی طور پر محفوظ، زبان ثقافتی طور پر بااحترام ہے، اور مدد تک پہنچنے کے لیے بچے کو اپنی مرضی سے زیادہ بتانے کی ضرورت نہیں۔',
    safePoints: [['رازداری کی حفاظت', 'سروے گمنام ہیں؛ ذاتی یا حساس انکشافات جمع نہیں کیے جاتے۔'], ['قابلِ اعتماد بڑوں کی موجودگی', 'ہر نشست میں کونسلر یا تربیت یافتہ استاد موجود ہوتا ہے اور طے شدہ طریقہ کار پر عمل کرتا ہے۔'], ['ذمہ داری سے آگے بڑھنا', 'تشویش کا معاملہ اسکول کے حفاظتی طریقہ کار کے مطابق سنبھالا جاتا ہے، طلبہ رضاکاروں کے ذریعے نہیں۔']],
    impactEyebrow: 'سیکھیں، سنیں، بہتر کریں',
    impactTitle: 'جو بدلتا ہے اسے ناپیں۔<br><em>جو شیئر ہو اسے محفوظ رکھیں۔</em>',
    impactText: 'ہم آگاہی، سمجھ اور اعتماد میں تبدیلی دیکھتے ہیں — ذاتی کہانیاں نہیں۔ مقصد ایسا ثبوت پر مبنی رہنما بنانا ہے جو اپنی نگہداشت کھوئے بغیر بہتر ہو سکے۔',
    impactRows: [['آگاہی', 'کیا بچے اپنے حقوق اور بااحترام سلوک کو پہچانتے ہیں؟'], ['سمجھ', 'کیا بچے حدود اور غیر محفوظ حالات کی شناخت کر سکتے ہیں؟'], ['اعتماد', 'کیا بچے محفوظ مدد لینے کے طریقے جانتے ہیں؟']],
    impactFoot: ['طلبہ • اساتذہ • کونسلرز کی رائے', 'نگہداشت کے ساتھ ثبوت →'],
    ctaEyebrow: 'اس میز پر آپ کے لیے بھی جگہ ہے',
    ctaTitle: 'آئیے محفوظ گفتگو کو<br><em>معمول بنائیں۔</em>',
    ctaText: 'کیا آپ اسکول، کونسلر، استاد یا کمیونٹی پارٹنر ہیں اور اس ماڈل کو سمجھنا چاہتے ہیں؟ گفتگو شروع کریں۔',
    ctaButton: 'ٹیم سے بات کریں <span aria-hidden="true">↗</span>',
    ctaSmall: 'ہم وضاحت اور نگہداشت کے ساتھ جواب دیتے ہیں۔',
    footerText: 'پاکستان میں بچوں کے حقوق، حفاظت اور تحفظ کے لیے طلبہ کی قیادت میں ایک اقدام۔'
  }
};

if (year) year.textContent = new Date().getFullYear();

const closeMenu = () => {
  if (!menuToggle || !siteNav) return;
  siteNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.querySelector('b').textContent = document.documentElement.lang === 'ur' ? 'مینو' : 'Menu';
};

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('b').textContent = isOpen ? (document.documentElement.lang === 'ur' ? 'بند' : 'Close') : (document.documentElement.lang === 'ur' ? 'مینو' : 'Menu');
  });
  siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
}

document.querySelectorAll('.session-row').forEach((row) => {
  row.addEventListener('click', () => {
    const panel = document.getElementById(row.getAttribute('aria-controls'));
    const wasOpen = row.classList.contains('is-open');
    document.querySelectorAll('.session-row').forEach((item) => {
      const itemPanel = document.getElementById(item.getAttribute('aria-controls'));
      item.classList.remove('is-open');
      item.setAttribute('aria-expanded', 'false');
      if (itemPanel) itemPanel.hidden = true;
      item.querySelector('.session-plus').textContent = '＋';
    });
    if (!wasOpen && panel) {
      row.classList.add('is-open');
      row.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
      row.querySelector('.session-plus').textContent = '−';
    }
  });
});

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
};
const setLastText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && element.lastChild) element.lastChild.textContent = ` ${value}`;
};

function applyLanguage(language) {
  const copy = pageCopy[language];
  const isUrdu = language === 'ur';
  document.body.classList.toggle('urdu-mode', isUrdu);
  document.documentElement.lang = language;
  document.documentElement.dir = isUrdu ? 'rtl' : 'ltr';
  languageToggle?.setAttribute('aria-pressed', String(isUrdu));
  setText('.topline span:first-child', copy.topline);
  setText('.topline-note', copy.toplineNote);
  document.querySelectorAll('.site-nav > a').forEach((link, index) => setText(`.site-nav > a:nth-of-type(${index + 1})`, copy.nav[index]));
  setText('.hero-copy .eyebrow', `<span class="eyebrow-dot"></span> ${copy.heroEyebrow}`);
  setText('.hero-copy h1', copy.heroTitle);
  setText('.hero-lede', copy.heroLede);
  setText('.hero-actions .button-primary', copy.heroButton);
  setText('.hero-actions .text-link', copy.heroLink);
  setLastText('.hero-footnote', copy.heroFoot);
  document.querySelectorAll('.trust-item > span:last-child').forEach((element, index) => setText(`.trust-item:nth-child(${index + 1}) > span:last-child`, copy.trust[index]));
  document.querySelectorAll('.principle-card').forEach((card, index) => {
    setText(`.principle-card:nth-child(${index + 1}) h3`, copy.principles[index][0]);
    setText(`.principle-card:nth-child(${index + 1}) p`, copy.principles[index][1]);
  });
  setText('.art-kicker', isUrdu ? 'گائیڈ / ۰۱' : 'THE GUIDE / 01');
  setText('.art-caption strong', isUrdu ? 'محفوظ گفتگو<br>سمجھنے سے شروع ہوتی ہے۔' : 'Safe conversations<br>start with knowing.');
  setText('.art-caption span', isUrdu ? '۰۹—۱۵<br>عمر کا گروپ' : '09—15<br>AGE GROUP');
  setText('.sticker-top small', isUrdu ? 'رہنمائی<br>نشستیں' : 'guided<br>sessions');
  setText('.sticker-bottom small', isUrdu ? 'مل کر<br>سیکھیں' : 'learn<br>together');
  setText('.speech-bubble small', isUrdu ? 'میری آواز اہم ہے' : 'My voice matters');
  setText('#why .eyebrow', `<span class="eyebrow-dot coral"></span> ${copy.whyEyebrow}`);
  setText('#why h2', copy.whyTitle);
  setText('#why .section-intro > p:not(.eyebrow)', copy.whyText);
  setText('#why .dark-link', copy.whyLink);
  setText('.quote-caption', copy.quoteCaption);
  setText('#audiences .eyebrow', `<span class="eyebrow-dot"></span> ${copy.audienceEyebrow}`);
  setText('#audiences h2', copy.audienceTitle);
  setText('#audiences .split-heading > p', copy.audienceIntro);
  document.querySelectorAll('.audience-card').forEach((card, index) => {
    setText(`.audience-card:nth-child(${index + 1}) .audience-label`, copy.audience[index][0]);
    setText(`.audience-card:nth-child(${index + 1}) h3`, copy.audience[index][1]);
    setText(`.audience-card:nth-child(${index + 1}) p`, copy.audience[index][2]);
  });
  setText('#sessions .eyebrow', `<span class="eyebrow-dot coral"></span> ${copy.programmeEyebrow}`);
  setText('#sessions h2', copy.programmeTitle);
  setText('#sessions .programme-copy > p:not(.eyebrow)', copy.programmeText);
  setText('.urdu-badge small', copy.programmeSmall);
  document.querySelectorAll('.session-item').forEach((item, index) => {
    setText(`.session-item:nth-child(${index + 1}) strong`, copy.sessions[index][0]);
    setText(`.session-item:nth-child(${index + 1}) .session-panel`, copy.sessions[index][1]);
  });
  setText('#timeline .eyebrow', `<span class="eyebrow-dot"></span> ${copy.timelineEyebrow}`);
  setText('#timeline h2', copy.timelineTitle);
  setText('#timeline .split-heading > p', copy.timelineIntro);
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    setText(`.timeline-item:nth-of-type(${index + 1}) .timeline-date`, copy.timeline[index][0]);
    setText(`.timeline-item:nth-of-type(${index + 1}) h3`, copy.timeline[index][1]);
    setText(`.timeline-item:nth-of-type(${index + 1}) .timeline-card > p`, copy.timeline[index][2]);
    setText(`.timeline-item:nth-of-type(${index + 1}) .timeline-output`, copy.timeline[index][3]);
  });
  setText('.pilot-note p', copy.pilotNote);
  setText('#safeguarding .eyebrow', `<span class="eyebrow-dot coral"></span> ${copy.safeEyebrow}`);
  setText('#safeguarding h2', copy.safeTitle);
  setText('.safeguard-copy > p:not(.eyebrow)', copy.safeText);
  document.querySelectorAll('.safeguard-points > div').forEach((point, index) => {
    setText(`.safeguard-points > div:nth-child(${index + 1}) strong`, copy.safePoints[index][0]);
    setLastText(`.safeguard-points > div:nth-child(${index + 1}) p`, copy.safePoints[index][1]);
  });
  setText('#impact .eyebrow', `<span class="eyebrow-dot"></span> ${copy.impactEyebrow}`);
  setText('#impact h2', copy.impactTitle);
  setText('#impact .section-intro > p:not(.eyebrow)', copy.impactText);
  document.querySelectorAll('.impact-row').forEach((row, index) => {
    setText(`.impact-row:nth-child(${index + 1}) strong`, copy.impactRows[index][0]);
    setText(`.impact-row:nth-child(${index + 1}) p`, copy.impactRows[index][1]);
  });
  setText('.impact-foot span:first-child', copy.impactFoot[0]);
  setText('.impact-foot span:last-child', copy.impactFoot[1]);
  setText('#contact .eyebrow', `<span class="eyebrow-dot coral"></span> ${copy.ctaEyebrow}`);
  setText('#contact h2', copy.ctaTitle);
  setText('.cta-side p', copy.ctaText);
  setText('.cta-side .button', copy.ctaButton);
  setText('.cta-side small', copy.ctaSmall);
  setText('.footer-grid > p', copy.footerText);
  if (menuToggle) menuToggle.querySelector('b').textContent = menuToggle.getAttribute('aria-expanded') === 'true' ? (isUrdu ? 'بند' : 'Close') : (isUrdu ? 'مینو' : 'Menu');
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const nextLanguage = document.documentElement.lang === 'ur' ? 'en' : 'ur';
    applyLanguage(nextLanguage);
    if (document.documentElement.lang === 'ur') closeMenu();
  });
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = [...document.querySelectorAll('main section[id]')];
const setActiveSection = () => {
  const marker = window.scrollY + 160;
  let current = '';
  sections.forEach((section) => { if (section.offsetTop <= marker) current = section.id; });
  navLinks.forEach((link) => link.classList.toggle('is-current', link.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', setActiveSection, { passive: true });
setActiveSection();
