/* ═══════════════════════════════════════════
   AETERNACO · SCRIPT
   All names, contacts and centers are entirely fictional.
═══════════════════════════════════════════ */

// ── Translations ──────────────────────────────────────────
const translations = {
  en: {
    brandSub: "Private longevity",
    navDestinations: "Destinations",
    navTreatments: "Treatments",
    navPhilosophy: "Philosophy",
    navMembership: "Membership",
    crmButton: "Partner access",
    reserveNav: "Reserve a stay",
    heroEyebrow: "Curated longevity · 14 destinations worldwide",
    heroTitle: "Where medicine meets the art of living longer.",
    heroText: "AeternaCo is a private concierge network for elite longevity centers — from the Swiss Alps to the Cuban coast, the Yucatán jungle, and Cape Town's vineyards. All names are fictional, crafted to demonstrate how AeternaCo presents exceptional centers with the discretion they deserve.",
    exploreButton: "Explore destinations",
    reserveButton: "Reserve a stay",
    statDestinations: "Elite destinations",
    statContinents: "Continents",
    statSatisfaction: "Guest satisfaction",
    searchKicker: "Concierge search",
    regionLabel: "Destination",
    allRegions: "All destinations",
    europe: "Europe",
    americas: "Americas",
    asiaPacific: "Asia Pacific",
    mea: "Africa & Middle East",
    programLabel: "Treatment focus",
    allPrograms: "All programs",
    diagnostics: "Precision diagnostics",
    regeneration: "Regeneration",
    metabolic: "Metabolic health",
    recovery: "Recovery & longevity",
    stayLabel: "Duration",
    anyStay: "Any duration",
    budgetLabel: "Investment",
    anyBudget: "Any range",
    searchButton: "Find my destination",
    marketEyebrow: "Global portfolio",
    marketTitle: "The world's finest longevity centers",
    allSpecialties: "All",
    matchesLabel: "destinations",
    treatmentsEyebrow: "Signature programs",
    treatmentsTitle: "What each stay can include",
    treatmentsSubtitle: "Every AeternaCo destination is curated around a core therapeutic philosophy. These are the hallmark disciplines you will find across our network.",
    t1Title: "Precision Diagnostics",
    t1Text: "Full-body biomarker panels, genomic screening, advanced imaging and physician-led interpretation delivered within 72 hours.",
    t2Title: "Cellular Regeneration",
    t2Text: "NAD+ protocols, peptide therapies, stem-cell adjacent interventions and circadian reset programs guided by regenerative medicine specialists.",
    t3Title: "Metabolic Intelligence",
    t3Text: "CGM-guided nutrition, insulin sensitivity protocols, body composition analysis and longevity-cuisine meal planning with private chefs.",
    t4Title: "Sleep Architecture",
    t4Text: "Polysomnography, chronotherapy, sleep-environment design and pharmacological optimization for restorative deep sleep recovery.",
    t5Title: "Performance Optimization",
    t5Text: "VO₂ max training, HRV monitoring, strength longevity coaching and altitude protocols for peak physical performance.",
    t6Title: "Restorative Recovery",
    t6Text: "Hyperbaric oxygen therapy, cryotherapy, infrared sauna protocols, IV nutritional support and structured rest to reverse biological fatigue.",
    philEyebrow: "Our curation philosophy",
    philTitle: "We select for depth, not prestige.",
    philText1: "AeternaCo reviews centers across five dimensions: clinical governance, therapeutic breadth, concierge excellence, setting quality and independent guest outcomes. Only those that perform at the highest tier across all five are offered to our members.",
    philText2: "Our medical advisory board — composed of leading voices in longevity science, functional medicine and integrative psychiatry — provides independent oversight. No center can pay to be listed. Every inclusion is earned.",
    phil1: "Independent medical board",
    phil2: "No paid placements",
    phil3: "Annual re-certification",
    phil4: "Full discretion guaranteed",
    philQuote: '"Longevity is not a treatment. It is a discipline, an environment, and a way of attention."',
    memberEyebrow: "Private membership",
    memberTitle: "Discretion, priority access and a personal concierge.",
    memberText: "AeternaCo membership offers priority reservation windows, a dedicated longevity concierge, access to unpublished center slots and a private health record that travels with you across all network destinations.",
    tier1Name: "Luminary",
    tier1a: "Priority booking windows",
    tier1b: "Dedicated concierge",
    tier1c: "Annual health summary",
    tier1d: "3 destination credits",
    tier2Name: "Sovereign",
    tierFeaturedBadge: "Most selected",
    tier2a: "All Luminary benefits",
    tier2b: "Portable health record",
    tier2c: "Physician tele-access 24/7",
    tier2d: "8 destination credits",
    tier2e: "Family inclusion option",
    tier3Name: "Foundational",
    tierPrivate: "Private pricing",
    tier3a: "All Sovereign benefits",
    tier3b: "Family office coordination",
    tier3c: "Bespoke medical travel",
    tier3d: "Unlimited credits",
    tier3e: "Board-level reporting",
    tierApply: "Apply for access",
    tierEnquire: "Private enquiry",
    providerEyebrow: "For operators",
    providerTitle: "List your center in the AeternaCo network",
    providerText: "We work with a select number of longevity destinations each year. If your center meets our clinical and hospitality standards, we welcome a private conversation.",
    providerButton: "Begin application",
    footerSub: "All center names and contacts are entirely fictional, created for demonstration purposes only.",
    crmBrandSub: "Partner console",
    crmOverview: "Overview",
    crmLeads: "Enquiries",
    crmPrograms: "Programs",
    crmProfile: "Listing profile",
    returnMarket: "Back to marketplace",
    crmEyebrow: "AeternaCo Partner CRM",
    crmTitle: "Manage your center's presence, enquiries and programs.",
    newLead: "New enquiry",
    sync: "Sync",
    metricRevenue: "Qualified pipeline",
    metricRevenueSub: "projected annual value",
    metricLeads: "Open enquiries",
    metricLeadsSub: "8 concierge-ready",
    metricConversion: "Guest satisfaction",
    metricConversionSub: "post-stay rating",
    metricLanguages: "Languages served",
    metricLanguagesSub: "EN, DE, FR, ES, AR +more",
    leadEyebrow: "Concierge pipeline",
    leadTitle: "High-intent enquiries",
    programEyebrow: "Program inventory",
    programTitle: "Signature pathways",
    now: "Now",
    quarter: "Quarter",
    year: "Year",
    profileEyebrow: "Marketplace profile",
    profileText: "Diagnostics-first flagship with private physician review, recovery suites and family-office concierge.",
    profileRate: "Program from",
    profileMessage: "Commercial message",
    profileAvail: "Next availability",
    saveProfile: "Save profile",
    contactLine: "Concierge contact",
    requestIntro: "Request a stay",
    from: "From",
    perProgram: "per program",
    languages: "Languages",
    stay: "Duration",
    oversight: "Medical oversight",
    contact: "Concierge",
    reserveEyebrow: "AeternaCo · Private Reservation",
    reserveTitle: "Reserve your longevity stay",
    reserveSubtitle: "Our concierge team will contact you within 24 hours to confirm availability and customise your program.",
    step1: "Destination",
    step2: "Dates & program",
    step3: "Your details",
    chooseDestination: "Choose your destination",
    chooseDates: "Dates & program",
    arrivalLabel: "Preferred arrival",
    durationLabel: "Duration",
    guestsLabel: "Number of guests",
    focusLabel: "Primary focus",
    notesLabel: "Special considerations or health context",
    yourDetails: "Your details",
    nameLabel: "Full name",
    emailLabel: "Private email",
    phoneLabel: "Phone (with country code)",
    languageLabel: "Preferred language",
    memberLabel: "AeternaCo membership number (if any)",
    privacyNote: "All information is held in strict confidence. AeternaCo does not share guest data with any third party.",
    confirmTitle: "Reservation received",
    confirmText: "Your concierge will reach out within 24 hours to confirm availability and begin curating your stay. All details are held in the strictest confidence.",
    refLabel: "Reference",
    back: "Back",
    continueBtn: "Continue",
    membershipDialogText: "This is a demonstration form. In a real environment, our membership committee reviews each application within 5 business days.",
    toastSearch: "Selection refined — showing matching destinations.",
    toastProvider: "Application enquiry prepared: partners@aeternaco.example",
    toastIntro: "Stay request submitted. Your concierge will be in touch within 24 hours.",
    toastCrm: "Opened the AeternaCo partner console.",
    toastMarket: "Returned to the marketplace.",
    toastLead: "New enquiry added to the pipeline.",
    toastSync: "Console synchronised with marketplace.",
    toastMembership: "Application submitted — our committee will be in touch shortly.",
    noResultsTitle: "No destinations match those filters",
    noResultsText: "Try a different region or program to broaden the portfolio.",
  },
  de: {
    brandSub: "Private Langlebigkeit",
    navDestinations: "Destinationen",
    navTreatments: "Behandlungen",
    navPhilosophy: "Philosophie",
    navMembership: "Mitgliedschaft",
    crmButton: "Partner-Zugang",
    reserveNav: "Aufenthalt reservieren",
    heroEyebrow: "Kuratierte Langlebigkeit · 14 Destinationen weltweit",
    heroTitle: "Wo Medizin auf die Kunst des längeren Lebens trifft.",
    heroText: "AeternaCo ist ein privates Concierge-Netzwerk für Elite-Longevity-Zentren — von den Schweizer Alpen bis zur kubanischen Küste, dem Yucatán-Dschungel und den Weinbergen Kapstadts. Alle Namen sind fiktiv.",
    exploreButton: "Destinationen entdecken",
    reserveButton: "Aufenthalt reservieren",
    statDestinations: "Elite-Destinationen",
    statContinents: "Kontinente",
    statSatisfaction: "Gastzufriedenheit",
    searchKicker: "Concierge-Suche",
    regionLabel: "Destination",
    allRegions: "Alle Destinationen",
    europe: "Europa",
    americas: "Amerika",
    asiaPacific: "Asien-Pazifik",
    mea: "Afrika & Naher Osten",
    programLabel: "Behandlungsfokus",
    allPrograms: "Alle Programme",
    diagnostics: "Präzisionsdiagnostik",
    regeneration: "Regeneration",
    metabolic: "Metabolische Gesundheit",
    recovery: "Recovery & Langlebigkeit",
    stayLabel: "Dauer",
    anyStay: "Beliebige Dauer",
    budgetLabel: "Investment",
    anyBudget: "Beliebiger Bereich",
    searchButton: "Meine Destination finden",
    marketEyebrow: "Globales Portfolio",
    marketTitle: "Die besten Longevity-Zentren der Welt",
    allSpecialties: "Alle",
    matchesLabel: "Destinationen",
    t1Title: "Präzisionsdiagnostik",
    t1Text: "Vollständige Biomarker-Panels, Genomic-Screening, fortschrittliche Bildgebung und ärztlich geführte Interpretation innerhalb von 72 Stunden.",
    t2Title: "Zelluläre Regeneration",
    t2Text: "NAD+-Protokolle, Peptidtherapien und zirkadiane Reset-Programme unter Leitung von Spezialisten der regenerativen Medizin.",
    t3Title: "Metabolische Intelligenz",
    t3Text: "CGM-gestützte Ernährung, Insulinsensitivitätsprotokolle, Körperzusammensetzungsanalyse und Longevity-Küche mit Privatköchen.",
    t4Title: "Schlafarchitektur",
    t4Text: "Polysomnographie, Chronotherapie und Schlafumgebungsdesign für restorativen Tiefschlaf.",
    t5Title: "Performance-Optimierung",
    t5Text: "VO₂-max-Training, HRV-Monitoring und Höhenprotokolle für Spitzenleistung.",
    t6Title: "Regenerative Recovery",
    t6Text: "Hyperbare Sauerstofftherapie, Kryotherapie, Infrarotsauna und IV-Nährstoffunterstützung.",
    philEyebrow: "Unsere Kurationsphilosophie",
    philTitle: "Wir wählen nach Tiefe, nicht nach Prestige.",
    philText1: "AeternaCo bewertet Zentren in fünf Dimensionen: klinische Governance, therapeutische Breite, Concierge-Exzellenz, Umgebungsqualität und unabhängige Gastergebnisse.",
    philText2: "Unser medizinischer Beirat — führende Stimmen aus Longevity-Wissenschaft und Funktionsmedizin — bietet unabhängige Aufsicht. Kein Zentrum kann sich einkaufen.",
    phil1: "Unabhängiger Medizinbeirat",
    phil2: "Keine bezahlten Platzierungen",
    phil3: "Jährliche Re-Zertifizierung",
    phil4: "Vollständige Diskretion garantiert",
    philQuote: '"Langlebigkeit ist keine Behandlung. Es ist eine Disziplin, eine Umgebung und eine Art der Aufmerksamkeit."',
    memberEyebrow: "Private Mitgliedschaft",
    memberTitle: "Diskretion, vorrangiger Zugang und ein persönlicher Concierge.",
    memberText: "Die AeternaCo-Mitgliedschaft bietet bevorzugte Reservierungsfenster, einen dedizierten Longevity-Concierge und ein portables Gesundheitsarchiv.",
    tier1Name: "Luminary",
    tier1a: "Vorrangige Buchungsfenster",
    tier1b: "Dedizierter Concierge",
    tier1c: "Jährliche Gesundheitszusammenfassung",
    tier1d: "3 Destinationskredite",
    tier2Name: "Sovereign",
    tierFeaturedBadge: "Am häufigsten gewählt",
    tier2a: "Alle Luminary-Vorteile",
    tier2b: "Portables Gesundheitsarchiv",
    tier2c: "Arzt-Tele-Zugang 24/7",
    tier2d: "8 Destinationskredite",
    tier2e: "Familieneinbeziehungsoption",
    tier3Name: "Foundational",
    tierPrivate: "Private Preisgestaltung",
    tier3a: "Alle Sovereign-Vorteile",
    tier3b: "Family-Office-Koordination",
    tier3c: "Maßgeschneiderte Medizinreisen",
    tier3d: "Unbegrenzte Kredite",
    tier3e: "Reporting auf Vorstandsebene",
    tierApply: "Zugang beantragen",
    tierEnquire: "Private Anfrage",
    providerEyebrow: "Für Betreiber",
    providerTitle: "Ihr Zentrum im AeternaCo-Netzwerk listen",
    providerText: "Wir arbeiten jährlich mit einer ausgewählten Anzahl an Longevity-Destinationen. Wenn Ihr Zentrum unsere Standards erfüllt, freuen wir uns auf ein Gespräch.",
    providerButton: "Bewerbung starten",
    footerSub: "Alle Zentrumsbezeichnungen und Kontakte sind vollständig fiktiv und dienen nur zu Demonstrationszwecken.",
    crmBrandSub: "Partner-Konsole",
    crmOverview: "Übersicht",
    crmLeads: "Anfragen",
    crmPrograms: "Programme",
    crmProfile: "Listing-Profil",
    returnMarket: "Zurück zum Marktplatz",
    crmEyebrow: "AeternaCo Partner-CRM",
    crmTitle: "Sichtbarkeit, Anfragen und Programme verwalten.",
    newLead: "Neue Anfrage",
    sync: "Synchronisieren",
    metricRevenue: "Qualifizierte Pipeline",
    metricRevenueSub: "prognostizierter Jahreswert",
    metricLeads: "Offene Anfragen",
    metricLeadsSub: "8 concierge-bereit",
    metricConversion: "Gastzufriedenheit",
    metricConversionSub: "Nachaufenthalt-Bewertung",
    metricLanguages: "Sprachen",
    metricLanguagesSub: "EN, DE, FR, ES, AR +mehr",
    leadEyebrow: "Concierge-Pipeline",
    leadTitle: "Anfragen mit hoher Absicht",
    programEyebrow: "Programm-Inventar",
    programTitle: "Signature-Pfade",
    now: "Jetzt",
    quarter: "Quartal",
    year: "Jahr",
    profileEyebrow: "Marktplatzprofil",
    profileText: "Diagnostik-orientiertes Flagship mit ärztlicher Überprüfung, Recovery-Suiten und Family-Office-Concierge.",
    profileRate: "Programm ab",
    profileMessage: "Kommerzielle Botschaft",
    profileAvail: "Nächste Verfügbarkeit",
    saveProfile: "Profil speichern",
    contactLine: "Concierge-Kontakt",
    requestIntro: "Aufenthalt anfragen",
    from: "Ab",
    perProgram: "pro Programm",
    languages: "Sprachen",
    stay: "Dauer",
    oversight: "Medizinische Aufsicht",
    contact: "Concierge",
    reserveEyebrow: "AeternaCo · Private Reservierung",
    reserveTitle: "Ihren Longevity-Aufenthalt reservieren",
    reserveSubtitle: "Unser Concierge-Team meldet sich innerhalb von 24 Stunden, um die Verfügbarkeit zu bestätigen.",
    step1: "Destination",
    step2: "Daten & Programm",
    step3: "Ihre Angaben",
    chooseDestination: "Destination wählen",
    chooseDates: "Daten & Programm",
    arrivalLabel: "Bevorzugte Anreise",
    durationLabel: "Dauer",
    guestsLabel: "Anzahl der Gäste",
    focusLabel: "Hauptfokus",
    notesLabel: "Besondere Überlegungen oder Gesundheitskontext",
    yourDetails: "Ihre Angaben",
    nameLabel: "Vollständiger Name",
    emailLabel: "Private E-Mail",
    phoneLabel: "Telefon (mit Ländervorwahl)",
    languageLabel: "Bevorzugte Sprache",
    memberLabel: "AeternaCo-Mitgliedsnummer (falls vorhanden)",
    privacyNote: "Alle Informationen werden streng vertraulich behandelt. AeternaCo gibt keine Gastdaten an Dritte weiter.",
    confirmTitle: "Reservierung erhalten",
    confirmText: "Ihr Concierge meldet sich innerhalb von 24 Stunden, um die Verfügbarkeit zu bestätigen und Ihren Aufenthalt zu kuratieren.",
    refLabel: "Referenz",
    back: "Zurück",
    continueBtn: "Weiter",
    membershipDialogText: "Dies ist ein Demonstrationsformular. Unser Mitgliedschaftsausschuss prüft jede Bewerbung innerhalb von 5 Werktagen.",
    toastSearch: "Auswahl verfeinert — passende Destinationen werden angezeigt.",
    toastProvider: "Anfrage vorbereitet: partners@aeternaco.example",
    toastIntro: "Aufenthaltsanfrage eingereicht. Ihr Concierge meldet sich innerhalb von 24 Stunden.",
    toastCrm: "AeternaCo Partner-Konsole geöffnet.",
    toastMarket: "Zum Marktplatz zurückgekehrt.",
    toastLead: "Neue Anfrage zur Pipeline hinzugefügt.",
    toastSync: "Konsole synchronisiert.",
    toastMembership: "Bewerbung eingereicht — unser Ausschuss meldet sich in Kürze.",
    noResultsTitle: "Keine Destinationen entsprechen den Filtern",
    noResultsText: "Versuchen Sie eine andere Region oder ein anderes Programm.",
  },
  fr: {
    brandSub: "Longévité privée",
    navDestinations: "Destinations",
    navTreatments: "Soins",
    navPhilosophy: "Philosophie",
    navMembership: "Adhésion",
    crmButton: "Accès partenaire",
    reserveNav: "Réserver un séjour",
    heroEyebrow: "Longévité sélectionnée · 14 destinations mondiales",
    heroTitle: "Là où la médecine rencontre l'art de vivre plus longtemps.",
    heroText: "AeternaCo est un réseau de conciergerie privée pour les centres de longévité d'élite — des Alpes suisses à la côte cubaine, la jungle du Yucatán et les vignobles du Cap. Tous les noms sont fictifs.",
    exploreButton: "Explorer les destinations",
    reserveButton: "Réserver un séjour",
    statDestinations: "Destinations d'élite",
    statContinents: "Continents",
    statSatisfaction: "Satisfaction des invités",
    searchKicker: "Recherche concierge",
    regionLabel: "Destination",
    allRegions: "Toutes les destinations",
    europe: "Europe",
    americas: "Amériques",
    asiaPacific: "Asie-Pacifique",
    mea: "Afrique & Moyen-Orient",
    programLabel: "Focus thérapeutique",
    allPrograms: "Tous les programmes",
    diagnostics: "Diagnostics de précision",
    regeneration: "Régénération",
    metabolic: "Santé métabolique",
    recovery: "Récupération & longévité",
    stayLabel: "Durée",
    anyStay: "Toute durée",
    budgetLabel: "Investissement",
    anyBudget: "Toute gamme",
    searchButton: "Trouver ma destination",
    marketEyebrow: "Portefeuille mondial",
    marketTitle: "Les meilleurs centres de longévité au monde",
    allSpecialties: "Tous",
    matchesLabel: "destinations",
    t1Title: "Diagnostics de précision",
    t1Text: "Panels de biomarqueurs complets, génomique, imagerie avancée et interprétation médicale en 72 heures.",
    t2Title: "Régénération cellulaire",
    t2Text: "Protocoles NAD+, thérapies peptidiques et programmes de reset circadien guidés par des spécialistes.",
    t3Title: "Intelligence métabolique",
    t3Text: "Nutrition CGM, protocoles de sensibilité à l'insuline et cuisine longévité avec chefs privés.",
    t4Title: "Architecture du sommeil",
    t4Text: "Polysomnographie, chronothérapie et conception de l'environnement de sommeil pour un repos profond et réparateur.",
    t5Title: "Optimisation des performances",
    t5Text: "Entraînement VO₂max, monitoring HRV et protocoles d'altitude pour une performance physique optimale.",
    t6Title: "Récupération restauratrice",
    t6Text: "Oxygénothérapie hyperbare, cryothérapie, sauna infrarouge et soutien nutritionnel IV.",
    philEyebrow: "Notre philosophie de curation",
    philTitle: "Nous sélectionnons par la profondeur, pas le prestige.",
    philText1: "AeternaCo évalue les centres selon cinq dimensions : gouvernance clinique, étendue thérapeutique, excellence du concierge, qualité du cadre et résultats indépendants des invités.",
    philText2: "Notre conseil médical consultatif — composé de voix majeures en science de la longévité — fournit une supervision indépendante. Aucun centre ne peut payer pour figurer.",
    phil1: "Conseil médical indépendant",
    phil2: "Aucun placement payant",
    phil3: "Recertification annuelle",
    phil4: "Discrétion totale garantie",
    philQuote: '"La longévité n\'est pas un traitement. C\'est une discipline, un environnement et une façon d\'attention."',
    memberEyebrow: "Adhésion privée",
    memberTitle: "Discrétion, accès prioritaire et concierge personnel.",
    memberText: "L'adhésion AeternaCo offre des fenêtres de réservation prioritaires, un concierge longévité dédié et un dossier santé portable pour tous les séjours.",
    tier1Name: "Luminary",
    tier1a: "Fenêtres de réservation prioritaires",
    tier1b: "Concierge dédié",
    tier1c: "Bilan santé annuel",
    tier1d: "3 crédits destination",
    tier2Name: "Sovereign",
    tierFeaturedBadge: "Le plus choisi",
    tier2a: "Tous les avantages Luminary",
    tier2b: "Dossier santé portable",
    tier2c: "Accès médecin télé 24/7",
    tier2d: "8 crédits destination",
    tier2e: "Option inclusion familiale",
    tier3Name: "Foundational",
    tierPrivate: "Tarification privée",
    tier3a: "Tous les avantages Sovereign",
    tier3b: "Coordination family office",
    tier3c: "Voyage médical sur mesure",
    tier3d: "Crédits illimités",
    tier3e: "Reporting au niveau conseil",
    tierApply: "Demander l'accès",
    tierEnquire: "Demande privée",
    providerEyebrow: "Pour les opérateurs",
    providerTitle: "Référencez votre centre dans le réseau AeternaCo",
    providerText: "Nous collaborons avec un nombre sélect de destinations longévité chaque année. Si votre centre répond à nos standards, nous accueillons une conversation privée.",
    providerButton: "Commencer la candidature",
    footerSub: "Tous les noms de centres et contacts sont entièrement fictifs, créés à des fins de démonstration uniquement.",
    crmBrandSub: "Console partenaire",
    crmOverview: "Vue d'ensemble",
    crmLeads: "Demandes",
    crmPrograms: "Programmes",
    crmProfile: "Profil listing",
    returnMarket: "Retour au marketplace",
    crmEyebrow: "CRM partenaire AeternaCo",
    crmTitle: "Gérez la présence, les demandes et les programmes de votre centre.",
    newLead: "Nouvelle demande",
    sync: "Synchroniser",
    metricRevenue: "Pipeline qualifié",
    metricRevenueSub: "valeur annuelle projetée",
    metricLeads: "Demandes ouvertes",
    metricLeadsSub: "8 prêtes concierge",
    metricConversion: "Satisfaction invités",
    metricConversionSub: "note post-séjour",
    metricLanguages: "Langues servies",
    metricLanguagesSub: "EN, DE, FR, ES, AR +plus",
    leadEyebrow: "Pipeline concierge",
    leadTitle: "Demandes à forte intention",
    programEyebrow: "Inventaire programmes",
    programTitle: "Parcours signature",
    now: "Maintenant",
    quarter: "Trimestre",
    year: "Année",
    profileEyebrow: "Profil marketplace",
    profileText: "Listing phare axé diagnostics avec revue médicale privée, suites de récupération et conciergerie family-office.",
    profileRate: "Programme dès",
    profileMessage: "Message commercial",
    profileAvail: "Prochaine disponibilité",
    saveProfile: "Enregistrer le profil",
    contactLine: "Contact concierge",
    requestIntro: "Demander un séjour",
    from: "Dès",
    perProgram: "par programme",
    languages: "Langues",
    stay: "Durée",
    oversight: "Supervision médicale",
    contact: "Concierge",
    reserveEyebrow: "AeternaCo · Réservation privée",
    reserveTitle: "Réservez votre séjour longévité",
    reserveSubtitle: "Notre équipe concierge vous contactera sous 24 heures pour confirmer les disponibilités et personnaliser votre programme.",
    step1: "Destination",
    step2: "Dates & programme",
    step3: "Vos coordonnées",
    chooseDestination: "Choisissez votre destination",
    chooseDates: "Dates & programme",
    arrivalLabel: "Arrivée souhaitée",
    durationLabel: "Durée",
    guestsLabel: "Nombre d'invités",
    focusLabel: "Focus principal",
    notesLabel: "Considérations spéciales ou contexte de santé",
    yourDetails: "Vos coordonnées",
    nameLabel: "Nom complet",
    emailLabel: "Email privé",
    phoneLabel: "Téléphone (avec indicatif)",
    languageLabel: "Langue préférée",
    memberLabel: "Numéro de membre AeternaCo (le cas échéant)",
    privacyNote: "Toutes les informations sont traitées avec la plus stricte confidentialité. AeternaCo ne partage aucune donnée des invités avec des tiers.",
    confirmTitle: "Réservation reçue",
    confirmText: "Votre concierge vous contactera sous 24 heures pour confirmer les disponibilités et commencer à préparer votre séjour.",
    refLabel: "Référence",
    back: "Retour",
    continueBtn: "Continuer",
    membershipDialogText: "Ceci est un formulaire de démonstration. Notre comité d'adhésion examine chaque candidature sous 5 jours ouvrables.",
    toastSearch: "Sélection affinée — destinations correspondantes affichées.",
    toastProvider: "Demande préparée : partners@aeternaco.example",
    toastIntro: "Demande de séjour soumise. Votre concierge vous contactera sous 24 heures.",
    toastCrm: "Console partenaire AeternaCo ouverte.",
    toastMarket: "Retour au marketplace.",
    toastLead: "Nouvelle demande ajoutée au pipeline.",
    toastSync: "Console synchronisée.",
    toastMembership: "Candidature soumise — notre comité vous contactera prochainement.",
    noResultsTitle: "Aucune destination ne correspond aux filtres",
    noResultsText: "Essayez une autre région ou un autre programme.",
  },
  es: {
    brandSub: "Longevidad privada",
    navDestinations: "Destinos",
    navTreatments: "Tratamientos",
    navPhilosophy: "Filosofía",
    navMembership: "Membresía",
    crmButton: "Acceso socio",
    reserveNav: "Reservar estadía",
    heroEyebrow: "Longevidad curada · 14 destinos en el mundo",
    heroTitle: "Donde la medicina se encuentra con el arte de vivir más tiempo.",
    heroText: "AeternaCo es una red de concierge privada para centros de longevidad de élite — desde los Alpes suizos hasta la costa cubana, la selva del Yucatán y los viñedos de Ciudad del Cabo. Todos los nombres son ficticios.",
    exploreButton: "Explorar destinos",
    reserveButton: "Reservar estadía",
    statDestinations: "Destinos de élite",
    statContinents: "Continentes",
    statSatisfaction: "Satisfacción de huéspedes",
    searchKicker: "Búsqueda concierge",
    regionLabel: "Destino",
    allRegions: "Todos los destinos",
    europe: "Europa",
    americas: "Américas",
    asiaPacific: "Asia Pacífico",
    mea: "África y Medio Oriente",
    programLabel: "Enfoque de tratamiento",
    allPrograms: "Todos los programas",
    diagnostics: "Diagnóstico de precisión",
    regeneration: "Regeneración",
    metabolic: "Salud metabólica",
    recovery: "Recuperación y longevidad",
    stayLabel: "Duración",
    anyStay: "Cualquier duración",
    budgetLabel: "Inversión",
    anyBudget: "Cualquier rango",
    searchButton: "Encontrar mi destino",
    marketEyebrow: "Portfolio global",
    marketTitle: "Los mejores centros de longevidad del mundo",
    allSpecialties: "Todos",
    matchesLabel: "destinos",
    t1Title: "Diagnóstico de precisión",
    t1Text: "Paneles completos de biomarcadores, genómica, imágenes avanzadas e interpretación médica en 72 horas.",
    t2Title: "Regeneración celular",
    t2Text: "Protocolos NAD+, terapias de péptidos y programas de reset circadiano guiados por especialistas en medicina regenerativa.",
    t3Title: "Inteligencia metabólica",
    t3Text: "Nutrición guiada por CGM, protocolos de sensibilidad a la insulina y cocina de longevidad con chefs privados.",
    t4Title: "Arquitectura del sueño",
    t4Text: "Polisomnografía, cronoterapia y diseño del entorno de sueño para recuperación restaurativa.",
    t5Title: "Optimización del rendimiento",
    t5Text: "Entrenamiento VO₂max, monitoreo HRV y protocolos de altitud para rendimiento físico óptimo.",
    t6Title: "Recuperación restaurativa",
    t6Text: "Oxigenoterapia hiperbárica, crioterapia, sauna infrarrojo y soporte nutricional IV.",
    philEyebrow: "Nuestra filosofía de curación",
    philTitle: "Seleccionamos por profundidad, no por prestigio.",
    philText1: "AeternaCo evalúa centros en cinco dimensiones: gobernanza clínica, amplitud terapéutica, excelencia del concierge, calidad del entorno y resultados independientes de los huéspedes.",
    philText2: "Nuestro consejo médico asesor — formado por voces líderes en ciencia de la longevidad — brinda supervisión independiente. Ningún centro puede pagar para estar listado.",
    phil1: "Consejo médico independiente",
    phil2: "Sin colocaciones pagas",
    phil3: "Recertificación anual",
    phil4: "Discreción total garantizada",
    philQuote: '"La longevidad no es un tratamiento. Es una disciplina, un entorno y una forma de atención."',
    memberEyebrow: "Membresía privada",
    memberTitle: "Discreción, acceso prioritario y concierge personal.",
    memberText: "La membresía AeternaCo ofrece ventanas de reserva prioritarias, un concierge de longevidad dedicado y un historial de salud portable.",
    tier1Name: "Luminary",
    tier1a: "Ventanas de reserva prioritarias",
    tier1b: "Concierge dedicado",
    tier1c: "Resumen de salud anual",
    tier1d: "3 créditos de destino",
    tier2Name: "Sovereign",
    tierFeaturedBadge: "El más elegido",
    tier2a: "Todos los beneficios Luminary",
    tier2b: "Historial de salud portable",
    tier2c: "Acceso médico tele 24/7",
    tier2d: "8 créditos de destino",
    tier2e: "Opción de inclusión familiar",
    tier3Name: "Foundational",
    tierPrivate: "Precio privado",
    tier3a: "Todos los beneficios Sovereign",
    tier3b: "Coordinación de family office",
    tier3c: "Viaje médico a medida",
    tier3d: "Créditos ilimitados",
    tier3e: "Reportes a nivel directivo",
    tierApply: "Solicitar acceso",
    tierEnquire: "Consulta privada",
    providerEyebrow: "Para operadores",
    providerTitle: "Listá tu centro en la red AeternaCo",
    providerText: "Trabajamos con un número selecto de destinos de longevidad cada año. Si tu centro cumple nuestros estándares, bienvenimos una conversación privada.",
    providerButton: "Iniciar solicitud",
    footerSub: "Todos los nombres de centros y contactos son completamente ficticios, creados solo con fines de demostración.",
    crmBrandSub: "Consola socio",
    crmOverview: "Resumen",
    crmLeads: "Consultas",
    crmPrograms: "Programas",
    crmProfile: "Perfil del listado",
    returnMarket: "Volver al marketplace",
    crmEyebrow: "CRM socio AeternaCo",
    crmTitle: "Gestioná la presencia, consultas y programas de tu centro.",
    newLead: "Nueva consulta",
    sync: "Sincronizar",
    metricRevenue: "Pipeline calificado",
    metricRevenueSub: "valor anual proyectado",
    metricLeads: "Consultas abiertas",
    metricLeadsSub: "8 listas para concierge",
    metricConversion: "Satisfacción de huéspedes",
    metricConversionSub: "puntuación post-estadía",
    metricLanguages: "Idiomas atendidos",
    metricLanguagesSub: "EN, DE, FR, ES, AR +más",
    leadEyebrow: "Pipeline concierge",
    leadTitle: "Consultas de alta intención",
    programEyebrow: "Inventario de programas",
    programTitle: "Rutas signature",
    now: "Ahora",
    quarter: "Trimestre",
    year: "Año",
    profileEyebrow: "Perfil marketplace",
    profileText: "Listado insignia orientado a diagnóstico con revisión médica privada, suites de recuperación y concierge family-office.",
    profileRate: "Programa desde",
    profileMessage: "Mensaje comercial",
    profileAvail: "Próxima disponibilidad",
    saveProfile: "Guardar perfil",
    contactLine: "Contacto concierge",
    requestIntro: "Solicitar estadía",
    from: "Desde",
    perProgram: "por programa",
    languages: "Idiomas",
    stay: "Duración",
    oversight: "Supervisión médica",
    contact: "Concierge",
    reserveEyebrow: "AeternaCo · Reserva privada",
    reserveTitle: "Reservá tu estadía de longevidad",
    reserveSubtitle: "Nuestro equipo de concierge se pondrá en contacto en 24 horas para confirmar disponibilidad y personalizar tu programa.",
    step1: "Destino",
    step2: "Fechas y programa",
    step3: "Tus datos",
    chooseDestination: "Elegí tu destino",
    chooseDates: "Fechas y programa",
    arrivalLabel: "Llegada preferida",
    durationLabel: "Duración",
    guestsLabel: "Número de huéspedes",
    focusLabel: "Enfoque principal",
    notesLabel: "Consideraciones especiales o contexto de salud",
    yourDetails: "Tus datos",
    nameLabel: "Nombre completo",
    emailLabel: "Email privado",
    phoneLabel: "Teléfono (con código de país)",
    languageLabel: "Idioma preferido",
    memberLabel: "Número de membresía AeternaCo (si corresponde)",
    privacyNote: "Toda la información se maneja con estricta confidencialidad. AeternaCo no comparte datos de huéspedes con terceros.",
    confirmTitle: "Reserva recibida",
    confirmText: "Tu concierge se pondrá en contacto en 24 horas para confirmar disponibilidad y comenzar a curar tu estadía.",
    refLabel: "Referencia",
    back: "Volver",
    continueBtn: "Continuar",
    membershipDialogText: "Este es un formulario de demostración. Nuestro comité de membresía revisa cada solicitud en 5 días hábiles.",
    toastSearch: "Selección refinada — mostrando destinos correspondientes.",
    toastProvider: "Consulta preparada: partners@aeternaco.example",
    toastIntro: "Solicitud de estadía enviada. Tu concierge se comunicará en 24 horas.",
    toastCrm: "Consola socio AeternaCo abierta.",
    toastMarket: "Regresaste al marketplace.",
    toastLead: "Nueva consulta agregada al pipeline.",
    toastSync: "Consola sincronizada.",
    toastMembership: "Solicitud enviada — nuestro comité se pondrá en contacto pronto.",
    noResultsTitle: "No hay destinos para esos filtros",
    noResultsText: "Probá otra región o programa para ampliar el portfolio.",
  },
};

const specialtyNames = {
  diagnostics: { en: "Diagnostics", de: "Diagnostik", fr: "Diagnostics", es: "Diagnóstico" },
  regeneration: { en: "Regeneration", de: "Regeneration", fr: "Régénération", es: "Regeneración" },
  metabolic:    { en: "Metabolic", de: "Metabolisch", fr: "Métabolique", es: "Metabólico" },
  recovery:     { en: "Recovery", de: "Recovery", fr: "Récupération", es: "Recuperación" },
  sleep:        { en: "Sleep medicine", de: "Schlafmedizin", fr: "Sommeil", es: "Sueño" },
  performance:  { en: "Performance", de: "Performance", fr: "Performance", es: "Rendimiento" },
};

// ── Centers Data ──────────────────────────────────────────
const centers = [
  // ── CUBA ──
  {
    id: "havanera",
    name: "Havanera Longevity Retreat",
    city: "Havana",
    country: "Cuba",
    region: "Americas",
    program: "regeneration",
    stay: "7-10",
    price: 9400,
    rating: 4.8,
    badge: { en: "Caribbean renewal", de: "Karibische Erneuerung", fr: "Renouveau caraïbe", es: "Renovación caribeña" },
    summary: {
      en: "A colonial mansion estate on the Malecón, reborn as a discreet regenerative retreat combining Cuban marine biotherapy, NAD+ protocols and private sea-recovery suites.",
      de: "Ein koloniales Herrenhaus am Malecón, das zu einem diskreten regenerativen Retreat mit kubanischer Meeresbiotherapie und NAD+-Protokollen geworden ist.",
      fr: "Un manoir colonial sur le Malecón, reconverti en retraite régénérative discrète alliant biothérapie marine cubaine, protocoles NAD+ et suites de récupération privées.",
      es: "Una mansión colonial en el Malecón, reinventada como retiro regenerativo discreto que combina bioterapia marina cubana, protocolos NAD+ y suites privadas de recuperación frente al mar.",
    },
    specialties: ["regeneration", "recovery", "sleep"],
    languages: "ES, EN, FR, DE",
    oversight: "Regenerative medicine director",
    contact: "Camila Fuentes, Guest Curator",
    phone: "+53 7 555 0241",
    email: "curator@havanera-example.cu",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=82",
    map: { x: 26, y: 50 },
  },
  // ── MEXICO ──
  {
    id: "cenote",
    name: "Cenote Vitae Yucatán",
    city: "Mérida",
    country: "Mexico",
    region: "Americas",
    program: "metabolic",
    stay: "14+",
    price: 11800,
    rating: 4.9,
    badge: { en: "Jungle immersion", de: "Dschungel-Immersion", fr: "Immersion jungle", es: "Inmersión selva" },
    summary: {
      en: "Nested within a private hacienda reserve in the Yucatán jungle, this residential program blends ancient Mayan botanical knowledge with modern metabolic medicine and cenote hydrotherapy.",
      de: "In einem privaten Hazienda-Reservat im Yucatán-Dschungel vereint dieses Wohnprogramm altes Maya-Botanikwissen mit moderner metabolischer Medizin und Cenote-Hydrotherapie.",
      fr: "Nichée dans une hacienda privée au cœur de la jungle du Yucatán, cette résidence mêle savoirs botaniques mayas ancestraux, médecine métabolique moderne et hydrothérapie en cénote.",
      es: "Instalada en una hacienda privada en la selva yucateca, esta residencia combina el conocimiento botánico maya ancestral con medicina metabólica moderna e hidroterapia en cenote.",
    },
    specialties: ["metabolic", "recovery", "sleep"],
    languages: "ES, EN, DE, FR",
    oversight: "Metabolic & integrative medicine board",
    contact: "Ixchel Montoya, Residency Concierge",
    phone: "+52 999 555 0187",
    email: "residency@cenotevitae-example.mx",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=82",
    map: { x: 25, y: 48 },
  },
  // ── CAPE TOWN ──
  {
    id: "stellara",
    name: "Stellara Winelands Longevity Estate",
    city: "Cape Town",
    country: "South Africa",
    region: "Middle East & Africa",
    program: "diagnostics",
    stay: "7-10",
    price: 13200,
    rating: 4.9,
    badge: { en: "Vineyard diagnostics", de: "Weinberg-Diagnostik", fr: "Diagnostics vignoble", es: "Diagnóstico viñedo" },
    summary: {
      en: "A private estate in the Cape Winelands where cutting-edge diagnostics — genomics, advanced imaging, HRV profiling — are delivered within a working wine estate, with longevity cuisine drawn from the biodynamic farm.",
      de: "Ein privates Anwesen in den Cape Winelands, wo modernste Diagnostik — Genomik, Bildgebung, HRV-Profiling — in einem Weingut angeboten wird, mit Longevity-Küche aus der biodynamischen Farm.",
      fr: "Un domaine privé dans les Cape Winelands où diagnostics de pointe — génomique, imagerie, profilage HRV — sont dispensés au cœur d'un vignoble en activité, avec une cuisine longévité issue de la ferme biodynamique.",
      es: "Una hacienda privada en los Cape Winelands donde los diagnósticos de vanguardia — genómica, imágenes, HRV — se realizan en un viñedo en producción, con cocina de longevidad de la granja biodinámica.",
    },
    specialties: ["diagnostics", "metabolic", "performance"],
    languages: "EN, DE, FR, AF",
    oversight: "Clinical governance board — Cape Longevity Institute",
    contact: "Amara van der Berg, Estate Concierge",
    phone: "+27 21 555 0312",
    email: "estate@stellara-example.co.za",
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1200&q=82",
    map: { x: 52, y: 74 },
  },
  // ── GENEVA ──
  {
    id: "vellora",
    name: "Vellora Institute Geneva",
    city: "Geneva",
    country: "Switzerland",
    region: "Europe",
    program: "diagnostics",
    stay: "3-5",
    price: 8900,
    rating: 4.9,
    badge: { en: "Precision diagnostics", de: "Präzisionsdiagnostik", fr: "Diagnostics de précision", es: "Diagnóstico de precisión" },
    summary: {
      en: "A discreet alpine diagnostic institute blending physician-led longevity reviews, imaging coordination and recovery suites with the discretion Geneva's private clientele requires.",
      de: "Ein diskretes alpines Diagnostikinstitut mit ärztlichen Longevity-Reviews, Bildgebung und Recovery-Suiten.",
      fr: "Un institut alpin discret combinant bilans longévité médicaux, imagerie et suites de récupération.",
      es: "Un instituto alpino discreto que combina revisión médica de longevidad, coordinación de imágenes y suites de recuperación.",
    },
    specialties: ["diagnostics", "recovery", "sleep"],
    languages: "EN, DE, FR, IT",
    oversight: "Medical board review",
    contact: "Mara Ellison, Global Concierge",
    phone: "+41 44 555 0198",
    email: "concierge@vellora-example.com",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=82",
    map: { x: 48, y: 35 },
  },
  // ── KYOTO ──
  {
    id: "sennova",
    name: "Sennova Kyoto Longevity House",
    city: "Kyoto",
    country: "Japan",
    region: "Asia Pacific",
    program: "regeneration",
    stay: "7-10",
    price: 12400,
    rating: 4.8,
    badge: { en: "Cellular renewal", de: "Zelluläre Erneuerung", fr: "Renouvellement cellulaire", es: "Renovación celular" },
    summary: {
      en: "A serene city retreat focused on regenerative protocols, circadian restoration and high-touch nutritional design in the heart of historic Kyoto.",
      de: "Ein ruhiger Stadt-Retreat für regenerative Protokolle und zirkadiane Wiederherstellung im historischen Kyoto.",
      fr: "Une retraite urbaine dédiée aux protocoles régénératifs et à la restauration circadienne au cœur de Kyoto.",
      es: "Un retiro urbano sereno enfocado en protocolos regenerativos y restauración circadiana en el corazón de Kioto.",
    },
    specialties: ["regeneration", "sleep", "metabolic"],
    languages: "EN, JP, DE, FR",
    oversight: "Regenerative medicine director",
    contact: "Noemi Arata, Guest Pathways",
    phone: "+81 75 555 0142",
    email: "pathways@sennova-example.jp",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=82",
    map: { x: 82, y: 42 },
  },
  // ── CÔTE D'AZUR ──
  {
    id: "solenne",
    name: "Solenne Vitality Côte d'Azur",
    city: "Antibes",
    country: "France",
    region: "Europe",
    program: "recovery",
    stay: "7-10",
    price: 9800,
    rating: 4.7,
    badge: { en: "Coastal recovery", de: "Recovery am Meer", fr: "Récupération côtière", es: "Recuperación costera" },
    summary: {
      en: "A coastal medical wellness residence pairing recovery therapies, skin longevity and private chef metabolic planning on the French Riviera.",
      de: "Eine medizinische Wellness-Residenz am Meer mit Recovery-Therapien und metabolischer Planung an der Côte d'Azur.",
      fr: "Une résidence de wellness médical en bord de mer associant récupération, longévité cutanée et planification métabolique privée.",
      es: "Una residencia costera de wellness médico que combina terapias de recuperación y planificación metabólica en la Riviera francesa.",
    },
    specialties: ["recovery", "metabolic", "performance"],
    languages: "FR, EN, ES, DE",
    oversight: "Clinical wellness committee",
    contact: "Claire Beaumont, Private Access",
    phone: "+33 4 55 50 16 21",
    email: "privateaccess@solenne-example.fr",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=82",
    map: { x: 50, y: 39 },
  },
  // ── ABU DHABI ──
  {
    id: "auric",
    name: "Auric Desert Longevity Reserve",
    city: "Abu Dhabi",
    country: "UAE",
    region: "Middle East & Africa",
    program: "diagnostics",
    stay: "3-5",
    price: 15400,
    rating: 4.9,
    badge: { en: "Private medicine", de: "Private Medizin", fr: "Médecine privée", es: "Medicina privada" },
    summary: {
      en: "A private medicine campus for executive diagnostics, heat-adapted recovery and evidence-led supplementation in the desert luxury of Abu Dhabi.",
      de: "Ein Campus für Private Medicine mit Executive-Diagnostik im Luxusdesert Abu Dhabis.",
      fr: "Un campus de médecine privée pour diagnostics exécutifs et récupération adaptée au désert de luxe d'Abou Dhabi.",
      es: "Un campus de medicina privada para diagnóstico ejecutivo y recuperación adaptada al calor en el lujo desértico de Abu Dabi.",
    },
    specialties: ["diagnostics", "recovery", "performance"],
    languages: "EN, AR, FR, ES",
    oversight: "Executive physician unit",
    contact: "Leila Voss, Executive Liaison",
    phone: "+971 2 555 0184",
    email: "liaison@auricreserve-example.ae",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=82",
    map: { x: 61, y: 47 },
  },
  // ── SANTA FE ──
  {
    id: "verdan",
    name: "Verdan BioAge Ranch",
    city: "Santa Fe",
    country: "United States",
    region: "Americas",
    program: "metabolic",
    stay: "14+",
    price: 13800,
    rating: 4.8,
    badge: { en: "Metabolic reset", de: "Metabolischer Reset", fr: "Reset métabolique", es: "Reset metabólico" },
    summary: {
      en: "A high-altitude desert ranch model for metabolic reset, movement science, biomarker tracking and restorative solitude at 7,000 feet.",
      de: "Ein Hochaltitude-Ranch-Modell für metabolischen Reset und Biomarker-Tracking auf 2.100 m Höhe.",
      fr: "Un ranch désertique d'altitude pour reset métabolique, science du mouvement et biomarqueurs à 2 100 m.",
      es: "Un rancho desértico de altitud para reset metabólico, ciencia del movimiento y seguimiento de biomarcadores a 2.100 m.",
    },
    specialties: ["metabolic", "performance", "sleep"],
    languages: "EN, ES, FR",
    oversight: "Metabolic physician council",
    contact: "Evan Calder, Admissions Lead",
    phone: "+1 505 555 0137",
    email: "admissions@verdan-example.com",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",
    map: { x: 23, y: 45 },
  },
  // ── MENDOZA ──
  {
    id: "alba",
    name: "Alba Andean Longevity",
    city: "Mendoza",
    country: "Argentina",
    region: "Americas",
    program: "recovery",
    stay: "7-10",
    price: 7600,
    rating: 4.6,
    badge: { en: "Altitude recovery", de: "Höhen-Recovery", fr: "Récupération en altitude", es: "Recuperación en altura" },
    summary: {
      en: "A mountain program combining sleep recovery, cardiovascular profiling and private vineyard nutrition rituals at the foot of the Andes.",
      de: "Ein Bergprogramm mit Schlaf-Recovery und privaten Ernährungsritualen am Fuß der Anden.",
      fr: "Un programme de montagne combinant sommeil, profil cardiovasculaire et rituels nutritionnels au pied des Andes.",
      es: "Un programa de montaña que combina recuperación del sueño, perfil cardiovascular y rituales de nutrición entre viñedos al pie de los Andes.",
    },
    specialties: ["recovery", "sleep", "metabolic"],
    languages: "ES, EN, FR, DE",
    oversight: "Cardiometabolic review team",
    contact: "Lucia Benet, Regional Concierge",
    phone: "+54 261 555 0116",
    email: "concierge@albaandean-example.com",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=82",
    map: { x: 35, y: 76 },
  },
  // ── MARRAKECH ──
  {
    id: "zephyr",
    name: "Zephyr Blue Marrakech",
    city: "Marrakech",
    country: "Morocco",
    region: "Middle East & Africa",
    program: "regeneration",
    stay: "14+",
    price: 10200,
    rating: 4.8,
    badge: { en: "Regenerative retreat", de: "Regenerativer Retreat", fr: "Retraite régénérative", es: "Retiro regenerativo" },
    summary: {
      en: "A discreet riad-inspired retreat for regenerative recovery, sleep medicine and longevity cuisine within the medina's quietest quarter.",
      de: "Ein diskreter Riad-inspirierter Retreat für regenerative Recovery und Schlafmedizin in der ruhigsten Ecke der Medina.",
      fr: "Une retraite discrète inspirée des riads pour récupération régénérative et médecine du sommeil au coeur de la médina.",
      es: "Un retiro discreto inspirado en riads para recuperación regenerativa y medicina del sueño en el rincón más silencioso de la medina.",
    },
    specialties: ["regeneration", "recovery", "sleep"],
    languages: "FR, EN, AR, ES",
    oversight: "Longevity therapies director",
    contact: "Amal Renaud, Stay Curator",
    phone: "+212 5 55 50 18 33",
    email: "curator@zephyrblue-example.ma",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=82",
    map: { x: 48, y: 52 },
  },
];

// ── CRM Data ──────────────────────────────────────────────
const leads = [
  { name: "Family office enquiry", stage: "Concierge review", detail: "Geneva or Abu Dhabi, diagnostics-first, 3 executives, private physician briefing." },
  { name: "Caribbean regeneration stay", stage: "Program fit", detail: "Cuba or Marrakech, 10 days, NAD+ + sleep protocols, Spanish-speaking concierge." },
  { name: "Yucatán residency — founder", stage: "Proposal draft", detail: "Mexico, 14+ days, metabolic reset + cenote hydrotherapy, arrival Q2." },
  { name: "Cape Town diagnostics", stage: "Concierge review", detail: "Winelands estate, 7 days, full genomics, couple, April window." },
];

const programs = [
  { name: "Executive BioAge Review", status: "Available", demand: "14 matched enquiries this month", body: "Three-day diagnostics pathway with imaging, biomarkers and physician narrative." },
  { name: "Caribbean Regeneration Residence", status: "Waitlist", demand: "Next openings in 4 weeks", body: "NAD+ protocols, marine biotherapy, sleep medicine and restorative suites in Havana." },
  { name: "Yucatán Metabolic Immersion", status: "Available", demand: "8 high-intent leads", body: "Cenote hydrotherapy, Mayan botanicals, CGM nutrition and private movement coaching." },
  { name: "Winelands Diagnostic Retreat", status: "Available", demand: "6 enquiries from family offices", body: "Genomics, advanced imaging and longevity cuisine from the Cape estate's biodynamic farm." },
];

// ── State ──────────────────────────────────────────────────
const state = {
  lang: "en",
  specialty: "all",
  region: "all",
  program: "all",
  stay: "all",
  budget: "all",
  selectedCenter: centers[0],
  leadCount: 22,
  reserveStep: 1,
  selectedDestId: null,
};

// ── DOM references ─────────────────────────────────────────
const centerGrid    = document.querySelector("#centerGrid");
const centerDialog  = document.querySelector("#centerDialog");
const reserveDialog = document.querySelector("#reserveDialog");
const memberDialog  = document.querySelector("#membershipDialog");
const toast         = document.querySelector("#toast");

// ── Helpers ────────────────────────────────────────────────
const t = (key) => translations[state.lang]?.[key] ?? translations.en[key] ?? key;
const icon = (name) => `<i data-lucide="${name}"></i>`;
const refreshIcons = () => window.lucide?.createIcons();

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}
function specialtyLabel(key) {
  return specialtyNames[key]?.[state.lang] ?? specialtyNames[key]?.en ?? key;
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 3000);
}

// ── i18n ──────────────────────────────────────────────────
function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === state.lang);
  });
}

// ── Filtering ─────────────────────────────────────────────
function filteredCenters() {
  return centers.filter((c) => {
    if (state.region !== "all" && c.region !== state.region) return false;
    if (state.program !== "all" && c.program !== state.program) return false;
    if (state.stay !== "all" && c.stay !== state.stay) return false;
    if (state.specialty !== "all" && !c.specialties.includes(state.specialty)) return false;
    if (state.budget !== "all") {
      if (state.budget === "under10k" && c.price >= 10000) return false;
      if (state.budget === "10k-20k" && (c.price < 10000 || c.price > 20000)) return false;
      if (state.budget === "over20k" && c.price <= 20000) return false;
    }
    return true;
  });
}

// ── Render centers ────────────────────────────────────────
function renderCenters() {
  const items = filteredCenters();
  document.querySelector("#matchCount").textContent = items.length;
  centerGrid.innerHTML = items.length
    ? items.map((c) => `
      <article class="center-card" data-center="${c.id}">
        <figure>
          <img src="${c.image}" alt="${c.name}" loading="lazy">
          <span class="center-badge">${c.badge[state.lang] || c.badge.en}</span>
          <div class="contact-layer">
            <strong>${t("contact")}</strong>
            <span>${c.contact}</span>
            <span>${c.phone}</span>
          </div>
        </figure>
        <div class="center-body">
          <div class="center-title-row">
            <div>
              <h3>${c.name}</h3>
              <p>${c.city}, ${c.country}</p>
            </div>
            <span class="rating">${icon("star")} ${c.rating}</span>
          </div>
          <p class="center-summary">${c.summary[state.lang] || c.summary.en}</p>
          <div class="specialties">
            ${c.specialties.map((s) => `<span>${specialtyLabel(s)}</span>`).join("")}
          </div>
          <div class="center-footer">
            <div class="center-price">
              <strong>${t("from")} ${formatPrice(c.price)}</strong>
              <small>${t("perProgram")} · ${c.stay} days</small>
            </div>
            <button class="cta-primary compact" type="button" data-center="${c.id}">
              ${icon("calendar-check")} ${t("requestIntro")}
            </button>
          </div>
        </div>
      </article>`).join("")
    : `<article class="center-card" style="grid-column:1/-1;padding:40px;text-align:center;">
        <h3>${t("noResultsTitle")}</h3>
        <p style="color:var(--muted);margin-top:10px">${t("noResultsText")}</p>
      </article>`;
  refreshIcons();
}

// ── Render CRM ────────────────────────────────────────────
function renderLeads() {
  document.querySelector("#leadBoard").innerHTML = leads.map((l) => `
    <article class="lead-card">
      <header>
        <h3>${l.name}</h3>
        <span class="lead-stage">${l.stage}</span>
      </header>
      <p>${l.detail}</p>
      <div class="lead-actions">
        <button class="ghost-button" type="button">${icon("message-circle")} Message</button>
        <button class="cta-primary compact" type="button">${icon("check")} Qualify</button>
      </div>
    </article>`).join("");
  refreshIcons();
}

function renderPrograms() {
  document.querySelector("#programList").innerHTML = programs.map((p) => `
    <article class="program-card">
      <header>
        <h3>${p.name}</h3>
        <span class="program-status ${p.status === "Waitlist" ? "waitlist" : ""}">${p.status}</span>
      </header>
      <p>${p.body}</p>
      <small style="color:var(--muted);font-size:12px">${p.demand}</small>
    </article>`).join("");
}

// ── Center modal ──────────────────────────────────────────
function openCenter(id) {
  const c = centers.find((x) => x.id === id);
  if (!c) return;
  state.selectedCenter = c;

  document.querySelector("#modalImage").src = c.image;
  document.querySelector("#modalImage").alt = c.name;
  document.querySelector("#modalRegion").textContent = `${c.region} · ${c.city}, ${c.country}`;
  document.querySelector("#modalTitle").textContent = c.name;
  document.querySelector("#modalSummary").textContent = c.summary[state.lang] || c.summary.en;
  document.querySelector("#modalRatingVal").textContent = c.rating;
  document.querySelector("#modalStars").innerHTML = "★".repeat(Math.round(c.rating));
  document.querySelector("#modalContact").textContent = `${c.contact} · ${c.email}`;
  document.querySelector("#modalDetails").innerHTML = `
    <span><small>${t("languages")}</small><strong>${c.languages}</strong></span>
    <span><small>${t("stay")}</small><strong>${c.stay} days</strong></span>
    <span><small>${t("oversight")}</small><strong>${c.oversight}</strong></span>
    <span><small>${t("from")}</small><strong>${formatPrice(c.price)}</strong></span>
  `;
  document.querySelector("#modalSpecialties").innerHTML = c.specialties.map((s) => `<span>${specialtyLabel(s)}</span>`).join("");

  centerDialog.showModal();
  refreshIcons();
}
window.openCenterProfile = openCenter;

// ── Reservation flow ──────────────────────────────────────
function buildDestinationPicker() {
  const picker = document.querySelector("#destinationPicker");
  picker.innerHTML = centers.map((c) => `
    <button class="dest-option ${state.selectedDestId === c.id ? "selected" : ""}" type="button" data-destid="${c.id}">
      <img src="${c.image}" alt="${c.name}" loading="lazy">
      <div class="dest-option-info">
        <strong>${c.name}</strong>
        <small>${c.city}, ${c.country}</small>
      </div>
    </button>`).join("");
  refreshIcons();
}

function openReserve(preselectedId = null) {
  if (preselectedId) state.selectedDestId = preselectedId;
  state.reserveStep = 1;
  updateReserveUI();
  buildDestinationPicker();
  reserveDialog.showModal();
  refreshIcons();
}

function updateReserveUI() {
  const s = state.reserveStep;
  document.querySelectorAll(".reserve-step-content").forEach((el, i) => {
    el.classList.toggle("hidden", i + 1 !== s);
  });
  document.querySelectorAll(".step").forEach((el, i) => {
    el.classList.remove("active", "done");
    if (i + 1 === s) el.classList.add("active");
    if (i + 1 < s)  el.classList.add("done");
  });
  const backBtn = document.querySelector("#reserveBack");
  const nextBtn = document.querySelector("#reserveNext");
  backBtn.style.display = s > 1 && s < 4 ? "inline-flex" : "none";
  if (s === 4) {
    nextBtn.querySelector("span").textContent = "Close";
    nextBtn.querySelector("i")?.remove();
  } else {
    nextBtn.querySelector("span").textContent = t("continueBtn");
  }
}

document.querySelector("#reserveNext").addEventListener("click", () => {
  if (state.reserveStep === 4) { reserveDialog.close(); return; }
  if (state.reserveStep < 4) {
    if (state.reserveStep === 3) {
      // Generate ref and show confirmation
      const ref = "AE-2025-" + Math.floor(1000 + Math.random() * 9000);
      document.querySelector("#confirmRef").textContent = ref;
    }
    state.reserveStep++;
    updateReserveUI();
    if (state.reserveStep === 1) buildDestinationPicker();
  }
});

document.querySelector("#reserveBack").addEventListener("click", () => {
  if (state.reserveStep > 1) { state.reserveStep--; updateReserveUI(); }
});

document.querySelector("#closeReserve").addEventListener("click", () => reserveDialog.close());

document.querySelector("#destinationPicker")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-destid]");
  if (!btn) return;
  state.selectedDestId = btn.dataset.destid;
  document.querySelectorAll(".dest-option").forEach((el) => el.classList.toggle("selected", el.dataset.destid === state.selectedDestId));
});

// Open reserve from hero buttons
document.querySelector("#heroReserve")?.addEventListener("click", () => openReserve());
document.querySelector("#topbarReserve")?.addEventListener("click", () => openReserve());

// ── Center card / modal ───────────────────────────────────
document.body.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-center]");
  if (btn) openCenter(btn.dataset.center);
});

document.querySelector("#closeDialog").addEventListener("click", () => centerDialog.close());
document.querySelector("#requestIntro").addEventListener("click", () => {
  const id = state.selectedCenter?.id;
  centerDialog.close();
  openReserve(id);
});

// ── Search ────────────────────────────────────────────────
document.querySelector("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  state.region  = document.querySelector("#regionFilter").value;
  state.program = document.querySelector("#programFilter").value;
  state.stay    = document.querySelector("#stayFilter").value;
  state.budget  = document.querySelector("#budgetFilter").value;
  renderCenters();
  document.querySelector("#destinations").scrollIntoView({ behavior: "smooth" });
  showToast(t("toastSearch"));
});

// ── Chip filters ─────────────────────────────────────────
document.querySelectorAll("[data-specialty]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-specialty]").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state.specialty = btn.dataset.specialty;
    renderCenters();
  });
});

// ── Language ──────────────────────────────────────────────
document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    applyTranslations();
    renderCenters();
    renderLeads();
    renderPrograms();
  });
});

// ── CRM ───────────────────────────────────────────────────
document.querySelector("#openCrm").addEventListener("click", () => {
  document.body.classList.add("crm-mode");
  document.querySelector("#crmApp").setAttribute("aria-hidden", "false");
  showToast(t("toastCrm"));
  refreshIcons();
});
document.querySelector("#exitCrm").addEventListener("click", () => {
  document.body.classList.remove("crm-mode");
  document.querySelector("#crmApp").setAttribute("aria-hidden", "true");
  showToast(t("toastMarket"));
});
document.querySelector("#addLeadBtn").addEventListener("click", () => {
  leads.unshift({ name: "New private intake", stage: "New", detail: "Multi-language marketplace lead requesting longevity diagnostics and recovery across network destinations." });
  state.leadCount++;
  document.querySelector("#openLeadMetric").textContent = state.leadCount;
  renderLeads();
  showToast(t("toastLead"));
});
document.querySelector("#syncBtn").addEventListener("click", () => showToast(t("toastSync")));
document.querySelectorAll(".crm-nav a").forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelectorAll(".crm-nav a").forEach((x) => x.classList.remove("active"));
    a.classList.add("active");
  });
});
document.querySelectorAll(".segmented button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".segmented").querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// ── Provider ──────────────────────────────────────────────
document.querySelector("#providerContact").addEventListener("click", () => showToast(t("toastProvider")));

// ── Membership ────────────────────────────────────────────
document.querySelectorAll(".tier-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tier = btn.dataset.tier;
    const titles = { luminary: "Apply for Luminary access", sovereign: "Apply for Sovereign access", foundational: "Foundational private enquiry" };
    document.querySelector("#membershipTitle").textContent = titles[tier] || "Apply for access";
    memberDialog.showModal();
    refreshIcons();
  });
});
document.querySelector("#closeMembership").addEventListener("click", () => memberDialog.close());
document.querySelector("#submitMembership").addEventListener("click", () => {
  memberDialog.close();
  showToast(t("toastMembership"));
});

// ── Topbar scroll effect ──────────────────────────────────
window.addEventListener("scroll", () => {
  document.querySelector("#topbar").style.background =
    window.scrollY > 40 ? "rgba(13,12,10,.96)" : "rgba(13,12,10,.88)";
}, { passive: true });

// ── Init ──────────────────────────────────────────────────
function init() {
  applyTranslations();
  renderCenters();
  renderLeads();
  renderPrograms();
  refreshIcons();
}

init();
