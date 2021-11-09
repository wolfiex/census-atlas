<script>
  import ONSHeaderLogoLarge from "./svg/ONSHeaderLogoLarge.svelte";
  import ONSHeaderLogoSmall from "./svg/ONSHeaderLogoSmall.svelte";
</script>

<header class="ons-header " role="banner">
  <div class="ons-header__top">
    <div class="ons-container">
      <div
        class="ons-header__grid-top ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap "
      >
        <div class="ons-grid__col ons-col-auto">
          <div class="ons-header__logo--large">
            <a class="header__logo-link" href="https://www.ons.gov.uk/">
              <ONSHeaderLogoLarge />
            </a>
          </div>
          <div class="ons-header__logo--small">
            <a class="header__logo-link" href="https://www.ons.gov.uk/">
              <ONSHeaderLogoSmall />
            </a>
          </div>
        </div>
        <div class="ons-header__links grid__col col-auto">
          <div class="ons-grid__col ons-col-auto">
            <ul class="ons-language-links">
              <li class="ons-language-links__item">
                <a href="#0" lang="cy">Cymraeg</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
