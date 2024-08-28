import { fetchers } from '~/js/models/fetchers'
import { BannerInfoItem } from '~/js/models/BannerInfo'
import { EMetricsModelType } from '@yy/node_metrics'

export default async function fetchBannerInfo(pageSize?: number): Promise<BannerInfoItem[]> {
  try {
    const now = Date.now()
    const rs = await fetchers.bannerInfo({
      pageNo: 1,
      pageSize: pageSize || 12
    })
    if (rs && rs.code === 0 && rs?.data?.result?.length > 0) {
      return rs.data.result
    }
    return []
  } catch (error) {
    // TODO:
    console.debug('fetchBannerInfo(): ' + error)
    return []
  }
}
