<script>
    export let url
</script>
<h2 class="ons-u-fs-r--b ons-u-mb-xs"><slot/></h2>
<ul class="ons-list ons-list--inline ons-list--bare ons-list--icons">
  <li class="ons-list__item">
    <span class="ons-list__prefix" aria-hidden="true">
      <svg class="ons-svg-icon ons-svg-icon--xxl " id="icon-facebook" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
        <path d="M32,16.0986285 C32.0009185,7.5342974 25.337417,0.468462963 16.8372092,0.0203294753 C8.33700136,-0.427804013 0.97607758,5.89865855 0.0874346352,14.4161886 C-0.801208309,22.9337186 5.09355054,30.6602611 13.5009524,31.9979281 L13.5009524,20.7518951 L9.44,20.7518951 L9.44,16.0986285 L13.5009524,16.0986285 L13.5009524,12.549267 C13.5009524,8.5169471 15.8857143,6.28613892 19.5428571,6.28613892 C20.742535,6.30277426 21.9393895,6.40782423 23.1238095,6.60044523 L23.1238095,10.5637711 L21.1047619,10.5637711 C19.1161905,10.5637711 18.4990476,11.8056643 18.4990476,13.0782216 L18.4990476,16.0986285 L22.9409524,16.0986285 L22.2247619,20.7518951 L18.4990476,20.7518951 L18.4990476,31.9979281 C26.2735701,30.760956 31.9991507,24.0182672 32,16.0986285 L32,16.0986285 Z" />
      </svg>
    </span><a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} class="ons-list__link  " target="_blank" rel="noreferrer external">Facebook<span class="ons-u-vh">this link will open in a new tab</span></a>
  </li>
  <li class="ons-list__item">
    <span class="ons-list__prefix" aria-hidden="true">
      <svg class="ons-svg-icon ons-svg-icon--xxl "  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
        <path d="M24.04,12.95c0,0.17,0,0.33,0,0.5c0.01,4.01-2.17,7.71-5.69,9.64c-3.52,1.93-7.81,1.78-11.19-0.38c0.31,0.04,0.61,0.05,0.92,0.05c1.73,0,3.42-0.58,4.78-1.65c-1.65-0.04-3.09-1.11-3.6-2.68c0.25,0.05,0.51,0.07,0.76,0.07c0.34,0,0.68-0.05,1.01-0.14C9.23,18,7.93,16.4,7.95,14.55v-0.05c0.54,0.29,1.13,0.46,1.74,0.48c-1.66-1.12-2.2-3.33-1.23-5.08c1.96,2.41,4.85,3.87,7.95,4.03c-0.07-0.29-0.1-0.58-0.1-0.88c0-1.58,0.97-3,2.44-3.59c1.47-0.58,3.15-0.21,4.23,0.94c0.86-0.17,1.69-0.49,2.45-0.94c-0.28,0.9-0.88,1.65-1.69,2.13c0.76-0.09,1.51-0.29,2.21-0.6C25.43,11.76,24.79,12.42,24.04,12.95zM16,0C7.16,0,0,7.16,0,16s7.16,16,16,16s16-7.16,16-16c0-4.24-1.69-8.31-4.69-11.31S20.24,0,16,0z" />
      </svg>
    </span><a href={`https://twitter.com/intent/tweet?original_referer&amp;text=A page to share&amp;url=${url}`} class="ons-list__link  " target="_blank" rel="noreferrer external">Twitter<span class="ons-u-vh">this link will open in a new tab</span></a>
  </li>
  <li class="ons-list__item">
    <span class="ons-list__prefix" aria-hidden="true">
        <svg class="ons-svg-icon ons-svg-icon--xxl" id="icon-linkedin" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
    </span><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} class="ons-list__link  " target="_blank" rel="noreferrer external">Linkedin<span class="ons-u-vh">this link will open in a new tab</span></a>
  </li>
  <li class="ons-list__item">
    <span class="ons-list__prefix" aria-hidden="true">
        <svg class="ons-svg-icon ons-svg-icon--xxl" id="icon-email" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
    </span><a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&body=${url}`} class="ons-list__link  " target="_blank" rel="noreferrer external">Email<span class="ons-u-vh">this link will open in a new tab</span></a>
  </li>
</ul>