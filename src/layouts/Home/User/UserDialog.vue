<template>
    <v-dialog max-width="500px">
        <v-form @submit.prevent="submit">
            <v-card style="border-radius: 12px !important;">
                <v-card-title
                    style="font-weight: bold;position:fixed;width: 100%;top: 0;background-color: white;z-index: 100;border-top-left-radius:12px ;border-top-right-radius: 12px;">
                    <h4 style="font-size: 18px;">{{ itemEdit ? "Sửa người dùng" : "Tạo mới người dùng" }}</h4>
                </v-card-title>
                <v-container class="mt-9" style="background-color: #F7F8FA">
                    <div style="display: block; margin-top: 12px;">
                        <span>Tên người dùng</span> <span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="fullname" placeholder="Nhập tên người dùng"
                            style="background-color: white;" density="compact" single-line hide-details
                            variant="outlined"></v-text-field>
                        <span style="color:red">{{ fullnameError }}</span>
                    </div>
                    <div style="display: block; margin-top: 12px;">
                        <span>Email</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="email" placeholder="Nhập email"
                            style="background-color: white;border-radius: 6px;" density="compact" single-line
                            hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ emailError }}</span>
                    </div>
                    <div style="display: block; margin-top: 12px;">
                        <span>Password</span><span class="text-blue ml-2">*</span>
                        <v-text-field v-model="password"
                        :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" :type="visible ? 'text' : 'password'"
                        density="compact" placeholder="••••••••••••••" variant="outlined"
                        @click:append-inner="visible = !visible">
                    </v-text-field>
                    <span style="color:red">{{ passwordError }}</span>
                    </div>
                    <div style="display: block; margin-top: 12px;">
                        <span>Giới tính</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="gender" placeholder="Nhập giới tính"
                            style="background-color: white;border-radius: 6px;" density="compact" single-line
                            hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ genderError }}</span>
                    </div>
                    <div style="display: block; margin-top: 12px;">
                        <span>Số điện thoại</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="phone" placeholder="Nhập số điện thoại"
                            style="background-color: white;border-radius: 6px;" density="compact" single-line
                            hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ phoneError }}</span>
                    </div>
                    <div style="display: block; margin-top: 12px;">
                        <span>Địa chỉ</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="address" placeholder="Nhập địa chỉ"
                            style="background-color: white;border-radius: 6px;" density="compact" single-line
                            hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ addressError }}</span>
                    </div>
                    <div style="display: block; margin-top: 12px;">
                        <span>Quyền</span><span class="text-blue ml-2">*</span>
                        <v-radio-group style="font-size: 14px;" v-model="role" inline single-line hide-details>
                            <v-radio color="primary" density="compact" :label="Role.ADMIN"
                                :value="Role.ADMIN"></v-radio>
                            <v-radio color="primary" density="compact" :label="Role.USER" :value="Role.USER"></v-radio>
                        </v-radio-group>
                        <span style="color:red">{{ roleError }}</span>
                    </div>
                    <div style="display: block; margin-top: 12px;">
                        <span>Ảnh đại diện</span><span v-show="!itemEdit" class="text-blue ml-2">*</span><br>
                        <input @change="handleImageChange" type="file" class="custom-file-input mt-1" />
                        <span style="color:red">{{ errorFile }}</span>
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
import { ref,onUpdated, watch, onMounted } from 'vue';
import { showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
import { MESSAGE_ERROR, Regex, Role } from '@/common/contant/contants';
import { useLoadingStore } from '@/store/loading';
import { userServiceApi } from './user.api';
const visible = ref(false)
const loading = useLoadingStore()
const errorFile=ref(null)
const props = defineProps(['itemEdit'])
const emit = defineEmits(['close', 'loadData'])
const editId= ref('')
watch(() => props.itemEdit, (newValue, oldValue) => {
    resetForm()
    if (props.itemEdit !== null) {
        getUserById(newValue)
    }
});
const getUserById = async (id) => {
    try {
        loading.setLoading(true)
        const data = await userServiceApi._getDetail(id);
        loading.setLoading(false)
        if (data.success) {
            editId.value = data.data.userId;
            fullname.value = data.data.fullName;
            email.value = data.data.email;
            password.value = data.data.password;
            gender.value = data.data.gender;
            address.value = data.data.address;
            phone.value = data.data.phoneNumber;
            role.value = data.data.role;
        }
        else {
            showWarningsNotification(data.message)
        }
    } catch (error) {
        console.error('Error fetching user detail:', error);
    }
}
onUpdated(() => {
    if (props.itemEdit === null)
    {
        resetForm()
        errorFile.value=null
    }
})
const { handleSubmit, resetForm } = useForm();

const { value: fullname, errorMessage: fullnameError } = useField(
    'fullname',
    yup
        .string()
        .required(MESSAGE_ERROR.REQUIRE)
        .matches(
            Regex.NAME,
            MESSAGE_ERROR.NAME
        )
);
const { value: gender, errorMessage: genderError } = useField(
    'gender',
    yup
        .string()
        .required(MESSAGE_ERROR.REQUIRE)
);
const { value: address, errorMessage: addressError } = useField(
    'address',
    yup
        .string()
        .required(MESSAGE_ERROR.REQUIRE)
)
const { value: email, errorMessage: emailError } = useField(
    'email',
    yup
        .string()
        .required(MESSAGE_ERROR.REQUIRE)
        .matches(
            Regex.EMAIL,
            MESSAGE_ERROR.EMAIL
        )
);

const { value: password, errorMessage: passwordError } = useField(
    'password',
    yup
        .string()
        .required(MESSAGE_ERROR.REQUIRE)
        .matches(
            Regex.PASSWORD,
            MESSAGE_ERROR.PASSWORD_CHECK
        )
);

const { value: phone, errorMessage: phoneError } = useField(
    'phone',
    yup
        .string()
        .required(MESSAGE_ERROR.REQUIRE)
        .matches(
            Regex.PHONE,
            MESSAGE_ERROR.PHONE
        )
);
const { value: role, errorMessage: roleError } = useField(
    'role',
    yup
        .string()
        .required(MESSAGE_ERROR.REQUIRE)
);

const submit = handleSubmit(async () => {
    try {
        loading.setLoading(true)
        const formData = new FormData();
        formData.append('userId',editId.value);
        formData.append('fullName',fullname.value);
        formData.append('email', email.value);
        formData.append('password', password.value);
        formData.append('gender', gender.value);
        formData.append('address', address.value);
        formData.append('phoneNumber', phone.value);
        formData.append('file', imageFile.value);
        formData.append('role', role.value);
        console.log(formData);
        if (props.itemEdit == null) {
            const data = await userServiceApi.createData(formData);
           
            if (!data.success) {
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
            const data = await userServiceApi.updateData(editId.value, formData);
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
    imageFile.value = null;
    props.itemEdit = null
}


const imageFile = ref(null);
const handleImageChange = (event) => {
    const file = event.target.files[0];
    imageFile.value = file;
};
const close = () => {
    emit('close')
    resetForm()
}

</script>