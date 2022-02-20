<script>
  import Head from './head.svelte';
  // import Nav from './nav.svelte';
  // import Footer from './footer.svelte';
  import { makeTitle } from '../scripts/make_title.svelte';

  import Header from './header.svelte';
  import Tallfooter from './tallfooter.svelte';

  export let content, layout, allContent, allLayouts, env, user, login, AdminMenu, title;
</script>

<html lang="en">
<Head title={makeTitle(content.filename)} {env} />
<body>
  {#if user}
      <svelte:component this={AdminMenu} />
  {/if}
  <!-- <Nav /> -->

  <Header />

  <!-- plenti magic happens -->
  <svelte:component this={layout} {...content.fields} {content} {allContent} {allLayouts} {login} />

  <!-- <Footer {allContent} /> -->

  <Tallfooter {...content.fields}/>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
</body>
</html>

<style>
</style>
