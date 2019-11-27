<template>
    <div class="completed-jobs">
        <div class="row">
            <div class="col-md-12 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4 col-12">
                                <b-img v-bind="userImage" rounded="circle" :src="image" alt="Circle image"></b-img> <span class="ml-2"><b>Arslan Ahmed</b></span>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Price</strong><h6><i class="fas fa-dollar-sign"></i> 3000</h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Category</strong><h6><b-badge variant="info">Legal</b-badge></h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">

                                <strong>Status</strong><h6><b-badge variant="success">Completed</b-badge></h6>
                            </div>
                            <div class="col-md-1 col-2 pt-2 text-right">
                                <h6 class="text-primary"><a href="" @click="jobDetails">View</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4 col-12">
                                <b-img v-bind="userImage" rounded="circle" :src="image" alt="Circle image"></b-img> <span class="ml-2"><b>Arslan Ahmed</b></span>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Price</strong><h6><i class="fas fa-dollar-sign"></i> 3000</h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Category</strong><h6><b-badge variant="info">Legal</b-badge></h6>
                            </div>
                            <div class="col-md-2 col-2 pt-2">

                                <strong>Status</strong><h6><b-badge variant="success">Completed</b-badge></h6>
                            </div>
                            <div class="col-md-1 col-3 pt-2 text-right">
                                <h6 class="text-primary"><a href="" @click="jobDetails">View</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-12 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-4 col-12">
                                <b-img v-bind="userImage" rounded="circle" :src="image" alt="Circle image"></b-img> <span class="ml-2"><b>Arslan Ahmed</b></span>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Price</strong><h6><i class="fas fa-dollar-sign"></i> 3000</h6>
                            </div>
                            <div class="col-md-2 col-3 pt-2">
                                <strong>Category</strong><h6><b-badge variant="info">Legal</b-badge></h6>
                            </div>
                            <div class="col-md-2 col-2 pt-2">

                                <strong>Status</strong><h6><b-badge variant="success">Completed</b-badge></h6>
                            </div>
                            <div class="col-md-1 col-3 pt-2 text-right">
                                <h6 class="text-primary"><a href="" @click="jobDetails">View</a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompletedJobs",
    data() {
        return {
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 100, height: 100, class: 'my-3'},
            userImage: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''}
        }
    },
    methods: {
        jobDetails() {
            this.$router.push({path: '/interpreter/jobs/LM671209ab_876235dfG'})
        }
    }
}
</script>