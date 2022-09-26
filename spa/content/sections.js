import{SvelteComponent,attr,check_outros,children,claim_component,claim_element,claim_space,create_component,destroy_component,detach,element,group_outros,init,insert,mount_component,safe_not_equal,space,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import About from"../components/about.js";import Steps from"../components/steps.js";import Features from"../components/features.js";import Services from"../components/services.js";import Testimonials from"../components/testimonials.js";import Portfolio from"../components/portfolio.js";import Team from"../components/team.js";import FAQ from"../components/faq.js";import Contact from"../components/contact.js";function create_if_block_4(){let t,n;return t=new Contact({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_3(){let t,s,n,o;return t=new Team({}),n=new FAQ({}),{c(){create_component(t.$$.fragment),s=space(),create_component(n.$$.fragment)},l(e){claim_component(t.$$.fragment,e),s=claim_space(e),claim_component(n.$$.fragment,e)},m(e,i){mount_component(t,e,i),insert(e,s,i),mount_component(n,e,i),o=!0},i(e){if(o)return;transition_in(t.$$.fragment,e),transition_in(n.$$.fragment,e),o=!0},o(e){transition_out(t.$$.fragment,e),transition_out(n.$$.fragment,e),o=!1},d(e){destroy_component(t,e),e&&detach(s),destroy_component(n,e)}}}function create_if_block_2(){let t,n;return t=new Portfolio({}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_1(){let t,s,n,o;return t=new Services({}),n=new Testimonials({}),{c(){create_component(t.$$.fragment),s=space(),create_component(n.$$.fragment)},l(e){claim_component(t.$$.fragment,e),s=claim_space(e),claim_component(n.$$.fragment,e)},m(e,i){mount_component(t,e,i),insert(e,s,i),mount_component(n,e,i),o=!0},i(e){if(o)return;transition_in(t.$$.fragment,e),transition_in(n.$$.fragment,e),o=!0},o(e){transition_out(t.$$.fragment,e),transition_out(n.$$.fragment,e),o=!1},d(e){destroy_component(t,e),e&&detach(s),destroy_component(n,e)}}}function create_if_block(){let t,o,n,i,s,a;return t=new About({}),n=new Steps({}),s=new Features({}),{c(){create_component(t.$$.fragment),o=space(),create_component(n.$$.fragment),i=space(),create_component(s.$$.fragment)},l(e){claim_component(t.$$.fragment,e),o=claim_space(e),claim_component(n.$$.fragment,e),i=claim_space(e),claim_component(s.$$.fragment,e)},m(e,r){mount_component(t,e,r),insert(e,o,r),mount_component(n,e,r),insert(e,i,r),mount_component(s,e,r),a=!0},i(e){if(a)return;transition_in(t.$$.fragment,e),transition_in(n.$$.fragment,e),transition_in(s.$$.fragment,e),a=!0},o(e){transition_out(t.$$.fragment,e),transition_out(n.$$.fragment,e),transition_out(s.$$.fragment,e),a=!1},d(e){destroy_component(t,e),e&&detach(o),destroy_component(n,e),e&&detach(i),destroy_component(s,e)}}}function create_fragment(e){let s,n,t,i;const a=[create_if_block,create_if_block_1,create_if_block_2,create_if_block_3,create_if_block_4],o=[];function r(e){return e[0]==="about"?0:e[0]==="services"?1:e[0]==="portfolio"?2:e[0]==="team"?3:e[0]==="contact"?4:-1}return~(n=r(e,-1))&&(t=o[n]=a[n](e)),{c(){s=element("main"),t&&t.c(),this.h()},l(e){s=claim_element(e,"MAIN",{class:!0});var n=children(s);t&&t.l(n),n.forEach(detach),this.h()},h(){attr(s,"class","svelte-z5cn10")},m(e,t){insert(e,s,t),~n&&o[n].m(s,null),i=!0},p(e,[i]){let c=n;n=r(e,i),n!==c&&(t&&(group_outros(),transition_out(o[c],1,1,()=>{o[c]=null}),check_outros()),~n?(t=o[n],t||(t=o[n]=a[n](e),t.c()),transition_in(t,1),t.m(s,null)):t=null)},i(){if(i)return;transition_in(t),i=!0},o(){transition_out(t),i=!1},d(e){e&&detach(s),~n&&o[n].d()}}}function instance(e,t,n){let{name:s}=t;return e.$$set=e=>{"name"in e&&n(0,s=e.name)},[s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{name:0})}}export default Component