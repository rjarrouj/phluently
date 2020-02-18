<template>
    <div class="card mt-3">
        <div class="card-body">
            <div class="text-center">
                <b-img v-bind="mainProps" rounded="circle" :src="user.profile_image ? user.profile_image : demoImage" alt="Circle image"></b-img>
            </div>
            <div class="row pt-2">
                <div class="col-md-4 col-4">
                    <p class="text-bold text-primary">Name:</p>
                </div>
                <div class="col-md-8 col-8">
                    <p class="">{{user.first_name + " " + user.last_name}}</p>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col-md-4 col-4">
                    <p class="text-bold text-primary">Email:</p>
                </div>
                <div class="col-md-8 col-8">
                    <p class="">{{user.email}}</p>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col-md-4 col-4">
                    <p class=" text-bold text-primary">Phone:</p>
                </div>
                <div class="col-md-8 col-8">
                    <p class="">{{user.contact}}</p>
                </div>
            </div>
            
            <div class="row">
                <button class="btn btn-primary btn-block mx-3" @click="profilePage">View Profile</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Profile",
    created() {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if(loggedUser) {
            this.user = loggedUser;
        }
    },
    data() {
        return {
            demoImage: 'https://ptetutorials.com/images/user-profile.png',
            user: null,
            image: require('../../assets/profile.jpg'),
            mainProps: { blank: false, blankColor: '#777', width: 100, height: 100, class: 'my-3'},
            userImage: { blank: false, blankColor: '#777', width: 40, height: 40, class: ''}
        }
    },
    methods: {
        profilePage() {
            this.$router.push({path: '/business/profile'})
        }
    }
}
</script>