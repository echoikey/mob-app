## Vue3

### 1. 拉开序幕的 setup

1. 理解：`vue3` 中一个新的配置项，值为一个函数。

2. `setup` 函数有两种返回值：

   1. 对象：响应式数据
   2. 渲染函数：则可以自定义渲染内容。

   > `setup` 函数中的 `this` 是 `undefined`。

```vue
<template></template>
<script>
    export default {
        name: 'HelloWorld',
        // setup函数返回一个渲染函数，返回的内容直接被渲染在页面上
        setup() {
            const count = 0;
            
            // setup 返回一个渲染函数
            return function() {
                return count;
                // return 'Hello, World!';
            }
            // setup 中不使用 this
            return () => {
                return count;
            }
            // 简写
            return () => count;
        }
    }

</script>
```

### 2. ref 函数

1. 作用：定义一个响应式数据。
2. 语法：`const xxx = ref(xxx);`
   - 创建一个包含响应式数据的**引用对象**（reference对象，简称 ref对象）。
   - `JS` 中操作数据：`xxx.value`
   - 模板中读取数据：不需要 `.value` ，直接 `<div>{{ xxx }}</div>`
3. 备注：
   1. 接收的数据：基本类型和对象类型
   2. 基本类型的数据：响应式依然是靠 `Object.defineProperty()` 的 `get` 和 `set` 完成。
   3. 对象类型的数据：内部是借助 `reactive` 函数实现的。