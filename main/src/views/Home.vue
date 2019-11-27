<template>
  <div class="home">
    <Navbar />
    <header>
      <div class="row py-5">
        <div class="col-md-12 ">
          <div class="container text-center">
            <h3 class="text-white">Welcome to Phluently. The fastest and easiest interpreter booking service!</h3>
            <button class="btn btn-white mt-3">Learn More</button>
          </div>
        </div>
      </div>
    </header>
    <section class="work">
      <div class="container">
        <div class="row py-5">
          <div class="col-md-12 text-center">
            <h3 class="">How it works</h3>
          </div>
          <div class="col-md-4 col-12 text-center mt-3">
            <img src="../../assets/request.png" alt="">
            <h5 class="mt-3 work-headings">Submit a request through the secure web portal on any smartphone, tablet, or PC</h5>
            <p>The PWA interface is secure, nimble, and responsive to any screen size. It can be easily saved to any desktop or home screen.</p>
          </div>
          <div class="col-md-4 col-12 text-center mt-3">
            <img src="../../assets/ticket.png" alt="">
            <h5 class="mt-3 work-headings">The automated ticketing system matches jobs with certified local interpreters</h5>
            <p>The back end technology sends out push notifications to qualified professionals who can book jobs with the click of a button.</p>
          </div>
          <div class="col-md-4 col-12 text-center mt-3">
            <img src="../../assets/payments.png" alt="">
            <h5 class="mt-3 work-headings">Phluently tracks interpreters time, and handles all billing and payments</h5>
            <p>The platform automatically manages time tracking, invoicing, and payments, all accessible through the simple web interface.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="future">
      <div class="container">
        <div class="row py-5">
          <div class="col-md-12 col-12 ">
            <h4 class="text-center">The future of interpreter booking</h4>
            <p class="text-center">Say goodbye to agencies. Phluently offers a seamless experience in the realm of language interpreter booking. No more phone calls, no more delays, no more messy paperwork. Get experienced and reliable interpreters every time, with nothing more to do than submitting a request. </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row py-5">
          <div class="col-md-12 col-12 ">
            <h4 class="text-center">Solutions for every industry</h4>
            <p class="text-center">We understand that different situations require different types of language expertise. That’s why interpreters on the Phluently platform have been thoroughly vetted, and come with years of experience and certifications in their areas of specialization. The platform will only match interpreters with jobs in their respective fields of expertise. Below are some of the industries we serve. </p>
          </div>

          <div class="col-md-3 col-12 mt-3 text-center">
            <img src="../../assets/medical.png" alt="">
            <h3 class="mt-3">Medical</h3>
          </div>

          <div class="col-md-3 col-12 mt-3 text-center">
            <img src="../../assets/legal.png" alt="">
            <h3 class="mt-3">Legal</h3>
          </div>

          <div class="col-md-3 col-12 mt-3 text-center">
            <img src="../../assets/educational.png" alt="">
            <h3 class="mt-3">Educational</h3>
          </div>

          <div class="col-md-3 col-12 mt-3 text-center">
            <img src="../../assets/business.png" alt="">
            <h3 class="mt-3">Business</h3>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'home',
  components: {
    Navbar,
    Footer
  }
  
}
</script>

<style scoped>
header {
  background: #0481FF;
}
p {
  font-size: 16px;
}
section.future {
  background: #f9f9f9;
}
.border {
  border: 0px !important;
  border-left: 2px solid #e5e5e5 !important;
}
</style>
