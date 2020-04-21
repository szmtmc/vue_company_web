let url = {
  bannerLists: '/bannerimg',
  productLists: '/productList',
  partnerList: '/partnerList',
  expertList: '/expertList',
  contactList: '/contactList',
  producDetailtList: '/producDetailtList'
}

// 开发环境和生产环境的切换
let host = 'http://rap2.taobao.org:38080/app/mock/247553'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
