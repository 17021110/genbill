<template>
    <div class="tw-px-5 tw-pb-4">
      <div class="tw-flex tw-justify-between tw-mb-8">
        <h5 class="tw-m-0 tw-text-[#1B2559] tw-text-[20px] tw-leading-[24px] tw-font-[600] tw-mt-[28px]">Xem hóa đơn</h5>
        <img :src="close" alt="alt" @click="$emit('onCancel')" class="tw-cursor-pointer" />
      </div>
      <div class="tw-flex tw-justify-center">
                <div class="tw-max-w-[1654px] tw-w-full tw-border-[1px] tw-border-[#1b2559] tw-border-solid tw-p-8 tw-rounded-[20px]">

                  <div class="tw-flex tw-justify-center tw-border-[#0540cd] tw-border-solid tw-border-[0px] tw-border-b-[2px]">
                    <img class="tw-h-[80px] tw-mr-4" alt="logo" :src="Logo"/>
                    <div class="">
                      <div class="tw-text-center tw-text-[#cd0505] tw-font-[600] tw-leading-[24px] tw-text-[18px]">Công ty TNHH - TẬP ĐOÀN VẬN TẢI CHUYỂN PHÁT THÁI TUẤN</div>
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[500] tw-leading-[22px] tw-text-[16px]">Trụ sở chính: Số 2 Tây thạnh - P.Tây Thạnh</div>
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[500] tw-leading-[22px] tw-text-[16px]">Quận Tân Phú - TP. Hồ Chí Minh</div>
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[500] tw-leading-[22px] tw-text-[16px]"><span class="tw-italic">Giám đốc:</span><span class="tw-text-[18px]">Trần Mạnh Thái</span> ĐT:0985.887.379</div>
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[500] tw-leading-[22px] tw-text-[16px]">Email: vantaithaituan@gmail.com *  ĐT: 028.38105.858</div>
                    </div>
                  </div>
                  <div class="tw-flex tw-justify-center tw-border-[#0540cd] tw-border-solid tw-border-[0px] tw-border-b-[2px] tw-py-3">
                    <img class="tw-h-[80px] tw-mr-4" alt="logo" :src="Logo"/>
                    <div class="">
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[600] tw-leading-[24px] tw-text-[18px]">CHI NHÁNH TẠI NAM ĐỊNH: TRƯỞNG CNMB NGUYỄN CÔNG TÍNH ĐT: 0912.283.039</div>
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[500] tw-leading-[22px] tw-text-[16px]">ĐC: Đường N4 -  KCN Hòa Xá - TP Nam Định - Tỉnh Nam Định</div>
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[500] tw-leading-[22px] tw-text-[16px]">Phụ trách hàng ra: Phương Anh 0888290439</div>
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[500] tw-leading-[22px] tw-text-[16px]">Phụ trách hàng vào: Lan Anh 0888071639</div>
                    </div>
                  </div>
                  <div>
                    <div class="tw-text-center tw-text-[#0540cd] tw-font-[600] tw-leading-[24px] tw-text-[18px]">CHUYÊN VẬN TẢI ĐƯỜNG BỘ - ĐƯỜNG SẮT - ĐƯỜNG BIỂN</div>
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[500] tw-leading-[22px] tw-text-[16px]">TRUNG CHUYỂN HÀNG TUẬN TIỆN - NHANH - AN TOÀN</div>
                      <div class="tw-text-center tw-text-[#0540cd] tw-font-[500] tw-leading-[22px] tw-text-[16px]">BẮC - TRUNG - NAM - TÂY NGUYÊN VÀ NGƯỢC LẠI 24/24h</div>
                  </div>
                  <div  class="tw-text-center tw-text-[#cd0505] tw-font-[600] tw-leading-[24px] tw-text-[20px] tw-mb-6">
                    GIẤY GIAO NHẬN HÀNG MIỀN BẮC
                  </div>

                </div>
            </div>
      <div class="tw-mt-8 tw-flex tw-items-center tw-justify-end">
        <AntdButton @click="$emit('onCancel')">
          <span class="tw-text-neutral-2 tw-font-normal">Hủy</span>
        </AntdButton>
        <AntdButton class="tw-ml-3" :type="'primary'"  @click="handleSubmit()">
          <span class="">Xuất hóa đơn</span>
        </AntdButton>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive, watch } from "vue";
  import AntdButton from "@/components/antd-button/index.vue";
  import close from "@/assets/images/icon/close.svg";
  const emit = defineEmits(["onCancel"]);
  import Logo from "@/assets/images/logo.png"
  const props = defineProps({
    formGroup: {
      type: Array,
      required: true,
    },
    isVisibleModalEportBill: {
      type: Boolean,
      required: true,
    },
  });
  
  
  
  const handleSubmit = async () => {
  };
  </script>
  