import request from '@/utils/request'

export function esList() {
  return request({
    url: 'http://127.0.0.1:5000/dev-api/v1/es_des/deslist',
    method: 'get'
  })
}

export function esEdit(data) {
  return request({
    url: '/v1/es_des/edit',
    method: 'post',
    data
  })
}
