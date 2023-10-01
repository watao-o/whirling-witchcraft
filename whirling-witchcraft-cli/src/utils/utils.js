import data from '@/assets/data.json'

/**
 * 調合法カードデータ取得
 * @param { String } cardId カードID
 */
export function getMixingCardData(cardId) {
  return data.cardList.find(card => card.cardId === cardId)
}

/**
 * 魔女カードデータ取得
 * @param { String } witchId 魔女ID
 */
export function getWitchCardData(witchId) {
  return data.witchList.find(witch => witch.witchId === witchId)
}
