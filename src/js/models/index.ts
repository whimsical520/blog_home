import Fetcher from '@yy/fetcher'
import { TDK_MSG_URL, TdkMsgRequest, TdkMsgResponse } from './TdkMsg'
import { BANNER_INFO_URL, BannerInfoRequest, BannerInfoResponse } from './BannerInfo'
import { TOPIC_MSG_URL, TopicMsgResponse } from './TopicMsg'
import { FOCUS_ANCHOR_URL, FocusAnchorResponse } from './FocusAnchor'
import {
  RECOMMEND_TOPIC_URL,
  RecommendTopicRequest,
  RecommendTopicResponse
} from './RecommendTopic'
import { HOT_RANK_LIST_URL, HotRankListRequest, HotRankListResponse } from './HotRankList'
import { TODAY_NEWS_URL, TodayNewsRequest, TodayNewsResponse } from './TodayNews'
import { TOPIC_ALL_URL, TopicAllRequest, TopicAllResponse } from './TopicAll'
import {
  SPECIAL_TOPIC_MSG_URL,
  SpecialTopicMsgRequest,
  SpecialTopicMsgResponse
} from './SpecialTopicMsg'
import {
  PUBLISHER_INFO_URL,
  PublisherInfoRequest,
  PublisherInfoResponse
} from './Publisher/PublisherInfo'
import {
  PUBLISHER_MSG_URL,
  PublisherMsgRequest,
  PublisherMsgResponse
} from './Publisher/PublisherMsg'
import { SEARCH_URL, SearchRequest, SearchResponse } from './Search'
import {
  ANCHOR_SUB_STATUS_URL,
  AnchorSubStatusRequest,
  AnchorSubStatusResponse
} from './Detail/AnchorSubStatu'
import {
  ARTICLE_SUBSCRIBE_URL,
  ArticleSubscribeRequest,
  ArticleSubscribeResponse
} from './Detail/AnchorSubscribe'
import { ANCHOR_VIDEO_URL, AnchorVideoRequest, AnchorVideoResponse } from './Detail/AnchorVideo'
import { VIDEO_URL, VideoRequest, VideoResponse } from './Video'
import { PRAISE_URL, PraiseCommonRequest, PraiseCommonResponse } from './Praise'
import {
  ARTICLE_DETAIL_URL,
  ArticleDetailRequest,
  ArticleDetailResponse
} from './Detail/ArticleDetail'
import { ARTICLE_READ_URL, ArticleReadRequest, ArticleReadResponse } from './Detail/ArticleRead'
import {
  ANCHOR_ARTICLE_URL,
  AnchorArticleRequest,
  AnchorArticleResponse
} from './Detail/AnchorArticle'

export interface ApiModels {
  tdkMsg: {
    res: TdkMsgResponse
    req: TdkMsgRequest
  }
  bannerInfo: {
    res: BannerInfoResponse
    req: BannerInfoRequest
  }
  topicMsg: {
    res: TopicMsgResponse
  }
  focusAnchor: {
    res: FocusAnchorResponse
  }
  recommendTopic: {
    res: RecommendTopicResponse
    req: RecommendTopicRequest
  }
  hotRankList: {
    res: HotRankListResponse
    req: HotRankListRequest
  }
  todayNews: {
    res: TodayNewsResponse
    req: TodayNewsRequest
  }
  topicAll: {
    res: TopicAllResponse
    req: TopicAllRequest
  }
  specialTopic: {
    res: SpecialTopicMsgResponse
    req: SpecialTopicMsgRequest
  }
  publisherInfo: {
    res: PublisherInfoResponse
    req: PublisherInfoRequest
  }
  publisherMsg: {
    res: PublisherMsgResponse
    req: PublisherMsgRequest
  }
  search: {
    res: SearchResponse
    req: SearchRequest
  }
  anchorSubStatu: {
    res: AnchorSubStatusResponse
    req: AnchorSubStatusRequest
  }
  anchorSubscribe: {
    res: ArticleSubscribeResponse
    req: ArticleSubscribeRequest
  }
  anchorVideo: {
    res: AnchorVideoResponse
    req: AnchorVideoRequest
  }
  video: {
    res: VideoResponse
    req: VideoRequest
  }
  praiseArticle: {
    res: PraiseCommonResponse
    req: PraiseCommonRequest
  }
  articleDetail: {
    res: ArticleDetailResponse
    req: ArticleDetailRequest
  }
  articleRead: {
    res: ArticleReadResponse
    req: ArticleReadRequest
  }
  anchorArticle: {
    res: AnchorArticleResponse
    req: AnchorArticleRequest
  }
}

export const getFetchers = (fetcher: Fetcher) => {
  return {
    // 获取tdk
    tdkMsg: (req?: ApiModels['tdkMsg']['req']) => {
      return fetcher.get(TDK_MSG_URL, req) as Promise<ApiModels['tdkMsg']['res']>
    },
    // 获取主播首页banner信息
    bannerInfo: (req?: ApiModels['bannerInfo']['req']) => {
      return fetcher.get(BANNER_INFO_URL, req) as Promise<ApiModels['bannerInfo']['res']>
    },
    // 获取首页话题列表信息
    topicMsg: () => {
      if (typeof window === 'undefined') {
        return fetcher.get(TOPIC_MSG_URL, undefined, { timeout: 2000 }) as Promise<
          ApiModels['topicMsg']['res']
        >
      } else {
        return fetcher.get(TOPIC_MSG_URL) as Promise<ApiModels['topicMsg']['res']>
      }
    },
    // 获取焦点主播
    focusAnchor: () => {
      return fetcher.get(FOCUS_ANCHOR_URL) as Promise<ApiModels['focusAnchor']['res']>
    },
    // 获取24小时热榜
    hotRankList: (req?: ApiModels['hotRankList']['req']) => {
      return fetcher.get(HOT_RANK_LIST_URL, req) as Promise<ApiModels['hotRankList']['res']>
    },
    // 获取详情-今日头条
    todayNews: (req?: ApiModels['todayNews']['req']) => {
      return fetcher.get(TODAY_NEWS_URL, req) as Promise<ApiModels['todayNews']['res']>
    },
    // 获取全部专题 / 详情-最新消息(startDateStr传0)
    topicAll: (req?: ApiModels['topicAll']['req']) => {
      return fetcher.get(TOPIC_ALL_URL, req) as Promise<ApiModels['topicAll']['res']>
    },
    // 获取指定专题
    specialTopic: (req?: ApiModels['specialTopic']['req']) => {
      return fetcher.get(SPECIAL_TOPIC_MSG_URL, req) as Promise<ApiModels['specialTopic']['res']>
    },
    // 获取发布者信息
    publisherInfo: (req?: ApiModels['publisherInfo']['req']) => {
      return fetcher.get(PUBLISHER_INFO_URL, req) as Promise<ApiModels['publisherInfo']['res']>
    },
    // 获取发布者发布的新闻
    publisherMsg: (req?: ApiModels['publisherMsg']['req']) => {
      return fetcher.get(PUBLISHER_MSG_URL, req) as Promise<ApiModels['publisherMsg']['res']>
    },
    // 获取搜索的新闻
    search: (req?: ApiModels['search']['req']) => {
      return fetcher.get(SEARCH_URL, req) as Promise<ApiModels['search']['res']>
    },
    // 获取主播被订阅状态
    anchorSubStatu: (req?: ApiModels['anchorSubStatu']['req']) => {
      return fetcher.get(ANCHOR_SUB_STATUS_URL, req) as Promise<ApiModels['anchorSubStatu']['res']>
    },
    // 关注主播
    anchorSubscribe: async (req: ApiModels['anchorSubscribe']['req']) => {
      return fetcher.get(
        ARTICLE_SUBSCRIBE_URL.replace('{anchorYY}', req.anchorYY.toString())
      ) as Promise<ApiModels['anchorSubscribe']['res']>
    },
    // 主播相关视频
    anchorVideo: (req: ApiModels['anchorVideo']['req']) => {
      return fetcher.get(
        ANCHOR_VIDEO_URL.replace('{anchorYY}', req.anchorYY.toString())
      ) as Promise<ApiModels['anchorVideo']['res']>
    },
    // 获取文章详情的视频
    video: (req: ApiModels['video']['req']) => {
      const param = {
        vformat: 'mp4',
        token: 'undefined',
        sign: 'vodessence',
        vid: req.vid
      }
      return fetcher.get(VIDEO_URL, param) as Promise<ApiModels['video']['res']>
    },
    // 点赞文章
    praiseArticle: (req: ApiModels['praiseArticle']['req']) => {
      return fetcher.get(PRAISE_URL.replace('{msgId}', req.msgId.toString())) as Promise<
        ApiModels['praiseArticle']['res']
      >
    },
    // 查询推荐专题
    recommendTopic: (req?: ApiModels['recommendTopic']['req']) => {
      return fetcher.get(RECOMMEND_TOPIC_URL, req) as Promise<ApiModels['recommendTopic']['res']>
    },
    // web文章详情
    articleDetail: (req: ApiModels['articleDetail']['req']) => {
      return fetcher.get(ARTICLE_DETAIL_URL.replace('{msgId}', req.msgId.toString())) as Promise<
        ApiModels['articleDetail']['res']
      >
    },
    // 文章阅读
    articleRead: (req: ApiModels['articleRead']['req']) => {
      return fetcher.get(ARTICLE_READ_URL.replace('{msgId}', req.msgId.toString())) as Promise<
        ApiModels['articleRead']['res']
      >
    },
    // 获取主播资讯文章
    anchorArticle: (req: ApiModels['anchorArticle']['req']) => {
      return fetcher.get(
        ANCHOR_ARTICLE_URL.replace('{anchorYY}', req.anchorYY.toString())
          .replace('{pageNo}', req.pageNo.toString())
          .replace('{limit}', req.limit.toString())
      ) as Promise<ApiModels['anchorArticle']['res']>
    }
  }
}
