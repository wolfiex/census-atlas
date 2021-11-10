<script>
  import ONSHeaderLogoLarge from "../ui/ons/svg/ONSHeaderLogoLarge.svelte";
  import ONSHeaderLogoSmall from "../ui/ons/svg/ONSHeaderLogoSmall.svelte";

  import ExploreByTopic from "../ui/ExploreByTopic.svelte";
  import ExploreByAreaComponent from "../ui/ExploreByAreaComponent.svelte";
  import ONSShare from "../ui/ons/ONSShare.svelte";
  import Feedback from "../ui/Feedback.svelte";
</script>

<div class="ons-page">
  <div class="ons-page__content">
    <a class="ons-skip-link" href="#main-content">Skip to main content</a>
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
    <!-- // TODO: Create a wrapper for Desktop -->
    <!-- <div style="background: pink; width: 400px;"> -->
    <header class="ons-header " role="banner">
      <div class="ons-header__top">
        <div class="ons-container">
          <div
            class="ons-header__grid-top ons-grid ons-grid--gutterless ons-grid--flex ons-grid--between ons-grid--vertical-center ons-grid--no-wrap "
          >
            <div class="ons-grid__col ons-col-auto">
              <div class="ons-header__logo--large">
                <ONSHeaderLogoLarge />
              </div>
              <div class="ons-header__logo--small">
                <ONSHeaderLogoSmall />
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
                <div class="ons-header__title header__title--with-description">Explore Census</div>
              </a>
            </div>
          </div>
          <p class="ons-header__desc">
            Explore Census Here’s a place where we tell users what the Census Atlas is and what it can do for them.
          </p>
        </div>
      </div>
    </header>
    <div class="ons-page__container ons-container ">
      <div class="ons-grid">
        <div class="ons-grid__col ons-col-8@m">
          <main id="main-content" class="ons-page__main ">
            <ExploreByTopic />
            <hr />
            <ExploreByAreaComponent>Search for an area to find out how it compares to others</ExploreByAreaComponent>

            <ONSShare />
          </main>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <footer class="ons-footer">
    <div class="ons-footer__body ons-page__footer" data-analytics="footer">
      <div class="ons-container" />
      <Feedback />
    </div>
  </footer>
</div>

<style lang="scss" global>
  @import "../../node_modules/@ons/design-system/scss/vars/_index.scss";

  /* TODO: Import .SCSS breakpoints */
  /* XXX: Quick fix for now */
  @media only screen and (max-width: 600px) {
    .ons-phase-banner__desc {
      margin-top: 0;
    }

    .ons-header__title {
      margin-bottom: 10px;
    }
  }
</style>
