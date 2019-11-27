<template>
    <div class="schedule">
        <InterpreterNavbar />
        <div class="container">
            <div class="row my-3">
                
                <full-calendar  :config="config" :events="events"></full-calendar>

            </div>
        </div>

        <Footer />
    </div>
</template>

<script>
import InterpreterNavbar from '@/components/interpreter/InterpreterNavbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: "Schedule",
    components: {
        InterpreterNavbar,
        Footer
    },
      data(){
        return{
            config: {
                defaultView: "month",
            },
            events: [
                {
                    title  : 'Demo Jobs 1',
                    start  : '2019-11-01',
                },
                {
                    title  : 'Demo Jobs 2',
                    start  : '2019-11-05',
                    end    : '2019-11-05',
                },
                {
                    title  : 'Demo Job 3',
                    start  : '2019-11-09T12:30:00',
                    allDay : false,
                },
            ]
        }
    }
}
</script>

<style scoped>
.schedule {
    background: #f7f7f7;
    min-height: 100vh;
}
.container {
    max-width: 1400px;
}
</style>