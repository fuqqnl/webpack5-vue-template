import {createApp} from 'vue';
import HelloWorld from '@/components/HelloWorld';
{{#if_eq runner "karma"}}
import chai from 'chai';
const expect = chai.expect;
{{/if_eq}}

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const app = {
      name: 'app',
      template: `
        <div>
          <s-hello-world></s-hello-world>
        </div>
      `,
      components: {
          's-hello-world': HelloWorld
      },
      setup(props) {
          return {
              
          }
      }
  }
  const vm = createApp(app).mount(document.createElement('div'));
  expect(vm.$el.querySelector('#msg').textContent)
    {{#if_eq runner "karma"}}.to.equal('Welcome to Your new Project'){{/if_eq}}{{#if_eq runner "jest"}}.toEqual('Welcome to Your new Project'){{/if_eq}}
  })
})
