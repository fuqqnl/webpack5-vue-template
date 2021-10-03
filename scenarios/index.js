const scenarios = [
    'full',
    'full-karma-airbnb',
    'minimal'
]

const index = scenarios.indexOf(process.env.CLI_TEMPL_TEST)

const isTest = exports.isTest = index !== -1

const scenario = isTest && require(`./${scenarios[index]}.json`)

exports.addTestAnswers = function(metalsmith, options, helpers) {
    Object.assign(
        metalsmith.metadata(),
        { isNotTest: !isTest },
        isTest ? scenario : {}
    )
}