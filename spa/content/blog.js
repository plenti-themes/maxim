import{SvelteComponent,append,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,empty,group_outros,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Uses from"../components/source.js";import{count}from"../scripts/stores.js";import Incrementer from"../components/incrementer.js";import Decrementer from"../components/decrementer.js";function get_each_context(e,t,n){const s=e.slice();return s[10]=t[n].name,s}function get_each_context_1(e,t,n){const s=e.slice();return s[13]=t[n],s}function create_if_block_3(e){let n,t;return{c(){n=text("Written by "),t=text(e[2])},l(s){n=claim_text(s,"Written by "),t=claim_text(s,e[2])},m(e,s){insert(e,n,s),insert(e,t,s)},p(e,n){n&4&&set_data(t,e[2])},d(e){e&&detach(n),e&&detach(t)}}}function create_if_block_2(e){let n,t;return{c(){n=text(" on "),t=text(e[3])},l(s){n=claim_text(s," on "),t=claim_text(s,e[3])},m(e,s){insert(e,n,s),insert(e,t,s)},p(e,n){n&8&&set_data(t,e[3])},d(e){e&&detach(n),e&&detach(t)}}}function create_each_block_1(e){let t,n=e[13]+"";return{c(){t=element("p")},l(e){t=claim_element(e,"P",{});var n=children(t);n.forEach(detach)},m(e,s){insert(e,t,s),t.innerHTML=n},p(e,s){s&2&&n!==(n=e[13]+"")&&(t.innerHTML=n)},d(e){e&&detach(t)}}}function create_if_block_1(e){let t,c,i,a,n,r,s,o;return n=new Incrementer({}),s=new Decrementer({}),{c(){t=element("h3"),c=text("The count is "),i=text(e[8]),a=space(),create_component(n.$$.fragment),r=space(),create_component(s.$$.fragment)},l(o){t=claim_element(o,"H3",{});var l=children(t);c=claim_text(l,"The count is "),i=claim_text(l,e[8]),l.forEach(detach),a=claim_space(o),claim_component(n.$$.fragment,o),r=claim_space(o),claim_component(s.$$.fragment,o)},m(e,l){insert(e,t,l),append(t,c),append(t,i),insert(e,a,l),mount_component(n,e,l),insert(e,r,l),mount_component(s,e,l),o=!0},p(e,t){(!o||t&256)&&set_data(i,e[8])},i(e){if(o)return;transition_in(n.$$.fragment,e),transition_in(s.$$.fragment,e),o=!0},o(e){transition_out(n.$$.fragment,e),transition_out(s.$$.fragment,e),o=!1},d(e){e&&detach(t),e&&detach(a),destroy_component(n,e),e&&detach(r),destroy_component(s,e)}}}function create_if_block(e){let s,o,n=e[6],t=[];for(let s=0;s<n.length;s+=1)t[s]=create_each_block(get_each_context(e,n,s));const i=e=>transition_out(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();s=empty()},l(e){for(let n=0;n<t.length;n+=1)t[n].l(e);s=empty()},m(e,n){for(let s=0;s<t.length;s+=1)t[s].m(e,n);insert(e,s,n),o=!0},p(e,o){if(o&192){n=e[6];let a;for(a=0;a<n.length;a+=1){const i=get_each_context(e,n,a);t[a]?(t[a].p(i,o),transition_in(t[a],1)):(t[a]=create_each_block(i),t[a].c(),transition_in(t[a],1),t[a].m(s.parentNode,s))}group_outros();for(a=n.length;a<t.length;a+=1)i(a);check_outros()}},i(){if(o)return;for(let e=0;e<n.length;e+=1)transition_in(t[e]);o=!0},o(){t=t.filter(Boolean);for(let e=0;e<t.length;e+=1)transition_out(t[e]);o=!1},d(e){destroy_each(t,e),e&&detach(s)}}}function create_each_block(e){let t,s,o;var n=e[7]["layouts_components_"+e[10]+"_svelte"];function i(){return{}}return n&&(t=new n(i(e))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert(e,s,n),o=!0},p(e){if(n!==(n=e[7]["layouts_components_"+e[10]+"_svelte"])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=new n(i(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let c,p,v,l,O,C,N,u,x,m,z,M,y,S,L,g,s,_,r,A,D,f,R,E,k,d,T,w,j,F,b,a=e[2]&&create_if_block_3(e),i=e[3]&&create_if_block_2(e),h=e[1],o=[];for(let t=0;t<h.length;t+=1)o[t]=create_each_block_1(get_each_context_1(e,h,t));let t=e[4]&&create_if_block_1(e),n=e[6]&&create_if_block(e);return d=new Uses({props:{content:e[5]}}),{c(){c=element("main"),p=element("section"),v=element("div"),l=element("div"),O=element("h2"),C=text(e[0]),N=space(),u=element("ol"),x=element("li"),m=element("a"),z=text("Home"),M=space(),y=element("li"),S=text(e[0]),L=space(),g=element("section"),s=element("div"),_=element("p"),r=element("em"),a&&a.c(),A=empty(),i&&i.c(),D=space(),f=element("div");for(let e=0;e<o.length;e+=1)o[e].c();R=space(),t&&t.c(),E=space(),n&&n.c(),k=space(),create_component(d.$$.fragment),T=space(),w=element("p"),j=element("a"),F=text("Back home"),this.h()},l(h){c=claim_element(h,"MAIN",{});var b,P,H,I,V,$,W,U,K,q,Y,G,X,Q,Z,B=children(c);p=claim_element(B,"SECTION",{class:!0}),G=children(p),v=claim_element(G,"DIV",{class:!0}),q=children(v),l=claim_element(q,"DIV",{class:!0}),H=children(l),O=claim_element(H,"H2",{}),U=children(O),C=claim_text(U,e[0]),U.forEach(detach),N=claim_space(H),u=claim_element(H,"OL",{}),P=children(u),x=claim_element(P,"LI",{}),$=children(x),m=claim_element($,"A",{href:!0}),W=children(m),z=claim_text(W,"Home"),W.forEach(detach),$.forEach(detach),M=claim_space(P),y=claim_element(P,"LI",{}),V=children(y),S=claim_text(V,e[0]),V.forEach(detach),P.forEach(detach),H.forEach(detach),q.forEach(detach),G.forEach(detach),L=claim_space(B),g=claim_element(B,"SECTION",{class:!0}),K=children(g),s=claim_element(K,"DIV",{class:!0}),b=children(s),_=claim_element(b,"P",{}),Y=children(_),r=claim_element(Y,"EM",{}),I=children(r),a&&a.l(I),A=empty(),i&&i.l(I),I.forEach(detach),Y.forEach(detach),D=claim_space(b),f=claim_element(b,"DIV",{}),X=children(f);for(let e=0;e<o.length;e+=1)o[e].l(X);X.forEach(detach),R=claim_space(b),t&&t.l(b),E=claim_space(b),n&&n.l(b),k=claim_space(b),claim_component(d.$$.fragment,b),T=claim_space(b),w=claim_element(b,"P",{}),Q=children(w),j=claim_element(Q,"A",{href:!0}),Z=children(j),F=claim_text(Z,"Back home"),Z.forEach(detach),Q.forEach(detach),b.forEach(detach),K.forEach(detach),B.forEach(detach),this.h()},h(){attr(m,"href","index.html"),attr(l,"class","d-flex justify-content-between align-items-center"),attr(v,"class","container"),attr(p,"class","breadcrumbs"),attr(j,"href","."),attr(s,"class","container"),attr(g,"class","inner-page")},m(e,h){insert(e,c,h),append(c,p),append(p,v),append(v,l),append(l,O),append(O,C),append(l,N),append(l,u),append(u,x),append(x,m),append(m,z),append(u,M),append(u,y),append(y,S),append(c,L),append(c,g),append(g,s),append(s,_),append(_,r),a&&a.m(r,null),append(r,A),i&&i.m(r,null),append(s,D),append(s,f);for(let e=0;e<o.length;e+=1)o[e].m(f,null);append(s,R),t&&t.m(s,null),append(s,E),n&&n.m(s,null),append(s,k),mount_component(d,s,null),append(s,T),append(s,w),append(w,j),append(j,F),b=!0},p(e,[c]){if((!b||c&1)&&set_data(C,e[0]),(!b||c&1)&&set_data(S,e[0]),e[2]?a?a.p(e,c):(a=create_if_block_3(e),a.c(),a.m(r,A)):a&&(a.d(1),a=null),e[3]?i?i.p(e,c):(i=create_if_block_2(e),i.c(),i.m(r,null)):i&&(i.d(1),i=null),c&2){h=e[1];let t;for(t=0;t<h.length;t+=1){const n=get_each_context_1(e,h,t);o[t]?o[t].p(n,c):(o[t]=create_each_block_1(n),o[t].c(),o[t].m(f,null))}for(;t<o.length;t+=1)o[t].d(1);o.length=h.length}e[4]?t?(t.p(e,c),c&16&&transition_in(t,1)):(t=create_if_block_1(e),t.c(),transition_in(t,1),t.m(s,E)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros()),e[6]?n?(n.p(e,c),c&64&&transition_in(n,1)):(n=create_if_block(e),n.c(),transition_in(n,1),n.m(s,k)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros());const l={};c&32&&(l.content=e[5]),d.$set(l)},i(e){if(b)return;transition_in(t),transition_in(n),transition_in(d.$$.fragment,e),b=!0},o(e){transition_out(t),transition_out(n),transition_out(d.$$.fragment,e),b=!1},d(e){e&&detach(c),a&&a.d(),i&&i.d(),destroy_each(o,e),t&&t.d(),n&&n.d(),destroy_component(d)}}}function instance(e,t,n){let{title:s}=t,{body:o}=t,{author:i}=t,{date:a}=t,{store:r}=t,{content:c}=t,l;const h=count.subscribe(e=>{n(8,l=e)});let{components:d}=t,{allLayouts:u}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"body"in e&&n(1,o=e.body),"author"in e&&n(2,i=e.author),"date"in e&&n(3,a=e.date),"store"in e&&n(4,r=e.store),"content"in e&&n(5,c=e.content),"components"in e&&n(6,d=e.components),"allLayouts"in e&&n(7,u=e.allLayouts)},[s,o,i,a,r,c,d,u,l]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,body:1,author:2,date:3,store:4,content:5,components:6,allLayouts:7})}}export default Component