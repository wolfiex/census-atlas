<script>
  import ONSHeaderLogoLarge from "./ons/svg/ONSHeaderLogoLarge.svelte";
  import ONSHeaderLogoSmall from "./ons/svg/ONSHeaderLogoSmall.svelte";

  export let title = "BasePage";
</script>

<div class="ons-page">
  <div class="ons-page__content">
    <a class="ons-skip-link" href="#main-content">Skip to main content</a>
    <div class="ons-phase-banner">
      <div class="ons-container">
        <div class="ons-grid ons-grid--flex ons-grid--gutterless ons-grid--vertical-top ons-grid--no-wrap">
          <div class="ons-grid__col ons-col-auto ons-u-flex-no-grow ons-u-flex-no-shrink">
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
      <nav class="ons-breadcrumb" aria-label="Breadcrumbs">
        <ol class="ons-breadcrumb__items ons-u-fs-s">
          <li class="ons-breadcrumb__item" id="breadcrumb-1">
            <a class="ons-breadcrumb__link" href="/">Home</a>
            <svg
              class="ons-svg-icon "
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              fill="currentColor"
            >
              <path
                d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
                transform="translate(-5.02 -1.59)"
              />
            </svg>
          </li>
          <li class="ons-breadcrumb__item" id="breadcrumb-2">
            <a class="ons-breadcrumb__link" href="/components">Components</a>
            <svg
              class="ons-svg-icon "
              viewBox="0 0 8 13"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              fill="currentColor"
            >
              <path
                d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
                transform="translate(-5.02 -1.59)"
              />
            </svg>
          </li>
        </ol>
      </nav>
      <div class="ons-grid">
        <div class="ons-grid__col ons-col-8@m">
          <main id="main-content" class="ons-page__main ">
            <slot />
          </main>
        </div>
      </div>
    </div>
  </div>
  <footer class="ons-footer">
    <div class="ons-footer__button-container ons-u-d-no@m">
      <button type="submit" class="ons-btn ons-btn--ghost">
        <span class="ons-btn__inner">Save and sign out</span>
      </button>
    </div>
    <div class="ons-footer__body ons-page__footer" data-analytics="footer">
      <div class="ons-container">
        <div class="ons-grid">
          <div class="ons-grid__col  ons-u-d-no@m">
            <ul class="ons-list ons-u-mb-no ons-list--bare ons-list--inline@m">
              <li class="ons-list__item">
                <a href="#0" class="ons-list__link  ">Cymraeg</a>
              </li>
              <li class="ons-list__item">
                <a href="#0" class="ons-list__link  ">Gaeilge</a>
              </li>
              <li class="ons-list__item">
                <a href="#0" class="ons-list__link  ">Ulstèr-Scotch</a>
              </li>
            </ul>
          </div>
          <div class="ons-grid__col  ons-u-d-no@m ons-u-mb-m">
            <hr class="ons-footer__hr" />
          </div>
          <!-- Rows -->
          <div class="ons-grid__col">
            <ul class="ons-list ons-list--bare ons-list--inline">
              <li class="ons-list__item">
                <a href="#0" class="ons-list__link  ">Contact us</a>
              </li>
              <li class="ons-list__item">
                <a href="#0" class="ons-list__link  ">Cookies and privacy</a>
              </li>
            </ul>
          </div>
          <!-- OGL -->
          <div class="ons-grid__col ons-u-mb-m">
            <hr class="ons-footer__hr" />
          </div>
          <div class="ons-grid__col">
            <div class="ons-footer__license">
              <svg
                class="ons-footer__ogl-img"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                height="24px"
                viewBox="0 0 60 24"
                focusable="false"
                aria-hidden="true"
              >
                <title id="ogl-logo-alt">Open Government License logo</title>
                <path
                  d="M51.7,17.5V0l-6.2,4v19.8h13.8v-6.2H51.7z M36.7,16.3c-1,0.9-2.4,1.4-3.8,1.4c-3.2,0-5.8-2.6-5.8-5.8s2.6-5.8,5.8-5.8c2,0,3.9,1.1,4.9,2.7L43,5.6C40.9,2.2,37.1,0,32.9,0c-4.5,0-8.4,2.5-10.4,6.1C20.4,2.5,16.5,0,12,0C5.4,0,0,5.4,0,12s5.4,12,12,12c4.5,0,8.4-2.5,10.4-6.1c2.1,3.6,6,6.1,10.4,6.1c3,0,5.8-1.1,7.9-3l2.4,2.7h0.4V13h-9.8L36.7,16.3zM12,17.8c-3.2,0-5.8-2.6-5.8-5.8S8.8,6.2,12,6.2s5.8,2.6,5.8,5.8S15.2,17.8,12,17.8"
                  fill="#595959"
                />
              </svg>
              All content is available under the
              <a
                href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                class="ons-external-link"
                target="_blank"
                rel="noopener"
                >Open Government Licence v3.0<span class="ons-external-link__icon"
                  >&nbsp;<svg
                    id="external-link"
                    class="ons-svg-icon"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z"
                      transform="translate(-2 -1.99)"
                    />
                    <path
                      d="M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z"
                      transform="translate(-2 -1.99)"
                    />
                  </svg></span
                ></a
              >
              , except where otherwise stated
            </div>
          </div>
        </div>
      </div>
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
  }
</style>
