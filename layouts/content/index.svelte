<script>
	export let title, intro, components, content, allContent;


	// import Grid from '../components/grid.svelte';
	// import Uses from "../components/source.svelte";
	// import Pager from "../components/pager.svelte";

  import Hero from "../components/hero.svelte";
  import About from "../components/about.svelte";
  import Steps from "../components/steps.svelte";
  import Features  from "../components/features.svelte";
  import Services  from "../components/services.svelte";
  import Testimonials  from "../components/testimonials.svelte";
  import Portfolio  from "../components/portfolio.svelte";
  import Team  from "../components/team.svelte";
  import FAQ  from "../components/faq.svelte";
  import Contact  from "../components/contact.svelte";

	$: currentPage = content.pager;
	let postsPerPage = 3;
	let allPosts = allContent.filter(content => content.type == "blog");
	let totalPosts = allPosts.length;
	let totalPages = Math.ceil(totalPosts / postsPerPage);
	$: postRangeHigh = currentPage * postsPerPage;
	$: postRangeLow = postRangeHigh - postsPerPage;
</script>

<Hero />
<About />
<Steps />
<Features />
<Services />
<Testimonials />
<Portfolio />
<Team />
<FAQ />
<Contact />

<!-- <h1>{title}</h1>

<section id="intro">
	{#each intro as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</section>

<div>
	<h3>Recent blog posts:</h3>
	<Grid items={allPosts} {postRangeLow} {postRangeHigh} />
	<br />
</div>
<Pager {currentPage} {totalPages} />

<Uses {content} /> -->
