/**
 * Created by swain on 2019/12/23.
 */
var host = window.location.host;
var config = {
  debug: false,
  ajax: {
    url: 'http://jjhpx.sipac.gov.cn/', // 请求地址
    error: '网络异常'
  },
  isCloud: true,
  fileUrl: 'http://jjhpx.sipac.gov.cn/wwwroot/upload/image/newyear/', // 项目发布路径
  // authUrl: 'http://jjhpx.sipac.gov.cn/wwwroot/upload/image/zhangdan/index.html' // 分享链接
  authUrl: 'http://jjhpx.sipac.gov.cn/wechat/authorize?backurl=http%3A%2F%2Fjjhpx.sipac.gov.cn%2Fwwwroot%2Fupload%2Fimage%2Fzhangdan%2Findex.html'
};

