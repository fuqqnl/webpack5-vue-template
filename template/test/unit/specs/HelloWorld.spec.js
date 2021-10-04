import {createApp} from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const app = {
      name: 'app',
      template: `
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
    const vm = createApp(app);
    expect(vm.$el.querySelector('#msg').textContent)
      {{#if_eq runner "karma"}}.to.equal('Welcome to Your new Project'){{/if_eq}}{{#if_eq runner "jest"}}.toEqual('Welcome to Your new Project'){{/if_eq}}
  })
})
