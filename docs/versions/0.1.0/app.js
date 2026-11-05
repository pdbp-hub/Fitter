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
const APP_VERSION = '0.1.0';
const STORE_KEY = 'fitter.v1';
const DEFAULT_WORKOUTS = [
  { id:'push', name:'Push Day', ex:[['bench',4],['incline',4],['ohp',4],['pushdown',4],['dips',3]] },
  { id:'pull', name:'Pull Day', ex:[['latpull',4],['row',4],['pullup',3],['curl',4],['hammer',3]] },
  { id:'legs', name:'Leg Day',  ex:[['squat',4],['legpress',4],['rdl',4],['calf',4]] }
];
const S = { lang:'de', inverted:false, anim:'breath', pulse:'breathe', trendColor:false, name:'', bodyweight:null, bwPoints:false, fav:['bench','latpull','squat'], chartKey:'bench' };
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
    progress:'Fortschritt', history:'Verlauf', calendar:'Kalender', less:'Weniger', today:'Heute →', noWorkout:'Kein Training', details:'Details', hide:'Weniger', min:m=>`${m} min`, setsWord:'Sätze',
    last30:'Letzte 30 Tage', wCount:'Workouts', movedW:'Bewegtes Gewicht', trainTime:'Trainingszeit', prs:'Neue Rekorde',
    forEx:'Pro Übung', chStrength:'Kraft (1RM)', chVolume:'Volumen pro Training', chWeight:'Arbeitsgewicht', forecast:'Prognose 6 Wochen', forecastTag:'Prognose', trend:'Verlauf',
    info1rm:'<b>1RM</b> = One-Rep-Max: das Gewicht, das du genau 1× schaffen würdest. Geschätzt mit der Epley-Formel aus deinem besten Satz:<br><code>1RM = Gewicht × (1 + Wdh. / 30)</code><br>Beispiel: 60 kg × 10 → 80 kg.',
    infoFc:'Trend der letzten 8 Wochen, fortgeschrieben – wie Excels logarithmische Trendlinie. Sie flacht ab, weil Kraft mit der Zeit langsamer wächst. Grau = Unsicherheit.',
    infoVol:'Gewicht × Wiederholungen, über alle Sätze dieser Übung in einem Training.', infoWeight:'Das schwerste Gewicht, das du in diesem Training bewegt hast.',
    bwEmpty:'Du machst diese Übung mit Unterstützung. Sie zählt erst, wenn du in den Einstellungen dein Körpergewicht einträgst und „Körpergewicht mitzählen“ einschaltest.', pbs:'Personal Bests', approx:v=>`≈ ${v} kg 1RM`, maxFav:'Maximal 3 Favoriten',
    settings:'Einstellungen', language:'Sprache', langHint:'Deutsch oder Englisch', invert:'Farbumkehr', invertHint:'Schwarz auf Weiß statt Weiß auf Schwarz', bodyweight:'Körpergewicht', bwHint:'Nur für Dips, Klimmzüge & Co.',
    bwPoints:'Körpergewicht mitzählen', bwPointsHint:'Bei Dips, Klimmzügen & Co.', bwPointsOff:'Erst Körpergewicht eintragen',
    bwInfo:'Bei Übungen wie Dips oder Klimmzügen bewegst du dein eigenes Gewicht. Ist der Schalter <b>aus</b>, zählt nur Zusatzgewicht (z. B. +10 kg). Ist er <b>an</b>, wird dein Körpergewicht dazugerechnet: Du wiegst 80 kg und machst Dips mit 20 kg Unterstützung (−20) → zählt wie 60 kg.',
    animTitle:'Animation Aufwärmen & Cooldown', animHint:'Läuft auch klein im Workout. Beim Cooldown rückwärts.',
    anims:{ breath:'Puls', fill:'Füllen', shards:'Splitter', mosaic:'Mosaik', rings:'Ringe', segments:'Segmente', spin:'Rotation', stack:'Stapel' },
    ready:'Bereit?', readyHint:'Reihenfolge kannst du jetzt noch ändern – oder später im Workout. Am Griff ≡ ziehen.', start:'Start', sets:n=>`${n} Sätze`, lastShort:(w,r)=>`zuletzt ${w} × ${r}`,
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
      noon:['Mittagspause? Machen wir eine Trainingspause draus.','Halbzeit des Tages. Volle Kraft.','Kurze Pause, große Gewichte.','Mittags ist die Hantelbank frei.','Energie tanken – mit Eisen.'],
      afternoon:['Zeit, den Tag abzuschütteln.','Nachmittagstief? Nicht mit dir.','Heute ein bisschen stärker als gestern.','Die beste Pause ist ein guter Satz.','Bereit für ein neues Rekordgewicht?'],
      evening:['Feierabend heißt Trainingsbeginn.','Den Tag mit einem starken Satz beenden.','Guten Abend, Kraftpaket.','Andere gehen auf die Couch. Du gehst ins Gym.','Heute Abend wird gepumpt.'],
      night:['Nachteule im Gym. Respekt.','Die Hanteln schlafen nie.','Spät dran, aber am Start.','Leeres Gym, freie Bahn.','Mitternachtsgains.'] } },
  en:{ navProg:'Progress', navSet:'Settings', points:'Points', ptsWeek:'+35 this week', cta:"Let's go", tap:'Start', thisWeek:'This week', workouts:'Workouts', moved:'moved', vsLast:'vs. last week',
    resume:'Resume workout', resumeLeft:m=>`${m} min left to resume`,
    yourWorkouts:'Your workouts', whatToday:"What's on today?", newWorkout:'New workout', go:'GO', exN:n=>`${n} exercises`, ago:d=> d===0?'today':d===1?'yesterday':`${d} days ago`, lastDone:s=>`Last done ${s}`, never:'never',
    progress:'Progress', history:'History', calendar:'Calendar', less:'Less', today:'Today →', noWorkout:'Rest day', details:'Details', hide:'Less', min:m=>`${m} min`, setsWord:'Sets',
    last30:'Last 30 days', wCount:'Workouts', movedW:'Weight moved', trainTime:'Training time', prs:'New records',
    forEx:'Per exercise', chStrength:'Strength (1RM)', chVolume:'Volume per session', chWeight:'Working weight', forecast:'6-week forecast', forecastTag:'Forecast', trend:'History',
    info1rm:'<b>1RM</b> = one-rep max: the weight you could lift exactly once. Estimated with the Epley formula from your best set:<br><code>1RM = weight × (1 + reps / 30)</code><br>Example: 60 kg × 10 → 80 kg.',
    infoFc:'Trend of the last 8 weeks, extended – like Excel’s logarithmic trendline. It flattens because strength grows more slowly over time. Grey = uncertainty.',
    infoVol:'Weight × reps across all sets of this exercise in one session.', infoWeight:'The heaviest weight you moved in that session.',
    bwEmpty:'You do this exercise with assistance. It only counts once you enter your body weight in Settings and turn on “Count body weight”.', pbs:'Personal bests', approx:v=>`≈ ${v} kg 1RM`, maxFav:'3 favourites max',
    settings:'Settings', language:'Language', langHint:'German or English', invert:'Invert colors', invertHint:'Black on white instead of white on black', bodyweight:'Body weight', bwHint:'Only for dips, pull-ups & co.',
    bwPoints:'Count body weight', bwPointsHint:'For dips, pull-ups & co.', bwPointsOff:'Enter body weight first',
    bwInfo:'In exercises like dips or pull-ups you move your own weight. With the switch <b>off</b>, only extra weight counts (e.g. +10 kg). With it <b>on</b>, your body weight is added: you weigh 80 kg and do dips with 20 kg assistance (−20) → counts as 60 kg.',
    animTitle:'Warm-up & cool-down animation', animHint:'Also runs small during the workout. Reversed in cool-down.',
    anims:{ breath:'Pulse', fill:'Fill', shards:'Shards', mosaic:'Mosaic', rings:'Rings', segments:'Segments', spin:'Spin', stack:'Stack' },
    ready:'Ready?', readyHint:'You can still change the order now – or later during the workout. Drag the ≡ handle.', start:'Start', sets:n=>`${n} sets`, lastShort:(w,r)=>`last ${w} × ${r}`,
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
Object.assign(T.de, { ptsWeek:n=>`+${n} diese Woche`, edit:'Bearbeiten', doneEdit:'Fertig', editWorkout:'Workout bearbeiten', delWorkout:'Workout löschen', delWTitle:'Workout löschen?', delWText:'Bisherige Trainings bleiben im Verlauf erhalten.', delYes:'Löschen', keep:'Behalten',
  noData:'Noch keine Daten. Nach deinem ersten Training siehst du hier deinen Verlauf.', noPB:'Noch keine Rekorde – leg los!', noWorkouts:'Noch keine Workouts. Leg oben dein erstes an.', data:'Daten', localHint:'Alle Daten liegen nur auf diesem Gerät. Cloud-Speicherung kommt bald.',
  resetAll:'Alle Daten löschen', resetAllTitle:'Wirklich alle Daten löschen?', resetAllText:'Workouts, Verlauf und Einstellungen werden von diesem Gerät gelöscht. Das kann nicht rückgängig gemacht werden.', resetAllYes:'Ja, alles löschen', resetAllNo:'Abbrechen', version:'Version', readyHint:'Reihenfolge kannst du jetzt noch ändern – oder später im Workout.', resetTitle:'Satz-Timer zurücksetzen?', resetText:'Die bisherige Zeit wird der Pause davor zugerechnet.', resetYes:'Zurücksetzen', resetNo:'Abbrechen',
  perSet:'Kraft pro Satz', bestSet:'Bester Satz', vsLastTime:'vs. letztes Mal', strengthShort:'Kraft (1RM)', moreEx:'Weitere Übungen', profile:'Profil', profName:'Dein Name', account:'Account & Cloud-Sync', accountHint:'Kommt mit der Cloud-Version',
  display:'Darstellung', animations:'Animationen', pulseTitle:'Puls-Animation', pulseHint:'Für „Los geht’s“ und die GO-Buttons', pulses:{ breathe:'Atmen', beat:'Herzschlag', wobble:'Wippen', off:'Aus' },
  loadTitle:'Lade-Animation', loadHint:'Läuft beim Aufwärmen, im Training (im Zehneck oben) und beim Cooldown – dort rückwärts.', trendColor:'Trend-Farben', trendColorHint:'Charts grün bei Aufwärtstrend, rot bei Abwärtstrend',
  greet:{ morning:['Früher Vogel, schwere Gewichte.','Morgen! Die Hanteln warten.','Kaffee? Nach dem letzten Satz.','Der Tag gehört dir.','Morgens trainiert, ganztags stolz.'],
    noon:['Mittagspause? Trainingspause!','Halbzeit. Volle Kraft.','Kurze Pause, große Gewichte.','Mittags ist die Bank frei.','Energie tanken – mit Eisen.'],
    afternoon:['Zeit, den Tag abzuschütteln.','Nachmittagstief? Nicht mit dir.','Stärker als gestern.','Die beste Pause: ein guter Satz.','Bereit für einen Rekord?'],
    evening:['Feierabend heißt Training.','Stark in den Feierabend.','Guten Abend, Kraftpaket.','Andere chillen. Du trainierst.','Heute Abend wird gepumpt.'],
    night:['Nachteule im Gym. Respekt!','Die Hanteln schlafen nie.','Spät dran, aber am Start.','Leeres Gym, freie Bahn.','Mitternachtsgains.'] } });
Object.assign(T.en, { ptsWeek:n=>`+${n} this week`, edit:'Edit', doneEdit:'Done', editWorkout:'Edit workout', delWorkout:'Delete workout', delWTitle:'Delete workout?', delWText:'Past sessions stay in your history.', delYes:'Delete', keep:'Keep',
  noData:'No data yet. After your first session you will see your progress here.', noPB:'No records yet – let’s go!', noWorkouts:'No workouts yet. Create your first one above.', data:'Data', localHint:'All data is stored on this device only. Cloud sync is coming soon.',
  resetAll:'Delete all data', resetAllTitle:'Really delete all data?', resetAllText:'Workouts, history and settings will be removed from this device. This cannot be undone.', resetAllYes:'Yes, delete everything', resetAllNo:'Cancel', version:'Version', readyHint:'You can still change the order now – or later during the workout.', resetTitle:'Reset set timer?', resetText:'The time so far is added to the rest before.', resetYes:'Reset', resetNo:'Cancel',
  perSet:'Strength per set', bestSet:'Best set', vsLastTime:'vs. last time', strengthShort:'Strength (1RM)', moreEx:'More exercises', profile:'Profile', profName:'Your name', account:'Account & cloud sync', accountHint:'Coming with the cloud version',
  display:'Display', animations:'Animations', pulseTitle:'Pulse animation', pulseHint:'For “Let’s go” and the GO buttons', pulses:{ breathe:'Breathe', beat:'Heartbeat', wobble:'Wobble', off:'Off' },
  loadTitle:'Loading animation', loadHint:'Runs during warm-up, training (in the decagon on top) and cool-down – reversed there.', trendColor:'Trend colours', trendColorHint:'Charts green when trending up, red when trending down',
  greet:{ morning:['Early bird, heavy weights.','Morning! The weights are waiting.','Coffee? After the last set.','Own the day.','Train early, proud all day.'],
    noon:['Lunch break? Lift break!','Halftime. Full power.','Short break, big weights.','The bench is free at noon.','Refuel with iron.'],
    afternoon:['Shake off the day.','Afternoon slump? Not you.','Stronger than yesterday.','Best break: a good set.','Ready for a record?'],
    evening:['Work is over. Training begins.','Finish the day strong.','Good evening, powerhouse.','Others chill. You train.','Tonight we pump.'],
    night:['Night owl in the gym. Respect!','The weights never sleep.','Late, but here.','Empty gym, open floor.','Midnight gains.'] } });
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
const ptsOf = vol => Math.max(5, Math.round(vol / 250));
const totalPts = () => HISTORY.reduce((a, h) => a + (h.pts || 0), 0);
function weekStats() { const dow = (new Date().getDay() + 6) % 7; const cur = HISTORY.filter(h => h.ago <= dow), prev = HISTORY.filter(h => h.ago > dow && h.ago <= dow + 7); const v1 = cur.reduce((a, h) => a + sessVol(h), 0), v0 = prev.reduce((a, h) => a + sessVol(h), 0); return { n: cur.length, vol: v1, pct: v0 ? Math.round((v1 / v0 - 1) * 100) : null, pts: cur.reduce((a, h) => a + (h.pts || 0), 0) }; }
function prCount(days) { let n = 0; const seen = {}; [...HISTORY].sort((a, b) => b.ago - a.ago || a.date - b.date).forEach(h => h.ex.forEach(e => { const b = Math.max(...e.sets.map(s => e1rm(Math.max(0, effW(e.k, s.w)), s.r))); if (b > 0 && seen[e.k] !== undefined && b > seen[e.k] && h.ago < days) n++; seen[e.k] = Math.max(seen[e.k] ?? 0, b); })); return n; }
const volTxt = v => v >= 1000 ? fmt(v / 1000, 1) + ' t' : fmt(Math.round(v)) + ' kg';
const sessVol = h => h.ex.reduce((a, e) => a + e.sets.reduce((b, s) => b + Math.max(0, effW(e.k, s.w)) * s.r, 0), 0);
function sessionsFor(k) { // newest first
  return HISTORY.filter(h => h.ex.some(e => e.k === k)).sort((a, b) => a.ago - b.ago || b.date - a.date).map(h => { const e = h.ex.find(x => x.k === k);
    const top = e.sets.reduce((b, s) => s.w > b.w ? s : b, e.sets[0]); const best = Math.max(...e.sets.map(s => e1rm(effW(k, s.w), s.r)));
    return { ago:h.ago, top, best, vol: e.sets.reduce((a, s) => a + Math.max(0, effW(k, s.w)) * s.r, 0), sets:e.sets }; });
}
const LAST = {}; Object.keys(EX).forEach(k => { const s = sessionsFor(k)[0]; if (s) LAST[k] = [s.top.w, s.top.r]; });
function lastAgoW(id) { const h = HISTORY.filter(x => x.wid === id).sort((a,b) => a.ago - b.ago)[0]; return h ? h.ago : null; }
function lastAgoEx(k) { const s = sessionsFor(k)[0]; return s ? s.ago : null; }
function toast(msg) { const d = document.createElement('div'); d.className = 'toast'; d.textContent = msg; $('app').appendChild(d); setTimeout(() => d.remove(), 2200); }
function greeting() { const h = new Date().getHours(); const slot = h >= 5 && h < 11 ? 'morning' : h >= 11 && h < 14 ? 'noon' : h >= 14 && h < 18 ? 'afternoon' : h >= 18 && h < 22 ? 'evening' : 'night'; const l = t('greet')[slot]; return l[Math.floor(Math.random() * l.length)]; }
let greetText = '';
const ICON = {
  bb:'<path d="M1.5 12h21"/><rect x="4" y="6" width="2.6" height="12" rx=".4"/><rect x="17.4" y="6" width="2.6" height="12" rx=".4"/><rect x="7" y="8.5" width="1.6" height="7" rx=".3"/><rect x="15.4" y="8.5" width="1.6" height="7" rx=".3"/>',
  db:'<path d="M8.5 12h7"/><rect x="5" y="7" width="3.5" height="10" rx=".6"/><rect x="15.5" y="7" width="3.5" height="10" rx=".6"/><rect x="2.5" y="9" width="2.5" height="6" rx=".4"/><rect x="19" y="9" width="2.5" height="6" rx=".4"/>',
  cable:'<path d="M4 2.5h16"/><path d="M12 2.5v2"/><circle cx="12" cy="7" r="2.5"/><path d="M12 9.5v8"/><path d="M7 20.5h10"/><path d="M9 20.5l3-3 3 3"/>',
  machine:'<path d="M8.5 2.5v6M15.5 2.5v6"/><rect x="6" y="8.5" width="12" height="13" rx=".5"/><path d="M6 11.7h12M6 14.9h12M6 18.1h12"/><path d="M12 13.3h7.5"/>',
  bw:'<path d="M2.5 3h19"/><path d="M7 3l3.5 6.5M17 3l-3.5 6.5"/><circle cx="12" cy="9.2" r="2"/><path d="M12 11.2v5.8M12 17l-2.2 4.5M12 17l2.2 4.5"/>',
  custom:'<path d="M12 5v14M5 12h14"/>' };
const ico = k => `<span class="ico" title="${esc(t('eqs')[EX[k].eq])}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">${EX[k].custom ? ICON.custom : ICON[EX[k].eq]}</svg></span>`;
const GRIP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 8h14M5 12h14M5 16h14"/></svg>';

/* ---------- Decagon geometry + animations ---------- */
const decPts = (cx, cy, r) => Array.from({length:10}, (_, i) => { const a = 36 * i * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
const P = pts => pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
let svgId = 0;
function animSVG(kind, cool, paused) {
  const R = 94, o = decPts(100,100,R); const id = 'c' + (++svgId); let s = '';
  if (kind === 'breath') s = `<polygon class="an a-ring" points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="3"/><polygon class="an a-breath" points="${P(o)}" fill="var(--fg)"/>`;
  if (kind === 'fill') s = `<defs><clipPath id="${id}"><polygon points="${P(o)}"/></clipPath></defs><polygon points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="4"/><g clip-path="url(#${id})"><rect class="an a-fill" x="0" y="0" width="200" height="200" fill="var(--fg)"/></g>`;
  if (kind === 'shards') o.forEach((p, i) => { const q = o[(i+1)%10], mx = (p[0]+q[0])/2 - 100, my = (p[1]+q[1])/2 - 100; s += `<polygon class="an a-shard" style="--dx:${(mx*.55).toFixed(0)}px;--dy:${(my*.55).toFixed(0)}px;animation-delay:${(i*.07).toFixed(2)}s" points="100,100 ${P([p,q])}" fill="var(--fg)" stroke="var(--bg)" stroke-width="2"/>`; });
  if (kind === 'mosaic') { s = `<defs><clipPath id="${id}"><polygon points="${P(o)}"/></clipPath></defs><g clip-path="url(#${id})">`; for (let y = 0; y < 9; y++) for (let x = 0; x < 9; x++) { const cx = 12 + x * 22, cy = 12 + y * 22, d = Math.hypot(cx-100, cy-100); s += `<polygon class="an a-tile" style="animation-delay:${(d/100*.9).toFixed(2)}s" points="${P(decPts(cx,cy,11))}" fill="var(--fg)"/>`; } s += '</g>'; }
  if (kind === 'rings') { for (let i = 0; i < 4; i++) s += `<polygon class="an a-in" style="animation-delay:${(i*.65).toFixed(2)}s" points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="5"/>`; s += `<polygon points="${P(decPts(100,100,20))}" fill="var(--fg)"/>`; }
  if (kind === 'segments') { o.forEach((p, i) => { const q = o[(i+1)%10]; s += `<line class="an a-seg" style="animation-delay:${(i*.26).toFixed(2)}s" x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}" stroke="var(--fg)" stroke-width="12"/>`; }); s += `<polygon points="${P(decPts(100,100,52))}" fill="var(--fg)"/>`; }
  if (kind === 'spin') s = `<polygon class="an a-spin" points="${P(o)}" fill="none" stroke="var(--fg)" stroke-width="5"/><polygon class="an a-spinr" points="${P(decPts(100,100,64))}" fill="none" stroke="var(--fg)" stroke-width="5"/><polygon points="${P(decPts(100,100,34))}" fill="var(--fg)"/>`;
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
  let p = $('popover'); if (!p) { p = document.createElement('div'); p.id = 'popover'; p.className = 'popover'; p.setAttribute('role', 'dialog'); $('app').appendChild(p); }
  p.innerHTML = `<button class="x" aria-label="Schließen">✕</button><div>${html}</div>`; p.hidden = false; p.querySelector('.x').onclick = () => p.hidden = true;
}
function applyClasses() { $('app').className = 'app pm-' + S.pulse + (S.inverted ? ' inverted' : ''); document.body.style.background = S.inverted ? '#f3f3ef' : '#0b0b0a'; }
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
document.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { if (b.dataset.tab === 'start' && W) { openW(); return; } show(b.dataset.tab); });

let lastFinished = null; // { W, hist, at }
function renderStart() {
  const canResume = lastFinished && Date.now() - lastFinished.at < 30 * 60000, wk = weekStats();
  $('v-start').innerHTML = `<div class="inner">
    <div class="ptsline"><div class="pv"><b class="num">${fmt(totalPts())}</b><strong>${t('points')}</strong></div><small>${t('ptsWeek', wk.pts)}</small></div>
    <div class="hero"><button class="octa dec pulse" id="go"><span class="greet" id="greet">${esc(greetText)}</span><span class="cta">${t('cta')}</span><span class="tap">${t('tap')}</span></button></div>
    ${canResume ? `<button class="resume" id="resume"><span><b>${t('resume')}</b><small>${esc(lastFinished.W.name)} · ${t('resumeLeft', Math.ceil((30*60000 - (Date.now() - lastFinished.at)) / 60000))}</small></span><span>→</span></button>` : ''}
    <div><div class="weekhead">${t('thisWeek')}</div>
      <div class="weekstats num"><div><b>${wk.n}</b><span>${t('workouts')}</span></div><div><b>${volTxt(wk.vol)}</b><span>${t('moved')}</span></div><div><b>${wk.pct === null ? '—' : (wk.pct >= 0 ? '+' : '−') + Math.abs(wk.pct) + ' %'}</b><span>${t('vsLast')}</span></div></div></div>
  </div>`;
  fitGreet();
  $('go').onclick = () => W ? openW() : show('select');
  $('resume') && ($('resume').onclick = () => { const i = HISTORY.indexOf(lastFinished.hist); if (i >= 0) HISTORY.splice(i, 1); W = lastFinished.W; W.mode = 'train'; W.phase = 'rest'; W.phaseStart = Date.now(); delete W.end; lastFinished = null; renderW(); openW(); renderStart(); });
}
let editMode = false;
function renderSelect() {
  $('v-select').innerHTML = `<div class="inner">
    <div class="row"><button class="iconbtn" id="back" aria-label="Zurück">←</button>${workouts.length ? `<button class="textbtn" id="editmode" style="color:var(--fg)">${editMode ? t('doneEdit') : t('edit')}</button>` : ''}</div>
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
}

/* ---------- Workout ---------- */
let W = null;
function prepareWorkout(src) {
  W = { src, name: src.name, mode:'ready', start:null, phase:'idle', phaseStart:Date.now(), cur:0, open:{}, edit:null,
        ex: src.ex.filter(([k]) => EX[k]).map(([k, n]) => ({ k, target:n, sets:[], w: LAST[k] ? LAST[k][0] : (isBW(k) ? 0 : 20), r: LAST[k] ? LAST[k][1] : 10 })) };
  renderW(); openW(); $('wbody').scrollTop = 0;
}
function openW() { $('wsheet').classList.remove('down'); $('wsheet').style.transform = ''; $('mini').hidden = true; }
function minimize() { $('wsheet').classList.add('down'); $('wsheet').style.transform = ''; if (W && W.mode !== 'review') $('mini').hidden = false; tick(); }
function closeW() { W = null; keepAwake(false); save(); $('wsheet').classList.add('down'); $('mini').hidden = true; greetText = greeting(); if (tab === 'start') renderStart(); if (tab === 'select') renderSelect(); }
function setBar(html) { $('wbar').firstElementChild.innerHTML = html; $('wbar').hidden = !html; }
const curEx = () => W.ex[W.cur];
const allDone = () => W.ex.every(e => e.sets.length >= e.target);
const nextOpen = () => { const o = [...W.ex.keys()]; return o.slice(W.cur + 1).concat(o.slice(0, W.cur)).find(i => W.ex[i].sets.length < W.ex[i].target); };
const allDoneAfter = () => W.ex.every((x, i) => i === W.cur ? x.sets.length + 1 >= x.target : x.sets.length >= x.target);

function renderHead() {
  const top = `<div class="wtop"><button class="iconbtn" id="minbtn" aria-label="Minimieren">⌄</button><div><div class="eyebrow">${esc(W.name)}</div><div class="overall num">${t('overall')} <span id="w-overall">${W.start ? mmss((Date.now()-W.start)/1000) : '00:00'}</span></div></div>${W.mode === 'train' ? `<button class="iconbtn" id="endbtn" aria-label="${t('endAbort')}">✕</button>` : '<span></span>'}</div>`;
  let ph = '';
  if (W.mode === 'train') {
    const lbl = W.phase === 'set' ? t('setLabel', curEx().sets.length + 1) : t('rest');
    ph = `<div class="wphase"><div class="wdec ${W.rise ? 'rise' : ''}">${animSVG(S.anim, W.phase !== 'set', false)}<svg viewBox="0 0 200 200" class="outline" aria-hidden="true"><polygon points="${P(decPts(100,100,97))}" fill="none" stroke="var(--fg)" stroke-width="3"/></svg><div class="inside"><span class="plabel">${lbl}</span><span class="pval num" id="phasetime">00:00</span></div></div></div>`;
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
    h = `<div><h1>${t('ready')}</h1><p class="hint" style="margin-top:8px">${t('readyHint')}</p></div><div class="sortlist" id="readylist">` +
      W.ex.map((e, i) => `<div class="srow"><span class="idx num">${String(i+1).padStart(2,'0')}</span>${ico(e.k)}<div class="exname">${esc(exName(e.k))}<small>${t('sets', e.target)} · ${t('lastShort', wLabel(e.k, e.w), e.r)}</small></div><span class="grip" data-grip aria-label="ziehen">${GRIP}</span></div>`).join('') + '</div>';
    setBar(`<button class="mainbtn" id="startbtn">${t('start')}</button>`);
  } else if (W.mode === 'warmup' || W.mode === 'cooldown') {
    const cool = W.mode === 'cooldown';
    h = `<div class="pill">${t(W.mode)}</div><div class="animwrap">${animSVG(S.anim, cool)}</div><div class="bigtime num" id="phasetime">00:00</div>`;
    setBar(cool ? `<button class="mainbtn" id="finishbtn">${t('finish')}</button>` : `<button class="mainbtn" id="warmdone">${t('warmDone')}</button>`);
  } else if (W.mode === 'train') {
    h = `<div class="sortlist" id="blocks">` + W.ex.map((e, i) => blockHTML(e, i)).join('') + `</div><button class="ghostbtn" id="endbtn2" style="border-color:var(--line)">${t('endAbort')}</button>`;
    const e = curEx(), n = e.sets.length;
    let main;
    if (W.phase === 'set') main = `<button class="mainbtn" id="mainact" data-a="done">${n + 1 >= e.target && !allDoneAfter() ? t('setDoneNext') : t('setDone')}</button>`;
    else if (n < e.target) main = `<button class="mainbtn" id="mainact" data-a="start">${t('startSet', n+1)}</button>`;
    else if (!allDone()) main = `<button class="mainbtn" id="mainact" data-a="next">${t('nextEx')}</button>`;
    else main = `<button class="mainbtn" id="mainact" data-a="cool">${t('toCooldown')}</button><button class="textbtn" id="nocd">${t('finishNoCd')}</button>`;
    setBar(main);
  } else if (W.mode === 'review') {
    h = reviewHTML(); setBar(`<button class="mainbtn" id="donebtn">${t('done')}</button>`);
  }
  $('wbody').innerHTML = `<div class="inner">${h}</div>`;
  bindW(); tick();
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
      if (W.edit && W.edit[0] === i && W.edit[1] === j) h += `<div class="set active"><div class="activehead"><span class="lbl">${t('setLabel', j+1)}</span><button class="reset" data-saveedit="1">${t('ok')}</button></div>${inputsHTML('ed', s.w, s.r, e.k)}</div>`;
      else h += `<button class="set" data-edit="${i}:${j}"><span class="idx num">${j+1}</span><span class="sv num">${esc(wLabel(e.k, s.w))} × ${s.r}</span><span class="st num">${mmss(s.d || 0)}</span><span>✓</span></button>`;
    });
    if (isCur && n < e.target) h += `<div class="set active"><div class="activehead"><span class="lbl">${t('setLabel', n+1)}</span>${W.phase === 'set' ? `<button class="reset" id="resetbtn" aria-label="Reset">↺ <span class="num" id="settime">00:00</span></button>` : ''}</div>${inputsHTML('cu', e.w, e.r, e.k)}</div>`;
    for (let j = n + (isCur ? 1 : 0); j < e.target; j++) h += `<button class="set planned" data-goto="${i}"><span class="idx num">${j+1}</span><span class="sv num">${esc(wLabel(e.k, e.w))} × ${e.r}</span><span></span><span></span></button>`;
    h += `<button class="addset" data-addset="${i}">${t('addSet')}</button></div>`;
  }
  return h + `</div>`;
}

function bindW() {
  const q = s => $('wsheet').querySelectorAll(s);
  $('minbtn') && ($('minbtn').onclick = minimize);
  $('endbtn') && ($('endbtn').onclick = endDialog);
  $('endbtn2') && ($('endbtn2').onclick = endDialog);
  $('readylist') && sortable($('readylist'), '.srow', (f, to) => { moveItem(W.ex, f, to); renderW(); });
  $('blocks') && sortable($('blocks'), '.block', (f, to) => { const c = W.ex[W.cur]; moveItem(W.ex, f, to); W.cur = W.ex.indexOf(c); W.open = {}; renderW(); });
  q('[data-tog]').forEach(b => b.onclick = () => { const i = +b.dataset.tog; if (i === W.cur) W.curClosed = !W.curClosed; else W.open[i] = !W.open[i]; renderW(); });
  q('[data-goto]').forEach(b => b.onclick = () => { const i = +b.dataset.goto; if (i === W.cur) return; readInputs(); W.cur = i; W.open = {}; W.curClosed = false; W.edit = null; if (W.phase === 'set') { W.phase = 'rest'; W.phaseStart = Date.now(); } renderW(); });
  q('[data-addset]').forEach(b => b.onclick = () => { readInputs(); W.ex[+b.dataset.addset].target++; renderW(); });
  q('[data-edit]').forEach(b => b.onclick = () => { readInputs(); W.edit = b.dataset.edit.split(':').map(Number); renderW(); });
  q('[data-saveedit]').forEach(b => b.onclick = () => { readInputs(); W.edit = null; renderW(); });
  $('resetbtn') && ($('resetbtn').onclick = () => dialog(t('resetTitle'), t('resetText'), [[t('resetNo'), 'mainbtn', () => {}], [t('resetYes'), 'ghostbtn', () => { W.restCarry = (W.restCarry || 0) + (Date.now() - W.phaseStart); W.phaseStart = Date.now(); renderW(); }]]));
  q('[data-st]').forEach(b => b.onclick = () => {
    const [id, d] = b.dataset.st.split(':'); const inp = $(id); const isKg = id.endsWith('kg');
    let v = (parseNum(inp.value) ?? 0) + parseFloat(d); if (!isKg) v = Math.max(1, Math.round(v));
    const k = id.startsWith('ed') ? W.ex[W.edit[0]].k : curEx().k; if (isKg && !isBW(k)) v = Math.max(0, v);
    inp.value = isKg ? fmtW(v) : v; readInputs();
  });
  q('.ctl input').forEach(inp => inp.onchange = () => readInputs());
  $('startbtn') && ($('startbtn').onclick = () => { W.start = Date.now(); W.mode = 'warmup'; W.phaseStart = Date.now(); renderW(); });
  $('warmdone') && ($('warmdone').onclick = () => { W.mode = 'train'; W.phase = 'rest'; W.phaseStart = Date.now(); W.rise = true; renderW(); });
  $('finishbtn') && ($('finishbtn').onclick = toReview);
  $('nocd') && ($('nocd').onclick = toReview);
  $('donebtn') && ($('donebtn').onclick = saveWorkout);
  q('[data-rvtog]').forEach(b => b.onclick = () => { W.rvOpen = !W.rvOpen; renderW(); });
  $('mainact') && ($('mainact').onclick = () => {
    readInputs(); const e = curEx(), a = $('mainact').dataset.a;
    if (a === 'start') { W.phase = 'set'; W.phaseStart = Date.now(); }
    else if (a === 'done') { e.sets.push({ w:e.w, r:e.r, d:Math.round((Date.now() - W.phaseStart) / 1000) }); W.phase = 'rest'; W.phaseStart = Date.now(); if (e.sets.length >= e.target && !allDone()) { W.cur = nextOpen(); W.open = {}; W.curClosed = false; } }
    else if (a === 'next') { W.cur = nextOpen(); W.open = {}; W.curClosed = false; }
    else if (a === 'cool') { W.mode = 'cooldown'; W.phaseStart = Date.now(); }
    renderW();
  });
}
function toReview() { W.mode = 'review'; W.end = Date.now(); W.slogan = t('slogans')[Math.floor(Math.random() * t('slogans').length)]; renderW(); $('wbody').scrollTop = 0; }
function readInputs() {
  const rd = (p, o) => { const kg = $(p+'kg'), rp = $(p+'reps'); if (!kg || !o) return; const w = parseNum(kg.value), r = parseNum(rp.value); if (w !== null) o.w = Math.round(w * 100) / 100; if (r !== null) o.r = Math.max(1, Math.round(r)); };
  if (W.edit) rd('ed', W.ex[W.edit[0]].sets[W.edit[1]]);
  rd('cu', curEx());
}
function endDialog() {
  dialog(t('dlgTitle'), t('dlgText'), [
    [t('dlgCont'), 'mainbtn', () => {}],
    [t('dlgSave'), 'ghostbtn', toReview],
    [t('dlgDiscard'), 'textbtn', () => dialog(t('dlgDelTitle'), t('dlgDelText'), [[t('dlgDelNo'), 'mainbtn', () => {}], [t('dlgDelYes'), 'ghostbtn', () => { closeW(); toast(t('discarded')); }]])]
  ]);
}

function exStatsOf(e) {
  const prev = sessionsFor(e.k)[0], ew = s => Math.max(0, effW(e.k, s.w));
  const per = e.sets.map(s => e1rm(ew(s), s.r)), pPer = prev ? prev.sets.map(s => e1rm(ew(s), s.r)) : [];
  const top = e.sets.reduce((b, s) => e1rm(ew(s), s.r) > e1rm(ew(b), b.r) ? s : b);
  return { e, per, pPer, top, best: Math.max(...per), v: e.sets.reduce((a, s) => a + ew(s) * s.r, 0), pBest: prev ? prev.best : 0, pVol: prev ? prev.vol : 0 };
}
function setChart(x) {
  const n = Math.max(x.per.length, x.pPer.length), all = x.per.concat(x.pPer);
  let lo = Math.min(...all), hi = Math.max(...all); const pad = (hi - lo) * .3 || 4; lo -= pad; hi += pad;
  const W0 = 340, H0 = 112, L = 34, R = 12, Tp = 10, B = 20;
  const X = i => L + (n === 1 ? (W0 - L - R) / 2 : i * (W0 - L - R) / (n - 1)), Y = v => Tp + (hi - v) * (H0 - Tp - B) / (hi - lo);
  let s = [lo + pad, hi - pad].map(v => `<line x1="${L}" x2="${W0-R}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="${L-6}" y="${Y(v)+4}" text-anchor="end" font-size="10" font-family="var(--mono)" fill="var(--muted)">${fmt(Math.round(v))}</text>`).join('');
  if (x.pPer.length) s += `<polyline points="${x.pPer.map((v, i) => `${X(i)},${Y(v)}`).join(' ')}" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"/>` + x.pPer.map((v, i) => `<circle cx="${X(i)}" cy="${Y(v)}" r="3" fill="var(--bg)" stroke="var(--muted)" stroke-width="1.5"/>`).join('');
  s += `<polyline points="${x.per.map((v, i) => `${X(i)},${Y(v)}`).join(' ')}" fill="none" stroke="var(--fg)" stroke-width="2.5"/>` + x.per.map((v, i) => `<circle cx="${X(i)}" cy="${Y(v)}" r="4" fill="var(--fg)"/>`).join('');
  for (let i = 0; i < n; i++) s += `<text x="${X(i)}" y="${H0-5}" text-anchor="middle" font-size="10" font-family="var(--mono)" fill="var(--muted)">${i+1}</text>`;
  return `<div class="eyebrow">${t('perSet')} · kg</div><svg class="chart" viewBox="0 0 ${W0} ${H0}" role="img" aria-label="${t('perSet')}">${s}</svg><div class="legend"><span><i></i>${t('today2')}</span>${x.pPer.length ? `<span><i class="dash" style="border-color:var(--muted)"></i>${t('lastTime')}</span>` : ''}</div>`;
}
function exBlock(x, first) {
  const dv = x.pVol ? Math.round((x.v / x.pVol - 1) * 100) : null, db = x.pBest ? Math.round((x.best / x.pBest - 1) * 100) : null;
  const pct = d => d === null ? '' : ` · ${d >= 0 ? '+' : '−'}${Math.abs(d)} %`;
  return `<div class="rvblock" ${first ? 'style="border-top:0;padding-top:0"' : ''}><h3>${ico(x.e.k)}${esc(exName(x.e.k))}</h3>${setChart(x)}
    <div class="tiles3 num"><div><span>${t('volume')}${pct(dv)}</span><b>${fmt(Math.round(x.v))} kg</b></div><div><span>${t('bestSet')}</span><b>${esc(wLabel(x.e.k, x.top.w))} × ${x.top.r}</b></div><div><span>1RM${pct(db)}</span><b>${fmt(Math.round(x.best))} kg</b></div></div></div>`;
}
function reviewHTML() {
  const sets = W.ex.flatMap(e => e.sets.map(s => ({ ...s, k:e.k, ew: effW(e.k, s.w) })));
  const vol = sets.reduce((a, s) => a + Math.max(0, s.ew) * s.r, 0);
  const dur = Math.max(1, Math.round(((W.end || Date.now()) - (W.start || Date.now())) / 60000));
  const pts = sets.length ? ptsOf(vol) : 0;
  let h = `<div style="display:flex;flex-direction:column;gap:14px"><div class="eyebrow">${esc(W.name)}</div><p class="slogan">${esc(W.slogan)}</p><div class="ptsbig"><b class="num">+${pts}</b><span>${t('ptsEarned')}</span></div></div>
    <div class="trio num"><div class="dec"><span>${t('moved')}</span><b>${volTxt(vol)}</b></div><div class="dec"><span>${t('duration')}</span><b>${t('min', dur)}</b></div><div class="dec"><span>${t('setsWord')}</span><b>${sets.length}</b></div></div>`;
  if (!sets.length) return h + `<p class="hint">${t('emptyReview')}</p>`;
  const xs = W.ex.filter(e => e.sets.length).map(exStatsOf);
  const hi = xs.filter(x => x.best > 0).sort((a, b) => (b.best / (b.pBest || b.best)) - (a.best / (a.pBest || a.best)))[0];
  if (hi) h += `<div class="sect"><div class="row"><h2>${t('highlightEx')}</h2>${hi.best > hi.pBest ? `<span class="pill" style="padding:2px 8px;font-size:10px">${t('newPR')}</span>` : ''}</div>${exBlock(hi, true)}</div>`;
  const rest = xs.filter(x => x !== hi);
  if (rest.length) { h += `<button class="morebtn" data-rvtog="1"><span class="mdec dec">${W.rvOpen ? '−' : '+'}</span>${t('moreEx')} (${rest.length})</button>`; if (W.rvOpen) h += `<div>${rest.map(x => exBlock(x)).join('')}</div>`; }
  return h;
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
    const label = W.mode === 'ready' ? t('ready') : W.mode === 'train' ? t(W.phase === 'set' ? 'set' : 'rest') : t(W.mode);
    $('m-phase').textContent = label + (W.start ? ' · ' + mmss(all) : '');
    $('m-name').textContent = W.mode === 'train' ? exName(curEx().k) : W.name;
    $('m-time').textContent = W.mode === 'ready' ? '' : mmss(ph);
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
function openCreate(w) { O = { mode:'create', editId: w ? w.id : null, name: w ? w.name : '', q:'', picked: w ? w.ex.filter(([k]) => EX[k]).map(e => [...e]) : [], custom:null }; renderO(); openO(); $('obody').scrollTop = 0; }
function openPicker() { O = { mode:'picker', q:'', filter:false, onlyFav:false, groups:new Set(Object.keys(T.de.groups)) }; renderO(); openO(); $('obody').scrollTop = 0; }
const exMatches = (k, q) => !q || (exName(k) + ' ' + (EX[k].en || '') + ' ' + t('groups')[EX[k].g] + ' ' + t('eqs')[EX[k].eq]).toLowerCase().includes(q.toLowerCase());
function toggleFav(k) { const i = S.fav.indexOf(k); if (i >= 0) S.fav.splice(i, 1); else if (S.fav.length >= 3) { toast(t('maxFav')); return false; } else S.fav.push(k); return true; }
function renderO() {
  const b = $('obody');
  if (O.mode === 'create') {
    const chosen = O.picked.map(([k, n], i) => `<div class="srow"><span class="idx num">${String(i+1).padStart(2,'0')}</span>${ico(k)}<div class="exname" style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span style="min-width:0">${esc(exName(k))}</span><span class="mini-step"><button data-ps="${i}:-1" aria-label="minus">−</button><span class="num">${t('sets', n)}</span><button data-ps="${i}:1" aria-label="plus">+</button></span></div><span class="grip" data-grip aria-label="ziehen">${GRIP}</span></div>`).join('');
    const custom = O.custom ? `<div class="custom"><input id="c-name" enterkeyhint="done" placeholder="${t('customName')}" value="${esc(O.custom.name)}">
        <div><div class="eyebrow" style="margin-bottom:8px">${t('muscle')}</div><div class="opts">${Object.entries(t('groups')).map(([g, l]) => `<button class="${O.custom.g===g?'on':''}" data-cg="${g}">${l}</button>`).join('')}</div></div>
        <div><div class="eyebrow" style="margin-bottom:8px">${t('equipment')}</div><div class="opts">${Object.entries(t('eqs')).map(([g, l]) => `<button class="${O.custom.eq===g?'on':''}" data-ce="${g}">${l}</button>`).join('')}</div></div>
        <div class="row"><button class="textbtn" id="c-cancel">✕</button><button class="ghostbtn" id="c-add" style="width:auto;padding:12px 18px">${t('add')}</button></div></div>` : '';
    b.innerHTML = `<div class="inner">
      <div class="row"><button class="iconbtn" id="o-back" aria-label="Zurück">←</button><span class="eyebrow">${O.editId ? t('editWorkout') : t('newWorkout')}</span><span style="width:44px"></span></div>
      <input class="field" id="o-name" enterkeyhint="done" placeholder="${t('namePh')}" value="${esc(O.name)}">
      ${O.picked.length ? `<div><div class="eyebrow" style="margin-bottom:4px">${t('chosen')}</div><div class="sortlist" id="chosen">${chosen}</div></div>` : ''}
      <div style="display:flex;flex-direction:column;gap:10px"><div class="searchrow"><input class="search" id="o-q" enterkeyhint="search" placeholder="${t('searchPh')}" value="${esc(O.q)}"></div>
        ${O.custom ? custom : `<button class="textbtn" id="c-open" style="align-self:flex-start;color:var(--fg)">${t('customAdd')}</button>`}</div>
      <div id="o-list"></div>${O.editId ? `<button class="ghostbtn" id="o-del" style="border-color:var(--line)">${t('delWorkout')}</button>` : ''}</div>`;
    renderPickList();
    $('o-del') && ($('o-del').onclick = () => dialog(t('delWTitle'), t('delWText'), [[t('keep'), 'mainbtn', () => {}], [t('delYes'), 'ghostbtn', () => { workouts = workouts.filter(w => w.id !== O.editId); save(); closeO(); renderSelect(); }]]));
    setOBar(`<button class="mainbtn" id="o-save">${O.picked.length ? t('saveN', O.picked.length) : t('save')}</button>`);
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
    $('o-save').onclick = () => { const n = O.name.trim(); if (!n || !O.picked.length) { toast(t('needName')); return; } const ex = O.picked.map(p => [...p]); if (O.editId) { const w = wById(O.editId); w.name = n; w.ex = ex; } else workouts.unshift({ id:'w' + Date.now(), name:n, ex }); const wasEdit = !!O.editId; save(); closeO(); renderSelect(); toast(wasEdit ? '✓' : t('saved')); };
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
  if (O.mode === 'create') {
    Object.keys(EX).filter(k => exMatches(k, O.q)).forEach(k => {
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
let calOpen = false, calMonth = 0, selDay = null, dayOpen = false, info = {};
function forecast(d) {
  const ys = d.slice(-8), n = ys.length, xs = ys.map((_, i) => Math.log(i + 1));
  const mx = xs.reduce((a, b) => a + b) / n, my = ys.reduce((a, b) => a + b) / n;
  const b = xs.reduce((a, x, i) => a + (x - mx) * (ys[i] - my), 0) / xs.reduce((a, x) => a + (x - mx) ** 2, 0); const a = my - b * mx;
  const sd = Math.sqrt(ys.reduce((s, y, i) => s + (y - (a + b * xs[i])) ** 2, 0) / n) || 1, shift = ys[n-1] - (a + b * Math.log(n));
  return Array.from({length:6}, (_, h) => ({ y: a + b * Math.log(n + h + 1) + shift, band: sd * (1 + .35 * (h + 1)) }));
}
const histOn = ago => HISTORY.find(h => h.ago === ago);
function renderProgress() {
  const last30 = HISTORY.filter(h => h.ago < 30);
  const vol30 = last30.reduce((a, h) => a + sessVol(h), 0), min30 = last30.reduce((a, h) => a + h.dur, 0);
  $('v-progress').innerHTML = `<div class="inner">
    <h1>${t('progress')}</h1>
    <div class="sect" style="border-top:0;padding-top:0">
      <div class="row"><h2>${t('history')}</h2><button class="textbtn" id="calbtn" style="color:var(--fg)">${calOpen ? t('less') + ' ▴' : t('calendar') + ' ▾'}</button></div>
      ${calOpen ? calHTML() : `<div class="strip-wrap"><div class="strip" id="strip">${Array.from({length:90}, (_, i) => dayTile(89 - i)).join('')}</div><button class="today-btn" id="todaybtn" hidden>${t('today')}</button></div>`}
      <div id="daycard">${dayCard()}</div>
    </div>
    <div class="sect"><h2>${t('last30')}</h2>
      <div class="statgrid num"><div><b>${last30.length}</b><span>${t('wCount')}</span></div><div><b>${volTxt(vol30)}</b><span>${t('movedW')}</span></div><div><b>${Math.floor(min30/60)} h ${min30%60} min</b><span>${t('trainTime')}</span></div><div><b>${prCount(30)}</b><span>${t('prs')}</span></div></div></div>
    <div class="sect"><h2>${t('forEx')}</h2>
      <button class="exsel" id="exsel"><b>${esc(exName(S.chartKey))}</b><span class="drop">▼</span></button>
      ${S.fav.length ? `<div class="favs">${S.fav.map(k => `<button class="fav ${k===S.chartKey?'on':''}" data-ck="${k}">★ ${esc(exName(k))}</button>`).join('')}</div>` : ''}
      <div id="charts"></div>
    </div>
    <div class="sect"><h2>${t('pbs')}</h2><div>${pbHTML() || `<p class="hint">${t('noPB')}</p>`}</div></div>
  </div>`;
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
function bindDays() {
  document.querySelectorAll('[data-day]').forEach(b => b.onclick = () => { const d = +b.dataset.day; selDay = selDay === d ? null : d; dayOpen = false; document.querySelectorAll('[data-day]').forEach(x => x.classList.toggle('sel', +x.dataset.day === selDay)); $('daycard').innerHTML = dayCard(); bindDayCard(); });
  bindDayCard();
}
function bindDayCard() { $('daymore') && ($('daymore').onclick = () => { dayOpen = !dayOpen; $('daycard').innerHTML = dayCard(); bindDayCard(); }); }
function dayTile(ago) { const d = dayDate(ago), h = histOn(ago); return `<button class="day ${h?'on':''} ${ago===0?'today':''} ${selDay===ago?'sel':''}" data-day="${ago}"><small>${t('wd')[(d.getDay()+6)%7]}</small><b class="num">${d.getDate()}</b></button>`; }
function dayCard() {
  if (selDay === null) return '';
  const d = dayDate(selDay), hs = HISTORY.filter(x => x.ago === selDay).sort((a, b) => a.date - b.date), ds = d.toLocaleDateString(loc(), { weekday:'long', day:'2-digit', month:'2-digit' });
  if (!hs.length) return `<div class="daycard"><b>${esc(ds)}</b><span class="hint">${t('noWorkout')}</span></div>`;
  return hs.map((h, n) => { const nsets = h.ex.reduce((a, e) => a + e.sets.length, 0);
    return `<div class="daycard" ${n ? 'style="margin-top:18px"' : ''}><div><div class="eyebrow">${esc(ds)}</div><b style="font-family:var(--display);font-stretch:110%;font-weight:900;font-size:22px;text-transform:uppercase">${esc(h.wname || (wById(h.wid) || {}).name || '')}</b></div>
    <div class="trio num"><div class="dec"><span>${t('moved')}</span><b>${volTxt(sessVol(h))}</b></div><div class="dec"><span>${t('duration')}</span><b>${t('min', h.dur)}</b></div><div class="dec"><span>${t('setsWord')}</span><b>${nsets}</b></div></div>
    ${n === 0 ? `<button class="morebtn" id="daymore"><span class="mdec dec">${dayOpen ? '−' : '+'}</span>${dayOpen ? t('hide') : t('details')}</button>` : ''}
    ${dayOpen ? `<div>${h.ex.filter(e => EX[e.k]).map(e => `<div class="rvblock"><h3>${ico(e.k)}${esc(exName(e.k))}</h3><div class="cells num">${e.sets.map(s => `<span>${esc(wLabel(e.k, s.w))} × ${s.r}</span>`).join('')}</div></div>`).join('')}</div>` : ''}</div>`; }).join('');
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
    { id:'vol', title:t('chVolume'), info:'infoVol', data:ss.map(s => s.vol) },
    { id:'wgt', title:t('chWeight'), info:'infoWeight', data:ss.map(s => effW(k, s.top.w)) }
  ];
  wrap.innerHTML = defs.map(d => `<div class="chartbox"><div class="charthead"><h2>${d.title}<button class="info" data-info="${d.info}" aria-label="Info">i</button></h2><span class="val num" id="val-${d.id}"></span></div><svg class="chart" id="ch-${d.id}" role="img" aria-label="${d.title}"></svg>${d.fc ? `<div class="legend"><span><i></i>${t('trend')}</span><span><i class="dash"></i>${t('forecast')}</span><button class="info" data-info="infoFc" aria-label="Info" style="margin-left:-8px">i</button></div>` : ''}</div>`).join('');
  wrap.querySelectorAll('[data-info]').forEach(b => b.onclick = () => showInfo(t(b.dataset.info)));
  defs.forEach(d => drawChart(d, ss));
}
function drawChart(def, ss) {
  const d = def.data, f = def.fc && d.length >= 4 ? forecast(d) : [], all = d.length + f.length, li = d.length - 1;
  const col = S.trendColor ? (d[li] >= d[0] ? 'var(--up)' : 'var(--down)') : 'var(--fg)';
  const W0 = 340, H0 = def.fc ? 200 : 150, L = 40, R = 12, Tp = 12, B = 22;
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
const PULSE = { breathe:'p-breathe 2.6s', beat:'p-beat 1.6s', wobble:'p-wobble 2.4s', off:'none' };
function renderSettings() {
  const initials = (S.name.trim().split(/\s+/).filter(Boolean).map(w => w[0]).join('').slice(0, 2) || '?').toUpperCase();
  const tog = (id, on, dis) => `<button class="toggle" id="${id}" role="switch" aria-checked="${on}" ${dis ? 'disabled' : ''}><i></i></button>`;
  $('v-settings').innerHTML = `<div class="inner"><h1>${t('settings')}</h1>
    <div class="sect" style="border-top:0;padding-top:0"><h2>${t('profile')}</h2>
      <div class="profile"><span class="avatar dec">${esc(initials)}</span><input class="namein" id="pname" enterkeyhint="done" placeholder="${t('profName')}" value="${esc(S.name)}"></div>
      <div>
        <div class="setrow"><div><b>${t('bodyweight')}</b><p>${t('bwHint')}</p></div><label class="kgin"><input id="bw" inputmode="decimal" enterkeyhint="done" class="num" placeholder="—" value="${S.bodyweight ? fmtW(S.bodyweight) : ''}"><span>kg</span></label></div>
        <div class="setrow"><div><b>${t('bwPoints')}</b><button class="info" id="bwi" aria-label="Info">i</button><p>${S.bodyweight ? t('bwPointsHint') : t('bwPointsOff')}</p></div>${tog('bwp', S.bwPoints, !S.bodyweight)}</div>
        <div class="setrow" style="opacity:.45"><div><b>${t('account')}</b><p>${t('accountHint')}</p></div><span>→</span></div>
      </div></div>
    <div class="sect"><h2>${t('display')}</h2><div>
      <div class="setrow"><div><b>${t('language')}</b><p>${t('langHint')}</p></div><div class="seg"><button id="l-de" class="${S.lang==='de'?'on':''}">DE</button><button id="l-en" class="${S.lang==='en'?'on':''}">EN</button></div></div>
      <div class="setrow"><div><b>${t('invert')}</b><p>${t('invertHint')}</p></div>${tog('inv', S.inverted)}</div>
      <div class="setrow"><div><b>${t('trendColor')}</b><p>${t('trendColorHint')}</p></div>${tog('trc', S.trendColor)}</div>
    </div></div>
    <div class="sect"><h2>${t('animations')}</h2>
      <div><b>${t('pulseTitle')}</b><p class="hint" style="margin-top:4px">${t('pulseHint')}</p></div>
      <div class="anims">${Object.keys(T.de.pulses).map(k => `<button class="animopt ${S.pulse===k?'on':''}" data-pulse="${k}"><span class="pvdec dec" style="animation:${PULSE[k]} ease-in-out infinite"></span><span>${t('pulses')[k]}</span></button>`).join('')}</div>
      <div style="margin-top:8px"><b>${t('loadTitle')}</b><p class="hint" style="margin-top:4px">${t('loadHint')}</p></div>
      <div class="anims">${Object.keys(T.de.anims).map(k => `<button class="animopt ${S.anim===k?'on':''}" data-anim="${k}">${animSVG(k, false)}<span>${t('anims')[k]}</span></button>`).join('')}</div>
    </div>
    <div class="sect"><h2>${t('data')}</h2><p class="hint">${t('localHint')}</p>
      <button class="ghostbtn" id="resetall" style="border-color:var(--line)">${t('resetAll')}</button>
      <p class="hint">${t('version')} ${APP_VERSION}</p></div>
  </div>`;
  save();
  $('resetall').onclick = () => dialog(t('resetAllTitle'), t('resetAllText'), [[t('resetAllNo'), 'mainbtn', () => {}], [t('resetAllYes'), 'ghostbtn', () => dialog(t('resetAllTitle'), '', [[t('resetAllNo'), 'mainbtn', () => {}], [t('resetAllYes'), 'ghostbtn', () => { try { localStorage.removeItem(STORE_KEY); } catch (e) {} location.reload(); }]])]]);
  $('pname').onchange = e => { S.name = e.target.value; renderSettings(); };
  $('l-de').onclick = () => setLang('de'); $('l-en').onclick = () => setLang('en');
  $('inv').onclick = () => { S.inverted = !S.inverted; applyClasses(); renderSettings(); };
  $('trc').onclick = () => { S.trendColor = !S.trendColor; renderSettings(); };
  $('bwi').onclick = () => showInfo(t('bwInfo'));
  $('bw').onchange = e => { const v = parseNum(e.target.value); S.bodyweight = v && v > 0 ? v : null; if (!S.bodyweight) S.bwPoints = false; renderSettings(); };
  $('bwp').onclick = () => { S.bwPoints = !S.bwPoints; renderSettings(); };
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
if (STORED && STORED.lastFinished) { const h = HISTORY.find(x => x.id === STORED.lastFinished.histId); if (h) lastFinished = { W: deserW(STORED.lastFinished.w), hist: h, at: STORED.lastFinished.at }; }
show('start');
if (STORED && STORED.active) { W = deserW(STORED.active); renderW(); openW(); }
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {});
