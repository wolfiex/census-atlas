<script>
  import ONSHeaderLogoLarge from "./ons/svg/ONSHeaderLogoLarge.svelte";
  import ONSHeaderLogoSmall from "./ons/svg/ONSHeaderLogoSmall.svelte";
  import ONSExternalHeaderWithDescription from "./ons/ONSExternalHeaderWithDescription.svelte";
  export let serviceTitle = "";
  export let description = "";
</script>

<div class="ons-page">
  <div class="ons-page__content">
    <a class="ons-skip-link" href="#main-content">Skip to main content</a>
    <slot name="phase-banner">
      <div class="ons-phase-banner">
        <div class="ons-container">
          <div class="ons-grid ons-grid--flex ons-grid--gutterless ons-grid--vertical-top ons-grid--no-wrap">
            <div class="ons-grid__col ons-col-auto ons-u-`flex-no-grow ons-u-flex-no-shrink">
              <h3 class="ons-phase-banner__badge">ALPHA</h3>
            </div>
            <div class="ons-grid__col ons-col-auto ons-u-flex-shrink">
              <p class="ons-phase-banner__desc ons-u-fs-s ons-u-mb-no">
                This is a new service – your <a href="#feedback">feedback</a> will help us improve it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </slot>
    <ONSExternalHeaderWithDescription {serviceTitle} {description} />
    <div class="ons-page__container ons-container ">
      <div class="ons-grid">
        <div class="ons-grid__col ons-col-8@m">
          <main id="main-content" class="ons-page__main ">
            <slot />
          </main>
        </div>
      </div>
    </div>
  </div>
  <slot name="footer">
    <footer class="ons-footer">
      <div class="ons-footer__body ons-page__footer" data-analytics="footer">
        <div class="ons-container" />
      </div>
    </footer>
  </slot>
</div>

<style lang="scss" global>
  @import "../../node_modules/@ons/design-system/scss/vars/_index.scss";

  /* TODO: Import .SCSS breakpoints */
  /* XXX: Quick fix for now */
  @media only screen and (max-width: 600px) {
    .ons-phase-banner__desc {
      margin-top: 0;
    }
  }
</style>
