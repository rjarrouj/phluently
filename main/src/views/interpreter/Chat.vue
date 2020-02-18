<template>
    <div id="dashboard">
        <InterpreterNavbar />
        <div class="container-fluid">
            <div class="row ml-1 mr-1 my-4" style="border:1px solid #dcdcdc" >
                <div class="col-md-3 pl-0 pr-0">
                    <div class="inbox_people">
                        <div class="headind_srch">
                            <div class="recent_heading">
                                <h4>Recent</h4>
                            </div>
                            <div class="srch_bar">
                                <div class="stylish-input-group">
                                    <input type="text" class="search-bar"  placeholder="Search" v-model="search" v-on:keydown="filter_name">
                                    <span class="input-group-addon">
                                    <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="inbox_chat">
                            <div v-for="(users,i) in  getMessagedUsers"   v-bind:key="i" class="chat_list active_chat" @click="fillProfile(users)">
                                <div class="chat_people">
                                    <div class="chat_img"> <img v-bind="userImage" class="rounded-circle" style="height:2rem;" :src="users.profile_image!=null? users.profile_image:'https://ptetutorials.com/images/user-profile.png'" alt="Anika"> </div>
                                    <div class="chat_ib">
                                        <h5>{{users.first_name}}  <span class="chat_date">{{chatdate(users.id).date}}</span></h5>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <p>{{chatdate(users.id).message}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  :class="this.selected_user!='' ? 'col-md-6 pl-0 pr-0 bg-white' : 'col-md-9 pl-0 pr-0 bg-white'" >
                    <div v-if="selected_messages.length>0" id="msg_containers" class="msg_history">
                      <div  v-for="(items,i) in selected_messages" :key="i">
                            <div v-if="items.sender_id!=lc_loggeduser.id" class="incoming_msg mt-2">
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>{{items.message}}</p>
                                        <span class="time_date"> {{items.date}}</span></div>
                                </div>
                            </div>
                            <div v-else class="outgoing_msg">
                                <div class="sent_msg mr-1">
                                    <p>{{items.message}}</p>
                                    <span class="time_date"> {{items.date}}</span> </div>
                            </div>
                        </div>
                    </div>
                    <div v-else id="msg_containers " class="msg_history">
                        <h6 class="text-danger mt-2">No Messages</h6>
                    </div>
                    <div v-if="selected_user!=''" class="type_msg">
                        <div class="input_msg_write">
                            <input type="text" class="write_msg ml-1 mr-1" style="border:none !important;" @keyup.enter="sendMessage()" v-model="message"   placeholder="Type a message" />
                            <button @click="sendMessage()" class="msg_send_btn"  type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                <div v-if="selected_user!=''" class="col-md-3 pl-0 pr-0 bg-white" style="border-left:1px solid #dcdcdc">
                    <b-card   tag="article" style="-webkit-box-shadow:none;border:none;" class="mb-2">
                        <template v:slot="header">
                            <h4 class="text-center"> <b> About </b></h4>
                        </template>
                        <b-card-body>
                            <div class="photo-container text-center">
                                <b-img class="pic" rounded="circle" v-bind="userImage" :src="selected_user.profile_image!=null ? selected_user.profile_image: 'https://ptetutorials.com/images/user-profile.png'" alt="" ></b-img>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h6 class="users text-center">{{selected_user!='' ? selected_user.first_name:'NA'}} {{selected_user.last_name}}</h6>
                                </div>
                                <div class="col-md-12">
                                    <h6 class="users text-muted text-center" style="margin-top:-15px;">{{selected_user!='' ? selected_user.email :'NA'}}</h6>
                                </div>

                            </div>
                            <div class="row text-center">
                                <div class="col-md-6">
                                    <span>Location</span>
                                </div>
                                <div class="col-md-6">
                                    <span><strong>{{selected_user!='' ? selected_user.location :'NA'}}</strong></span>
                                </div>
                            </div>
                            <div class="row text-center mt-4">
                                <div class="col-md-6 pl-0 pr-0">
                                    <span>Type</span>
                                </div>
                                <div class="col-md-6 pr-0 pl-0">
                                    <span><strong>{{selected_user!='' ? selected_user.type :'NA'}}</strong></span>
                                </div>
                            </div>
                            <div class="row text-center mt-4">
                                <div class="col-md-6 pl-0 pr-0">
                                    <span>Contact</span>
                                </div>
                                <div class="col-md-6 pr-0 pl-0">
                                    <span><strong>{{selected_user!='' ? selected_user.contact :'NA'}}</strong></span>
                                </div>
                            </div>
                            <div class="row text-center mt-4">
                                <div class="col-md-6 pl-0 pr-0">
                                    <span>Language</span>
                                </div>
                                <div class="col-md-6 pr-0 pl-0">
                                    <span><strong>{{selected_user!='' ? selected_user.languages :'NA'}}</strong></span>
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
import {mapGetters} from 'vuex'
import moment from 'moment'
import nativeToast from 'native-toast'
export default {
    name: "Dashboard",
    components: {
        InterpreterNavbar,
        Footer
    },
    created(){
        this.filters=this.users
        this.lc_loggeduser=JSON.parse(localStorage.getItem('loggedUser'));

    },
    mounted(){
        this.filters=this.users
        this.lc_loggeduser=JSON.parse(localStorage.getItem('loggedUser'));

    },
    data(){
        return{
            search:'',
            lc_loggeduser:'',
            selected_user:'',
            new_msg_connection:false,
            message:'',
            userImage: { blank: false, blankColor: '#777', width: 100, height: 100, class: ''}
        }
    },
    methods:{
        
        sendMessage(){
            let new_messages=1;
            if(this.message!='') {
            var dates = new Date();  
            var hours = dates.getHours();
            var minutes = dates.getMinutes();
            var last_time = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + dates.getSeconds()).slice(-2);  
            var last_date =dates.getFullYear() +'-'+ ('0' + (dates.getMonth()+1)).slice(-2) + '-' + ('0' + dates.getDate()).slice(-2) ;

            let date=moment().format('LT')+" | "+moment().format('D MMM') ;
            if(this.lc_loggeduser.message_connections==null) {
                console.log("sending message to a new person")
                this.new_msg_connection=true
            }
            else{
                let exists=Object.keys(this.lc_loggeduser.message_connections).find(key=>this.lc_loggeduser.message_connections[key].id==this.selected_user.id)
                console.log("connections not empty but same connections appear")
                if(exists==null) {
                this.new_msg_connection=true
                }
            }
            //if selected user has message connections and you 
            // want to check how many new messages you have with 
            // this guy
            if(this.selected_user.message_connections!=null){
            let yourself=Object.keys(this.selected_user.message_connections).find(key=>this.selected_user.message_connections[key].id==this.lc_loggeduser.id)
            //how many msgs i hv with this guy 
            console.log(yourself)
            if(yourself!=null){
                if(this.selected_user.message_connections[yourself].new_messages!=null) {
                new_messages=this.selected_user.message_connections[yourself].new_messages+1
                this.selected_user.message_connections[yourself].new_messages=new_messages
                }
            }
                
            }
            else {
                console.log("this guy doesnt have any messages with anybody")
            }

            let msg_obj={
            date:date,
            message:this.message,
            last_date:last_date,
            last_time:last_time,
            receiver_id:this.selected_user.id,
            sender_id:this.lc_loggeduser.id,
            message_connection:this.new_msg_connection,
            new_messages:new_messages
            }
            console.log(msg_obj)
            this.$store.dispatch('sendMessages',msg_obj)
            this.message=''
            this.scroller()
            this.new_msg_connection=false
            this.search=''

            }
            else {
                nativeToast({
                message: 'Please fill message field',
                position: 'north-east',
                timeout: 3000,
                type: 'error'
                })
            }
            
        },
        fillProfile(arg_user) {
            // if(arg_user.new_messages!=null && arg_user.new_messages>0) {
            //     let op_user=this.getUsers.find(user=>user.id==arg_user.id)
            //     op_user.new_messages=0
            //     this.unsetNewMessages({sender_id:this.lc_loggeduser.id,receiver_id:arg_user.id})
            // }

            this.selected_user=arg_user;
            
            // this.scroller()
        },
        scroller(){
        var container = this.$el.querySelector("#msg_containers"); 
        this.typed_message=''
        this.$nextTick(() => {
            if(container.scrollHeight!=null){
            container.scrollTop = container.scrollHeight;        
            }
            });
        },
        chatdate(id){
        let arrs= this.getMessages.filter(messages_item=>(messages_item.sender_id==this.lc_loggeduser.id && messages_item.receiver_id==id) || (messages_item.receiver_id==this.lc_loggeduser.id && messages_item.sender_id==id)) 
        if(arrs.length>0){
            let dt=arrs[arrs.length-1].date.split('|')
            return {date:dt[1],message:arrs[arrs.length-1].message}
        }
        else{
        return {date:'NA',message:'No messages yet'}
        }
        },
        filter_name() {
        let arrs=this.users.filter(user_item=>user_item.id!=this.lc_loggeduser.id && user_item.first_name.toLowerCase().includes(this.search.toLowerCase()))
                if(arrs.length>0){
                this.filters=arrs

                }
                else{
                    this.filters=[]
                }
        },
    },
    computed:{
        
        ...mapGetters({users:'getUsers',getMessages:'getMessages'}),
        selected_messages() {
        return this.getMessages.filter(messages_item=>(messages_item.sender_id==this.lc_loggeduser.id && messages_item.receiver_id==this.selected_user.id) || (messages_item.receiver_id==this.lc_loggeduser.id && messages_item.sender_id==this.selected_user.id)) 
        },
        getMessagedUsers() {
        if(this.lc_loggeduser.message_connections!=null) {
         return Object.keys(this.lc_loggeduser.message_connections).map(key=>{
              let use=this.filters.find(item=>item.id==this.lc_loggeduser.message_connections[key].id)
              return {...use,new_messages:this.lc_loggeduser.message_connections[key].new_messages,last_time:this.lc_loggeduser.message_connections[key].last_time,last_date:this.lc_loggeduser.message_connections[key].last_date}
          })
        }
        else {
          return []
        }
    },
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
