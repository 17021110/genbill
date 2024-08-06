<template>
    <div class="page">
        <div class="page-content tw-bg-[#fff] tw-p-8 tw-rounded-[12px] tw-w-full tw-mt-9">
            <div class="tw-text-[#1b2559] tw-text-[18px] tw-font-[500] tw-mb-6">Danh sách xuất hóa đơn</div>
            <table class="tw-w-full">
                <thead>
                    <tr>
                        <th v-for="item,index in headers" :key="index">{{ item }}</th>
                        <th>Hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item,index in rows" :key="index">
                        <td v-for="(td,idx) in item" :key="idx">
                            {{ td }}
                        </td>
                        <td class="tw-flex tw-items-center tw-justify-center"><div @click="ShowBill(item)" class="tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-h-[32px] tw-w-[125px] tw-border-[1px] tw-border-solid tw-rounded-[20px] tw-border-[#06f] tw-bg-[#06f] tw-text-[#fff]">Xuất hóa đơn</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <BaseModal width="1000px" :onOk="onCancel" :visible="isVisibleModalEportBill" :onCancel="onCancel">
      <Suspense>
        <template #default>
          <ModalEportBill
            :isVisibleModalEportBill="isVisibleModalEportBill"
            @onCancel="onCancel"
            :formGroup="formGroup"
          />
        </template>
        <template #fallback>
          <LoadingModal />
        </template>
      </Suspense>
    </BaseModal>
</template>

<script setup lang="ts">
import {onMounted,ref,defineAsyncComponent} from "vue"
import axios from "axios";
import LoadingModal from "@/components/loadingModal/index.vue";


const BaseModal = defineAsyncComponent(() => import("@/components/antd-modal/index.vue"));
const ModalEportBill = defineAsyncComponent(() => import("./componets/ModalEportBill.vue"));
const isVisibleModalEportBill =ref<any>(false);
const onCancel =()=>{
  isVisibleModalEportBill.value=false;
}

const headers = ref([]);
    const rows = ref([]);

    const formGroup=ref<any>(null);
 const fetchData = async () => {

    const spreadsheetId = '1rTuRow8dovWiZ3UczTawtkp76XQ_XXcrgPbt8MRV_YM';
      const range = 'testing!A1:Z1000'; // Adjust the range according to your needs
      const apiKey = 'AIzaSyBPMASM-mrD5QihKZvsN4ralm_OfnZcA8E';
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data.values;

            
        if (data.length > 0) {
          headers.value = data[0];
          rows.value = data.slice(1);
        }
        console.log(rows.value)
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
      }
    };

    const ShowBill=(item)=>{
      formGroup.value=item;
      isVisibleModalEportBill.value=true;
    }

// const navigate=(item)=>{
//     router.push()
// }

    onMounted(fetchData);
</script>

<style lang="scss">
table {
    border-collapse: collapse;
    thead{
        tr {
            border:1px solid #1b2559;
            outline: 1px;
            border-radius:8px;
            th,td {
                border:0px solid #1b2559;
                border-right:1px solid #1b2559;
                padding: 12px;
                color:#1b2559;
            }
        }
    }
    tbody{
        tr {
            border:1px solid #1b2559;
            outline: 1px;
            th,td {
                border:0px solid #1b2559;
                border-right:1px solid #1b2559;
                padding: 12px;
                color:#1b2559;
            }
        }
    }
}
</style>