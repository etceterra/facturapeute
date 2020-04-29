export function getServiceLightLabel(code) {
  const match = serviceCodes.find(serviceCode => serviceCode.value === code)

  return match ? match.lightLabel : ''
}

export function getDurationLabel(duration) {
  if (duration < 60)
    return `${duration}'`

  const durationHours = Math.floor(duration / 60)
  const durationMinutes = Math.round(((duration / 60) - durationHours) * 60)

  return `${durationHours}h${durationMinutes || ''}`
}

export function getCantonOptions() {
  return [
    { value: '', label: '' },
    ...cantons.map(canton => ({ value: canton, label: canton }))
  ]
}

export function getGenderOptions() {
  return [
    { value: '', label: '' },
    { value: 'male', label: 'Homme' },
    { value: 'female', label: 'Femme' }
  ]
}

export function isAuthorValid(author) {
  return author.name && author.street && author.ZIP && author.city &&
    isEmailValid(author.email) && author.phone && author.RCC && author.GLN
}

export function isTherapistValid(therapist) {
  return therapist.firstName && therapist.lastName && therapist.street && therapist.ZIP &&
    therapist.city && therapist.phone && therapist.RCC && therapist.GLN
}

export function isServicePriceValid(servicePrice) {
  return servicePrice > 0
}

export function isPreferedServicesValid(preferedServices) {
  return preferedServices.length
}

function isEmailValid(email) {
  return email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/)
}

export const serviceCodes = [
  { value: 1003, lightLabel: 'Acupressure' },
  { value: 1004, lightLabel: 'Acupuncture' },
  { value: 1005, lightLabel: 'Massage des points d’acupuncture' },
  { value: 1006, lightLabel: 'Technique Alexander' },
  {
    value: 1008,
    lightLabel: 'Médécine anthroposophique, traitement/consultation'
  },
  { value: 1010, lightLabel: 'Aromathérapie' },
  { value: 1012, lightLabel: 'Thérapie respiratoire' },
  { value: 1013, lightLabel: 'Atlaslogie' },
  { value: 1014, lightLabel: 'Audio-psycho-phonologie/Tomatis' },
  { value: 1017, lightLabel: 'Training autogène' },
  { value: 1021, lightLabel: 'Massage ayurvédique' },
  { value: 1022, lightLabel: 'Thérapie des fleurs de Bach' },
  { value: 1024, lightLabel: 'Thérapie par le mouvement (intégrat./cliniq.)' },
  { value: 1025, lightLabel: 'Massage du tissu conjonctif' },
  { value: 1026, lightLabel: 'Biofeedback' },
  { value: 1027, lightLabel: 'Biorésonance' },
  { value: 1028, lightLabel: 'Biochimie selon Schüssler' },
  { value: 1029, lightLabel: 'Psychologie biodynamique/Biodynamique' },
  { value: 1030, lightLabel: 'Sangsues' },
  { value: 1032, lightLabel: 'Hydrothérapie du côlon' },
  { value: 1033, lightLabel: 'Massage du côlon' },
  { value: 1034, lightLabel: 'Thérapie crâniosacrale' },
  { value: 1039, lightLabel: 'Électrothérapie' },
  { value: 1045, lightLabel: 'Massage ésalien' },
  { value: 1047, lightLabel: 'Eutonie Gerda Alexander' },
  { value: 1048, lightLabel: 'Chromopuncture' },
  { value: 1049, lightLabel: 'Thérapie par la couleur' },
  { value: 1050, lightLabel: 'Fasciathérapie' },
  { value: 1051, lightLabel: 'Méthode Feldenkrais' },
  { value: 1052, lightLabel: 'Massage des zones réflexes du pied' },
  { value: 1054, lightLabel: 'Yoga thérapie' },
  { value: 1055, lightLabel: 'Eurythmie thérapeutique' },
  { value: 1056, lightLabel: 'Hippothérapie' },
  { value: 1057, lightLabel: 'Homéopathie' },
  { value: 1058, lightLabel: 'Hydrothérapie' },
  { value: 1060, lightLabel: 'Kinésiologie' },
  { value: 1061, lightLabel: 'Thérapie sonore' },
  { value: 1062, lightLabel: 'Massage classique' },
  { value: 1063, lightLabel: 'Thérapie selon Kneipp' },
  { value: 1064, lightLabel: 'Acupuncture par laser' },
  { value: 1065, lightLabel: 'Thérapie par la lumière' },
  { value: 1066, lightLabel: 'Drainage lymphatique (manuel)' },
  {
    value: 1067,
    lightLabel: 'Magnétothérapie/thérapie par champs magnétiques'
  },
  { value: 1068, lightLabel: 'Thérapie par la peinture' },
  { value: 1069, lightLabel: 'Mésothérapie' },
  { value: 1070, lightLabel: 'Massage métamorphique' },
  { value: 1071, lightLabel: 'Moxibustion' },
  { value: 1072, lightLabel: 'Musicothérapie' },
  { value: 1072, lightLabel: 'Musicothérapie' },
  { value: 1076, lightLabel: 'Neurofeedback' },
  { value: 1077, lightLabel: 'Acupuncture des oreilles' },
  { value: 1079, lightLabel: 'Otothérapie par les bougies' },
  { value: 1080, lightLabel: 'Formation du mouvement rythmo-organique Medau' },
  { value: 1081, lightLabel: 'Ortho-Bionomy' },
  { value: 1082, lightLabel: 'Thérapie orthomoléculaire' },
  { value: 1084, lightLabel: 'Thérapie par l’ozone' },
  { value: 1085, lightLabel: 'Phytothérapie' },
  { value: 1087, lightLabel: 'Polarité' },
  { value: 1088, lightLabel: 'Intégration posturale' },
  { value: 1089, lightLabel: 'Psychomotricité' },
  { value: 1091, lightLabel: 'Thérapie de théâtre de marionnettes' },
  { value: 1092, lightLabel: 'Qi Gong' },
  { value: 1093, lightLabel: 'Rééquilibration' },
  { value: 1094, lightLabel: 'Thérapie par nouvelle naissance' },
  { value: 1096, lightLabel: 'Reiki' },
  { value: 1097, lightLabel: 'Rolfing/intégration structurelle' },
  { value: 1098, lightLabel: 'Massages rythmiques anthrop.' },
  { value: 1100, lightLabel: 'Shiatsu' },
  { value: 1102, lightLabel: 'Sophrologie' },
  { value: 1104, lightLabel: 'Thérapie Sumathu' },
  { value: 1105, lightLabel: 'Sympathicothérapie' },
  { value: 1106, lightLabel: 'Tai Chi' },
  { value: 1111, lightLabel: 'Massage thaï' },
  { value: 1114, lightLabel: 'Médecine tibétaine, traitement/consultation' },
  { value: 1115, lightLabel: 'Touch for Health' },
  { value: 1117, lightLabel: 'Massage selon Trager' },
  { value: 1120, lightLabel: 'Vitalpratique selon Vuille' },
  { value: 1121, lightLabel: 'Cataplasmes/enveloppements/fango' },
  { value: 1122, lightLabel: 'Équilibration vertébrale' },
  { value: 1123, lightLabel: 'Zilgrei' },
  { value: 1131, lightLabel: 'Thérapie à médiation plastique' },
  { value: 1132, lightLabel: 'Thérapie intermédiale' },
  { value: 1134, lightLabel: 'Réflexothérapie' },
  { value: 1140, lightLabel: 'Microkinésithérapie' },
  { value: 1141, lightLabel: 'Thérapie Dorn/Breuss' },
  { value: 1142, lightLabel: 'Spagyrie' },
  {
    value: 1200,
    lightLabel: 'Anamnèse'
  },
  { value: 1202, lightLabel: 'Art de parole thérapeutique' },
  { value: 1203, lightLabel: 'Ostéopathie' },
  { value: 1204, lightLabel: 'Etiopathie' },
  { value: 1205, lightLabel: 'Méthodes de détoxication, par période de 5 minutess' },
  { value: 1206, lightLabel: 'Thérapie nutritionnelle' },
  { value: 1207, lightLabel: "Thérapie de l'ordre / Diététique" },
  { value: 1210, lightLabel: 'Spiraldynamik' }
].sort((a, b) => a.value - b.value)

const cantons = [
  'AG',
  'AI',
  'AR',
  'BE',
  'BL',
  'BS',
  'FR',
  'GE',
  'GL',
  'GR',
  'JU',
  'LU',
  'NE',
  'NW',
  'OW',
  'SG',
  'SH',
  'SO',
  'SZ',
  'TI',
  'TG',
  'UR',
  'VD',
  'VS',
  'ZG',
  'ZH',
  'LI',
  'A',
  'D',
  'F',
  'I'
]

export const serviceColors = [
  '#f46d6d',
  '#75b79e',
  '#f8a978',
  '#424874',
  '#baabda',
  '#679b9b',
  '#856c8b',
  '#a8d3da',
  '#d77fa1',
  '#6e5773'
]
