<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/service-providers">
        <md-icon>supervised_user_circle</md-icon>
        <p>Interpreters</p>
      </sidebar-link>
      <sidebar-link to="/admin/clients">
        <md-icon>assignment_ind</md-icon>
        <p>Businesses</p>
      </sidebar-link>
      <sidebar-link to="/admin/jobs">
        <md-icon>work</md-icon>
        <p>Jobs</p>
      </sidebar-link>
      <sidebar-link to="/admin/payments">
        <md-icon>payment</md-icon>
        <p>Payments</p>
      </sidebar-link>
      <sidebar-link to="/admin/categories">
        <md-icon>category</md-icon>
        <p>Categories</p>
      </sidebar-link>
       <sidebar-link to="/admin/certifications">
        <md-icon>book</md-icon>
        <p>Update Password</p>
      </sidebar-link>
       <sidebar-link to="/admin/languages">
        <md-icon>translate</md-icon>
        <p>Languages</p>
      </sidebar-link>
      <sidebar-link to="/admin/pending-approvals">
        <md-icon>verified_user</md-icon>
        <p>Approvals</p>
      </sidebar-link>
      <sidebar-link to="/admin/profile-changes">
        <md-icon>update</md-icon>
        <p>Profile Changes</p>
      </sidebar-link>
      <sidebar-link to="/admin/privacy-policy">
        
        <p><i class="fa fa-user-secret"></i> Privacy Policy</p>
      </sidebar-link>
      <sidebar-link to="/admin/terms-and-use">
        
        <p><i class="fa fa-universal-access"></i> Terms of Use</p>
      </sidebar-link>
      <!-- <sidebar-link to="/revenue">
        <md-icon>dashboard</md-icon>
        <p>Revenue</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="/upgrade" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Upgrade to PRO</p>
      </sidebar-link> -->
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
};
</script>
