<script>
  import BasePage from "../ui/BasePage.svelte";

  import ExploreByTopic from "../ui/ExploreByTopic.svelte";
  import ExploreByAreaComponent from "../ui/ExploreByAreaComponent.svelte";
  import ONSShare from "../ui/ons/ONSShare.svelte";
  import Feedback from "../ui/Feedback.svelte";
</script>

<BasePage
  serviceTitle="Explore Census"
  description="Here’s a place where we tell users what the Census Atlas is and what it can do for them."
>
  <span slot="phase-banner">
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
  </span>

  <span slot="header__main">
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
  </span>

  <span slot="footer">
    <footer class="ons-footer">
      <div class="ons-footer__body ons-page__footer" data-analytics="footer">
        <div class="ons-container" />
        <Feedback />
      </div>
    </footer>
  </span>

  <ExploreByTopic />
  <hr />
  <ExploreByAreaComponent>Search for an area to find out how it compares to others</ExploreByAreaComponent>

  <ONSShare />
</BasePage>

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
