import{SvelteComponent,append,attr,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,detach,element,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Breadcrumbs from"../components/breadcrumbs.js";function create_fragment(e){let o,u,J,l,m,a,h,r,n,_,y,oe,Q,f,p,se,G,b,j,ne,U,x,D,c,s,E,z,B,t,w,F,I,L,N,O,k,R,P,H,g,A,V,$,W,d,C,q,Y,v,X,te,i,T,ee,K,S,Z,M;return u=new Breadcrumbs({}),{c(){o=element("main"),create_component(u.$$.fragment),J=space(),l=element("section"),m=element("div"),a=element("div"),h=element("div"),r=element("div"),n=element("div"),_=element("div"),y=element("img"),Q=space(),f=element("div"),p=element("img"),G=space(),b=element("div"),j=element("img"),U=space(),x=element("div"),D=space(),c=element("div"),s=element("div"),E=element("h3"),z=text(e[0]),B=space(),t=element("ul"),w=element("li"),F=element("strong"),I=text("Category"),L=text(": Web design"),N=space(),O=element("li"),k=element("strong"),R=text("Client"),P=text(": ASU Company"),H=space(),g=element("li"),A=element("strong"),V=text("Project date"),$=text(": 01 March, 2020"),W=space(),d=element("li"),C=element("strong"),q=text("Project URL"),Y=text(": "),v=element("a"),X=text("www.example.com"),te=space(),i=element("div"),T=element("h2"),ee=text("This is an example of portfolio detail"),K=space(),S=element("p"),Z=text("Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."),this.h()},l(M){o=claim_element(M,"MAIN",{});var me=children(o),Ce,we,le,ye,re,se,be,ge,pe,ae,ce,fe,ne,ue,ve,de,je,he,_e,ie,Oe,xe,oe,Ee,ke;claim_component(u.$$.fragment,me),J=claim_space(me),l=claim_element(me,"SECTION",{id:!0,class:!0}),Ce=children(l),m=claim_element(Ce,"DIV",{class:!0}),we=children(m),a=claim_element(we,"DIV",{class:!0}),le=children(a),h=claim_element(le,"DIV",{class:!0}),ye=children(h),r=claim_element(ye,"DIV",{class:!0}),re=children(r),n=claim_element(re,"DIV",{class:!0}),se=children(n),_=claim_element(se,"DIV",{class:!0}),be=children(_),y=claim_element(be,"IMG",{src:!0,alt:!0}),be.forEach(detach),Q=claim_space(se),f=claim_element(se,"DIV",{class:!0}),ge=children(f),p=claim_element(ge,"IMG",{src:!0,alt:!0}),ge.forEach(detach),G=claim_space(se),b=claim_element(se,"DIV",{class:!0}),pe=children(b),j=claim_element(pe,"IMG",{src:!0,alt:!0}),pe.forEach(detach),se.forEach(detach),U=claim_space(re),x=claim_element(re,"DIV",{class:!0}),children(x).forEach(detach),re.forEach(detach),ye.forEach(detach),D=claim_space(le),c=claim_element(le,"DIV",{class:!0}),ae=children(c),s=claim_element(ae,"DIV",{class:!0}),ce=children(s),E=claim_element(ce,"H3",{}),fe=children(E),z=claim_text(fe,e[0]),fe.forEach(detach),B=claim_space(ce),t=claim_element(ce,"UL",{}),ne=children(t),w=claim_element(ne,"LI",{}),ue=children(w),F=claim_element(ue,"STRONG",{}),ve=children(F),I=claim_text(ve,"Category"),ve.forEach(detach),L=claim_text(ue,": Web design"),ue.forEach(detach),N=claim_space(ne),O=claim_element(ne,"LI",{}),de=children(O),k=claim_element(de,"STRONG",{}),je=children(k),R=claim_text(je,"Client"),je.forEach(detach),P=claim_text(de,": ASU Company"),de.forEach(detach),H=claim_space(ne),g=claim_element(ne,"LI",{}),he=children(g),A=claim_element(he,"STRONG",{}),_e=children(A),V=claim_text(_e,"Project date"),_e.forEach(detach),$=claim_text(he,": 01 March, 2020"),he.forEach(detach),W=claim_space(ne),d=claim_element(ne,"LI",{}),ie=children(d),C=claim_element(ie,"STRONG",{}),Oe=children(C),q=claim_text(Oe,"Project URL"),Oe.forEach(detach),Y=claim_text(ie,": "),v=claim_element(ie,"A",{href:!0}),xe=children(v),X=claim_text(xe,"www.example.com"),xe.forEach(detach),ie.forEach(detach),ne.forEach(detach),ce.forEach(detach),te=claim_space(ae),i=claim_element(ae,"DIV",{class:!0}),oe=children(i),T=claim_element(oe,"H2",{}),Ee=children(T),ee=claim_text(Ee,"This is an example of portfolio detail"),Ee.forEach(detach),K=claim_space(oe),S=claim_element(oe,"P",{}),ke=children(S),Z=claim_text(ke,"Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."),ke.forEach(detach),oe.forEach(detach),ae.forEach(detach),le.forEach(detach),we.forEach(detach),Ce.forEach(detach),me.forEach(detach),this.h()},h(){y.src!==(oe="assets/img/portfolio/portfolio-details-1.jpg")&&attr(y,"src",oe),attr(y,"alt",""),attr(_,"class","swiper-slide"),p.src!==(se="assets/img/portfolio/portfolio-details-2.jpg")&&attr(p,"src",se),attr(p,"alt",""),attr(f,"class","swiper-slide"),j.src!==(ne="assets/img/portfolio/portfolio-details-3.jpg")&&attr(j,"src",ne),attr(j,"alt",""),attr(b,"class","swiper-slide"),attr(n,"class","swiper-wrapper align-items-center"),attr(x,"class","swiper-pagination"),attr(r,"class","portfolio-details-slider swiper"),attr(h,"class","col-lg-8"),attr(v,"href","#"),attr(s,"class","portfolio-info"),attr(i,"class","portfolio-description"),attr(c,"class","col-lg-4"),attr(a,"class","row gy-4"),attr(m,"class","container"),attr(l,"id","portfolio-details"),attr(l,"class","portfolio-details")},m(e,ne){insert(e,o,ne),mount_component(u,o,null),append(o,J),append(o,l),append(l,m),append(m,a),append(a,h),append(h,r),append(r,n),append(n,_),append(_,y),append(n,Q),append(n,f),append(f,p),append(n,G),append(n,b),append(b,j),append(r,U),append(r,x),append(a,D),append(a,c),append(c,s),append(s,E),append(E,z),append(s,B),append(s,t),append(t,w),append(w,F),append(F,I),append(w,L),append(t,N),append(t,O),append(O,k),append(k,R),append(O,P),append(t,H),append(t,g),append(g,A),append(A,V),append(g,$),append(t,W),append(t,d),append(d,C),append(C,q),append(d,Y),append(d,v),append(v,X),append(c,te),append(c,i),append(i,T),append(T,ee),append(i,K),append(i,S),append(S,Z),M=!0},p(e,[t]){(!M||t&1)&&set_data(z,e[0])},i(e){if(M)return;transition_in(u.$$.fragment,e),M=!0},o(e){transition_out(u.$$.fragment,e),M=!1},d(e){e&&detach(o),destroy_component(u)}}}function instance(e,t,n){let{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title)},[s]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0})}}export default Component