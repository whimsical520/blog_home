import Fetcher from '@yy/fetcher'
import { getFetchers } from './index'

export const fetcher = new Fetcher({
  paths: {},
  axiosConfig: {
    withCredentials: true,
    timeout: typeof window === 'undefined' ? 300 : 5000
  }
})

if (typeof window === 'undefined') {
  fetcher.instance.interceptors.request.use((config: any) => {
    if (/^\/\/[a-zA-Z0-9]/.test(config.url)) {
      config.url = 'http:' + config.url
    }
    return config
  })
}

export const fetchers = {
  ...getFetchers(fetcher)
}
