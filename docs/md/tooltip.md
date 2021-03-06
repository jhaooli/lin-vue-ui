


<style lang="scss" scoped>
.one-line {
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  white-space: nowrap; /*规定段落中的文本不进行换行 */
  width: 500px; /*需要配合宽度来使用*/
  border: 1px solid red;
}

.tooltip-message {
  box-sizing: border-box;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
}
</style>

# Tooltip 文字提示

---

Tooltip 组件提供了一个 `v-tooltip` 指令，其效果跟dom标签的原生属性title类似，只是美化title的效果，并且定制了一系列属性

## 基础用法

在这里我们提供 4 种不同方向的展示方式，`v-tooltip`的绑定值就是提示的文字，默认是展示方向是下边

<div class='demo-block'>
<l-button class='mr-20' v-tooltip.top="'上边 文字提示'">上边</l-button>
<l-button class='mr-20' v-tooltip.bottom="'下边 文字提示'">下边</l-button>
<l-button class='mr-20' v-tooltip.left="'左边 文字提示'">左边</l-button>
<l-button  v-tooltip.right="'右边 文字提示'">右边</l-button>
</div>

:::demo

```html
<l-button class='mr-20' v-tooltip.top="'上边 文字提示'">上边</l-button>
<l-button class='mr-20' v-tooltip.bottom="'下边 文字提示'">下边</l-button>
<l-button class='mr-20' v-tooltip.left="'左边 文字提示'">左边</l-button>
<l-button  v-tooltip.right="'右边 文字提示'">右边</l-button>
```

:::

## 偏移量

在绑定了 `v-tooltip` 指令的元素上添加 `l-tooltip-top` 和 `l-tooltip-left` 属性即可设置tooltip的偏移量
<div class='demo-block'>
<l-button l-tooltip-top='-10' l-tooltip-left='10' class='mr-20' v-tooltip.top="'上边 文字提示'">上边</l-button>
<l-button l-tooltip-top='10' l-tooltip-left='10' class='mr-20' v-tooltip.bottom="'下边 文字提示'">下边</l-button>
<l-button l-tooltip-top='10' l-tooltip-left='10' class='mr-20' v-tooltip.left="'左边 文字提示'">左边</l-button>
<l-button l-tooltip-top='10' l-tooltip-left='-10'  v-tooltip.right="'右边 文字提示'">右边</l-button>
</div>

:::demo

```html
<l-button l-tooltip-top='-10' l-tooltip-left='10' class='mr-20' v-tooltip.top="'上边 文字提示'">上边</l-button>
<l-button l-tooltip-top='10' l-tooltip-left='10' class='mr-20' v-tooltip.bottom="'下边 文字提示'">下边</l-button>
<l-button l-tooltip-top='10' l-tooltip-left='10' class='mr-20' v-tooltip.left="'左边 文字提示'">左边</l-button>
<l-button l-tooltip-top='10' l-tooltip-left='-10'  v-tooltip.right="'右边 文字提示'">右边</l-button>
```

:::

## 超出显示提示
在 `v-tooltip` 指令上添加 `auto` 修饰符。当文字超出容器宽度的时候，鼠标悬浮上去就会显示tooltip提示文字。当文字没有超出容器宽度的时候，鼠标悬浮上去不会显示tooltip提示文字

<div class='demo-block'>
<p class="one-line tooltip-message"
 v-tooltip.top.auto="'测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题'"
 >
测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题
</p>
<p class="one-line tooltip-message" v-tooltip.top.auto="'标题文字'">标题文字</p>
</div>

:::demo

```html
<p class="one-line tooltip-message"
 v-tooltip.top.auto="'测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题'"
 >
测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题测试超长标题
</p>
<p class="one-line tooltip-message" v-tooltip.top.auto="'标题文字'">标题文字</p>

<style lang="scss" scoped>
.one-line {
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  white-space: nowrap; /*规定段落中的文本不进行换行 */
  width: 500px; /*需要配合宽度来使用*/
  border: 1px solid red;
}

.tooltip-message {
  box-sizing: border-box;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
}
</style>
```

:::


## 属性

| 参数           | 说明                                                                              | 类型    | 可选值 | 默认值 |
| -------------- | --------------------------------------------------------------------------------- | ------- | ------ | ------ |
| top            | `v-tooltip` 指令中的 `top` 修饰符，设置tooltip展示方向为上边                      | Boolean | —      | false  |
| bottom         | `v-tooltip` 指令中的 `bottom` 修饰符，设置tooltip展示方向为下边                   | Boolean | —      | true   |
| left           | `v-tooltip` 指令中的 `left` 修饰符，设置tooltip展示方向为左边                     | Boolean | —      | false  |
| right          | `v-tooltip` 指令中的 `right` 修饰符，设置tooltip展示方向为右边                    | Boolean | —      | false  |
| auto           | `v-tooltip` 指令中的 `auto` 修饰符，文字超出则显示tooltip ，不超出则不显示tooltip | Boolean | —      | false  |
| l-tooltip-top  | tooltip距离屏幕上边的偏移量，在绑定了 `v-tooltip` 指令的元素上添加该属性          | String  | —      | —      |
| l-tooltip-left | tooltip距离屏幕左边的偏移量，在绑定了 `v-tooltip` 指令的元素上添加该属性          | String  | —      | —      |
