<script>
  import About from '../components/about.svelte';
  import Steps from "../components/steps.svelte";
  import Features  from "../components/features.svelte";
  import Services  from "../components/services.svelte";
  import Testimonials  from "../components/testimonials.svelte";
  import Portfolio  from "../components/portfolio.svelte";
  import Team  from "../components/team.svelte";
  import FAQ  from "../components/faq.svelte";
  import Contact  from "../components/contact.svelte";

  export let name;
</script>

<main>
  {#if name === 'about'}
    <About />
    <Steps />
    <Features />
  {:else if name === 'services'}
    <Services />
    <Testimonials />
  {:else if name === 'portfolio'}
    <Portfolio />
  {:else if name === 'team'}
    <Team />
    <FAQ />
  {:else if name === 'contact'}
    <Contact />
  {/if}
</main>

<style>
  main {
    min-height: 100%;
    padding-top: 50px;
  }
</style>
