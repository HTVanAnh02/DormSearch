<template>
    <v-dialog max-width="250px">
        <v-form @submit.prevent="submit">
            <v-card style="border-radius: 12px !important;">
                <v-card-title
                    style="font-weight: bold;position:fixed;width: 100%;top: 0;background-color: white;z-index: 100;border-top-left-radius:12px ;border-top-right-radius: 12px;">
                    <h4 style="font-size: 18px;">{{ itemEdit ? "Sửa giá" : "Tạo mới giá" }}</h4>
                </v-card-title>
                <v-container class="mt-10" style="background-color: #F7F8FA">
                    <div style="display: block; margin-top: 12px;">
                        <span>Giá</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="price" placeholder="Nhập giá nhà trọ"
                            :error-messages="priceError" required style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ priceError }}</span>
                    </div>
                </v-container>
                <v-card-actions class="pr-4">
                    <v-spacer></v-spacer>
                    <v-btn width="70px" variant="outlined" height="32px"
                        style="font-family: Public Sans, sans-serif; font-size: 14px; margin-right: 16px; border: 1px solid #A1A9B8;border-radius: 6px;"
                        @click="close()" class="text-capitalize" text="Hủy"></v-btn>
                    <v-btn width="105px" height="32px"
                        style="font-family: Public Sans , sans-serif;font-size: 14px; border-radius: 6px;" type="submit"
                        color="#0F60FF" class="text-capitalize" variant="elevated">{{ itemEdit ? "Update" :
                            "Tạo" }}<span class="text-lowercase">{{ itemEdit ? "" : "mới" }}</span></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { ref, watch, onUpdated } from 'vue';
import { showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
import { useLoadingStore } from '@/store/loading';
import { priceApi } from './Services/price.api';
const loading = useLoadingStore()
const props = defineProps(['itemEdit'])
const emit = defineEmits(['close', 'loadData'])
watch(() => props.itemEdit, (newValue, oldValue) => {
    resetForm()
    if (props.itemEdit !== null) {
        getPriceById(newValue)
    }
});

const getPriceById = (item) => {
    console.log(item)
    price.value = item.price;
}
onUpdated(() => {
    if (props.itemEdit === null)
        resetForm()
})
const { handleSubmit, resetForm } = useForm();

const { value: price, errorMessage: priceError } = useField(
    'price',
    yup
        .number()
        .required('Không được bỏ trống')
        .min(0, 'Giá không được nhỏ hơn 0')
        .typeError('Giá phải là một số')
        .max(1000000000, 'Giá phải nhỏ hơn 1 tỷ')
);

const submit = handleSubmit(async () => {
    try {
        loading.setLoading(true)
        const formData = new FormData();
        formData.append('price', price.value);
        if (props.itemEdit == null) {
            const data = await priceApi.createData(formData);
            // console.log(data)
            if (!data.success) {
                alert("Tạo lỗi")
                showWarningsNotification(data.message)
            }
            else {
                close()
                emit('loadData')
                showSuccessNotification("Thêm thành công")
                empty()
            }
        }
        else {
            const data = await priceApi.updateData(props.itemEdit.id, formData);
            console.log(data)
            if (!data.success) {
                showWarningsNotification(data.message)
            }
            else {
                close()
                emit('loadData')
                showSuccessNotification("cập nhật thành công")
                empty()
            }
        }
    } catch (error) {
        showWarningsNotification(error.message)
    } finally {
        loading.setLoading(false)
    }
});
const empty = () => {
    props.itemEdit = null
}
const close = () => {
    emit('close')
    resetForm()
}

</script>
<style scoped>
.custom-file-input {
    display: inline-block;
    width: 100%;
    padding: 8px 12px;
    font-size: 14px;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.custom-file-input:hover {
    background-color: #e0e0e0;
}

* {
    font-family: Public Sans, sans-serif;
    font-size: 14px;
}
</style>