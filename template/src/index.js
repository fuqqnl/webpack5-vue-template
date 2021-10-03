/**
 * @file entrance
 * @author 
 */

import {createApp, toRefs, reactive,onMounted} from 'vue';
import HelloWorld from './components/HelloWorld';
{{#router}}
import {createRouter, createWebHashHistory} from 'vue-router';
import routes from './router/routes'
{{/router}}
const app = {
    name: 'app',
    template: `
        <div>Hello, duerCLI</div>
        {{#router}}
        <router-view></router-view>
        {{/router}}
        <s-hello-world></s-hello-world>
    `,
    components: {
        's-hello-world': HelloWorld
    },
    setup(props) {
        return {
            
        }
    }
}
{{#router}}
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
{{/router}}

var siteApp = createApp(app);
{{#router}}
siteApp.use(router);
{{/router}}
siteApp.mount('#app');