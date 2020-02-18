<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
          <apexchart type="line" height="350" :options="tempsops" :series="series"></apexchart>

      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
                  <apexchart type="line" height="350" :options="weeklychartOptions" :series="weeklySeries"></apexchart>
      </div>
      
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <apexchart width="350" height="350" type="bar" :options="monthlyChartOptions" :series="monthlySeries"></apexchart>

        <!-- <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Yearly Revenue</h4>
            <p class="category">
              Round the year revenue analysis
            </p>
          </template>

        
        </chart-card> -->
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>work</md-icon>
          </template>

          <template slot="content">
            <p style="font-size:0.70rem;color:black;" class="category">Active Jobs</p>
            <h3 class="title">{{active_jobs.length}}</h3>
          </template>

          <!-- <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template> -->
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green">
          <template slot="header">
            <!-- <md-icon>work</md-icon> -->
            <i class="fa fa-money"></i>
          </template>

          <template slot="content">
            <p style="font-size:0.70rem;color:black;" class="category">Pending Payments</p>
            <h3 class="title">{{pending_payments.length}}</h3>
          </template>

          <!-- <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              Tracked from Github
            </div>
          </template> -->
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>supervised_user_circle</md-icon>
          </template>

          <template slot="content">
            <p style="font-size:0.70rem;color:black;" class="category">Interpreters</p>
            <h3 class="title">
              {{service_providers.length}}
              <!-- <small>GB</small> -->
            </h3>
          </template>

          <!-- <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Get More Space...</a>
            </div>
          </template> -->
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <i class="fas fa-users"></i>
          </template>

          <template slot="content">
            <p style="font-size:0.70rem;color:black;" class="category">Businesses</p>
            <h3 class="title">{{clients.length}}</h3>
          </template>

          <!-- <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template> -->
        </stats-card>
      </div>
      <!-- <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Employees Stats</h4>
            <p class="category">New employees on 15th September, 2016</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div> -->
      <!-- <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Tasks:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Website" md-icon="code">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="server" md-icon="cloud">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div> -->
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";
import moment from 'moment';
export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  computed:{
    ...mapGetters(['pending_payments','clients','service_providers','active_jobs','pending_jobs','paid_payments'])
  },
  watch:{
    paid_payments() {
      this.todaysSale()
      this.weeksale()
      this.monthlySale()

    },
    
  },
  created(){
     this.todaysSale()
     this.weeksale()
     this.monthlySale()

  },
  methods:{
    monthlySale(){
      this.paid_payments.forEach(item=>{
        // monthly_sales
        let dates=item.payment_time.split(' ')[0]
        console.log()
        if(dates.split('-')[1]=='01'){
              this.monthly_sales[0]=parseFloat(this.monthly_sales[0])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='02'){
              this.monthly_sales[1]=parseFloat(this.monthly_sales[1])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='03'){
              this.monthly_sales[2]=parseFloat(this.monthly_sales[2])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='04'){
              this.monthly_sales[3]=parseFloat(this.monthly_sales[3])+parseFloat(item.amount)
        }
        if(dates.split('-')[1]=='05'){
              this.monthly_sales[4]=parseFloat(this.monthly_sales[4])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='06'){
              this.monthly_sales[5]=parseFloat(this.monthly_sales[5])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='07'){
              this.monthly_sales[6]=parseFloat(this.monthly_sales[6])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='08'){
              this.monthly_sales[7]=parseFloat(this.monthly_sales[7])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='09'){
              this.monthly_sales[8]=parseFloat(this.monthly_sales[8])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='10'){
              this.monthly_sales[9]=parseFloat(this.monthly_sales[9])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='11'){
              this.monthly_sales[10]=parseFloat(this.monthly_sales[10])+parseFloat(item.amount)
        }
        else if(dates.split('-')[1]=='12'){
              this.monthly_sales[11]=parseFloat(this.monthly_sales[11])+parseFloat(item.amount)
        }
        // if(item)
        // this.monthly_sales[0]
        this.monthlySeries[0].data=this.monthly_sales

      })
    },
    weeksale(){
      var currentDate = moment();
      var weekStart = currentDate.clone().startOf('isoWeek');
      var weekEnd = currentDate.clone().endOf('isoWeek');
      var days = [];
      for (var i = 0; i <= 6; i++) {
        days.push(moment(weekStart).add(i, 'days').format("YYYY-MM-DD"));
      }
       this.paid_payments.forEach(item=>{
        let dates=item.payment_time.split(' ')[0]
         if(dates==days[0]) {
              this.week_sales[0]=parseFloat(this.week_sales[0])+parseFloat(item.amount)
         }
         else if(dates==days[1]) {
              this.week_sales[1]=parseFloat(this.week_sales[1])+parseFloat(item.amount)
         }
         else if(dates==days[2]) {
              this.week_sales[2]=parseFloat(this.week_sales[2])+parseFloat(item.amount)
         }
         else if(dates==days[3]) {
              this.week_sales[3]=parseFloat(this.week_sales[3])+parseFloat(item.amount)
         }
         else if(dates==days[4]) {
              this.week_sales[4]=parseFloat(this.week_sales[4])+parseFloat(item.amount)
         }
         else if(dates==days[5]) {
              this.week_sales[5]=parseFloat(this.week_sales[5])+parseFloat(item.amount)
         }
         else if(dates==days[6]) {
              this.week_sales[6]=parseFloat(this.week_sales[6])+parseFloat(item.amount)
         }
       })
        this.weeklySeries[0].data=this.week_sales

    },
    todaysSale(){
      let today=moment().format("YYYY-MM-DD")
      this.paid_payments.forEach(item=>{
      if(today==item.payment_time.split(' ')[0]){
        let time=item.payment_time.split(' ')[1]
        let hour=time.split(':')[0]
        if(hour>=1 && hour<9) {
              if(this.today_sales.length>0){
                this.today_sales[0]=parseFloat(this.today_sales[0])+parseFloat(item.amount)
                console.log(this.today_sales[0])

            }
          }
        else if(hour>=9 && hour<=12) {
              if(this.today_sales.length>0){
                this.today_sales[1]=parseFloat(this.today_sales[1])+parseFloat(item.amount)
            }
          }
          else if(hour>12 && hour<=15){
            this.today_sales[2]=parseFloat(this.today_sales[2])+parseFloat(item.amount)
          }
          else if(hour>15 && hour<=18) {
            this.today_sales[3]=parseFloat(this.today_sales[3])+parseFloat(item.amount)
          }
          else if(hour>19 && hour<=21) {
            this.today_sales[4]=parseFloat(this.today_sales[4])+parseFloat(item.amount)
          }
          else if(hour>21 && hour<=24) {
            this.today_sales[5]=parseFloat(this.today_sales[5])+parseFloat(item.amount)
          }
        }
        this.series[0].data=this.today_sales
    })

    }
    
  },
  data() {
    return {
      today_sales:[0,0,0,0,0,0],
      week_sales:[0,0,0,0,0,0,0],
      monthly_sales:[0,0,0,0,0,0,0,0,0,0,0,0],
      monthlyChartOptions: {
        chart: {
          id: 'basic-bar'
        },
        title: {
          text: 'Monthly Sales Analytics',
          align: 'left'
        },
        
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Ja', 'Fe', 'Ma', 'Ap', 'Ma', 'Ju', 'Ju', 'Au', 'Se','Oc','No','De']
        }
      },
      monthlySeries: [{
        name: 'Monthly Sales',
        data: [30, 40, 45, 50, 49, 700, 70, 91]
      }],
      weeklySeries: [{
          name: "Weekly Sales",
          data: [0, 0, 0, 0, 0, 0, 0]
      }],
      series: [{
          name: "Daily Sales",
          data: [0, 0, 0, 0, 0, 0]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Daily Sales Analytics',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ["9am", "12pm", "3pm", "6pm", "9pm",'12am'],
        }
      },
      tempsops: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Daily Sales Analytics',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ["9am", "12pm", "3pm", "6pm", "9pm","12am"],
        }
      },
      weeklychartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Weekly Sales Analytics',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri","Sat","Sun"],
        }
      }
    //   dailySalesChart: {
    //     data: {
    //       labels: ["M", "T", "W", "T", "F", "S", "S"],
    //       series: [[12, 17, 7, 17, 23, 18, 38]]
    //     },
    //     options: {
    //       lineSmooth: this.$Chartist.Interpolation.cardinal({
    //         tension: 0
    //       }),
    //       low: 0,
    //       high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    //       chartPadding: {
    //         top: 0,
    //         right: 0,
    //         bottom: 0,
    //         left: 0
    //       }
    //     }
    //   },
    //   dataCompletedTasksChart: {
    //     data: {
    //       labels: ["9am", "12pm", "3pm", "6pm", "9pm",'12am'],
    //       series: [[ 450, 280, 240, 200, 1900,200]]
    //     },

    //     options: {
    //       lineSmooth: this.$Chartist.Interpolation.cardinal({
    //         tension: 0
    //       }),
    //       low: 0,
    //       high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    //       chartPadding: {
    //         top: 0,
    //         right: 0,
    //         bottom: 0,
    //         left: 0
    //       }
    //     }
    //   },
    //   emailsSubscriptionChart: {
    //     data: {
    //       labels: [
    //         "Ja",
    //         "Fe",
    //         "Ma",
    //         "Ap",
    //         "Mai",
    //         "Ju",
    //         "Jul",
    //         "Au",
    //         "Se",
    //         "Oc",
    //         "No",
    //         "De"
    //       ],
    //       series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
    //     },
    //     options: {
    //       axisX: {
    //         showGrid: false
    //       },
    //       low: 0,
    //       high: 1000,
    //       chartPadding: {
    //         top: 0,
    //         right: 5,
    //         bottom: 0,
    //         left: 0
    //       }
    //     },
    //     responsiveOptions: [
    //       [
    //         "screen and (max-width: 640px)",
    //         {
    //           seriesBarDistance: 5,
    //           axisX: {
    //             labelInterpolationFnc: function(value) {
    //               return value[0];
    //             }
    //           }
    //         }
    //       ]
    //     ]
    //   }
     };
  }
};
</script>
