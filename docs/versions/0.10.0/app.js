/* ---------- Data ---------- */
const EX = {
  bench:{de:'Bankdrücken',en:'Bench Press',g:'chest',eq:'bb'}, incline:{de:'Schrägbankdrücken',en:'Incline Dumbbell Press',g:'chest',eq:'db'}, fly:{de:'Butterfly',en:'Pec Deck',g:'chest',eq:'machine'},
  ohp:{de:'Schulterdrücken',en:'Overhead Press',g:'shoulders',eq:'bb'}, lateral:{de:'Seitheben',en:'Lateral Raise',g:'shoulders',eq:'db'}, facepull:{de:'Face Pulls',en:'Face Pulls',g:'shoulders',eq:'cable'},
  pushdown:{de:'Trizepsdrücken',en:'Triceps Pushdown',g:'triceps',eq:'cable'}, dips:{de:'Dips',en:'Dips',g:'triceps',eq:'bw'},
  latpull:{de:'Latzug',en:'Lat Pulldown',g:'back',eq:'cable'}, row:{de:'Rudern am Kabel',en:'Seated Cable Row',g:'back',eq:'cable'}, pullup:{de:'Klimmzüge',en:'Pull-ups',g:'back',eq:'bw'}, deadlift:{de:'Kreuzheben',en:'Deadlift',g:'back',eq:'bb'},
  curl:{de:'Kurzhantel-Curls',en:'Dumbbell Curls',g:'biceps',eq:'db'}, hammer:{de:'Hammer Curls',en:'Hammer Curls',g:'biceps',eq:'db'},
  squat:{de:'Kniebeuge',en:'Squat',g:'legs',eq:'bb'}, legpress:{de:'Beinpresse',en:'Leg Press',g:'legs',eq:'machine'}, rdl:{de:'Rumänisches Kreuzheben',en:'Romanian Deadlift',g:'legs',eq:'bb'},
  legcurl:{de:'Beinbeuger',en:'Leg Curl',g:'legs',eq:'machine'}, legext:{de:'Beinstrecker',en:'Leg Extension',g:'legs',eq:'machine'}, calf:{de:'Wadenheben',en:'Calf Raise',g:'legs',eq:'machine'}
};
const MORE_EX = {
  dbbench:['Kurzhantel-Bankdrücken','Dumbbell Bench Press','chest','db'], inclinebb:['Schrägbankdrücken Langhantel','Incline Barbell Press','chest','bb'], decline:['Negativ-Bankdrücken','Decline Bench Press','chest','bb'],
  cablefly:['Kabelzug-Flys','Cable Crossover','chest','cable'], chestpress:['Brustpresse','Chest Press Machine','chest','machine'], pushup:['Liegestütze','Push-ups','chest','bw'],
  dbpress:['Kurzhantel-Schulterdrücken','Dumbbell Shoulder Press','shoulders','db'], arnold:['Arnold Press','Arnold Press','shoulders','db'], frontraise:['Frontheben','Front Raise','shoulders','db'],
  reversefly:['Reverse Flys','Reverse Fly','shoulders','machine'], uprightrow:['Aufrechtes Rudern','Upright Row','shoulders','bb'], shrug:['Shrugs','Shrugs','shoulders','db'],
  cablelateral:['Seitheben am Kabel','Cable Lateral Raise','shoulders','cable'], shoulderpress:['Schulterpresse','Shoulder Press Machine','shoulders','machine'],
  skull:['French Press','Skull Crusher','triceps','bb'], ohext:['Trizepsdrücken über Kopf','Overhead Triceps Extension','triceps','db'], cgbench:['Enges Bankdrücken','Close-Grip Bench Press','triceps','bb'],
  kickback:['Trizeps-Kickbacks','Triceps Kickback','triceps','db'], ropepush:['Trizepsdrücken mit Seil','Rope Pushdown','triceps','cable'], benchdips:['Bankdips','Bench Dips','triceps','bw'],
  bbrow:['Langhantelrudern','Barbell Row','back','bb'], dbrow:['Einarmiges Kurzhantelrudern','One-Arm Dumbbell Row','back','db'], tbar:['T-Bar-Rudern','T-Bar Row','back','bb'],
  chinup:['Klimmzüge Untergriff','Chin-ups','back','bw'], hyperext:['Rückenstrecker','Back Extension','back','machine'], straightarm:['Überzüge am Kabel','Straight-Arm Pulldown','back','cable'],
  machrow:['Rudermaschine','Machine Row','back','machine'], closelat:['Latzug eng','Close-Grip Lat Pulldown','back','cable'], sumodl:['Sumo-Kreuzheben','Sumo Deadlift','back','bb'],
  bbcurl:['Langhantel-Curls','Barbell Curl','biceps','bb'], ezcurl:['SZ-Curls','EZ-Bar Curl','biceps','bb'], preacher:['Scott-Curls','Preacher Curl','biceps','machine'],
  cablecurl:['Kabel-Curls','Cable Curl','biceps','cable'], concentration:['Konzentrationscurls','Concentration Curl','biceps','db'], inclinecurl:['Schrägbank-Curls','Incline Dumbbell Curl','biceps','db'],
  frontsquat:['Frontkniebeuge','Front Squat','legs','bb'], split:['Bulgarian Split Squats','Bulgarian Split Squat','legs','db'], lunge:['Ausfallschritte','Lunges','legs','db'],
  hipthrust:['Hip Thrust','Hip Thrust','legs','bb'], goblet:['Goblet Squat','Goblet Squat','legs','db'], hack:['Hackenschmidt','Hack Squat','legs','machine'],
  adductor:['Adduktoren','Hip Adduction','legs','machine'], abductor:['Abduktoren','Hip Abduction','legs','machine'], seatedcalf:['Wadenheben sitzend','Seated Calf Raise','legs','machine'],
  crunch:['Crunches','Crunches','core','bw'], legraise:['Beinheben hängend','Hanging Leg Raise','core','bw'], cablecrunch:['Kabel-Crunches','Cable Crunch','core','cable'],
  abwheel:['Ab Roller','Ab Wheel Rollout','core','bw'], russian:['Russian Twists','Russian Twist','core','db'] };
Object.entries(MORE_EX).forEach(([k, [de, en, g, eq]]) => { EX[k] = { de, en, g, eq }; });
const APP_VERSION = '0.10.0';
const ENV = window.FITTER_ENV === 'dev' ? 'dev' : 'live';
const STORE_KEY = ENV === 'dev' ? 'fitter.dev.v1' : 'fitter.v1';
const DEFAULT_WORKOUTS = [
  { id:'push', name:'Push Day', ex:[['bench',4],['incline',4],['ohp',4],['pushdown',4],['dips',3]] },
  { id:'pull', name:'Pull Day', ex:[['latpull',4],['row',4],['pullup',3],['curl',4],['hammer',3]] },
  { id:'legs', name:'Leg Day',  ex:[['squat',4],['legpress',4],['rdl',4],['calf',4]] }
];
const S = { lang:'de', inverted:false, anim:'breath', pulse:'breathe', trendColor:false, fcLook:8, fcHor:6, name:'', bodyweight:null, bwPoints:false, fav:['bench','latpull','squat'], chartKey:'bench', age:null, accent:false, celeb:'confetti', onboarded:false, intro:'spin', username:'', pbEx:['bench','squat','deadlift'], vis:{ level:true, pbs:true, week:true, last:true } };
const r05 = v => Math.round(v * 2) / 2;
const STORED = (() => { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || null; } catch (e) { return null; } })();
if (STORED && STORED.settings) Object.assign(S, STORED.settings);
if (STORED && STORED.custom) Object.assign(EX, STORED.custom);
let workouts = STORED && Array.isArray(STORED.workouts) ? STORED.workouts : JSON.parse(JSON.stringify(DEFAULT_WORKOUTS));
const HISTORY = STORED && Array.isArray(STORED.history) ? STORED.history : [];
const dayStart = ts => { const x = new Date(ts); x.setHours(12, 0, 0, 0); return x.getTime(); };
function refreshAgo() { const t0 = dayStart(Date.now()); HISTORY.forEach(h => h.ago = Math.round((t0 - dayStart(h.date)) / 864e5)); }
refreshAgo();
const serW = w => { const { src, ...rest } = w; return { ...rest, srcId: src.id, srcName: src.name }; };
const deserW = o => { const { srcId, srcName, ...rest } = o; return { ...rest, src: workouts.find(w => w.id === srcId) || { id: srcId, name: srcName, ex: [] } }; };
function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({ v: 1, settings: S, workouts,
      custom: Object.fromEntries(Object.entries(EX).filter(([, e]) => e.custom)),
      history: HISTORY.map(({ ago, ...h }) => h),
      active: W ? serW(W) : null,
      lastFinished: lastFinished ? { w: serW(lastFinished.W), histId: lastFinished.hist.id, at: lastFinished.at } : null }));
  } catch (e) { /* storage full or blocked */ }
}

/* ---------- i18n ---------- */
const T = {
  de:{ navProg:'Fortschritt', navSet:'Einstellungen', points:'Points', ptsWeek:'+35 diese Woche', cta:"Los geht's", tap:'Start', thisWeek:'Diese Woche', workouts:'Workouts', moved:'bewegt', vsLast:'vs. Vorwoche',
    resume:'Training fortsetzen', resumeLeft:m=>`noch ${m} min möglich`,
    yourWorkouts:'Deine Workouts', whatToday:'Was steht heute an?', newWorkout:'Neues Workout', go:'GO', exN:n=>`${n} Übungen`, ago:d=> d===0?'heute':d===1?'gestern':`vor ${d} Tagen`, lastDone:s=>`Zuletzt ${s}`, never:'noch nie',
    progress:'Fortschritt', history:'Verlauf', calendar:'Kalender', less:'Weniger', today:'Heute', noWorkout:'Kein Training', details:'Details', hide:'Weniger', min:m=>`${m} min`, setsWord:'Sätze',
    last30:'Letzte 30 Tage', wCount:'Workouts', movedW:'Bewegtes Gewicht', trainTime:'Trainingszeit', prs:'Neue Rekorde',
    forEx:'Pro Übung', chStrength:'Kraft (1RM)', chVolume:'Volumen pro Training', chWeight:'Arbeitsgewicht', forecast:'Prognose 6 Wochen', forecastTag:'Prognose', trend:'Verlauf',
    info1rm:'<b>1RM</b> = One-Rep-Max: das Gewicht, das du genau 1× schaffen würdest. Geschätzt mit der Epley-Formel aus deinem besten Satz:<br><code>1RM = Gewicht × (1 + Wdh. / 30)</code><br>Beispiel: 60 kg × 10 → 80 kg.',
    infoFc:'Trend der letzten 8 Wochen, fortgeschrieben, wie Excels logarithmische Trendlinie. Sie flacht ab, weil Kraft mit der Zeit langsamer wächst. Grau = Unsicherheit.',
    infoVol:'Gewicht × Wiederholungen, über alle Sätze dieser Übung in einem Training.', infoWeight:'Das schwerste Gewicht, das du in diesem Training bewegt hast.',
    bwEmpty:'Du machst diese Übung mit Unterstützung. Sie zählt erst, wenn du in den Einstellungen dein Körpergewicht einträgst und „Körpergewicht mitzählen“ einschaltest.', pbs:'Personal Bests', approx:v=>`≈ ${v} kg 1RM`, maxFav:'Maximal 3 Favoriten',
    settings:'Einstellungen', language:'Sprache', langHint:'Deutsch oder Englisch', invert:'Farbumkehr', invertHint:'Schwarz auf Weiß statt Weiß auf Schwarz', bodyweight:'Körpergewicht', bwHint:'Nur für Dips, Klimmzüge & Co.',
    bwPoints:'Körpergewicht mitzählen', bwPointsHint:'Bei Dips, Klimmzügen & Co.', bwPointsOff:'Erst Körpergewicht eintragen',
    bwInfo:'Bei Übungen wie Dips oder Klimmzügen bewegst du dein eigenes Gewicht. Ist der Schalter <b>aus</b>, zählt nur Zusatzgewicht (z. B. +10 kg). Ist er <b>an</b>, wird dein Körpergewicht dazugerechnet: Du wiegst 80 kg und machst Dips mit 20 kg Unterstützung (−20) : Das zählt wie 60 kg.',
    animTitle:'Animation Aufwärmen & Cooldown', animHint:'Läuft auch klein im Workout. Beim Cooldown rückwärts.',
    anims:{ breath:'Puls', fill:'Füllen', shards:'Splitter', mosaic:'Mosaik', rings:'Ringe', segments:'Segmente', spin:'Rotation', stack:'Stapel' },
    ready:'Bereit?', readyHint:'Reihenfolge kannst du jetzt noch ändern, oder später im Workout. Am Griff ≡ ziehen.', start:'Start', sets:n=>`${n} Sätze`, lastShort:(w,r)=>`zuletzt ${w} × ${r}`,
    warmup:'Aufwärmen', set:'Satz', rest:'Pause', cooldown:'Cooldown', overall:'Gesamt', warmDone:'Aufwärmen fertig', startSet:n=>`Satz ${n} starten`, setDone:'Satz fertig', setDoneNext:'Satz fertig → Nächste Übung', nextEx:'Nächste Übung', toCooldown:'Cooldown starten', finishNoCd:'Ohne Cooldown beenden', finish:'Workout beenden', endAbort:'Beenden / Abbrechen',
    setLabel:n=>`Satz ${n}`, running:'läuft', next:'als Nächstes', addSet:'+ Satz hinzufügen', kg:'kg', kgExtra:'Zusatz-kg', reps:'Wdh.', bwNote:'Minus = Unterstützung, z. B. −20', ok:'Fertig', done:'Fertig', bwLabel:w=> w==='0'?'Körpergewicht':w.startsWith('-')?`${w} kg`:`+${w} kg`,
    dlgTitle:'Workout beenden?', dlgText:'Du bist mitten im Training.', dlgCont:'Weiter trainieren', dlgSave:'Vorzeitig beenden & speichern', dlgDiscard:'Abbrechen & löschen',
    dlgDelTitle:'Wirklich löschen?', dlgDelText:'Dieses Training wird nicht gespeichert. Das kann nicht rückgängig gemacht werden.', dlgDelNo:'Nein, weiter trainieren', dlgDelYes:'Ja, Training löschen', discarded:'Training gelöscht',
    dlgBackTitle:'Workout verwerfen?', dlgBackText:'Deine Eingaben gehen verloren.', dlgBackNo:'Weiter bearbeiten', dlgBackYes:'Verwerfen',
    slogans:['Stark. Workout erledigt.','Das war Arbeit. Gute Arbeit.','Eisen bewegt. Ziel erreicht.','Heute stärker als gestern.','Abgehakt. Erhol dich gut.','Saubere Leistung.'],
    ptsEarned:'Points verdient', duration:'Dauer', highlightEx:'Highlight-Übung', today2:'Heute', lastTime:'Letztes Mal', allEx:'Alle Übungen', newPR:'Neuer Rekord', strength:'Kraft', volume:'Volumen', emptyReview:'Noch keine Sätze eingetragen.',
    namePh:'Name, z. B. Arm Day', chosen:'Reihenfolge', searchPh:'Übung suchen …', customAdd:'+ Eigene Übung', customName:'Name der Übung', muscle:'Muskelgruppe', equipment:'Equipment', add:'Übung hinzufügen', save:'Speichern', saveN:n=>`Speichern (${n})`, needName:'Bitte Namen und mindestens eine Übung wählen', needCustom:'Bitte Namen der Übung eingeben', saved:'Workout angelegt', own:'Eigene',
    pickEx:'Übung wählen', onlyFav:'Nur Favoriten', notTrained:'noch nicht trainiert',
    groups:{chest:'Brust',shoulders:'Schultern',triceps:'Trizeps',back:'Rücken',biceps:'Bizeps',legs:'Beine'}, eqs:{bb:'Langhantel',db:'Kurzhantel',cable:'Kabel',machine:'Maschine',bw:'Körpergewicht'},
    wd:['Mo','Di','Mi','Do','Fr','Sa','So'],
    greet:{ morning:['Früher Vogel, schwere Gewichte.','Guten Morgen. Die Hanteln warten schon.','Kaffee? Erst nach dem letzten Satz.','Der Tag gehört dir. Fang mit dem Training an.','Morgens trainiert, ganzen Tag stolz.'],
      noon:['Mittagspause? Machen wir eine Trainingspause draus.','Halbzeit des Tages. Volle Kraft.','Kurze Pause, große Gewichte.','Mittags ist die Hantelbank frei.','Energie tanken mit Eisen.'],
      afternoon:['Zeit, den Tag abzuschütteln.','Nachmittagstief? Nicht mit dir.','Heute ein bisschen stärker als gestern.','Die beste Pause ist ein guter Satz.','Bereit für ein neues Rekordgewicht?'],
      evening:['Feierabend heißt Trainingsbeginn.','Den Tag mit einem starken Satz beenden.','Guten Abend, Kraftpaket.','Andere gehen auf die Couch. Du gehst ins Gym.','Heute Abend wird gepumpt.'],
      night:['Nachteule im Gym. Respekt.','Die Hanteln schlafen nie.','Spät dran, aber am Start.','Leeres Gym, freie Bahn.','Mitternachtsgains.'] } },
  en:{ navProg:'Progress', navSet:'Settings', points:'Points', ptsWeek:'+35 this week', cta:"Let's go", tap:'Start', thisWeek:'This week', workouts:'Workouts', moved:'moved', vsLast:'vs. last week',
    resume:'Resume workout', resumeLeft:m=>`${m} min left to resume`,
    yourWorkouts:'Your workouts', whatToday:"What's on today?", newWorkout:'New workout', go:'GO', exN:n=>`${n} exercises`, ago:d=> d===0?'today':d===1?'yesterday':`${d} days ago`, lastDone:s=>`Last done ${s}`, never:'never',
    progress:'Progress', history:'History', calendar:'Calendar', less:'Less', today:'Today', noWorkout:'Rest day', details:'Details', hide:'Less', min:m=>`${m} min`, setsWord:'Sets',
    last30:'Last 30 days', wCount:'Workouts', movedW:'Weight moved', trainTime:'Training time', prs:'New records',
    forEx:'Per exercise', chStrength:'Strength (1RM)', chVolume:'Volume per session', chWeight:'Working weight', forecast:'6-week forecast', forecastTag:'Forecast', trend:'History',
    info1rm:'<b>1RM</b> = one-rep max: the weight you could lift exactly once. Estimated with the Epley formula from your best set:<br><code>1RM = weight × (1 + reps / 30)</code><br>Example: 60 kg × 10 → 80 kg.',
    infoFc:'Trend of the last 8 weeks, extended, like Excel’s logarithmic trendline. It flattens because strength grows more slowly over time. Grey = uncertainty.',
    infoVol:'Weight × reps across all sets of this exercise in one session.', infoWeight:'The heaviest weight you moved in that session.',
    bwEmpty:'You do this exercise with assistance. It only counts once you enter your body weight in Settings and turn on “Count body weight”.', pbs:'Personal bests', approx:v=>`≈ ${v} kg 1RM`, maxFav:'3 favourites max',
    settings:'Settings', language:'Language', langHint:'German or English', invert:'Invert colors', invertHint:'Black on white instead of white on black', bodyweight:'Body weight', bwHint:'Only for dips, pull-ups & co.',
    bwPoints:'Count body weight', bwPointsHint:'For dips, pull-ups & co.', bwPointsOff:'Enter body weight first',
    bwInfo:'In exercises like dips or pull-ups you move your own weight. With the switch <b>off</b>, only extra weight counts (e.g. +10 kg). With it <b>on</b>, your body weight is added: you weigh 80 kg and do dips with 20 kg assistance (−20) : that counts as 60 kg.',
    animTitle:'Warm-up & cool-down animation', animHint:'Also runs small during the workout. Reversed in cool-down.',
    anims:{ breath:'Pulse', fill:'Fill', shards:'Shards', mosaic:'Mosaic', rings:'Rings', segments:'Segments', spin:'Spin', stack:'Stack' },
    ready:'Ready?', readyHint:'You can still change the order now, or later during the workout. Drag the ≡ handle.', start:'Start', sets:n=>`${n} sets`, lastShort:(w,r)=>`last ${w} × ${r}`,
    warmup:'Warm-up', set:'Set', rest:'Rest', cooldown:'Cool-down', overall:'Total', warmDone:'Warm-up done', startSet:n=>`Start set ${n}`, setDone:'Set done', setDoneNext:'Set done → Next exercise', nextEx:'Next exercise', toCooldown:'Start cool-down', finishNoCd:'Finish without cool-down', finish:'Finish workout', endAbort:'Finish / cancel',
    setLabel:n=>`Set ${n}`, running:'running', next:'up next', addSet:'+ Add set', kg:'kg', kgExtra:'Extra kg', reps:'Reps', bwNote:'Minus = assistance, e.g. −20', ok:'Done', done:'Done', bwLabel:w=> w==='0'?'Body weight':w.startsWith('-')?`${w} kg`:`+${w} kg`,
    dlgTitle:'Finish workout?', dlgText:'You are in the middle of training.', dlgCont:'Keep training', dlgSave:'Finish early & save', dlgDiscard:'Cancel & delete',
    dlgDelTitle:'Really delete?', dlgDelText:'This workout will not be saved. This cannot be undone.', dlgDelNo:'No, keep training', dlgDelYes:'Yes, delete workout', discarded:'Workout deleted',
    dlgBackTitle:'Discard workout?', dlgBackText:'Your changes will be lost.', dlgBackNo:'Keep editing', dlgBackYes:'Discard',
    slogans:['Strong. Workout done.','That was work. Good work.','Iron moved. Goal reached.','Stronger than yesterday.','Done. Recover well.','Clean performance.'],
    ptsEarned:'points earned', duration:'Duration', highlightEx:'Highlight exercise', today2:'Today', lastTime:'Last time', allEx:'All exercises', newPR:'New record', strength:'Strength', volume:'Volume', emptyReview:'No sets logged yet.',
    namePh:'Name, e.g. Arm Day', chosen:'Order', searchPh:'Search exercise …', customAdd:'+ Custom exercise', customName:'Exercise name', muscle:'Muscle group', equipment:'Equipment', add:'Add exercise', save:'Save', saveN:n=>`Save (${n})`, needName:'Please enter a name and pick at least one exercise', needCustom:'Please enter the exercise name', saved:'Workout created', own:'Custom',
    pickEx:'Choose exercise', onlyFav:'Favourites only', notTrained:'not trained yet',
    groups:{chest:'Chest',shoulders:'Shoulders',triceps:'Triceps',back:'Back',biceps:'Biceps',legs:'Legs'}, eqs:{bb:'Barbell',db:'Dumbbell',cable:'Cable',machine:'Machine',bw:'Body weight'},
    wd:['Mo','Tu','We','Th','Fr','Sa','Su'],
    greet:{ morning:['Early bird, heavy weights.','Good morning. The dumbbells are waiting.','Coffee? After the last set.','Own the day. Start with training.','Train in the morning, proud all day.'],
      noon:['Lunch break? Make it a lift break.','Halfway through the day. Full power.','Short break, big weights.','The bench is free at noon.','Refuel with iron.'],
      afternoon:['Time to shake off the day.','Afternoon slump? Not you.','A little stronger than yesterday.','The best break is a good set.','Ready for a new record?'],
      evening:['Work is over. Training begins.','End the day with a strong set.','Good evening, powerhouse.','Others hit the couch. You hit the gym.','Tonight we pump.'],
      night:['Night owl in the gym. Respect.','The weights never sleep.','Late, but here.','Empty gym, open floor.','Midnight gains.'] } }
};
Object.assign(T.de, { anims:{ breath:'Puls', fill:'Füllen', shards:'Splitter', mosaic:'Mosaik', rings:'Ringe', segments:'Segmente', spin:'Rotation', stack:'Stapel', orbit:'Orbit', radar:'Radar', eq:'Equalizer', draw:'Zeichnen' },
  pulses:{ breathe:'Atmen', beat:'Herzschlag', wobble:'Wippen', bounce:'Hüpfen', tilt:'Kippen', squash:'Federn', twist:'Drehen', off:'Aus' },
  spProfile:'Profil', spDisplay:'Darstellung', spTrain:'Train', spProgress:'Fortschritt', spLogic:'Berechnungslogik', spData:'Daten', spBack:'Einstellungen',
  spDisplayHint:'Sprache, Farbumkehr', spTrainHint:'Puls- und Lade-Animationen', spProgressHint:'Trend-Farben, Prognose, Zeiträume', spLogicHint:'Points, Trends und Prognosen', spDataHint:'Speicher, Zurücksetzen, Version',
  fcTitle:'Prognose', fcHint:'Wie weit die gestrichelte Linie in die Zukunft reicht', fcOff:'Aus', weeksShort:'Wo.', lookTitle:'Rückblick', lookHint:'Wie viele Wochen in die Prognose einfließen', all:'Alle',
  infoFc:(l,h)=>`Trend aus ${l ? 'den letzten ' + l + ' Wochen' : 'allen Daten'}, ${h} Wochen fortgeschrieben, wie Excels logarithmische Trendlinie. Sie flacht ab, weil Fortschritt mit der Zeit langsamer wird. Grau = Unsicherheit. Zeiträume änderst du in Einstellungen → Fortschritt.`,
  logic:[
    ['Points (Vorschlag v2)', 'Points belohnen <b>Fortschritt</b> und <b>Regelmäßigkeit</b>, nicht möglichst viele Kilos.<br><b>1. Kraft pro Übung</b> (zählt ab 2 Sätzen): Bestes geschätztes 1RM heute vs. dein Bestwert der letzten 8 Wochen.<br>• Neuer Bestwert: <code>10 + 3 × Steigerung in %</code>, max. 40<br>• Gehalten (bis −3 %): 6 · Darunter: 2 · Erstes Mal: 5<br>Es zählen nur die 6 besten Übungen pro Training. Wiederholungen über 12 werden wie 12 gerechnet.<br><b>2. Regelmäßigkeit</b>: +10 pro Trainingstag (max. 5 Tage/Woche, mehrere Trainings am selben Tag zählen einmal), +15 Bonus für den 2. Trainingstag der Woche.<br><b>Warum schwer zu manipulieren?</b> Prozente statt Kilos (Curls = Beinpresse), keine Volumen-Punkte, Deckel pro Übung, Training und Woche.'],
    ['Maximalkraft (1RM)', T.de.info1rm],
    ['Volumen / bewegtes Gewicht', '<code>Gewicht × Wiederholungen</code>, über alle Sätze addiert. Unterstützung (Minus-Gewicht) zählt als 0.'],
    ['Arbeitsgewicht', 'Das schwerste Gewicht, das du in einem Training bei dieser Übung bewegt hast.'],
    ['Prognose', 'Logarithmische Trendlinie (kleinste Quadrate) über die Trainings im Rückblick-Zeitraum, an den letzten echten Wert angesetzt und um den Prognose-Zeitraum verlängert. Der graue Bereich ist die typische Abweichung der echten Werte von der Trendlinie und wächst pro Woche um 35 %.'],
    ['Trend-Farben', 'Grün, wenn der letzte Wert im Chart mindestens so hoch ist wie der erste; sonst rot.'],
    ['Neue Rekorde', 'Ein Training zählt als Rekord, wenn das geschätzte 1RM einer Übung höher ist als alle früheren Werte dieser Übung.'],
    ['Körpergewicht', 'Bei Dips, Klimmzügen & Co. zählt standardmäßig nur Zusatzgewicht. Mit „Körpergewicht mitzählen“ wird dein Körpergewicht addiert (Unterstützung wird abgezogen).'],
    ['Vergleich zur Vorwoche', 'Bewegtes Gewicht dieser Woche (ab Montag) im Vergleich zur kompletten Vorwoche.'] ],
  reseed:'Testdaten neu erzeugen', reseedText:'Ersetzt den Verlauf durch ca. 10 Wochen Beispieltrainings (nur Dev-Version).', ptsWeek:n=>`+${n} diese Woche`, edit:'Bearbeiten', doneEdit:'Fertig', editWorkout:'Workout bearbeiten', delWorkout:'Workout löschen', delWTitle:'Workout löschen?', delWText:'Bisherige Trainings bleiben im Verlauf erhalten.', delYes:'Löschen', keep:'Behalten',
  noData:'Noch keine Daten. Nach deinem ersten Training siehst du hier deinen Verlauf.', noPB:'Noch keine Rekorde, leg los!', noWorkouts:'Noch keine Workouts. Leg oben dein erstes an.', data:'Daten', localHint:'Alle Daten liegen nur auf diesem Gerät. Cloud-Speicherung kommt bald.',
  resetAll:'Alle Daten löschen', resetAllTitle:'Wirklich alle Daten löschen?', resetAllText:'Workouts, Verlauf und Einstellungen werden von diesem Gerät gelöscht. Das kann nicht rückgängig gemacht werden.', resetAllYes:'Ja, alles löschen', resetAllNo:'Abbrechen', version:'Version', readyHint:'Reihenfolge kannst du jetzt noch ändern, oder später im Workout.', resetTitle:'Satz-Timer zurücksetzen?', resetText:'Die bisherige Zeit wird der Pause davor zugerechnet.', resetYes:'Zurücksetzen', resetNo:'Abbrechen',
  perSet:'Geschätzte Maximalkraft (1RM) pro Satz', bestSet:'Bester Satz', vsLastTime:'vs. letztes Mal', strengthShort:'Kraft (1RM)', moreEx:'Weitere Übungen', profile:'Profil', profName:'Dein Name', account:'Account & Cloud-Sync', accountHint:'Kommt mit der Cloud-Version',
  display:'Darstellung', animations:'Animationen', pulseTitle:'Puls-Animation', pulseHint:'Für „Los geht’s“ und die GO-Buttons', 
  loadTitle:'Lade-Animation', loadHint:'Läuft beim Aufwärmen, im Training (im Zehneck oben) und beim Cooldown, dort rückwärts.', trendColor:'Trend-Farben', trendColorHint:'Charts grün bei Aufwärtstrend, rot bei Abwärtstrend',
  greet:{ morning:['Früher Vogel, schwere Gewichte.','Morgen! Die Hanteln warten.','Kaffee? Nach dem letzten Satz.','Der Tag gehört dir.','Morgens trainiert, ganztags stolz.'],
    noon:['Mittagspause? Trainingspause!','Halbzeit. Volle Kraft.','Kurze Pause, große Gewichte.','Mittags ist die Bank frei.','Energie tanken mit Eisen.'],
    afternoon:['Zeit, den Tag abzuschütteln.','Nachmittagstief? Nicht mit dir.','Stärker als gestern.','Die beste Pause: ein guter Satz.','Bereit für einen Rekord?'],
    evening:['Feierabend heißt Training.','Stark in den Feierabend.','Guten Abend, Kraftpaket.','Andere chillen. Du trainierst.','Heute Abend wird gepumpt.'],
    night:['Nachteule im Gym. Respekt!','Die Hanteln schlafen nie.','Spät dran, aber am Start.','Leeres Gym, freie Bahn.','Mitternachtsgains.'] } });
Object.assign(T.en, { anims:{ breath:'Pulse', fill:'Fill', shards:'Shards', mosaic:'Mosaic', rings:'Rings', segments:'Segments', spin:'Spin', stack:'Stack', orbit:'Orbit', radar:'Radar', eq:'Equalizer', draw:'Draw' },
  pulses:{ breathe:'Breathe', beat:'Heartbeat', wobble:'Wobble', bounce:'Bounce', tilt:'Tilt', squash:'Squash', twist:'Twist', off:'Off' },
  spProfile:'Profile', spDisplay:'Display', spTrain:'Train', spProgress:'Progress', spLogic:'Calculation logic', spData:'Data', spBack:'Settings',
  spDisplayHint:'Language, invert colours', spTrainHint:'Pulse and loading animations', spProgressHint:'Trend colours, forecast, time ranges', spLogicHint:'Points, trends and forecasts', spDataHint:'Storage, reset, version',
  fcTitle:'Forecast', fcHint:'How far the dashed line reaches into the future', fcOff:'Off', weeksShort:'wk', lookTitle:'Look-back', lookHint:'How many weeks feed into the forecast', all:'All',
  infoFc:(l,h)=>`Trend of ${l ? 'the last ' + l + ' weeks' : 'all data'}, extended by ${h} weeks, like Excel’s logarithmic trendline. It flattens because progress slows over time. Grey = uncertainty. Change the ranges in Settings → Progress.`,
  logic:[
    ['Points (proposal v2)', 'Points reward <b>progress</b> and <b>consistency</b>, not maximum kilos.<br><b>1. Strength per exercise</b> (from 2 sets): best estimated 1RM today vs. your best of the last 8 weeks.<br>• New best: <code>10 + 3 × increase in %</code>, max 40<br>• Held (down to −3 %): 6 · Below: 2 · First time: 5<br>Only the 6 best exercises per session count. Reps above 12 count as 12.<br><b>2. Consistency</b>: +10 per training day (max 5 days/week, several sessions on one day count once), +15 bonus for the 2nd training day of the week.<br><b>Why hard to game?</b> Percentages instead of kilos (curls = leg press), no volume points, caps per exercise, session and week.'],
    ['Max strength (1RM)', T.en.info1rm],
    ['Volume / weight moved', '<code>weight × reps</code>, summed over all sets. Assistance (negative weight) counts as 0.'],
    ['Working weight', 'The heaviest weight you moved for this exercise in a session.'],
    ['Forecast', 'Logarithmic trendline (least squares) over the sessions in the look-back range, attached to the last real value and extended by the forecast range. The grey area is the typical deviation of real values from the trendline and grows 35 % per week.'],
    ['Trend colours', 'Green if the last value in the chart is at least as high as the first; red otherwise.'],
    ['New records', 'A session counts as a record when the estimated 1RM of an exercise beats all earlier values of that exercise.'],
    ['Body weight', 'For dips, pull-ups & co. only extra weight counts by default. With “Count body weight” your body weight is added (assistance is subtracted).'],
    ['Vs. last week', 'Weight moved this week (since Monday) compared with the whole previous week.'] ],
  reseed:'Regenerate test data', reseedText:'Replaces the history with about 10 weeks of sample sessions (dev version only).', ptsWeek:n=>`+${n} this week`, edit:'Edit', doneEdit:'Done', editWorkout:'Edit workout', delWorkout:'Delete workout', delWTitle:'Delete workout?', delWText:'Past sessions stay in your history.', delYes:'Delete', keep:'Keep',
  noData:'No data yet. After your first session you will see your progress here.', noPB:'No records yet, let’s go!', noWorkouts:'No workouts yet. Create your first one above.', data:'Data', localHint:'All data is stored on this device only. Cloud sync is coming soon.',
  resetAll:'Delete all data', resetAllTitle:'Really delete all data?', resetAllText:'Workouts, history and settings will be removed from this device. This cannot be undone.', resetAllYes:'Yes, delete everything', resetAllNo:'Cancel', version:'Version', readyHint:'You can still change the order now, or later during the workout.', resetTitle:'Reset set timer?', resetText:'The time so far is added to the rest before.', resetYes:'Reset', resetNo:'Cancel',
  perSet:'Estimated max strength (1RM) per set', bestSet:'Best set', vsLastTime:'vs. last time', strengthShort:'Strength (1RM)', moreEx:'More exercises', profile:'Profile', profName:'Your name', account:'Account & cloud sync', accountHint:'Coming with the cloud version',
  display:'Display', animations:'Animations', pulseTitle:'Pulse animation', pulseHint:'For “Let’s go” and the GO buttons', 
  loadTitle:'Loading animation', loadHint:'Runs during warm-up, training (in the decagon on top) and cool-down, reversed there.', trendColor:'Trend colours', trendColorHint:'Charts green when trending up, red when trending down',
  greet:{ morning:['Early bird, heavy weights.','Morning! The weights are waiting.','Coffee? After the last set.','Own the day.','Train early, proud all day.'],
    noon:['Lunch break? Lift break!','Halftime. Full power.','Short break, big weights.','The bench is free at noon.','Refuel with iron.'],
    afternoon:['Shake off the day.','Afternoon slump? Not you.','Stronger than yesterday.','Best break: a good set.','Ready for a record?'],
    evening:['Work is over. Training begins.','Finish the day strong.','Good evening, powerhouse.','Others chill. You train.','Tonight we pump.'],
    night:['Night owl in the gym. Respect!','The weights never sleep.','Late, but here.','Empty gym, open floor.','Midnight gains.'] } });
Object.assign(T.de, { trcBW:'Original (Schwarz-Weiß)', trcColor:'Rot-Grün', spProgressHint:'Prognose & Rückblick', spDisplayHint:'Sprache, Farbumkehr, Trend-Farben, Animationen', trendColorHint:'Wie Linien in den Fortschritt-Charts eingefärbt werden', chStrength:'Maximalkraft (geschätzt)', strengthShort:'Maximalkraft (geschätzt)', setEnd:'Satz beenden', nextExArrow:'Nächste Übung', resetLbl:'Reset', volTotal:'Volumen gesamt',
  metrics:{ vol:'Volumen pro Satz', reps:'Wiederholungen pro Satz', orm:'Maximalkraft (geschätzt) pro Satz' }, allSets:'Alle Übungen & Sätze', setN:n=>`Satz ${n}`, lastShort2:'letztes Mal',
  spProfileHint:'Persönliche Infos & Account', spDisplayHint:'Sprache, Farbumkehr, Animationen', age:'Alter', ageHint:'Optional, später z. B. für Altersvergleiche', spImprint:'Impressum', spImprintHint:'Anbieterkennzeichnung',
  editW:'Workout bearbeiten', addEx:'+ Übung hinzufügen', removeEx:'Übung entfernen', setsLbl:'Sätze', minutes:'Minuten', vsLastShort:'vs. Vorwoche',
  readyHint:'Tippe auf eine Übung, um Sätze und Gewicht anzupassen. Reihenfolge per Ziehen am Griff.',
  imprint:'<p><b>Angaben gemäß § 5 DDG</b><br>[Vorname Nachname]<br>[Straße Hausnummer]<br>[PLZ Ort]</p><p><b>Kontakt</b><br>E-Mail: [E-Mail-Adresse]</p><p><b>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</b><br>[Vorname Nachname], Anschrift wie oben</p><p><b>Haftung für Inhalte</b><br>Die Inhalte dieser App wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte, insbesondere berechneter Werte wie Maximalkraft oder Prognosen, wird keine Gewähr übernommen. Die App ersetzt keine fachliche Trainings- oder medizinische Beratung.</p>' });
Object.assign(T.en, { trcBW:'Original (black & white)', trcColor:'Red-green', spProgressHint:'Forecast & look-back', spDisplayHint:'Language, invert colours, trend colours, animations', trendColorHint:'How lines in the progress charts are coloured', chStrength:'Max strength (estimated)', strengthShort:'Max strength (estimated)', setEnd:'End set', nextExArrow:'Next exercise', resetLbl:'Reset', volTotal:'Total volume',
  metrics:{ vol:'Volume per set', reps:'Reps per set', orm:'Max strength (estimated) per set' }, allSets:'All exercises & sets', setN:n=>`Set ${n}`, lastShort2:'last time',
  spProfileHint:'Personal info & account', spDisplayHint:'Language, invert colours, animations', age:'Age', ageHint:'Optional, later e.g. for age comparisons', spImprint:'Imprint', spImprintHint:'Legal notice',
  editW:'Edit workout', addEx:'+ Add exercise', removeEx:'Remove exercise', setsLbl:'Sets', minutes:'Minutes', vsLastShort:'vs. last week',
  readyHint:'Tap an exercise to adjust sets and weight. Drag the handle to reorder.',
  imprint:'<p><b>Information according to § 5 DDG (Germany)</b><br>[First name Last name]<br>[Street No.]<br>[Postcode City]</p><p><b>Contact</b><br>Email: [email address]</p><p><b>Responsible for content (§ 18 (2) MStV)</b><br>[First name Last name], address as above</p><p><b>Liability</b><br>The content of this app was created with great care. No guarantee is given for the accuracy, completeness or timeliness of the content, in particular calculated values such as max strength or forecasts. The app does not replace professional training or medical advice.</p>' });
const MORE_GREET = {
  de:{ morning:['Erst Eisen, dann E-Mails.','Wach werden mit Gewichten.','Guter Start: ein guter Satz.','Der frühe Vogel stemmt mehr.','Morgenstund hat Gold in den Muskeln.'],
    noon:['Mittagstief? Wegdrücken.','Lunch kann warten.','Halber Tag, volle Power.','Kurz raus, stark zurück.','Mittags ist Gym-Zeit.'],
    afternoon:['Nachmittag. Zeit für Fortschritt.','Ein Satz geht immer.','Vom Schreibtisch an die Hantel.','Heute wird’s schwer. Gut so.','Zeig dem Tag, wer stärker ist.'],
    evening:['Abendprogramm: Eisen.','Den Tag stark beenden.','Couch? Später.','Feierabend-Gains warten.','Letzte Chance für heute.'],
    night:['Spätschicht im Gym.','Nachts sind die Gains am größten.','Die Stadt schläft, du nicht.','Licht an, Gewichte hoch.','Noch ein Satz vorm Schlafen.'] },
  en:{ morning:['Iron first, emails later.','Wake up with weights.','Good start: a good set.','The early bird lifts more.','Morning gains hit different.'],
    noon:['Midday slump? Press it away.','Lunch can wait.','Half the day, full power.','Step out, come back strong.','Noon is gym time.'],
    afternoon:['Afternoon. Time for progress.','One more set always works.','From desk to dumbbell.','Today gets heavy. Good.','Show the day who’s stronger.'],
    evening:['Evening plan: iron.','Finish the day strong.','Couch? Later.','After-work gains are waiting.','Last chance for today.'],
    night:['Night shift at the gym.','Night gains are real.','The city sleeps, you don’t.','Lights on, weights up.','One more set before bed.'] } };
MORE_GREET.de.morning.push('Pre-Workout statt Kaffee?'); MORE_GREET.de.noon.push('Protein-Shake schon bereit?'); MORE_GREET.de.afternoon.push('Pre-Workout wirkt. Los.'); MORE_GREET.de.evening.push('Erst Training, dann Protein.'); MORE_GREET.de.night.push('Pre-Workout um diese Zeit? Mutig.');
MORE_GREET.en.morning.push('Pre-workout instead of coffee?'); MORE_GREET.en.noon.push('Protein shake ready?'); MORE_GREET.en.afternoon.push('Pre-workout kicked in. Go.'); MORE_GREET.en.evening.push('Train first, protein after.'); MORE_GREET.en.night.push('Pre-workout at this hour? Bold.');
['de', 'en'].forEach(l => Object.keys(MORE_GREET[l]).forEach(k => { T[l].greet[k] = T[l].greet[k].concat(MORE_GREET[l][k]); }));
const SLOGANS = {
  de:{ any:['Stark. Workout erledigt.','Das war Arbeit. Gute Arbeit.','Eisen bewegt. Ziel erreicht.','Heute stärker als gestern.','Abgehakt. Erhol dich gut.','Saubere Leistung.','Mission erfüllt.','Das zählt.','Wieder ein Schritt nach vorn.','So baut man Stärke.','Gezogen, gedrückt, geschafft.','Disziplin schlägt Motivation.'],
    morning:['Der Tag hat stark angefangen.','Frühsport erledigt. Respekt.','Bevor andere wach sind: fertig.','Morgen-Workout: abgehakt.'],
    day:['Pause sinnvoll genutzt.','Mittendrin und durchgezogen.','Nachmittag gewonnen.','Produktiver geht’s nicht.'],
    evening:['Stark in den Feierabend.','Abend gut investiert.','Der Tag endet mit einem Sieg.','Jetzt hast du dir das Sofa verdient.'],
    night:['Nachtschicht erledigt.','Spät, aber durchgezogen.','Die Hanteln schlafen, du hast gewonnen.','Mitternachtsgains gesichert.'],
    pr:['Neuer Rekord! Stark.','Rekord geknackt.','Stärker als je zuvor.','Persönliche Bestleistung!','Grenze verschoben.','Das war ein PR.'] },
  en:{ any:['Strong. Workout done.','That was work. Good work.','Iron moved. Goal reached.','Stronger than yesterday.','Done. Recover well.','Clean performance.','Mission complete.','That counts.','Another step forward.','That’s how strength is built.','Pulled, pushed, done.','Discipline beats motivation.'],
    morning:['The day started strong.','Morning session done. Respect.','Done before others wake up.','Morning workout: checked.'],
    day:['Break well spent.','Right in the middle, pushed through.','Afternoon won.','Can’t get more productive.'],
    evening:['Strong into the evening.','Evening well invested.','The day ends with a win.','Now you’ve earned the couch.'],
    night:['Night shift done.','Late, but pushed through.','The weights sleep, you won.','Midnight gains secured.'],
    pr:['New record! Strong.','Record broken.','Stronger than ever.','Personal best!','Limit moved.','That was a PR.'] } };
SLOGANS.de.any.push('Jetzt ein Protein-Shake. Verdient.', 'Das Pre-Workout hat geliefert.', 'Die Muskeln rufen nach Protein.');
SLOGANS.en.any.push('Protein shake time. Earned.', 'The pre-workout delivered.', 'Your muscles are calling for protein.');
function pickSlogan(pr) {
  const L = SLOGANS[S.lang], h = new Date().getHours(), slot = h >= 5 && h < 11 ? 'morning' : h >= 11 && h < 18 ? 'day' : h >= 18 && h < 23 ? 'evening' : 'night';
  const pool = pr ? L.pr : L.any.concat(L[slot], L[slot]); return pool[Math.floor(Math.random() * pool.length)];
}
Object.assign(T.de, { share:'Mit Freunden teilen', shareHint:'QR-Code & Link zur App', shareText:'Lass deine Freunde den QR-Code scannen oder schick ihnen den Link.', copyLink:'Link kopieren', copied:'Link kopiert', shareNative:'Teilen …', introTitle:'Intro', introHint:'Animation beim Öffnen der App, antippen für Vorschau', intros:{ spin:'Intro 1 Zehneck', type:'Intro 2 Motivation', tear:'Intro 3 Riss', vortex:'Intro 4 Spin', off:'Aus' }, devShow:'Dev-Werkzeuge', setAdd:'+ Satz hinzufügen', delSetT:'Satz löschen?', delSetX:'Ist es der letzte Satz, wird die ganze Übung entfernt.', delExT:'Übung löschen?', delExX:'Die Übung und ihre Sätze werden aus diesem Workout entfernt.', delYes2:'Löschen', delNo:'Behalten', swipeDel:'Löschen', lastEx:'Mindestens eine Übung muss bleiben', warmCancel:'Abbrechen', accT:'Aus Versehen gestartet?', accX:'Das Workout wird abgebrochen, es wird nichts gespeichert.', accNo:'Nein, weiter aufwärmen', accYes:'Ja, abbrechen', celebTitle:'Celebration', celebHint:'Effekt beim Abschluss eines Workouts, antippen für Vorschau', celebs:{ confetti:'Konfetti', colorconf:'Konfetti bunt', cannons:'Kanonen', fireworks:'Feuerwerk', decagons:'Zehnecke', stars:'Sterne', streamers:'Luftschlangen', glitter:'Glitzer', plates:'Hantelscheiben', shock:'Druckwelle', fountain:'Fontäne', off:'Aus' },
  privacy:'Datenschutzerklärung', privacyHint:'Entwurf', devTools:'Dev-Werkzeuge', devOnb:'Onboarding ansehen', devIntro:'Intro ansehen', devCeleb:'Celebration testen',
  onbSkip:'Überspringen', onbNext:'Weiter', onbGo:'Los geht’s',
  privacyHtml:'<p><i>Entwurf, Stand November 2026. Wird mit Einführung von Accounts/Cloud aktualisiert.</i></p><p><b>1. Verantwortlicher</b><br>[Vorname Nachname], [Anschrift], [E-Mail]</p><p><b>2. Grundsatz: Deine Daten bleiben auf deinem Gerät</b><br>Alle Eingaben, Workouts, Trainings, Sätze sowie Profilangaben wie Name, Alter und Körpergewicht, werden ausschließlich lokal im Speicher deines Browsers (localStorage) auf deinem Gerät gespeichert. Sie werden nicht an uns oder Dritte übertragen. Es gibt keine Registrierung, kein Tracking, keine Analyse-Tools, keine Werbung und keine Cookies.</p><p><b>3. Gesundheitsbezogene Daten</b><br>Körpergewicht und Trainingsdaten können Gesundheitsdaten im Sinne von Art. 9 DSGVO sein. Sie verlassen dein Gerät nicht.</p><p><b>4. Hosting (GitHub Pages)</b><br>Die App wird über GitHub Pages (GitHub Inc., USA) bereitgestellt. Beim Aufruf verarbeitet GitHub technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt, Browser) in Server-Logs, um die App auszuliefern und abzusichern. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Die Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework.</p><p><b>5. Schriftarten</b><br>Derzeit werden Schriftarten von Google Fonts (Google Ireland Ltd.) geladen; dabei wird deine IP-Adresse an Google übertragen. Vor einer Veröffentlichung werden die Schriften lokal eingebunden.</p><p><b>6. Speicherdauer</b><br>Die Daten bleiben gespeichert, bis du sie in der App löschst (Einstellungen → Daten) oder die App bzw. die Browserdaten entfernst.</p><p><b>7. Deine Rechte</b><br>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde.</p>',
  accentTitle:'Akzentfarben', accentHint:'Färbt Veränderungen ▲▼ grün oder rot', accNeutral:'Neutral', accColor:'Farbig', fullCal:'Ganzer Kalender ▾', lessCal:'Weniger ▴' });
Object.assign(T.en, { share:'Share with friends', shareHint:'QR code & link to the app', shareText:'Let your friends scan the QR code or send them the link.', copyLink:'Copy link', copied:'Link copied', shareNative:'Share …', introTitle:'Intro', introHint:'Animation when opening the app, tap to preview', intros:{ spin:'Intro 1 Decagon', type:'Intro 2 Motivation', tear:'Intro 3 Tear', vortex:'Intro 4 Spin', off:'Off' }, devShow:'Dev tools', setAdd:'+ Add set', delSetT:'Delete set?', delSetX:'If it is the last set, the whole exercise is removed.', delExT:'Delete exercise?', delExX:'The exercise and its sets are removed from this workout.', delYes2:'Delete', delNo:'Keep', swipeDel:'Delete', lastEx:'At least one exercise must remain', warmCancel:'Cancel', accT:'Started by accident?', accX:'The workout is cancelled, nothing is saved.', accNo:'No, keep warming up', accYes:'Yes, cancel', celebTitle:'Celebration', celebHint:'Effect when you finish a workout, tap to preview', celebs:{ confetti:'Confetti', colorconf:'Colour confetti', cannons:'Cannons', fireworks:'Fireworks', decagons:'Decagons', stars:'Stars', streamers:'Streamers', glitter:'Glitter', plates:'Weight plates', shock:'Shockwave', fountain:'Fountain', off:'Off' },
  privacy:'Privacy policy', privacyHint:'Draft', devTools:'Dev tools', devOnb:'Show onboarding', devIntro:'Show intro', devCeleb:'Test celebration',
  onbSkip:'Skip', onbNext:'Next', onbGo:'Let’s go',
  privacyHtml:'<p><i>Draft, November 2026. Will be updated when accounts/cloud sync are introduced.</i></p><p><b>1. Controller</b><br>[First name Last name], [address], [email]</p><p><b>2. Principle: your data stays on your device</b><br>All entries, workouts, sessions, sets and profile data such as name, age and body weight, are stored only locally in your browser storage (localStorage) on your device. They are not transmitted to us or third parties. There is no registration, no tracking, no analytics, no ads and no cookies.</p><p><b>3. Health-related data</b><br>Body weight and training data may be health data under Art. 9 GDPR. They do not leave your device.</p><p><b>4. Hosting (GitHub Pages)</b><br>The app is served via GitHub Pages (GitHub Inc., USA). When you open it, GitHub processes technically necessary data (e.g. IP address, time, browser) in server logs to deliver and secure the app. Legal basis: Art. 6 (1) (f) GDPR. Transfer to the USA is based on the EU-US Data Privacy Framework.</p><p><b>5. Fonts</b><br>Fonts are currently loaded from Google Fonts (Google Ireland Ltd.), which transmits your IP address to Google. Before publication the fonts will be hosted locally.</p><p><b>6. Storage period</b><br>Data is kept until you delete it in the app (Settings → Data) or remove the app or browser data.</p><p><b>7. Your rights</b><br>You have the right to access, rectification, erasure, restriction, data portability and objection, and to lodge a complaint with a supervisory authority.</p>',
  accentTitle:'Accent colours', accentHint:'Colours changes ▲▼ green or red', accNeutral:'Neutral', accColor:'Coloured', fullCal:'Full calendar ▾', lessCal:'Less ▴' });
T.de.groups.core = 'Bauch'; T.en.groups.core = 'Core';
Object.assign(T.de, { filter:'Filter', sortBy:'Sortieren', sorts:{ az:'A–Z', fav:'Favoriten zuerst', recent:'Zuletzt trainiert', group:'Muskelgruppe' }, fReset:'Zurücksetzen', fApply:n=>`${n} Übungen anzeigen`, noMatch:'Keine Übung passt zu Suche/Filter.' });
Object.assign(T.en, { filter:'Filter', sortBy:'Sort', sorts:{ az:'A–Z', fav:'Favourites first', recent:'Recently trained', group:'Muscle group' }, fReset:'Reset', fApply:n=>`Show ${n} exercises`, noMatch:'No exercise matches search/filter.' });
Object.assign(T.de, {
  info1rm:'<b>Maximalkraft (1RM)</b><br>Das Gewicht, das du genau einmal schaffen würdest. Wir schätzen es aus deinen Sätzen mit der Epley-Formel:<br><code>1RM = Gewicht × (1 + Wdh. ÷ 30)</code><br>Beispiel: 60 kg × 10 Wdh. ergibt 80 kg.',
  infoFc:(l, h) => `<b>So entsteht die Prognose</b><br>Wir legen eine Trendkurve durch deine Werte ${l ? 'der letzten ' + l + ' Wochen' : 'aller Trainings'} und verlängern sie um ${h} Wochen:<br><code>Wert = a + b × ln(Woche)</code><br>Die Kurve flacht ab, weil Fortschritt mit der Zeit langsamer wird. Der graue Bereich zeigt, wie unsicher die Prognose ist.`,
  strengthShort:'Maximalkraft', rename:'Name ändern', delToday:'Nur für dieses Training', delPerm:n => `Dauerhaft aus „${n}“ entfernen`, delSetToday:'Nur für dieses Training', delSetPerm:n => `Dauerhaft aus „${n}“ löschen`,
  delWT:'Workout löschen?', delWX:'Das Workout verschwindet aus deiner Liste. Bisherige Trainings bleiben im Verlauf.', never:'Doch nicht', addCustom:'Übung hinzufügen', todayShort:'Heute',
  sorts:{ az:'A–Z', fav:'Favoriten', recent:'Zuletzt' } });
Object.assign(T.en, {
  info1rm:'<b>Max strength (1RM)</b><br>The weight you could lift exactly once. We estimate it from your sets with the Epley formula:<br><code>1RM = weight × (1 + reps ÷ 30)</code><br>Example: 60 kg × 10 reps gives 80 kg.',
  infoFc:(l, h) => `<b>How the forecast works</b><br>We fit a trend curve through your values ${l ? 'of the last ' + l + ' weeks' : 'of all sessions'} and extend it by ${h} weeks:<br><code>value = a + b × ln(week)</code><br>The curve flattens because progress slows over time. The grey area shows how uncertain the forecast is.`,
  strengthShort:'Max strength', rename:'Rename', delToday:'Only for this session', delPerm:n => `Remove from “${n}” for good`, delSetToday:'Only for this session', delSetPerm:n => `Delete from “${n}” for good`,
  delWT:'Delete workout?', delWX:'The workout disappears from your list. Past sessions stay in your history.', never:'Never mind', addCustom:'Add exercise', todayShort:'Today',
  sorts:{ az:'A–Z', fav:'Favourites', recent:'Recent' } });
const t = (k, ...a) => { const v = T[S.lang][k]; return typeof v === 'function' ? v(...a) : v; };
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const loc = () => S.lang === 'de' ? 'de-DE' : 'en-GB';
const fmt = (n, d=0) => n.toLocaleString(loc(), { minimumFractionDigits:d, maximumFractionDigits:d });
const fmtW = w => { const r = Math.round(w * 100) / 100; const d = Number.isInteger(r) ? 0 : Number.isInteger(r * 10) ? 1 : 2; return fmt(r, d); };
const parseNum = v => { const n = parseFloat(String(v).replace(',', '.').replace('−', '-')); return isNaN(n) ? null : n; };
const exName = k => EX[k].custom ? EX[k].de : EX[k][S.lang];
const isBW = k => EX[k].eq === 'bw';
const wLabel = (k, w) => isBW(k) ? t('bwLabel', fmtW(w)) : fmtW(w) + ' kg';
const mmss = s => { s = Math.max(0, Math.floor(s)); const h = Math.floor(s/3600), m = Math.floor(s%3600/60), x = s%60; return (h ? h + ':' + String(m).padStart(2,'0') : String(m).padStart(2,'0')) + ':' + String(x).padStart(2,'0'); };
const e1rm = (w, r) => w * (1 + r / 30);
const effW = (k, w) => isBW(k) ? (S.bwPoints && S.bodyweight ? S.bodyweight + w : w) : w;
const dayDate = ago => { const d = new Date(); d.setHours(12,0,0,0); d.setDate(d.getDate() - ago); return d; };
const dShort = d => d.toLocaleDateString(loc(), { day:'2-digit', month:'2-digit' });
const wById = id => workouts.find(w => w.id === id);
const ptsOf = vol => Math.max(5, Math.round(vol / 250)); // old placeholder, no longer used for points
// ---- Points v2 (proposal, to be discussed): progress in max strength + consistency, hard to game ----
const PTS = { lookbackDays: 56, repCap: 12, minSets: 2, exCap: 6, first: 5, newBest: 10, perPct: 3, maxEx: 40, hold: 6, holdBand: .03, base: 2, workout: 10, weekDays: 5, secondDay: 15 };
const bestOf = e => Math.max(0, ...e.sets.map(s => e1rm(Math.max(0, effW(e.k, s.w)), Math.min(s.r, PTS.repCap))));
const monday = ts => { const d = new Date(dayStart(ts)); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return d.getTime(); };
function sessionPoints(ex, date) {
  const prior = HISTORY.filter(h => h.date < date);
  const scores = [];
  ex.forEach(e => {
    if (!EX[e.k] || e.sets.length < PTS.minSets) return; const b = bestOf(e); if (b <= 0) return;
    const ref = Math.max(0, ...prior.filter(h => h.date >= date - PTS.lookbackDays * 864e5).flatMap(h => h.ex.filter(x => x.k === e.k).map(bestOf)));
    if (!ref) { scores.push(PTS.first); return; }
    const p = b / ref - 1;
    scores.push(p > 0 ? Math.min(PTS.maxEx, PTS.newBest + Math.round(p * 100 * PTS.perPct)) : p >= -PTS.holdBand ? PTS.hold : PTS.base);
  });
  const exPts = scores.sort((a, b) => b - a).slice(0, PTS.exCap).reduce((a, b) => a + b, 0);
  const day = dayStart(date), days = new Set(prior.filter(h => h.date >= monday(date)).map(h => dayStart(h.date)));
  const cons = days.has(day) ? 0 : (days.size < PTS.weekDays ? PTS.workout : 0) + (days.size === 1 ? PTS.secondDay : 0);
  return exPts + cons;
}
const ptsFor = h => sessionPoints(h.ex, h.date);
const totalPts = () => HISTORY.reduce((a, h) => a + ptsFor(h), 0);
function weekStats() { const dow = (new Date().getDay() + 6) % 7; const cur = HISTORY.filter(h => h.ago <= dow), prev = HISTORY.filter(h => h.ago > dow && h.ago <= dow + 7); const v1 = cur.reduce((a, h) => a + sessVol(h), 0), v0 = prev.reduce((a, h) => a + sessVol(h), 0); const m1 = cur.reduce((a, h) => a + (h.dur || 0), 0), m0 = prev.reduce((a, h) => a + (h.dur || 0), 0); return { n: cur.length, n0: prev.length, vol: v1, vol0: v0, min: m1, min0: m0, pct: v0 ? Math.round((v1 / v0 - 1) * 100) : null, pts: cur.reduce((a, h) => a + ptsFor(h), 0) }; }
const deltaTag = (a, b, abs) => { if (!b && !a) return ''; if (!b) return '<em class="dl up">▲</em>'; const d = abs ? a - b : Math.round((a / b - 1) * 100); if (d === 0) return '<em class="dl">±0</em>'; return `<em class="dl ${d > 0 ? 'up' : 'down'}">${d > 0 ? '▲' : '▼'} ${Math.abs(d)}${abs ? '' : ' %'}</em>`; };
const pctTag = d => d === null || d === undefined || d === 0 ? '' : `<em class="dl ${d > 0 ? 'up' : d < 0 ? 'down' : ''}">${d > 0 ? '▲' : d < 0 ? '▼' : '='} ${Math.abs(d)} %</em>`;
function prCount(days) { let n = 0; const seen = {}; [...HISTORY].sort((a, b) => b.ago - a.ago || a.date - b.date).forEach(h => h.ex.forEach(e => { const b = Math.max(...e.sets.map(s => e1rm(Math.max(0, effW(e.k, s.w)), s.r))); if (b > 0 && seen[e.k] !== undefined && b > seen[e.k] && h.ago < days) n++; seen[e.k] = Math.max(seen[e.k] ?? 0, b); })); return n; }
const volTxt = v => v >= 1000 ? fmt(v / 1000, 1) + ' t' : fmt(Math.round(v)) + ' kg';
const sessVol = h => h.ex.reduce((a, e) => a + e.sets.reduce((b, s) => b + Math.max(0, effW(e.k, s.w)) * s.r, 0), 0);
function sessionsFor(k) { // newest first
  return HISTORY.filter(h => h.ex.some(e => e.k === k)).sort((a, b) => a.ago - b.ago || b.date - a.date).map(h => { const e = h.ex.find(x => x.k === k);
    const top = e.sets.reduce((b, s) => s.w > b.w ? s : b, e.sets[0]); const best = Math.max(...e.sets.map(s => e1rm(effW(k, s.w), s.r)));
    return { ago:h.ago, date:h.date, top, best, vol: e.sets.reduce((a, s) => a + Math.max(0, effW(k, s.w)) * s.r, 0), sets:e.sets }; });
}
const LAST = {}; Object.keys(EX).forEach(k => { const s = sessionsFor(k)[0]; if (s) LAST[k] = [s.top.w, s.top.r]; });
function lastAgoW(id) { const h = HISTORY.filter(x => x.wid === id).sort((a,b) => a.ago - b.ago)[0]; return h ? h.ago : null; }
function lastAgoEx(k) { const s = sessionsFor(k)[0]; return s ? s.ago : null; }
function toast(msg) { const d = document.createElement('div'); d.className = 'toast'; d.textContent = msg; $('app').appendChild(d); setTimeout(() => d.remove(), 2200); }
function greeting() { const h = new Date().getHours(); const slot = h >= 5 && h < 11 ? 'morning' : h >= 11 && h < 14 ? 'noon' : h >= 14 && h < 18 ? 'afternoon' : h >= 18 && h < 22 ? 'evening' : 'night'; const l = t('greet')[slot]; return l[Math.floor(Math.random() * l.length)]; }
let greetText = '';
const ICON = {
  bb:'<path d="M.8 12h22.4"/><rect x="2.6" y="8" width="1.8" height="8" rx=".3"/><rect x="4.6" y="9.3" width="1.2" height="5.4" rx=".3"/><rect x="19.6" y="8" width="1.8" height="8" rx=".3"/><rect x="18.2" y="9.3" width="1.2" height="5.4" rx=".3"/>',
  db:'<path d="M8.5 12h7"/><rect x="5" y="7" width="3.5" height="10" rx=".6"/><rect x="15.5" y="7" width="3.5" height="10" rx=".6"/><rect x="2.5" y="9" width="2.5" height="6" rx=".4"/><rect x="19" y="9" width="2.5" height="6" rx=".4"/>',
  cable:'<path d="M6 2h12"/><circle cx="12" cy="4.6" r="1.6"/><path d="M12 6.2v7"/><path d="M12 13.2l-3.4 4.6M12 13.2l3.4 4.6"/><rect x="7.2" y="17.4" width="2.6" height="3.8" rx=".9" fill="currentColor"/><rect x="14.2" y="17.4" width="2.6" height="3.8" rx=".9" fill="currentColor"/>',
  cableOld:'<path d="M3 2.5h18"/><path d="M12 2.5v1.5"/><circle cx="12" cy="6.5" r="2.5"/><circle cx="12" cy="6.5" r=".6"/><path d="M12 9v7"/><path d="M12 16l-3 2.5M12 16l3 2.5"/><path d="M7 18.5h10v2.5H7z"/>',
  machine:'<path d="M8.5 2.5v6M15.5 2.5v6"/><rect x="6" y="8.5" width="12" height="13" rx=".5"/><path d="M6 11.7h12M6 14.9h12M6 18.1h12"/><path d="M12 13.3h7.5"/>',
  bw:'<path d="M2.5 3h19"/><path d="M7 3l3.5 6.5M17 3l-3.5 6.5"/><circle cx="12" cy="9.2" r="2"/><path d="M12 11.2v5.8M12 17l-2.2 4.5M12 17l2.2 4.5"/>',
  custom:'<path d="M12 5v14M5 12h14"/>' };
const ICON_EX = {
  seatedcalf:'<path d="M2.5 13.5h7.5M4 13.5v8.5"/><circle cx="5.8" cy="4.6" r="1.6"/><path d="M5.8 6.2v7.3"/><path d="M5.8 13.5H11"/><path d="M11 13.5v5.6"/><path d="M9.6 11.8h4.8M14.4 11.8V5"/><path d="M10.2 19.4h3.4"/><path d="M9.5 21.5h6"/><path d="M19 17.5v-5M17.5 14.1l1.5-1.6 1.5 1.6"/>',
  benchdips:'<path d="M2 13h7.5M3.2 13v8.5M8.3 13v8.5"/><path d="M7.6 13l1.4-4.2"/><circle cx="10" cy="6.6" r="1.6"/><path d="M9.6 8.2l1.4 6.2"/><path d="M11 14.4h6"/><path d="M17 14.4v6.6"/><path d="M17 21h2.5"/>',
  abwheel:'<path d="M1.5 21.5h21"/><circle cx="18.6" cy="19" r="2.4"/><circle cx="18.6" cy="19" r=".6" fill="currentColor"/><path d="M4.6 20.8l4-3.8"/><path d="M8.6 17l6.8-3"/><circle cx="17" cy="12.6" r="1.5"/><path d="M15.4 14l2.8 4.6"/>',
  abductor:'<circle cx="12" cy="3.8" r="1.7"/><path d="M12 5.5v8.5"/><path d="M6.5 14h11"/><path d="M12 14l-4 7M12 14l4 7"/><rect x="4.4" y="16.5" width="1.6" height="3.6" rx=".5" fill="currentColor"/><rect x="18" y="16.5" width="1.6" height="3.6" rx=".5" fill="currentColor"/><path d="M4 12.5H1.2M2.6 11l-1.4 1.5 1.4 1.5M20 12.5h2.8M21.4 11l1.4 1.5-1.4 1.5"/>',
  adductor:'<circle cx="12" cy="3.8" r="1.7"/><path d="M12 5.5v8.5"/><path d="M6.5 14h11"/><path d="M12 14l-4 7M12 14l4 7"/><rect x="6.3" y="16.5" width="1.6" height="3.6" rx=".5" fill="currentColor"/><rect x="16.1" y="16.5" width="1.6" height="3.6" rx=".5" fill="currentColor"/><path d="M1.5 18.3h3M3.3 16.8l1.5 1.5-1.5 1.5M22.5 18.3h-3M20.7 16.8l-1.5 1.5 1.5 1.5"/>',
  hack:'<path d="M15.5 2l5 19.5M13.5 21.5h9"/><circle cx="13" cy="3.6" r="1.5"/><path d="M13.6 5.2l2.3 8.6"/><path d="M15.9 13.8l-4.6 2.6"/><path d="M11.3 16.4l2.4 5.1"/><path d="M12.2 7.6l3.8-1"/>',
  machrow:'<path d="M3.5 15.5h8M5 15.5v6.5M10 15.5v6.5"/><circle cx="6.8" cy="5.6" r="1.6"/><path d="M6.8 7.2v8.3"/><path d="M6.8 10.4h4.4l1.4-1.6"/><path d="M14.2 6.2v8.2"/><path d="M12.6 8.8h6"/><path d="M20 3v19"/>',
  hyperext:'<path d="M2 21.5h20"/><path d="M4 21.5l4.5-7.5M15 21.5l-4.5-7.5"/><path d="M8.5 14h5"/><path d="M5.5 19.3l-1.6-1"/><path d="M4.6 18.8l6.4-5.6"/><path d="M11 13.2l6.4-5.4"/><circle cx="18.9" cy="6.5" r="1.6"/><path d="M15.6 9.3l-3.6 1.2"/><path d="M18.6 14.4a5 5 0 0 0 2.6-3.6M21.2 10.8l-1.5 1M21.2 10.8l.6 1.7"/>',
  reversefly:'<rect x="10.4" y="8" width="3.2" height="7" rx=".5"/><circle cx="12" cy="4.6" r="1.8"/><path d="M12 6.4v1.6"/><path d="M10.4 9.2H4.6M13.6 9.2h5.8"/><rect x="2.6" y="7" width="2" height="4.6" rx=".5" fill="currentColor"/><rect x="19.4" y="7" width="2" height="4.6" rx=".5" fill="currentColor"/><path d="M10.6 15l-1.4 6.5M13.4 15l1.4 6.5"/><path d="M7.5 18h9"/><path d="M1.5 14.5h3.5M2.8 13.2l-1.3 1.3 1.3 1.3M22.5 14.5H19M21.2 13.2l1.3 1.3-1.3 1.3"/>',
  russian:'<path d="M2 21h20"/><circle cx="5.2" cy="8.8" r="1.6"/><path d="M5.8 10.4l3.7 9.6"/><path d="M9.5 20l5-6.2"/><path d="M14.5 13.8l5.6 2.4"/><path d="M6.6 12.6l5.4 2.8"/><circle cx="13" cy="15.8" r="1.3" fill="currentColor"/><path d="M15.8 6.6a4.5 4.5 0 0 1 4.8 3.2M20.6 9.8l-.1-1.9M20.6 9.8l-1.8-.6"/>',
  incline:'<path d="M1.8 10.2l6.6 9h8.4"/><path d="M14 19.2v2.8M9 22h9"/><circle cx="4.6" cy="5.4" r="1.6"/><path d="M5.6 7l5.4 8"/><path d="M11 15h5.5l.6 6.5"/><path d="M7 9.2l3.2-5.6"/><path d="M8.2 2.8h4.2"/><rect x="7.4" y="1.6" width="1.6" height="2.4" rx=".4" fill="currentColor"/><rect x="11.6" y="1.6" width="1.6" height="2.4" rx=".4" fill="currentColor"/>',
  inclinebb:'<path d="M1.8 10.2l6.6 9h8.4"/><path d="M14 19.2v2.8M9 22h9"/><circle cx="4.6" cy="5.4" r="1.6"/><path d="M5.6 7l5.4 8"/><path d="M11 15h5.5l.6 6.5"/><path d="M7 9.2l3.2-5.6"/><path d="M4 2.8h12"/><rect x="4.4" y="1.2" width="1.4" height="3.2" rx=".3" fill="currentColor"/><rect x="14.2" y="1.2" width="1.4" height="3.2" rx=".3" fill="currentColor"/>',
  preacher:'<path d="M3 16.5h6M4.5 16.5v5.5M8 16.5v5.5"/><circle cx="5.6" cy="6.4" r="1.6"/><path d="M5.6 8v8.5"/><path d="M8.6 13.6l7-3.6v2.8l-7 3.6z"/><path d="M5.6 10.4l7 2.2"/><path d="M12.6 12.6l2-6.2"/><path d="M13 5.8h4"/>',
  shoulderpress:'<path d="M4.5 6v10M4.5 16h7M6 16v6M10.5 16v6"/><circle cx="7.6" cy="7.8" r="1.6"/><path d="M7.6 9.4v6.6"/><path d="M7.6 11l3-5.6"/><path d="M8.8 4.6h3.8"/><path d="M19.5 2v20M12.6 4.6h6.9"/>',
  chestpress:'<path d="M4.5 3v12M4.5 15h7M6 15v7M10.5 15v7"/><circle cx="7.4" cy="5" r="1.6"/><path d="M7.4 6.6v8"/><path d="M7.4 9.5h8"/><path d="M15.8 7v5.2"/><path d="M19.5 3v19M15.8 9.6h3.7"/>',
  ropepush:'<path d="M21 2v20M18.5 22h5M15.8 2h5.2"/><circle cx="16.6" cy="4.3" r="1.3"/><path d="M16.6 5.6v5.4"/><path d="M16.6 11l-2.2 3M16.6 11l2.2 3"/><rect x="13.2" y="13.6" width="2" height="2.8" rx=".6" fill="currentColor"/><rect x="18" y="13.6" width="2" height="2.8" rx=".6" fill="currentColor"/><circle cx="7.5" cy="4.4" r="1.8"/><path d="M7.5 6.2v8.8M7.5 15l-1.8 6.5M7.5 15l1.8 6.5"/><path d="M7.5 8.4l1.2 4 4.6 1.6"/>',
  straightarm:'<path d="M21.5 2v20M19 22h5M16.5 2h5"/><circle cx="17.6" cy="4.2" r="1.2"/><path d="M17 5.3l-4.8 7"/><path d="M11.4 11.4l1.8 2.4"/><circle cx="7.4" cy="4.4" r="1.8"/><path d="M7.4 6.2v8.8M7.4 15l-1.8 6.5M7.4 15l1.8 6.5"/><path d="M7.4 8.2l5 4.4"/>',
  cablecrunch:'<path d="M21.5 2v20M19 22h5M17 2h4.5"/><circle cx="18.2" cy="4.2" r="1.2"/><path d="M17.5 5.2L13 9.4"/><circle cx="11.6" cy="10.4" r="1.6"/><path d="M10.6 11.8c-1.6 1.8-2.2 4-1.6 6.6"/><path d="M9 18.4h5.5"/><path d="M14.5 18.4v3"/><path d="M12.2 11.2l1-1.6"/><path d="M2 21.5h20"/>',
  cablecurl:'<path d="M21.5 11v11M19 22h5"/><circle cx="19.6" cy="20" r="1.2"/><circle cx="8" cy="4.4" r="1.8"/><path d="M8 6.2v8.8M8 15l-1.8 6.5M8 15l1.8 6.5"/><path d="M8 8.4v4.2l4.2-2.6"/><path d="M12.2 8.8v2.6"/><path d="M12.4 10.2L19 19"/>',
  cablefly:'<path d="M2.5 2v20M21.5 2v20"/><circle cx="4.2" cy="4" r="1.2"/><circle cx="19.8" cy="4" r="1.2"/><path d="M4.8 4.9l6 6.4M19.2 4.9l-6 6.4"/><circle cx="12" cy="6.4" r="1.7"/><path d="M12 8.1v7.4M12 15.5l-1.9 6M12 15.5l1.9 6"/><path d="M12 9.6l-1.4 1.9M12 9.6l1.4 1.9"/>',
  latpull:'<path d="M4 2h16"/><path d="M12 2v4"/><path d="M4.5 9.5Q12 4.5 19.5 9.5"/><circle cx="12" cy="11.6" r="1.6"/><path d="M10.6 13.4L6.6 9.6M13.4 13.4l4-3.8"/><path d="M12 13.2v5"/><path d="M8.5 18.2h7"/><path d="M10 18.2l-1 4M14 18.2l1 4"/>',
  row:'<path d="M21.5 6v16"/><circle cx="19.8" cy="13" r="1.2"/><path d="M18.6 13H11"/><path d="M11 11.6v2.8"/><circle cx="5" cy="7" r="1.7"/><path d="M5 8.7l1 7.3"/><path d="M5.4 10.8L11 13"/><path d="M6 16h7.5v-3"/><path d="M15 9.5v7.5"/><path d="M2 20h12"/>',
  facepull:'<path d="M21.5 1.5v21M19 22.5h5M17 1.5h4.5"/><circle cx="18.5" cy="4.2" r="1.3"/><path d="M17.3 4.8L11 8.3"/><path d="M11 6.8v3"/><circle cx="7" cy="6" r="1.7"/><path d="M7 7.7v8.3M7 16l-2 6.3M7 16l2 6.3"/><path d="M7 9.8l4-1.5"/>',
  pushdown:'<path d="M21 2v20M18.5 22h5M15.8 2h5.2"/><circle cx="16.6" cy="4.3" r="1.3"/><path d="M16.6 5.6v5.4"/><path d="M16.6 11l-2.2 3M16.6 11l2.2 3"/><rect x="13.2" y="13.6" width="2" height="2.8" rx=".6" fill="currentColor"/><rect x="18" y="13.6" width="2" height="2.8" rx=".6" fill="currentColor"/><circle cx="7.5" cy="4.4" r="1.8"/><path d="M7.5 6.2v8.8M7.5 15l-1.8 6.5M7.5 15l1.8 6.5"/><path d="M7.5 8.4l1.2 4 4.6 1.6"/>',
  fly:'<rect x="3.2" y="3.5" width="2.4" height="7" rx=".5"/><rect x="18.4" y="3.5" width="2.4" height="7" rx=".5"/><circle cx="12" cy="4.5" r="1.8"/><path d="M12 6.3v8.2"/><path d="M12 8.5H5.6M12 8.5h6.4"/><path d="M8.5 14.5h7"/><path d="M10 14.5l-1 7M14 14.5l1 7"/>',
  legext:'<path d="M4.5 2.5v13"/><path d="M4.5 15.5h8"/><path d="M6 15.5v6.5M11 15.5v6.5"/><circle cx="7.6" cy="4.8" r="1.6"/><path d="M7.6 6.4v8.2"/><path d="M7.6 14.6h4.6"/><path d="M12.2 14.6l7.6-1.4"/><circle cx="20.6" cy="12" r="1.3"/><path d="M12.4 16l7.4-1.4"/>',
  legcurl:'<path d="M2 16h13"/><path d="M3.5 16v5M13.5 16v5"/><circle cx="3.3" cy="12.4" r="1.5"/><path d="M4.8 13.6h6.4"/><path d="M11.2 13.6h4"/><path d="M15.2 13.6l2.6-5.4"/><circle cx="18.4" cy="7" r="1.4"/>',
  calf:'<path d="M4.5 2v20M4.5 6.8h8.5"/><circle cx="14" cy="4.4" r="1.6"/><path d="M14 6v8.2"/><path d="M14 14.2l-.6 5M14 14.2l.6 5"/><path d="M12.8 19.2l-.6 1.4M15.2 19.2l.6 1.4"/><path d="M10.5 21h8"/><path d="M20.5 16.5v-5.5M19 12.6l1.5-1.6 1.5 1.6"/>',
  legpress:'<path d="M2 21.5h20"/><path d="M2.8 13l4.6 7"/><circle cx="4.4" cy="9.6" r="1.6"/><path d="M5.4 11l3.6 5"/><path d="M9 16l3.6-4.6"/><path d="M12.6 11.4l3.4 1.2"/><path d="M15.3 8.2l3.2 6"/><path d="M13.5 3l8.5 13"/>',

  dips:'<path d="M2 11h6M16 11h6M4.5 11v11M19.5 11v11"/><circle cx="12" cy="4.5" r="2"/><path d="M12 6.5v7.5"/><path d="M12 8.5l-4.5 2.5M12 8.5l4.5 2.5"/><path d="M12 14l-1.5 3.5 1.5 3.5M12 14l1.5 3.5"/>',
  pullup:'<path d="M2.5 3h19"/><path d="M7 3l3.5 6.5M17 3l-3.5 6.5"/><circle cx="12" cy="9.2" r="2"/><path d="M12 11.2v5.8M12 17l-2.2 4.5M12 17l2.2 4.5"/>' };
const ico = k => `<span class="ico" title="${esc(t('eqs')[EX[k].eq])}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">${EX[k].custom ? ICON.custom : (ICON_EX[k] || ICON[EX[k].eq])}</svg></span>`;
const SIC = {
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16"/><path d="M3 10h18M8 2.5v5M16 2.5v5"/></svg>',
  hist:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3.5 12a8.5 8.5 0 1 0 2.5-6"/><path d="M3 3.5v4h4"/><path d="M12 7.5V12l3 2"/></svg>',
  ex:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 12h10"/><rect x="3.5" y="7" width="3.5" height="10"/><rect x="17" y="7" width="3.5" height="10"/><path d="M1.5 10v4M22.5 10v4"/></svg>',
  pb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 18 3-18"/></svg>' };
const CHEV = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="square"><path d="M9 5.5l6.5 6.5L9 18.5"/></svg>';
const ARROW = '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="square"><path d="M3 12h16M13 5.5l6.5 6.5-6.5 6.5"/></svg>';
const GRIP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 8h14M5 12h14M5 16h14"/></svg>';

/* ---------- Decagon geometry + animations ---------- */
const decPts = (cx, cy, r) => Array.from({length:10}, (_, i) => { const a = 36 * i * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
const P = pts => pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
const polyCSS = pts => `polygon(${pts.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(', ')})`;
// intros: make sure no single word is wider than the box (e.g. "Mitternachtsgains.")
function fitWords(node, text, avail) {
  const fs = parseFloat(getComputedStyle(node).fontSize), m = document.createElement('span'); m.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap'; node.appendChild(m);
  let wMax = 0; text.split(/\s+/).forEach(w => { m.textContent = w; wMax = Math.max(wMax, m.getBoundingClientRect().width); }); m.remove();
  if (wMax > avail) node.style.fontSize = Math.floor(fs * avail / wMax) + 'px';
}
let svgId = 0;
function animSVG(kind, cool, paused) {
  const R = 94, o = decPts(100,100,R); const id = 'c' + (++svgId); let s = '';
  // seasons: candy-cane stripes rising inside the decagon (Christmas), bouncing coloured eggs (Easter)
  if (kind === 'xmas') { s = `<defs><clipPath id="${id}"><polygon points="${P(o)}"/></clipPath><pattern id="${id}p" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="28" height="28" fill="#f3f3ef"/><rect width="14" height="28" fill="#d6262e"/></pattern></defs><polygon points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="4"/><g clip-path="url(#${id})"><rect class="an a-fill" x="0" y="0" width="200" height="200" fill="url(#${id}p)"/></g>`; }
  if (kind === 'easter') { s = `<polygon points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="4"/>`; ['#f4a7c0', '#a7d8f4', '#f4e07a', '#b6e3a1', '#d1b3f0'].forEach((c, i) => { s += `<ellipse class="an a-egg" style="animation-delay:${(i * .22).toFixed(2)}s" cx="${44 + i * 28}" cy="120" rx="12" ry="16" fill="${c}"/>`; }); }
  if (kind === 'breath') s = `<polygon class="an a-ring" points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="3"/><polygon class="an a-breath" points="${P(o)}" fill="var(--fg)"/>`;
  if (kind === 'fill') s = `<defs><clipPath id="${id}"><polygon points="${P(o)}"/></clipPath></defs><polygon points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="4"/><g clip-path="url(#${id})"><rect class="an a-fill" x="0" y="0" width="200" height="200" fill="var(--fg)"/></g>`;
  if (kind === 'shards') o.forEach((p, i) => { const q = o[(i+1)%10], mx = (p[0]+q[0])/2 - 100, my = (p[1]+q[1])/2 - 100; s += `<polygon class="an a-shard" style="--dx:${(mx*.55).toFixed(0)}px;--dy:${(my*.55).toFixed(0)}px;animation-delay:${(i*.07).toFixed(2)}s" points="100,100 ${P([p,q])}" fill="var(--fg)" stroke="var(--bg)" stroke-width="2"/>`; });
  if (kind === 'mosaic') { s = `<defs><clipPath id="${id}"><polygon points="${P(o)}"/></clipPath></defs><g clip-path="url(#${id})">`; for (let y = 0; y < 9; y++) for (let x = 0; x < 9; x++) { const cx = 12 + x * 22, cy = 12 + y * 22, d = Math.hypot(cx-100, cy-100); s += `<polygon class="an a-tile" style="animation-delay:${(d/100*.9).toFixed(2)}s" points="${P(decPts(cx,cy,11))}" fill="var(--fg)"/>`; } s += '</g>'; }
  if (kind === 'rings') { for (let i = 0; i < 4; i++) s += `<polygon class="an a-in" style="animation-delay:${(i*.65).toFixed(2)}s" points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="5"/>`; s += `<polygon points="${P(decPts(100,100,20))}" fill="var(--fg)"/>`; }
  if (kind === 'segments') { o.forEach((p, i) => { const q = o[(i+1)%10]; s += `<line class="an a-seg" style="animation-delay:${(i*.26).toFixed(2)}s" x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}" stroke="var(--fg)" stroke-width="12"/>`; }); s += `<polygon points="${P(decPts(100,100,52))}" fill="var(--fg)"/>`; }
  if (kind === 'spin') s = `<polygon class="an a-spin" points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="5"/><polygon class="an a-spinr" points="${P(decPts(100,100,64))}" fill="none" stroke="var(--fg)" stroke-width="5"/><polygon points="${P(decPts(100,100,34))}" fill="var(--fg)"/>`;
  if (kind === 'orbit') s = `<polygon points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="3" opacity=".5"/><polygon points="${P(decPts(100,100,30))}" fill="var(--fg)"/><g class="an a-orbit"><polygon points="${P(decPts(100,30,17))}" fill="var(--fg)"/></g>`;
  if (kind === 'radar') s = `<defs><clipPath id="${id}"><polygon points="${P(o)}"/></clipPath></defs><polygon points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="4"/><polygon points="${P(decPts(100,100,60))}" fill="none" stroke="var(--fg)" stroke-width="2" opacity=".4"/><g clip-path="url(#${id})"><path class="an a-radar" d="M100 100 L100 0 A100 100 0 0 1 186.6 50 Z" fill="var(--fg)" opacity=".85"/></g>`;
  if (kind === 'eq') { s = `<defs><clipPath id="${id}"><polygon points="${P(o)}"/></clipPath></defs><polygon points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="4"/><g clip-path="url(#${id})">`; for (let i = 0; i < 7; i++) s += `<rect class="an a-eq" style="animation-delay:${(i * .13).toFixed(2)}s" x="${20 + i * 23}" y="10" width="15" height="185" fill="var(--fg)"/>`; s += '</g>'; }
  if (kind === 'draw') s = `<polygon class="an a-draw" pathLength="100" stroke-dasharray="100" points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="10"/><polygon class="an a-draw" style="animation-delay:.4s" pathLength="100" stroke-dasharray="100" points="${P(decPts(100,100,56))}" fill="none" stroke="var(--fg)" stroke-width="10"/>`;
  if (kind === 'stack') for (let i = 0; i < 3; i++) s += `<polygon class="an a-stack" style="animation-delay:${(i*.35).toFixed(2)}s" points="${P(decPts(100,100,R - i*28))}" fill="${i===2?'var(--fg)':'none'}" stroke="var(--fg)" stroke-width="5"/>`;
  return `<svg viewBox="0 0 200 200" class="${cool ? 'cool' : ''} ${paused ? 'paused' : ''}" aria-hidden="true">${s}</svg>`;
}

/* ---------- Sortable (drag by grip) ---------- */
function sortable(container, rowSel, onMove) {
  container.querySelectorAll('[data-grip]').forEach(g => g.addEventListener('pointerdown', e => {
    e.preventDefault(); e.stopPropagation();
    const row = g.closest(rowSel), rows = [...container.querySelectorAll(':scope > ' + rowSel)], from = rows.indexOf(row);
    const rects = rows.map(r => r.getBoundingClientRect()), y0 = e.clientY, h = rects[from].height; let to = from;
    row.classList.add('dragging'); g.setPointerCapture(e.pointerId);
    const move = ev => { const dy = ev.clientY - y0; row.style.transform = `translateY(${dy}px)`; const mid = rects[from].top + h / 2 + dy;
      to = rects.filter((r, i) => i !== from && r.top + r.height / 2 < mid).length;
      rows.forEach((r, i) => { if (r === row) return; let sh = 0; if (from < to && i > from && i <= to) sh = -h; if (from > to && i < from && i >= to) sh = h; r.style.transform = sh ? `translateY(${sh}px)` : ''; }); };
    const up = () => { g.removeEventListener('pointermove', move); g.removeEventListener('pointerup', up); g.removeEventListener('pointercancel', up); rows.forEach(r => r.style.transform = ''); row.classList.remove('dragging'); if (to !== from) onMove(from, to); };
    g.addEventListener('pointermove', move); g.addEventListener('pointerup', up); g.addEventListener('pointercancel', up);
  }));
}
const moveItem = (arr, from, to) => arr.splice(to, 0, arr.splice(from, 1)[0]);

/* ---------- Dialog ---------- */
function dialog(title, text, buttons) { // buttons: [label, cls, fn]
  const ov = $('overlay');
  ov.innerHTML = `<div class="dialog" role="dialog"><h2>${title}</h2>${text ? `<p>${text}</p>` : ''}${buttons.map((b, i) => `<button class="${b[1]}" data-db="${i}" ${b[1]==='textbtn'?'style="align-self:center"':''}>${b[0]}</button>`).join('')}</div>`;
  ov.hidden = false;
  ov.querySelectorAll('[data-db]').forEach(x => x.onclick = () => { ov.hidden = true; buttons[+x.dataset.db][2](); });
}

function showInfo(html) {
  let p = $('popover'); if (!p) { p = document.createElement('div'); p.id = 'popover'; p.className = 'popwrap'; $('app').appendChild(p); }
  p.innerHTML = `<div class="popover" role="dialog"><button class="x" aria-label="Schließen">✕</button><div>${html}</div></div>`; p.hidden = false;
  p.querySelector('.x').onclick = () => p.hidden = true; p.onclick = e => { if (e.target === p) p.hidden = true; };
}
function applyClasses() { $('app').className = 'app pm-' + S.pulse + (S.inverted ? ' inverted' : '') + (S.accent ? ' accent' : ''); document.body.style.background = S.inverted ? '#f3f3ef' : '#0b0b0a'; }
function fitGreet() { const g = $('greet'); if (!g) return; let z = 15; g.style.fontSize = z + 'px'; while (g.scrollWidth > g.clientWidth && z > 10) { z -= .5; g.style.fontSize = z + 'px'; } }
window.addEventListener('resize', fitGreet);

let wakeLock = null;
async function keepAwake(on) {
  try {
    if (on && !wakeLock && 'wakeLock' in navigator && document.visibilityState === 'visible') { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); }
    else if (!on && wakeLock) { const w = wakeLock; wakeLock = null; await w.release(); }
  } catch (e) { /* not supported or denied */ }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState !== 'visible') return; refreshAgo(); if (W) keepAwake(['warmup', 'train', 'cooldown'].includes(W.mode)); if (tab === 'start' && !W) renderStart(); });

/* ---------- Tabs ---------- */
let tab = 'start';
function show(view) {
  refreshAgo(); tab = view; if ($('popover')) $('popover').hidden = true;
  ['start','select','progress','settings'].forEach(v => $('v-'+v).hidden = v !== view);
  document.querySelectorAll('.navbtn').forEach(b => b.classList.toggle('on', b.dataset.tab === view));
  document.querySelector('.navoct').classList.toggle('off', !(view === 'start' || view === 'select'));
  ({ start:renderStart, select:renderSelect, progress:renderProgress, settings:renderSettings })[view]();
  $('v-'+view).scrollTop = 0;
}
// tab bar: another tab = back to where you were there; same tab again = its start page
const tabMem = { start:'start' }, scrollMem = {};
document.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => {
  const tb = b.dataset.tab, curTab = tab === 'select' ? 'start' : tab;
  if (tb === curTab) { if (tb === 'settings') setPage = null; if (tb === 'progress') { progTab = 'me'; selDay = null; } if (tb === 'start') editMode = false; tabMem.start = 'start'; show(tb); return; }
  scrollMem[tab] = $('v-' + tab).scrollTop; if (curTab === 'start') tabMem.start = tab;
  const v = tb === 'start' ? tabMem.start : tb; show(v); $('v-' + v).scrollTop = scrollMem[v] || 0;
});
// swipe from the left screen edge = back (settings sub page, workout list, sheets like "new workout")
function goBack() {
  if (!$('osheet').classList.contains('down') && $('o-back')) { $('o-back').click(); return true; }
  if (!$('wsheet').classList.contains('down')) return false;
  if (tab === 'settings' && setPage) { setPage = null; renderSettings(); return true; }
  if (tab === 'select') { tabMem.start = 'start'; show('start'); return true; }
  return false;
}
// what an edge swipe would move: the overlay sheet or the current screen (null = nothing to go back to)
function backTarget() {
  if (!$('osheet').classList.contains('down') && $('o-back')) return $('osheet');
  if (!$('wsheet').classList.contains('down')) return null;
  if ((tab === 'settings' && setPage) || tab === 'select') return $('v-' + tab);
  return null;
}
(() => { let x0 = null, y0 = 0, el = null, dx = 0, mode = 0, t0 = 0, ghost = null, prev = null;
  // screens: a copy of the current page follows the finger, the real page behind it already shows where you go back to
  const startGhost = () => { if (el.id === 'osheet') return; const v = el, r = v.getBoundingClientRect();
    prev = { tab, setPage, y: v.scrollTop, start: tabMem.start };
    // move the real content (the finger's touch target must stay in the page, otherwise iOS loses the touch)
    ghost = document.createElement('section'); ghost.className = v.className + ' outro'; while (v.firstChild) ghost.appendChild(v.firstChild);
    ghost.querySelectorAll('[id]').forEach(e => e.removeAttribute('id'));
    ghost.style.cssText = `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;z-index:4;background:var(--bg);margin:0;box-shadow:-12px 0 30px rgba(0,0,0,.5)`;
    $('app').appendChild(ghost); ghost.scrollTop = prev.y; goBack(); el = ghost; };
  const restore = () => { if (!prev) return; if (prev.tab === 'settings') { setPage = prev.setPage; show('settings'); } else { tabMem.start = prev.start; show(prev.tab); } $('v-' + prev.tab).scrollTop = prev.y; prev = null; };
  const clear = () => { if (ghost) ghost.remove(); ghost = null; prev = null; el = null; x0 = null; mode = 0; };
  document.addEventListener('touchstart', e => { const p = e.touches[0]; if (p.clientX >= 30 || e.touches.length > 1) return; el = backTarget(); if (!el) return; x0 = p.clientX; y0 = p.clientY; dx = 0; mode = 0; t0 = Date.now(); }, { capture: true, passive: true });
  document.addEventListener('touchmove', e => { if (x0 === null) return; const p = e.touches[0], ddx = p.clientX - x0, ddy = p.clientY - y0;
    if (!mode) { if (Math.abs(ddy) > 12 && Math.abs(ddy) > Math.abs(ddx)) { x0 = null; el = null; return; } if (ddx > 8) { mode = 1; startGhost(); } else return; }
    e.preventDefault(); // only sideways: the page must not scroll while swiping back
    dx = Math.max(0, ddx); el.style.transition = 'none'; el.style.transform = `translateX(${dx}px)`; if (el.id === 'osheet') el.style.boxShadow = '-12px 0 30px rgba(0,0,0,.45)'; }, { capture: true, passive: false });
  const end = () => { if (x0 === null) return; if (!mode) { x0 = null; el = null; return; }
    const t = el, isSheet = t.id === 'osheet', fast = dx / Math.max(1, Date.now() - t0) > .6, go = dx > innerWidth * .33 || (fast && dx > 50);
    x0 = null; mode = 0;
    if (go) {
      t.style.transition = 'transform .22s cubic-bezier(.2,.7,.3,1)'; t.style.transform = 'translateX(100%)';
      setTimeout(() => { if (isSheet) { t.style.transition = 'none'; goBack(); t.style.transform = ''; t.style.boxShadow = ''; requestAnimationFrame(() => t.style.transition = ''); el = null; } else clear(); }, 230);
    } else {
      t.style.transition = 'transform .2s ease-out'; t.style.transform = 'translateX(0)';
      setTimeout(() => { if (isSheet) { t.style.transition = ''; t.style.transform = ''; t.style.boxShadow = ''; el = null; } else { restore(); clear(); } }, 210);
    }
  };
  document.addEventListener('touchend', end, { capture: true, passive: true }); document.addEventListener('touchcancel', end, { capture: true, passive: true });
  let mx = null, my = 0;
  document.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') { mx = e.clientX < 30 ? e.clientX : null; my = e.clientY; } }, true);
  document.addEventListener('pointerup', e => { if (e.pointerType !== 'mouse' || mx === null) return; const ddx = e.clientX - mx, ddy = Math.abs(e.clientY - my); mx = null; if (ddx > 60 && ddy < 70) goBack(); }, true);
})();

let lastFinished = null; // { W, hist, at }
function renderStart() {
  const canResume = lastFinished && Date.now() - lastFinished.at < 30 * 60000, wk = weekStats();
  $('v-start').innerHTML = `<div class="inner">
    <div class="ptsline" id="ptsbtn" role="button" tabindex="0"><div class="pv"><b class="num">${fmt(totalPts())}</b><strong>${t('points')}</strong><span class="ptschev">${CHEV}</span></div><small>Level ${levelOf(totalPts()) + 1} · ${esc(LEVELS[levelOf(totalPts())][S.lang])}</small></div>
    <div class="hero">${seasonDeco() ? `<span class="ss-deco">${seasonDeco()}</span>` : ''}<button class="octa dec pulse" id="go"><span class="greet" id="greet">${esc(greetText)}</span><span class="cta">${t('cta')}</span><span class="tap">${t('tap')}</span></button></div>
    ${canResume ? `<button class="resume" id="resume"><span><b>${t('resume')}</b><small>${esc(lastFinished.W.name)} · ${t('resumeLeft', Math.ceil((30*60000 - (Date.now() - lastFinished.at)) / 60000))}</small></span>${CHEV}</button>` : ''}
    <div><div class="weekhead"><span>${t('thisWeek')}</span><small>${t('vsLastShort')}</small></div>
      <div class="weekstats num"><div><b>${wk.n}</b><span>${t('workouts')} ${deltaTag(wk.n, wk.n0, true)}</span></div><div><b>${volTxt(wk.vol)}</b><span>${t('moved')} ${deltaTag(wk.vol, wk.vol0)}</span></div><div><b>${wk.min}</b><span>${t('minutes')} ${deltaTag(wk.min, wk.min0)}</span></div></div></div>
  </div>`;
  fitGreet();
  $('ptsbtn').onclick = openLevels;
  $('go').onclick = () => W ? openW() : show('select');
  $('resume') && ($('resume').onclick = () => { const i = HISTORY.indexOf(lastFinished.hist); if (i >= 0) HISTORY.splice(i, 1); W = lastFinished.W; W.mode = 'train'; W.phase = 'rest'; W.phaseStart = Date.now(); delete W.end; lastFinished = null; renderW(); openW(); renderStart(); });
}
let editMode = false;
function renderSelect() {
  $('v-select').innerHTML = `<div class="inner">
    <div class="row"><button class="iconbtn" id="back" aria-label="Zurück">←</button></div>
    <div><div class="eyebrow">${t('yourWorkouts')}</div><h1>${t('whatToday')}</h1></div>
    <button class="newbtn" id="add"><span>+</span><span>${t('newWorkout')}</span></button>
    <div id="wlist">${workouts.length ? '' : `<p class="hint">${t('noWorkouts')}</p>`}</div></div>`;
  workouts.forEach((w, i) => {
    const b = document.createElement('button'); b.className = 'witem'; const a = lastAgoW(w.id);
    b.innerHTML = `<span class="wname">${esc(w.name)}</span><span class="go dec ${editMode ? '' : 'pulse'}" style="animation-delay:${i * .3}s">${editMode ? '✎' : t('go')}</span><span class="wex">${esc(w.ex.map(e => exName(e[0])).join(' · '))}</span><span class="wlast">${t('exN', w.ex.length)} · ${t('lastDone', a === null ? t('never') : t('ago', a))}</span>`;
    b.onclick = () => editMode ? openCreate(w) : prepareWorkout(w); $('wlist').appendChild(b);
  });
  $('back').onclick = () => { editMode = false; show('start'); };
  $('editmode') && ($('editmode').onclick = () => { editMode = !editMode; renderSelect(); });
  $('add').onclick = () => openCreate();
  swipeRows($('wlist'), '.witem', (i, reset) => { const w = workouts[i]; dialog(t('delWT'), t('delWX'), [[t('delNo'), 'mainbtn', () => reset && reset()], [t('delYes2'), 'ghostbtn', () => { workouts = workouts.filter(x => x !== w); save(); renderSelect(); }]]); });
}

/* ---------- Workout ---------- */
let W = null;
function prepareWorkout(src) {
  W = { src, name: src.name, mode:'ready', start:null, phase:'idle', phaseStart:Date.now(), cur:0, open:{}, edit:null,
        ex: src.ex.filter(([k]) => EX[k]).map(([k, n]) => ({ k, target:n, sets:[], w: LAST[k] ? LAST[k][0] : (isBW(k) ? 0 : 20), r: LAST[k] ? LAST[k][1] : 10 })) };
  renderW(); openW(); $('wbody').scrollTop = 0;
}
let morphing = false;
function morphTarget() { const r = $('mini').getBoundingClientRect(), sx = r.width / innerWidth, sy = r.height / innerHeight; return { tf: `translate(${r.left}px, ${r.top}px) scale(${sx}, ${sy})`, br: `${16 / sx}px / ${16 / sy}px` }; }
const MORPH_EASE = 'cubic-bezier(.32,.72,0,1)';
function openW() {
  const s = $('wsheet'), m = $('mini');
  if (morphing) return;
  if (!m.hidden && s.classList.contains('down')) {
    morphing = true; const { tf, br } = morphTarget();
    s.style.transition = 'none'; s.style.transformOrigin = '0 0'; s.style.transform = tf; s.style.borderRadius = br; s.style.backgroundColor = 'var(--fg)';
    s.classList.add('morphing'); s.classList.remove('down'); s.getBoundingClientRect();
    m.style.transition = 'none'; m.style.opacity = '0';
    s.style.transition = `transform .44s ${MORPH_EASE}, border-radius .44s ${MORPH_EASE}, background-color .2s ease`;
    s.style.transform = 'translate(0px, 0px) scale(1, 1)'; s.style.borderRadius = '0px'; s.style.backgroundColor = '';
    setTimeout(() => s.classList.remove('morphing'), 220);
    setTimeout(() => { m.hidden = true; m.style.opacity = ''; m.style.transition = ''; s.style.transition = ''; s.style.transform = ''; s.style.borderRadius = ''; s.style.transformOrigin = ''; morphing = false; }, 460);
    return;
  }
  s.classList.remove('down'); s.style.transform = ''; m.hidden = true; m.style.opacity = '';
}
function minimize() {
  const s = $('wsheet'), m = $('mini');
  if (!W) { s.classList.add('down'); s.style.transform = ''; m.hidden = true; return; }
  if (morphing) return; morphing = true;
  m.hidden = false; tick(); m.style.transition = 'none'; m.style.opacity = '0';
  const { tf, br } = morphTarget();
  s.classList.add('morphing'); s.style.transformOrigin = '0 0';
  s.style.transition = `transform .44s ${MORPH_EASE}, border-radius .44s ${MORPH_EASE}, background-color .22s ease .18s`;
  requestAnimationFrame(() => { s.style.transform = tf; s.style.borderRadius = br; s.style.backgroundColor = 'var(--fg)'; });
  setTimeout(() => {
    m.style.transition = 'opacity .12s'; m.style.opacity = '1';
    setTimeout(() => { s.style.transition = 'none'; s.classList.add('down'); s.classList.remove('morphing'); s.style.transform = ''; s.style.borderRadius = ''; s.style.backgroundColor = ''; s.style.transformOrigin = '';
      requestAnimationFrame(() => { s.style.transition = ''; m.style.transition = ''; morphing = false; }); }, 130);
  }, 440);
}
const tmpl = () => W && W.src && wById(W.src.id);
function tplSet(k, n) { const w = tmpl(); if (!w) return; const x = w.ex.find(e => e[0] === k); if (x) x[1] = n; save(); }
function tplAdd(k, n) { const w = tmpl(); if (!w || w.ex.some(e => e[0] === k)) return; w.ex.push([k, n]); save(); }
function tplRemove(k) { const w = tmpl(); if (!w) return; w.ex = w.ex.filter(e => e[0] !== k); save(); }
// planned values per set (kg / reps), used in the ready screen and as defaults during training
function ensurePlan(e) { if (!e.plan) e.plan = []; while (e.plan.length < e.target) e.plan.push({ w: (e.plan[e.plan.length - 1] || e).w, r: (e.plan[e.plan.length - 1] || e).r }); e.plan.length = e.target; return e.plan; }
function applyPlan(e) { const p = e.plan && e.plan[e.sets.length]; if (p) { e.w = p.w; e.r = p.r; } }
function removeExercise(i, after, perm) {
  if (W.ex.length <= 1) { toast(t('lastEx')); return; }
  if (perm) tplRemove(W.ex[i].k);
  const cur = W.ex[W.cur]; W.ex.splice(i, 1); W.rOpen = null; W.open = {};
  W.cur = W.ex.indexOf(cur); if (W.cur < 0) { W.cur = Math.min(i, W.ex.length - 1); W.curClosed = false; if (W.mode === 'train') applyPlan(W.ex[W.cur]); }
  syncTemplate(); renderW(); if (after) after();
}
function removePlannedSet(i, j, perm) {
  const e = W.ex[i]; ensurePlan(e);
  if (e.target <= 1 || (e.target - 1 <= 0)) { removeExercise(i, null, perm); return; }
  if (j < e.sets.length) return; // done sets are edited, not deleted here
  e.plan.splice(j, 1); e.target--;
  if (e.target === 0 || (e.sets.length === 0 && e.target === 0)) { removeExercise(i); return; }
  if (i === W.cur && e.sets.length >= e.target && W.mode === 'train' && !allDone()) { W.cur = nextOpen(); W.curClosed = false; applyPlan(W.ex[W.cur]); }
  if (perm) tplSet(e.k, e.target); renderW();
}
// swipe a row to the left → red "delete" area appears behind it
function swipeRows(container, rowSel, onDelete) {
  if (!container) return; container.style.position = 'relative';
  container.querySelectorAll(':scope > ' + rowSel).forEach((row, idx) => {
    let x0 = null, y0 = 0, dx = 0, mode = null, base = 0, bg = null;
    const setX = x => { row.style.transform = x ? `translateX(${x}px)` : ''; };
    const ensureBg = () => { if (bg) return; bg = document.createElement('button'); bg.className = 'swipe-del'; bg.innerHTML = `<span>${t('swipeDel')}</span>`;
      bg.style.top = row.offsetTop + 'px'; bg.style.height = row.offsetHeight + 'px'; container.insertBefore(bg, row);
      bg.onclick = ev => { ev.stopPropagation(); onDelete(idx, () => { setX(0); base = 0; }); }; };
    row.addEventListener('pointerdown', e => { if (e.target.closest('[data-grip], input, .mini-step, .sx')) return; x0 = e.clientX; y0 = e.clientY; dx = 0; mode = null; });
    row.addEventListener('pointermove', e => {
      if (x0 === null) return; const ddx = e.clientX - x0, ddy = e.clientY - y0;
      if (!mode) { if (Math.abs(ddx) > 10 && Math.abs(ddx) > Math.abs(ddy) * 1.3) { mode = 'swipe'; ensureBg(); row.classList.add('swiping'); try { row.setPointerCapture(e.pointerId); } catch (_) {} } else if (Math.abs(ddy) > 10) { x0 = null; return; } }
      if (mode === 'swipe') { const raw = Math.min(0, base + ddx); dx = raw < -96 ? -96 - Math.min(10, (-96 - raw) * .15) : raw; setX(dx); }
    });
    const end = () => { if (x0 === null) return; x0 = null; row.classList.remove('swiping');
      if (mode === 'swipe') { base = dx < -50 ? -96 : 0; setX(base); row.dataset.swiped = '1'; setTimeout(() => delete row.dataset.swiped, 50); if (!base && bg) { bg.remove(); bg = null; } } };
    row.addEventListener('pointerup', end); row.addEventListener('pointercancel', end);
    row.addEventListener('click', e => { if (row.dataset.swiped) { e.stopPropagation(); e.preventDefault(); return; } if (base) { e.stopPropagation(); e.preventDefault(); base = 0; setX(0); if (bg) { bg.remove(); bg = null; } } }, true);
  });
}
const confirmDelEx = i => (i2, reset) => { const w = tmpl(); dialog(t('delExT'), t('delExX'), [[t('delNo'), 'mainbtn', () => reset && reset()], [t('delToday'), 'ghostbtn', () => removeExercise(i2)]].concat(w ? [[t('delPerm', w.name), 'ghostbtn', () => removeExercise(i2, null, true)]] : [])); };
const confirmDelSet = (i, j) => { const w = tmpl(); dialog(t('delSetT'), t('delSetX'), [[t('delNo'), 'mainbtn', () => {}], [t('delSetToday'), 'ghostbtn', () => removePlannedSet(i, j)]].concat(w ? [[t('delSetPerm', w.name), 'ghostbtn', () => removePlannedSet(i, j, true)]] : [])); };
// keeps the saved workout in sync with set counts / added / removed exercises (order stays per session)
function syncTemplate() { return; /* template edits are explicit now (tplSet/tplAdd/tplRemove) */ }
function syncTemplateOld() { const w = W && W.src && wById(W.src.id); if (!w) return; const cnt = Object.fromEntries(W.ex.map(e => [e.k, e.target])); const kept = w.ex.filter(([k]) => k in cnt).map(([k]) => [k, cnt[k]]); W.ex.forEach(e => { if (!kept.some(([k]) => k === e.k)) kept.push([e.k, e.target]); }); w.ex = kept; save(); }
function openAddEx() { O = { mode:'add', q:'', fG:new Set(), fE:new Set(), sort:'az' }; renderO(); openO(); $('obody').scrollTop = 0; }
function closeW() { W = null; keepAwake(false); save(); $('wsheet').classList.add('down'); $('mini').hidden = true; greetText = greeting(); if (tab === 'start') renderStart(); if (tab === 'select') renderSelect(); }
function setBar(html) { $('wbar').firstElementChild.innerHTML = html; $('wbar').hidden = !html; }
const curEx = () => W.ex[W.cur];
const allDone = () => W.ex.every(e => e.sets.length >= e.target);
const nextOpen = () => { const o = [...W.ex.keys()]; return o.slice(W.cur + 1).concat(o.slice(0, W.cur)).find(i => W.ex[i].sets.length < W.ex[i].target); };
const allDoneAfter = () => W.ex.every((x, i) => i === W.cur ? x.sets.length + 1 >= x.target : x.sets.length >= x.target);

function renderHead() {
  const top = `<div class="wtop"><button class="iconbtn" id="minbtn" aria-label="Minimieren">⌄</button><div><div class="eyebrow">${W.mode === 'ready' ? t('ready') : esc(W.name)}</div><div class="overall num">${t('overall')} <span id="w-overall">${W.start ? mmss((Date.now()-W.start)/1000) : '00:00'}</span></div></div>${W.mode === 'train' || W.mode === 'warmup' ? `<button class="iconbtn" id="endbtn" aria-label="${t('endAbort')}">✕</button>` : '<span></span>'}</div>`;
  let ph = '';
  if (W.mode === 'train') {
    const lbl = W.phase === 'set' ? t('setLabel', curEx().sets.length + 1) : t('rest');
    ph = `<div class="wphase"><div class="wdec ${W.rise ? 'rise' : ''}">${seasonDeco() ? `<span class="ss-mini">${seasonDeco()}</span>` : ''}${animSVG(loadAnim(), W.phase !== 'set', false)}<svg viewBox="0 0 200 200" class="outline" aria-hidden="true"><polygon points="${P(decPts(100,100,97))}" fill="none" stroke="var(--fg)" stroke-width="3"/></svg><div class="inside"><span class="plabel">${lbl}</span><span class="pval num" id="phasetime">00:00</span></div></div></div>`;
    W.rise = false;
  }
  $('whead').firstElementChild.innerHTML = top + ph;
  $('whead').hidden = W.mode === 'review';
}
function renderW() {
  save(); keepAwake(['warmup', 'train', 'cooldown'].includes(W.mode));
  renderHead();
  let h = '';
  if (W.mode === 'ready') {
    h = `<div>${W.renaming ? `<input class="field" id="wname" value="${esc(W.name)}" enterkeyhint="done" autocomplete="off" autocorrect="off" spellcheck="false">` : `<div class="rtitle"><h1 id="wtitle">${esc(W.name)}</h1>${wById(W.src.id) ? `<button class="textbtn" id="wrename" style="padding:0">${t('rename')}</button>` : ''}</div>`}<p class="hint" style="margin-top:8px">${t('readyHint')}</p></div><div class="sortlist" id="readylist">` +
      W.ex.map((e, i) => `<div class="srow ${W.rOpen === i ? 'ropen' : ''}"><span class="idx num">${String(i+1).padStart(2,'0')}</span>${ico(e.k)}<button class="exname tapzone" data-ropen="${i}">${esc(exName(e.k))}<small>${t('sets', e.target)} · ${esc(wLabel(e.k, e.w))} × ${e.r}</small></button><span class="grip" data-grip aria-label="ziehen">${GRIP}</span>${W.rOpen === i ? `<div class="redit"><div class="pset phead"><span></span><span>${isBW(e.k) ? t('kgExtra') : t('kg')}</span><span>${t('reps')}</span><span></span></div>${ensurePlan(e).map((p, j) => `<div class="pset"><span class="idx num">${j + 1}</span><div class="ctl sm"><button data-pst="${i}:${j}:w:-0.5" aria-label="minus">−</button><input inputmode="decimal" enterkeyhint="done" class="num" data-pw="${i}:${j}" value="${fmtW(p.w)}"><button data-pst="${i}:${j}:w:0.5" aria-label="plus">+</button></div><div class="ctl sm"><button data-pst="${i}:${j}:r:-1" aria-label="minus">−</button><input inputmode="numeric" enterkeyhint="done" class="num" data-pr="${i}:${j}" value="${p.r}"><button data-pst="${i}:${j}:r:1" aria-label="plus">+</button></div><button class="sx" data-psx="${i}:${j}" aria-label="${t('delSetT')}">✕</button></div>`).join('')}<button class="addset" data-padd="${i}">${t('setAdd')}</button></div>` : ''}</div>`).join('') + `</div><button class="addset" id="raddex" style="font-size:14px">${t('addEx')}</button>`;
    setBar(`<button class="mainbtn" id="startbtn">${t('start')}</button>`);
  } else if (W.mode === 'warmup' || W.mode === 'cooldown') {
    const cool = W.mode === 'cooldown';
    h = `<div class="pill">${t(W.mode)}</div><div class="animwrap">${animSVG(loadAnim(), cool)}</div><div class="bigtime num" id="phasetime">00:00</div>`;
    setBar(cool ? `<button class="mainbtn" id="finishbtn">${t('finish')}</button>` : `<button class="mainbtn" id="warmdone">${t('warmDone')}</button>`);
  } else if (W.mode === 'train') {
    h = `<div class="sortlist" id="blocks">` + W.ex.map((e, i) => blockHTML(e, i)).join('') + `</div>`;
    const e = curEx(), n = e.sets.length;
    let main;
    if (W.phase === 'set') main = `<button class="mainbtn" id="mainact" data-a="done">${n + 1 >= e.target && !allDoneAfter() ? `<span>${t('setEnd')}</span><small class="nextline">${ARROW}${t('nextExArrow')}</small>` : t('setEnd')}</button>`;
    else if (n < e.target) main = `<button class="mainbtn" id="mainact" data-a="start">${t('startSet', n+1)}</button>`;
    else if (!allDone()) main = `<button class="mainbtn" id="mainact" data-a="next"><span class="arrline">${ARROW}${t('nextEx')}</span></button>`;
    else main = `<button class="mainbtn" id="mainact" data-a="cool">${t('toCooldown')}</button><button class="textbtn" id="nocd">${t('finishNoCd')}</button>`;
    setBar(main);
  } else if (W.mode === 'review') {
    h = reviewHTML(); setBar(`<button class="mainbtn" id="donebtn">${t('done')}</button>`);
  }
  $('wbody').innerHTML = `<div class="inner">${h}</div>`;
  bindW(); tick();
  if (W.mode === 'train') requestAnimationFrame(keepCurInView);
  if (W.mode === 'review') bindRvCharts($('wbody'));
}

function inputsHTML(prefix, w, r, k) {
  return `<div class="steppers"><div class="stepper"><label for="${prefix}kg">${isBW(k) ? t('kgExtra') : t('kg')}</label><div class="ctl"><button data-st="${prefix}kg:-0.5" aria-label="minus">−</button><input id="${prefix}kg" inputmode="decimal" enterkeyhint="done" class="num" value="${fmtW(w)}"><button data-st="${prefix}kg:0.5" aria-label="plus">+</button></div></div>
    <div class="stepper"><label for="${prefix}reps">${t('reps')}</label><div class="ctl"><button data-st="${prefix}reps:-1" aria-label="minus">−</button><input id="${prefix}reps" inputmode="numeric" enterkeyhint="done" class="num" value="${r}"><button data-st="${prefix}reps:1" aria-label="plus">+</button></div></div></div>` + (isBW(k) ? `<div class="bwnote">${t('bwNote')}</div>` : '');
}
function blockHTML(e, i) {
  const n = e.sets.length, isCur = i === W.cur, complete = n >= e.target, open = isCur ? !W.curClosed : W.open[i];
  let h = `<div class="block ${isCur ? 'cur' : ''} ${complete && !isCur ? 'done' : ''}"><div class="bhead"><span class="idx num">${String(i+1).padStart(2,'0')}</span>${ico(e.k)}<button class="tapzone exname" data-tog="${i}">${esc(exName(e.k))}${isCur && open && LAST[e.k] ? `<small>${t('lastShort', wLabel(e.k, LAST[e.k][0]), LAST[e.k][1])}</small>` : ''}</button><span class="stat num">${n}/${e.target}${complete ? ' ✓' : ''}</span><span class="grip" data-grip aria-label="ziehen">${GRIP}</span></div>`;
  if (open) {
    h += `<div class="setlist">`;
    e.sets.forEach((s, j) => {
      if (W.edit && W.edit[0] === i && W.edit[1] === j) h += `<div class="set active"><div class="activehead"><span class="lbl">${t('setLabel', j+1)}</span><button class="reset" data-saveedit="1">${t('ok')}</button></div>${inputsHTML('ed', s.w, s.r, e.k)}${j === n - 1 ? `<button class="textbtn redo" data-redo="${i}">↺ ${S.lang === 'de' ? 'Satz zurücksetzen und neu machen' : 'Reset and redo this set'}</button>` : ''}</div>`;
      else h += `<button class="set" data-edit="${i}:${j}"><span class="idx num">${j+1}</span><span class="sv num">${esc(wLabel(e.k, s.w))} × ${s.r}</span><span class="st num">${mmss(s.d || 0)}</span><span>✓</span></button>`;
    });
    if (isCur && n < e.target) h += `<div class="set active"><div class="activehead"><span class="lbl">${t('setLabel', n+1)}</span>${W.phase === 'set' ? `<button class="reset" id="resetbtn" aria-label="Reset">↺ ${t('resetLbl')}</button>` : ''}</div>${inputsHTML('cu', e.w, e.r, e.k)}</div>`;
    for (let j = n + (isCur ? 1 : 0); j < e.target; j++) { const p = (e.plan && e.plan[j]) || e; h += `<div class="set planned" data-goto="${i}" role="button" tabindex="0"><span class="idx num">${j+1}</span><span class="sv num">${esc(wLabel(e.k, p.w))} × ${p.r}</span><span></span><button class="sx" data-tsx="${i}:${j}" aria-label="${t('delSetT')}">✕</button></div>`; }
    h += `<button class="addset" data-addset="${i}">${t('addSet')}</button></div>`;
  }
  return h + `</div>`;
}

function bindW() {
  const q = s => $('wsheet').querySelectorAll(s);
  $('minbtn') && ($('minbtn').onclick = minimize);
  $('endbtn') && ($('endbtn').onclick = W.mode === 'warmup' ? warmCancel : endDialog);
  $('endbtn2') && ($('endbtn2').onclick = endDialog);
  $('readylist') && sortable($('readylist'), '.srow', (f, to) => { readInputs(); const o = W.rOpen != null ? W.ex[W.rOpen] : null; moveItem(W.ex, f, to); if (o) W.rOpen = W.ex.indexOf(o); renderW(); });
  q('[data-ropen]').forEach(b => b.onclick = () => { readInputs(); const i = +b.dataset.ropen; W.rOpen = W.rOpen === i ? null : i; renderW(); });
  q('[data-pw]').forEach(inp => inp.onchange = () => { const [i, j] = inp.dataset.pw.split(':').map(Number); const v = parseNum(inp.value); if (v !== null) { ensurePlan(W.ex[i])[j].w = Math.round(v * 100) / 100; if (j === 0) W.ex[i].w = W.ex[i].plan[0].w; save(); } });
  q('[data-pr]').forEach(inp => inp.onchange = () => { const [i, j] = inp.dataset.pr.split(':').map(Number); const v = parseNum(inp.value); if (v !== null) { ensurePlan(W.ex[i])[j].r = Math.max(1, Math.round(v)); if (j === 0) W.ex[i].r = W.ex[i].plan[0].r; save(); } });
  q('[data-pst]').forEach(b => b.onclick = ev => { ev.stopPropagation(); const [i, j, f, d] = b.dataset.pst.split(':'), e = W.ex[+i], pl = ensurePlan(e)[+j];
    if (f === 'w') { pl.w = Math.round((pl.w + parseFloat(d)) * 100) / 100; if (!isBW(e.k)) pl.w = Math.max(0, pl.w); } else pl.r = Math.max(1, pl.r + parseInt(d));
    if (+j === 0) { e.w = pl.w; e.r = pl.r; } save(); const inp = b.parentNode.querySelector('input'); inp.value = f === 'w' ? fmtW(pl.w) : pl.r; });
  q('[data-padd]').forEach(b => b.onclick = () => { const e = W.ex[+b.dataset.padd]; ensurePlan(e); const l = e.plan[e.plan.length - 1] || e; e.plan.push({ w: l.w, r: l.r }); e.target++; tplSet(e.k, e.target); renderW(); });
  q('[data-psx]').forEach(b => b.onclick = ev => { ev.stopPropagation(); const [i, j] = b.dataset.psx.split(':').map(Number); confirmDelSet(i, j); });
  q('[data-tsx]').forEach(b => b.onclick = ev => { ev.stopPropagation(); const [i, j] = b.dataset.tsx.split(':').map(Number); confirmDelSet(i, j); });
  if ($('readylist')) swipeRows($('readylist'), '.srow', (i, reset) => confirmDelEx(i)(i, reset));
  if ($('blocks')) swipeRows($('blocks'), '.block', (i, reset) => confirmDelEx(i)(i, reset));
  $('raddex') && ($('raddex').onclick = () => { readInputs(); openAddEx(); });
  $('wrename') && ($('wrename').onclick = () => { W.renaming = true; renderW(); const f = $('wname'); f.focus(); f.select(); });
  $('wtitle') && wById(W.src.id) && ($('wtitle').onclick = () => $('wrename').click());
  $('wname') && ($('wname').onblur = () => { const n = $('wname').value.trim(); W.renaming = false; if (n) { W.name = n; const w = wById(W.src.id); if (w) w.name = n; } renderW(); });
  $('blocks') && sortable($('blocks'), '.block', (f, to) => { const c = W.ex[W.cur]; moveItem(W.ex, f, to); W.cur = W.ex.indexOf(c); W.open = {}; renderW(); });
  q('[data-tog]').forEach(b => b.onclick = () => { const i = +b.dataset.tog; if (i === W.cur) W.curClosed = !W.curClosed; else W.open[i] = !W.open[i]; renderW(); });
  q('[data-goto]').forEach(b => b.onclick = () => { const i = +b.dataset.goto; if (i === W.cur) return; readInputs(); W.cur = i; W.open = {}; W.curClosed = false; W.edit = null; applyPlan(W.ex[i]); if (W.phase === 'set') { W.phase = 'rest'; W.phaseStart = Date.now(); } renderW(); });
  q('[data-addset]').forEach(b => b.onclick = () => { readInputs(); const e = W.ex[+b.dataset.addset]; ensurePlan(e); const l = e.plan[e.plan.length - 1] || e; e.plan.push({ w: l.w, r: l.r }); e.target++; renderW(); });
  q('[data-edit]').forEach(b => b.onclick = () => { readInputs(); W.edit = b.dataset.edit.split(':').map(Number); renderW(); });
  q('[data-saveedit]').forEach(b => b.onclick = () => { readInputs(); W.edit = null; renderW(); });
  q('[data-redo]').forEach(b => b.onclick = () => { readInputs(); const i = +b.dataset.redo, e = W.ex[i], st = e.sets.pop(); W.edit = null; W.cur = i; W.open = {}; W.curClosed = false; applyPlan(e); e.w = st.w; e.r = st.r; W.phase = 'rest'; W.phaseStart = Date.now(); renderW(); });
  $('resetbtn') && ($('resetbtn').onclick = () => dialog(t('resetTitle'), t('resetText'), [[t('resetNo'), 'mainbtn', () => {}], [t('resetYes'), 'ghostbtn', () => { W.restCarry = (W.restCarry || 0) + (Date.now() - W.phaseStart); W.phaseStart = Date.now(); renderW(); }]]));
  q('[data-st]').forEach(b => b.onclick = () => {
    const [id, d] = b.dataset.st.split(':'); const inp = $(id); const isKg = id.endsWith('kg');
    let v = (parseNum(inp.value) ?? 0) + parseFloat(d); if (!isKg) v = Math.max(1, Math.round(v));
    const k = id.startsWith('ed') ? W.ex[W.edit[0]].k : id.startsWith('rd') ? W.ex[W.rOpen].k : curEx().k; if (isKg && !isBW(k)) v = Math.max(0, v);
    inp.value = isKg ? fmtW(v) : v; readInputs();
  });
  q('.ctl input').forEach(inp => inp.onchange = () => readInputs());
  $('startbtn') && ($('startbtn').onclick = () => { W.start = Date.now(); W.mode = 'warmup'; W.phaseStart = Date.now(); renderW(); });
    $('warmdone') && ($('warmdone').onclick = () => { W.ex.forEach(e => { ensurePlan(e); applyPlan(e); }); W.mode = 'train'; W.phase = 'rest'; W.phaseStart = Date.now(); W.rise = true; renderW(); });
  $('finishbtn') && ($('finishbtn').onclick = toReview);
  $('nocd') && ($('nocd').onclick = toReview);
  $('donebtn') && ($('donebtn').onclick = saveWorkout);
  q('[data-rvtog]').forEach(b => b.onclick = () => { W.rvOpen = !W.rvOpen; renderW(); });
  $('mainact') && ($('mainact').onclick = () => {
    readInputs(); const e = curEx(), a = $('mainact').dataset.a;
    if (a === 'start') { W.phase = 'set'; W.phaseStart = Date.now(); }
    else if (a === 'done') { e.sets.push({ w:e.w, r:e.r, d:Math.round((Date.now() - W.phaseStart) / 1000) }); W.phase = 'rest'; W.phaseStart = Date.now(); applyPlan(e); if (e.sets.length >= e.target && !allDone()) { W.cur = nextOpen(); W.open = {}; W.curClosed = false; applyPlan(W.ex[W.cur]); } }
    else if (a === 'next') { W.cur = nextOpen(); W.open = {}; W.curClosed = false; applyPlan(W.ex[W.cur]); }
    else if (a === 'cool') { W.mode = 'cooldown'; W.phaseStart = Date.now(); }
    renderW();
  });
}
function toReview() { setTimeout(() => celebrate(seasonNow() || S.celeb), 250); W.mode = 'review'; W.end = Date.now(); W.slogan = pickSlogan(W.ex.some(e => e.sets.length && (() => { const p = sessionsFor(e.k); const b = Math.max(...e.sets.map(x => e1rm(Math.max(0, effW(e.k, x.w)), Math.min(x.r, 12)))); return p.length && b > Math.max(...p.map(q => q.best)); })())); renderW(); $('wbody').scrollTop = 0; }
// scrolls so the current exercise (and its active set) stays fully visible
function keepCurInView() {
  const body = $('wbody'), b = body.querySelector('.block.cur'); if (!b) return;
  const br = body.getBoundingClientRect(), r = b.getBoundingClientRect(), a = b.querySelector('.set.active'), ar = a ? a.getBoundingClientRect() : r;
  const barH = $('wbar').getBoundingClientRect().height || 0, viewBottom = br.bottom - barH;
  if (r.top < br.top || ar.bottom > viewBottom || W._sc !== W.cur) body.scrollTo({ top: Math.max(0, body.scrollTop + r.top - br.top - 8), behavior: 'smooth' });
  W._sc = W.cur;
}
function readInputs() {
  const rd = (p, o) => { const kg = $(p+'kg'), rp = $(p+'reps'); if (!kg || !o) return; const w = parseNum(kg.value), r = parseNum(rp.value); if (w !== null) o.w = Math.round(w * 100) / 100; if (r !== null) o.r = Math.max(1, Math.round(r)); };
  if (W.edit) rd('ed', W.ex[W.edit[0]].sets[W.edit[1]]);
  if (W.mode === 'ready' && W.rOpen != null) rd('rd', W.ex[W.rOpen]);
  rd('cu', curEx());
}
function warmCancel() { dialog(t('accT'), t('accX'), [[t('accNo'), 'mainbtn', () => {}], [t('accYes'), 'ghostbtn', () => { closeW(); toast(t('discarded')); }]]); }
function endDialog() {
  dialog(t('dlgTitle'), t('dlgText'), [
    [t('dlgCont'), 'mainbtn', () => {}],
    [t('dlgSave'), 'ghostbtn', toReview],
    [t('dlgDiscard'), 'textbtn', () => dialog(t('dlgDelTitle'), t('dlgDelText'), [[t('dlgDelNo'), 'mainbtn', () => {}], [t('dlgDelYes'), 'ghostbtn', () => { closeW(); toast(t('discarded')); }]])]
  ]);
}

function exStatsOf(e, before) {
  const prev = sessionsFor(e.k).find(p => p.date < before), ew = s => Math.max(0, effW(e.k, s.w));
  const per = e.sets.map(s => e1rm(ew(s), s.r));
  const top = e.sets.reduce((b, s) => e1rm(ew(s), s.r) > e1rm(ew(b), b.r) ? s : b);
  return { e, per, prevSets: prev ? prev.sets : [], top, best: Math.max(...per), v: e.sets.reduce((a, s) => a + ew(s) * s.r, 0), pBest: prev ? prev.best : 0, pVol: prev ? prev.vol : 0 };
}
let rvMetric = 'vol'; const RV = {};
const metricOf = (k, s, m) => { const w = Math.max(0, effW(k, s.w)); return m === 'reps' ? s.r : m === 'orm' ? e1rm(w, s.r) : w * s.r; };
function setChart(x, id) {
  RV[id] = x;
  return `<div class="msel" data-metric="${id}"><button class="mbtn" aria-haspopup="listbox"><span>${t('metrics')[rvMetric]}</span><i>▾</i></button><div class="mlist" role="listbox" hidden>${Object.entries(t('metrics')).map(([k, l]) => `<button data-m="${k}" class="${rvMetric === k ? 'on' : ''}">${l}</button>`).join('')}</div></div>
    <svg class="chart" id="rv-${id}" role="img" aria-label="${t('metrics')[rvMetric]}"></svg>
    <div class="legend"><span><i id="lgt-${id}"></i>${t('today2')}</span>${x.prevSets.length ? `<span><i class="dash" style="border-color:var(--muted)"></i>${t('lastTime')}</span>` : ''}<span class="val num" id="rvv-${id}" style="margin-left:auto;color:var(--fg);font-weight:700"></span></div>`;
}
function drawSetChart(id) {
  const x = RV[id], svg = $('rv-' + id); if (!svg) return;
  const k = x.e.k, m = rvMetric, cur = x.e.sets.map(s => metricOf(k, s, m)), prev = x.prevSets.map(s => metricOf(k, s, m));
  const n = Math.max(cur.length, prev.length), all = cur.concat(prev);
  let lo = Math.min(...all), hi = Math.max(...all); const pad = (hi - lo) * .3 || (m === 'reps' ? 2 : 4); lo = Math.max(0, lo - pad); hi += pad;
  const W0 = 340, H0 = 118, L = 38, R = 12, Tp = 10, B = 20;
  const X = i => L + (n === 1 ? (W0 - L - R) / 2 : i * (W0 - L - R) / (n - 1)), Y = v => Tp + (hi - v) * (H0 - Tp - B) / (hi - lo);
  const nice = v => m === 'reps' ? fmt(Math.round(v)) : fmt(Math.round(v));
  let s = [lo + (hi - lo) * .15, hi - (hi - lo) * .15].map(v => `<line x1="${L}" x2="${W0-R}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="${L-6}" y="${Y(v)+4}" text-anchor="end" font-size="10" font-family="var(--mono)" fill="var(--muted)">${nice(v)}</text>`).join('');
  if (prev.length) s += `<polyline points="${prev.map((v, i) => `${X(i)},${Y(v)}`).join(' ')}" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"/>` + prev.map((v, i) => `<circle cx="${X(i)}" cy="${Y(v)}" r="3" fill="var(--bg)" stroke="var(--muted)" stroke-width="1.5"/>`).join('');
  const sum = a => a.reduce((p, q) => p + q, 0), col = S.trendColor && prev.length ? (sum(cur) >= sum(prev.slice(0, cur.length)) ? 'var(--up)' : 'var(--down)') : 'var(--fg)';
  const dot = i => !S.trendColor || prev[i] === undefined ? col : cur[i] > prev[i] ? 'var(--up)' : cur[i] < prev[i] ? 'var(--down)' : 'var(--fg)';
  s += (S.trendColor && prev.length ? cur.slice(1).map((v, i) => `<line x1="${X(i)}" y1="${Y(cur[i])}" x2="${X(i + 1)}" y2="${Y(v)}" stroke="${dot(i + 1)}" stroke-width="2.5" stroke-linecap="round"/>`).join('') : `<polyline points="${cur.map((v, i) => `${X(i)},${Y(v)}`).join(' ')}" fill="none" stroke="${col}" stroke-width="2.5"/>`) + cur.map((v, i) => `<circle cx="${X(i)}" cy="${Y(v)}" r="4.5" fill="${dot(i)}" stroke="var(--bg)" stroke-width="1.5"/>`).join('');
  for (let i = 0; i < n; i++) s += `<text x="${X(i)}" y="${H0-5}" text-anchor="middle" font-size="10" font-family="var(--mono)" fill="var(--muted)">${i+1}</text>`;
  s += '<g class="scrub"></g>';
  svg.setAttribute('viewBox', `0 0 ${W0} ${H0}`); svg.innerHTML = s;
  const lg = $('lgt-' + id); if (lg) lg.style.borderColor = col;
  const sc = svg.querySelector('.scrub'), val = $('rvv-' + id), unit = m === 'reps' ? '' : ' kg';
  const show = i => {
    if (i === null) { sc.innerHTML = ''; val.innerHTML = ''; return; }
    const a = cur[i], b = prev[i]; let txt = `${t('setN', i + 1)}: ${a !== undefined ? fmt(Math.round(a)) + unit : '—'}`;
    let dHtml = ''; if (a !== undefined && b) dHtml = ' ' + pctTag(Math.round((a / b - 1) * 100));
    val.innerHTML = esc(txt) + dHtml; sc.innerHTML = `<line x1="${X(i)}" x2="${X(i)}" y1="${Tp}" y2="${H0-B}" stroke="var(--fg)" stroke-dasharray="3 3"/>`;
  };
  const idxAt = e => { const r = svg.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width * W0; return n === 1 ? 0 : Math.max(0, Math.min(n - 1, Math.round((px - L) / ((W0 - L - R) / (n - 1))))); };
  let down = false;
  svg.addEventListener('pointerdown', e => { down = true; svg.setPointerCapture(e.pointerId); show(idxAt(e)); });
  svg.addEventListener('pointermove', e => { if (down || e.pointerType === 'mouse') show(idxAt(e)); });
  const end = () => { down = false; show(null); };
  svg.addEventListener('pointerup', end); svg.addEventListener('pointercancel', end); svg.addEventListener('pointerleave', end);
}
// dev tool: how the review charts look when a session is better, worse or mixed vs. last time
function chartTestHTML() {
  const mk = (cur, prev) => ({ e: { k:'bench', sets: cur.map(([w, r]) => ({ w, r })) }, prevSets: prev.map(([w, r]) => ({ w, r })) });
  const cases = [['Besser', mk([[80, 8], [80, 8], [80, 7], [80, 7]], [[75, 8], [75, 7], [75, 6], [75, 6]])], ['Schlechter', mk([[70, 7], [70, 6], [70, 5], [70, 5]], [[75, 8], [75, 8], [75, 7], [75, 6]])],
    ['Gemischt (abwechselnd)', mk([[80, 8], [75, 6], [75, 8], [72.5, 6]], [[75, 8], [75, 8], [75, 6], [75, 6]])], ['Gemischt (Mitte schwächer)', mk([[80, 8], [72.5, 7], [72.5, 6], [80, 6]], [[75, 8], [75, 8], [75, 7], [75, 6]])], ['Gleich', mk([[75, 8], [75, 8], [75, 8], [75, 8]], [[75, 8], [75, 8], [75, 8], [75, 8]])]];
  return `<div class="inner"><div class="row"><button class="iconbtn" id="o-back" aria-label="Zurück">←</button><span class="eyebrow">Dev · Charts-Test</span><span style="width:44px"></span></div>
    <p class="hint">Jeder Punkt = Satz im Vergleich zum gleichen Satz letztes Mal (besser grün, schlechter rot, gleich weiß). Die Linie zu einem Punkt hat dessen Farbe. Grau gestrichelt = letztes Mal. Farben nur mit „Trendfarben farbig“ (Darstellung). Metrik oben im Dropdown wechseln.</p>
    ${cases.map(([n, x], i) => `<div class="rvblock"><h3>${n}</h3>${setChart(x, 'ct' + i)}</div>`).join('')}</div>`;
}
function bindRvCharts(root) {
  root.querySelectorAll('[data-metric]').forEach(box => {
    drawSetChart(box.dataset.metric);
    const list = box.querySelector('.mlist');
    box.querySelector('.mbtn').onclick = e => { e.stopPropagation(); const open = list.hidden; root.querySelectorAll('.mlist').forEach(l => l.hidden = true); list.hidden = !open; };
    box.querySelectorAll('[data-m]').forEach(o => o.onclick = e => { e.stopPropagation(); rvMetric = o.dataset.m;
      root.querySelectorAll('[data-metric]').forEach(b2 => { b2.querySelector('.mbtn span').textContent = t('metrics')[rvMetric]; b2.querySelectorAll('[data-m]').forEach(x => x.classList.toggle('on', x.dataset.m === rvMetric)); b2.querySelector('.mlist').hidden = true; drawSetChart(b2.dataset.metric); }); });
  });
  root.addEventListener('click', () => root.querySelectorAll('.mlist').forEach(l => l.hidden = true));
  root.querySelectorAll('[data-rinfo]').forEach(b => b.onclick = e => { e.stopPropagation(); showInfo(t('info1rm')); });
}
function exBlock(x, first, id) {
  const dv = x.pVol ? Math.round((x.v / x.pVol - 1) * 100) : null;
  return `<div class="rvblock" ${first ? 'style="border-top:0;padding-top:0"' : ''}><h3>${ico(x.e.k)}${esc(exName(x.e.k))}</h3>${setChart(x, id)}
    <div class="tiles3 num"><div><span>${t('volTotal')} ${pctTag(dv)}</span><b>${fmt(Math.round(x.v))} kg</b></div><div><span>${t('bestSet')}</span><b>${esc(wLabel(x.e.k, x.top.w))} × ${x.top.r}</b></div><div><span>${t('strengthShort')} <button class="info" data-rinfo="1" aria-label="Info">i</button></span><b>${fmt(Math.round(x.best))} kg</b></div></div></div>`;
}
// shared review layout: after a workout and when opening a past session from the calendar
function reviewCore(o) {
  const sets = o.ex.flatMap(e => e.sets.map(s => ({ ...s, k:e.k, ew: effW(e.k, s.w) })));
  const vol = sets.reduce((a, s) => a + Math.max(0, s.ew) * s.r, 0);
  const pts = sets.length ? sessionPoints(o.ex, o.before) : 0;
  let h = `<div style="display:flex;flex-direction:column;gap:14px">${o.key === 'w' ? `<div class="eyebrow">${esc(o.name)}</div>` : ''}<p class="slogan">${esc(o.slogan)}</p><div class="ptsbig"><b class="num">+${pts}</b><span>${t('ptsEarned')}</span></div></div>
    <div class="trio num"><div class="dec"><span>${t('moved')}</span><b>${volTxt(vol)}</b></div><div class="dec"><span>${t('duration')}</span><b>${t('min', o.dur)}</b></div><div class="dec"><span>${t('setsWord')}</span><b>${sets.length}</b></div></div>`;
  if (!sets.length) return h + `<p class="hint">${t('emptyReview')}</p>`;
  const xs = o.ex.filter(e => e.sets.length).map(e => exStatsOf(e, o.before));
  const hi = xs.filter(x => x.best > 0).sort((a, b) => (b.best / (b.pBest || b.best)) - (a.best / (a.pBest || a.best)))[0];
  if (hi) h += `<div class="sect"><div class="row"><h2>${t('highlightEx')}</h2>${hi.best > hi.pBest && hi.pBest ? `<span class="pill" style="padding:2px 8px;font-size:10px">${t('newPR')}</span>` : ''}</div>${exBlock(hi, true, o.key + 'h')}</div>`;
  const rest = xs.filter(x => x !== hi);
  if (rest.length) { h += `<button class="morebtn" data-rvtog="1"><span class="mdec dec">${o.open ? '−' : '+'}</span>${t('moreEx')} (${rest.length})</button>`; if (o.open) h += `<div>${rest.map((x, i) => exBlock(x, false, o.key + i)).join('')}</div>`; }
  return h;
}
function reviewHTML() {
  const dur = Math.max(1, Math.round(((W.end || Date.now()) - (W.start || Date.now())) / 60000));
  return reviewCore({ name: W.name, slogan: W.slogan, ex: W.ex.filter(e => e.sets.length), dur, before: W.start || Date.now(), key: 'w', open: W.rvOpen });
}
function saveWorkout() {
  if (W.ex.some(e => e.sets.length)) {
    const ex = W.ex.filter(e => e.sets.length).map(e => ({ k:e.k, sets:e.sets.map(s => ({ w:s.w, r:s.r, d:s.d })) }));
    const hist = { id:'h' + Date.now(), date:W.start, ago:0, wid:W.src.id, wname:W.name, dur:Math.max(1, Math.round((W.end - W.start) / 60000)), ex };
    hist.pts = ptsOf(sessVol(hist));
    HISTORY.push(hist); W.ex.forEach(e => { if (e.sets.length) { const l = e.sets[e.sets.length-1]; LAST[e.k] = [l.w, l.r]; } });
    lastFinished = { W, hist, at:Date.now() };
  }
  closeW();
}

function tick() {
  if (!W) return;
  const all = W.start ? (Date.now() - W.start) / 1000 : 0, ph = (Date.now() - W.phaseStart) / 1000;
  const o = $('w-overall'); if (o && W.mode !== 'review') o.textContent = mmss(all);
  const p = $('phasetime'); if (p) p.textContent = mmss(ph);
  const st = $('settime'); if (st) st.textContent = mmss(ph);
  if (!$('mini').hidden) {
    const label = W.mode === 'ready' ? t('ready') : W.mode === 'review' ? 'Review' : W.mode === 'train' ? t(W.phase === 'set' ? 'set' : 'rest') : t(W.mode);
    $('m-phase').textContent = label + (W.start && W.mode !== 'review' ? ' · ' + mmss(all) : '');
    $('m-name').textContent = W.mode === 'train' ? exName(curEx().k) : W.name;
    $('m-time').textContent = W.mode === 'ready' || W.mode === 'review' ? '' : mmss(ph);
  }
}
setInterval(tick, 250);
$('mini').onclick = openW;
(() => { // swipe down to minimise: handle (mouse + touch) and anywhere when scrolled to top (touch)
  const s = $('wsheet'), body = $('wbody');
  const drag = dy => { s.style.transition = 'none'; s.style.transform = `translateY(${Math.max(0, dy)}px)`; };
  const release = dy => { s.style.transition = ''; if (dy > 110) minimize(); else s.style.transform = ''; };
  let y0 = null, dy = 0; const h = $('handle');
  h.addEventListener('pointerdown', e => { y0 = e.clientY; dy = 0; h.setPointerCapture(e.pointerId); });
  h.addEventListener('pointermove', e => { if (y0 === null) return; dy = e.clientY - y0; drag(dy); });
  const end = () => { if (y0 === null) return; y0 = null; release(dy); };
  h.addEventListener('pointerup', end); h.addEventListener('pointercancel', end);
  let ty = null, tdy = 0, active = false;
  s.addEventListener('touchstart', e => { if (e.target.closest('[data-grip], input, .handle')) { ty = null; return; } ty = e.touches[0].clientY; tdy = 0; active = false; }, { passive:true });
  s.addEventListener('touchmove', e => { if (ty === null) return; const d = e.touches[0].clientY - ty; if (!active && d > 8 && body.scrollTop <= 0) active = true; if (active) { e.preventDefault(); tdy = d; drag(d); } }, { passive:false });
  s.addEventListener('touchend', () => { if (active) release(tdy); ty = null; active = false; });
})();

/* ---------- Other sheet: create workout / exercise picker ---------- */
let O = null;
function openO() { $('osheet').classList.remove('down'); }
function closeO() { $('osheet').classList.add('down'); O = null; }
function setOBar(html) { $('obar').firstElementChild.innerHTML = html; $('obar').hidden = !html; }
function openCreate(w) { O = { fG:new Set(), fE:new Set(), sort:'az', mode:'create', editId: w ? w.id : null, name: w ? w.name : '', q:'', picked: w ? w.ex.filter(([k]) => EX[k]).map(e => [...e]) : [], custom:null }; renderO(); openO(); $('obody').scrollTop = 0; }
function openPicker() { O = { mode:'picker', q:'', filter:false, onlyFav:false, groups:new Set(Object.keys(T.de.groups)) }; renderO(); openO(); $('obody').scrollTop = 0; }
const fsCount = () => (O.fG ? O.fG.size : 0) + (O.fE ? O.fE.size : 0);
const filterRowHTML = () => (O.sort in t('sorts') || (O.sort = 'az')) && `<div class="fsrow"><button class="fsbtn" id="o-filter">${FILTER_IC}${t('filter')}${fsCount() ? ` (${fsCount()})` : ''}</button>
  <div class="msel" id="o-sortbox"><button class="mbtn" id="o-sort"><span>${t('sortBy')}: ${t('sorts')[O.sort]}</span><i>▾</i></button><div class="mlist" id="o-sortlist" hidden>${Object.entries(t('sorts')).map(([k, l]) => `<button data-sort="${k}" class="${O.sort === k ? 'on' : ''}">${l}</button>`).join('')}</div></div></div>`;
const FILTER_IC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M7 12h10M10 18h4"/></svg>';
function listKeys(extra) {
  let ks = Object.keys(EX).filter(k => exMatches(k, O.q) && (!O.fG.size || O.fG.has(EX[k].g)) && (!O.fE.size || O.fE.has(EX[k].eq)) && (!extra || extra(k)));
  const byName = (a, b) => exName(a).localeCompare(exName(b), loc());
  if (O.sort === 'fav') ks.sort((a, b) => (S.fav.includes(b) - S.fav.includes(a)) || byName(a, b));
  else if (O.sort === 'recent') ks.sort((a, b) => ((lastAgoEx(a) ?? 1e9) - (lastAgoEx(b) ?? 1e9)) || byName(a, b));
  else if (false) ks.sort((a, b) => Object.keys(T.de.groups).indexOf(EX[a].g) - Object.keys(T.de.groups).indexOf(EX[b].g) || byName(a, b));
  else ks.sort(byName);
  return ks;
}
function bindFilterRow() {
  $('o-filter').onclick = openFilterSheet;
  $('o-sort').onclick = e => { e.stopPropagation(); $('o-sortlist').hidden = !$('o-sortlist').hidden; };
  document.querySelectorAll('[data-sort]').forEach(b => b.onclick = e => { e.stopPropagation(); O.sort = b.dataset.sort; renderO(); });
  $('obody').onclick = () => { const l = $('o-sortlist'); if (l) l.hidden = true; };
}
function openFilterSheet() {
  const ov = document.createElement('div'); ov.className = 'fsheet-wrap'; ov.id = 'fsheet';
  const draw = () => {
    const n = listKeys(O.mode === 'add' ? k => !W.ex.some(e => e.k === k) : null).length;
    ov.innerHTML = `<div class="fsheet" role="dialog"><div class="row"><h2>${t('filter')}</h2><button class="iconbtn" id="fs-x" aria-label="Schließen">✕</button></div>
      <div><div class="eyebrow" style="margin-bottom:8px">${t('muscle')}</div><div class="opts">${Object.entries(t('groups')).map(([g, l]) => `<button class="${O.fG.has(g) ? 'on' : ''}" data-fg="${g}">${l}</button>`).join('')}</div></div>
      <div><div class="eyebrow" style="margin-bottom:8px">${t('equipment')}</div><div class="opts">${Object.entries(t('eqs')).map(([g, l]) => `<button class="${O.fE.has(g) ? 'on' : ''}" data-fe="${g}">${l}</button>`).join('')}</div></div>
      <div class="row"><button class="textbtn" id="fs-reset">${t('fReset')}</button><button class="mainbtn" id="fs-apply" style="width:auto;padding:14px 18px;font-size:14px">${t('fApply', n)}</button></div></div>`;
    ov.querySelectorAll('[data-fg]').forEach(b => b.onclick = () => { const g = b.dataset.fg; O.fG.has(g) ? O.fG.delete(g) : O.fG.add(g); draw(); });
    ov.querySelectorAll('[data-fe]').forEach(b => b.onclick = () => { const g = b.dataset.fe; O.fE.has(g) ? O.fE.delete(g) : O.fE.add(g); draw(); });
    const close = () => { ov.classList.remove('in'); setTimeout(() => ov.remove(), 250); renderO(); };
    ov.querySelector('#fs-x').onclick = close; ov.querySelector('#fs-apply').onclick = close; ov.querySelector('#fs-reset').onclick = () => { O.fG.clear(); O.fE.clear(); draw(); };
    ov.onclick = e => { if (e.target === ov) close(); };
  };
  draw(); $('app').appendChild(ov); requestAnimationFrame(() => ov.classList.add('in'));
}
const exMatches = (k, q) => !q || (exName(k) + ' ' + (EX[k].en || '') + ' ' + t('groups')[EX[k].g] + ' ' + t('eqs')[EX[k].eq]).toLowerCase().includes(q.toLowerCase());
function toggleFav(k) { const i = S.fav.indexOf(k); if (i >= 0) S.fav.splice(i, 1); else S.fav.push(k); return true; }
function renderO() {
  const b = $('obody');
  b.classList.toggle('lvlmode', O.mode === 'levels');
  if (O.mode === 'levels') { b.innerHTML = levelsHTML(); setOBar(''); $('o-back').onclick = closeO; return; }
  if (O.mode === 'profile') { b.innerHTML = profileHTML(O.p); setOBar(''); $('o-back').onclick = () => O.from === 'find' ? (O = { mode:'find', q:O.q }, renderO()) : closeO();
    $('pf-follow') && ($('pf-follow').onclick = () => { const f = O.follow || {}; f[O.p.user] = !f[O.p.user]; const p = O.p, fr = O.from, q = O.q; O = { mode:'profile', p, from:fr, q, follow:f }; renderO(); toast(S.lang === 'de' ? 'Vorschau: Folgen kommt mit dem Cloud-Modus' : 'Preview: following comes with cloud sync'); });
    $('pf-edit') && ($('pf-edit').onclick = () => { closeO(); setPage = 'profile'; show('settings'); $('v-settings').scrollTop = 0; }); return; }
  if (O.mode === 'find') { b.innerHTML = findHTML(); setOBar(''); $('o-back').onclick = closeO;
    loadQR(() => { const box = $('qrbox'); if (!box || !window.qrcode) return; const q = qrcode(0, 'M'); q.addData(SHARE_URL + '?u=' + encodeURIComponent(userName())); q.make(); box.innerHTML = q.createSvgTag(6, 2); });
    const qi = $('f-q'); qi.oninput = () => { O.q = qi.value; const pos = qi.selectionStart; renderO(); const n = $('f-q'); n.focus(); n.setSelectionRange(pos, pos); };
    document.querySelectorAll('[data-fh]').forEach(x => x.onclick = () => openProfile(DEMO_FRIENDS[+x.dataset.fh], 'find'));
    $('f-scan').onclick = () => toast(S.lang === 'de' ? 'Scannen kommt mit dem Cloud-Modus' : 'Scanning comes with cloud sync'); return; }
  if (O.mode === 'charttest') { b.innerHTML = chartTestHTML(); setOBar(''); $('o-back').onclick = closeO; bindRvCharts(b); return; }
  if (O.mode === 'add') {
    b.innerHTML = `<div class="inner"><div class="row"><button class="iconbtn" id="o-back" aria-label="Zurück">←</button><span class="eyebrow">${t('addEx').replace('+ ', '')}</span><span style="width:44px"></span></div>
      <div class="searchrow"><input class="search" id="o-q" enterkeyhint="search" placeholder="${t('searchPh')}" value="${esc(O.q)}"></div>${filterRowHTML()}<div id="o-list"></div></div>`;
    renderPickList(); bindFilterRow(); setOBar('');
    $('o-back').onclick = closeO; $('o-q').oninput = e => { O.q = e.target.value; renderPickList(); };
    return;
  }
  if (O.mode === 'review') {
    const h = O.h, ds = new Date(h.date).toLocaleDateString(loc(), { weekday:'long', day:'2-digit', month:'2-digit', year:'numeric' });
    b.innerHTML = `<div class="inner"><div class="row"><button class="iconbtn" id="o-back" aria-label="Zurück">←</button><span class="eyebrow">${esc(ds)}</span><span style="width:44px"></span></div>
      ${reviewCore({ name: h.wname || '', slogan: h.wname || '', ex: h.ex.filter(e => EX[e.k]), dur: h.dur, before: h.date, key: 'd', open: O.open, pts: h.pts })}
      <div class="sect"><h2>${t('allSets')}</h2><div>${h.ex.filter(e => EX[e.k]).map(e => `<div class="rvblock"><h3>${ico(e.k)}${esc(exName(e.k))}</h3><div class="cells num">${e.sets.map(s => `<span>${esc(wLabel(e.k, s.w))} × ${s.r}</span>`).join('')}</div></div>`).join('')}</div></div></div>`;
    setOBar('');
    $('o-back').onclick = closeO;
    b.querySelectorAll('[data-rvtog]').forEach(x => x.onclick = () => { O.open = !O.open; renderO(); });
    bindRvCharts(b);
    return;
  }
  if (O.mode === 'create') {
    const chosen = O.picked.map(([k, n], i) => `<div class="srow"><span class="idx num">${String(i+1).padStart(2,'0')}</span>${ico(k)}<div class="exname" style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span style="min-width:0">${esc(exName(k))}</span><span class="mini-step"><button data-ps="${i}:-1" aria-label="minus">−</button><span class="num">${t('sets', n)}</span><button data-ps="${i}:1" aria-label="plus">+</button></span></div><span class="grip" data-grip aria-label="ziehen">${GRIP}</span></div>`).join('');
    const custom = O.custom ? `<div class="custom"><input id="c-name" name="fitter-exercise" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="${t('customName')}" value="${esc(O.custom.name)}">
        <div><div class="eyebrow" style="margin-bottom:8px">${t('muscle')}</div><div class="opts">${Object.entries(t('groups')).map(([g, l]) => `<button class="${O.custom.g===g?'on':''}" data-cg="${g}">${l}</button>`).join('')}</div></div>
        <div><div class="eyebrow" style="margin-bottom:8px">${t('equipment')}</div><div class="opts">${Object.entries(t('eqs')).map(([g, l]) => `<button class="${O.custom.eq===g?'on':''}" data-ce="${g}">${l}</button>`).join('')}</div></div>
        <button class="ghostbtn" id="c-add" style="border-style:dashed">${t('addCustom')}</button><button class="textbtn" id="c-cancel" style="align-self:center">${t('never')}</button></div>` : '';
    b.innerHTML = `<div class="inner">
      <div class="row"><button class="iconbtn" id="o-back" aria-label="Zurück">←</button><span class="eyebrow">${O.editId ? t('editWorkout') : t('newWorkout')}</span><span style="width:44px"></span></div>
      <input class="field" id="o-name" enterkeyhint="done" placeholder="${t('namePh')}" value="${esc(O.name)}">
      ${O.picked.length ? `<div><div class="eyebrow" style="margin-bottom:4px">${t('chosen')}</div><div class="sortlist" id="chosen">${chosen}</div></div>` : ''}
      <div style="display:flex;flex-direction:column;gap:10px">${O.custom ? custom : `<button class="newbtn" id="c-open" style="border-style:dashed"><span>${t('customAdd')}</span></button>`}
        <div class="searchrow"><input class="search" id="o-q" enterkeyhint="search" placeholder="${t('searchPh')}" value="${esc(O.q)}"></div>${filterRowHTML()}</div>
      <div id="o-list"></div>${O.editId ? `<button class="ghostbtn" id="o-del" style="border-color:var(--line)">${t('delWorkout')}</button>` : ''}</div>`;
    renderPickList(); bindFilterRow();
    $('o-del') && ($('o-del').onclick = () => dialog(t('delWTitle'), t('delWText'), [[t('keep'), 'mainbtn', () => {}], [t('delYes'), 'ghostbtn', () => { const eid = O.editId; workouts = workouts.filter(w => w.id !== eid); save(); closeO(); if (W && W.mode === 'ready' && W.src.id === eid) closeW(); renderSelect(); }]]));
    setOBar(O.custom ? '' : `<button class="mainbtn" id="o-save">${O.picked.length ? t('saveN', O.picked.length) : t('save')}</button>`);
    $('o-back').onclick = () => (O.name.trim() || O.picked.length) ? dialog(t('dlgBackTitle'), t('dlgBackText'), [[t('dlgBackNo'), 'mainbtn', () => {}], [t('dlgBackYes'), 'ghostbtn', closeO]]) : closeO();
    $('o-name').oninput = e => O.name = e.target.value;
    $('o-q').oninput = e => { O.q = e.target.value; renderPickList(); };
    $('chosen') && sortable($('chosen'), '.srow', (f, to) => { moveItem(O.picked, f, to); renderO(); });
    b.querySelectorAll('[data-ps]').forEach(x => x.onclick = () => { const [i, d] = x.dataset.ps.split(':').map(Number); O.picked[i][1] = Math.max(1, O.picked[i][1] + d); renderO(); });
    $('c-open') && ($('c-open').onclick = () => { O.custom = { name:'', g:'chest', eq:'bb' }; renderO(); $('c-name').focus(); });
    if (O.custom) {
      $('c-name').oninput = e => O.custom.name = e.target.value;
      b.querySelectorAll('[data-cg]').forEach(x => x.onclick = () => { O.custom.g = x.dataset.cg; renderO(); });
      b.querySelectorAll('[data-ce]').forEach(x => x.onclick = () => { O.custom.eq = x.dataset.ce; renderO(); });
      $('c-cancel').onclick = () => { O.custom = null; renderO(); };
      $('c-add').onclick = () => { const n = O.custom.name.trim(); if (!n) { toast(t('needCustom')); return; } const k = 'c' + Date.now(); EX[k] = { de:n, en:n, g:O.custom.g, eq:O.custom.eq, custom:true }; O.picked.push([k, 4]); O.custom = null; save(); renderO(); };
    }
    $('o-save') && ($('o-save').onclick = () => { const n = O.name.trim(); if (!n || !O.picked.length) { toast(t('needName')); return; } const ex = O.picked.map(p => [...p]); if (O.editId) { const w = wById(O.editId); w.name = n; w.ex = ex; } else workouts.unshift({ id:'w' + Date.now(), name:n, ex }); const wasEdit = !!O.editId, eid = O.editId; save(); closeO(); renderSelect(); toast(wasEdit ? '✓' : t('saved')); if (W && W.mode === 'ready' && W.src.id === eid) prepareWorkout(wById(eid)); });
  } else {
    b.innerHTML = `<div class="inner">
      <div class="row"><button class="iconbtn" id="o-back" aria-label="Zurück">←</button><span class="eyebrow">${t('pickEx')}</span><span style="width:44px"></span></div>
      <div class="searchrow"><input class="search" id="o-q" enterkeyhint="search" placeholder="${t('searchPh')}" value="${esc(O.q)}"><button class="filterbtn ${O.filter?'on':''}" id="o-f" aria-label="Filter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M7 12h10M10 18h4"/></svg></button></div>
      ${O.filter ? `<div class="filters"><div class="frow"><span>${t('onlyFav')} ★</span><button class="toggle" role="switch" aria-checked="${O.onlyFav}" data-ff="fav"><i></i></button></div>${Object.entries(t('groups')).map(([g, l]) => `<div class="frow"><span>${l}</span><button class="toggle" role="switch" aria-checked="${O.groups.has(g)}" data-ff="${g}"><i></i></button></div>`).join('')}</div>` : ''}
      <div id="o-list"></div></div>`;
    renderPickList(); setOBar('');
    $('o-back').onclick = closeO;
    $('o-q').oninput = e => { O.q = e.target.value; renderPickList(); };
    $('o-f').onclick = () => { O.filter = !O.filter; renderO(); };
    b.querySelectorAll('[data-ff]').forEach(x => x.onclick = () => { const f = x.dataset.ff; if (f === 'fav') O.onlyFav = !O.onlyFav; else O.groups.has(f) ? O.groups.delete(f) : O.groups.add(f); renderO(); });
  }
}
function renderPickList() {
  const L = $('o-list'); L.innerHTML = '';
  const starBtn = k => `<button class="star" data-star="${k}" aria-label="Favorit">${S.fav.includes(k) ? '★' : '☆'}</button>`;
  if (O.mode === 'add') {
    const ks = listKeys(k => !W.ex.some(e => e.k === k)); if (!ks.length) L.innerHTML = `<p class="hint" style="padding:14px 0">${t('noMatch')}</p>`;
    ks.forEach(k => {
      const x = document.createElement('div'); x.className = 'pick';
      x.innerHTML = `${ico(k)}<button class="pmain" data-pk="1">${esc(exName(k))}<br><small>${t('groups')[EX[k].g]} · ${t('eqs')[EX[k].eq]}</small></button><span></span><button class="box" data-pk="1" aria-label="hinzufügen">+</button>`;
      x.querySelectorAll('[data-pk]').forEach(y => y.onclick = () => { W.ex.push({ k, target:4, sets:[], w: LAST[k] ? LAST[k][0] : (isBW(k) ? 0 : 20), r: LAST[k] ? LAST[k][1] : 10 }); tplAdd(k, 4); closeO(); renderW(); });
      L.appendChild(x);
    });
    return;
  }
  if (O.mode === 'create') {
    const ks = listKeys(); if (!ks.length) L.innerHTML = `<p class="hint" style="padding:14px 0">${t('noMatch')}</p>`;
    ks.forEach(k => {
      const on = O.picked.some(p => p[0] === k); const x = document.createElement('div'); x.className = 'pick' + (on ? ' on' : '');
      x.innerHTML = `${ico(k)}<button class="pmain" data-pk="1">${esc(exName(k))}<br><small>${t('groups')[EX[k].g]} · ${t('eqs')[EX[k].eq]}${EX[k].custom ? ' · ' + t('own') : ''}</small></button>${starBtn(k)}<button class="box" data-pk="1" aria-label="auswählen">${on ? '✓' : ''}</button>`;
      x.querySelectorAll('[data-pk]').forEach(y => y.onclick = () => { const i = O.picked.findIndex(p => p[0] === k); i >= 0 ? O.picked.splice(i, 1) : O.picked.push([k, 4]); renderO(); });
      L.appendChild(x);
    });
  } else {
    Object.keys(EX).filter(k => exMatches(k, O.q) && O.groups.has(EX[k].g) && (!O.onlyFav || S.fav.includes(k))).sort((a, b) => (lastAgoEx(a) ?? 1e9) - (lastAgoEx(b) ?? 1e9)).forEach(k => {
      const a = lastAgoEx(k); const x = document.createElement('div'); x.className = 'pick';
      x.innerHTML = `${ico(k)}<button class="pmain" data-sel="1">${esc(exName(k))}<br><small>${a === null ? t('notTrained') : t('lastDone', t('ago', a))}</small></button>${starBtn(k)}<span></span>`;
      x.querySelector('[data-sel]').onclick = () => { S.chartKey = k; save(); closeO(); renderProgress(); };
      L.appendChild(x);
    });
  }
  L.querySelectorAll('[data-star]').forEach(s => s.onclick = () => { if (toggleFav(s.dataset.star)) { save(); renderPickList(); } });
}

/* ---------- Progress ---------- */
let progTab = 'me';
let calOpen = false, calMonth = 0, selDay = null, dayOpen = false, info = {};
function forecast(d, ss) {
  const H = S.fcHor || 0; if (!H) return [];
  const lastAgo = ss[ss.length - 1].ago, keep = S.fcLook ? ss.map(x => x.ago - lastAgo <= S.fcLook * 7) : ss.map(() => true);
  const ys = d.filter((_, i) => keep[i]), n = ys.length; if (n < 3) return [];
  const xs = ys.map((_, i) => Math.log(i + 1));
  const mx = xs.reduce((a, b) => a + b) / n, my = ys.reduce((a, b) => a + b) / n;
  const b = xs.reduce((a, x, i) => a + (x - mx) * (ys[i] - my), 0) / xs.reduce((a, x) => a + (x - mx) ** 2, 0); const a = my - b * mx;
  const sd = Math.sqrt(ys.reduce((s, y, i) => s + (y - (a + b * xs[i])) ** 2, 0) / n) || 1, shift = ys[n-1] - (a + b * Math.log(n));
  return Array.from({length:H}, (_, h) => ({ y: Math.max(0, a + b * Math.log(n + h + 1) + shift), band: sd * (1 + .35 * (h + 1)) }));
}
const histOn = ago => HISTORY.find(h => h.ago === ago);
function renderProgress() {
  const last30 = HISTORY.filter(h => h.ago < 30);
  const vol30 = last30.reduce((a, h) => a + sessVol(h), 0), min30 = last30.reduce((a, h) => a + h.dur, 0);
  if (progTab === 'friends') { renderFriends(); return; }
  $('v-progress').innerHTML = `<div class="inner">
    <h1 class="progh1">${t('progress')}</h1>${progSwitch()}
    <div class="sect" style="border-top:0;padding-top:0">
      <h2 class="hic">${SIC.cal}${t('history')}</h2>
      ${calOpen ? calHTML() : `<div class="strip-wrap"><div class="strip" id="strip">${Array.from({length:90}, (_, i) => dayTile(89 - i)).join('')}</div><button class="today-btn" id="todaybtn" hidden>${t('today')}</button></div>`}
      <button class="calbtn" id="calbtn">${calOpen ? t('lessCal') : t('fullCal')}</button>
      <div id="daycard">${dayCard()}</div>
    </div>
    <div class="sect"><h2 class="hic">${SIC.hist}${t('last30')}</h2>
      <div class="statgrid num"><div><b>${last30.length}</b><span>${t('wCount')}</span></div><div><b>${volTxt(vol30)}</b><span>${t('movedW')}</span></div><div><b>${Math.floor(min30/60)} h ${min30%60} min</b><span>${t('trainTime')}</span></div><div><b>${prCount(30)}</b><span>${t('prs')}</span></div></div></div>
    <div class="sect"><h2 class="hic">${SIC.ex}${t('forEx')}</h2>
      <button class="exsel" id="exsel"><b>${esc(exName(S.chartKey))}</b><span class="drop">▼</span></button>
      ${S.fav.length ? `<div class="favs">${S.fav.map(k => `<button class="fav ${k===S.chartKey?'on':''}" data-ck="${k}">★ ${esc(exName(k))}</button>`).join('')}</div>` : ''}
      <div id="charts"></div>
    </div>
    <div class="sect"><h2 class="hic">${SIC.pb}${t('pbs')}</h2><div>${pbHTML() || `<p class="hint">${t('noPB')}</p>`}</div></div>
  </div>`;
  bindProgSwitch();
  $('calbtn').onclick = () => { calOpen = !calOpen; renderProgress(); };
  $('exsel').onclick = openPicker;
  document.querySelectorAll('[data-ck]').forEach(b => b.onclick = () => { S.chartKey = b.dataset.ck; renderProgress(); });
  bindDays();
  $('calprev') && ($('calprev').onclick = () => { calMonth--; renderProgress(); });
  $('calnext') && ($('calnext').onclick = () => { if (calMonth < 0) { calMonth++; renderProgress(); } });
  const strip = $('strip');
  if (strip) { strip.scrollLeft = strip.scrollWidth; const tb = $('todaybtn'); strip.addEventListener('scroll', () => { tb.hidden = strip.scrollLeft > strip.scrollWidth - strip.clientWidth - 40; }); tb.onclick = () => strip.scrollTo({ left: strip.scrollWidth, behavior:'smooth' }); }
  renderCharts();
}
const PIC1 = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 21c0-4.4 3.4-7.5 7.5-7.5s7.5 3.1 7.5 7.5"/></svg>', PIC2 = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8.5" r="3.2"/><path d="M2.5 20.5c0-3.9 2.9-6.6 6.5-6.6s6.5 2.7 6.5 6.6"/><circle cx="16.5" cy="7" r="2.7"/><path d="M15.6 12.4c3.4-.4 6 2 6 5.6"/></svg>';
const progSwitch = () => `<div class="seg pseg"><button data-ptab="me" class="${progTab === 'me' ? 'on' : ''}">${PIC1}${S.lang === 'de' ? 'Ich' : 'Me'}</button><button data-ptab="friends" class="${progTab === 'friends' ? 'on' : ''}">${PIC2}${S.lang === 'de' ? 'Freunde' : 'Friends'}</button></div>`;
function bindProgSwitch() { document.querySelectorAll('[data-ptab]').forEach(b => b.onclick = () => { progTab = b.dataset.ptab; renderProgress(); $('v-progress').scrollTop = 0; }); }
const initialsOf = n => ((n || '').trim().split(/\s+/).filter(Boolean).map(w => w[0]).join('').slice(0, 2) || '?').toUpperCase();
// sample friends until the cloud mode exists
const DEMO_FRIENDS = [
  { name:'Max', user:'max.lifts', lv:9, pts:9400, last:['Push Day', 1], week:[3, 9800, 165], month:[13, 780, 6], fav:['Push Day', 5], pbs:[['bench', 102.5, 3], ['squat', 130, 5], ['deadlift', 160, 3]] },
  { name:'Lena', user:'lena_squats', lv:6, pts:3600, last:['Leg Day', 2], week:[2, 7100, 110], month:[9, 510, 3], fav:['Leg Day', 4], pbs:[['squat', 95, 5], ['deadlift', 110, 4], ['ohp', 42.5, 6]] },
  { name:'Tom', user:'tom.t', lv:4, pts:1500, last:['Pull Day', 4], week:[1, 3200, 55], month:[5, 240, 1], fav:['Pull Day', 3], pbs:[['deadlift', 140, 2], ['bench', 80, 5], ['squat', 100, 6]] } ];
function myPB(k) { const ss = sessionsFor(k).filter(x => x.best > 0); if (!ss.length) return null; const b = ss.reduce((x, y) => y.best > x.best ? y : x); const st = b.sets.reduce((x, y) => e1rm(effW(k, y.w), y.r) > e1rm(effW(k, x.w), x.r) ? y : x); return [k, st.w, st.r]; }
const userName = () => S.username || 'test'; // placeholder until accounts (username + password) come with the cloud
const pbKeys = () => { const k = (S.pbEx || []).filter(x => S.fav.includes(x)); return (k.length ? k : S.fav).slice(0, 3); };
function myProfile() { const pts = totalPts(), wk = weekStats(), h = [...HISTORY].sort((a, b) => a.ago - b.ago || b.date - a.date)[0], m = HISTORY.filter(x => x.ago < 30);
  const cnt = {}; m.forEach(x => { const n = x.wname || (wById(x.wid) || {}).name; if (n) cnt[n] = (cnt[n] || 0) + 1; }); const fav = Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a])[0];
  return { me: true, name: S.name || (S.lang === 'de' ? 'Du' : 'You'), user: userName(), lv: levelOf(pts), pts, last: h ? [h.wname || (wById(h.wid) || {}).name || '', h.ago] : null, week: [wk.n, wk.vol, wk.min],
    month: [m.length, m.reduce((a, x) => a + x.dur, 0), prCount(30)], fav: fav ? [fav, cnt[fav]] : null, pbs: pbKeys().map(myPB).filter(Boolean), vis: S.vis }; }
const avatarHTML = (name, size) => `<span class="avatar dec" style="width:${size}px;height:${size}px;font-size:${Math.round(size * .34)}px">${esc(initialsOf(name))}</span>`;
function renderFriends() {
  const de = S.lang === 'de', me = myProfile();
  $('v-progress').innerHTML = `<div class="inner"><h1 class="progh1">${t('progress')}</h1>${progSwitch()}
    <button class="fr-me" id="fr-me">${avatarHTML(me.name, 52)}<div><b>${esc(me.name)}</b><small>${me.user ? '@' + esc(me.user) + ' · ' : ''}Level ${me.lv + 1} · ${esc(LEVELS[me.lv][S.lang])} · ${fmt(me.pts)} Points</small></div>${CHEV}</button>
    <div class="fr-cta"><b>${de ? 'Freunde folgen, Level vergleichen' : 'Follow friends, compare levels'}</b><p class="hint">${de ? 'Kommt mit dem Cloud-Modus: Folge Freunden, sieh ihre Level, Rekorde und letzten Trainings.' : 'Coming with cloud sync: follow friends, see their levels, records and recent sessions.'}</p><button class="mainbtn" id="fr-find">${de ? 'Freunde finden' : 'Find friends'}</button></div>
    <div class="sect"><div class="row"><h2>${de ? 'Vorschau' : 'Preview'}</h2><span class="eyebrow">${de ? 'Beispieldaten' : 'Sample data'}</span></div>
      <div>${DEMO_FRIENDS.map((f, i) => `<button class="fr-row" data-fr="${i}">${avatarHTML(f.name, 44)}<div><b>${esc(f.name)}</b><small>${levelIcon(f.lv)} Level ${f.lv + 1} · ${esc(LEVELS[f.lv][S.lang])}</small></div><div class="fr-kpi"><b>${esc(f.last[0])}</b><small>${t('ago', f.last[1])}</small></div></button>`).join('')}</div></div></div>`;
  bindProgSwitch();
  $('fr-find').onclick = () => { O = { mode:'find', q:'' }; renderO(); openO(); };
  $('fr-me').onclick = () => openProfile(myProfile());
  document.querySelectorAll('[data-fr]').forEach(b => b.onclick = () => openProfile(DEMO_FRIENDS[+b.dataset.fr]));
}
function openProfile(p, from) { O = { mode:'profile', p, from }; renderO(); openO(); $('obody').scrollTop = 0; }
// a profile as others see it (own profile respects the visibility settings)
function profileHTML(p) {
  const de = S.lang === 'de', v0 = p.vis || {}, v = k => v0[k] !== false;
  const dec = (val, lbl) => `<div class="pdec dec"><b class="num">${val}</b><span>${lbl}</span></div>`;
  return `<div class="inner"><div class="row"><button class="iconbtn" id="o-back" aria-label="Zurück">←</button><span class="eyebrow">${p.me ? (de ? 'Dein Profil' : 'Your profile') : (de ? 'Profil' : 'Profile')}</span><span style="width:44px"></span></div>
    <div class="pf-head">${avatarHTML(p.name, 104)}<h1>${esc(p.name)}</h1>${p.user ? `<span class="pf-user">@${esc(p.user)}</span>` : ''}
      ${v('level') ? `<div class="pf-lvl">${levelIcon(p.lv)}<span>Level ${p.lv + 1} · ${esc(LEVELS[p.lv][S.lang])} · <span class="num">${fmt(p.pts)}</span> Points</span></div>` : ''}
      ${p.me ? '' : `<button class="${O.follow && O.follow[p.user] ? 'ghostbtn' : 'mainbtn'} pf-follow" id="pf-follow">${O.follow && O.follow[p.user] ? (de ? 'Folge ich ✓' : 'Following ✓') : (de ? 'Folgen' : 'Follow')}</button>`}</div>
    ${v('week') ? `<div class="sect"><h2 class="hic">${SIC.cal}${t('thisWeek')}</h2><div class="pdecs">${dec(p.week[0], t('workouts'))}${dec(volTxt(p.week[1]), t('moved'))}${dec(p.week[2], t('minutes'))}</div></div>` : ''}
    ${v('month') && p.month ? `<div class="sect"><h2 class="hic">${SIC.cal}${t('last30')}</h2><div class="pdecs">${dec(p.month[0], t('workouts'))}${dec(Math.round(p.month[1] / 60) + ' h', de ? 'Training' : 'Training')}${dec(p.month[2], de ? 'Rekorde' : 'Records')}</div></div>` : ''}
    ${v('pbs') && p.pbs.length ? `<div class="sect"><h2 class="hic">${SIC.pb}Personal Bests</h2><div>${p.pbs.map(([k, w, r]) => `<div class="pf-pb"><span class="pf-ic">${ico(k)}</span><b>${esc(exName(k))}</b><span class="num">${esc(wLabel(k, w))} × ${r}</span></div>`).join('')}</div></div>` : ''}
    ${v('last') && p.last ? `<div class="sect"><h2 class="hic">${SIC.hist}${de ? 'Letztes Training' : 'Last session'}</h2><div class="pf-last"><b>${esc(p.last[0])}</b><span>${t('ago', p.last[1])}</span></div></div>` : ''}
    ${v('fav') && p.fav ? `<div class="sect"><h2 class="hic">${SIC.ex}${de ? 'Lieblings-Workout' : 'Favourite workout'}</h2><div class="pf-last"><b>${esc(p.fav[0])}</b><span>${de ? `${p.fav[1]}× in 30 Tagen` : `${p.fav[1]}× in 30 days`}</span></div></div>` : ''}
    ${p.me ? `<button class="ghostbtn" id="pf-edit">${de ? 'Profil bearbeiten' : 'Edit profile'}</button>` : `<p class="hint">${de ? 'Beispieldaten. Folgen funktioniert mit dem Cloud-Modus.' : 'Sample data. Following works with cloud sync.'}</p>`}</div>`;
}
function findHTML() {
  const de = S.lang === 'de', q = (O.q || '').toLowerCase().replace(/^@/, ''), hits = q ? DEMO_FRIENDS.filter(f => f.user.includes(q) || f.name.toLowerCase().includes(q)) : [];
  return `<div class="inner"><div class="row"><button class="iconbtn" id="o-back" aria-label="Zurück">←</button><span class="eyebrow">${de ? 'Freunde finden' : 'Find friends'}</span><span style="width:44px"></span></div>
    <h1>${de ? 'Freunde finden' : 'Find friends'}</h1>
    <div><b>${de ? 'Per Benutzername' : 'By username'}</b><label class="userin" style="margin-top:10px"><span>@</span><input id="f-q" value="${esc(O.q || '')}" placeholder="${de ? 'benutzername' : 'username'}" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="search"></label>
      <div id="f-hits">${hits.map(f => `<button class="fr-row" data-fh="${DEMO_FRIENDS.indexOf(f)}">${avatarHTML(f.name, 40)}<div><b>${esc(f.name)}</b><small>@${esc(f.user)}</small></div>${CHEV}</button>`).join('') || (q ? `<p class="hint" style="margin-top:10px">${de ? 'Niemand gefunden.' : 'No one found.'}</p>` : `<p class="hint" style="margin-top:10px">${de ? 'Zum Ausprobieren: max, lena, tom (Beispieldaten).' : 'Try: max, lena, tom (sample data).'}</p>`)}</div></div>
    <div class="sect"><h2>${de ? 'Per QR-Code' : 'By QR code'}</h2><p class="hint">${de ? 'Dein Freund scannt deinen Code und landet direkt auf deinem Profil.' : 'Your friend scans your code and lands right on your profile.'}</p>
      <div class="qrbox" id="qrbox" aria-label="QR-Code"></div><div class="linkrow"><span class="num">@${esc(userName())}</span></div>
      <button class="ghostbtn" id="f-scan">${de ? 'Code eines Freundes scannen' : 'Scan a friend’s code'}</button></div></div>`;
}

function bindDays() {
  document.querySelectorAll('[data-day]').forEach(b => b.onclick = () => { const d = +b.dataset.day; selDay = selDay === d ? null : d; dayOpen = false; document.querySelectorAll('[data-day]').forEach(x => x.classList.toggle('sel', +x.dataset.day === selDay)); $('daycard').innerHTML = dayCard(); bindDayCard(); });
  bindDayCard();
}
function bindDayCard() { document.querySelectorAll('[data-dayrv]').forEach(b => b.onclick = () => { const h = HISTORY.find(x => x.id === b.dataset.dayrv); if (h) { O = { mode:'review', h, open:false }; renderO(); openO(); $('obody').scrollTop = 0; } }); }
function dayTile(ago) { const d = dayDate(ago), h = histOn(ago); return `<button class="day ${h?'on':''} ${ago===0?'today':''} ${selDay===ago?'sel':''}" data-day="${ago}"><small>${ago === 0 ? t('todayShort') : t('wd')[(d.getDay()+6)%7]}</small><b class="num">${d.getDate()}</b></button>`; }
function dayCard() {
  if (selDay === null) return '';
  const d = dayDate(selDay), hs = HISTORY.filter(x => x.ago === selDay).sort((a, b) => a.date - b.date), ds = d.toLocaleDateString(loc(), { weekday:'long', day:'2-digit', month:'2-digit' });
  if (!hs.length) return `<div class="daycard"><b>${esc(ds)}</b><span class="hint">${t('noWorkout')}</span></div>`;
  return hs.map((h, n) => { const nsets = h.ex.reduce((a, e) => a + e.sets.length, 0);
    return `<div class="daycard" ${n ? 'style="margin-top:18px"' : ''}><div><div class="eyebrow">${esc(ds)}</div><b style="font-family:var(--display);font-stretch:110%;font-weight:900;font-size:22px;text-transform:uppercase">${esc(h.wname || (wById(h.wid) || {}).name || '')}</b></div>
    <div class="trio num"><div class="dec"><span>${t('moved')}</span><b>${volTxt(sessVol(h))}</b></div><div class="dec"><span>${t('duration')}</span><b>${t('min', h.dur)}</b></div><div class="dec"><span>${t('setsWord')}</span><b>${nsets}</b></div></div>
    <button class="morebtn" data-dayrv="${esc(h.id)}"><span class="mdec dec">+</span>${t('details')}</button></div>`; }).join('');
}
function calHTML() {
  const today = dayDate(0); const m = new Date(today.getFullYear(), today.getMonth() + calMonth, 1);
  const first = (m.getDay() + 6) % 7, days = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
  let g = t('wd').map(w => `<div class="wd">${w}</div>`).join('');
  for (let i = 0; i < first; i++) g += '<button class="out" tabindex="-1"></button>';
  for (let dd = 1; dd <= days; dd++) { const d = new Date(m.getFullYear(), m.getMonth(), dd, 12); const ago = Math.round((today - d) / 864e5); const h = ago >= 0 ? histOn(ago) : null;
    g += ago < 0 ? `<button disabled style="opacity:.3">${dd}</button>` : `<button class="${h?'on':''} ${ago===0?'today':''} ${selDay===ago?'sel':''}" data-day="${ago}">${dd}</button>`; }
  return `<div style="display:flex;flex-direction:column;gap:10px"><div class="row"><button class="iconbtn" id="calprev" aria-label="zurück" style="width:36px;height:36px;font-size:16px">‹</button><b>${m.toLocaleDateString(loc(), { month:'long', year:'numeric' })}</b><button class="iconbtn" id="calnext" aria-label="vor" style="width:36px;height:36px;font-size:16px;${calMonth<0?'':'opacity:.3'}">›</button></div><div class="calgrid">${g}</div></div>`;
}
function pbHTML() {
  return Object.keys(EX).map(k => { const ss = sessionsFor(k).filter(s => s.best > 0); if (!ss.length) return null; const b = ss.reduce((x, y) => y.best > x.best ? y : x); const s = b.sets.reduce((x, y) => e1rm(effW(k, y.w), y.r) > e1rm(effW(k, x.w), x.r) ? y : x); return { k, ago:b.ago, w:s.w, r:s.r, best:b.best }; })
    .filter(Boolean).sort((a, b) => a.ago - b.ago).slice(0, 6).map(p => `<div class="pb"><b>${esc(exName(p.k))}</b><span class="pw num">${esc(wLabel(p.k, p.w))} × ${p.r}</span><small>${dShort(dayDate(p.ago))}</small><small>${t('approx', fmt(Math.round(p.best)))}</small></div>`).join('');
}
function renderCharts() {
  const k = S.chartKey; const ss = sessionsFor(k).slice(0, 12).reverse();
  const wrap = $('charts');
  if (!ss.length) { wrap.innerHTML = `<div class="empty">${t('noData')}</div>`; return; }
  if (ss.every(s => s.best <= 0)) { wrap.innerHTML = `<div class="empty">${t('bwEmpty')}</div>`; return; }
  const defs = [
    { id:'str', title:t('chStrength'), info:'info1rm', data:ss.map(s => s.best), fc:true },
    { id:'vol', title:t('chVolume'), info:'infoVol', data:ss.map(s => s.vol), fc:true },
    { id:'wgt', title:t('chWeight'), info:'infoWeight', data:ss.map(s => effW(k, s.top.w)), fc:true }
  ];
  wrap.innerHTML = defs.map(d => `<div class="chartbox"><div class="charthead"><h2>${d.title}</h2><button class="info" data-info="${d.info}" aria-label="Info">i</button></div><div class="val num" id="val-${d.id}"></div><svg class="chart" id="ch-${d.id}" role="img" aria-label="${d.title}"></svg>${d.fc && S.fcHor ? `<div class="legend" id="lg-${d.id}"><span><i></i>${t('trend')}</span><span><i class="dash"></i>${t('forecast')}</span></div>` : ''}</div>`).join('');
  wrap.querySelectorAll('[data-info]').forEach(b => b.onclick = () => showInfo(t(b.dataset.info) + (S.fcHor ? `<hr class="ihr"><b>${t('fcTitle')}</b><br>${t('infoFc', S.fcLook, S.fcHor)}` : '')));
  defs.forEach(d => drawChart(d, ss));
}
function drawChart(def, ss) {
  const d = def.data, f = def.fc && d.length >= 4 ? forecast(d, ss) : [], all = d.length + f.length, li = d.length - 1;
  const col = S.trendColor ? (d[li] >= d[0] ? 'var(--up)' : 'var(--down)') : 'var(--fg)';
  const W0 = 340, H0 = f.length ? 200 : 160, L = 40, R = 12, Tp = 12, B = 22;
  const vals = d.concat(f.map(p => p.y + p.band), f.map(p => p.y - p.band));
  let lo = Math.min(...vals), hi = Math.max(...vals); const pad = (hi - lo) * .15 || 5; lo -= pad; hi += pad;
  const x = i => L + i * (W0 - L - R) / Math.max(1, all - 1), y = v => Tp + (hi - v) * (H0 - Tp - B) / (hi - lo);
  const nice = v => def.id === 'vol' ? (v >= 1000 ? fmt(v/1000, 1) + 't' : fmt(Math.round(v))) : fmt(Math.round(v));
  let s = '';
  [lo + pad, (lo + hi) / 2, hi - pad].forEach(v => s += `<line x1="${L}" x2="${W0-R}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line)"/><text x="${L-6}" y="${y(v)+4}" text-anchor="end" font-size="10" font-family="var(--mono)" fill="var(--muted)">${nice(v)}</text>`);
  if (f.length) {
    s += `<line x1="${x(li)}" x2="${x(li)}" y1="${Tp}" y2="${H0-B}" stroke="var(--line)" stroke-dasharray="2 3"/>`;
    const band = [[x(li), y(d[li])]].concat(f.map((p, h) => [x(li+1+h), y(p.y + p.band)])).concat(f.map((p, h) => [x(li+1+h), y(p.y - p.band)]).reverse());
    s += `<polygon points="${band.map(p => p.join(',')).join(' ')}" fill="${col}" opacity=".07"/><polyline points="${x(li)},${y(d[li])} ${f.map((p, h) => `${x(li+1+h)},${y(p.y)}`).join(' ')}" fill="none" stroke="${col}" stroke-width="2" stroke-dasharray="5 5"/>`;
  }
  const pts = d.map((v, i) => `${x(i)},${y(v)}`).join(' ');
  s += `<polygon points="${x(0)},${H0-B} ${pts} ${x(li)},${H0-B}" fill="${col}" opacity=".08"/><polyline points="${pts}" fill="none" stroke="${col}" stroke-width="2.5" stroke-linejoin="round"/>`;
  const dateAt = i => i <= li ? dShort(dayDate(ss[i].ago)) : dShort(dayDate(ss[li].ago - (i - li) * 7));
  [[0,'start'], [all - 1,'end']].forEach(([i, a]) => s += `<text x="${x(i)}" y="${H0-6}" text-anchor="${a}" font-size="10" font-family="var(--mono)" fill="var(--muted)">${dateAt(i)}</text>`);
  s += `<g class="scrub"></g>`;
  const svg = $('ch-' + def.id); svg.setAttribute('viewBox', `0 0 ${W0} ${H0}`); svg.innerHTML = s;
  document.querySelectorAll(`#lg-${def.id} i`).forEach(i => i.style.borderColor = col);
  const sc = svg.querySelector('.scrub'), val = $('val-' + def.id);
  const unit = v => def.id === 'vol' ? (v >= 1000 ? fmt(v/1000, 2) + ' t' : fmt(Math.round(v)) + ' kg') : fmtW(r05(v)) + ' kg';
  const showAt = (i, scrub) => {
    const isF = i > li, v = isF ? f[i-li-1].y : d[i], X = x(i), Y = y(v);
    const extra = def.id === 'wgt' && !isF ? ` × ${ss[i].top.r}` : '';
    val.textContent = `${unit(v)}${extra} · ${dateAt(i)}${isF ? ' · ' + t('forecastTag') : ''}`;
    sc.innerHTML = (scrub ? `<line x1="${X}" x2="${X}" y1="${Tp}" y2="${H0-B}" stroke="${col}" stroke-dasharray="3 3"/>` : '') + `<circle cx="${X}" cy="${Y}" r="5" fill="${isF ? 'var(--bg)' : col}" stroke="${col}" stroke-width="2"/>`;
  };
  const idxAt = e => { const r = svg.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width * W0; return Math.max(0, Math.min(all - 1, Math.round((px - L) / ((W0 - L - R) / Math.max(1, all - 1))))); };
  let down = false;
  svg.addEventListener('pointerdown', e => { down = true; svg.setPointerCapture(e.pointerId); showAt(idxAt(e), true); });
  svg.addEventListener('pointermove', e => { if (down || e.pointerType === 'mouse') showAt(idxAt(e), true); });
  const reset = () => { down = false; showAt(li, false); };
  svg.addEventListener('pointerup', reset); svg.addEventListener('pointercancel', reset); svg.addEventListener('pointerleave', reset);
  showAt(li, false);
}

/* ---------- Settings ---------- */
const PULSE = { breathe:'p-breathe 2.6s', beat:'p-beat 1.6s', wobble:'p-wobble 2.4s', bounce:'p-bounce 1.8s', tilt:'p-tilt 2.8s', squash:'p-squash 2s', twist:'p-twist 3s', off:'none' };
// animated mini chart for the trend-colour setting: line draws in, then the dashed forecast follows
function trendPreview(color) {
  const line = (pts, fc, col, delay) => `<polyline class="tp-line" style="animation-delay:${delay}s" pathLength="100" points="${pts}" fill="none" stroke="${col}" stroke-width="3" stroke-linejoin="round"/><polyline class="tp-fc" style="animation-delay:${delay}s" points="${fc}" fill="none" stroke="${col}" stroke-width="2.5" stroke-dasharray="5 4"/>`;
  const up = line('6,50 22,44 36,46 50,34 64,30 78,22', '78,22 96,16 114,12', color ? 'var(--up)' : 'var(--fg)', 0);
  const down = color ? line('6,24 22,26 36,32 50,30 64,38 78,42', '78,42 96,47 114,50', 'var(--down)', .25) : '';
  return `<svg viewBox="0 0 120 58" class="tprev" aria-hidden="true"><line x1="78" x2="78" y1="4" y2="56" stroke="var(--line)" stroke-dasharray="2 3"/>${up}${down}</svg>`;
}
// ---- Onboarding story: update whenever a central feature or the handling changes ----
const ONBOARDING = {
  de: [
    ['welcome', 'Willkommen bei TRAIN', 'Dein Gym-Tracker. Puristisch, schnell und nur für dich.'],
    ['start', 'In drei Taps zum Training', 'Zehneck antippen, Workout wählen, Start. Zeit für neue Personal Bests.'],
    ['adjust', 'Dein Workout, deine Regeln', 'Gewicht, Wiederholungen und Sätze passt du jederzeit an. Neue Übung? Einfach hinzufügen.'],
    ['train', 'Heute keine Lust auf Dips?', 'Übung nach links wischen und weg damit. Einzelne Sätze löschst du mit ✕.'],
    ['mini', 'Immer dabei', 'Workout nach unten wischen. Es läuft als Leiste weiter, antippen holt es zurück.'],
    ['progress', 'Fortschritt sehen', 'Kalender, Rekorde und Prognosen bringen dein Training aufs nächste Level.'],
    ['points', 'Points & Level', 'Sammle Points und steig im Level auf. Regelmäßiges Training und echte Steigerungen werden belohnt.'] ],
  en: [
    ['welcome', 'Welcome to TRAIN', 'Your gym tracker. Minimal, fast and just for you.'],
    ['start', 'Three taps to train', 'Tap the decagon, pick a workout, start. Time for new personal bests.'],
    ['adjust', 'Your workout, your rules', 'Change weight, reps and sets any time. New exercise? Just add it.'],
    ['train', 'Not feeling dips today?', 'Swipe the exercise left and it is gone. Delete single sets with ✕.'],
    ['mini', 'Always with you', 'Swipe the workout down. It keeps running as a bar, tap it to bring it back.'],
    ['progress', 'See your progress', 'Calendar, records and forecasts take your training to the next level.'],
    ['points', 'Points & levels', 'Collect points and level up. Consistent training and real progress get rewarded.'] ] };
// small animated mock-ups of the real app for each onboarding slide
function onbVisual(kind) {
  const de = S.lang === 'de', row = (txt, go) => `<div class="om-row"><i></i><span>${txt}</span>${go ? '<b class="dec">GO</b>' : ''}</div>`;
  if (kind === 'welcome') return `<div class="om-phone"><div class="om-dec dec pulse">TRAIN</div></div>`;
  const fin = c => `<span class="om-finger ${c}"></span>`;
  if (kind === 'start') return `<div class="om-phone om-flow">
      <div class="om-stage s1"><div class="om-cw"><div class="om-dec dec om-c">${de ? 'LOS<br>GEHT’S' : 'LET’S<br>GO'}</div>${fin('f1')}</div></div>
      <div class="om-stage s2"><div class="om-title"></div><div class="om-row"><i></i><span>Push Day</span><span class="om-gow"><b class="dec">GO</b>${fin('f2')}</span></div>${row('Pull Day', 1)}${row('Leg Day', 1)}</div>
      <div class="om-stage s3"><div class="om-eb">${de ? 'BEREIT?' : 'READY?'}</div><div class="om-h">PUSH DAY</div><div class="om-line"></div><div class="om-line"></div><div class="om-line"></div><div class="om-start">START${fin('f3')}</div></div></div>`;
  const step = (lbl, v, anim) => `<div class="om-stp"><small>${lbl}</small><div><i>−</i><b>${anim ? `<span class="om-kg"><em>${v}</em><em>${anim}</em></span>` : v}</b><i class="om-plus">+${anim ? fin('fp') : ''}</i></div></div>`;
  if (kind === 'adjust') return `<div class="om-phone om-adj"><div class="om-bh"><span class="om-n">01</span><span>${de ? 'BANKDRÜCKEN' : 'BENCH PRESS'}</span><em>0/3</em></div>
      <div class="om-act"><small>${de ? 'SATZ 1' : 'SET 1'}</small><div class="om-steps">${step('KG', '72,5', '75')}${step(de ? 'WDH.' : 'REPS', '8')}</div></div>
      <div class="om-old"><div class="om-pl"><span>2</span>72,5 kg × 8<em>✕</em></div><div class="om-pl"><span>3</span>72,5 kg × 8<em>✕</em></div></div>
      <div class="om-addx">${de ? '+ Übung hinzufügen' : '+ Add exercise'}${fin('fa')}</div>
      <div class="om-new"><div class="om-bh"><span class="om-n">02</span><span>${de ? 'SEITHEBEN' : 'LATERAL RAISE'}</span><em>0/3</em></div><div class="om-pl"><span>1</span>10 kg × 12<em>✕</em></div><div class="om-pl"><span>2</span>10 kg × 12<em>✕</em></div><div class="om-pl"><span>3</span>10 kg × 12<em>✕</em></div></div></div>`;
  if (kind === 'train') return `<div class="om-phone om-delx">
      <div class="om-swipe"><div class="om-del"><span>${t('swipeDel')}${fin('fd2')}</span></div><div class="om-bh om-dips"><span class="om-n">01</span><span>DIPS</span><em>0/3</em>${fin('fd1')}</div></div>
      <div class="om-ex2"><div class="om-bh"><span class="om-n"><span class="om-num"><em>02</em><em>01</em></span></span><span>${de ? 'TRIZEPSDRÜCKEN' : 'TRICEPS PUSHDOWN'}</span><em>0/3</em></div>
        <div class="om-pl"><span>1</span>30 kg × 12<em>✕</em></div><div class="om-pl om-plx"><span>2</span>30 kg × 12<em>✕${fin('fx')}</em></div><div class="om-pl"><span class="om-n3"><em>3</em><em>2</em></span>30 kg × 12<em>✕</em></div></div></div>`;
  if (kind === 'mini') return `<div class="om-phone"><div class="om-sheet"><div class="om-eb" style="text-align:center">PUSH DAY</div><div class="om-tdec dec"><span>01:23</span></div><div class="om-line"></div><div class="om-line"></div></div>
      <div class="om-bar"><span><small>${de ? 'PAUSE' : 'REST'}</small><b>${de ? 'Bankdrücken' : 'Bench press'}</b></span><b>01:23</b></div><div class="om-nav"></div></div>`;
  if (kind === 'progress') return `<div class="om-phone om-chart">${trendPreview(S.trendColor)}</div>`;
  return `<div class="om-phone"><div class="om-pts"><b>+42</b><span>Points</span></div><div class="om-lvl">${levelIcon(4)}<span>${esc(LEVELS[4][S.lang])}</span></div><div class="om-meter"><i></i></div></div>`;
}
// onboarding: first start (skip with a question) or from Settings > Help (✕ with a question); swipe / arrow keys to go back and forth
function showOnboarding(fromHelp) {
  let i = 0; const el = document.createElement('div'); el.id = 'onb'; el.className = 'onb'; $('app').appendChild(el); const de = S.lang === 'de';
  const close = () => { S.onboarded = true; save(); el.remove(); document.removeEventListener('keydown', key); };
  const ask = () => dialog(fromHelp ? (de ? 'Einführung schließen?' : 'Close the intro?') : (de ? 'Wirklich überspringen?' : 'Skip the intro?'), de ? 'Du kannst sie jederzeit unter Einstellungen › Hilfe wieder ansehen.' : 'You can watch it again any time in Settings › Help.',
    [[de ? 'Weiter ansehen' : 'Keep watching', 'mainbtn', () => {}], [fromHelp ? (de ? 'Schließen' : 'Close') : (de ? 'Überspringen' : 'Skip'), 'ghostbtn', close]]);
  const go = d => { const L = ONBOARDING[S.lang], n = i + d; if (n < 0 || n >= L.length) return; i = n; draw(d); };
  const key = e => { if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); };
  document.addEventListener('keydown', key);
  let x0 = null, y0 = 0;
  el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  el.addEventListener('touchend', e => { if (x0 === null) return; const p = e.changedTouches[0], dx = p.clientX - x0, dy = p.clientY - y0; x0 = null; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) go(dx < 0 ? 1 : -1); }, { passive: true });
  const draw = d => { const L = ONBOARDING[S.lang], [anim, title, text] = L[i], last = i === L.length - 1;
    el.innerHTML = `<div class="onb-in"><div class="row"><span class="eyebrow num">${i + 1} / ${L.length}</span>${fromHelp ? `<button class="iconbtn" id="onb-skip" aria-label="${de ? 'Schließen' : 'Close'}">✕</button>` : `<button class="textbtn" id="onb-skip">${t('onbSkip')}</button>`}</div>
      <div class="onb-vis">${onbVisual(anim)}</div><div class="onb-copy"><h1>${esc(title)}</h1><p class="onb-txt">${esc(text)}</p></div>
      <div class="onb-dots">${L.map((_, j) => `<button class="${j === i ? 'on' : ''}" data-onbdot="${j}" aria-label="${j + 1}"><i></i></button>`).join('')}</div>
      <div class="onb-nav">${i ? `<button class="ghostbtn" id="onb-prev" aria-label="${de ? 'Zurück' : 'Back'}">${CHEV}</button>` : ''}<button class="mainbtn" id="onb-next">${last ? (fromHelp ? (de ? 'Fertig' : 'Done') : t('onbGo')) : t('onbNext')}</button></div></div>`;
    if (d) el.querySelector('.onb-in').animate([{ opacity: 0, transform: `translateX(${d > 0 ? 30 : -30}px)` }, { opacity: 1, transform: 'none' }], { duration: 220, easing: 'ease-out' });
    $('onb-skip').onclick = ask; $('onb-next').onclick = () => { if (last) close(); else go(1); };
    $('onb-prev') && ($('onb-prev').onclick = () => go(-1));
    el.querySelectorAll('[data-onbdot]').forEach(b => b.onclick = () => { const j = +b.dataset.onbdot; if (j !== i) { const dd = j - i; i = j; draw(dd); } }); };
  draw();
}
function playIntro() {
  const go = $('go'); if (!go || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = goRect(go), size = r.width, cx = innerWidth / 2 - size / 2, cy = innerHeight / 2 - size / 2;
  const el = document.createElement('div'); el.id = 'intro'; el.innerHTML = `<div class="intro-bg"></div><div class="intro-dec dec" style="width:${size}px;height:${size}px;left:${cx}px;top:${cy}px"><span>TRAIN</span></div>`;
  $('app').appendChild(el); go.style.visibility = 'hidden';
  const d = el.querySelector('.intro-dec'), bg = el.querySelector('.intro-bg'), label = d.querySelector('span');
  d.animate([{ transform: 'scale(.1) rotate(-144deg)', opacity: 0 }, { transform: 'scale(.52) rotate(-20deg)', opacity: 1, offset: .6 }, { transform: 'scale(.48) rotate(0deg)', opacity: 1 }], { duration: 950, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' }).finished
    .then(() => { label.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' }); bg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 650, fill: 'forwards' });
      const r2 = goRect(go);
      return d.animate([{ transform: 'scale(.48)' }, { transform: `translate(${r2.left - cx}px, ${r2.top - cy}px) scale(${r2.width / size})` }], { duration: 650, easing: 'cubic-bezier(.3,.7,.2,1)', fill: 'forwards' }).finished; })
    .then(() => { go.style.visibility = ''; el.remove(); })
    .catch(() => { go.style.visibility = ''; el.remove(); });
}
function playIntroType() {
  const go = $('go'); if (!go || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = goRect(go), g = greetText, m = g.match(/^(.+?[.!?,])\s+(.+)$/), parts = m ? [m[1], m[2]] : [g];
  const el = document.createElement('div'); el.id = 'intro'; el.className = 'intro2';
  const ce = go.querySelector('.cta'), cr = ce.getBoundingClientRect(), ccs = getComputedStyle(ce), cfs = ccs.fontSize;
  el.innerHTML = `<div class="i2-box"><p class="i2-line"></p><p class="i2-line"></p></div><p class="i2-cta" style="left:${cr.left}px;width:${cr.width}px;top:${cr.top}px;font-size:${cfs};line-height:${ccs.lineHeight};letter-spacing:${ccs.letterSpacing}"></p>`;
  $('app').appendChild(el); go.style.visibility = 'hidden';
  const H = el.getBoundingClientRect().height, box = el.querySelector('.i2-box'); box.style.bottom = (H - cr.top + 28) + 'px'; // real height (iPhone home screen: taller than innerHeight)
  el.querySelectorAll('.i2-line').forEach((l, i) => parts[i] && fitWords(l, parts[i], box.clientWidth - 4));
  let done = false; const finish = () => { if (done) return; done = true; go.style.visibility = ''; el.remove(); };
  el.onclick = finish;
  const lines = el.querySelectorAll('.i2-line'), cta = el.querySelector('.i2-cta'), sleep = ms => new Promise(res => setTimeout(res, ms));
  const type = async (node, text) => { for (let i = 1; i <= text.length && !done; i++) { node.textContent = text.slice(0, i); await sleep(34); } };
  const poly = pts => `polygon(${pts.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(', ')})`;
  (async () => {
    await sleep(250); await type(lines[0], parts[0]); if (parts[1]) { await sleep(140); await type(lines[1], parts[1]); }
    if (done) return; await sleep(220); cta.innerHTML = ce.innerHTML;
    cta.animate([{ opacity: 0, transform: 'scale(.92)' }, { opacity: 1, transform: 'none' }], { duration: 380, fill: 'forwards' });
    await sleep(800); if (done) return;
    el.querySelector('.i2-box').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: 'forwards' });
    const big = decPts(innerWidth / 2, H / 2, Math.hypot(innerWidth, H) / 2 / Math.cos(Math.PI / 10) + 4);
    const r2 = goRect(go), small = decPts(r2.left + r2.width / 2, r2.top + r2.height / 2, r2.width / 2);
    await el.animate([{ clipPath: poly(big) }, { clipPath: poly(small) }], { duration: 750, easing: 'cubic-bezier(.3,.7,.2,1)', fill: 'forwards' }).finished.catch(() => {});
    finish();
  })();
}
// intro 3: motivational line on white, the screen tears apart along a jagged line
// ---- Levels: 15 steps, the last one takes years of consistent training ----
const LEVELS = [
  [0, 'Frischling', 'Rookie', 'sprout'], [150, 'Pumper', 'Pumper', 'flame'], [400, 'Eisenschüler', 'Iron Apprentice', 'kettle'],
  [800, 'Hantelheld', 'Dumbbell Hero', 'db'], [1400, 'Bankdrücker', 'Bench Boss', 'bb'], [2200, 'Kraftpaket', 'Powerhouse', 'arm'],
  [3300, 'Pump-Profi', 'Pump Pro', 'bolt'], [4700, 'Eisenbeißer', 'Iron Biter', 'shield'], [6500, 'Plattenkönig', 'Plate King', 'plate'],
  [8800, 'Stahlkoloss', 'Steel Colossus', 'mountain'], [11700, 'Gym-Legende', 'Gym Legend', 'medal'], [15300, 'Titan', 'Titan', 'trophy'],
  [20000, 'Herkules', 'Hercules', 'crown'], [27000, 'Olymp', 'Olympian', 'diamond'], [36000, 'Unsterblich', 'Immortal', 'deca'] ].map(([p, de, en, ic]) => ({ p, de, en, ic }));
const LVL_IC = {
  sprout:'<path d="M12 21v-8"/><path d="M12 13c0-4 3-6.5 7.5-6.5 0 4-3 6.5-7.5 6.5z"/><path d="M12 15.5c0-3-2.2-5-6.5-5 0 3 2.2 5 6.5 5z"/>',
  flame:'<path d="M12 22c4 0 7-2.8 7-6.8 0-3.6-2.4-5.6-3.8-9.2-1.7 1.6-2.4 3.4-2.5 5.2-1-.9-1.8-2.3-1.9-4.2C8.4 9 5 12 5 15.2 5 19.2 8 22 12 22z"/>',
  kettle:'<path d="M8.8 8.6V7a3.2 3.2 0 0 1 6.4 0v1.6"/><path d="M5.5 15a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0z"/><path d="M6.4 21h11.2"/>',
  db:'<path d="M8.5 12h7"/><rect x="5" y="7" width="3.5" height="10" rx=".6"/><rect x="15.5" y="7" width="3.5" height="10" rx=".6"/><rect x="2.5" y="9" width="2.5" height="6" rx=".4"/><rect x="19" y="9" width="2.5" height="6" rx=".4"/>',
  bb:'<path d="M1 12h22"/><rect x="3" y="7.5" width="2" height="9" rx=".3"/><rect x="5.3" y="9" width="1.5" height="6" rx=".3"/><rect x="19" y="7.5" width="2" height="9" rx=".3"/><rect x="17.2" y="9" width="1.5" height="6" rx=".3"/>',
  arm:'<path d="M4 20.5c.5-4.5 2.5-8.5 5.5-11.5l1.5-3.5 3.2.8-1.4 3.7c3.6.2 6.8 2.3 7.7 6v4.5z"/><path d="M11.5 14.5c1.6-1.2 3.8-1.2 5.2 0"/>',
  bolt:'<path d="M13.5 2L5 13.5h6L10 22l9-12h-6.2z"/>',
  shield:'<path d="M12 2.5l8 3v6c0 5-3.4 8.8-8 10.5-4.6-1.7-8-5.5-8-10.5v-6z"/><path d="M8.5 12l2.4 2.4 4.6-4.8"/>',
  plate:'<circle cx="12" cy="12" r="9.2"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.6"/>',
  mountain:'<path d="M2 20.5l7-12.5 4 6.2 3-4.2 6 10.5z"/><path d="M7.4 11l1.6 1.3 1.4-1.2"/>',
  medal:'<path d="M8 2.5l4 7 4-7"/><circle cx="12" cy="15.5" r="5.8"/><path d="M12 12.6l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z"/>',
  trophy:'<path d="M7 3h10v5.5a5 5 0 0 1-10 0z"/><path d="M7 5H4v1.8A3.2 3.2 0 0 0 7.2 10M17 5h3v1.8a3.2 3.2 0 0 1-3.2 3.2"/><path d="M12 13.5V17M8 21.5h8M9.5 17.5h5v4h-5z"/>',
  crown:'<path d="M3 8l4.6 4.2L12 4.5l4.4 7.7L21 8l-1.8 10.5H4.8z"/><path d="M5 21h14"/>',
  diamond:'<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 18 3-18"/>',
  deca:'<polygon points="' + P(decPts(12, 12, 10.2)) + '"/><path d="M12 6.2l1.8 3.7 4 .6-2.9 2.8.7 4L12 15.4l-3.6 1.9.7-4-2.9-2.8 4-.6z" fill="currentColor"/>' };
const levelIcon = i => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round">${LVL_IC[LEVELS[i].ic]}</svg>`;
const levelOf = pts => { let i = 0; LEVELS.forEach((l, k) => { if (pts >= l.p) i = k; }); return i; };
function openLevels() { O = { mode:'levels' }; renderO(); openO(); $('obody').scrollTop = 0; bindLadder(); }
function bindLadder() {
  const lad = $('ladder'), c = lad && lad.querySelector('.cur'), hero = document.querySelector('.lvl-hero'); if (!c || !hero) return;
  const dec = hero.querySelector('.lvl-dec'), ht = hero.querySelector('.lvl-ht'), more = hero.querySelector('.lvl-more');
  hero.classList.add('fluid'); const Wd = hero.clientWidth, htW = Math.min(Wd, ht.offsetWidth), htH = ht.offsetHeight, mH = more ? more.offsetHeight : 0;
  const big = 128, small = 56, sc = .62, top = big + 10, bigH = top + htH + (mH ? 12 + mH : 0);
  const L = (a, b, k) => a + (b - a) * k;
  // the header shrinks continuously while you scroll the ladder down: icon moves left, title moves next to it
  const lay = k => { const ds = L(big, small, k) / big;
    dec.style.transform = `translate(${L((Wd - big) / 2, 0, k)}px, 0) scale(${ds})`;
    ht.style.transform = `translate(${L((Wd - htW) / 2, small + 14, k)}px, ${L(top, (small - htH * sc) / 2, k)}px) scale(${L(1, sc, k)})`;
    if (more) { more.style.transform = `translateY(${top + htH + 12}px)`; more.style.opacity = Math.max(0, 1 - k * 2.5); }
    hero.style.height = L(bigH, small, k) + 'px'; };
  const rows = [...lad.querySelectorAll('.lvl-row')], ci = rows.indexOf(c), init = ci >= 2 ? rows[ci - 2].offsetTop : 0, span = 160;
  lay(0); lad.scrollTop = init;
  const need = init + span + lad.clientHeight + (bigH - small) - lad.scrollHeight; if (need > 0) lad.style.paddingBottom = need + 'px'; lad.scrollTop = init;
  let raf = 0; lad.onscroll = () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; lay(Math.max(0, Math.min(1, (lad.scrollTop - init) / span))); }); };
}
function levelsHTML() {
  const pts = totalPts(), li = levelOf(pts), cur = LEVELS[li], nxt = LEVELS[li + 1];
  const pct = nxt ? Math.round((pts - cur.p) / (nxt.p - cur.p) * 100) : 100;
  return `<div class="inner"><div class="row"><button class="iconbtn" id="o-back" aria-label="Zurück">←</button><span class="eyebrow">Level</span><span style="width:44px"></span></div>
    <div class="lvl-hero"><div class="lvl-dec dec">${levelIcon(li)}</div><div class="lvl-ht"><div class="eyebrow">Level ${li + 1} / ${LEVELS.length}</div><h1>${esc(cur[S.lang])}</h1>
      <div class="lvl-pts num"><b>${fmt(pts)}</b> Points</div></div>
      ${nxt ? `<div class="lvl-more"><div class="lvl-bar"><i style="width:${pct}%"></i></div><p class="hint">${S.lang === 'de' ? `Noch ${fmt(nxt.p - pts)} Points bis ${esc(nxt.de)}` : `${fmt(nxt.p - pts)} points to ${esc(nxt.en)}`}</p></div>` : ''}</div>
    <div class="sect lvl-sect"><h2>${S.lang === 'de' ? 'Alle Level' : 'All levels'}</h2><div class="lvl-ladder" id="ladder">${LEVELS.map((l, i) => i).reverse().map(i => { const l = LEVELS[i]; return `<div class="lvl-row ${i <= li ? 'got' : ''} ${i === li ? 'cur' : ''}"><span class="lvl-ic dec">${levelIcon(i)}</span><div><b><span class="num">${i + 1}</span> ${esc(l[S.lang])}</b><small class="num">${i > li ? (S.lang === 'de' ? `noch ${fmt(l.p - pts)} Points` : `${fmt(l.p - pts)} points to go`) : `${fmt(l.p)} Points`}</small>${i === li && nxt ? `<span class="lvl-mini"><i style="width:${pct}%"></i></span>` : ''}</div><span class="num lvl-st">${i < li ? '✓' : i === li ? (S.lang === 'de' ? 'DU' : 'YOU') : ''}</span></div>`; }).join('')}</div></div></div>`;
}
function playIntroTear() {
  const go = $('go'); if (!go || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const el = document.createElement('div'); el.id = 'intro'; el.className = 'intro3'; $('app').appendChild(el);
  const Wd = innerWidth, Ht = el.getBoundingClientRect().height || innerHeight, n = 9, pts = [];
  for (let i = 0; i <= n; i++) pts.push([Wd * i / n, Ht * .52 - (i - n / 2) * Ht * .03 + (i % 2 ? -18 : 18)]);
  const top = `polygon(0 0, ${Wd}px 0, ${pts.slice().reverse().map(([x, y]) => `${x.toFixed(0)}px ${y.toFixed(0)}px`).join(', ')})`;
  const bot = `polygon(${pts.map(([x, y]) => `${x.toFixed(0)}px ${y.toFixed(0)}px`).join(', ')}, ${Wd}px ${Ht + 300}px, 0 ${Ht + 300}px)`;
  const inner = `<div class="i3-text"><p>${esc(greetText)}</p><b>${t('cta')}</b></div>`;
  el.innerHTML = `<div class="i3-half" style="clip-path:${top}">${inner}</div><div class="i3-half" style="clip-path:${bot}">${inner}</div>`;
  el.querySelectorAll('.i3-text').forEach(x => { fitWords(x.querySelector('p'), greetText, Wd - 60); fitWords(x.querySelector('b'), t('cta'), Wd - 60); });
  const [a, b] = el.querySelectorAll('.i3-half');
  el.querySelectorAll('.i3-text').forEach(x => x.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }], { duration: 450, fill: 'forwards' }));
  setTimeout(() => {
    a.animate([{ transform: 'none' }, { transform: `translate(-4%, -${Ht * .62}px) rotate(-6deg)` }], { duration: 750, easing: 'cubic-bezier(.5,0,.2,1)', fill: 'forwards' });
    b.animate([{ transform: 'none' }, { transform: `translate(4%, ${Ht * .62}px) rotate(5deg)` }], { duration: 750, easing: 'cubic-bezier(.5,0,.2,1)', fill: 'forwards' }).finished.then(() => el.remove(), () => el.remove());
  }, 1500);
  el.onclick = () => el.remove();
}
// intro 4: a white decagon fills the screen, spins and shrinks into the start decagon
function playIntroVortex() {
  const go = $('go'); if (!go || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = goRect(go), k = Math.hypot(innerWidth, innerHeight) / r.width * 1.25;
  const el = document.createElement('div'); el.id = 'intro'; el.className = 'intro4';
  el.innerHTML = `<div class="i4-dec dec" style="left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px"></div>`;
  $('app').appendChild(el); go.style.visibility = 'hidden';
  el.firstChild.animate([{ transform: `scale(${k}) rotate(-540deg)` }, { transform: `scale(${k * .6}) rotate(-300deg)`, offset: .35 }, { transform: 'scale(1) rotate(0deg)' }], { duration: 1300, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' })
    .finished.then(() => { go.style.visibility = ''; el.remove(); }, () => { go.style.visibility = ''; el.remove(); });
}
function playIntroSel(kind = S.intro) { if (kind === 'type') playIntroType(); else if (kind === 'tear') playIntroTear(); else if (kind === 'vortex') playIntroVortex(); else if (kind !== 'off') playIntro(); }
function celebrate(kind = S.celeb) {
  if (!kind || kind === 'off' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const old = $('celeb'); if (old) old.remove();
  const cv = document.createElement('canvas'); cv.id = 'celeb'; $('app').appendChild(cv);
  const dpr = devicePixelRatio || 1, Wd = innerWidth, Ht = innerHeight; cv.width = Wd * dpr; cv.height = Ht * dpr; const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
  const cs = getComputedStyle($('app')), FG = cs.getPropertyValue('--fg').trim() || '#f3f3ef', MU = cs.getPropertyValue('--muted').trim() || '#8d8d86';
  const mono = [FG, FG, MU, '#bdbdb6'], bright = ['#ffd400', '#35c46a', '#f0524a', '#4aa3ff', '#f3f3ef', '#ff7ad9'];
  const R = (a, b) => a + Math.random() * (b - a), P = [];
  const add = o => P.push(Object.assign({ x: 0, y: 0, vx: 0, vy: 0, g: .25, rot: R(0, 6.28), vr: R(-.2, .2), size: R(5, 9), shape: 'rect', col: FG, life: 1, decay: R(.006, .012), drag: .995, delay: 0 }, o));
  if (kind === 'confetti' || kind === 'colorconf') for (let i = 0; i < 150; i++) { const side = i % 3, pal = kind === 'colorconf' ? bright : mono;
    add({ x: side === 0 ? R(-10, Wd * .12) : side === 1 ? R(Wd * .88, Wd + 10) : R(0, Wd), y: side === 2 ? R(-60, -10) : R(-30, Ht * .2), vx: side === 0 ? R(1.5, 5) : side === 1 ? R(-5, -1.5) : R(-1.5, 1.5), vy: R(1, 4), g: .12, col: pal[i % pal.length], shape: i % 4 ? 'rect' : 'circle', size: R(5, 10), decay: R(.004, .008) }); }
  if (kind === 'cannons') for (let i = 0; i < 130; i++) { const L = i % 2 === 0; add({ x: L ? -5 : Wd + 5, y: Ht * .8, vx: (L ? 1 : -1) * R(3, 10), vy: R(-17, -9), g: .35, col: mono[i % 4], size: R(5, 9), decay: R(.005, .009) }); }
  if (kind === 'fireworks') [[.28, .28], [.72, .22], [.5, .42]].forEach(([fx, fy], k) => { for (let i = 0; i < 55; i++) { const a = i / 55 * 6.28, sp = R(2.5, 6); add({ x: Wd * fx, y: Ht * fy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: .05, drag: .97, shape: 'circle', size: R(2.5, 4), col: mono[i % 2], delay: k * 16, decay: R(.012, .02) }); } });
  if (kind === 'decagons') for (let i = 0; i < 44; i++) { const a = R(0, 6.28), sp = R(4, 10); add({ x: Wd / 2, y: Ht * .3, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 3, g: .2, shape: 'dec', size: R(8, 16), col: mono[i % 4], decay: R(.006, .01) }); }
  if (kind === 'stars') for (let i = 0; i < 60; i++) add({ x: R(0, Wd), y: R(-220, -10), vx: R(-.5, .5), vy: R(2, 4), g: .05, shape: 'star', size: R(6, 12), col: mono[i % 4], decay: R(.004, .007) });
  if (kind === 'streamers') for (let i = 0; i < 44; i++) add({ x: R(0, Wd), y: R(-160, -10), vx: R(-1, 1), vy: R(2, 5), g: .08, shape: 'streamer', size: R(14, 26), col: mono[i % 4], vr: R(-.3, .3), decay: R(.004, .007) });
  if (kind === 'glitter') for (let i = 0; i < 130; i++) add({ x: R(0, Wd), y: R(0, Ht * .6), vx: R(-.3, .3), vy: R(-.2, .6), g: .01, shape: 'circle', size: R(1.5, 3.5), col: FG, tw: R(0, 6.28), decay: R(.006, .012) });
  if (kind === 'xmas') { const pal = ['#f3f3ef', '#f3f3ef', '#d6262e', '#2e9e4f', '#ffd400']; for (let i = 0; i < 120; i++) add({ x: R(0, Wd), y: R(-300, -10), vx: R(-.8, .8), vy: R(1.5, 3.5), g: .03, shape: i % 3 ? 'circle' : 'star', size: R(4, 10), col: pal[i % 5], decay: R(.003, .006) }); }
  if (kind === 'easter') { const pal = ['#f4a7c0', '#a7d8f4', '#f4e07a', '#b6e3a1', '#d1b3f0']; for (let i = 0; i < 46; i++) { const a = R(0, 6.28), sp = R(4, 10); add({ x: Wd / 2, y: Ht * .35, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 4, g: .22, shape: 'egg', size: R(12, 20), col: pal[i % 5], decay: R(.005, .009) }); } }
  if (kind === 'plates') for (let i = 0; i < 34; i++) add({ x: R(0, Wd), y: R(-500, -20), vx: R(-.6, .6), vy: R(1, 3), g: .16, shape: 'plate', size: R(16, 30), col: mono[i % 4], vr: R(-.08, .08), decay: R(.003, .005) });
  if (kind === 'shock') for (let i = 0; i < 7; i++) add({ x: Wd / 2, y: Ht * .4, g: 0, vr: .01, shape: 'ring', size: 20, grow: R(7, 9), col: FG, delay: i * 9, decay: .011, drag: 1 });
  if (kind === 'fountain') for (let i = 0; i < 160; i++) add({ x: Wd / 2 + R(-8, 8), y: Ht + 5, vx: R(-3.2, 3.2), vy: R(-19, -12), g: .32, col: mono[i % 4], shape: i % 3 ? 'rect' : 'dec', size: R(5, 9), delay: Math.floor(i / 4), decay: R(.006, .01) });
  const shape = p => { const z = p.size; ctx.beginPath();
    if (p.shape === 'egg') { ctx.ellipse(0, 0, z * .36, z / 2, 0, 0, 6.29); ctx.fill(); return; }
    if (p.shape === 'plate') { ctx.arc(0, 0, z / 2, 0, 6.29); ctx.arc(0, 0, z / 6, 0, 6.29, true); ctx.fill('evenodd'); return; }
    if (p.shape === 'ring') { for (let i = 0; i < 10; i++) { const a = i * .628; ctx[i ? 'lineTo' : 'moveTo'](Math.cos(a) * z / 2, Math.sin(a) * z / 2); } ctx.closePath(); ctx.strokeStyle = p.col; ctx.lineWidth = 3; ctx.stroke(); return; }
    if (p.shape === 'rect') ctx.rect(-z / 2, -z / 4, z, z / 2); else if (p.shape === 'streamer') ctx.rect(-z / 2, -1.5, z, 3);
    else if (p.shape === 'circle') ctx.arc(0, 0, z / 2, 0, 6.29);
    else if (p.shape === 'dec') for (let i = 0; i < 10; i++) { const a = i * .628; ctx[i ? 'lineTo' : 'moveTo'](Math.cos(a) * z / 2, Math.sin(a) * z / 2); }
    else for (let i = 0; i < 10; i++) { const a = i * .628 - 1.57, rr = i % 2 ? z / 4 : z / 2; ctx[i ? 'lineTo' : 'moveTo'](Math.cos(a) * rr, Math.sin(a) * rr); }
    ctx.closePath(); ctx.fill(); };
  const t0 = performance.now();
  const step = now => {
    ctx.clearRect(0, 0, Wd, Ht); let alive = 0;
    P.forEach(p => { if (p.delay > 0) { p.delay--; alive++; return; } if (p.life <= 0) return; alive++;
      p.vx *= p.drag; p.vy = p.vy * p.drag + p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= p.decay; if (p.grow) p.size += p.grow;
      ctx.save(); ctx.globalAlpha = Math.max(0, Math.min(1, p.life * 1.4)) * (p.tw !== undefined ? .5 + .5 * Math.sin(now / 90 + p.tw) : 1); ctx.fillStyle = p.col; ctx.translate(p.x, p.y); ctx.rotate(p.rot); shape(p); ctx.restore(); });
    if (alive && now - t0 < 3200) requestAnimationFrame(step); else cv.remove();
  };
  requestAnimationFrame(step);
}
let setPage = null, devOpen = false;
// ================= Seasons (Weihnachten, Ostern) =================
// live: docs/season.json decides for every user; dev: a local preview can override it
const SEASONS = { xmas: { de:'Weihnachten', en:'Christmas' }, easter: { de:'Ostern', en:'Easter' } };
let REMOTE_SEASON = '', REMOTE_LIVE = null;
const ROOT = ENV === 'dev' ? '../' : '';
const seasonNow = () => (ENV === 'dev' && S.seasonPreview != null ? S.seasonPreview : REMOTE_SEASON) || '';
const loadAnim = () => seasonNow() || S.anim;
function fetchRemote() {
  fetch(ROOT + 'season.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : {}).then(j => { const n = SEASONS[j.season] ? j.season : ''; if (n !== REMOTE_SEASON) { REMOTE_SEASON = n; applySeason(); } }).catch(() => {});
}
const HAT = '<svg class="ss-hat" viewBox="0 0 100 80" aria-hidden="true"><path d="M8 62 C20 30 40 8 70 6 C84 5 92 14 94 26 C82 20 70 22 62 34 L58 62 Z" fill="#d6262e"/><circle cx="94" cy="28" r="9" fill="#fff"/><rect x="2" y="56" width="66" height="18" rx="9" fill="#fff"/></svg>';
const EARS = '<svg class="ss-ears" viewBox="0 0 100 80" aria-hidden="true"><path d="M30 78 C18 50 18 12 32 4 C44 -2 48 40 44 78 Z" fill="#f3f3ef" stroke="#0b0b0a" stroke-width="3"/><path d="M33 70 C26 50 27 22 33 14 C38 22 39 50 38 70 Z" fill="#f4a7c0"/><path d="M58 78 C56 40 62 0 74 4 C88 10 84 50 72 78 Z" fill="#f3f3ef" stroke="#0b0b0a" stroke-width="3"/><path d="M63 70 C63 48 66 22 72 14 C78 24 74 50 68 70 Z" fill="#f4a7c0"/></svg>';
const SLEIGH = '<svg viewBox="0 0 220 60" aria-hidden="true"><g fill="currentColor"><path d="M150 40h52c6 0 10-6 8-12l-4-10h-8l3 9h-46z"/><path d="M146 50h70v4h-70z"/><circle cx="182" cy="14" r="6"/><path d="M176 22h12v14h-12z"/><path d="M60 30c10-10 26-12 40-4l6-12 4 2-4 14c6 6 4 12-2 14H64c-8 0-10-8-4-14z"/><path d="M66 44l-6 14h4l6-12zM94 44l6 14h-4l-6-12z"/><path d="M104 16l6-12 3 1-5 12zM100 14l-2-12 3-1 2 12z"/><path d="M6 32c8-8 22-10 34-4l5-10 4 2-3 12c5 5 3 10-2 12H10c-7 0-8-7-4-12z"/><path d="M12 44l-5 12h4l5-10zM36 44l5 12h-4l-5-10z"/><path d="M40 40l110 4v2L40 42z"/></g></svg>';
const BUNNY = '<svg viewBox="0 0 80 70" aria-hidden="true"><g fill="currentColor"><ellipse cx="38" cy="48" rx="22" ry="16"/><circle cx="62" cy="34" r="11"/><path d="M58 26c-4-14-2-24 3-24s5 12 3 24z"/><path d="M66 26c0-14 4-23 9-22s2 13-4 23z"/><circle cx="16" cy="44" r="6"/><path d="M48 60h10v8H48zM24 60h10v8H24z"/></g></svg>';
function applySeason() {
  const sz = seasonNow(), app = $('app'); app.classList.toggle('season-xmas', sz === 'xmas'); app.classList.toggle('season-easter', sz === 'easter');
  let layer = $('season'); if (!sz) { if (layer) layer.remove(); if (tab === 'start' && !W) renderStart(); return; }
  if (!layer || layer.dataset.s !== sz) { if (layer) layer.remove(); layer = document.createElement('div'); layer.id = 'season'; layer.dataset.s = sz; layer.setAttribute('aria-hidden', 'true');
    const R = (a, b) => (a + Math.random() * (b - a)).toFixed(2);
    if (sz === 'xmas') layer.innerHTML = Array.from({ length: 34 }, () => `<i class="flake" style="left:${R(0, 100)}%;width:${R(3, 7)}px;height:${R(3, 7)}px;animation-duration:${R(9, 18)}s,${R(3, 6)}s;animation-delay:-${R(0, 18)}s,-${R(0, 6)}s;opacity:${R(.35, .85)}"></i>`).join('') + `<div class="sleigh">${SLEIGH}</div>`;
    else layer.innerHTML = Array.from({ length: 12 }, (_, i) => `<i class="egg" style="left:${R(2, 94)}%;animation-duration:${R(14, 24)}s;animation-delay:-${R(0, 24)}s;--c:${['#f4a7c0', '#a7d8f4', '#f4e07a', '#b6e3a1', '#d1b3f0'][i % 5]}"></i>`).join('') + `<div class="bunny">${BUNNY}</div>`;
    $('app').appendChild(layer); }
  if (tab === 'start' && !W) renderStart();
}
const seasonDeco = () => seasonNow() === 'xmas' ? HAT : seasonNow() === 'easter' ? EARS : '';

// ================= Browser vs. home screen: install guide =================
const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
function showInstall(preview) {
  const de = S.lang === 'de', el = document.createElement('div'); el.id = 'inst'; el.className = 'onb inst'; $('app').appendChild(el);
  const STEPS = {
    ios: de ? [['Safari öffnen', 'Öffne diese Seite in Safari (nicht in einer anderen App).', 'safari'], ['Teilen antippen', 'Tippe unten auf das Teilen-Symbol (Quadrat mit Pfeil nach oben).', 'share'], ['„Zum Home-Bildschirm“', 'Scrolle in der Liste nach unten und tippe auf „Zum Home-Bildschirm“.', 'add'], ['Hinzufügen', 'Tippe oben rechts auf „Hinzufügen“. TRAIN liegt jetzt auf deinem Homescreen.', 'done']]
      : [['Open Safari', 'Open this page in Safari (not inside another app).', 'safari'], ['Tap Share', 'Tap the share icon at the bottom (square with an arrow).', 'share'], ['“Add to Home Screen”', 'Scroll down the list and tap “Add to Home Screen”.', 'add'], ['Add', 'Tap “Add” at the top right. TRAIN is now on your home screen.', 'done']],
    android: de ? [['Chrome öffnen', 'Öffne diese Seite in Chrome.', 'chrome'], ['Menü öffnen', 'Tippe oben rechts auf die drei Punkte (⋮).', 'menu'], ['„App installieren“', 'Tippe auf „App installieren“ oder „Zum Startbildschirm hinzufügen“.', 'add'], ['Installieren', 'Bestätige mit „Installieren“. TRAIN liegt jetzt auf deinem Startbildschirm.', 'done']]
      : [['Open Chrome', 'Open this page in Chrome.', 'chrome'], ['Open the menu', 'Tap the three dots (⋮) at the top right.', 'menu'], ['“Install app”', 'Tap “Install app” or “Add to Home screen”.', 'add'], ['Install', 'Confirm with “Install”. TRAIN is now on your home screen.', 'done']] };
  let os = null, i = 0;
  const vis = (k, osn) => { const sh = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M5 11v10h14V11"/></svg>';
    if (k === 'share') return `<div class="om-phone ins"><div class="ins-page"></div><div class="ins-bar"><i></i><i></i><span class="ins-hl">${sh}<span class="om-finger ins-f"></span></span><i></i><i></i></div></div>`;
    if (k === 'menu') return `<div class="om-phone ins"><div class="ins-top"><span>pdbp-hub.github.io</span><span class="ins-hl">⋮<span class="om-finger ins-f"></span></span></div><div class="ins-page"></div></div>`;
    if (k === 'add') return `<div class="om-phone ins"><div class="ins-sheet"><div class="ins-row"></div><div class="ins-row"></div><div class="ins-row ins-hl">${osn === 'ios' ? (de ? 'Zum Home-Bildschirm' : 'Add to Home Screen') : (de ? 'App installieren' : 'Install app')} ＋<span class="om-finger ins-f"></span></div><div class="ins-row"></div></div></div>`;
    if (k === 'done') return `<div class="om-phone ins ins-home">${Array.from({ length: 7 }, () => '<i></i>').join('')}<b class="dec">TRAIN</b></div>`;
    return `<div class="om-phone ins"><div class="ins-top"><span>pdbp-hub.github.io/Fitter</span></div><div class="ins-page"><div class="om-dec dec" style="width:70px;height:70px;font-size:11px">TRAIN</div></div></div>`; };
  const draw = () => {
    if (!os) { el.innerHTML = `<div class="onb-in inst-home"><div class="row"><span class="eyebrow">${preview ? 'Dev · Vorschau' : ''}</span>${preview ? '<button class="iconbtn" id="inst-x" aria-label="Schließen">✕</button>' : '<span></span>'}</div>
        <div class="inst-hero"><div class="octa dec pulse inst-dec"><span class="cta">TRAIN</span></div></div>
        <div><h1>${de ? 'Willkommen bei TRAIN' : 'Welcome to TRAIN'}</h1><p class="onb-txt">${de ? 'Dein Gym-Tracker. Installiere ihn auf deinem Homescreen, dann läuft er wie eine echte App.' : 'Your gym tracker. Add it to your home screen and it runs like a real app.'}</p></div>
        <div class="inst-pick"><b>${de ? 'App installieren: Anleitung für' : 'Install the app: guide for'}</b><div class="inst-os"><button class="mainbtn" data-os="ios">iPhone</button><button class="mainbtn" data-os="android">Android</button></div>
        <button class="textbtn" id="inst-web">${de ? 'Ohne Installation im Browser weiter' : 'Continue in the browser'}</button></div></div>`;
      el.querySelectorAll('[data-os]').forEach(b => b.onclick = () => { os = b.dataset.os; i = 0; draw(); });
    } else { const L = STEPS[os], [h, tx, k] = L[i], last = i === L.length - 1;
      el.innerHTML = `<div class="onb-in"><div class="row"><button class="iconbtn" id="inst-back" aria-label="${de ? 'Zurück' : 'Back'}">←</button><span class="eyebrow num">${os === 'ios' ? 'iPhone' : 'Android'} · ${i + 1} / ${L.length}</span><span style="width:44px"></span></div>
        <div class="onb-vis">${vis(k, os)}</div><div><h1>${esc(h)}</h1><p class="onb-txt">${esc(tx)}</p></div>
        <div class="onb-dots">${L.map((_, j) => `<button class="${j === i ? 'on' : ''}"><i></i></button>`).join('')}</div>
        <div class="onb-nav"><button class="mainbtn" id="inst-next">${last ? (de ? 'Verstanden' : 'Got it') : t('onbNext')}</button></div></div>`;
      $('inst-back').onclick = () => { if (i) i--; else os = null; draw(); };
      $('inst-next').onclick = () => { if (last) { os = null; draw(); } else { i++; draw(); } }; }
    $('inst-x') && ($('inst-x').onclick = () => el.remove());
    $('inst-web') && ($('inst-web').onclick = () => { el.remove(); if (!preview) sessionStorage.setItem('fitter.web', '1'); });
  };
  let x0 = null; el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', e => { if (x0 === null || !os) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (dx < -50 && i < STEPS[os].length - 1) { i++; draw(); } else if (dx > 50) { if (i) i--; else os = null; draw(); } }, { passive: true });
  draw();
}

// ================= Push notifications =================
const PUSH_DEFAULT = { de: ['Deine Hanteln vermissen dich.', 'Zeit für ein neues Personal Best?', 'Ein Training heute, ein stärkeres Du morgen.', 'Dein Level wartet auf Points.'], en: ['Your dumbbells miss you.', 'Time for a new personal best?', 'One session today, a stronger you tomorrow.', 'Your level is waiting for points.'] };
async function setPush(on) {
  const de = S.lang === 'de';
  if (!on) { S.push = false; save(); renderSettings(); return; }
  if (!('Notification' in window)) { dialog(de ? 'Mitteilungen' : 'Notifications', de ? 'Auf dem iPhone gehen Mitteilungen nur, wenn TRAIN vom Homescreen aus geöffnet wird (ab iOS 16.4).' : 'On iPhone, notifications only work when TRAIN is opened from the home screen (iOS 16.4+).', [['OK', 'mainbtn', () => {}]]); return; }
  const p = await Notification.requestPermission();
  if (p !== 'granted') { toast(de ? 'Mitteilungen wurden nicht erlaubt' : 'Notifications were not allowed'); return; }
  S.push = true; save(); renderSettings();
}
async function testPush(text) {
  try { if (Notification.permission !== 'granted' && (await Notification.requestPermission()) !== 'granted') return toast('Keine Erlaubnis');
    const reg = await navigator.serviceWorker.ready; reg.showNotification('TRAIN', { body: text, icon: 'icons/icon-192.png' }); } catch (e) { toast('Test nicht möglich: ' + e.message); }
}

// ================= GitHub key (dev only): lets Ben switch the live version / season himself =================
const GH = { repo: 'pdbp-hub/Fitter', branch: 'claude/fitness-tracking-app-setup-ix8ivv' };
const ghKey = () => { try { return localStorage.getItem('fitter.ghkey') || ''; } catch (e) { return ''; } };
async function ghWrite(path, obj, msg) {
  const k = ghKey(); if (!k) throw new Error('Kein Schlüssel hinterlegt');
  const url = `https://api.github.com/repos/${GH.repo}/contents/${path}`, hd = { Authorization: 'Bearer ' + k, Accept: 'application/vnd.github+json' };
  const cur = await fetch(url + '?ref=' + encodeURIComponent(GH.branch), { headers: hd }); const sha = cur.ok ? (await cur.json()).sha : undefined;
  const body = { message: msg, branch: GH.branch, content: btoa(unescape(encodeURIComponent(JSON.stringify(obj, null, 2) + '\n'))) }; if (sha) body.sha = sha;
  const r = await fetch(url, { method: 'PUT', headers: hd, body: JSON.stringify(body) }); if (!r.ok) throw new Error('GitHub: ' + r.status);
}
function confirmLive(title, text, fn) {
  dialog(title, text, [[S.lang === 'de' ? 'Abbrechen' : 'Cancel', 'mainbtn', () => {}], [S.lang === 'de' ? 'Ja, live schalten' : 'Yes, go live', 'ghostbtn', async () => {
    if (!ghKey()) { dialog('Schlüssel fehlt', 'Live schalten braucht einmalig einen GitHub-Schlüssel (siehe Dev-Werkzeuge › Freigabe-Schlüssel).', [['OK', 'mainbtn', () => {}]]); return; }
    try { await fn(); toast('Live geschaltet. Nutzer sehen es beim nächsten Öffnen.'); } catch (e) { dialog('Hat nicht geklappt', esc(e.message), [['OK', 'mainbtn', () => {}]]); } }]]);
}
let VERSIONS = null;
function loadVersions(cb) { Promise.all([fetch(ROOT + 'versions/index.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : []).catch(() => []), fetch(ROOT + 'live.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : {}).catch(() => ({}))]).then(([v, l]) => { VERSIONS = v; REMOTE_LIVE = l.version || null; cb(); }); }
function devHTML() {
  const sz = S.seasonPreview == null ? 'live' : S.seasonPreview || 'off', segb = (v, l) => `<button data-spv="${v}" class="${sz === v ? 'on' : ''}">${l}</button>`;
  const msgs = S.pushMsgs || PUSH_DEFAULT[S.lang];
  return `<div class="devtools">
    <b>Ansehen & testen</b>
    <button id="dev-onb">${t('devOnb')}</button><button id="dev-intro">${t('devIntro')}</button><button id="dev-celeb">${t('devCeleb')}</button><button id="dev-charts">Charts-Test</button><button id="dev-inst">Browser-Ansicht (Installations-Anleitung)</button><button id="reseed">${t('reseed')}</button>
    <p class="hint">Link zum Testen im Browser: <span class="num">pdbp-hub.github.io/Fitter/?install</span> <button class="textbtn" id="dev-instlink">kopieren</button></p>

    <b style="margin-top:18px">Seasons</b>
    <p class="hint">Vorschau nur hier in Dev. „Live“ = was alle Nutzer gerade sehen: <b>${REMOTE_SEASON ? SEASONS[REMOTE_SEASON].de : 'keine'}</b></p>
    <div class="seg devseg">${segb('live', 'Wie live')}${segb('off', 'Aus')}${segb('xmas', 'Weihnachten')}${segb('easter', 'Ostern')}</div>
    <div class="devrowbtns"><button class="ghostbtn" data-golive="xmas">Weihnachten live</button><button class="ghostbtn" data-golive="easter">Ostern live</button><button class="ghostbtn" data-golive="">Season aus (live)</button></div>

    <b style="margin-top:18px">Live-Version</b>
    <p class="hint">Live läuft: <b class="num">${REMOTE_LIVE || 'Standard (letzte Freigabe)'}</b>. Version wählen und live schalten, auch zurück auf eine ältere.</p>
    <div class="devrowbtns"><select id="dev-ver" class="devsel">${(VERSIONS || []).map(v => `<option value="${esc(v.v)}" ${v.v === REMOTE_LIVE ? 'selected' : ''}>${esc(v.v)}${v.date ? ' · ' + esc(v.date) : ''}</option>`).join('') || '<option>(Liste wird geladen …)</option>'}</select><button class="ghostbtn" id="dev-verlive">Live schalten</button></div>

    <b style="margin-top:18px">Push-Mitteilungen</b>
    <p class="hint">Automatisch nach <b class="num">${S.pushDays || 4}</b> Tagen ohne Training, zufälliger Spruch aus der Liste. Versand an alle braucht den Server und kommt mit dem Cloud-Modus. „Test an mich“ geht schon jetzt.</p>
    <div class="seg devseg">${[2, 3, 4, 7].map(d => `<button data-pdays="${d}" class="${(S.pushDays || 4) === d ? 'on' : ''}">${d} Tage</button>`).join('')}</div>
    <div class="pushlist">${msgs.map((m, j) => `<div class="pushrow"><input data-pmsg="${j}" value="${esc(m)}"><button class="sx" data-pdel="${j}" aria-label="Löschen">✕</button><button class="textbtn" data-ptest="${j}">Test</button></div>`).join('')}</div>
    <button id="dev-padd">+ Spruch hinzufügen</button>
    <div class="pushrow"><input id="dev-pnow" placeholder="Eigene Nachricht an alle (z. B. Aktion)"><button class="textbtn" id="dev-psend">Senden</button></div>

    <b style="margin-top:18px">Freigabe-Schlüssel</b>
    <p class="hint">Für „live schalten“ braucht die App einmalig einen GitHub-Schlüssel (fein eingeschränkt: nur dieses Repo, nur Inhalte schreiben). Er bleibt nur auf diesem Gerät gespeichert. Status: <b>${ghKey() ? 'hinterlegt' : 'fehlt'}</b></p>
    <div class="pushrow"><input id="dev-ghkey" type="password" placeholder="github_pat_…" autocomplete="off"><button class="textbtn" id="dev-ghsave">${ghKey() ? 'Ersetzen' : 'Speichern'}</button>${ghKey() ? '<button class="textbtn" id="dev-ghdel">Entfernen</button>' : ''}</div>
  </div>`;
}
function bindDev() {
  const on = (id, fn) => { const el = $(id); if (el) el.onclick = fn; };
  if (!VERSIONS) loadVersions(() => { if (setPage === 'dev') renderSettings(); });
  on('dev-onb', () => showOnboarding(true)); on('dev-intro', () => previewIntro()); on('dev-celeb', () => celebrate(seasonNow() || S.celeb));
  on('dev-charts', () => { O = { mode:'charttest' }; renderO(); openO(); $('obody').scrollTop = 0; });
  on('dev-inst', () => showInstall(true));
  on('dev-instlink', () => { const u = 'https://pdbp-hub.github.io/Fitter/?install'; (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(() => toast(t('copied')), () => toast(u)); });
  on('reseed', () => dialog(t('reseed'), t('reseedText'), [[t('resetAllNo'), 'mainbtn', () => {}], [t('reseed'), 'ghostbtn', () => { seedMock(); save(); setPage = null; show('progress'); }]]));
  document.querySelectorAll('[data-spv]').forEach(b => b.onclick = () => { const v = b.dataset.spv; S.seasonPreview = v === 'live' ? null : v === 'off' ? '' : v; save(); applySeason(); renderSettings(); });
  document.querySelectorAll('[data-golive]').forEach(b => b.onclick = () => { const v = b.dataset.golive;
    confirmLive(v ? `${SEASONS[v].de} live schalten?` : 'Season ausschalten?', v ? `Jeder Nutzer sieht ab dem nächsten Öffnen das ${SEASONS[v].de}s-Design.` : 'Alle Nutzer sehen wieder das normale Design.', async () => { await ghWrite('docs/season.json', { season: v }, `Season live: ${v || 'aus'}`); REMOTE_SEASON = v; renderSettings(); }); });
  on('dev-verlive', () => { const v = $('dev-ver').value; if (!VERSIONS || !VERSIONS.some(x => x.v === v)) return;
    confirmLive(`Version ${v} live schalten?`, 'Alle Nutzer bekommen beim nächsten Öffnen diese Version. Achtung bei Rücksprüngen auf sehr alte Versionen: Daten, die nur neuere Versionen kennen, können dort fehlen.', async () => { await ghWrite('docs/live.json', { version: v }, `Live-Version: ${v}`); REMOTE_LIVE = v; renderSettings(); }); });
  document.querySelectorAll('[data-pdays]').forEach(b => b.onclick = () => { S.pushDays = +b.dataset.pdays; save(); renderSettings(); });
  const msgs = () => S.pushMsgs || PUSH_DEFAULT[S.lang].slice();
  document.querySelectorAll('[data-pmsg]').forEach(inp => inp.onchange = () => { const m = msgs(); m[+inp.dataset.pmsg] = inp.value.trim(); S.pushMsgs = m.filter(Boolean); save(); renderSettings(); });
  document.querySelectorAll('[data-pdel]').forEach(b => b.onclick = () => dialog('Spruch löschen?', esc(msgs()[+b.dataset.pdel]), [['Behalten', 'mainbtn', () => {}], ['Löschen', 'ghostbtn', () => { const m = msgs(); m.splice(+b.dataset.pdel, 1); S.pushMsgs = m; save(); renderSettings(); }]]));
  document.querySelectorAll('[data-ptest]').forEach(b => b.onclick = () => testPush(msgs()[+b.dataset.ptest]));
  on('dev-padd', () => { S.pushMsgs = msgs().concat(S.lang === 'de' ? 'Neuer Spruch' : 'New line'); save(); renderSettings(); });
  on('dev-psend', () => { const v = $('dev-pnow').value.trim(); if (!v) return; dialog('An alle senden?', esc(v) + '<br><br>Der Versand an alle Nutzer braucht einen Server und kommt mit dem Cloud-Modus. Jetzt geht nur „Test an mich“.', [['Test an mich', 'mainbtn', () => testPush(v)], ['Abbrechen', 'ghostbtn', () => {}]]); });
  on('dev-ghsave', () => { const v = $('dev-ghkey').value.trim(); if (!v) return; try { localStorage.setItem('fitter.ghkey', v); } catch (e) {} renderSettings(); toast('Schlüssel gespeichert'); });
  on('dev-ghdel', () => { try { localStorage.removeItem('fitter.ghkey'); } catch (e) {} renderSettings(); });
}

const FAQ = {
  de: [['Wo werden meine Daten gespeichert?', 'Aktuell nur auf deinem Handy (im Browser-Speicher der App). Mit dem Cloud-Modus kommt ein Account, dann werden sie zusätzlich sicher gesichert.'],
    ['Wie bekomme ich die App auf den Homescreen?', 'iPhone: in Safari auf Teilen tippen, dann „Zum Home-Bildschirm“. Android: in Chrome das Menü (⋮) öffnen, dann „App installieren“ oder „Zum Startbildschirm hinzufügen“.'],
    ['Wie werden Points berechnet?', 'Points gibt es für echte Steigerungen deiner Maximalkraft und für regelmäßiges Training. Details: Einstellungen › Berechnungslogik.'],
    ['Was ist die Maximalkraft (1RM)?', 'Das Gewicht, das du theoretisch genau einmal schaffen würdest. Die App schätzt es aus Gewicht und Wiederholungen deiner Sätze.'],
    ['Wie lösche ich eine Übung oder einen Satz?', 'Übung nach links wischen und „Löschen“ antippen. Einen geplanten Satz löschst du mit ✕. Du wählst jeweils, ob nur für dieses Training oder dauerhaft.'],
    ['Ich habe aus Versehen einen Satz beendet.', 'Tippe den erledigten Satz an und dann „Satz zurücksetzen und neu machen“.']],
  en: [['Where is my data stored?', 'Right now only on your phone (in the app’s browser storage). Cloud sync will add an account and a secure backup.'],
    ['How do I get the app on my home screen?', 'iPhone: in Safari tap Share, then “Add to Home Screen”. Android: in Chrome open the menu (⋮), then “Install app” or “Add to Home screen”.'],
    ['How are points calculated?', 'You earn points for real gains in max strength and for training regularly. Details: Settings › Calculation logic.'],
    ['What is max strength (1RM)?', 'The weight you could lift exactly once. The app estimates it from weight and reps of your sets.'],
    ['How do I delete an exercise or a set?', 'Swipe the exercise left and tap “Delete”. Delete a planned set with ✕. You choose: only for this session or for good.'],
    ['I finished a set by mistake.', 'Tap the finished set, then “Reset and redo this set”.']] };
// intro preview from settings: play it on the start screen, then come back to the same settings page
function previewIntro() {
  const page = setPage, y = $('v-settings').scrollTop, kind = S.intro; show('start');
  const back = () => { if (tab !== 'start') return; const v = $('v-start'), r = v.getBoundingClientRect(), c = v.cloneNode(true);
    c.removeAttribute('id'); c.querySelectorAll('[id]').forEach(e => e.removeAttribute('id')); c.classList.add('outro'); c.hidden = false;
    c.style.cssText = `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;z-index:90;background:var(--bg);margin:0`;
    $('app').appendChild(c); c.scrollTop = v.scrollTop; setPage = page; show('settings'); $('v-settings').scrollTop = y; outro(kind, c, r); };
  requestAnimationFrame(() => { playIntroSel(); if (!$('intro')) return setTimeout(back, 900);
    const iv = setInterval(() => { if (!$('intro')) { clearInterval(iv); setTimeout(back, 900); } }, 100); });
}
// leave the start screen the way the intro came in, revealing the settings again
function outro(kind, c, r) {
  const done = () => c.remove(), E = 'cubic-bezier(.5,0,.2,1)'; kind = 'spin'; // Ben: the decagon morph for every intro
  if (kind === 'tear') {
    const c2 = c.cloneNode(true); c.after(c2); const n = 9, pts = [];
    for (let i = 0; i <= n; i++) pts.push([r.width * i / n, r.height * .52 - (i - n / 2) * r.height * .03 + (i % 2 ? -18 : 18)]);
    c.style.clipPath = polyCSS([[0, -300], [r.width, -300]].concat(pts.slice().reverse())); c2.style.clipPath = polyCSS(pts.concat([[r.width, r.height + 300], [0, r.height + 300]]));
    c.animate([{ transform: 'none' }, { transform: `translate(-4%, -${r.height * .7}px) rotate(-6deg)` }], { duration: 750, easing: E, fill: 'forwards' });
    c2.animate([{ transform: 'none' }, { transform: `translate(4%, ${r.height * .7}px) rotate(5deg)` }], { duration: 750, easing: E, fill: 'forwards' }).finished.then(() => { c.remove(); c2.remove(); }, () => { c.remove(); c2.remove(); });
    return;
  }
  if (kind === 'vortex') {
    const R0 = Math.hypot(r.width, r.height) / 2 / Math.cos(Math.PI / 10) + 4, cx = r.width / 2, cy = r.height / 2;
    c.animate([{ clipPath: polyCSS(decPts(cx, cy, R0)), transform: 'none' }, { clipPath: polyCSS(decPts(cx, cy, r.width * .45)), transform: 'rotate(-60deg) scale(.8)', offset: .35 }, { clipPath: polyCSS(decPts(cx, cy, r.width * .45)), transform: 'rotate(-540deg) scale(0)' }], { duration: 1100, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' }).finished.then(done, done);
    return;
  }
  if (kind === 'type') {
    const sv = $('v-settings');
    sv.animate([{ transform: 'translateX(100%)' }, { transform: 'none' }], { duration: 550, easing: E });
    c.animate([{ transform: 'none', opacity: 1 }, { transform: 'translateX(-35%)', opacity: 0 }], { duration: 550, easing: E, fill: 'forwards' }).finished.then(done, done);
    return;
  }
  // intro 1 (decagon): the start screen shrinks into a decagon that flies into the settings tab
  const nb = document.querySelector('[data-tab="settings"]').getBoundingClientRect(), tx = nb.left + nb.width / 2 - r.left, ty = nb.top + nb.height / 2 - r.top;
  const R0 = Math.hypot(r.width, r.height) / 2 / Math.cos(Math.PI / 10) + 4;
  c.animate([{ clipPath: polyCSS(decPts(r.width / 2, r.height / 2, R0)) }, { clipPath: polyCSS(decPts(r.width / 2, r.height * .45, r.width * .3)), offset: .45 }, { clipPath: polyCSS(decPts(tx, ty, 2)) }], { duration: 900, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' }).finished.then(done, done);
}
const gl = inner => `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round">${inner}</svg>`;
const CELEB_IC = {
  confetti: gl('<rect x="9" y="10" width="7" height="4" transform="rotate(-20 12 12)" fill="currentColor"/><rect x="28" y="7" width="7" height="4" transform="rotate(25 31 9)" fill="currentColor"/><rect x="19" y="24" width="7" height="4" transform="rotate(10 22 26)" fill="currentColor"/><rect x="33" y="27" width="6" height="4" transform="rotate(-35 36 29)" fill="currentColor"/><circle cx="12" cy="33" r="2.5" fill="currentColor"/><circle cx="24" cy="14" r="2" fill="currentColor"/>'),
  colorconf: gl('<rect x="9" y="10" width="7" height="4" transform="rotate(-20 12 12)" fill="#ffd400" stroke="none"/><rect x="28" y="7" width="7" height="4" transform="rotate(25 31 9)" fill="#35c46a" stroke="none"/><rect x="19" y="24" width="7" height="4" transform="rotate(10 22 26)" fill="#f0524a" stroke="none"/><rect x="33" y="27" width="6" height="4" transform="rotate(-35 36 29)" fill="#4aa3ff" stroke="none"/><circle cx="12" cy="33" r="2.5" fill="#ff7ad9" stroke="none"/>'),
  cannons: gl('<path d="M6 40l8-8M42 40l-8-8"/><circle cx="18" cy="26" r="2" fill="currentColor"/><circle cx="22" cy="18" r="2" fill="currentColor"/><circle cx="30" cy="26" r="2" fill="currentColor"/><circle cx="26" cy="17" r="2" fill="currentColor"/><circle cx="24" cy="10" r="2" fill="currentColor"/>'),
  fireworks: gl('<path d="M24 8v8M24 32v8M8 24h8M32 24h8M13 13l5 5M30 30l5 5M35 13l-5 5M18 30l-5 5"/>'),
  decagons: gl('<polygon points="' + P(decPts(16, 16, 7)) + '" fill="currentColor"/><polygon points="' + P(decPts(33, 22, 5)) + '"/><polygon points="' + P(decPts(20, 34, 5)) + '"/>'),
  stars: gl('<path d="M16 8l2.4 5 5.4.6-4 3.7 1.1 5.3L16 20l-4.9 2.6 1.1-5.3-4-3.7 5.4-.6z" fill="currentColor"/><path d="M33 22l1.8 3.7 4 .5-3 2.8.8 4L33 31l-3.6 2 .8-4-3-2.8 4-.5z"/>'),
  streamers: gl('<path d="M8 10c6 0 6 8 12 8s6-8 12-8 6 8 8 8"/><path d="M8 26c6 0 6 8 12 8s6-8 12-8 6 8 8 8"/>'),
  plates: gl('<circle cx="17" cy="16" r="9"/><circle cx="17" cy="16" r="2.5"/><circle cx="33" cy="32" r="7" fill="currentColor"/><circle cx="33" cy="32" r="2" fill="var(--bg)" stroke="none"/>'),
  shock: gl('<polygon points="' + P(decPts(24, 24, 18)) + '" stroke-width="1.6"/><polygon points="' + P(decPts(24, 24, 11)) + '"/><polygon points="' + P(decPts(24, 24, 4)) + '" fill="currentColor"/>'),
  fountain: gl('<path d="M24 42V22"/><path d="M24 22c-4-8-10-10-14-8M24 22c4-8 10-10 14-8" /><circle cx="10" cy="20" r="2" fill="currentColor"/><circle cx="38" cy="20" r="2" fill="currentColor"/><circle cx="24" cy="9" r="2.2" fill="currentColor"/><path d="M16 42h16"/>'),
  glitter: gl('<circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="30" cy="10" r="1.2" fill="currentColor"/><circle cx="22" cy="22" r="2.2" fill="currentColor"/><circle cx="36" cy="28" r="1.6" fill="currentColor"/><circle cx="14" cy="34" r="1.3" fill="currentColor"/><circle cx="28" cy="38" r="1.8" fill="currentColor"/>'),
  off: gl('<path d="M14 24h20"/>') };
const INTRO_IC = {
  spin: gl('<polygon points="' + P(decPts(24, 24, 15)) + '" fill="currentColor"/>'),
  type: gl('<rect x="7" y="9" width="34" height="30"/><path d="M14 20h14M14 28h8" stroke-width="3"/><path d="M31 25v8" stroke-width="2"/>'),
  tear: gl('<path d="M7 7h34v14l-6 4-6-3-6 4-6-3-5 4-5-2z" fill="currentColor"/><path d="M7 41h34V30l-6 3-6-3-6 4-6-3-5 3-5-2z"/>'),
  vortex: gl('<polygon points="' + P(decPts(24, 24, 16)) + '"/><polygon points="' + P(decPts(24, 24, 10)) + '" transform="rotate(18 24 24)"/><polygon points="' + P(decPts(24, 24, 4.5)) + '" fill="currentColor"/>'),
  off: gl('<path d="M14 24h20"/>') };
const SHARE_URL = 'https://pdbp-hub.github.io/Fitter/';
const SET_IC = {
  display:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M12 4v16" /><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
  progress:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 19L9 12l4 3 8-9"/><path d="M15 6h6v6"/></svg>',
  logic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2.5" width="14" height="19"/><path d="M8 6.5h8v3H8z"/><path d="M8.5 13h1M11.5 13h1M14.5 13h1M8.5 16h1M11.5 16h1M14.5 16v2.5M8.5 18.5h4" stroke-linecap="square"/></svg>',
  data:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2.5" width="10" height="19" rx="1.5"/><path d="M11 18.5h2"/><path d="M12 6.5v6M9.5 10l2.5 2.5 2.5-2.5"/></svg>',
  imprint:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5M9 12h7M9 16h7"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6"/></svg>',
  personal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14"/><circle cx="9" cy="11" r="2.4"/><path d="M5.5 16.5c.6-2 2-3 3.5-3s2.9 1 3.5 3M14.5 10h4M14.5 13.5h4"/></svg>',
  help:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9.3 9.4a2.8 2.8 0 0 1 5.4 1c0 1.9-2.7 2.3-2.7 4.1"/><path d="M12 17.6v.4"/></svg>',
  dev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>' };
const sic = k => `<span class="sic">${SET_IC[k]}</span>`;
function loadQR(cb) { if (window.qrcode) return cb(); const sc = document.createElement('script'); sc.src = 'vendor/qrcode.js'; sc.onload = cb; document.head.appendChild(sc); }
function drawQR() { loadQR(() => { const box = $('qrbox'); if (!box || !window.qrcode) return; const q = qrcode(0, 'M'); q.addData(SHARE_URL); q.make(); box.innerHTML = q.createSvgTag(6, 2); }); }
function copyLink() {
  const done = () => toast(t('copied'));
  const fallback = () => { const r = document.createRange(), el = $('sharelink'); r.selectNodeContents(el); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); try { document.execCommand('copy'); done(); } catch (e) {} };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(SHARE_URL).then(done, fallback); else fallback();
}
function renderSettings() {
  const initials = (S.name.trim().split(/\s+/).filter(Boolean).map(w => w[0]).join('').slice(0, 2) || '?').toUpperCase();
  const tog = (id, on, dis) => `<button class="toggle" id="${id}" role="switch" aria-checked="${on}" ${dis ? 'disabled' : ''}><i></i></button>`;
  const seg = (attr, opts, cur) => `<div class="seg">${opts.map(([v, l]) => `<button data-${attr}="${v}" class="${cur === v ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  const head = title => `<div class="row"><button class="iconbtn" id="spback" aria-label="${t('spBack')}">←</button><span class="eyebrow">${t('spBack')}</span><span style="width:44px"></span></div><h1 class="sph1">${title}</h1>`;
  let h = '';
  if (!setPage) {
    const item = (p, title, hint, lead) => `<button class="setrow sprow" data-sp="${p}">${lead || ''}<div style="flex:1;text-align:left"><b>${title}</b><p>${hint}</p></div>${CHEV}</button>`;
    h = `<h1 class="seth1">${t('settings')}</h1><button class="sprof" id="sprof"><span class="avatar dec">${esc(initials)}</span><div style="flex:1;text-align:left;min-width:0"><b>${esc(S.name || t('spProfile'))}</b><p>@${esc(userName())} · Level ${levelOf(totalPts()) + 1} · ${esc(LEVELS[levelOf(totalPts())][S.lang])}</p></div>${CHEV}</button><div>
      ${item('personal', S.lang === 'de' ? 'Persönliche Daten' : 'Personal data', S.lang === 'de' ? 'Körpergewicht, Alter, Account' : 'Body weight, age, account', sic('personal'))}
      ${item('display', t('spDisplay'), t('spDisplayHint'), sic('display'))}
      ${item('logic', t('spLogic'), t('spLogicHint'), sic('logic'))}
      ${item('data', t('spData'), t('spDataHint'), sic('data'))}
      ${item('share', t('share'), t('shareHint'), sic('share'))}
      ${item('help', S.lang === 'de' ? 'Hilfe' : 'Help', S.lang === 'de' ? 'Einführung, häufige Fragen' : 'Intro, FAQ', sic('help'))}
      ${item('imprint', t('spImprint'), t('spImprintHint'), sic('imprint'))}
      ${ENV === 'dev' ? `<button class="setrow sprow devrow" data-sp="dev">${sic('dev')}<div style="flex:1;text-align:left"><b>${t('devTools')}</b><p>${S.lang === 'de' ? 'Nur in der Dev-Version' : 'Dev version only'}</p></div>${CHEV}</button>` : ''}</div>
      <p class="hint">${t('version')} ${APP_VERSION}${ENV === 'dev' ? ' · Dev' : ''}</p>`;
  } else if (setPage === 'profile') {
    const de = S.lang === 'de';
    const vtog = (k, l, ic) => `<div class="setrow"><div class="vrow">${ic ? `<span class="hic">${ic}</span>` : ''}<b>${l}</b></div>${tog('vis-' + k, S.vis[k] !== false)}</div>`;
    h = head(de ? 'Profil bearbeiten' : 'Edit profile') + `<div class="profile"><span class="avatar dec">${esc(initials)}</span><div style="flex:1;min-width:0"><input class="namein" id="pname" enterkeyhint="done" placeholder="${t('profName')}" value="${esc(S.name)}"><p class="hint" style="margin-top:6px">${de ? 'Anzeigename für Freunde' : 'Display name for friends'}</p></div></div>
      <div class="setrow"><div><b>${de ? 'Benutzername' : 'Username'}</b><p>${de ? 'Damit dich Freunde finden' : 'So friends can find you'}</p></div><span class="userfix num">@${esc(userName())}</span></div>
      <div style="margin-top:8px"><b>Personal Bests</b><p class="hint" style="margin-top:4px">${S.fav.length ? (de ? 'Bis zu 3 deiner Lieblingsübungen (★) zeigen ihre Bestleistung im Profil.' : 'Up to 3 of your favourite exercises (★) show their best on your profile.') : (de ? 'Markiere Übungen mit ★ als Lieblingsübung, dann kannst du sie hier wählen.' : 'Mark exercises with ★ as favourites to pick them here.')}</p></div>
      ${S.fav.length ? `<div class="pbpick">${S.fav.map(k => `<button class="${pbKeys().includes(k) ? 'on' : ''}" data-pbex="${k}">★ ${esc(exName(k))}</button>`).join('')}</div>` : ''}
      <div style="margin-top:8px"><b>${de ? 'Im Profil zeigen' : 'Show on profile'}</b><p class="hint" style="margin-top:4px">${de ? 'Was Freunde sehen können' : 'What friends can see'}</p></div>
      <div>${vtog('level', 'Level & Points', '')}${vtog('week', t('thisWeek'), SIC.cal)}${vtog('month', t('last30'), SIC.cal)}${vtog('pbs', 'Personal Bests', SIC.pb)}${vtog('last', de ? 'Letztes Training' : 'Last session', SIC.hist)}${vtog('fav', de ? 'Lieblings-Workout' : 'Favourite workout', SIC.ex)}</div>`;
  } else if (setPage === 'help') {
    const de = S.lang === 'de';
    h = head(de ? 'Hilfe' : 'Help') + `<button class="mainbtn" id="help-onb">${de ? 'Einführung ansehen' : 'Watch the intro'}</button>
      <div><b>${de ? 'Häufige Fragen' : 'FAQ'}</b></div><div>${FAQ[S.lang].map(([q], j) => `<button class="setrow sprow" data-faq="${j}"><div style="flex:1;text-align:left"><b>${esc(q)}</b></div>${CHEV}</button>`).join('')}</div>`;
  } else if (setPage === 'dev') {
    h = head(t('devTools')) + devHTML();
  } else if (setPage === 'personal') {
    h = head(S.lang === 'de' ? 'Persönliche Daten' : 'Personal data') + `<div>
        <div class="setrow"><div><b>${t('bodyweight')}</b><p>${t('bwHint')}</p></div><label class="kgin"><input id="bw" inputmode="decimal" enterkeyhint="done" class="num" placeholder="—" value="${S.bodyweight ? fmtW(S.bodyweight) : ''}"><span>kg</span></label></div>
        <div class="setrow"><div><b>${t('age')}</b><p>${t('ageHint')}</p></div><label class="kgin"><input id="age" inputmode="numeric" enterkeyhint="done" class="num" placeholder="—" value="${S.age || ''}"><span>${S.lang === 'de' ? 'J.' : 'y'}</span></label></div>
        <div class="setrow"><div><b>${t('bwPoints')}</b><button class="info" id="bwi" aria-label="Info">i</button><p>${S.bodyweight ? t('bwPointsHint') : t('bwPointsOff')}</p></div>${tog('bwp', S.bwPoints, !S.bodyweight)}</div>
        <div class="setrow"><div><b>${S.lang === 'de' ? 'Mitteilungen' : 'Notifications'}</b><p>${S.lang === 'de' ? 'Motivation, wenn du ein paar Tage nicht trainiert hast' : 'Motivation when you have not trained for a few days'}</p></div>${tog('pushtog', !!S.push)}</div>
        <div class="setrow" style="opacity:.45"><div><b>${t('account')}</b><p>${t('accountHint')}</p></div>${CHEV}</div>
      </div>`;
  } else if (setPage === 'display') {
    h = head(t('spDisplay')) + `<div>
      <div class="setrow"><div><b>${t('language')}</b><p>${t('langHint')}</p></div><div class="seg"><button id="l-de" class="${S.lang==='de'?'on':''}">DE</button><button id="l-en" class="${S.lang==='en'?'on':''}">EN</button></div></div>
      <div class="setrow"><div><b>${t('invert')}</b><p>${t('invertHint')}</p></div>${tog('inv', S.inverted)}</div></div>
      <div style="margin-top:8px"><b>${t('trendColor')}</b><p class="hint" style="margin-top:4px">${t('trendColorHint')}</p></div>
      <div class="trcopts">${[0, 1].map(v => `<button class="animopt ${!!v === S.trendColor ? 'on' : ''}" data-trc="${v}">${trendPreview(!!v)}<span>${t(v ? 'trcColor' : 'trcBW')}</span></button>`).join('')}</div>
      <div style="margin-top:8px"><b>${t('accentTitle')}</b><p class="hint" style="margin-top:4px">${t('accentHint')}</p></div>
      <div class="trcopts">${[0, 1].map(v => `<button class="animopt ${!!v === S.accent ? 'on' : ''} ${v ? 'accent' : ''}" data-acc="${v}"><span class="accprev num"><em class="dl up">▲ 12 %</em><em class="dl down">▼ 4 %</em></span><span>${t(v ? 'accColor' : 'accNeutral')}</span></button>`).join('')}</div>
      <div style="margin-top:8px"><b>${t('introTitle')}</b><p class="hint" style="margin-top:4px">${t('introHint')}</p></div>
      <div class="anims intros">${Object.keys(T.de.intros).map(k => `<button class="animopt ${S.intro === k ? 'on' : ''}" data-intro="${k}"><span class="cglyph">${INTRO_IC[k]}</span><span>${t('intros')[k]}</span></button>`).join('')}</div>
      <div style="margin-top:8px"><b>${t('celebTitle')}</b><p class="hint" style="margin-top:4px">${t('celebHint')}</p></div>
      <div class="anims celebs">${Object.keys(T.de.celebs).map(k => `<button class="animopt ${S.celeb === k ? 'on' : ''}" data-celeb="${k}"><span class="cglyph">${CELEB_IC[k]}</span><span>${t('celebs')[k]}</span></button>`).join('')}</div>
      <div style="margin-top:8px"><b>${t('pulseTitle')}</b><p class="hint" style="margin-top:4px">${t('pulseHint')}</p></div>
      <div class="anims">${Object.keys(T.de.pulses).map(k => `<button class="animopt ${S.pulse===k?'on':''}" data-pulse="${k}"><span class="pvdec dec" style="animation:${PULSE[k]} ease-in-out infinite"></span><span>${t('pulses')[k]}</span></button>`).join('')}</div>
      <div style="margin-top:8px"><b>${t('loadTitle')}</b><p class="hint" style="margin-top:4px">${t('loadHint')}</p></div>
      <div class="anims">${Object.keys(T.de.anims).map(k => `<button class="animopt ${S.anim===k?'on':''}" data-anim="${k}">${animSVG(k, false)}<span>${t('anims')[k]}</span></button>`).join('')}</div>
      <div style="margin-top:8px"><b>${S.lang === 'de' ? 'Prognose & Rückblick' : 'Forecast & look-back'}</b><p class="hint" style="margin-top:4px">${S.lang === 'de' ? 'Gestrichelte Linie in den Fortschritt-Charts' : 'Dashed line in the progress charts'}</p></div>
      <div>
      <div class="setrow setcol"><div><b>${t('fcTitle')}</b><button class="info" id="fci" aria-label="Info">i</button><p>${t('fcHint')}</p></div>${seg('fch', [[0, t('fcOff')], [4, '4 ' + t('weeksShort')], [6, '6 ' + t('weeksShort')], [8, '8 ' + t('weeksShort')], [12, '12 ' + t('weeksShort')]], S.fcHor)}</div>
      <div class="setrow setcol" ${S.fcHor ? '' : 'style="opacity:.4;pointer-events:none"'}><div><b>${t('lookTitle')}</b><p>${t('lookHint')}</p></div>${seg('fcl', [[4, '4 ' + t('weeksShort')], [8, '8 ' + t('weeksShort')], [12, '12 ' + t('weeksShort')], [0, t('all')]], S.fcLook)}</div></div>`;
  } else if (setPage === 'progress') {
    const wk = t('weeksShort');
    h = head(t('spProgress')) + `<div>
      <div class="setrow setcol"><div><b>${t('fcTitle')}</b><button class="info" id="fci" aria-label="Info">i</button><p>${t('fcHint')}</p></div>${seg('fch', [[0, t('fcOff')], [4, '4 ' + wk], [6, '6 ' + wk], [8, '8 ' + wk], [12, '12 ' + wk]], S.fcHor)}</div>
      <div class="setrow setcol" ${S.fcHor ? '' : 'style="opacity:.4;pointer-events:none"'}><div><b>${t('lookTitle')}</b><p>${t('lookHint')}</p></div>${seg('fcl', [[4, '4 ' + wk], [8, '8 ' + wk], [12, '12 ' + wk], [0, t('all')]], S.fcLook)}</div></div>`;
  } else if (setPage === 'logic') {
    h = head(t('spLogic')) + `<div>${t('logic').map(([a, b]) => `<div class="logic"><b>${a}</b><p>${b}</p></div>`).join('')}</div>`;
  } else if (setPage === 'share') {
    h = head(t('share')) + `<p class="hint" style="font-size:14px">${t('shareText')}</p>
      <div class="qrbox" id="qrbox" aria-label="QR-Code"></div>
      <div class="linkrow"><span id="sharelink" class="num">${SHARE_URL}</span></div>
      <button class="mainbtn" id="copylink">${t('copyLink')}</button>
      ${navigator.share ? `<button class="ghostbtn" id="nativeshare">${t('shareNative')}</button>` : ''}`;
  } else if (setPage === 'imprint') {
    h = head(t('spImprint')) + `<div class="logic" style="border-top:1px solid var(--line)">${t('imprint')}</div>`;
  } else if (setPage === 'data') {
    h = head(t('spData')) + `<p class="hint">${t('localHint')}</p>
      <button class="ghostbtn" id="resetall" style="border-color:var(--line)">${t('resetAll')}</button>
      <button class="setrow sprow" data-sp="privacy"><div style="flex:1;text-align:left"><b>${t('privacy')}</b><p>${t('privacyHint')}</p></div>${CHEV}</button>
      <p class="hint">${t('version')} ${APP_VERSION}${ENV === 'dev' ? ' · Dev' : ''}</p>`;
  } else if (setPage === 'privacy') {
    h = head(t('privacy')) + `<div class="logic" style="border-top:1px solid var(--line)">${t('privacyHtml')}</div>`;
  }
  $('v-settings').innerHTML = `<div class="inner">${h}</div>`;
  save();
  const on = (id, fn) => { const el = $(id); if (el) el.onclick = fn; };
  document.querySelectorAll('[data-sp]').forEach(b => b.onclick = () => { setPage = b.dataset.sp; renderSettings(); $('v-settings').scrollTop = 0; });
  on('help-onb', () => showOnboarding(true));
  on('pushtog', () => setPush(!S.push));
  document.querySelectorAll('[data-faq]').forEach(b => b.onclick = () => { const [q, a] = FAQ[S.lang][+b.dataset.faq]; showInfo(`<b>${esc(q)}</b><p>${a}</p>`); });
  if (setPage === 'dev') bindDev();
  document.querySelectorAll('[data-intro]').forEach(b => b.onclick = () => { S.intro = b.dataset.intro; save(); if (S.intro !== 'off') previewIntro(); else renderSettings(); });
  on('copylink', copyLink); on('nativeshare', () => navigator.share({ title: 'TRAIN', url: SHARE_URL }).catch(() => {}));
  if (setPage === 'share') drawQR();
  document.querySelectorAll('[data-celeb]').forEach(b => b.onclick = () => { S.celeb = b.dataset.celeb; renderSettings(); celebrate(); });
  on('spback', () => { setPage = null; renderSettings(); $('v-settings').scrollTop = 0; });
  on('resetall', () => dialog(t('resetAllTitle'), t('resetAllText'), [[t('resetAllNo'), 'mainbtn', () => {}], [t('resetAllYes'), 'ghostbtn', () => dialog(t('resetAllTitle'), '', [[t('resetAllNo'), 'mainbtn', () => {}], [t('resetAllYes'), 'ghostbtn', () => { try { localStorage.removeItem(STORE_KEY); } catch (e) {} location.reload(); }]])]]));
  $('pname') && ($('pname').onchange = e => { S.name = e.target.value; renderSettings(); });
  on('l-de', () => setLang('de')); on('l-en', () => setLang('en'));
  on('inv', () => { S.inverted = !S.inverted; applyClasses(); renderSettings(); });
  document.querySelectorAll('[data-acc]').forEach(b => b.onclick = () => { S.accent = b.dataset.acc === '1'; applyClasses(); renderSettings(); });
  document.querySelectorAll('[data-trc]').forEach(b => b.onclick = () => { S.trendColor = b.dataset.trc === '1'; renderSettings(); });
  on('bwi', () => showInfo(t('bwInfo')));
  ['level', 'week', 'month', 'pbs', 'last', 'fav'].forEach(k => on('vis-' + k, () => { S.vis = Object.assign({}, S.vis, { [k]: S.vis[k] === false }); renderSettings(); }));
  document.querySelectorAll('[data-pbex]').forEach(b => b.onclick = () => { const k = b.dataset.pbex, cur = pbKeys(); if (cur.includes(k)) S.pbEx = cur.filter(x => x !== k); else if (cur.length < 3) S.pbEx = cur.concat(k); else toast(S.lang === 'de' ? 'Es werden 3 Personal Bests gezeigt. Erst eine abwählen.' : '3 personal bests are shown. Deselect one first.'); renderSettings(); });
  on('sprof', () => openProfile(myProfile(), 'settings'));
  on('fci', () => showInfo(t('infoFc', S.fcLook, S.fcHor || 6)));
  $('age') && ($('age').onchange = e => { const v = parseNum(e.target.value); S.age = v && v > 0 ? Math.round(v) : null; renderSettings(); });
  $('bw') && ($('bw').onchange = e => { const v = parseNum(e.target.value); S.bodyweight = v && v > 0 ? v : null; if (!S.bodyweight) S.bwPoints = false; renderSettings(); });
  on('bwp', () => { S.bwPoints = !S.bwPoints; renderSettings(); });
  document.querySelectorAll('[data-fch]').forEach(b => b.onclick = () => { S.fcHor = +b.dataset.fch; renderSettings(); });
  document.querySelectorAll('[data-fcl]').forEach(b => b.onclick = () => { S.fcLook = +b.dataset.fcl; renderSettings(); });
  document.querySelectorAll('[data-pulse]').forEach(b => b.onclick = () => { S.pulse = b.dataset.pulse; applyClasses(); renderSettings(); });
  document.querySelectorAll('[data-anim]').forEach(b => b.onclick = () => { S.anim = b.dataset.anim; renderSettings(); if (W && W.mode !== 'review') renderW(); });
}
function setLang(l) { S.lang = l; document.documentElement.lang = l; greetText = greeting(); document.querySelectorAll('[data-t]').forEach(el => el.textContent = t(el.dataset.t)); renderSettings(); if (W) renderW(); }

/* ---------- Keyboard helpers ---------- */
function kbFix() { const vv = window.visualViewport; if (!vv) return; const off = Math.max(0, window.innerHeight - vv.height - vv.offsetTop); document.documentElement.style.setProperty('--kb', off + 'px'); }
if (window.visualViewport) { visualViewport.addEventListener('resize', kbFix); visualViewport.addEventListener('scroll', kbFix); }
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.tagName === 'INPUT') { e.preventDefault(); e.target.blur(); } });
const isNumInput = el => el && el.getAttribute && ['decimal','numeric'].includes(el.getAttribute('inputmode'));
document.addEventListener('focusin', e => { if (isNumInput(e.target)) { $('kbdone').textContent = t('done'); $('kbdone').hidden = false; } });
document.addEventListener('focusout', () => setTimeout(() => { if (!isNumInput(document.activeElement)) $('kbdone').hidden = true; }, 50));
$('kbdone').addEventListener('pointerdown', e => { e.preventDefault(); const a = document.activeElement; if (a) a.blur(); $('kbdone').hidden = true; });

document.documentElement.lang = S.lang;
applyClasses();
greetText = greeting();
document.querySelectorAll('[data-t]').forEach(el => el.textContent = t(el.dataset.t));
// Dev version: fills the history with ~10 weeks of sample sessions
function seedMock() {
  const BASE = { bench:[72.5,8], incline:[24,10], ohp:[40,8], pushdown:[30,12], dips:[10,8], latpull:[60,10], row:[55,10], pullup:[-15,8], curl:[14,10], hammer:[16,10], squat:[90,6], legpress:[160,10], rdl:[70,10], calf:[80,12] };
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  HISTORY.length = 0; lastFinished = null;
  for (let k = 0; k < 10; k++) [['push', 2], ['pull', 4], ['legs', 6]].forEach(([wid, off]) => {
    const ago = off + 7 * k, w = DEFAULT_WORKOUTS.find(x => x.id === wid), d = new Date(); d.setDate(d.getDate() - ago); d.setHours(18, 10, 0, 0);
    const ex = w.ex.map(([kk, n]) => { const [bw, br] = BASE[kk]; const wt = bw >= 0 ? r05(bw * (1 - ago * 0.0016)) : r05(bw - ago * 0.08);
      return { k: kk, sets: Array.from({ length: n }, (_, j) => ({ w: wt, r: Math.max(3, br - (j > 1 ? 1 : 0) + (rnd() < .3 ? 1 : 0)), d: 35 + Math.round(rnd() * 25) })) }; });
    const h = { id: 'm' + wid + ago, date: d.getTime(), wid, wname: w.name, dur: 48 + Math.round(rnd() * 20), ex }; h.pts = ptsOf(sessVol(h)); HISTORY.push(h);
  });
  refreshAgo();
  Object.keys(EX).forEach(k => { const s = sessionsFor(k)[0]; if (s) LAST[k] = [s.top.w, s.top.r]; else delete LAST[k]; });
}
if (ENV === 'dev' && !STORED && !location.search.includes('noseed')) { seedMock(); save(); }
if (STORED && STORED.lastFinished) { const h = HISTORY.find(x => x.id === STORED.lastFinished.histId); if (h) lastFinished = { W: deserW(STORED.lastFinished.w), hist: h, at: STORED.lastFinished.at }; }
show('start');
const TESTRUN = location.search.includes('test');
// app start: wait until the fonts are in, otherwise the start screen shifts after the intro measured it (decagon jumps down)
// the decagon's position without its pulse (the pulse scales it, so a measurement mid-pulse would be off by a few px)
function goRect(go) { const a = go.style.animation; go.style.animation = 'none'; const r = go.getBoundingClientRect(); go.style.animation = a; return r; }
function startIntro() { const go = $('go'); if (go && S.intro !== 'off') go.style.visibility = 'hidden';
  // iPhone home screen: the layout can still move for a moment after launch (status bar, fonts) – wait until it is still
  const stable = done => { let last = null, same = 0, n = 0; const f = () => { const g = $('go'); if (!g) return done(); const r = goRect(g), k = Math.round(r.top) + ',' + Math.round(r.left) + ',' + Math.round(r.width);
      same = k === last ? same + 1 : 0; last = k; if (same >= 4 || ++n > 60) done(); else requestAnimationFrame(f); }; requestAnimationFrame(f); };
  const run = () => { fitGreet(); stable(() => { if ($('go')) $('go').style.visibility = ''; playIntroSel(); }); };
  Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 800))]).then(run, run); }
fetchRemote(); applySeason();
const wantInstall = location.search.includes('install') || (!TESTRUN && !isStandalone() && !sessionStorage.getItem('fitter.web') && /iPhone|iPad|Android/i.test(navigator.userAgent));
if (wantInstall) showInstall(false);
else if (!TESTRUN) { if (!S.onboarded) showOnboarding(); else startIntro(); }
if (STORED && STORED.active) { W = deserW(STORED.active); renderW(); openW(); }
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
