<template>
    <div class="stats">
        <div class="row">
            <div class="col-md-4 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-8 col-8">
                                <h5 class="item"> <i class="fas fa-business-time"></i> Active Jobs</h5>
                            </div>
                            <div class="col-md-4 col-4">
                                <span class="ml-3 count">3</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-8 col-8">
                                <h5 class="item"> <i class="fas fa-check-circle"></i> Completed Jobs</h5>
                            </div>
                            <div class="col-md-4 col-4">
                                <span class="ml-3 count">50</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 mt-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-8 col-8">
                                <h5 class="item"><i class="fas fa-times-circle"></i> Rejected Jobs</h5>
                            </div>
                            <div class="col-md-4 col-4">
                                <span class="ml-3 count">10</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.count {
    vertical-align: center;
    font-size: 40px;
    color: #0080FF;
}
</style>