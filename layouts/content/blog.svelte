  <script>
	export let title, body, author, date, store, content;
  import Uses from "../components/source.svelte";

  // Svelte store example:
  import { count } from '../scripts/stores.svelte';
  import Incrementer from '../components/incrementer.svelte';
  import Decrementer from '../components/decrementer.svelte';
  let count_value;
  const unsubscribe = count.subscribe(value => {
    count_value = value;
  });

  // Content driven dynamic components example:
  export let components, allLayouts;
</script>

<!-- <h1>{title}</h1>

<p><em>{#if author}Written by {author}{/if}{#if date}&nbsp;on {date}{/if}</em></p>

<div>
  {#each body as paragraph}
    <p>{@html paragraph}</p>
  {/each}
</div>

{#if store}
  <h3>The count is {count_value}</h3>
  <Incrementer/>
  <Decrementer/>  
{/if}

{#if components}
	{#each components as { name }}
		<svelte:component this="{allLayouts["layouts_components_" + name + "_svelte"]}" />
	{/each}
{/if}

<Uses {content} />

<p><a href=".">Back home</a></p> -->

<main>

 <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>{title}</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>{title}</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs Section -->

    <section class="inner-page">
      <div class="container">

        <p><em>{#if author}Written by {author}{/if}{#if date}&nbsp;on {date}{/if}</em></p>

        <div>
          {#each body as paragraph}
            <p>{@html paragraph}</p>
          {/each}
        </div>

        {#if store}
          <h3>The count is {count_value}</h3>
          <Incrementer/>
          <Decrementer/>
        {/if}

        {#if components}
          {#each components as { name }}
            <svelte:component this="{allLayouts["layouts_components_" + name + "_svelte"]}" />
          {/each}
        {/if}

        <Uses {content} />

        <p><a href=".">Back home</a>

      </div><!-- container -->
    </section>

  </main><!-- End #main -->
