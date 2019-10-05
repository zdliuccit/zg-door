import home from './views/home'
import layout from './views/layout'
import news from './views/child/news'
import newsCont from './views/child/news-cont'
import jobs from './views/child/jobs'
import infoConsult from './views/child/info-consult'
import systemLink from './views/child/system-link'
import contactUs from './views/child/contact-us'
import businessIntro from './views/child/business-intro'
import aboutUs from './views/child/about-us'

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/',
        component: home,
      },
      { path: 'news', component: news, },
      { path: 'news-cont', component: newsCont, },
      { path: 'jobs', component: jobs, },
      { path: 'info-consult', component: infoConsult, },
      { path: 'system-link', component: systemLink, },
      { path: 'contact-us', component: contactUs, },
      { path: 'business-intro', component: businessIntro, },
      { path: 'about-us', component: aboutUs, },
    ]
  },
]

export default routes
