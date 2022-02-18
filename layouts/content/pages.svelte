<!-- <script>
  export let title, description, content, cms, login;
  import Uses from "../components/source.svelte";
</script>

<h1>{title}</h1>

<div>
  {#each description as paragraph}
    <p>{@html paragraph}</p>
  {/each}
</div>

{#if cms}
  <p>Try it out: <button on:click={login}>Login</button></p>
{/if}

<Uses {content} />

<p><a href=".">Back home</a></p> -->

<script>
  export let title, description, content, cms, login;
  import Uses from "../components/source.svelte";
</script>

<main>

    <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Inner Page</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>{title}</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs Section -->

    <section class="inner-page">
      <div class="container">
        <div>
          {#each description as paragraph}
            <p>{@html paragraph}</p>
          {/each}
        </div>

        {#if cms}
          <p>Try it out: <button on:click={login}>Login</button></p>
        {/if}

        <Uses {content} />

        <p><a href=".">Back home</a></p>
      </div><!-- container -->
    </section>

  </main><!-- End #main -->
