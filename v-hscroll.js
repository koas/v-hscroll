import Vue from 'vue';

function scrollHorizontally(e)
{
  e = window.event || e;

  let element = e.target;
  while (!element.getAttribute("v-hscroll-main"))
    element = element.parentNode;

  let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  element.scrollLeft -= (delta * 40);

  if ((delta > 0 && element.scrollLeft > 0) ||
    (delta < 0 && element.offsetWidth + element.scrollLeft < element.scrollWidth))
  {
    e.preventDefault();
  }
};

function waitForSelector(el, binding, vn)
{
  const newEl = el.querySelector(binding.value);

  if (newEl)
    attachToElement(newEl);
  else setTimeout(() => waitForSelector(el, binding, vn), 100);

}

function attachToElement(el)
{
  el.setAttribute("v-hscroll-main", "1");
  el.addEventListener('wheel', scrollHorizontally, false);
}

const HScroll = {

  bind(el, binding, vn)
  {
    if (binding.value)
    {
      waitForSelector(el, binding, vn);
      return;
    }

    attachToElement(el);
  },

  unbind(el, binding, vn)
  {
    el.removeEventListener('wheel', scrollHorizontally, false);
  }
};

Vue.directive('hscroll', HScroll);
