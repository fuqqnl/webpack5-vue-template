module.exports = {
    extends: [
        {{#if_eq lintConfig "ecomfe"}}
        '@ecomfe/stylelint-config/baidu/default',
        {{/if_eq}}
   ],
    rules: {
        {{#if_eq lintConfig "ecomfe"}}
        // 在继承的规则集基础上进行自定义配置
        'declaration-block-no-duplicate-properties': true,
        'no-invalid-double-slash-comments': null,
        'selector-pseudo-class-no-unknown': [
            true,
           {
                ignorePseudoClasses: ['global', 'local']
           }
       ],
       {{/if_eq}}
   }
}