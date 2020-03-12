// const apiURL = 'http://localohost:8080' // DEVELOPMENT
const apiURL = 'https://api.aposto.ch' // PRODUCTION

function $(query) {
  return document.querySelector(query)
}

const serviceCodes = [
  {"value":1003,"label":"Acupressure, par période de 5 minutes"},
  {"value":1004,"label":"Acupuncture, par période de 5 minutes"},
  {"value":1005,"label":"Massage des points d’acupuncture, par période de 5 minutes"},
  {"value":1006,"label":"Technique Alexander, par période de 5 minutes"},
  {"value":1008,"label":"Médécine anthroposophique, traitement/consultation, par période de 5 minutes"},
  {"value":1010,"label":"Aromathérapie, par période de 5 minutes"},
  {"value":1012,"label":"Thérapie respiratoire, par période de 5 minutes"},
  {"value":1013,"label":"Atlaslogie, par période de 5 minutes"},
  {"value":1014,"label":"Audio-psycho-phonologie/Tomatis, par période de 5 minutes"},
  {"value":1017,"label":"Training autogène, par période de 5 minutes"},
  {"value":1021,"label":"Massage ayurvédique, par période de 5 minutes"},
  {"value":1022,"label":"Thérapie des fleurs de Bach, par période de 5 minutes"},
  {"value":1024,"label":"Thérapie par le mouvement (intégrat./cliniq.), par période de 5 minutes"},
  {"value":1025,"label":"Massage du tissu conjonctif, par période de 5 minutes"},
  {"value":1026,"label":"Biofeedback, par période de 5 minutes"},
  {"value":1027,"label":"Biorésonance, par période de 5 minutes"},
  {"value":1028,"label":"Biochimie selon Schüssler, par période de 5 minutes"},
  {"value":1029,"label":"Psychologie biodynamique/Biodynamique, par période de 5 minutes"},
  {"value":1030,"label":"Sangsues, par période de 5 minutes"},
  {"value":1032,"label":"Hydrothérapie du côlon, par période de 5 minutes"},
  {"value":1033,"label":"Massage du côlon, par période de 5 minutes"},
  {"value":1034,"label":"Thérapie crâniosacrale, par période de 5 minutes"},
  {"value":1039,"label":"Électrothérapie, par période de 5 minutes"},
  {"value":1045,"label":"Massage ésalien, par période de 5 minutes"},
  {"value":1047,"label":"Eutonie Gerda Alexander, par période de 5 minutes"},
  {"value":1048,"label":"Chromopuncture, par période de 5 minutes"},
  {"value":1049,"label":"Thérapie par la couleur, par période de 5 minutes"},
  {"value":1050,"label":"Fasciathérapie, par période de 5 minutes"},
  {"value":1051,"label":"Méthode Feldenkrais, par période de 5 minutes"},
  {"value":1052,"label":"Massage des zones réflexes du pied, par période de 5 minutes"},
  {"value":1054,"label":"Yoga thérapie, par période de 5 minutes"},
  {"value":1055,"label":"Eurythmie thérapeutique, par période de 5 minutes"},
  {"value":1056,"label":"Hippothérapie, par période de 5 minutes"},
  {"value":1057,"label":"Homéopathie, par période de 5 minutes"},
  {"value":1058,"label":"Hydrothérapie, par période de 5 minutes"},
  {"value":1060,"label":"Kinésiologie, par période de 5 minutes"},
  {"value":1061,"label":"Thérapie sonore, par période de 5 minutes"},
  {"value":1062,"label":"Massage classique, par période de 5 minutes"},
  {"value":1063,"label":"Thérapie selon Kneipp, par période de 5 minutes"},
  {"value":1064,"label":"Acupuncture par laser, par période de 5 minutes"},
  {"value":1065,"label":"Thérapie par la lumière, par période de 5 minutes"},
  {"value":1066,"label":"Drainage lymphatique (manuel), par période de 5 minutes"},
  {"value":1067,"label":"Magnétothérapie/thérapie par champs magnétiques, par période de 5 minutes"},
  {"value":1068,"label":"Thérapie par la peinture, par période de 5 minutes"},
  {"value":1069,"label":"Mésothérapie, par période de 5 minutes"},
  {"value":1070,"label":"Massage métamorphique, par période de 5 minutes"},
  {"value":1071,"label":"Moxibustion, par période de 5 minutes"},
  {"value":1072,"label":"Musicothérapie, par période de 5 minutes"},
  {"value":1072,"label":"Musicothérapie, par période de 5 minutes"},
  {"value":1076,"label":"Neurofeedback, par période de 5 minutes"},
  {"value":1077,"label":"Acupuncture des oreilles, par période de 5 minutes"},
  {"value":1079,"label":"Otothérapie par les bougies, par période de 5 minutes"},
  {"value":1080,"label":"Formation du mouvement rythmo-organique Medau, par période de 5 minutes"},
  {"value":1081,"label":"Ortho-Bionomy, par période de 5 minutes"},
  {"value":1082,"label":"Thérapie orthomoléculaire, par période de 5 minutes"},
  {"value":1084,"label":"Thérapie par l’ozone, par période de 5 minutes"},
  {"value":1085,"label":"Phytothérapie, par période de 5 minutes"},
  {"value":1087,"label":"Polarité, par période de 5 minutes"},
  {"value":1088,"label":"Intégration posturale, par période de 5 minutes"},
  {"value":1089,"label":"Psychomotricité, par période de 5 minutes"},
  {"value":1091,"label":"Thérapie de théâtre de marionnettes, par période de 5 minutes"},
  {"value":1092,"label":"Qi Gong, par période de 5 minutes"},
  {"value":1093,"label":"Rééquilibration, par période de 5 minutes"},
  {"value":1094,"label":"Thérapie par nouvelle naissance, par période de 5 minutes"},
  {"value":1096,"label":"Reiki, par période de 5 minutes"},
  {"value":1097,"label":"Rolfing/intégration structurelle, par période de 5 minutes"},
  {"value":1098,"label":"Massages rythmiques anthrop., par période de 5 minutes"},
  {"value":1100,"label":"Shiatsu, par période de 5 minutes"},
  {"value":1102,"label":"Sophrologie, par période de 5 minutes"},
  {"value":1104,"label":"Thérapie Sumathu, par période de 5 minutes"},
  {"value":1105,"label":"Sympathicothérapie, par période de 5 minutes"},
  {"value":1106,"label":"Tai Chi, par période de 5 minutes"},
  {"value":1111,"label":"Massage thaï, par période de 5 minutes"},
  {"value":1114,"label":"Médecine tibétaine, traitement/consultation, par période de 5 minutes"},
  {"value":1115,"label":"Touch for Health, par période de 5 minutes"},
  {"value":1117,"label":"Massage selon Trager, par période de 5 minutes"},
  {"value":1120,"label":"Vitalpratique selon Vuille, par période de 5 minutes"},
  {"value":1121,"label":"Cataplasmes/enveloppements/fango, par période de 5 minutes"},
  {"value":1122,"label":"Équilibration vertébrale, par période de 5 minutes"},
  {"value":1123,"label":"Zilgrei, par période de 5 minutes"},
  {"value":1131,"label":"Thérapie à médiation plastique, par période de 5 minutes"},
  {"value":1132,"label":"Thérapie intermédiale, par période de 5 minutes"},
  {"value":1134,"label":"Réflexothérapie, par période de 5 minutes"},
  {"value":1140,"label":"Microkinésithérapie"},
  {"value":1141,"label":"Thérapie Dorn/Breuss, par période de 5 minutes"},
  {"value":1142,"label":"Spagyrie, par période de 5 minutes"},
  {"value":1200,"label":"anamnèse / bilan / diagnostique / constatations médicales, par période de 5 minutes"},
  {"value":1202,"label":"Art de parole thérapeutique, par période de 5 minutes"},
  {"value":1203,"label":"Ostéopathie, par période de 5 minutes"},
  {"value":1204,"label":"Etiopathie, par période de 5 minutes"},
  {"value":1205,"label":"Méthodes de détoxication, par période de 5 minutess"},
  {"value":1206,"label":"thérapie nutritionnelle, par période de 5 minutes"},
  {"value":1207,"label":"Thérapie de l'ordre / Diététique, par période de 5 minutes"},
  {"value":1210,"label":"Spiraldynamik, par période de 5 minutes"},
].sort((a,b) => a.value - b.value)
