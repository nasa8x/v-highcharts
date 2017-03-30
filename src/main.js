
import Charts from './highcharts.vue'

const HighChartsPlugin = {
    install: function (Vue) {
        if (Vue.__highcharts_plugin_installed) {
            return;
        }

        Vue.__highcharts_plugin_installed = true;

        // Register components
        Vue.component('highcharts', Charts);

        // for (var component in components) {
        //     Vue.component(component, components[component]);
        // }

    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(HighChartsPlugin);
}

export default HighChartsPlugin;