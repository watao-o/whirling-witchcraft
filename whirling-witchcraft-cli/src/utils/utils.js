import data from '@/assets/data.json'

/**
 * 調合法カード山札作成
 */
export function getDecks () {
  return data.cardList.map(d => d.cardId)
}

/**
 * 調合法カードデータ取得
 * @param { String } cardId カードID
 */
export function getMixingCardData (cardId) {
  return data.cardList.find(card => card.cardId === cardId)
}

/**
 * 魔女カード山札作成
 */
export function getWitchDecks () {
  return data.witchList.map(d => d.witchId)
}
/**
 * 魔女カードデータ取得
 * @param { String } witchId 魔女ID
 */
export function getWitchCardData (witchId) {
  return data.witchList.find(witch => witch.witchId === witchId)
}

/**
 * ランダム整数生成
 * @param { Number } min 最小値
 * @param { Number } max 最大値
 */
// ランダムなroomId(01~99)を生成する
export function getRandomNum (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
