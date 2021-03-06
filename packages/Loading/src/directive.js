import LoadingConstruct from "./construct.js";

function openLoading(el, binding) {
  if (!el) {
    return;
  }
  if (!el.instance) {
    el.instance = new LoadingConstruct();
  }
  const fullscreen = binding.modifiers.fullscreen;
  const lock = binding.modifiers.lock;
  const body = binding.modifiers.body;
  const target = body ? document.body : el;
  const options = {
    fullscreen,
    target,
    lock,
  };
  const text = el.getAttribute("l-loading-text");
  const background = el.getAttribute("l-loading-background");
  const textColor = el.getAttribute("l-loading-textColor");
  options.text = text;
  options.background = background;
  options.textColor = textColor;

  el.instance.open(options);
}

function closeLoading(el) {
  if (!el) {
    return;
  }
  if (el.instance) {
    el.instance.close();
    el.instance = null;
  }
}

const loadingDirective = {};

loadingDirective.install = (Vue) => {
  Vue.directive("loading", {
    bind(el, binding) {
      if (binding.value) {
        openLoading(el, binding);
      }
    },
    update(el, binding) {
      if (binding.value) {
        openLoading(el, binding);
      } else {
        closeLoading(el);
      }
    },
    unbind(el) {
      closeLoading(el);
    },
  });
};

export default loadingDirective;
