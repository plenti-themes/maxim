import{SvelteComponent,claim_component,component_subscribe,create_component,destroy_component,init,mount_component,safe_not_equal,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Navaid from"../web_modules/navaid/dist/navaid.mjs";import Html from"../global/html.js";import{getContent}from"./main.js";import adminMenu from"./cms/admin_menu.js";import{user}from"./cms/auth.js";import allBlueprints from"./blueprints.js";function create_fragment(e){let t,n;return t=new Html({props:{path:e[0],params:e[1],content:e[2],layout:e[3],allContent:e[4],allLayouts:e[5],env:e[6],user,adminMenu}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,[n]){const s={};n&1&&(s.path=e[0]),n&2&&(s.params=e[1]),n&4&&(s.content=e[2]),n&8&&(s.layout=e[3]),n&16&&(s.allContent=e[4]),n&32&&(s.allLayouts=e[5]),n&64&&(s.env=e[6]),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function instance(e,t,n){let o;component_subscribe(e,user,e=>n(7,o=e));let{path:i}=t,{params:a}=t,{content:s}=t,{layout:r}=t,{allContent:d}=t,{allLayouts:h}=t,{env:c}=t;function m(e){n(2,s=getContent(i)),s===void 0&&(n(2,s=getContent("/404")),s===void 0&&n(2,s={path:"/404",type:"404",filename:"404.json",fields:{}})),n(3,r=e.default),window.scrollTo(0,0)}function u(e){n(0,i=e.state||e.uri||location.pathname),n(1,a=new URLSearchParams(location.search))}addEventListener("replacestate",u),addEventListener("pushstate",u),addEventListener("popstate",u);const l=()=>{import("../content/404.js").then(m).catch(e=>{console.log("Add a '/layouts/content/404.svelte' file to handle Page Not Found errors."),console.log("If you want to pass data to your 404 component, you can also add a '/content/404.json' file."),console.log(e)})},p=()=>{if(location.pathname!="/")return!1;if(location.hash.startsWith("#add/")&&o.isAuthenticated){const[e,t]=location.hash.substring("#add/".length).split("/"),o=allBlueprints.find(t=>t.type==e);return e&&t&&o?(import("../content/"+e+".js").then(e=>{n(2,s=structuredClone(o)),n(2,s.isNew=!0,s),n(2,s.filename=t+".json",s),n(2,s.filepath=s.filepath.replace("_blueprint.json",t+".json"),s),n(3,r=e.default)}).catch(l),!0):(l(),!0)}return!1},f=Navaid("/",l);return d.forEach(e=>{f.on((c.local?"":c.baseurl)+e.path,()=>{if(p())return;import("../content/"+e.type+".js").then(m).catch(l)})}),f.listen(),o.isBeingAuthenticated&&o.finishAuthentication(a),e.$$set=e=>{"path"in e&&n(0,i=e.path),"params"in e&&n(1,a=e.params),"content"in e&&n(2,s=e.content),"layout"in e&&n(3,r=e.layout),"allContent"in e&&n(4,d=e.allContent),"allLayouts"in e&&n(5,h=e.allLayouts),"env"in e&&n(6,c=e.env)},[i,a,s,r,d,h,c]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{path:0,params:1,content:2,layout:3,allContent:4,allLayouts:5,env:6})}}export default Component