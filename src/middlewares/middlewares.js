const step1 = (ctx, next) => {
    ctx.value1 = 'mid1'
    next()
}

const step2 = (ctx, next) => {
    ctx.value2 = 'mid2'
    next()
}

const step3 = ctx => ctx.value3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execStep = index => {
        middlewares && index < middlewares.length && middlewares[index](ctx, () => execStep(index + 1))
    }
    execStep(0)
}

const example1 = {}
exec(example1, step3, step1)
console.log(example1)

const example2 = {}
exec(example2, step2, step1,step3)
console.log(example2)