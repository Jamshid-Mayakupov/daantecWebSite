// 1. createWebHistory o'rniga createWebHashHistory import qilinadi
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import PartnersPage from '../views/PartnersPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import BlogPage from '../views/BlogPage.vue'
import ContactPage from '../views/ContactPage.vue'
import Direction from '../views/Direction.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/direction',
    name: 'Direction',
    component: Direction
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/partners',
    name: 'Partners',
    component: PartnersPage
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  // 2. Bu yerda createWebHashHistory() ishlatiladi.
  // Bu rejimda URL manzillar `mysite.com/#/about` ko'rinishida bo'ladi.
  // Server faqat `mysite.com/` ga so'rov yuboradi, qolgan qismini Vue o'zi boshqaradi,
  // shuning uchun serverda qo'shimcha sozlamalar (Nginx/Apache rewrite) shart emas.
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router