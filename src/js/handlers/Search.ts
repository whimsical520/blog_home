import { fetchers } from '~/js/models/fetchers'
import { SearchNewItem, SearchMediaItem, SearchResult } from '~/js/models/Search'
import { replaceProtocol } from '~/js/utils'
import { EMetricsModelType } from '@yy/node_metrics'

export default async function fetchSearch(
  index: number = 0,
  keyword: string,
  type: string
): Promise<SearchResult> {
  try {
    const now = Date.now()
    const rs = await fetchers.search({
      index,
      limit: 12,
      keyword,
      type
    })
    if (rs && rs.success) {
      const result: any = { ...rs.resultMap.searchResult }
      let list
      // 搜索新闻
      if (type === '1') {
        list = result.publisherMessages.map((item: any) => {
          if (item.content) {
            item.content = item.content
              .replace(/\\n/g, '')
              .replace(keyword, `<span class='red'>${keyword}</span>`)
          } else if (item.msgDesc) {
            item.content = item.msgDesc.replace(keyword, `<span class='red'>${keyword}</span>`)
          }
          item.msgTitle = item.msgTitle.replace(keyword, `<span class='red'>${keyword}</span>`)
          item.msgImg = item.msgImg ? replaceProtocol(item.msgImg) : ''
          item.content = item.content ? replaceProtocol(item.content) : ''
          item.contentView = item.contentView ? replaceProtocol(item.contentView) : ''
          item.msgImgView = item.msgImgView ? replaceProtocol(item.msgImgView) : ''
          item.msgListImg = item.msgListImg ? replaceProtocol(item.msgListImg) : ''
          item.headImg = item.headImg ? replaceProtocol(item.headImg) : ''
          return item
        })
        return {
          total: rs.resultMap.searchResult.total,
          publisherMessages: list,
          publishers: []
        }
      } else {
        // 媒体下拉刷新
        list = result.publishers
        list.map((item: SearchMediaItem) => {
          item.headImg = item.headImg ? replaceProtocol(item.headImg) : ''
          return item
        })
        return {
          total: rs.resultMap.searchResult.total,
          publisherMessages: [],
          publishers: list
        }
      }
    } else {
      return {
        total: 0,
        publisherMessages: [],
        publishers: []
      }
    }
  } catch (error) {
    // TODO:
    console.debug('fetchSearch(): ' + error)
    return {
      total: 0,
      publisherMessages: [],
      publishers: []
    }
  }
}
