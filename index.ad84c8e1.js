const e=()=>{let e=document.querySelector(".dropdown"),t=document.querySelector(".dropdown__trigger"),r=document.querySelector(".dropdown__content");if(!e||!t||!r)return;let l=()=>{t.classList.remove("dropdown__trigger--active"),r.classList.remove("dropdown__content--active")};t.addEventListener("click",()=>{let e=t.classList.toggle("dropdown__trigger--active");r.classList.toggle("dropdown__content--active",e)}),document.addEventListener("click",e=>{e.target.closest(".dropdown__item")&&l()}),document.addEventListener("click",r=>{t.classList.contains("dropdown__trigger--active")&&!e.contains(r.target)&&l()}),window.addEventListener("resize",()=>{window.innerWidth<1280&&t.classList.contains("dropdown__trigger--active")&&l()})},t=()=>{let e=document.querySelector(".dropdown__trigger"),t=document.querySelector(".dropdown__list"),r=document.querySelector(".menu__lang").querySelector(".menu__list"),l=l=>{let n=t?.querySelector(".dropdown__item--active"),o=r?.querySelector(".menu__item--active");n?.classList.remove("dropdown__item--active"),o?.classList.remove("menu__item--active");let s=t?.querySelector(`.dropdown__item[data-lang="${l}"]`),i=r?.querySelector(`.menu__item[data-lang="${l}"]`);s&&(e.textContent=l,s.classList.add("dropdown__item--active")),i?.classList.add("menu__item--active")},n=e=>{let t=e.target.closest("li");t&&l(t.dataset.lang)};t?.addEventListener("click",n),r?.addEventListener("click",n)},r=()=>{let e=document.querySelector(".menu__btn--lang"),t=document.querySelector(".menu__btn--help"),r=document.querySelector(".menu__btn--faq"),l=document.querySelector(".menu__lang"),n=document.querySelector(".menu__help"),o=document.querySelector(".menu__faq"),s=document.querySelector(".menu__back"),i=document.querySelector(".menu__nav"),c=document.querySelector(".menu__link-close"),a=()=>{l.classList.add("hidden"),n.classList.add("hidden"),o.classList.add("hidden"),i.classList.remove("hidden"),s.classList.add("hidden"),c.classList.remove("hidden"),c.style.order="1"};window.addEventListener("DOMContentLoaded",a),e.addEventListener("click",function(){l.classList.remove("hidden"),i.classList.add("hidden"),c.classList.add("hidden"),s.classList.remove("hidden"),c.style.order="2"}),t.addEventListener("click",function(){n.classList.remove("hidden"),i.classList.add("hidden"),s.classList.remove("hidden"),c.style.order="2"}),r.addEventListener("click",function(){o.classList.remove("hidden"),i.classList.add("hidden"),s.classList.remove("hidden"),c.style.order="2"}),n.addEventListener("click",e=>{e.target.closest("a")&&a()}),o.addEventListener("click",e=>{e.target.closest("a")&&a()}),l.querySelectorAll(".nav__link.menu__link").forEach(e=>{e.addEventListener("click",function(){a()})}),s.addEventListener("click",function(){a()}),c.addEventListener("click",function(){a()})},l=()=>{let e=document.querySelector(".faq-module"),t=document.querySelector(".faq-module__content"),r=document.querySelector(".faq-module__close"),l=document.querySelector(".faq-module__more"),n=document.querySelectorAll(".faq-module-btn"),o=()=>{[...a].forEach(e=>{console.log(e),e.classList.contains("accordion--open")&&e.classList.remove("accordion--open")})},s=()=>{e.classList.add("page__aside--active")},i=()=>{e.classList.remove("page__aside--active"),o()};[...n].forEach(e=>e.addEventListener("click",s)),r.addEventListener("click",()=>{i()});let c=document.querySelector(".faq-module__questions"),a=document.querySelectorAll(".accordion");l.addEventListener("click",()=>{i()}),c.addEventListener("click",e=>{let t=e.target.closest("article");t.classList.contains("accordion--open")?t.classList.remove("accordion--open"):t.classList.add("accordion--open")}),document.addEventListener("click",r=>{let l=r.target;!t.contains(l)&&e.classList.contains("page__aside--active")&&[...n].every(e=>e!==l)&&i()})},n=()=>{document.querySelectorAll(".faq__question").forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("accordion--open")})})},o=()=>{let e=document.querySelector(".help-module"),t=document.querySelector(".help-module__content"),r=e.querySelector(".help-module__support"),l=e.querySelectorAll(".help-module__service-btn"),n=document.querySelector(".help-module__close"),o=document.querySelectorAll(".help-module-btn"),s=()=>e?.classList.remove("page__aside--active"),i=()=>e?.classList.add("page__aside--active");o.forEach(e=>e.addEventListener("click",i)),n.addEventListener("click",s),r.addEventListener("click",e=>{e.target.closest("a")&&s()}),l.forEach(e=>e.addEventListener("click",s)),document.addEventListener("click",r=>{let l=r.target;e.classList.contains("page__aside--active")&&!t.contains(l)&&[...o].every(e=>!e.contains(l))&&s()})},s=()=>{let e;let t=()=>{e=new Swiper(".header__swiper",{loop:!1,grabCursor:!0,scrollbar:{el:".header__scrollbar",draggable:!0},autoplay:{delay:5e3},speed:600});let t=document.querySelector(".header__prev-btn"),r=document.querySelector(".header__next-btn"),l=()=>{t.disabled=e.isBeginning,r.disabled=e.isEnd};r.addEventListener("click",()=>{e.slideNext()}),t.addEventListener("click",()=>{e.slidePrev()}),e.on("slideChange",l),e.on("scrollbarDragEnd",l),e.on("scrollbarDragMove",l),l()},r=()=>{e&&(e.destroy(!0,!0),e=null)},l=()=>{window.innerWidth<1280?r():e||t()};l(),window.addEventListener("resize",()=>{l()})},i=()=>{let e;let t=()=>{e=new Swiper(".about__swiper",{loop:!1,grabCursor:!0,pagination:{el:window.innerWidth<1280?".about__bullets":".about__fraction",type:window.innerWidth<1280?"bullets":"fraction",clickable:!0},scrollbar:{el:".about__scrollbar",draggable:!0},spaceBetween:10});let t=document.querySelector(".about__prev-btn"),r=document.querySelector(".about__next-btn"),l=()=>{t.disabled=e.isBeginning,r.disabled=e.isEnd};t.addEventListener("click",()=>{e.slidePrev()}),r.addEventListener("click",()=>{e.slideNext()}),e.on("slideChange",l),e.on("scrollbarDragEnd",l),e.on("scrollbarDragMove",l),l()},r=()=>{let r=window.innerWidth<1280;r&&!e.pagination.bullets.length?(e.destroy(),t()):!r&&e.pagination.bullets.length&&(e.destroy(),t())};t(),window.addEventListener("resize",()=>{r()})},c=()=>{let e=document.querySelectorAll(".open-bar");document.querySelectorAll(".open-bar__circle").forEach(e=>{e.addEventListener("click",e=>{e.target.closest(".open-bar").classList.toggle("open-bar--active")})}),window.addEventListener("resize",()=>{window.innerWidth>=1280&&e.forEach(e=>{e.classList.remove("open-bar--active")})})},a=()=>{let e=document.forms.contact__form,t=e.name,r=document.querySelector('label[for="name"]'),l=r.innerText,n=e.email,o=document.querySelector('label[for="email"]'),s=o.innerText,i=e.phone,c=document.querySelector('label[for="phone"]'),a=c.innerText,d=e.message,u=document.querySelector('label[for="message"]'),m=u.innerText,_=document.querySelector(".form__button");e.addEventListener("submit",r=>{r.preventDefault();let l=!1;if(t.value.trim()||(v.setError(v.msg),l=!0),n.value.trim()||(p.setError(p.msg),l=!0),i.value.trim()||(g.setError(g.msg),l=!0),d.value.trim()||(b.setError(b.msg),l=!0),l)return;let o=[...e.elements];o.forEach(e=>{e.disabled=!0});let s=_.firstElementChild,c=_.lastElementChild,a=s.innerText;s.innerText="",c.classList.add("form__loader--active"),new Promise(e=>setTimeout(e,2e3)).then(()=>{e.reset()}).finally(()=>{o.forEach(e=>{e.disabled=!1}),s.innerText=a,c.classList.remove("form__loader--active")})});class y{constructor(e,t,r,l){this.input=e,this.label=t,this.labelText=r,this.errMsg="",this.msg=l}setError(e){this.label.innerText=e,this.label.style.color="#860404",this.input.style.borderBottomColor="#860404"}clearError(){this.label.innerText=this.labelText,this.label.style.color="",this.input.style.borderBottomColor=""}}let v=new y(t,r,l,"Please, fill your name*"),p=new y(n,o,s,"Please, fill your email*"),g=new y(i,c,a,"Please, fill your phone*"),b=new y(d,u,m,"Please, fill your message*"),h=e=>{e.input.addEventListener("blur",t=>{t.target.value.trim()||e.setError(e.msg)}),e.input.addEventListener("input",()=>{e.clearError()})};h(v),h(p),h(g),h(b)},d=()=>{let e=document.querySelector(".buy-module");e.querySelector(".buy-module__support");let t=e.querySelectorAll(".buy-module__service-btn"),r=document.querySelector(".buy-module__close"),l=document.querySelectorAll(".buy-btn"),n=document.querySelectorAll(".buy-module__order"),o=document.querySelectorAll(".buy-module__order-bar"),s=document.querySelectorAll(".buy-module__step"),i=document.querySelector(".buy-module__btn"),c=document.forms["contact__form-buy"],a=document.querySelector(".complite__button"),d=document.querySelector(".pay-order__button"),u=document.querySelector(".buy-module__step--pay"),m=document.querySelector(".buy-module__step--complete"),_=0,y=()=>{n.forEach((e,t)=>{e.classList.toggle("buy-module__order--active",t===_)}),o.forEach((e,t)=>{e.classList.toggle("buy-module__order-bar--active",t===_)}),s.forEach((e,t)=>{e.classList.toggle("active",t===_)})},v=()=>{let e=c.firstname,t=c.lastname,r=c["email-buy"],l=c["phone-buy"],n=c["shipping-adress"],o=c["shipping-adress-2"],s=!1;return e.value.trim()||(firstnameField.setError(firstnameField.msg),s=!0),t.value.trim()||(lastnameField.setError(lastnameField.msg),s=!0),r.value.trim()||(emailBuyField.setError(emailBuyField.msg),s=!0),l.value.trim()||(phoneBuyField.setError(phoneBuyField.msg),s=!0),n.value.trim()||(shippingAdressField.setError(shippingAdressField.msg),s=!0),o.value.trim()||(shippingAdress2Field.setError(shippingAdress2Field.msg),s=!0),!s};i.addEventListener("click",()=>{(0!==_||v())&&(_<s.length?(_++,y()):window.location.href="./index.html")}),y(),d.addEventListener("click",()=>{u.classList.remove("active"),m.classList.add("active"),_=s.length-1,y()}),a.addEventListener("click",()=>{window.location.href="index.html"});let p=()=>e?.classList.remove("page__aside--active"),g=()=>e?.classList.add("page__aside--active");l.forEach(e=>e.addEventListener("click",g)),r.addEventListener("click",p),t.forEach(e=>e.addEventListener("click",p))},u=()=>{document.querySelectorAll(".buy-module__step").forEach(e=>{if(!e)return;let t=e.querySelector(".order__price-count"),r=e.querySelector(".select-qty"),l=r?.querySelector(".select-qty__current-value"),n=r?.querySelector(".select-qty__list-wrapper"),o=Array.from(n?.querySelectorAll(".select-qty__item")||[]);t&&r&&l&&n&&(r.addEventListener("click",()=>{let e=l.textContent.trim();o.forEach(t=>{t.classList.toggle("hidden",t.textContent===e)}),n.classList.toggle("select-qty__list-wrapper--visible")}),n.addEventListener("click",e=>{let o=e.target.closest(".select-qty__item");if(!o||o.classList.contains("hidden"))return;let s=o.textContent.trim();l.textContent=s,t.textContent=`${1200*+s}$`;let i=r.querySelector(".select-qty__item--selected");i?.classList.remove("select-qty__item--selected"),o.classList.add("select-qty__item--selected"),n.classList.remove("select-qty__list-wrapper--visible")}))})},m=()=>{let e=document.forms["contact__form-buy"],t=e.firstname,r=document.querySelector('label[for="firstname"]'),l=r.innerText,n=e.lastname,o=document.querySelector('label[for="lastname"]'),s=o.innerText,i=e["email-buy"],c=document.querySelector('label[for="email-buy"]'),a=c.innerText,d=e["phone-buy"],u=document.querySelector('label[for="phone-buy"]'),m=u.innerText,_=e["shipping-adress"],y=document.querySelector('label[for="shipping-adress"]'),v=y.innerText,p=e["shipping-adress-2"],g=document.querySelector('label[for="shipping-adress-2"]'),b=g.innerText,h=document.querySelector(".form-buy__button");e.addEventListener("submit",r=>{r.preventDefault();let l=!1;if(t.value.trim()||(E.setError(E.msg),l=!0),n.value.trim()||(q.setError(q.msg),l=!0),i.value.trim()||(f.setError(f.msg),l=!0),d.value.trim()||(S.setError(S.msg),l=!0),_.value.trim()||(w.setError(w.msg),l=!0),p.value.trim()||(k.setError(k.msg),l=!0),l)return;let o=[...e.elements];o.forEach(e=>{e.disabled=!0});let s=h.firstElementChild,c=h.lastElementChild,a=s.innerText;s.innerText="",c.classList.add("form-buy__loader--active"),e.reset(),o.forEach(e=>{e.disabled=!1}),s.innerText=a,c.classList.remove("form-buy__loader--active")});class L{constructor(e,t,r,l){this.input=e,this.label=t,this.labelText=r,this.errMsg="",this.msg=l}setError(e){this.label.innerText=e,this.label.style.color="#860404",this.input.style.borderBottomColor="#860404"}clearError(){this.label.innerText=this.labelText,this.label.style.color="",this.input.style.borderBottomColor=""}}let E=new L(t,r,l,"Please, fill your first name*"),q=new L(n,o,s,"Please, fill your last name*"),f=new L(i,c,a,"Please, fill your email*"),S=new L(d,u,m,"Please, fill your phone*"),w=new L(_,y,v,"Please, fill your shippingAdress*"),k=new L(p,g,b,"Please, fill your shippingAdress 2*"),x=e=>{e.input.addEventListener("blur",t=>{t.target.value.trim()||e.setError(e.msg)}),e.input.addEventListener("input",()=>{e.clearError()})};x(E),x(q),x(f),x(S),x(w),x(k)};document.addEventListener("DOMContentLoaded",()=>{e(),t(),r(),l(),n(),o(),s(),i(),c(),a(),d(),u(),m()});
//# sourceMappingURL=index.ad84c8e1.js.map
