<template>
    <div class="privacy">
        <Navbar v-if="!userLogged && userType == null" />
        <BusinessNavbar v-if="userLogged && userType == 'business' " />
        <InterpreterNavbar v-if="userLogged && userType == 'interpreter'" />
        
            <div class="row top">
                <div class="col-md-12 my-5 privacy-area">
                    <h3 class="text-primary">Phluently Privacy Policy</h3>
                    <p><i> Last Modified: {{privacy.last_modified}}</i></p>
                    <p><i>Effective Date: {{privacy.effective_date}}</i></p>

                    <div v-html="privacy.content"></div>

                    <!-- <p>
                        Phluently collects information and makes it available to help create economic opportunity for
                        businesses and professional interpreters, globally. One of the main reasons we use the
                        information is to help interpreters find the right jobs and businesses to find the right
                        interpreters, either for temporary or permanent jobs.
                    </p>

                    <p>
                        This Privacy Policy (<b>“Privacy Policy”</b>) is part of and incorporated into the Phluently Terms of Use
                        located at <a href="https://phluently.com/terms-of-use" target="_blank" class="text-primary">https://phluently.com/terms-of-use</a> (the <b>“Terms”</b>), and your use of and access to our
                        websites (including www.phluently.com), software platform, mobile applications, content, and
                        services (collectively, our <b>“Services”</b>) is subject to this Privacy Policy and the Terms. All defined
                        terms not defined herein have the meaning ascribed to them in the Terms. <b> Please read this
                        Privacy Policy carefully, and if you have any questions, contact us at <span class="text-primary">support@phluently.com</span>
                        or at the address provided at the end of this Privacy Policy.</b>
                    </p>

                    <p>
                        In this Privacy Policy, “we,” “us,” and “our” all refer to Phluently. These words also include any
                        independent contractors or vendors who sometimes do work for us or on our behalf. “You” and
                        “your” refers to you, as a user of our Services. These words also refer to either an “Interpreter”
                        (a person seeking and applying for jobs through our Services) or a “Business” (a business using
                        our Services to try to find Interpreters for jobs) or both, depending on context. To use our
                        Services to obtain jobs, Interpreters must agree to Phluently’s Interpreter Service Agreement in
                        addition to the Terms. To use our Services to post jobs, Businesses must agree to Phluently’s
                        Client Service Agreement in addition to the Terms. Notwithstanding the foregoing, the Terms
                        govern your use of and access to the Services, whether you are a Interpreter, Business,
                        Reference and/or otherwise. Further, in order to use many aspects of the Services, you must
                        register for and maintain an active Services account (“Registered Account”), and the Terms also
                        govern your Registered Account and your use of and access to your Registered Account.
                    </p>

                    <p>
                        <strong>
                            By using our Services, you agree to the terms and conditions contained in this Privacy Policy
                            and the Terms. By using our Services, you also expressly consent to the collection, use and
                            disclosure of your information, including Personal Information, as outlined in this Privacy
                            Policy. If you do not agree with any of the terms and conditions of this Privacy Policy, you
                            cannot use or access or use our Services.
                        </strong>
                    </p>

                    <p>
                        For purposes of this Privacy Policy, “Personal Information” and “Personally Identifiable
                        Information” refer to information which you provide to us which personally identifies you
                        (whether alone or when combined with Usage Data and Non-Personal Information (as those
                        terms are defined below) and includes, but is not limited to, your name, email address, social
                        security number, mailing and/or physical address, mobile device number, telephone number,
                        government identification number(s), date of birth, your photograph and other information or
                        data that identifies you, which is collected and maintained by us if you have a Registered
                        Account to use and access the Services, and may otherwise be collected by us through your use
                        and access of the Services or if you otherwise directly provide such information to us.
                    </p>

                    <p>
                        Personally Identifiable Information and Personal Information include information you may
                        provide in connection with a payment or banking service (“Payment Service”) offered as a
                        convenience to you in association with the Services, whereby you can maintain your credit card
                        or bank account information (each a “Payment Account”) securely with us in connection with
                        your Registered Account. Such information may also include, depending on whether it can be
                        reasonably linked to your other Personal Information or used to identify you, your IP address,
                        MAC address, device-specific information (including hardware information about any device you
                        are using to access or use the Services, such as your UDID or hardware model information),
                        device type, unique device identifiers, advertising identifiers, serial numbers, mobile network
                        information, file names and versions, preferred languages, operating system information
                        (including your operating system version), browser type, location information, user preferences,
                        dates and times of use of the Services, browsing activity and browsing history, and features you
                        have used (collectively, “Usage Data”). Personal Information and Personally Identifiable
                        Information also include certain combinations of such information that meets the applicable
                        statutory or other legal definition of “Personally Identifiable Information” or “Personal
                        Information” for purposes of breach notification (such information, “Statutory PII”).
                    </p>

                    <p>
                        <strong>
                            By registering and creating a Registered Account or using the Services in a way in which you
                            disclose your Personally Identifiable Information, you consent to and authorize us to receive,
                            view, display, use, disclose, transmit and maintain such Personally Identifiable Information on
                            your behalf in connection with providing the Services to you. You acknowledge and agree that
                            such Personally Identifiable Information may be transferred from your current location to our
                            offices and servers and the authorized third parties referred to herein.
                        </strong>
                    </p>

                    <p>
                        “Non-Personal Information” refers to information that does not personally or specifically
                        identify you, and may include aggregate or non-specific Usage Data and information about
                        devices, operating systems, browsing activities, browsing histories, locations, dates and times
                        of use of the Services, usage and traffic patterns, and other non-personally identifying analytics
                        and information about users of our Services. By registering and creating a Registered Account
                        or using the Services, you consent to and authorize us to receive, view, display, use, disclose,
                        transmit and maintain such Non-Personal Information and to share it with third parties, in
                        accordance with this Privacy Policy.
                    </p>

                    <p>
                        <strong>“Information”</strong> collectively refers to Personal Information, Non-Personal Information and Usage Data
                    </p>
                    <h5 class="text-capitalize text-primary">
                        INFORMATION WE COLLECT
                    </h5>
                    <h6>1. Information You Choose To Submit</h6>
                    <p>
                        The Services aim to match businesses with prospective Interpreters who will be a good fit for a
                        given job, and the information we collect is intended to support that goal. For example, if you
                        post a job on behalf of a Business or created a related Registered Account, we may collect your
                        name, email address and other Personal Information about you and the Business. Similarly, if
                        you are an Interpreter, we may collect your name, email address, home address and other
                        materials and other Personal Information you submit as part of the registration or application
                        submission process or job-matching process (including your resume, name and contact
                        information for your References and related data pertinent to using the Services). Specifically,
                        we collect information about you (including Personal Information) that you choose to submit to
                        us in connection with your use of our Services, including information submitted when you:
                    </p>
                    <p>
                        <ul>
                            <li>
                                Create or update your Registered Account (including creating and updating information
                                on your Interpreter or Business profile), which, depending on your location and the
                                Services you use, may include your name, email, social security number, mobile device
                                number, phone number, username and password, address, payment or banking
                                information, government identification numbers, date of birth, and photographs
                            </li>
                            <li>Request certain services or features through the Services (such as through our mobile applications or websites)</li>
                            <li>Contact Phluently, including for support</li>
                            <li>Contact other users (including Interpreters, References or Businesses) through our Services</li>
                            <li>Work jobs as a Interpreter through our Services</li>
                            <li>Post jobs as a Business through our Services</li>
                            <li>Complete surveys sent to you by Phluently or on behalf of Phluently</li>
                            <li>Enable features that require Phluently’s access to your address book or calendar</li>
                        </ul>
                    </p>
                    <h6>2. Information Created When You Use The Services</h6>
                    <p>This includes:</p>

                    <p>
                        <b>Location Information.</b>  Depending on the Services that you use, and your mobile application
                        settings or device permissions, Phluently may collect your precise or approximate location
                        information, as determined through data such as GPS, IP address, and WiFi. Phluently collects
                        location information when the mobile application is running in the foreground (mobile
                        application open and on-screen) of your device. Phluently may collect this information when the
                        mobile application is running in the background of your device if this collection is enabled
                        through your application settings or device permissions. You may use the mobile application
                        without enabling Phluently to collect your location information. However, this may affect the
                        functionality of the mobile application and you may not be able to use all features of the
                        Services. For example, to be considered for jobs or to work jobs offered through our Services,
                        you must enable Phluently to collect your location information so that we can ensure you show
                        up to jobs on time.
                    </p>

                    <p>
                        <b>Transaction Information.</b> We collect transaction details and information related to your use of
                        the Services, including the types of Services you requested or provided (such as work or job
                        requests), dates, times and durations of jobs or services engagements, engagement fees, and
                        other related transaction details and information.
                    </p>

                    <p>
                        <b>Usage and Preference Information.</b> We collect information about how you interact with our
                        Services, your preferences and settings chosen. In some cases we collect Usage Data through
                        the use of cookies, web beacons, pixel tags, and similar technologies that create and maintain
                        unique identifiers. A cookie is a piece of data or text file on your computer that identifies you as
                        a unique user. A web beacon is an object that is embedded in a page or email and is usually
                        invisible to the user but allows checking whether a user has viewed the page or email. We use
                        cookies, web beacons, pixel tags and similar technologies for a number of purposes, including
                        to improve the quality of the Services and to make the Services easier to use. We may combine
                        Usage Data with Personal Information in a manner that enables us to trace Usage Data to an
                        individual user, and may collect, use, preserve and disclose Usage Data in any manner that we
                        may collect, use, preserve and disclose Personal Information as provided herein (whether Usage
                        Data is combined with any Personal Information or otherwise). As more particularly described
                        below in this Privacy Policy, we sometimes use certain third party tools and services to assist us
                        in collecting Usage Data. Certain of the third party tools and services use cookies or web
                        beacons to help analyze how users use the Services. We do not access or control these third
                        party cookies or web beacons; however, we may have access to data generated from their use,
                        such as when we view analytics reports provided by such third party tools and services.
                    </p>

                    <p>
                        <b>Device Information.</b> We may collect information about the devices you use to access our Services, including any related Usage Data.
                    </p>

                    <p>
                        <b>Log Information.</b> When you interact with our Services, we collect server logs, which may include
                        Usage Data and information like device IP address, access dates and times, application features
                        or pages viewed, application crashes and other system activity, browser type, and the third-party
                        site or service you were using before interacting with our Services.
                    </p>

                    <p>
                        <b>Calls and Text Messages.</b> In addition to our Communications with Businesses and Interpreters,
                        we enable users to communicate with each other directly through communications initiated by
                        them through the Services. For example, we enable Businesses and Interpreters to contact one
                        another directly through the Services. Phluently receives some information regarding such calls
                        or texts, including the date and time of the applicable call or text, and the content of the text
                        messages. Phluently may use this information for customer support services (including to
                        resolve disputes between users), for safety and security purposes, and for analytics.
                        Additionally, in order to provide the Services to you, Phluently will communicate with you with
                        Communications or through its Alert Service, which includes contacting or messaging you by
                        telephone, email, short message service, or text message. Additionally, Phluently and its
                        partners and affiliates may contact you at any telephone number(s) you provide in connection
                        with your use of the Services. By providing your contact information, you consent to receive
                        Communications (including Communications containing an artificial voice or prerecorded
                        message or made using an automatic telephone dialing system) from us, our affiliates and
                        partners, and any Business from which you are seeking a job, at any of the contact information
                        you provided, including your wireless number, even if that number is registered on a corporate,
                        state, or national do-not-call registry.
                    </p>

                    <p>
                        <b>Address Book and Calendar Information.</b> If you permit Phluently or the Services (such as
                        Phluently’s mobile applications) to access the address book or contacts on your device, we may
                        collect names and contact information (including phone numbers, phone labels, email
                        addresses, mailing addresses, and birthdays) from your address book to facilitate social
                        interactions through our Services and for other purposes described in this Privacy Policy or at
                        the time of consent or collection. If you permit the Services (including Phluently’s mobile
                        applications) to access the calendar on your device, we may collect calendar information such
                        as event title and description, your response (Yes, No, Maybe), date and time, location, and
                        number of attendees. If you permit Phluently or the Services to access your address book or
                        contacts on your device, you expressly represent and warrant that you have the right to allow
                        Phluently to access your address book and contacts and that Phluently has the right to use your
                        address book and contacts in connection with the Services.
                    </p>

                    <h6>3. Information From Other Sources</h6>
                    <p>This includes:</p>
                    <p>
                        <ul>
                            <li>Users providing feedback, ratings, reviews, references or compliments</li>
                            <li>Phluently’s third party business partners through which you create or access your
                            Registered Account, such as payment providers, social media services, or applications or
                            websites who use Phluently's APIs or whose APIs Phluently uses</li>
                            <li>Publicly available sources</li>
                            <li>Marketing service providers</li>
                            <li>Phluently may combine the information collected from these sources with other
                            information in its possession.</li>
                        </ul>
                    </p>

                    <h5 class="text-capitalize text-primary">
                        DISCLOSURE AND USE
                    </h5>

                    <p>
                        We may use your Personal Information for a variety of purposes, including to provide, enhance,
                        personalize, maintain and improve our Services. Such use includes using your Personal
                        Information to:
                    </p>
                    <p>
                        <ul>
                            <li>Contact you</li>
                            <li>Match Businesses with Interpreters</li>
                            <li>Process or facilitate payments related to the Services</li>
                            <li>Allow References to provide references of Interpreters</li>
                            <li>Enable communications between our users, including by and among Businesses and Interpreters</li>
                            <li>Assist you when you contact us for support, including to direct your questions to the
                            appropriate Phluently support representative, investigate and address your concerns,
                            and monitor and improve our support responses</li>
                            <li>Notify you of changes to our Services</li>
                            <li>Conduct testing, research, analysis and product development to improve and enhance the safety and security of our Services</li>
                            <li>Resolve disputes among users</li>
                            <li>Solicit your feedback and input about our Services</li>
                            <li>Communicate with you about products, services, promotions, studies, surveys, news, updates and events</li>
                            <li>Promote and process contests and sweepstakes, fulfill any related awards and serve you relevant ads and content about our Services and those of our business partners</li>
                            <li>Enable features that allow you to share information with other users, such as when you submit a review, rating or reference</li>
                            <li>Enable features to personalize your Registered Account, including your profile</li>
                            <li>Perform internal operations necessary to provide our Services, including to troubleshoot
                            software bugs and operational problems, to conduct data analysis, testing and research,
                            and to monitor and analyze usage and activity trends</li>
                            <li>Investigate or address claims or disputes relating to your use of the Services, or as otherwise allowed by applicable law</li>
                        </ul>

                        Except as otherwise provided in this Privacy Policy, we will not disclose your Personal
                        Information to any third party unless the third party is a Permitted Recipient. You agree that we
                        may disclose your Personal Information to the following “Permitted Recipients”: (1) persons or
                        entities that you permit to access or receive your Personal Information (your permission being
                        reasonably determined from your actions in view of the circumstances), including other users of
                        the Services; (2) if you are a Business, any persons or entities at your organization including
                        those that may have created a Registered Account with us, and persons or entities designated
                        by such organization; (3) if you are a Interpreter, Businesses that have posted or may post jobs
                        on or through our Services and for which you have submitted an application through the
                        Services; (4) References; (5) third party providers of services to us such as Internet hosting
                        providers, Internet services providers, email distribution and email management providers, and
                        software development or maintenance providers, provided that we have a reasonable belief that
                        such third party providers will maintain your Personal Information in confidence; (6) third parties
                        that provide services enabling us to market and advertise our Services and other content that
                        has been customized for you through targeted advertising, targeted content and other means;
                        and (7) any other person or entity to whom we are permitted or required to disclose your
                        Personal Information by law, regulation or other provision of this Privacy Policy or the Terms.
                        <br><br>
                        We also may disclose Non-Personal Information to third parties in a manner that does not
                        identify a particular individual. For example, and not by way of limitation, we may disclose
                        aggregated Personal Information (i.e., Non-Personal Information) to marketing and research
                        partners and/or for advertising, marketing and promotional purposes. In addition, we may
                        identify job posting organizations in our Services and in our advertising, marketing and
                        promotional materials.

                    </p>

                    <h5 class="text-capitalize text-primary">
                        OTHER AUTHORIZED DISCLOSURES
                    </h5>
                    <p>
                        Notwithstanding anything in this Privacy Policy to the contrary, you understand and agree that
                        we may collect, use, preserve and disclose any information (including, without limitation, Usage
                        Data and Personal Information): (1) in response to subpoenas, court orders, legal process or
                        when otherwise required by law, or to establish, protect, or exercise our legal rights or defend
                        against legal claims in our sole discretion; (2) to protect our rights and property or the public,
                        including the enforcement of this Privacy Policy and any other agreement we may have with you
                        or your organization (as applicable); (3) if we believe it is necessary in order to investigate,
                        prevent, or take action regarding unauthorized distribution of another's intellectual property or
                        information, illegal activities, fraud, or situations involving potential threats to the safety of any
                        person (provided, however, that we have no obligation to do so); or (4) that is available to the
                        general public. <br> <br>
                        We may, from time to time, assign or transfer all or a portion of the Usage Data, Personal
                        Information and/or Non-Personal Information and its rights and obligations hereunder to one or
                        more third parties (whether in connection with a sale of assets, a merger or otherwise), in which
                        case the successor or assignee will agree to abide by the obligations under this Privacy Policy
                        with respect to such information transferred to such successor or assignee (unless otherwise
                        agreed to by you and such successor or assignee). <br> <br>
                        Any information shared by you with us may be shared with or transferred to any entity affiliated
                        with us or any of our third party providers (including those located outside the European Union),
                        no matter where located, for the purpose of providing you Services and improving the Services.
                        By using the Services, you consent to this transfer and acknowledge that the Services provided
                        to you and the functionality of the Services could not be provided without such a transfer. If you
                        do not wish your information to be transferred in this way, do not use the Services.
                        In addition to the other uses and disclosures of information set forth in this Privacy Policy, and
                        notwithstanding anything in this Privacy Policy to the contrary, we may use, disclose, assign and
                        transfer any Non-Personal Information for any purpose.
                    </p>

                    <h5 class="text-capitalize text-primary">
                        SECURITY
                    </h5>
                    <p>
                        We and our service providers employ certain procedural and technological security measures
                        that are reasonably designed to help protect your Personal Information from loss, unauthorized
                        access, disclosure, alteration or destruction. Such measures, or any data transmission over the
                        Internet or any network, cannot be guaranteed to be perfectly secure or effective. As a result, we
                        cannot ensure or guarantee the security of any information you transmit to us or that is
                        submitted on your behalf, and such information is transmitted and submitted at your own risk.
                        You agree to keep your Personal Information private and confidential, and not to share
                        information and materials that you receive by or through our Services with any third party other
                        than through the general, non-commercial methods permitted by the Services. In no event may
                        Interpreters or Businesses share any information or materials with respect to their Account
                        access and job postings with any third party.
                    </p> -->
                </div>
            </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BusinessNavbar from '@/components/business/BusinessNavbar.vue'
import InterpreterNavbar from '@/components/interpreter/InterpreterNavbar.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "Privacy",
    components: {
        Navbar,
        BusinessNavbar,
        InterpreterNavbar,
        Footer
    },
    data() {
        return {
            userLogged: false,
            userType: null,
            privacy: {
                last_modified: null,
                effective_date: null,
                content: null
            }
        }
    },

    computed: {
        ...mapGetters(['getPrivacy'])
    },

    methods: {
        ...mapActions(['getPrivacyPolicy']),
    },

    created() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if(loggedUser) {
            this.userLogged = true;
            if(loggedUser.type) {
                this.userType = loggedUser.type.toLowerCase();
            }
        }
        else {
            this.userLogged = false;
        }

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

<style scoped>
    .top {
        border-top: 1px solid #0080FF !important;
    }
    .privacy-heading {
        padding-left: 50px;
        padding-right: 50px;
    }
    .privacy-area {
        padding-left: 70px;
        padding-right: 70px;
        text-align: justify;
    }
</style>