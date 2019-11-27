<template>
    <div id="dashboard">
        <InterpreterNavbar />
        <div class="container-fluid">
            
            <!-- -->
            <div class="row ml-1 mr-1 mt-3" style="border:1px solid #dcdcdc" >
                <div class="col-md-3 pl-0">
                    <div class="inbox_people">
                        <div class="headind_srch">
                            <div class="recent_heading">
                                <h4>Recent</h4>
                            </div>
                            <div class="srch_bar">
                                <div class="stylish-input-group">
                                    <input type="text" class="search-bar" placeholder="Search">
                                    <span class="input-group-addon">
                                    <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="inbox_chat">
                            <div class="chat_list active_chat">
                                <div class="chat_people">
                                    <div class="chat_img"> <img class="rounded-circle" style="height:2rem;" src="https://ptetutorials.com/images/user-profile.png" alt="Anika"> </div>
                                    <div class="chat_ib">
                                        <h5>Storm Trooper  <span class="chat_date">2019/06/06</span></h5>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <p>Last Demo Message</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img class="rounded-circle" style="height:2rem;" src="https://ptetutorials.com/images/user-profile.png" alt="Anika"> </div>
                                    <div class="chat_ib">
                                        <h5>Anakin   <span class="chat_date">2019/06/06</span></h5>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <p>Last Demo Message</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img class="rounded-circle" style="height:2rem;" src="https://ptetutorials.com/images/user-profile.png" alt="Anika"> </div>
                                    <div class="chat_ib">
                                        <h5>Obi Wan   <span class="chat_date">2019/06/06</span></h5>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <p>Last Demo Message</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="msg_containers" class="msg_history">
                        <div>
                            <div class="incoming_msg mt-2">
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>Your Message</p>
                                        <span class="time_date"> 2019/11/11</span></div>
                                </div>
                            </div>
                            <div class="outgoing_msg">
                                <div class="sent_msg mr-1">
                                    <p>Outrageously OfFending message</p>
                                    <span class="time_date"> 2019/11/11</span> </div>
                            </div>
                        </div>
                    </div>
                    <div class="type_msg">
                        <div class="input_msg_write">
                            <input type="text" class="write_msg ml-1 mr-1" style="border:none !important;"   placeholder="Type a message" />
                            <button class="msg_send_btn"  type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3" style="border-left:1px solid #dcdcdc">
                    <b-card tag="article" style="-webkit-box-shadow:none;border:none;" class="mb-2">
                        <template v:slot="header">
                            <h4 class="text-center"> <b> About </b></h4>
                        </template>
                        <b-card-body>
                            <div class="photo-container text-center">
                                <img class="pic" src="https://ptetutorials.com/images/user-profile.png" alt="" />
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h6 class="users text-center">Storm Troopers</h6>
                                </div>
                                <div class="col-md-12">
                                    <h6 class="users text-muted text-center" style="margin-top:-15px;">Medical Services</h6>
                                </div>

                            </div>
                            <div class="row text-center">
                                <div class="col-md-6">
                                    <span>Certified</span>
                                </div>
                                <div class="col-md-6">
                                    <span><strong>CHI</strong></span>
                                </div>
                            </div>
                            <div class="row text-center mt-4">
                                <div class="col-md-6 pl-0 pr-0">
                                    <span>Experience</span>
                                </div>
                                <div class="col-md-6 pr-0 pl-0">
                                    <span><strong>0-5 years</strong></span>
                                </div>
                            </div>
                            <div class="row text-center mt-4">
                                <div class="col-md-6 pl-0 pr-0">
                                    <span>Location</span>
                                </div>
                                <div class="col-md-6 pr-0 pl-0">
                                    <span><strong>New York</strong></span>
                                </div>
                            </div>
                            <div class="row text-center mt-4">
                                <div class="col-md-6 pl-0 pr-0">
                                    <span>Language</span>
                                </div>
                                <div class="col-md-6 pr-0 pl-0">
                                    <span><strong>English</strong></span>
                                </div>
                            </div>
                        </b-card-body>

                    </b-card>

                </div>
            </div>
        </div>
        <Footer id="footer" />
    </div>
</template>
<script>
import InterpreterNavbar from '@/components/interpreter/InterpreterNavbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: "Dashboard",
    components: {
        InterpreterNavbar,
        Footer
    }
    
}
</script>

<style scoped>
#dashboard {
    background: #f7f7f7;
}
.normal-heights{
height:70vh;
}
.padded-heights{
height:70vh;
}
input:focus { 
  /* border: none !important; */
  outline: none !important;
    border:1px solid red;
    box-shadow:none;
}
.users{
 
    display: block;
    font-weight: 700;
    color: #0e0e0f;
    padding: 10px 0 7px;

}
         .container{max-width:1170px; margin:auto;}
img{ max-width:100%;}
.inbox_people {
  background: #ffffff none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 100%; border:1px solid #dcdcdc;
}
.inbox_msg {
  border: 1px solid #dcdcdc;
  clear: both;
  overflow: hidden;
}
.top_spac{ margin: 20px 0 0;}


.recent_heading {float: left; width:40%;}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%; 
  /* padding:1 mission*/
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #dcdcdc;}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 10%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #dcdcdc;
  margin: 0;
  padding: 18px 16px 10px;
}
.chat_list:hover {
background:#ebebeb;
}
.inbox_chat { height: 70vh; overflow-y: auto;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 10px;
  width: 60%;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {border-top: 1px solid #dcdcdc;position: relative;}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.file_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  right:36px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 70vh;
  overflow-y: auto;
}

/* width */	
::-webkit-scrollbar {	
  width: 10px;	
}	
 /* Track */	
::-webkit-scrollbar-track {	
  background: #f1f1f1; 	
}	
 	
/* Handle */	
::-webkit-scrollbar-thumb {	
  background: #888; 	
}	
 /* Handle on hover */	
::-webkit-scrollbar-thumb:hover {	
  background: #555; 	
}
</style>
