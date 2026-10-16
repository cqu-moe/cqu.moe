export type ServiceBrand = 'schedule' | 'feed' | 'quicklogin' | 'learning';

export interface Service {
  id: string;
  name: string;
  english: string;
  description: string;
  url: string;
  domain: string;
  category: string;
  beta: boolean;
  action: string;
  brand: ServiceBrand | null;
}

export const dailyServices: Service[] = [
  {
    id: 'schedule', name: '课表订阅', english: 'CQU Schedule',
    description: '把课表放进日历，让每一天的安排更清楚。',
    url: 'https://schedule.cqu.moe', domain: 'schedule.cqu.moe',
    category: '网页服务', beta: false, action: '打开课表', brand: 'schedule',
  },
  {
    id: 'feed', name: '校园通知', english: 'CQU Feed',
    description: '集中阅读、搜索学校通知，少在不同网站间来回。',
    url: 'https://feed.cqu.moe', domain: 'feed.cqu.moe',
    category: '网页服务', beta: false, action: '查看通知', brand: 'feed',
  },
];

export const tools: Service[] = [
  {
    id: 'quicklogin', name: '快捷登录', english: 'QuickLogin',
    description: '减少校园统一认证的重复登录。',
    url: 'https://quicklogin.cqu.moe', domain: 'quicklogin.cqu.moe',
    category: '浏览器扩展', beta: true, action: '了解插件', brand: 'quicklogin',
  },
  {
    id: 'learning', name: 'Learning CLI', english: 'Learning CLI',
    description: '用命令行访问雨课堂、学堂在线与智慧树。',
    url: 'https://github.com/cqu-moe/learning', domain: 'github.com/cqu-moe/learning',
    category: '命令行工具', beta: true, action: '查看项目', brand: 'learning',
  },
];
