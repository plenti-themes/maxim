/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import About from '../components/about.js';
import Steps from '../components/steps.js';
import Features from '../components/features.js';
import Services from '../components/services.js';
import Testimonials from '../components/testimonials.js';
import Portfolio from '../components/portfolio.js';
import Team from '../components/team.js';
import FAQ from '../components/faq.js';
import Contact from '../components/contact.js';

function create_if_block_4(ctx) {
	let contact;
	let current;
	contact = new Contact({});

	return {
		c() {
			create_component(contact.$$.fragment);
		},
		l(nodes) {
			claim_component(contact.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(contact, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(contact.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(contact.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(contact, detaching);
		}
	};
}

// (25:28) 
function create_if_block_3(ctx) {
	let team;
	let t;
	let faq;
	let current;
	team = new Team({});
	faq = new FAQ({});

	return {
		c() {
			create_component(team.$$.fragment);
			t = space();
			create_component(faq.$$.fragment);
		},
		l(nodes) {
			claim_component(team.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(faq.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(team, target, anchor);
			insert(target, t, anchor);
			mount_component(faq, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(team.$$.fragment, local);
			transition_in(faq.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(team.$$.fragment, local);
			transition_out(faq.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(team, detaching);
			if (detaching) detach(t);
			destroy_component(faq, detaching);
		}
	};
}

// (23:33) 
function create_if_block_2(ctx) {
	let portfolio;
	let current;
	portfolio = new Portfolio({});

	return {
		c() {
			create_component(portfolio.$$.fragment);
		},
		l(nodes) {
			claim_component(portfolio.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(portfolio, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(portfolio.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(portfolio.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(portfolio, detaching);
		}
	};
}

// (20:32) 
function create_if_block_1(ctx) {
	let services;
	let t;
	let testimonials;
	let current;
	services = new Services({});
	testimonials = new Testimonials({});

	return {
		c() {
			create_component(services.$$.fragment);
			t = space();
			create_component(testimonials.$$.fragment);
		},
		l(nodes) {
			claim_component(services.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(testimonials.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(services, target, anchor);
			insert(target, t, anchor);
			mount_component(testimonials, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(services.$$.fragment, local);
			transition_in(testimonials.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(services.$$.fragment, local);
			transition_out(testimonials.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(services, detaching);
			if (detaching) detach(t);
			destroy_component(testimonials, detaching);
		}
	};
}

// (16:2) {#if name === 'about'}
function create_if_block(ctx) {
	let about;
	let t0;
	let steps;
	let t1;
	let features;
	let current;
	about = new About({});
	steps = new Steps({});
	features = new Features({});

	return {
		c() {
			create_component(about.$$.fragment);
			t0 = space();
			create_component(steps.$$.fragment);
			t1 = space();
			create_component(features.$$.fragment);
		},
		l(nodes) {
			claim_component(about.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(steps.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(features.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(about, target, anchor);
			insert(target, t0, anchor);
			mount_component(steps, target, anchor);
			insert(target, t1, anchor);
			mount_component(features, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(about.$$.fragment, local);
			transition_in(steps.$$.fragment, local);
			transition_in(features.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(about.$$.fragment, local);
			transition_out(steps.$$.fragment, local);
			transition_out(features.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(about, detaching);
			if (detaching) detach(t0);
			destroy_component(steps, detaching);
			if (detaching) detach(t1);
			destroy_component(features, detaching);
		}
	};
}

function create_fragment(ctx) {
	let main;
	let current_block_type_index;
	let if_block;
	let current;

	const if_block_creators = [
		create_if_block,
		create_if_block_1,
		create_if_block_2,
		create_if_block_3,
		create_if_block_4
	];

	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*name*/ ctx[0] === "about") return 0;
		if (/*name*/ ctx[0] === "services") return 1;
		if (/*name*/ ctx[0] === "portfolio") return 2;
		if (/*name*/ ctx[0] === "team") return 3;
		if (/*name*/ ctx[0] === "contact") return 4;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx, -1))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	return {
		c() {
			main = element("main");
			if (if_block) if_block.c();
			this.h();
		},
		l(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			if (if_block) if_block.l(main_nodes);
			main_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(main, "class", "svelte-z5cn10");
		},
		m(target, anchor) {
			insert(target, main, anchor);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(main, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index !== previous_block_index) {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					} else {
						
					}

					transition_in(if_block, 1);
					if_block.m(main, null);
				} else {
					if_block = null;
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(main);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d();
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props;

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
	};

	return [name];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { name: 0 });
	}
}

export default Component;