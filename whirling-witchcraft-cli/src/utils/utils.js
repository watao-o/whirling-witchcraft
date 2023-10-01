import data from '@/assets/data.json'
/**
 * 調合法カードデータ取得
 * @param { String } cardId カードID
 */
export function getMixingCardData(cardId) {
  console.log('共通関数：調合法カードデータ取得')
  return data.cardList.find(card => card.cardId === cardId)
}