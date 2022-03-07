const sidebar = require("./siderbar.js");

module.exports = {
  "title": "li.blog",
  "description": "learn",
  "dest": "public",
  "port":"4000",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      // {
      //   "text": "Contact",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "GitHub",
      //       "link": "https://github.com/recoluan",
      //       "icon": "reco-github"
      //     }
      //   ]
      // }
    ],
    "sidebar": sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录索引"
      },
      "tag": {
        "location": 3,
        "text": "标签索引"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "402",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}