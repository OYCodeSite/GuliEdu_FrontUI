import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: `/vod/getPlayAuth/${vid}`,
      method: 'get'
    })
  }

}