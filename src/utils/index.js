function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
export function toBottom() {
  if (mpvuePlatform === "wx") {
    var query = wx.createSelectorQuery();
    query.select("#bottom").boundingClientRect();
    query.exec(ele => {
      var e = ele[0];
      wx.pageScrollTo({
        scrollTop: e.bottom + e.top,
        duration: 700
      });
    });
  } else {
    var query = swan.createSelectorQuery();
    query.select("#bottom").boundingClientRect();
    query.exec(ele => {
      var e = ele[0];
      swan.pageScrollTo({
        scrollTop: e.bottom + e.top,
        duration: 700
      });
    });
  }

}
export default {
  formatNumber,
  formatTime,
  toBottom
}
