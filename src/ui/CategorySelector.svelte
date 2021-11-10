<div class="category-selector ons-grid--flex ons-grid--vertical-center">
  <div class="ons-grid__col ons-col-4@m selector-col ">
    <div class="ons-pl-grid-col ons-grid--flex" style="justify-content:left">
      <span>&#60;&#160;</span>
      <a class="category-selector__button" href="#"> Very good </a>
    </div>
  </div>
  <div class="ons-grid__col ons-col-4@m selector-col ons-grid--flex">
    <div class="ons-pl-grid-col">
      <p>Good</p>
    </div>
  </div>
  <div class="ons-grid__col ons-col-4@m selector-col">
    <div class="ons-pl-grid-col ons-grid--flex" style="justify-content:right">
      <a class="category-selector__button" href="#"> Fair </a>
      <span>&#160;&#62;</span>
    </div>
  </div>
</div>

<style>
  .category-selector {
    background-color: #003c57;
    color: #fff;
    padding: 10px 15px 10px;
  }
  .category-selector a {
    color: #fff;
  }
  @media (max-width: 400px) {
      a, span {
          font-size: 0.8em;
      }
  }
  .category-selector__button {
    margin-right: 0.2em;
  }
  a {
    text-decoration: underline;
    text-underline-position: unset;
  }
  .selector-col {
      max-width: 33.33333%;
      width: 33.33333%;
      padding-left: 0;
  }
  p {
      text-align: center;
      margin-bottom: 0;
      font-size: 1.3em;
      font-weight: bold;
  }
  @media (max-width: 400px) {
      p {
          font-size: 1em;
      }
  }
</style>
