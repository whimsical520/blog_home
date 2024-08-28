type X_NODE_ENV = typeof process.env.NODE_ENV | 'aquaman'

/** 是否处于服务器渲染 */
export const IS_SERVER = typeof window === 'undefined'
/** 是否debug 模式下 */
export const IS_DEBUG = IS_SERVER ? false : /debug/.test(window.location.href)

/** Y阅接口域名 */
export const YUE_HOST = process.env.mode === 'master' ? 'yue.yy.com' : 'yue-test.yy.com'
/** 新Y阅接口域名 */
export const NEW_YUE_HOST = process.env.mode === 'master' ? 'yyue.yy.com' : 'yyue-test.yy.com'
/** 关注接口域名 */
export const WEB_USER_HOST =
  process.env.mode === 'master' ? 'webuser.yy.com' : 'webuser-test.yy.com'

// eslint-disable-next-line
export const IS_AQUAMAN = (process.env.NODE_ENV as X_NODE_ENV) === 'aquaman'

export const METRICS_CONFIG = {
  app_name: 'yy-ssr-yyue',
  app_ver: '1.0'
  // service_name: ''
}

if (process.env.mode !== 'master') {
  console.debug(process.env.mode)
  console.debug(process.env.NODE_ENV)
}
