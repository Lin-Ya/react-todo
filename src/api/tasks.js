import request from '../utils/request'

/**
 * 根据任务列表类型获取所有task
 * @param type
 * @returns {AxiosPromise}
 */
export function getTasks (type) {
  return request({
    url: '/api/tasks',
    method: 'get',
    params: {
      taskType: type
    }
  })
}
