import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import ServiceProviders from "@/pages/ServiceProviders.vue";
import Clients from "@/pages/Clients.vue";
import Categories from "@/pages/Categories.vue";
import Certifications from "@/pages/Certifications.vue";
import Languages from "@/pages/Languages.vue";
import Payments from "@/pages/Payments.vue";
import Jobs from "@/pages/Jobs.vue";
import PendingApprovals from "@/pages/PendingApprovals.vue";
import ProfileChanges from "@/pages/ProfileChanges.vue";
import Login from "@/pages/Login.vue";
import Privacy from "@/pages/Privacy.vue";
import Terms from "@/pages/Terms.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "payments",
        name: "Payments",
        component: Payments,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "profile-changes",
        name: "profile-changes",
        component: ProfileChanges,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
        meta: {
          requiresAuth: true,
        }
      },      
      {
        path: "pending-approvals",
        name: "PendingApprovals",
        component: PendingApprovals,
        meta: {
          requiresAuth: true,
        }
      },      
      {
        path: "clients",
        name: "Clients",
        component: Clients,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "jobs",
        name: "Jobs",
        component: Jobs,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "languages",
        name: "Languages",
        component: Languages,
        meta: {
          requiresAuth: true,
        }
      },      
      {
        path: "categories",
        name: "Categories",
        component: Categories,
        meta: {
          requiresAuth: true,
        }
      }, 
      {
      path: "certifications",
      name: "Certifications",
      component: Certifications,
      meta: {
        requiresAuth: true,
      }
      }, 
      {
        path: "service-providers",
        name: "Service Providers",
        component: ServiceProviders,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "terms-and-use",
        name: "Terms of Use",
        component: Terms,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: "privacy-policy",
        name: "Privacy Policy",
        component: Privacy,
        meta: {
          requiresAuth: true,
        }
      },
     ]
  }
];

export default routes;
