<template>
  <div v-if="custom" class="antd-modal-custom-container">
    <a-modal
      class="antd-modal-custom"
      v-model:open="isVisible"
      :title="title"
      @ok="onOk"
      @cancel="onCancel"
      :afterClose="afterClose"
      :closable="closable"
      v-bind="hideFooter ? { footer: null } : {}"
      :destroyOnClose="destroyOnClose"
      :maskClosable="maskClosable"
      :width="width"
      :footer="null"
      :centered="centered"
      :keyboard="keyboard"
      :wrap-class-name="wrapClassName"
    >
      <template #footer v-if="!hideFooter">
        <slot name="footer"> </slot>
      </template>

      <slot></slot>
    </a-modal>
  </div>
  <div v-else>
    <a-modal
      class="antd-modal-normal"
      v-model:open="isVisible"
      :title="title"
      @ok="onOk"
      @cancel="onCancel"
      :afterClose="afterClose"
      :closable="closable"
      v-bind="hideFooter ? { footer: null } : {}"
      :destroyOnClose="destroyOnClose"
      :maskClosable="maskClosable"
      :width="width"
      :footer="null"
      :centered="centered"
      :keyboard="keyboard"
      :wrap-class-name="wrapClassName"
    >
      <template #footer v-if="!hideFooter">
        <slot name="footer"> </slot>
      </template>

      <slot></slot>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, h } from "vue";

import VueTypes from "vue-types";
const props = defineProps({
  onCancel: VueTypes.func.def(() => {}),
  afterClose: VueTypes.func.def(() => {}),
  onOk: VueTypes.func.def(() => {}),
  visible: VueTypes.bool.def(true),
  closable: VueTypes.bool.def(false),
  loading: VueTypes.bool.def(false),
  title: VueTypes.string,
  destroyOnClose: VueTypes.bool.def(true),
  cancelTitle: VueTypes.string.def("Hủy bỏ"),
  acceptTitle: VueTypes.string.def("Đồng ý"),
  hideFooter: VueTypes.bool.def(false),
  maskClosable: VueTypes.bool.def(true),
  width: VueTypes.string.def("848px"),
  centered: VueTypes.bool.def(true),
  keyboard: VueTypes.bool.def(true),
  wrapClassName: VueTypes.string.def(""),
  custom: VueTypes.bool.def(false),
});

let isVisible = ref(props.visible);

watch(
  () => props.visible,
  (val) => {
    isVisible.value = val;
  },
);

watch(
  () => isVisible.value,
  (val) => {
    if (!val) {
      props.onCancel?.();
    }
  },
);

</script>
