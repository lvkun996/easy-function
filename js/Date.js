// 获取距离明天的秒数
const getSecondsTomorrow = () => {
    let now = new Date()
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    let diff = tomorrow - now
    return Math.round(diff / 1000)
 }
  