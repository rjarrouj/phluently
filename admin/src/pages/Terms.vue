<template>
    <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Terms of Use</h4>
            <p class="category">Update Terms and Use From Here</p>
          </md-card-header>
          <md-card-content>
              <b-form-input placeholder="Last Updated Date" v-model="terms.last_modified" class="mt-3" trim></b-form-input>
              <b-form-input placeholder="Effective Date" class="my-3" v-model="terms.effective_date" trim></b-form-input>
              <vue-editor v-model="terms.content"></vue-editor>
              <md-button class="ml-2 md-dense md-raised md-primary pull-right" @click="termsUpdate">Update Terms of Use</md-button>
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
    name: "Terms",
    components: {
        VueEditor
    },
    data() {
        return  {
            terms: {
                last_modified: null,
                effective_date: null,
                content: null
            }
        }
    },

    computed: {
        ...mapGetters(['getTermsStatus', 'getTerms']),
        fetchTerms() {
            if(this.getTerms) {
                this.terms.last_modified = this.getTerms.last_modified;
            }
            return this.getTerms;
        }
    },

    created() {
        this.getTermsOfUse();
    },

    methods: {
        ...mapActions(['updateTerms', 'getTermsOfUse']),
        termsUpdate() {
            if(this.terms.content == null || this.terms.content == "" || this.terms.last_modified == null || this.terms.last_modified == "" || this.terms.effective_date == null || this.terms.effective_date == "") {
                this.$store.commit("setNotifications",{message:"All Fields Required",type:'error'})
                return
            }
            this.updateTerms(this.terms);
        }
    },

    watch: {
        getTermsStatus(val) {
            if(val && val == "success") {
                console.log("Terms Updated");
            }
        },

        getTerms(val) {
            if(val) {
                this.terms.last_modified = val.last_modified;
                this.terms.effective_date = val.effective_date;
                this.terms.content = val.content;
            }
        }
    }
}
</script>

<style scoped>
b-form-input:focus, b-form-input:active {
    box-shadow: none !important;
}
</style>