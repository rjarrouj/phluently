<template>
    <div>
        <div class="container">
            <div class="row footer">
                <div class="col-md-12 text-center">
                    
                    <a href="https://www.facebook.com/phluently" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook-square fa-2x pr-3 facebook"></i>
                    </a>
                    <a href="https://twitter.com/phluently" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter-square fa-2x pr-3 twitter"></i>
                    </a>
                    <a href="http://instagram.com/phluently" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram fa-2x instagram"></i>
                    </a>
                    
                    <div  class="mt-5 mb-3">
                        <strong>© 2019 Phluently, Inc. All rights reserved.</strong>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    padding-top: 50px;
    border-top: 1px solid #ccc;
}

.facebook {
    color: #3B5998;
}

.twitter {
    color: #55ACEE;
}

.instagram {
    color: #E4405F;
}

i:hover {
    cursor: pointer;
}
</style>