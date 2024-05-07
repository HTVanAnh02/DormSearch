<template>
    <v-dialog max-width="350px">
        <v-form @submit.prevent="submit">
            <v-card style="border-radius: 12px !important;">
                <v-card-title
                    style="font-weight: bold;position:fixed;width: 100%;top: 0;background-color: white;z-index: 100;border-top-left-radius:12px ;border-top-right-radius: 12px;">
                    <h4 style="font-size: 18px;">{{ itemEdit ? "Sửa quyền" : "Tạo mới quyền" }}</h4>
                </v-card-title>
                <v-container class="mt-10" style="background-color: #F7F8FA">
                    <div style="display: block; margin-top: 8px;">
                        <span>Tên quyền </span> <span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="rolename" placeholder="Nhập tên quyền"
                            :error-messages="rolenameError" style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ rolenameError }}</span>
                    </div>
                    <div style="display: block; margin-top: 12px;">
                        <span>Mô tả quyền</span><span class="text-blue ml-2">*</span>
                        <v-textarea class="mt-1" v-model="roledescription" placeholder="Nhập mô tả"
                            :error-messages="roledescriptionError" required style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-textarea>
                        <span style="color:red">{{ roledescriptionError }}</span>
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
import { roleApi } from './Services/role.api';
const loading = useLoadingStore()
const props = defineProps(['itemEdit'])
const emit = defineEmits(['close', 'loadData'])
const editId= ref('')
watch(() => props.itemEdit, (newValue) => {
    resetForm()
    if (props.itemEdit !== null) {
        getRoleById(newValue)
    }
});

const getRoleById = (item) => {
    console.log(item)
    editId.value =item.roleId;
    rolename.value = item.rolename;
    roledescription.value = item.roledescription;
}
onUpdated(() => {
    if (props.itemEdit === null)
        resetForm()
})


const { handleSubmit, resetForm } = useForm();

const { value: rolename, errorMessage: rolenameError } = useField(
    'rolename',
    yup
        .string()
        .required('Không được bỏ trống')
        .matches(/^[a-zA-Z0-9\sÀ-ỹ]+$/u, 'Tên thành phố chỉ được chứa ký tự chữ cái, số và khoảng trắng')
);
const { value: roledescription, errorMessage: roledescriptionError } = useField(
    'roledescription',
    yup
        .string()
        .required('Không được bỏ trống')
        .min(10, 'Mô tả phải có ít nhất 10 ký tự')
        .max(500, 'Mô tả không được quá 500 ký tự')
);

const submit = handleSubmit(async () => {
    try {
        loading.setLoading(true)
        const formData = new FormData();
        formData.append('rolename', rolename.value);
        formData.append('roledescription', roledescription.value);

        if (props.itemEdit == null) {
            const data = await roleApi.createData(formData);
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
            const data = await roleApi.updateData(editId.value, formData);
            console.log(data)
            if (!data.success) {
                showWarningsNotification(data.message)
            }
            else {
                close()
                emit('loadData')
                showSuccessNotification("Cập nhật thành công")
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