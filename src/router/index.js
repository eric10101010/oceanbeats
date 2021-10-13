import { createRouter, createWebHashHistory } from 'vue-router'
// 前台路由
const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/front/Index.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/front/About.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/front/Contact.vue')
      },
      {
        path: '/favorite',
        name: 'Favorite',
        component: () => import('../views/front/Favorite.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/Products.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/Product.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/front/Cart.vue')
      },
      {
        path: '/checkorder',
        name: 'CheckOrder',
        component: () => import('../views/front/CheckOrder.vue')
      },
      {
        path: '/checkoutorder/:id',
        name: 'CheckoutOrder',
        component: () => import('../views/front/CheckoutOrder.vue')
      }
    ]
  },
  // 登入&登入失敗路由
  {
    path: '/login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views//login/404.vue')
    // redirect: {
    //   name: 'Index'
    // }
  },
  // 後台路由
  {
    path: '/admin',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
