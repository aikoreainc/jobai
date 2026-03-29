import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '현황 인사이트',
      href: '/#insights',
    },
    {
      text: '주요 채용 통계',
      href: '/#statistics',
    },
    {
      text: '네트워크 매핑',
      href: '/#network',
    },
  ],
  actions: [{ text: '문의하기', href: '#', variant: 'primary' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: '이용약관', href: getPermalink('/terms') },
    { text: '개인정보처리방침', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    <span class="font-bold text-slate-800 dark:text-slate-200">한국인공지능 주식회사</span> | 직업정보제공사업자 신고번호: J1500020250003<br/>
    Copyright © 2025 AI Korea Inc. All rights reserved.
  `,
};
