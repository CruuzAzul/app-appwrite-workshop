const decryptMap = {
  IITK2E: 'Nantes',
  OEJ0DJ: 'Toulouse',
  MEO312: 'Strasbourg',
  BA342H: 'Lille',
  MP0909: 'Paris',
  JI93JZ: 'Lyon',
  QAPZE3: 'Grenoble',
  O0121S: 'Rennes',
  POA123: 'Nice',
  MLMLM2: 'Marseille',
};

export const decrypt = (textToDecrypt) => {
  return decryptMap[textToDecrypt];
};
