"use strict";

var IOCCodes = function () {
  var countries = "Afghanistan AFG\nAlbania - ALB\nAlgeria - ALG\nAmerican Samoa - ASA\nAndorra - AND\nAngola - ANG\nAntigua and Barbuda - ANT\nArgentina - ARG\nArmenia - ARM\nAruba - ARU\nAustralia - AUS\nAustria - AUT\nAzerbaijan - AZE\nThe Bahamas - BAH\nBahrain - BRN\nBangladesh - BAN\nBarbados - BAR\nBelarus - BLR\nBelgium - BEL\nBelize - BIZ\nBermuda - BER\nBenin - BEN\nBhutan - BHU\nBolivia - BOL\nBosnia and Herzegovina - BIH\nBotswana - BOT\nBrazil - BRA\nBritish Virgin Islands - IVB\nBrunei - BRU\nBulgaria - BUL\nBurkina Faso - BUR\nBurundi - BDI\nCambodia - CAM\nCameroon - CMR\nCanada - CAN\nCape Verde - CPV\nCayman Islands - CAY\nCentral African Republic - CAF\nChad - CHA\nChile - CHI\nChina - CHN\nColombia - COL\nComoros - COM\nCongo, Republic of the - CGO\nCongo, Democratic Republic of the - COD\nCook Islands - COK\nCosta Rica - CRC\nCote d\u2019Ivoire - CIV\nCroatia - CRO\nCuba - CUB\nCyprus - CYP\nCzech Republic - CZE\nDenmark - DEN\nDjibouti - DJI\nDominica - DMA\nDominican Republic - DOM\nEast Timor (Timor-Leste) - TLS\nEcuador - ECU\nEgypt - EGY\nEl Salvador - ESA\nEquatorial Guinea - GEQ\nEritrea - ERI\nEstonia - EST\nEthiopia - ETH\nFiji - FIJ\nFinland - FIN\nFrance - FRA\nGabon - GAB\nThe Gambia - GAM\nGeorgia - GEO\nGermany - GER\nGhana - GHA\nGreece - GRE\nGrenada - GRN\nGuam - GUM\nGuatemala - GUA\nGuinea - GUI\nGuinea-Bissau - GBS\nGuyana - GUY\nHaiti - HAI\nHonduras - HON\nHong Kong - HKG\nHungary - HUN\nIceland - ISL\nIndia - IND\nIndonesia - INA\nIran - IRI\nIraq - IRQ\nIreland - IRL\nIsrael - ISR\nItaly - ITA\nJamaica - JAM\nJapan - JPN\nJordan - JOR\nKazakhstan - KAZ\nKenya - KEN\nKorea, North (PDR of Korea) - PRK\nKorea, South - KOR\nKuwait - KUW\nKyrgyzstan - KGZ\nLaos - LAO\nLatvia - LAT\nLebanon - LIB\nLesotho - LES\nLiberia - LBR\nLibya - LBA\nLiechtenstein - LIE\nLithuania - LTU\nLuxembourg - LUX\nMacedonia - MKD\nMadagascar - MAD\nMalawi - MAW\nMalaysia - MAS\nMaldives - MDV\nMali - MLI\nMalta - MLT\nMauritania - MTN\nMauritius - MRI\nMexico - MEX\nFederated States of Micronesia - FSM\nMoldova - MDA\nMonaco - MON\nMongolia - MGL\nMorocco - MAR\nMozambique - MOZ\nMyanmar (Burma) - MYA\nNamibia - NAM\nNauru - NRU\nNepal - NEP\nNetherlands - NED\nNetherlands Antilles - AHO\nNew Zealand - NZL\nNicaragua - NCA\nNiger - NIG\nNigeria - NGR\nNorway - NOR\nOman - OMA\nPakistan - PAK\nPalau - PLW\nPalestine - PLE\nPanama - PAN\nPapua New Guinea - PNG\nParaguay - PAR\nPeru - PER\nPhilippines - PHI\nPoland - POL\nPortugal - POR\nPuerto Rico - PUR\nQatar - QAT\nRomania - ROM\nRussian Federation - RUS\nRwanda - RWA\nSaint Kitts and Nevis - SKN\nSaint Lucia - LCA\nSaint Vincent and the Grenadines - VIN\nSamoa - SAM\nSan Marino - SMR\nSao Tome and Principe - STP\nSaudi Arabia - KSA\nSenegal - SEN\nSerbia and Montenegro - SCG\nSeychelles - SEY\nSierra Leone - SLE\nSingapore - SIN\nSlovakia - SVK\nSlovenia - SLO\nSolomon Islands - SOL\nSomalia - SOM\nSouth Africa - RSA\nSpain - ESP\nSri Lanka - SRI\nSudan - SUD\nSuriname - SUR\nSwaziland - SW\nSweden - SWE\nSwitzerland - SUI\nSyria - SYR\nTaiwan (Chinese Taipei) - TPE\nTajikistan - TJK\nTanzania - TAN\nThailand - THA\nTogo - TOG\nTonga - TGA\nTrinidad and Tobago - TRI\nTunisia - TUN\nTurkey - TUR\nTurkmenistan - TKM\nUganda - UGA\nUkraine - UKR\nUnited Arab Emirates - UAE\nUnited Kingdom (Great Britain) - GBR\nUnited States - USA\nUruguay - URU\nUzbekistan - UZB\nVanuatu - VAN\nVenezuela - VEN\nVietnam - VIE\nVirgin Islands - ISV\nYemen - YEM\nZambia - ZAM\nZimbabwe - ZIM";

  var countriesArray = countries.split("\n");
  var countriesObject = {};
  var regex = /\s\-\s/g;

  for (var i = 0; i < countriesArray.length; i++) {
    var countryTemp = countriesArray[i].split(regex);
    countriesObject[countryTemp[1]] = countryTemp[0];
  }

  var IOCCodes = {
    name: function name(code) {
      return countriesObject[code];
    }
  };
  return IOCCodes;
}();
