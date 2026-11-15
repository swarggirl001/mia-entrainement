/* Lessons of the English course (Terminale A1), taken from the class notebook and handouts.
   The English of the notes has been corrected. One object per lesson:
   course: blocks of HTML (elements with class "ex" are read aloud when tapped)
   vocab: [word, definition, example]
   exercises: sets of items: {t:"mc", q, o:[options], a:index of the right one, why}
                             {t:"gap", q:"text with ___", a:[[accepted answers for gap 1], ...], why}
   dictation / speak: sentences
   writing: {task, tips:[], checks:[[label, regexp source]], minWords, model} */
window.UNITS = [
  { id: "u1", title: "Unit 1 · Lifestyle: Moving with the Times" },
  { id: "u2", title: "Unit 2 · Freedom and Civil Rights" },
  { id: "u3", title: "Unit 3 · Development Issues" },
];

window.LESSONS = [
/* ================================================================ UNIT 1 */
{
  id: "u1l1", unit: "u1", title: "Lesson 1 · Reading", topic: "Understanding Artificial Intelligence",
  course: [
    `<h3>Text: Understanding Artificial Intelligence</h3>
     <p class="note">Texte écrit d'après les notes du cahier. Touche une phrase pour l'écouter.</p>
     <p class="ex">Artificial intelligence (AI) is the ability of computers and machines to perform tasks that normally require human intelligence, such as learning, understanding language and making decisions.</p>
     <p class="ex">Today, AI is present in almost every area of our lives. In education, it offers personalised learning, automatic grading and language-learning apps. In healthcare, it helps doctors diagnose diseases, analyse medical images and discover new drugs.</p>
     <p class="ex">In transport, it is used in self-driving cars, traffic management and navigation. Farmers use it for crop monitoring, weather prediction and smart irrigation, while banks rely on it for customer service, fraud detection and market analysis.</p>
     <p class="ex">AI offers many benefits. It saves time by automating repetitive tasks, improves accuracy, reduces human error and analyses large amounts of data quickly. It also helps people with disabilities through dedicated technologies.</p>
     <p class="ex">However, AI also has some drawbacks. Some jobs performed by humans may be lost. People's privacy can be threatened by data collection, and AI can be misused for cybercrime and misinformation. Above all, it cannot replace human emotion, creativity and moral judgement.</p>
     <p class="ex">So, should we fear AI? It should not be feared, but it should be used responsibly. Like any powerful technology, it can bring benefits when it is used wisely, but it can also cause harm if it is misused. Governments, companies and individuals should work together to ensure that AI is ethical, transparent and safe.</p>`,
    `<h3>How should we use AI so as not to cause harm?</h3>
     <ul>
       <li class="ex">We should respect people's privacy and personal data.</li>
       <li class="ex">We should verify AI-generated information before sharing it.</li>
       <li class="ex">We should use AI to assist humans, not to deceive or manipulate them.</li>
       <li class="ex">We should implement regulations and ethical rules when creating or developing AI.</li>
       <li class="ex">We should teach people how to use AI responsibly.</li>
       <li class="ex">Only humans should take control of important decisions.</li>
     </ul>
     <h3>Is it possible to live without AI today?</h3>
     <p class="ex">Yes, it is, but it is becoming difficult, because AI is already integrated into daily life through services such as transport and shopping. What is sure is that AI will be more and more present in the future, so we should use it wisely and responsibly.</p>`,
  ],
  vocab: [
    ["personalised learning", "teaching adapted to each student's level and needs", "AI offers personalised learning."],
    ["automatic grading", "marking tests with a computer", "Automatic grading saves teachers a lot of time."],
    ["diagnosis", "identifying a disease from its signs", "AI helps doctors make a faster diagnosis."],
    ["drug discovery", "finding new medicines", "AI speeds up drug discovery."],
    ["self-driving car", "a car that drives without a human driver", "Self-driving cars use AI to avoid accidents."],
    ["crop monitoring", "watching how plants grow in the fields", "Farmers use drones for crop monitoring."],
    ["fraud detection", "finding illegal tricks to steal money", "Banks use AI for fraud detection."],
    ["facial recognition", "identifying a person from their face", "Phones can be unlocked with facial recognition."],
    ["to automate", "to make a machine do a task instead of a person", "AI automates repetitive tasks."],
    ["accuracy", "the quality of being exact and correct", "AI improves accuracy and reduces human error."],
    ["drawback", "a disadvantage", "AI also has some drawbacks."],
    ["privacy", "the right to keep your personal life secret", "Data collection can threaten people's privacy."],
    ["misinformation", "false information spread to deceive people", "AI can be misused for misinformation."],
    ["to misuse", "to use something in a wrong or harmful way", "Technology can cause harm if it is misused."],
    ["advent", "the arrival of something new and important", "Should we fear the advent of AI?"],
    ["responsibly", "in a careful and sensible way", "AI should be used responsibly."],
  ],
  exercises: [
    { title: "Did you understand the text?", items: [
      { t: "mc", q: "In healthcare, AI helps doctors…", o: ["diagnose diseases", "drive cars", "grade tests"], a: 0 },
      { t: "mc", q: "Fraud detection is used by…", o: ["banks", "farmers", "teachers"], a: 0 },
      { t: "mc", q: "Smart irrigation belongs to the domain of…", o: ["agriculture", "entertainment", "security"], a: 0 },
      { t: "mc", q: "Which one is a drawback of AI?", o: ["Some jobs may be lost.", "It saves time.", "It reduces human error."], a: 0 },
      { t: "mc", q: "According to the text, AI cannot replace…", o: ["human emotion and creativity", "traffic management", "data analysis"], a: 0 },
      { t: "mc", q: "True or false? The text says we should be afraid of AI.", o: ["False", "True"], a: 0, why: "« AI should not be feared, but it should be used responsibly. »" },
      { t: "mc", q: "Who should work together to make AI safe?", o: ["Governments, companies and individuals", "Only engineers", "Only governments"], a: 0 },
    ]},
    { title: "Complete with words from the text", items: [
      { t: "gap", q: "AI saves time by ___ repetitive tasks.", a: [["automating"]] },
      { t: "gap", q: "It improves ___ and reduces human error.", a: [["accuracy"]] },
      { t: "gap", q: "People's ___ can be threatened by data collection.", a: [["privacy"]] },
      { t: "gap", q: "AI can be misused for cybercrime and ___.", a: [["misinformation"]] },
      { t: "gap", q: "AI should not be feared, but it should be used ___.", a: [["responsibly"]] },
    ]},
  ],
  dictation: [
    "AI helps doctors make better medical decisions.",
    "It saves time by automating repetitive tasks.",
    "Some jobs performed by humans can be lost because of AI.",
    "We should verify information before sharing it.",
  ],
  speak: [
    "AI should not be feared, but it should be used responsibly.",
    "It can bring benefits when it is used wisely.",
    "We should respect people's privacy and personal data.",
    "Only humans should take control of important decisions.",
  ],
},
{
  id: "u1l2", unit: "u1", title: "Lesson 2 · Grammar, vocabulary, pronunciation", topic: "Past habits · suffixes · -ed endings",
  course: [
    `<h3>1. Used to</h3>
     <p>We use <b>used to + verb</b> for habits in the past and for situations that existed in the past but no longer exist.</p>
     <p class="ex">My grandmother used to tell us stories.</p>
     <p class="ex">I didn't use to like mathematics.</p>
     <p class="note">⚠️ Après <b>didn't</b> et dans les questions avec <b>did</b>, on écrit <b>use to</b> (sans d) : « I didn't <b>use</b> to », « Did you <b>use</b> to…? »</p>`,
    `<h3>2. Would</h3>
     <p><b>Would + verb</b> describes repeated actions in the past, but it cannot describe a past <b>state</b>.</p>
     <p class="ex">Every morning, my father would read the newspaper.</p>
     <p class="note">✅ « I used to live in Bouaké. » — ❌ « I would live in Bouaké. » (vivre quelque part = un état)</p>`,
    `<h3>3. Past simple + adverb of frequency</h3>
     <p>Common adverbs: always, usually, often, frequently, sometimes, rarely, never.<br>Structure: subject + adverb + past simple.</p>
     <p class="ex">We always visited our relatives.</p>`,
    `<h3>4. Present perfect + time expressions</h3>
     <p>Structure: subject + have / has + not + past participle + time expression. It shows that a past habit has not happened for a period of time.</p>
     <p>Time expressions: <b>for</b> two years (une durée), <b>since</b> 2020 (un point de départ), lately, recently, in years, for a long time.</p>
     <p class="ex">I haven't played football for three weeks.</p>`,
    `<h3>5. Past continuous + when / while</h3>
     <p>The past continuous (was / were + verb-ing) describes an action in progress in the past.</p>
     <p><b>When</b>: a long action interrupted by a short action.</p>
     <p class="ex">I was studying when my friend arrived.</p>
     <p><b>While</b>: two actions happening at the same time.</p>
     <p class="ex">I was reading while my sister was cooking.</p>`,
    `<h3>6. Vocabulary: suffixes</h3>
     <table class="tbl">
      <tr><th>Suffix</th><th>Meaning</th><th>Examples</th></tr>
      <tr><td>-able / -ible</td><td>capable of, worthy of</td><td>reliable, feasible, incredible</td></tr>
      <tr><td>-ful</td><td>full of</td><td>beautiful, hopeful, playful</td></tr>
      <tr><td>-ify / -ize</td><td>to make, to become</td><td>simplify, beautify, modernize</td></tr>
      <tr><td>-less</td><td>without</td><td>hopeless, careless</td></tr>
      <tr><td>-logy</td><td>the study of</td><td>biology, psychology, geology</td></tr>
      <tr><td>-ly</td><td>in a certain way</td><td>quickly, calmly</td></tr>
      <tr><td>-ment</td><td>action or process</td><td>development, enjoyment, employment</td></tr>
      <tr><td>-ness</td><td>state or quality</td><td>happiness, kindness, goodness</td></tr>
      <tr><td>-tion / -sion</td><td>action or result of</td><td>attraction, expression, decision</td></tr>
     </table>
     <p class="note">-ness : happy → happiness, lazy → laziness (y devient i). Mais shy → shyness, dry → dryness.</p>`,
    `<h3>7. Pronunciation of -ed at the end of verbs</h3>
     <p><b>/t/</b> after the voiceless sounds /p/, /k/, /f/, /s/, /tʃ/, /ʃ/, /ks/, /θ/:</p>
     <p class="ex">dropped, cooked, laughed, missed, watched, washed, fixed</p>
     <p><b>/d/</b> after voiced sounds (/m/, /n/, /l/, /v/, /w/, /dʒ/, /b/, /g/, /ð/…) and after vowel sounds:</p>
     <p class="ex">claimed, cleaned, travelled, loved, played, loathed</p>
     <p><b>/ɪd/</b> after /t/ and /d/:</p>
     <p class="ex">loaded, transported, wanted, decided</p>
     <p class="note">⚠️ Dans le cahier, il est écrit « /k/ » pour le premier groupe : c'est bien <b>/t/</b>. Et « loathed » se prononce avec /d/.</p>`,
  ],
  vocab: [
    ["happiness", "the state of being happy", "Money does not always bring happiness."],
    ["laziness", "the quality of not wanting to work", "His laziness made him fail."],
    ["kindness", "the quality of being kind and generous", "Thank you for your kindness."],
    ["reliable", "that you can trust", "We need reliable information."],
    ["feasible", "possible to do", "The project is feasible."],
    ["hopeless", "without hope", "The situation is not hopeless."],
    ["careless", "not paying attention", "A careless driver can cause accidents."],
    ["development", "the process of growing or improving", "Education is key to development."],
    ["decision", "a choice that you make", "It was a difficult decision."],
    ["to simplify", "to make easier", "This app simplifies our lives."],
  ],
  exercises: [
    { title: "Used to / would / didn't use to", items: [
      { t: "gap", q: "When I was a child, I ___ (live) in Bouaké.", a: [["used to live"]], why: "« live » est un état : would est impossible." },
      { t: "gap", q: "Every Sunday, my grandmother ___ (tell) us stories.", a: [["used to tell", "would tell"]] },
      { t: "gap", q: "I ___ (not like) mathematics, but now I love it.", a: [["didn't use to like", "did not use to like"]], why: "Après didn't : use to, sans d." },
      { t: "mc", q: "There ___ a big mango tree in front of our house.", o: ["used to be", "would be"], a: 0, why: "Un état passé : used to." },
      { t: "mc", q: "Did you ___ walk to school?", o: ["use to", "used to"], a: 0 },
      { t: "mc", q: "We always ___ our relatives at Christmas.", o: ["visited", "visit", "have visited"], a: 0 },
    ]},
    { title: "Present perfect and past continuous", items: [
      { t: "mc", q: "I haven't played football ___ three weeks.", o: ["for", "since", "ago"], a: 0, why: "for + une durée." },
      { t: "mc", q: "She has lived in Abidjan ___ 2020.", o: ["since", "for"], a: 0, why: "since + un point de départ." },
      { t: "gap", q: "He ___ (not see) his cousin for a long time.", a: [["hasn't seen", "has not seen"]] },
      { t: "mc", q: "I was studying ___ my friend arrived.", o: ["when", "while"], a: 0, why: "Une action longue interrompue par une action courte." },
      { t: "mc", q: "I was reading ___ my sister was cooking.", o: ["while", "when"], a: 0, why: "Deux actions en même temps." },
      { t: "gap", q: "They ___ (watch) TV when the light went out.", a: [["were watching"]] },
    ]},
    { title: "Form the word with a suffix", items: [
      { t: "gap", q: "happy + ness → ___", a: [["happiness"]] },
      { t: "gap", q: "lazy + ness → ___", a: [["laziness"]] },
      { t: "gap", q: "shy + ness → ___", a: [["shyness"]] },
      { t: "gap", q: "hope + ful → ___", a: [["hopeful"]] },
      { t: "gap", q: "care + less → ___", a: [["careless"]] },
      { t: "gap", q: "rely + able → ___", a: [["reliable"]] },
      { t: "gap", q: "employ + ment → ___", a: [["employment"]] },
      { t: "gap", q: "decide + sion → ___", a: [["decision"]] },
    ]},
    { title: "-ed: /t/, /d/ or /ɪd/?", items: [
      { t: "mc", say: "cooked", q: "cooked", o: ["/t/", "/d/", "/ɪd/"], a: 0 },
      { t: "mc", say: "cleaned", q: "cleaned", o: ["/t/", "/d/", "/ɪd/"], a: 1 },
      { t: "mc", say: "wanted", q: "wanted", o: ["/t/", "/d/", "/ɪd/"], a: 2 },
      { t: "mc", say: "watched", q: "watched", o: ["/t/", "/d/", "/ɪd/"], a: 0 },
      { t: "mc", say: "travelled", q: "travelled", o: ["/t/", "/d/", "/ɪd/"], a: 1 },
      { t: "mc", say: "decided", q: "decided", o: ["/t/", "/d/", "/ɪd/"], a: 2 },
      { t: "mc", say: "laughed", q: "laughed", o: ["/t/", "/d/", "/ɪd/"], a: 0 },
      { t: "mc", say: "played", q: "played", o: ["/t/", "/d/", "/ɪd/"], a: 1 },
      { t: "mc", say: "visited", q: "visited", o: ["/t/", "/d/", "/ɪd/"], a: 2 },
      { t: "mc", say: "missed", q: "missed", o: ["/t/", "/d/", "/ɪd/"], a: 0 },
    ]},
  ],
  dictation: [
    "My grandmother used to tell us stories.",
    "I didn't use to like mathematics.",
    "I haven't played football for three weeks.",
    "I was studying when my friend arrived.",
  ],
  speak: [
    "I dropped the glass and laughed.",
    "She cleaned the room and played music.",
    "They wanted to visit their relatives.",
    "Every morning, my father would read the newspaper.",
  ],
},
{
  id: "u1l3", unit: "u1", title: "Lesson 3 · Writing", topic: "A speech / a talk",
  course: [
    `<h3>Strategies for a speech</h3>
     <ol>
      <li><b>Greet the audience</b>: <span class="ex">Hi all / Hello everyone / Good morning, ladies and gentlemen…</span></li>
      <li><b>Set the scene</b>: <span class="ex">It's good to see you all. / I'm very pleased to be here. / Thank you for coming.</span></li>
      <li><b>Introduce yourself</b>: <span class="ex">I'm … from … / I am the speaker of the day. / I'm today's speaker.</span></li>
      <li><b>Announce the topic</b>: <span class="ex">I would like to tell you about… / Today's talk is about… / Today, we will talk about…</span></li>
      <li><b>Plan your talk</b>: <span class="ex">My talk will cover three or four points. / My message will focus on two or three points. / My speech will consist of three parts.</span></li>
      <li><b>Use transitional phrases</b>: <span class="ex">First… / To begin… / Second… / Then… / Finally… / To conclude… / In conclusion…</span></li>
      <li><b>Thank the audience</b>: <span class="ex">Thank you for your attention. / Thank you for your presence. / Thank you for joining in.</span></li>
     </ol>`,
  ],
  writing: {
    task: "You have been chosen by the English club of your school to attend a conference about the importance of AI at the US Embassy in Côte d'Ivoire. Back to school, you give a speech on the topic, in which you: give some positive sides of AI; mention some drawbacks of this technology; explain why we should not fear the advent of AI.",
    minWords: 150,
    checks: [
      ["Saluer le public", "\\b(good (morning|afternoon|evening)|hello|hi)\\b"],
      ["Poser le cadre", "(good to see you|pleased to be here|thank you for coming)"],
      ["Te présenter", "\\b(i'?m|i am|my name is)\\b"],
      ["Annoncer le sujet", "(talk about|tell you about|today'?s talk|speak about)"],
      ["Annoncer le plan", "(will cover|will focus on|will consist of|three points|two points|three parts)"],
      ["Mots de transition", "\\b(first|firstly|to begin|second|secondly|then|finally|to conclude)\\b"],
      ["Avantages de l'IA", "(advantage|benefit|positive side|help)"],
      ["Inconvénients", "(drawback|disadvantage|negative|risk)"],
      ["Pourquoi ne pas avoir peur", "(not fear|should not be afraid|shouldn'?t fear|not be feared)"],
      ["Remercier le public", "thank you for (your attention|your presence|joining|listening)"],
    ],
    model: `Good morning, ladies and gentlemen.
It's good to see you all, and thank you for coming. I'm Aya, a student from the English club, and I'm today's speaker. Today, I would like to tell you about the importance of artificial intelligence. My talk will cover three points: the advantages of AI, its drawbacks, and why we should not fear it.

First, AI offers many benefits. It saves time by automating repetitive tasks, it helps doctors make better medical decisions and it makes learning more flexible. It also helps people with disabilities.

Second, this technology has some drawbacks. Some jobs performed by humans may be lost, people's privacy can be threatened by data collection, and AI can be misused for cybercrime and misinformation.

Finally, we should not fear the advent of AI. Like any powerful technology, it can bring benefits when it is used wisely. If governments, companies and individuals work together, AI can remain ethical, transparent and safe.

In conclusion, AI is already part of our daily lives, so let us learn to use it wisely and responsibly. Thank you for your attention.`,
  },
  speak: [
    "Good morning, ladies and gentlemen. It's good to see you all.",
    "Today, I would like to tell you about artificial intelligence.",
    "My talk will cover three points.",
    "Thank you for your attention.",
  ],
},
/* ================================================================ UNIT 2 */
{
  id: "u2l1", unit: "u2", title: "Lesson 1 · Reading", topic: "From oppression to empowerment (Nelson Mandela)",
  course: [
    `<h3>Learning context</h3>
     <p>As you have been invited to the commemoration of Nelson Mandela's death, your English teacher has assigned you to read a text about him, aiming to provide you with an overall idea of this inspiring freedom fighter.</p>
     <h3>Text: Nelson Mandela, from oppression to empowerment</h3>
     <p class="note">Texte écrit pour le site avec le vocabulaire du cours. Touche une phrase pour l'écouter.</p>
     <p class="ex">Nelson Mandela was born on 18 July 1918 in Mvezo, a small village in South Africa. At that time, the country was ruled by a white minority.</p>
     <p class="ex">Under apartheid, a system of racial segregation introduced in 1948, black people could not vote, live where they wanted or go to the same schools as white people. The system was based on white supremacy and on the racist idea of black inferiority.</p>
     <p class="ex">Mandela studied law and, with Oliver Tambo, opened the first black law firm in South Africa. He joined the African National Congress and fought for equal political rights and a living wage for all workers.</p>
     <p class="ex">At the outset, the struggle was peaceful, but violence erupted when the police killed sixty-nine protesters at Sharpeville in 1960.</p>
     <p class="ex">In 1962, Mandela was arrested for inciting workers to go on strike and for leaving the country without a permit. Two years later, he was sentenced to life imprisonment. He served twenty-seven years in prison, most of them on Robben Island, but he never gave up.</p>
     <p class="ex">Released in 1990, he chose peace and reconciliation instead of revenge. In 1993, he received the Nobel Peace Prize, and in 1994 he became the first black president of a democratic South Africa. He died on 5 December 2013.</p>`,
    `<h3>Language function: forming adverbs from adjectives</h3>
     <p>Most adverbs = adjective + <b>-ly</b>.</p>
     <p class="ex">calm → calmly, extreme → extremely, peaceful → peacefully</p>
     <p class="note">Adjectif en -y : happy → happil<b>y</b>. Exceptions : good → <b>well</b>, hard → <b>hard</b>, fast → <b>fast</b>.</p>`,
  ],
  vocab: [
    ["commemoration", "an event held to remember and honour an important person or event", "We attended the commemoration of Mandela's death."],
    ["to assign someone to do something", "to give someone a task to do", "The teacher assigned us to read a text."],
    ["an overall idea", "a general understanding of something", "This text gives an overall idea of his life."],
    ["a freedom fighter", "a person who fights for freedom and encourages others through their actions", "Mandela was an inspiring freedom fighter."],
    ["a convicted prisoner", "a person who has been found guilty of a crime and is in prison", "He became a convicted prisoner in 1962."],
    ["to serve a sentence", "to spend a period of time in prison as punishment for a crime", "He served a long sentence on Robben Island."],
    ["to leave the country without a permit", "to go out of a country without official permission", "He was arrested for leaving the country without a permit."],
    ["to keep the family alive", "to earn enough money to provide the basic needs of a family", "His mother worked hard to keep the family alive."],
    ["to incite people to go on strike", "to encourage people to stop working as a form of protest", "He incited workers to go on strike."],
    ["at the outset", "at the beginning of something", "At the outset, the struggle was peaceful."],
    ["white supremacy", "the belief that white people are superior to other racial groups", "Apartheid was based on white supremacy."],
    ["black inferiority", "the racist belief that black people are less important", "The racist idea of black inferiority was false."],
    ["moral standards", "principles about what is considered right or wrong behaviour", "He had high moral standards."],
    ["to erupt", "to suddenly begin or become violent", "Violence erupted in 1960."],
    ["to assault someone", "to attack someone physically", "Police officers assaulted the protesters."],
    ["a living wage", "a salary sufficient to meet a person's basic needs", "Workers asked for a living wage."],
    ["equal political rights", "the same political rights and opportunities for all citizens", "He fought for equal political rights."],
    ["democracy", "a political system in which people have the right to choose their leaders", "South Africa became a democracy in 1994."],
  ],
  exercises: [
    { title: "Did you understand the text?", items: [
      { t: "mc", q: "When was apartheid introduced?", o: ["In 1948", "In 1960", "In 1994"], a: 0 },
      { t: "mc", q: "Why was Mandela arrested in 1962?", o: ["For inciting workers to go on strike and leaving the country without a permit", "For assaulting a police officer", "For refusing to pay taxes"], a: 0 },
      { t: "mc", q: "How many years did he spend in prison?", o: ["Twenty-seven", "Seventeen", "Ten"], a: 0 },
      { t: "mc", q: "What happened in 1994?", o: ["He became the first black president of South Africa.", "He was sent to Robben Island.", "He died."], a: 0 },
      { t: "mc", q: "True or false? After his release, Mandela wanted revenge.", o: ["False", "True"], a: 0, why: "He chose peace and reconciliation instead of revenge." },
    ]},
    { title: "Form the adverb", items: [
      { t: "gap", q: "Mandela spoke ___ (calm) to the crowd.", a: [["calmly"]] },
      { t: "gap", q: "Apartheid was ___ (extreme) unjust.", a: [["extremely"]] },
      { t: "gap", q: "At the outset, they protested ___ (peaceful).", a: [["peacefully"]] },
      { t: "gap", q: "He was ___ (unfair) sent to prison.", a: [["unfairly"]] },
      { t: "gap", q: "The crowd waited ___ (patient) for his release.", a: [["patiently"]] },
      { t: "gap", q: "The people lived ___ (happy) after the elections.", a: [["happily"]] },
      { t: "gap", q: "He spoke English very ___ (good).", a: [["well"]], why: "good → well (exception)." },
    ]},
  ],
  dictation: [
    "Mandela was an inspiring freedom fighter.",
    "At the outset, the struggle was peaceful.",
    "He fought for equal political rights.",
    "Workers asked for a living wage.",
  ],
  speak: [
    "Nelson Mandela was an inspiring freedom fighter.",
    "He was arrested for leaving the country without a permit.",
    "He served a long sentence on Robben Island.",
    "He chose peace instead of revenge.",
  ],
},
{
  id: "u2l2", unit: "u2", title: "Lesson 2 · Speaking", topic: "Racial discrimination · modal auxiliaries",
  course: [
    `<h3>Useful expressions</h3>
     <ul>
      <li><span class="ex">fight against racism</span> → take action to oppose racism</li>
      <li><span class="ex">promote equality</span> → encourage equal treatment and opportunities</li>
      <li><span class="ex">respect differences</span> → accept that people are different</li>
      <li><span class="ex">protect human rights</span> → defend people's basic rights</li>
      <li><span class="ex">reject discrimination</span> → refuse to accept unfair treatment</li>
      <li><span class="ex">combat prejudice</span> → take action against unfair opinions</li>
      <li><span class="ex">promote diversity</span> → encourage the inclusion of different groups</li>
      <li><span class="ex">stand against racism</span> → openly oppose racist attitudes or actions</li>
     </ul>`,
    `<h3>Modal auxiliaries</h3>
     <p>can · could · may · might · must · shall · should · will · would. Also: have to, need to, be able to.</p>
     <p><b>No “to” after a modal.</b></p>
     <p class="ex">She can speak English. You must respect others.</p>
     <p class="note">❌ She can to speak — ❌ You must to respect</p>
     <table class="tbl">
      <tr><th>Modal</th><th>Use</th><th>Example</th></tr>
      <tr><td>can</td><td>ability, possibility, permission</td><td class="ex">I can speak English.</td></tr>
      <tr><td>could</td><td>past ability, possibility, polite request, suggestion</td><td class="ex">Could you help me, please?</td></tr>
      <tr><td>may</td><td>possibility, formal permission</td><td class="ex">May I come in?</td></tr>
      <tr><td>might</td><td>weaker possibility</td><td class="ex">The situation might improve.</td></tr>
      <tr><td>must</td><td>strong obligation, necessity, deduction</td><td class="ex">He has been working all day. He must be tired.</td></tr>
      <tr><td>mustn't</td><td>prohibition (interdiction)</td><td class="ex">You mustn't discriminate against people.</td></tr>
      <tr><td>have to / had to</td><td>obligation; past obligation</td><td class="ex">I had to study yesterday.</td></tr>
      <tr><td>should</td><td>advice, moral responsibility, expected action</td><td class="ex">You shouldn't judge people by their skin colour.</td></tr>
      <tr><td>shall</td><td>suggestion, offer, formal rule</td><td class="ex">Shall I help you?</td></tr>
      <tr><td>will</td><td>future, willingness, prediction</td><td class="ex">Society will change.</td></tr>
      <tr><td>would</td><td>polite request, offer, past habit, condition</td><td class="ex">Would you like some water?</td></tr>
      <tr><td>need to</td><td>necessity</td><td class="ex">We need to respect other cultures.</td></tr>
      <tr><td>don't need to</td><td>no necessity (≠ interdiction)</td><td class="ex">You don't need to worry.</td></tr>
      <tr><td>dare</td><td>courage</td><td class="ex">He dared to speak against racism.</td></tr>
     </table>
     <p class="note">⚠️ « I must study yesterday » et « I musted » n'existent pas : au passé, <b>had to</b>.</p>`,
    `<h3>Modal + have + past participle</h3>
     <p>For possibility, deduction, regret, criticism or missed opportunities in the past.</p>
     <ul>
      <li><b>may have / might have</b>: possibility. <span class="ex">She might have missed the bus.</span></li>
      <li><b>must have</b>: strong deduction. <span class="ex">He is not here. He must have gone home.</span></li>
      <li><b>could have</b>: a past possibility or opportunity. <span class="ex">He could have won the competition.</span></li>
      <li><b>should have</b>: criticism, regret. <span class="ex">You should have studied harder.</span></li>
      <li><b>would have</b>: conditional. <span class="ex">I would have helped you if I had known.</span></li>
     </ul>`,
    `<h3>Compound nouns with -in-law</h3>
     <p class="ex">father-in-law, mother-in-law, son-in-law, daughter-in-law, brother-in-law, sister-in-law</p>
     <p class="note">Au pluriel, c'est le premier mot qui prend le s : mothers-in-law, brothers-in-law.</p>`,
  ],
  vocab: [
    ["racism", "the belief that some races are better or more important than others", "Racism may cause serious social problems."],
    ["racial discrimination", "treating people unfairly because of their race or skin colour", "Governments must fight racial discrimination."],
    ["ethnicity", "a person's cultural, national or ancestral background", "People should not be judged by their ethnicity."],
    ["prejudice", "an unfair opinion formed without enough knowledge or experience", "We must combat prejudice."],
    ["racial stereotype", "a simplified and often unfair belief about people of a particular race", "Racial stereotypes hurt people."],
    ["equality", "the state of having the same rights, opportunities and treatment", "Society needs to promote equality."],
    ["diversity", "the presence of people from different cultures, ethnic groups and backgrounds", "Schools can promote diversity."],
    ["tolerance", "accepting people who are different from you", "Schools can promote tolerance."],
    ["harassment", "repeated unwanted behaviour that makes someone feel uncomfortable or threatened", "Harassment must be reported."],
    ["bullying", "repeated behaviour intended to hurt or humiliate another person", "Bullying at school must stop."],
    ["hatred", "a very strong feeling of dislike", "Hatred is the opposite of love."],
    ["racial segregation", "separating people according to their race", "Racial segregation was legal in South Africa."],
    ["apartheid", "a former system of racial segregation in South Africa", "Apartheid ended in 1994."],
    ["slavery", "a system in which people are treated as property and forced to work", "Slavery is a crime against humanity."],
    ["slave trade", "the buying, selling and transportation of enslaved people", "The slave trade lasted for centuries."],
    ["genocide", "the deliberate destruction of a national, ethnic, racial or religious group", "The world must prevent genocide."],
    ["xenophobia", "fear, dislike or hostility towards foreigners", "Xenophobia divides people."],
    ["human rights", "basic rights and freedoms that every human being should have", "We must protect human rights."],
  ],
  exercises: [
    { title: "Choose the right modal", items: [
      { t: "mc", q: "She can ___ English.", o: ["speak", "to speak"], a: 0, why: "Pas de « to » après un modal." },
      { t: "mc", q: "You ___ discriminate against people. It's forbidden.", o: ["mustn't", "don't need to"], a: 0, why: "Interdiction : mustn't." },
      { t: "mc", q: "You ___ come tomorrow. It isn't necessary.", o: ["don't need to", "mustn't"], a: 0, why: "Pas nécessaire : don't need to." },
      { t: "mc", q: "He has been working all day. He ___ be tired.", o: ["must", "shall", "dare"], a: 0, why: "Déduction forte." },
      { t: "mc", q: "___ you help me, please?", o: ["Could", "Must", "Shall"], a: 0 },
      { t: "mc", q: "___ I help you?", o: ["Shall", "Must", "Need"], a: 0, why: "Une offre : Shall I…?" },
      { t: "mc", q: "Yesterday, I ___ study for my test.", o: ["had to", "must", "musted"], a: 0 },
      { t: "mc", q: "When I was young, I ___ run very fast.", o: ["could", "can", "shall"], a: 0 },
      { t: "mc", q: "It ___ rain, but I'm not sure at all.", o: ["might", "must", "shall"], a: 0 },
    ]},
    { title: "Modal + have + past participle", items: [
      { t: "mc", q: "He is not here. He ___ gone home.", o: ["must have", "should have", "would have"], a: 0 },
      { t: "mc", q: "You failed the test. You ___ studied harder.", o: ["should have", "must have", "may have"], a: 0 },
      { t: "mc", q: "I ___ helped you if I had known.", o: ["would have", "must have", "should have"], a: 0 },
      { t: "mc", q: "She is late. She ___ missed the bus.", o: ["might have", "should have", "would have"], a: 0 },
      { t: "gap", q: "The authorities ___ (should / act) earlier.", a: [["should have acted"]] },
      { t: "gap", q: "We ___ (could / prevent) the conflict.", a: [["could have prevented"]] },
    ]},
    { title: "-in-law", items: [
      { t: "gap", q: "My wife's mother is my ___.", a: [["mother-in-law", "mother in law"]] },
      { t: "gap", q: "My sister's husband is my ___.", a: [["brother-in-law", "brother in law"]] },
      { t: "gap", q: "My son's wife is my ___.", a: [["daughter-in-law", "daughter in law"]] },
      { t: "gap", q: "One mother-in-law, two ___.", a: [["mothers-in-law", "mothers in law"]] },
    ]},
  ],
  dictation: [
    "Everyone should respect other people's differences.",
    "Governments must fight racial discrimination.",
    "People should not judge others by their skin colour.",
    "The authorities should have acted earlier.",
  ],
  speak: [
    "We must not tolerate racism.",
    "Young people could organize campaigns against racism.",
    "Schools can promote tolerance.",
    "He must have experienced discrimination in the past.",
    "We could have prevented the conflict.",
  ],
},
{
  id: "u2l3", unit: "u2", title: "Lesson 3 · Writing", topic: "An informal e-mail",
  course: [
    `<h3>Writing strategies</h3>
     <ol>
      <li><b>Subject line</b>: the reason for writing.</li>
      <li><b>Greeting (salutation)</b>: <span class="ex">Hi… / Hello… / Hey…</span></li>
      <li><b>Details of the e-mail</b>: concise and to the point.</li>
      <li><b>Ending</b>: <span class="ex">Best wishes / Take care / Looking forward to hearing from you</span></li>
      <li><b>Signature</b>: your name.</li>
     </ol>
     <h3>Layout</h3>
     <pre class="layout">From: sender's e-mail address
To: recipient's e-mail address
Subject: …

Salutation,
Points of the e-mail…
Details…

Ending,
Signature</pre>`,
  ],
  writing: {
    task: "Your friend Awa lives in Bouaké. Write her an informal e-mail (about 120 words) to tell her about the commemoration of Nelson Mandela's death organised in your school and what you learnt about him.",
    minWords: 100,
    checks: [
      ["Ligne « From: »", "^\\s*from\\s*:"],
      ["Ligne « To: »", "^\\s*to\\s*:"],
      ["Ligne « Subject: »", "^\\s*subject\\s*:"],
      ["Salutation (Hi / Hello / Hey / Dear)", "^\\s*(hi|hello|hey|dear)\\b"],
      ["Formule de fin", "(best wishes|take care|looking forward to hearing from you|see you soon|love)"],
    ],
    model: `From: aya.school@email.com
To: awa.bouake@email.com
Subject: Our Mandela day at school!

Hi Awa,

I hope you and your family are fine. I'm writing to tell you about the commemoration of Nelson Mandela's death that our English club organised last Friday.

Our teacher assigned us to read a text about him, and I learnt so many things! He spent twenty-seven years in prison because he fought against apartheid, but when he was released, he chose peace instead of revenge. In 1994, he became the first black president of South Africa.

At the end of the day, we sang and watched a short film about his life. It was really moving.

Tell me about your school too. Looking forward to hearing from you!

Best wishes,
Aya`,
  },
  speak: [
    "I'm writing to tell you about our school.",
    "Looking forward to hearing from you.",
    "Best wishes and take care.",
  ],
},
/* ================================================================ UNIT 3 */
{
  id: "u3l1", unit: "u3", title: "Lesson 1 · Reading", topic: "Rural poverty in developing countries",
  course: [
    `<h3>Development issues (problems)</h3>
     <p class="ex">corruption, unemployment (joblessness), lack of manpower, poverty, insecurity, environmental problems, poor healthcare system, poor education system, poor infrastructure, political instability, overpopulation</p>
     <h3>Questions to think about</h3>
     <p>What is poverty? Who are poor people? What can cause poverty? What are the consequences of poverty? How can governments reduce poverty?</p>`,
    `<h3>Function: many, much, few, little, a few, a little</h3>
     <table class="tbl">
      <tr><th></th><th>Countable (plural)</th><th>Uncountable</th></tr>
      <tr><td>beaucoup</td><td><b>many</b> students</td><td><b>much</b> money (questions, négations)</td></tr>
      <tr><td>peu (presque pas)</td><td><b>few</b> students</td><td><b>little</b> water</td></tr>
      <tr><td>quelques / un peu</td><td><b>a few</b> friends</td><td><b>a little</b> money</td></tr>
     </table>
     <p class="ex">There are many poor countries in Africa.</p>
     <p class="ex">How much money do you have? I don't have much time.</p>
     <p class="note">À la forme affirmative, on préfère <b>a lot of</b> : « I have a lot of money », pas « I have much money ».</p>
     <p class="ex">Few students came to class.</p><p class="note">= Peu d'élèves sont venus (presque personne).</p>
     <p class="ex">A few students came to class.</p><p class="note">= Quelques élèves sont venus.</p>
     <p class="ex">Little water is left.</p><p class="note">= Il reste très peu d'eau.</p>
     <p class="ex">A little water is left.</p><p class="note">= Il reste un peu d'eau.</p>`,
  ],
  vocab: [
    ["poverty", "deprivation, hardship (poor → poverty → impoverished)", "Poverty remains a major problem in many developing countries."],
    ["income", "money that a person or household receives, especially from work", "Farmers often have a low income during the dry season."],
    ["employment", "the state of having a job (≠ unemployment, joblessness)", "The government should create more employment opportunities for young people."],
    ["wage", "money paid to a worker for the work he or she does", "Many rural workers receive very low wages."],
    ["labour", "work, especially physical work (labour force)", "Agricultural labour is essential in many rural communities."],
    ["rural", "of the countryside (≠ urban)", "Many poor people live in rural areas."],
    ["multidimensional", "having many different aspects or causes", "Poverty is a multidimensional problem."],
    ["requirement", "something that is necessary or needed", "Education is an important requirement for sustainable development."],
    ["sustained", "continuing for a long period of time", "Developing countries need sustained economic growth."],
    ["to be afflicted by", "to be seriously affected by something unpleasant or harmful", "Many rural communities are afflicted by poverty."],
    ["to mitigate", "to make something less serious, harmful or painful (reduce, alleviate)", "Governments should take measures to mitigate poverty."],
    ["to cope with", "to succeed in dealing with a difficult situation", "Poor families develop strategies to cope with economic difficulties."],
    ["household", "all the people who live together in one home", "Poverty affects many households in rural areas."],
    ["landless", "having no land, especially agricultural land", "Landless rural workers are particularly vulnerable to poverty."],
    ["to neglect", "to fail to give enough attention or care to something", "Neglecting rural infrastructure can increase poverty."],
    ["overpopulation", "too many people living in one place", "Overpopulation puts pressure on cities."],
  ],
  exercises: [
    { title: "Synthesis of the text", box: "poverty · rural · income · unemployment · infrastructure · access · agriculture · migration · policies · generations · economic · mitigate", items: [
      { t: "gap", q: "Rural ___ is a complex problem in many developing countries.", a: [["poverty"]] },
      { t: "gap", q: "It has several ___ and social causes, including low ___, unemployment and limited opportunities.", a: [["economic"], ["income"]] },
      { t: "gap", q: "Many poor people live in ___ areas and depend heavily on ___ for their livelihood.", a: [["rural"], ["agriculture"]] },
      { t: "gap", q: "Unfortunately, they often have little ___ to land, credit, education and health care.", a: [["access"]] },
      { t: "gap", q: "Poor roads, schools and other forms of ___ can also make their living conditions worse.", a: [["infrastructure"]] },
      { t: "gap", q: "Governments therefore need effective public ___ to improve the situation.", a: [["policies"]] },
      { t: "gap", q: "They should promote ___ growth, invest in rural communities and take measures to ___ poverty.", a: [["economic"], ["mitigate"]] },
      { t: "gap", q: "Otherwise, poverty may continue to affect successive ___.", a: [["generations"]] },
      { t: "gap", q: "It can also encourage rural-urban ___ as people move to cities in search of better opportunities.", a: [["migration"]] },
    ]},
    { title: "many, much, few, little, a few, a little", items: [
      { t: "mc", q: "There are ___ poor countries in Africa.", o: ["many", "much"], a: 0 },
      { t: "mc", q: "They don't have ___ money.", o: ["much", "many"], a: 0 },
      { t: "mc", q: "How ___ money do you have?", o: ["much", "many"], a: 0 },
      { t: "mc", q: "I have ___ money.", o: ["a lot of", "much"], a: 0, why: "Affirmatif : a lot of." },
      { t: "mc", q: "Almost nobody came: there were ___ students in the classroom.", o: ["few", "a few"], a: 0 },
      { t: "mc", q: "I have ___ friends in Bassam, so I'm not alone.", o: ["a few", "few"], a: 0 },
      { t: "mc", q: "I have ___ money, so I can buy a sandwich.", o: ["a little", "little"], a: 0 },
      { t: "mc", q: "There is ___ hope of success: the situation is very bad.", o: ["little", "a little"], a: 0 },
    ]},
  ],
  dictation: [
    "Poverty remains a major problem in many developing countries.",
    "Many rural workers receive very low wages.",
    "Governments should take measures to mitigate poverty.",
    "Landless rural workers are particularly vulnerable to poverty.",
  ],
  speak: [
    "Poverty is a multidimensional problem.",
    "Education is an important requirement for sustainable development.",
    "Many rural communities are afflicted by poverty.",
    "Poor families develop strategies to cope with economic difficulties.",
  ],
},
{
  id: "u3l2", unit: "u3", title: "Lesson 2 · Speaking", topic: "Making, letting, enabling, allowing someone to do something",
  course: [
    `<h3>Causative verbs</h3>
     <p>Make, have, get, enable, let and allow are verbs used when a person causes, asks, forces or allows another person to do something.</p>
     <table class="tbl">
      <tr><th>Verb</th><th>Meaning</th><th>Structure</th></tr>
      <tr><td><b>make</b></td><td>to force</td><td>make + person + base verb</td></tr>
      <tr><td><b>have</b></td><td>to ask, to arrange</td><td>have + person + base verb</td></tr>
      <tr><td><b>get</b></td><td>to persuade, to convince</td><td>get + person + <b>to</b> + verb</td></tr>
      <tr><td><b>let</b></td><td>to allow</td><td>let + person + base verb</td></tr>
      <tr><td><b>enable</b></td><td>to make capable</td><td>enable + person + <b>to</b> + verb</td></tr>
      <tr><td><b>allow</b></td><td>to permit (formal)</td><td>allow + person + <b>to</b> + verb</td></tr>
     </table>
     <p class="ex">The teacher made the students rewrite the exercise.</p>
     <p class="ex">I had my secretary send the letter.</p>
     <p class="ex">She got her brother to help her.</p>
     <p class="ex">My parents let me use their car.</p>
     <p class="ex">The bank enables the farmers to get credits for their plantations.</p>
     <p class="ex">The government allows them to send their crops abroad.</p>
     <p class="note">Pas de « to » après make, have, let. « to » après get, enable, allow.</p>`,
    `<h3>Natural disasters</h3>
     <ul>
      <li><span class="ex">flood</span> → inundation: water covers land that is normally dry</li>
      <li><span class="ex">drought</span> → no rain for a long period</li>
      <li><span class="ex">earthquake</span> → a sudden shaking of the ground</li>
      <li><span class="ex">tsunami</span> → a huge wave caused by an earthquake under the sea</li>
     </ul>`,
  ],
  vocab: [
    ["to make someone do something", "to force someone to do something", "The teacher made the students rewrite the exercise."],
    ["to have someone do something", "to ask or arrange for someone to do something", "I had my secretary send the letter."],
    ["to get someone to do something", "to persuade someone to do something", "She got her brother to help her."],
    ["to let someone do something", "to allow someone to do something", "My parents let me use their car."],
    ["to enable someone to do something", "to make someone capable of doing something", "Education enables young people to find jobs."],
    ["to allow someone to do something", "to permit someone to do something (formal)", "The government allows them to export their crops."],
    ["flood", "water that covers land that is normally dry", "The flood destroyed many houses."],
    ["drought", "a long period without rain", "The drought killed the crops."],
    ["earthquake", "a sudden shaking of the ground", "The earthquake destroyed the city."],
    ["tsunami", "a huge wave caused by an earthquake under the sea", "The tsunami hit the coast."],
  ],
  exercises: [
    { title: "Base verb or to + verb?", items: [
      { t: "mc", q: "The teacher made the students ___ the exercise.", o: ["rewrite", "to rewrite"], a: 0 },
      { t: "mc", q: "My parents let me ___ their car.", o: ["use", "to use"], a: 0 },
      { t: "mc", q: "She got her brother ___ her.", o: ["to help", "help"], a: 0 },
      { t: "mc", q: "The bank enables farmers ___ credits.", o: ["to get", "get"], a: 0 },
      { t: "mc", q: "The government allows them ___ their crops abroad.", o: ["to send", "send"], a: 0 },
      { t: "mc", q: "I had my secretary ___ the letter.", o: ["send", "to send"], a: 0 },
      { t: "mc", q: "My father doesn't ___ me go out at night.", o: ["let", "allow"], a: 0, why: "allow demande « to go » ; let + verbe sans to." },
      { t: "mc", q: "Education ___ young people to find better jobs.", o: ["enables", "makes", "lets"], a: 0 },
    ]},
    { title: "Complete", items: [
      { t: "gap", q: "The rain made us ___ (stay) at home.", a: [["stay"]] },
      { t: "gap", q: "Microcredit enables women ___ (start) small businesses.", a: [["to start"]] },
      { t: "gap", q: "The new road will allow farmers ___ (sell) their products in town.", a: [["to sell"]] },
      { t: "gap", q: "Let me ___ (explain) the problem.", a: [["explain"]] },
    ]},
  ],
  dictation: [
    "The teacher made the students rewrite the exercise.",
    "My parents let me use their car.",
    "The bank enables the farmers to get credits.",
    "The drought killed the crops.",
  ],
  speak: [
    "She got her brother to help her.",
    "The government allows them to send their crops abroad.",
    "Education enables young people to find better jobs.",
    "Floods and droughts make life difficult for farmers.",
  ],
},
{
  id: "u3l3", unit: "u3", title: "Lesson 3 · Writing", topic: "A newspaper article",
  course: [
    `<p>A newspaper article is a written text published in a newspaper, magazine or online newspaper. It gives information about an event, a problem, a situation or an important issue. A good newspaper article should be <b>clear</b>, <b>informative</b> and <b>interesting</b>.</p>
     <h3>Structure: five main parts</h3>
     <ol>
      <li><b>The headline</b>: the title. Short, clear and attractive. <span class="ex">YOUTH UNEMPLOYMENT: A GROWING CHALLENGE</span></li>
      <li><b>The byline</b>: the name of the journalist. During tests, simply write: name or signature.</li>
      <li><b>The introduction</b>: presents the topic and the most important information. It answers: What? Where? When? Who? Why? Short and interesting.</li>
      <li><b>The body</b>: the main information and details: causes, consequences, examples, statistics or facts, possible solutions, in clear paragraphs.</li>
      <li><b>The conclusion</b>: summarises the main ideas and may suggest solutions, recommendations or a call for action.</li>
     </ol>`,
    `<h3>Useful language</h3>
     <ul>
      <li>Linking words: <span class="ex">first, firstly, moreover, furthermore, however, therefore, because, as a result, finally, in addition, on the other hand</span></li>
      <li>To introduce the topic: <span class="ex">Nowadays… / Today… / In recent years… / One of the major problems facing our society is…</span></li>
      <li>To explain causes: <span class="ex">This problem is caused by… / One of the main causes is… / This is mainly due to…</span></li>
      <li>To describe consequences: <span class="ex">As a result… / Consequently… / This situation leads to… / This can have serious consequences for…</span></li>
      <li>To suggest solutions: <span class="ex">The government should… / People must… / It is necessary to… / More efforts should be made to… / Education can help to…</span></li>
      <li>To conclude: <span class="ex">In conclusion… / To solve this problem… / The authorities should… / Everyone has a role to play…</span></li>
     </ul>
     <h3>Before writing, remember</h3>
     <p>Choose a clear headline · introduce the topic clearly · organise your ideas into paragraphs · give causes, consequences and solutions · use linking words · use clear and simple language · check your grammar, spelling and punctuation · avoid repeating the same words too often.</p>`,
  ],
  writing: {
    task: "Write a newspaper article (150 to 200 words) about a development issue in your country (for example youth unemployment, poor infrastructure or rural poverty). Give its causes, its consequences and some solutions.",
    minWords: 150,
    checks: [
      ["Un titre court en première ligne", "^[^\\n.]{3,70}\\n"],
      ["Introduction (Nowadays / Today / In recent years / One of the major…)", "(nowadays|today|in recent years|one of the major)"],
      ["Causes (caused by / due to / one of the main causes)", "(caused by|due to|main cause|because)"],
      ["Conséquences (as a result / consequently / leads to)", "(as a result|consequently|leads to|consequences)"],
      ["Solutions (should / must / it is necessary to)", "\\b(should|must|it is necessary to)\\b"],
      ["Au moins 3 mots de liaison différents", "@links3"],
      ["Conclusion (In conclusion / To conclude…)", "(in conclusion|to conclude|to sum up|everyone has a role to play)"],
      ["Signature (Name or signature) à la fin", "@signature"],
    ],
    model: `DEVELOPMENT ISSUES: A CHALLENGE FOR AFRICA
By Aya

Development is one of the major challenges facing many African countries today. Although significant progress has been made in several areas, poverty, unemployment, poor infrastructure and limited access to quality education and healthcare still affect millions of people.

One of the main development issues is youth unemployment. Every year, thousands of young people leave school and enter the job market, but there are not enough jobs for everyone. This is mainly due to the lack of industries and vocational training. As a result, many young people struggle to find stable employment and become economically dependent on their families.

Another important problem is the lack of adequate infrastructure in some communities. In certain rural areas, people still have limited access to good roads, electricity, clean water and healthcare facilities. This situation can slow down economic activities and make people's living conditions more difficult.

Education is also essential for development. A well-educated population has better opportunities to create businesses, find employment and contribute to the progress of society. Therefore, governments should invest more in schools, vocational training and modern technologies.

In conclusion, development requires the participation of everyone. Governments, private companies and citizens must work together to fight poverty, create jobs and improve access to basic services.

Aya`,
  },
  speak: [
    "Youth unemployment is a growing challenge.",
    "As a result, many young people struggle to find stable employment.",
    "Therefore, governments should invest more in schools.",
    "In conclusion, everyone has a role to play.",
  ],
},
];
