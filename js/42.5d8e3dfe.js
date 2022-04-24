"use strict";(globalThis["webpackChunkTaron"]=globalThis["webpackChunkTaron"]||[]).push([[42],{3042:(t,e,s)=>{s.r(e),s.d(e,{default:()=>w});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("v-main",{ref:"content"},[t.cards&&t.readings?[s("h4",[t._v(t._s(t.question))]),s("section",[s("card-result",{attrs:{cardId:t.selectedCards[0],bodyPart:0,disabled:t.unlocking},on:{flip:function(e){return t.onFlip()}}})],1),s("section",[s("card-result",{attrs:{cardId:t.selectedCards[1],bodyPart:1,disabled:t.unlocking},on:{flip:function(e){return t.onFlip()}}}),t.unlock?s("card-result",{attrs:{special:"",cardId:t.navelCardId,bodyPart:5,disabled:t.unlocking},on:{flip:function(e){return t.onFlip()}}}):t._e(),s("card-result",{attrs:{cardId:t.selectedCards[2],bodyPart:2,disabled:t.unlocking},on:{flip:function(e){return t.onFlip()}}})],1),s("section",[s("card-result",{attrs:{cardId:t.selectedCards[3],bodyPart:3,disabled:t.unlocking},on:{flip:function(e){return t.onFlip()}}}),s("card-result",{attrs:{cardId:t.selectedCards[4],bodyPart:4,disabled:t.unlocking},on:{flip:function(e){return t.onFlip()}}})],1)]:t._e()],2),s("v-bottom-sheet",{staticClass:"elevation-8",model:{value:t.newConsultationDialog,callback:function(e){t.newConsultationDialog=e},expression:"newConsultationDialog"}},[s("h2",[t._v("Iniciar outra consulta ?")]),s("footer",[s("v-btn",{attrs:{text:""},on:{click:function(e){t.newConsultationDialog=!1}}},[s("v-icon",[t._v("clear")]),t._v("Não")],1),s("v-btn",{attrs:{color:"primary"},on:{click:t.reset}},[s("v-icon",[t._v("check")]),t._v("Sim")],1)],1)]),t.opened>=6?s("v-btn",{staticClass:"floating",attrs:{fixed:"",fab:"",small:"",color:"primary"},on:{click:function(e){t.newConsultationDialog=!0}}},[s("v-icon",[t._v("refresh")])],1):t._e(),t.cards&&t.readings?t._e():s("loading")],1)},r=[],a=s(4975),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{class:{special:t.special}},[s("v-overlay",{model:{value:t.expand,callback:function(e){t.expand=e},expression:"expand"}}),s("section",{class:{flip:t.flip,expand:t.expand,contract:t.contract},on:{click:t.toggleFlip}},[s("figure",{class:t.aspect},[s("img",{staticClass:"elevation-4",attrs:{src:"/img/cards/back.webp",alt:"Card"}}),t.card?s("img",{ref:"card",staticClass:"elevation-4",class:{expand:t.expand},attrs:{src:t.card.img,onerror:"this.src='/img/cards/fallback.webp'",alt:"Card"}}):t._e(),t.expand&&!t.contract?s("figcaption",[s("h2",[t._v(t._s(t.readings.body))]),s("p",[t._v(t._s(t.readings.description))]),s("p",[t._v(t._s(t.cardDescription()))]),t.card.id<=22?[s("footer",[s("label",[t._v("Possíveis interpretações positivas")]),s("span",[t._v(t._s(t.card.positive))])]),s("footer",[s("label",[t._v("Possíveis interpretações negativas")]),s("span",[t._v(t._s(t.card.negative))])])]:[s("footer",[s("label",[t._v("Possíveis interpretações")]),s("span",[t._v(t._s(t.card.description))])])]],2):t._e()]),t.expand&&!t.contract?s("v-btn",{staticClass:"floating",attrs:{absolute:"",fab:"",small:""}},[s("v-icon",[t._v("clear")])],1):t._e()],1)],1)},o=[];const d={name:"card-result",props:{cardId:Number,bodyPart:Number,disabled:Boolean,special:Boolean},computed:{card(){return this.$store.state.cards.find((t=>t.id==this.cardId))},readings(){return this.$store.state.readings[this.bodyPart]}},data(){return{flip:!1,expand:!1,contract:!1,aspect:null}},mounted(){this.refreshWindowSize(),this.$root.$on("resize",(()=>{this.refreshWindowSize()}))},methods:{toggleFlip(){return!this.disabled&&((!this.expand||!this.contract)&&(this.$root.$emit("audioPlay","card-select"),this.flip?(this.refreshCardPosition(),this.expand?(this.contract=!0,setTimeout((()=>{this.$emit("close"),this.expand=!1,this.contract=!1}),350)):this.expand=!0):(this.flip=!this.flip,this.$emit("flip")),void this.$forceUpdate()))},cardDescription(){return this.card.id<=22?this.readings.arcano:this.card.value>=11?this.readings.court:this.readings.numeric},refreshWindowSize(){let t=window.innerHeight/3-56,e=100*t/462,s=256*e/100;document.documentElement.style.setProperty("--card-result-width",`${s}px`),document.documentElement.style.setProperty("--card-result-height",`${t}px`),this.aspect=window.innerWidth>window.innerHeight?"horizontal":"vertical",this.refreshCardPosition()},refreshCardPosition(){let t=window.innerWidth>1e3?(window.innerWidth-1e3)/2:0;this.$el.style.setProperty("--offset-top",`-${this.$el.offsetTop}px`),this.$el.style.setProperty("--offset-left",`-${this.$el.offsetLeft+t}px`),this.refreshCardWidth()},refreshCardWidth(){setTimeout((()=>{this.$refs.card&&this.$el.style.setProperty("--card-expanded-width",`${this.$refs.card.width}px`)}),300)}}},l=d;var c=s(1001),h=s(3453),u=s.n(h),p=s(7080),f=s(4926),g=s(4042),v=(0,c.Z)(l,n,o,!1,null,"59180b9a",null);const m=v.exports;u()(v,{VBtn:p.Z,VIcon:f.Z,VOverlay:g.Z});const b={components:{loading:a.Z,cardResult:m},computed:{question(){return sessionStorage.getItem("question")},cards:{get(){return this.$store.state.cards},set(t){this.$store.commit("setCards",t)}},readings:{get(){return this.$store.state.readings},set(t){this.$store.commit("setReadings",t)}},selectedCards:{get(){return this.$store.state.selectedCards},set(t){this.$store.commit("setSelectedCards",t)}}},data(){return{opened:0,unlocking:!1,unlock:!1,navelCardId:null,newConsultationDialog:!1}},created(){this.selectedCards.length<5&&this.$router.push("/"),this.cards.length?this.getCardsValues():this.getCards(),this.getReadings()},mounted(){document.documentElement.style.setProperty("--result-screen-offset-top",(window.innerHeight-this.$refs.content.$el.clientHeight)/2+"px")},methods:{getReadings(){this.axios.get("/json/readings.json").then((t=>{this.readings=t.data}))},getCards(){this.axios.get("/json/cards.json").then((t=>{this.cards=t.data,this.getCardsValues()}))},getCardsValues(){let t=this.cards.slice(0).filter((t=>this.selectedCards.includes(t.id))).map((t=>t.value));this.findNavelCard(t)},onFlip(){return this.opened++,!this.unlock&&(!(this.opened<5)&&(this.unlocking=!0,this.unlock=!0,this.$root.$emit("audioPlay","bell"),void setTimeout((()=>{this.unlocking=!1}),3e3)))},findNavelCard(t){let e;"object"!=typeof t&&(t=t.toString().split("").map((t=>parseInt(t)))),e=t.reduce(((t,e)=>t+e),0),e>22?this.findNavelCard(e):this.navelCardId=e},reset(){sessionStorage.removeItem("selectedCards"),this.selectedCards=[],this.$router.push("/")}}},C=b;var $=s(8738),_=s(4768),x=(0,c.Z)(C,i,r,!1,null,"138d19eb",null);const w=x.exports;u()(x,{VBottomSheet:$.Z,VBtn:p.Z,VIcon:f.Z,VMain:_.Z})}}]);