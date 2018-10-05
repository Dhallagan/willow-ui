import * as components from './components';

const WillowUI = {
  ...components,

  install(Vue) {
    for (const [name, component] of Object.entries(components)) {
      Vue.component(component.name || name, component);
    }
  }
};

export default WillowUI

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WillowUI);
}