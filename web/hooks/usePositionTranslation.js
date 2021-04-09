import {find, orderBy} from 'lodash'

const positions = [
  {title: 'Presidente', value: 'presidente'},
  {title: 'Vice Presidente', value: 'vice-presidente'},
  {title: 'Secretario', value: 'secretario'},
  {title: 'Pro secretario', value: 'pro-secretario'},
  {title: 'Tesorero', value: 'tesorero'},
  {title: 'Pro tesorero', value: 'pro-tesorero'},
  {title: 'Vocal Titular', value: 'vocal-titular'},
  {title: 'Vocal Suplente', value: 'vocal-suplente'},
  {title: 'Rev. de Ctas. Titular', value: 'cuentas-titular'},
  {title: 'Rev. de Ctas. Suplente', value: 'cuentas-suplente'}
]

const ranks = [
  {title: 'Comandante General', value: 'comandante-general'},   
  {title: 'Comandante', value: 'comandante'},                   
  {title: 'Subcomandante', value: 'subcomandante'},
  {title: 'Oficial', value: 'oficial'},
  {title: 'Suboficial', value: 'suboficial'},
  {title: 'Sargento', value: 'sargento'},
  {title: 'Cabo', value: 'cabo'},
  {title: 'Bombero', value: 'bombero'},
  {title: 'Aspirante', value: 'aspirante'},
  {title: 'Cadete', value: 'cadete'}
]

const orderRanks = {
  'comandante-general': 1,
  'comandante': 2,
  'subcomandante': 3,
  'oficial': 4,
  'suboficial': 5,
  'sargento': 6,
  'cabo': 7,
  'bombero': 8,
  'aspirante': 9,
  'cadete': 10,
}
const orderPositions = {
  'presidente': 1,
  'vice-presidente': 2,
  'secretario': 3,
  'pro-secretario': 4,
  'tesorero': 5,
  'pro-tesorero': 6,
  'vocal-titular': 7,
  'vocal-suplente': 8,
  'cuentas-titular': 9,
  'cuentas-suplente': 10,
}

export default function usePositionTranslation(listName, list) {

  // Funcion para traducir valores
  const getTranslatedPositions = (value) => find(positions, { value }).title;
  const getTranslatedRanks = (value) => find(ranks, { value }).title;

  // Funcion para ordernar listas
  const orderByRank = orderBy(list, o => orderRanks[o.rank]);
  const orderByPosition = orderBy(list, o => orderPositions[o.position]);
  
  const orderedList = listName === 'rank'? orderByRank : orderByPosition
  const getTranslation = listName === 'rank'? getTranslatedRanks : getTranslatedPositions;

  return { orderedList, getTranslation }
}
