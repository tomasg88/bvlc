import { ActiveForcePerson, ComisionPerson } from 'types/News';
import { find, orderBy, groupBy, Dictionary } from 'lodash';
import { RANKS, POSITIONS } from './constants';

/**
 * Used for Cuerpo Activo jerarchies
 */
const orderRanks = {
  'jefe-del-cuerpo': 1,
  'segundo-jefe-del-cuerpo': 2,
  'comandante-general': 3,
  'comandante-mayor': 4,
  comandante: 5,
  subcomandante: 6,
  'oficial-principal': 7,
  'oficial-inspector': 8,
  'oficial-ayudante': 9,
  'suboficial-mayor': 10,
  'suboficial-principal': 11,
  'suboficial-primero': 12,
  'sargento-primero': 13,
  sargento: 14,
  'cabo-primero': 15,
  cabo: 16,
  bombero: 17,
  aspirante: 18,
};

/**
 * Used for Comisión Directiva positions
 */
const orderPositions = {
  presidente: 1,
  'vice-presidente': 2,
  secretario: 3,
  'pro-secretario': 4,
  tesorero: 5,
  'pro-tesorero': 6,
  'vocal-titular': 7,
  'vocal-suplente': 8,
  'cuentas-titular': 9,
  'cuentas-suplente': 10,
};

type MembersList = {
  getTranslation: (K: string) => string;
  orderedList: Dictionary<ActiveForcePerson[] | ComisionPerson[]>;
};

const groupAndOrderPosition = (list: ComisionPerson[]) => {
  const getTranslatedPositions = (value) => find(POSITIONS, { value })?.title;
  const orderByPosition = orderBy(list, (l) => orderPositions[l.position]);
  return {
    orderedList: groupBy(orderByPosition, 'position'),
    getTranslation: getTranslatedPositions,
  };
};

const groupAndOrderRanks = (list: ActiveForcePerson[]) => {
  const getTranslatedRanks = (value) => find(RANKS, { value })?.title;
  const orderByRank = orderBy(list, (l) => orderRanks[l.rank]);

  return { orderedList: groupBy(orderByRank, 'rank'), getTranslation: getTranslatedRanks };
};

export default function groupAndOrder(
  listName: 'position' | 'rank',
  list: ActiveForcePerson[] | ComisionPerson[]
): MembersList {
  let result;
  if (listName === 'position') {
    result = groupAndOrderPosition(list as ComisionPerson[]);
  } else {
    result = groupAndOrderRanks(list as ActiveForcePerson[]);
  }
  return result;
}
