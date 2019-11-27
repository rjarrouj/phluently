import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/interpreter/Dashboard.vue'
import Jobs from '../views/interpreter/Jobs.vue'
import Profile from '../views/interpreter/Profile.vue'
import Schedule from '../views/interpreter/Schedule.vue'
import JobDetails from '../views/interpreter/JobDetails.vue'
import InterpreterChats from '../views/interpreter/Chat.vue'

import BusinessDashboard from '../views/business/Dashboard.vue'
import BusinessJobs from '../views/business/Jobs.vue'
import BusinessProfile from '../views/business/Profile.vue'
import BusinessSchedule from '../views/business/Schedule.vue'
import BusinessJobDetails from '../views/business/JobDetails.vue'
import BusinessChats from '../views/business/Chat.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/interpreter/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/interpreter/schedule',
    name: 'schedule',
    component: Schedule,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/interpreter/jobs/:id',
    name: 'job-details',
    component: JobDetails,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/interpreter/jobs',
    name: 'jobs',
    component: Jobs,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/interpreter/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/business/dashboard',
    name: 'dashboard',
    component: BusinessDashboard,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/business/chats',
    name: 'chats',
    component: BusinessChats,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/interpreter/chats',
    name: 'chats',
    component: InterpreterChats,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/business/schedule',
    name: 'schedule',
    component: BusinessSchedule,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/business/jobs/:id',
    name: 'job-details',
    component: BusinessJobDetails,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/business/jobs',
    name: 'jobs',
    component: BusinessJobs,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/business/profile',
    name: 'profile',
    component: BusinessProfile,
    meta: {
      requiresAuth: true,
    }
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
