/**
 * @file route配置，获取到对应的docs
 * @author
 */

const Container = {
    template: `
        <div>首页默认逻辑</div>
   `
}
export default [
    {
        name: 'homePage',
        path: '/',
        component: Container
    },
]
