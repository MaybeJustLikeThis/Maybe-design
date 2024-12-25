

把 Form 的表单项的值存储到 Store 中。

在 Form 组件里把 Store 放到 Context，在 Item 组件里取出来。

用 Item 组件包裹表单项，传入 value、onChange 参数用来同步表单值到 Store。

这样，表单项的值变化或者 submit 的时候，就可以根据 rules 用 async-validator 来校验。

还通过 ref 暴露出了 setFieldsValue、getFieldsValue 等 store 的 api。

当然，在 antd 的 Form 里是通过 useForm 这个 hook 来创建 store，然后把它传入 Form 组件来用的。

两种实现方式都可以。