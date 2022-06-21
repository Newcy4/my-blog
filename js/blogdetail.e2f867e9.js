"use strict";(self["webpackChunkmy_site"]=self["webpackChunkmy_site"]||[]).push([[242],{3069:function(t,e,a){a.d(e,{Z:function(){return D}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-area-container"},[a("DataForm",t._g({},t.$listeners)),a("h3",[t._v(" "+t._s(t.title)+" "),a("span",[t._v(t._s(t.subTitle))])]),a("DataList",{attrs:{list:t.list}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"form",staticClass:"data-form-container",attrs:{id:"data-form-container"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"input-area"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{type:"text",maxlength:"10",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickname",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/10")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.nickname))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxlength:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.content))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"button-area"},[a("button",{attrs:{disabled:t.isSubmiting}},[t._v(" "+t._s(t.isSubmiting?"提交中...":"提交")+" ")])])])])},o=[],r={data(){return{formData:{nickname:"",content:""},error:{nickname:"",content:""},isSubmiting:!1}},methods:{handleSubmit(){this.error.nickname=this.formData.nickname?"":"请填写昵称",this.error.content=this.formData.content?"":"请填写内容",this.error.nickname||this.error.content||(this.isSubmiting=!0,this.$emit("submit",this.formData,(t=>{this.$showMessage({content:t,type:"success",duration:1e3,container:this.$refs.form,callback:()=>{this.isSubmiting=!1,this.formData.nickname="",this.formData.content=""}})})))}}},l=r,c=a(1001),u=(0,c.Z)(l,s,o,!1,null,"d2076024",null),d=u.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"data-list-container"},t._l(t.list,(function(e){return a("li",{key:e.id},[a("Avatar",{attrs:{url:e.avatar,size:44}}),a("div",{staticClass:"data"},[a("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),a("div",{staticClass:"content"},[t._v(t._s(e.content))]),a("div",{staticClass:"time"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])],1)})),0)},m=[],f=a(8212),g=a(1893),p={components:{Avatar:f.Z},props:{list:{type:Array,default:()=>[]}},methods:{formatDate:g.p6}},v=p,_=(0,c.Z)(v,h,m,!1,null,"95419af6",null),b=_.exports,y={props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:()=>[]},isListLoading:{type:Boolean,default:!1}},components:{DataForm:d,DataList:b}},S=y,C=(0,c.Z)(S,i,n,!1,null,"2ea69820",null),D=C.exports},4122:function(t,e,a){a.r(e),a.d(e,{default:function(){return T}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{scopedSlots:t._u([{key:"right",fn:function(){return[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"right-container"},[t.data?a("BlogTOC",{attrs:{toc:t.data.toc}}):t._e()],1)]},proxy:!0}])},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"mainContainer",staticClass:"main-container"},[t.data?a("BlogDetail",{staticClass:"markdown-body",attrs:{blog:t.data}}):t._e(),t.isLoading?t._e():a("BlogComment")],1)])},n=[],s=a(1669),o=a(7491),r=a(4217),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-detail-container"},[a("h1",[t._v(t._s(t.blog.title))]),a("div",{staticClass:"aside"},[a("span",[t._v("日期："+t._s(t.formatDate(t.blog.createDate)))]),a("span",[t._v("浏览："+t._s(t.formatDate(t.blog.scanNumber)))]),a("a",{attrs:{href:"#data-form-container"}},[t._v("评论："+t._s(t.blog.commentNumber))]),a("RouterLink",{attrs:{to:{name:"CategoryBlog",params:{categoryId:t.blog.category.id}}}},[t._v(t._s(t.blog.category.name))])],1),a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.blog.htmlContent)}})])},c=[],u=a(1893),d={props:{blog:{type:Object,required:!0}},methods:{formatDate:u.p6}},h=d,m=a(1001),f=(0,m.Z)(h,l,c,!1,null,"3b5e9896",null),g=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-toc-container"},[a("h2",[t._v("目录")]),a("RightList",{attrs:{list:t.tocWithSelect},on:{select:t.handleSelect}})],1)},v=[],_=a(5225),b={components:{RightList:_.Z},props:{toc:Array},data(){return{activeAnchor:""}},computed:{tocWithSelect(){const t=(e=[])=>e.map((e=>({...e,isSelect:e.anchor===this.activeAnchor,children:t(e.children)})));return t(this.toc)},doms(){const t=[],e=a=>{for(const i of a)t.push(document.getElementById(i.anchor)),i.children&&i.children.length&&e(i.children)};return e(this.toc),t}},methods:{handleSelect(t){location.hash=t.anchor},setSelect(t){if(!t)return;this.activeAnchor="";const e=200;for(const a of this.doms){if(!a)continue;const t=a.getBoundingClientRect().top;if(t>=0&&t<=e)return void(this.activeAnchor=a.id);if(t>e)return;this.activeAnchor=a.id}}},created(){this.setSelectDebounce=(0,u.Ds)(this.setSelect,50),this.$bus.$on("mainScroll",this.setSelectDebounce)},destroyed(){this.$bus.$off("mainScroll",this.setSelectDebounce)}},y=b,S=(0,m.Z)(y,p,v,!1,null,"6964b60e",null),C=S.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-comment-container"},[a("MessageArea",{attrs:{title:"评论列表",subTitle:"("+t.data.total+")",list:t.data.rows,isListLoading:t.isLoading},on:{submit:t.handleSubmit}})],1)},$=[],k=a(3069),L={mixins:[(0,s.Z)({total:0,rows:[]})],components:{MessageArea:k.Z},data(){return{page:1,limit:10}},computed:{hasMore(){return this.data.rows.length<this.data.total}},created(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed(){this.$bus.$off("mainScroll",this.handleScroll)},methods:{async fetchData(){return await(0,o.li)(this.$route.params.id,this.page,this.limit)},async fetchMore(){if(!this.hasMore)return;this.isLoading=!0,this.page++;const t=await this.fetchData();this.data.total=t.total,this.data.rows=this.data.rows.concat(t.rows),this.isLoading=!1},async handleScroll(t){if(this.isLoading||!t)return;const e=100,a=Math.abs(t.scrollTop+t.clientHeight-t.scrollHeight);a<=e&&this.fetchMore()},async handleSubmit(t,e){const a=await(0,o.w)({blogId:this.$route.params.id,formData:t});this.data.rows.unshift(a),this.data.total++,e("评论成功")}}},w=L,Z=(0,m.Z)(w,D,$,!1,null,"6ce45dc8",null),x=Z.exports,M=a(3079),A={mixins:[(0,s.Z)(null),(0,M.Z)("mainContainer")],components:{Layout:r.Z,BlogDetail:g,BlogTOC:C,BlogComment:x},methods:{async fetchData(){let t=await(0,o.x3)(this.$route.params.id);if(t)return t&&t.title&&u.fA.setRouteTitle(t.title),t;this.$router.push("/404")}},updated(){const t=location.hash;location.hash="",setTimeout((()=>{location.hash=t}),50)}},E=A,B=(0,m.Z)(E,i,n,!1,null,"141db2ee",null),T=B.exports},5225:function(t,e,a){a.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"right-list-container"},t._l(t.list,(function(e,i){return a("li",{key:i},[a("span",{class:{active:e.isSelect},on:{click:function(a){return t.handleClick(e)}}},[t._v(t._s(e.name))]),e.aside?a("span",{staticClass:"aside",class:{active:e.isSelect},on:{click:function(a){return t.handleClick(e)}}},[t._v(t._s(e.aside))]):t._e(),a("RightList",{attrs:{list:e.children},on:{select:t.handleClick}})],1)})),0)},n=[],s={name:"RightList",props:{list:{type:Array,default:()=>[]}},methods:{handleClick(t){t.isSelect||this.$emit("select",t)}}},o=s,r=a(1001),l=(0,r.Z)(o,i,n,!1,null,"5b7a91a4",null),c=l.exports},7491:function(t,e,a){a.d(e,{Dc:function(){return s},_Z:function(){return n},li:function(){return l},w:function(){return r},x3:function(){return o}});var i=a(7908);async function n(t=1,e=10,a=-1){return await i.Z.get("/api/blog",{params:{page:t,limit:e,categoryid:a}})}async function s(){return await i.Z.get("/api/blogtype")}async function o(t){return await i.Z.get(`/api/blog/${t}`)}async function r(t){return await i.Z.post("/api/comment",t)}async function l(t,e=1,a=10){return await i.Z.get("/api/comment",{params:{blogid:t,page:e,limit:a}})}},1669:function(t,e,a){function i(t=null){return{data(){return{isLoading:!0,data:t}},async created(){this.data=await this.fetchData(),this.isLoading=!1}}}a.d(e,{Z:function(){return i}})},3079:function(t,e,a){function i(t){return{mounted(){this.$refs[t].addEventListener("scroll",this.handleMainScroll),this.$bus.$on("setMainScroll",this.handleSetMainScroll)},beforeDestroy(){this.$bus.$emit("mainScroll",void 0),this.$refs[t].removeEventListener("scroll",this.handleMainScroll),this.$bus.$off("setMainScroll",this.handleSetMainScroll)},methods:{handleMainScroll(){this.$bus.$emit("mainScroll",this.$refs[t])},handleSetMainScroll(e){this.$refs[t].scrollTop=e}}}}a.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=blogdetail.e2f867e9.js.map