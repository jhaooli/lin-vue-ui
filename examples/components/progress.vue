<template>
  <div>
    <div>
      <l-progress type="primary" :percent="0.5" />
      <l-progress type="success" :percent="0.5" />
      <l-progress type="warning" :percent="0.5" />
      <l-progress type="danger" :percent="0.5" />
    </div>
    <div>
      <l-progress textOutside="85分" textInside="50%" :height="20" type="primary" :percent="0.5" />
      <l-progress textOutside="85分" textInside="50%" :height="20" type="success" :percent="0.5" />
      <l-progress textOutside="85分" textInside="50%" :height="20" type="warning" :percent="0.5" />
      <l-progress textOutside="85分" textInside="50%" :height="20" type="danger" :percent="0.5" />
    </div>
    <div>
      <l-progress
        outColor="rgb(144, 147, 153)"
        innerColor="rgb(111, 122, 211)"
        :height="20"
        :percent="0.5"
      />
    </div>
    <div>
      <l-progress :height="20" type="danger" :percent="0.5">
        <template>
          <p class="demo-out-tip">百分之五十</p>
        </template>
        <template v-slot:text>
          <p class="demo-in-tip">百分之五十</p>
        </template>
      </l-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "test-progress"
};
</script>

<style lang="scss" scoped>
::v-deep .l-progress {
  margin-bottom: 10px;
}
.demo-in-tip {
  color: #fff;
  font-size: 12px;
}
.demo-out-tip {
  color: #333;
  font-size: 12px;
  margin-left: 10px;
}
</style>