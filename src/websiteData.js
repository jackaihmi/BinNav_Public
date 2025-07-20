// 网站数据 - 通过管理后台更新于 2025/7/20 14:36:21

// 站点配置
export const siteConfig = {
  "siteName": "BinNav",
  "siteTitle": "导航",
  "siteLogo": "/assets/logo.png",
  "siteDescription": "二进制导航页面，精选优质站点",
  "icpRecord": "",
  "publicSecurityRecord": "",
  "publicSecurityRecordUrl": ""
};

export const websiteData = [
  {
    "id": 1752936216034,
    "name": "GitHub Proxy",
    "description": "",
    "url": "https://githubjs.jackaihmi.dpdns.org",
    "category": "category_1752936127444",
    "tags": [
      "免费",
      "工具"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=githubjs.jackaihmi.dpdns.org"
  },
  {
    "id": 1752936280941,
    "name": "订阅转换",
    "description": "",
    "url": "https://conv.aihmi.nyc.mn",
    "category": "category_1752936127444",
    "tags": [
      "免费",
      "工具"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=conv.aihmi.nyc.mn"
  },
  {
    "id": 1752936332998,
    "name": "DockerHub",
    "description": "",
    "url": "https://docker.aihmi.nyc.mn",
    "category": "category_1752936127444",
    "tags": [
      "免费",
      "工具"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=docker.aihmi.nyc.mn"
  },
  {
    "id": 1752936377280,
    "name": "LibreTV",
    "description": "",
    "url": "https://libretv.472951.xyz/",
    "category": "category_1752936127444",
    "tags": [
      "免费",
      "影视"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=libretv.472951.xyz"
  },
  {
    "id": 1752935927839,
    "name": "Cloudflare",
    "description": "",
    "url": "https://cloudflare.com",
    "category": "category_1752919485776",
    "tags": [
      "网络",
      "CDN"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=cloudflare.com"
  },
  {
    "id": 1752993129975,
    "name": "GitHub",
    "description": "全球领先的代码托管与协作平台",
    "url": "https://github.com",
    "category": "category_1752919485776",
    "tags": [
      "免费",
      "开源"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=github.com"
  },
  {
    "id": 1752993250786,
    "name": "ChatGPT",
    "description": "OpenAI打造的智能对话工具",
    "url": "https://chatgpt.com",
    "category": "category_1752993175889",
    "tags": [
      "工具",
      "AI",
      "聊天"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=chatgpt.com"
  },
  {
    "id": 1752993325178,
    "name": "Gemini",
    "description": "谷歌推出的多模态AI模型",
    "url": "https://gemini.google.com",
    "category": "category_1752993175889",
    "tags": [
      "工具",
      "AI",
      "聊天"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=google.com"
  },
  {
    "id": 1752993376760,
    "name": "Grok",
    "description": "xAI创造的智能对话工具",
    "url": "https://grok.com",
    "category": "category_1752993175889",
    "tags": [
      "工具",
      "AI",
      "聊天"
    ],
    "icon": "https://icon.nbvil.com/favicon?url=grok.com"
  }
];

// 分类定义 - 支持二级分类
export const categories = [
  {
    "id": "category_1752936127444",
    "name": "个人服务",
    "icon": "/assets/tools_icon.png",
    "special": true,
    "subcategories": []
  },
  {
    "id": "category_1752919485776",
    "name": "网络",
    "icon": "/assets/tools_icon.png",
    "special": false,
    "subcategories": []
  },
  {
    "id": "category_1752993175889",
    "name": "AI",
    "icon": "/assets/tools_icon.png",
    "special": false,
    "subcategories": []
  }
];

// 搜索引擎配置
export const searchEngines = [
  { id: "bing", name: "必应", url: "https://www.bing.com/search?q=", color: "bg-blue-600" },
  { id: "baidu", name: "百度", url: "https://www.baidu.com/s?wd=", color: "bg-red-600" },
  { id: "google", name: "谷歌", url: "https://www.google.com/search?q=", color: "bg-green-600" },
  { id: "internal", name: "站内搜索", url: "", color: "bg-purple-600" }
];

// 推荐内容配置
export const recommendations = [
  {
    id: 1,
    title: "阿里云",
    description: "点击领取2000元限量云产品优惠券",
    url: "https://aliyun.com",
    type: "sponsor",
    color: "from-blue-50 to-blue-100"
  },
  {
    id: 2,
    title: "设计资源",
    description: "高质量设计素材网站推荐",
    url: "#design_resources",
    type: "internal",
    color: "from-green-50 to-green-100"
  }
];

// 热门标签
export const popularTags = [
  "设计工具", "免费素材", "UI设计", "前端开发", "图标库", "配色方案",
  "设计灵感", "原型工具", "代码托管", "学习平台", "社区论坛", "创业资讯"
];

// 网站统计信息
export const siteStats = {
  totalSites: websiteData.length,
  totalCategories: categories.length,
  totalTags: [...new Set(websiteData.flatMap(site => site.tags || []))].length,
  lastUpdated: "2025-07-20"
};
