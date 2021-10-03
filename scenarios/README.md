## 这个文件夹是什么

这个文件夹是用于设计自动化测试的。通过引用相应的`json` 进行不同的测试。

## scenarios配置

We currently have 3 scenrios set up:

1. 'minimal': it basically answers "no" to ever choice, so no router, no elint, no tests
2. 'full': It answers "yes" to every choice. With router, with linting (standard), with full tests (jest & e2e)
3. 'full-airbnb-karma': like 'full', but using airbnb eslint config instead od standard and karma instead of jest for unnit tests.


## How to use it?

Choosing a scenario is done through setting an ENV variable named `CLI_TEMPL_TEST`.

You can run a scenario yourself by running this in your terminal:

````
CLI_TEMPL_TEST=minimal duer-cli create your-directory
```