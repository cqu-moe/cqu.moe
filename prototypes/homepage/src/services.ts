export const services = [
  { id: 'schedule', name: '课表订阅', english: 'CQU Schedule', description: '把课表放进日历，让每一天的安排更清楚。', detail: '获取课表与订阅链接，在常用日历中查看课程安排。', url: 'https://schedule.cqu.moe', domain: 'schedule.cqu.moe', category: '网页服务', beta: false, action: '打开课表', brand: 'schedule', intent: '安排课程与时间' },
  { id: 'feed', name: '校园通知', english: 'CQU Feed', description: '集中阅读、搜索学校通知，少在不同网站间来回。', detail: '在统一入口查找通知、阅读正文与附件。', url: 'https://feed.cqu.moe', domain: 'feed.cqu.moe', category: '网页服务', beta: false, action: '查看通知', brand: 'feed', intent: '找到校园消息' },
  { id: 'quicklogin', name: '快捷登录', english: 'QuickLogin', description: '减少校园统一认证的重复登录。', detail: '适用于桌面 Chrome，当前仅向内测用户开放。', url: 'https://quicklogin.cqu.moe', domain: 'quicklogin.cqu.moe', category: '浏览器扩展', beta: true, action: '了解插件', brand: 'quicklogin', intent: '让登录更顺手' },
  { id: 'learning', name: 'Learning CLI', english: 'Learning CLI', description: '用命令行访问雨课堂、学堂在线与智慧树。', detail: '本地命令行工具，当前处于内测阶段。', url: 'https://github.com/cqu-moe/learning', domain: 'github.com/cqu-moe/learning', category: '命令行工具', beta: true, action: '查看项目', brand: null, intent: '在终端里使用学习工具' },
];
export const categories = ['全部', '网页服务', '内测工具'];
