let url = {
  swiperLists: '/swiperList',
  productLists: '/productList',
  partnerList: '/partnerList',
  expertList: '/expertList',
  contactList: '/contactList',
  producDetailtList: '/producDetailtList'
}

// 开发环境和生产环境的切换
let host = 'http://localhost:5277/web'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
