import { NEW_YUE_HOST } from '~/js/const'
export const ANCHOR_VIDEO_URL = `//${NEW_YUE_HOST}/public/anchor/rela-videos/{anchorYY}`

export interface AnchorVideoRequest {
  anchorYY: number
}

export interface AnchorVideoResponse {
  code: number
  message: string
  data: AnchorVideoItem[]
}

export interface AnchorVideoItem {
  resid: string
  resdesc: string
  resurl: string
  snapshoturl: string
  duration: number
  dpi: string
  addTime: string
  watchCount: number
  likeCount: number
  shareCount: number
  commentCount: number
}
