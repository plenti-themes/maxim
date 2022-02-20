/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let section;
	let div3;
	let h3;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let br0;
	let t4;
	let h2;
	let t5;
	let t6;
	let h40;
	let t7;
	let t8;
	let p1;
	let t9;
	let t10;
	let br1;
	let t11;
	let h41;
	let t12;
	let t13;
	let p2;
	let t14;
	let t15;
	let h42;
	let t16;
	let t17;
	let p3;
	let t18;
	let t19;
	let div0;
	let h43;
	let t20;
	let t21;
	let a0;
	let t22;
	let t23;
	let div1;
	let h44;
	let t24;
	let t25;
	let span0;
	let a1;
	let t26;
	let t27;
	let div2;
	let h45;
	let t28;
	let t29;
	let span1;
	let a2;
	let t30;

	return {
		c() {
			section = element("section");
			div3 = element("div");
			h3 = element("h3");
			t0 = text("hey there!");
			t1 = space();
			p0 = element("p");
			t2 = text("hey there jim! hope everything's okay your side of the globe. must still be cold there, eh. i just recently completed your hugo tutorial from a coupla years back. that was neat. i'll try out a hugo theme/build soon. may i ask you for your ideas about this build... (named it plenti-maxim)");
			t3 = space();
			br0 = element("br");
			t4 = space();
			h2 = element("h2");
			t5 = text("some issues...");
			t6 = space();
			h40 = element("h4");
			t7 = text("scrolling");
			t8 = space();
			p1 = element("p");
			t9 = text("this scafold has scrolling working okay, (index.html).... until you come back from one of its pages, then it needs reloading for smooth scrolling to work again. is there a way to make the bootstrap id acnchors and the plenti endpoints (routing) work together?");
			t10 = space();
			br1 = element("br");
			t11 = space();
			h41 = element("h4");
			t12 = text("npm-ing bootstrap/font-awesome/other vendors into plenti");
			t13 = space();
			p2 = element("p");
			t14 = text("can you npm packages into plenti and reach it with just imports? i think its cleaner taking that route than calling js scripts near the bottom of the closing body tag. if these things are things that are coming up on plenti, then i just sound like a kid who can't wait for the ice cream truck to come around and i apologize. i'm excited for the cms too!");
			t15 = space();
			h42 = element("h4");
			t16 = text("is this okay as a plenti theme?");
			t17 = space();
			p3 = element("p");
			t18 = text("i'll mix things up a bit, replace images and fonts and details, use different color/mood.  i can attribute original design with a link.");
			t19 = space();
			div0 = element("div");
			h43 = element("h4");
			t20 = text("repo...");
			t21 = space();
			a0 = element("a");
			t22 = text("-- plenti-maxim --");
			t23 = space();
			div1 = element("div");
			h44 = element("h4");
			t24 = text("live deploy...");
			t25 = space();
			span0 = element("span");
			a1 = element("a");
			t26 = text("claxxicomix.surge.sh");
			t27 = space();
			div2 = element("div");
			h45 = element("h4");
			t28 = text("original theme...");
			t29 = space();
			span1 = element("span");
			a2 = element("a");
			t30 = text("maxim theme");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h3 = claim_element(div3_nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "hey there!");
			h3_nodes.forEach(detach);
			t1 = claim_space(div3_nodes);
			p0 = claim_element(div3_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "hey there jim! hope everything's okay your side of the globe. must still be cold there, eh. i just recently completed your hugo tutorial from a coupla years back. that was neat. i'll try out a hugo theme/build soon. may i ask you for your ideas about this build... (named it plenti-maxim)");
			p0_nodes.forEach(detach);
			t3 = claim_space(div3_nodes);
			br0 = claim_element(div3_nodes, "BR", {});
			t4 = claim_space(div3_nodes);
			h2 = claim_element(div3_nodes, "H2", {});
			var h2_nodes = children(h2);
			t5 = claim_text(h2_nodes, "some issues...");
			h2_nodes.forEach(detach);
			t6 = claim_space(div3_nodes);
			h40 = claim_element(div3_nodes, "H4", { class: true });
			var h40_nodes = children(h40);
			t7 = claim_text(h40_nodes, "scrolling");
			h40_nodes.forEach(detach);
			t8 = claim_space(div3_nodes);
			p1 = claim_element(div3_nodes, "P", {});
			var p1_nodes = children(p1);
			t9 = claim_text(p1_nodes, "this scafold has scrolling working okay, (index.html).... until you come back from one of its pages, then it needs reloading for smooth scrolling to work again. is there a way to make the bootstrap id acnchors and the plenti endpoints (routing) work together?");
			p1_nodes.forEach(detach);
			t10 = claim_space(div3_nodes);
			br1 = claim_element(div3_nodes, "BR", {});
			t11 = claim_space(div3_nodes);
			h41 = claim_element(div3_nodes, "H4", { class: true });
			var h41_nodes = children(h41);
			t12 = claim_text(h41_nodes, "npm-ing bootstrap/font-awesome/other vendors into plenti");
			h41_nodes.forEach(detach);
			t13 = claim_space(div3_nodes);
			p2 = claim_element(div3_nodes, "P", {});
			var p2_nodes = children(p2);
			t14 = claim_text(p2_nodes, "can you npm packages into plenti and reach it with just imports? i think its cleaner taking that route than calling js scripts near the bottom of the closing body tag. if these things are things that are coming up on plenti, then i just sound like a kid who can't wait for the ice cream truck to come around and i apologize. i'm excited for the cms too!");
			p2_nodes.forEach(detach);
			t15 = claim_space(div3_nodes);
			h42 = claim_element(div3_nodes, "H4", { class: true });
			var h42_nodes = children(h42);
			t16 = claim_text(h42_nodes, "is this okay as a plenti theme?");
			h42_nodes.forEach(detach);
			t17 = claim_space(div3_nodes);
			p3 = claim_element(div3_nodes, "P", {});
			var p3_nodes = children(p3);
			t18 = claim_text(p3_nodes, "i'll mix things up a bit, replace images and fonts and details, use different color/mood.  i can attribute original design with a link.");
			p3_nodes.forEach(detach);
			t19 = claim_space(div3_nodes);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h43 = claim_element(div0_nodes, "H4", { class: true });
			var h43_nodes = children(h43);
			t20 = claim_text(h43_nodes, "repo...");
			h43_nodes.forEach(detach);
			t21 = claim_space(div0_nodes);
			a0 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t22 = claim_text(a0_nodes, "-- plenti-maxim --");
			a0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t23 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h44 = claim_element(div1_nodes, "H4", { class: true });
			var h44_nodes = children(h44);
			t24 = claim_text(h44_nodes, "live deploy...");
			h44_nodes.forEach(detach);
			t25 = claim_space(div1_nodes);
			span0 = claim_element(div1_nodes, "SPAN", {});
			var span0_nodes = children(span0);
			a1 = claim_element(span0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t26 = claim_text(a1_nodes, "claxxicomix.surge.sh");
			a1_nodes.forEach(detach);
			span0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t27 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h45 = claim_element(div2_nodes, "H4", { class: true });
			var h45_nodes = children(h45);
			t28 = claim_text(h45_nodes, "original theme...");
			h45_nodes.forEach(detach);
			t29 = claim_space(div2_nodes);
			span1 = claim_element(div2_nodes, "SPAN", {});
			var span1_nodes = children(span1);
			a2 = claim_element(span1_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t30 = claim_text(a2_nodes, "maxim theme");
			a2_nodes.forEach(detach);
			span1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h40, "class", "svelte-2v0wql");
			attr(h41, "class", "svelte-2v0wql");
			attr(h42, "class", "svelte-2v0wql");
			attr(h43, "class", "svelte-2v0wql");
			attr(a0, "href", "https://github.com/claxxmoldii/claxxcomixx");
			attr(a0, "class", "svelte-2v0wql");
			attr(div0, "class", "isFlex svelte-2v0wql");
			attr(h44, "class", "svelte-2v0wql");
			attr(a1, "href", "https://claxxcomixx.surge.sh/");
			attr(a1, "class", "svelte-2v0wql");
			attr(div1, "class", "isFlex svelte-2v0wql");
			attr(h45, "class", "svelte-2v0wql");
			attr(a2, "href", "https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/");
			attr(a2, "class", "svelte-2v0wql");
			attr(div2, "class", "isFlex svelte-2v0wql");
			attr(div3, "class", "container");
			attr(section, "class", "issues svelte-2v0wql");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, div3);
			append(div3, h3);
			append(h3, t0);
			append(div3, t1);
			append(div3, p0);
			append(p0, t2);
			append(div3, t3);
			append(div3, br0);
			append(div3, t4);
			append(div3, h2);
			append(h2, t5);
			append(div3, t6);
			append(div3, h40);
			append(h40, t7);
			append(div3, t8);
			append(div3, p1);
			append(p1, t9);
			append(div3, t10);
			append(div3, br1);
			append(div3, t11);
			append(div3, h41);
			append(h41, t12);
			append(div3, t13);
			append(div3, p2);
			append(p2, t14);
			append(div3, t15);
			append(div3, h42);
			append(h42, t16);
			append(div3, t17);
			append(div3, p3);
			append(p3, t18);
			append(div3, t19);
			append(div3, div0);
			append(div0, h43);
			append(h43, t20);
			append(div0, t21);
			append(div0, a0);
			append(a0, t22);
			append(div3, t23);
			append(div3, div1);
			append(div1, h44);
			append(h44, t24);
			append(div1, t25);
			append(div1, span0);
			append(span0, a1);
			append(a1, t26);
			append(div3, t27);
			append(div3, div2);
			append(div2, h45);
			append(h45, t28);
			append(div2, t29);
			append(div2, span1);
			append(span1, a2);
			append(a2, t30);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(section);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;