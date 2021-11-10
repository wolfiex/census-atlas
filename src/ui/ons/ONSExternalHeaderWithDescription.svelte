<script>
  import ONSHeaderLogoLarge from "./svg/ONSHeaderLogoLarge.svelte";
  import ONSHeaderLogoSmall from "./svg/ONSHeaderLogoSmall.svelte";
  export let serviceTitle = "";
  export let description = "";
</script>

<header class="ons-header ons-header--hero" role="banner">
  <div class="ons-header__top">
    <div class="ons-container">
      <div
        class="ons-header__grid-top ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap "
      >
        <div class="ons-grid__col ons-col-auto">
          <div class="ons-header__logo--large">
            <a class="ons-header__logo-link" href="#0">
              <ONSHeaderLogoLarge />
            </a>
          </div>
          <div class="ons-header__logo--small">
            <a class="ons-header__logo-link" href="#0">
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
  <div class="ons-header__main ons-header__main--with-description">
    <div class="ons-container">
      <div
        class="ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap"
      >
        <div class="ons-grid__col ons-col-auto ons-u-flex-shrink">
          <a class="ons-header__title-link" href="#0">
            <div class="ons-header__title header__title--with-description">{serviceTitle}</div>
          </a>
        </div>
      </div>
      <p class="ons-header__desc">{description}</p>
    </div>
  </div>
</header>
