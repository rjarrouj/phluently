<template>
    <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Privacy Policy</h4>
            <p class="category">Update Privacy Policy From Here</p>
          </md-card-header>
          <md-card-content>
              <b-form-input placeholder="Last Updated Date" v-model="privacy.last_modified" class="mt-3" trim></b-form-input>
              <b-form-input placeholder="Effective Date" class="my-3" v-model="privacy.effective_date" trim></b-form-input>
              <vue-editor v-model="privacy.content"></vue-editor>
              <md-button class="ml-2 md-dense md-raised md-primary pull-right" @click="privacyUpdate">Update Privacy Policy</md-button>
          </md-card-content>
        </md-card>
      </div>

      
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import {mapActions, mapGetters} from 'vuex';
export default {
    name: "Privacy",
    components: {
        VueEditor
    },
    data() {
        return  {
            privacy: {
                last_modified: null,
                effective_date: null,
                content: null
            }
        }
    },

    computed: {
        ...mapGetters(['getPrivacyStatus', 'getPrivacy'])
    },

    methods: {
        ...mapActions(['updatePrivacy', 'getPrivacyPolicy']),
        privacyUpdate() {
            if(this.privacy.content == null || this.privacy.content == "" || this.privacy.last_modified == null || this.privacy.last_modified == "" || this.privacy.effective_date == null || this.privacy.effective_date == "") {
                this.$store.commit("setNotifications",{message:"All Fields Required",type:'error'})
                return
            }
            this.updatePrivacy(this.privacy);
        }
    },

    created() {
        this.getPrivacyPolicy();
    },

    watch: {
        getPrivacy(val) {
            if(val) {
                this.privacy.last_modified = val.last_modified;
                this.privacy.effective_date = val.effective_date;
                this.privacy.content = val.content;
            }
        }
    }
}
</script>