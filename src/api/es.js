import request from '@/utils/request'

export function esList() {
  return request({
    url: '/v1/es_des/id',
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
