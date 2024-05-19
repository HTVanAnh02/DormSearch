<template>
    <v-dialog max-width="500px">
        <v-form @submit.prevent="submit">
            <v-card style="border-radius: 12px !important;">
                <v-card-title
                    style="font-weight: bold;position:fixed;width: 100%;top: 0;background-color: white;z-index: 100;border-top-left-radius:12px ;border-top-right-radius: 12px;">
                    <h4 style="font-size: 18px;">{{ itemEdit ? "Sửa nhà trọ" : "Tạo mới nhà trọ" }}
                    </h4>
                </v-card-title>
                <v-container class="mt-10" style="background-color: #F7F8FA">
                    <div style="display: block; margin-top: 8px;">
                        <span>Tên nhà trọ </span> <span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="housename" placeholder="Nhập tên nhà trọ"
                            :error-messages="housenameError" style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ housenameError }}</span>
                    </div>
                    <div style="display: block;">
                        <span>Khu vực</span><span class="text-blue ml-2">*</span>
                        <v-select v-model="areasId" :items="itemsListAreas" item-title="areasName" item-value="areasId"
                            density="compact" variant="outlined"></v-select>
                    </div>
                    <div style="display: block;">
                        <span>Thành Phố</span><span class="text-blue ml-2">*</span>
                        <v-select v-model="cityId" :items="itemsListCitys" item-title="cityName" item-value="cityId"
                            density="compact" variant="outlined"></v-select>
                    </div>
                    <div style="display: block;">
                        <span>Loại Phòng</span><span class="text-blue ml-2">*</span>
                        <v-select v-model="roomstyleId" :items="itemsListRoomstyles" item-title="roomstyleName" item-value="roomstyleId"
                            density="compact" variant="outlined"></v-select>
                    </div>
                    <div style="display: block; ">
                        <span>Giá</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="price" placeholder="Nhập giá phòng trọ"
                            :error-messages="priceError" required style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ priceError }}</span>
                    </div>
                    <div style="display: block;">
                        <span>Diện tích</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="acreage" placeholder="Nhập diện tích nhà trọ"
                            :error-messages="acreageError" required style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ acreageError }}</span>
                    </div>
                    <div style="display: block; ">
                        <span>Nội thất</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="interior" placeholder="Nhập nội thất nhà trọ"
                            :error-messages="interiorError" required style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ interiorError }}</span>
                    </div>
                    <div style="display: block; ">
                        <span>Địa chỉ</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="addresshouses" placeholder="Nhập địa chỉ nhà trọ"
                            :error-messages="addresshousesError" required style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ addresshousesError }}</span>
                    </div>
                    <div style="display: block; ">
                        <span>Ngày đăng</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="datesubmitted" type="date"
                            style="background-color: white; border-radius: 6px;" density="compact" single-line
                            hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ datesubmittedError }}</span>
                    </div>
                    <div style="display: block; ">
                        <span>Liên hệ</span><span class="text-blue ml-2">*</span>
                        <v-text-field class="mt-1" v-model="contact" placeholder="Nhập số liên hệ của nhà trọ"
                            :error-messages="contactError" required style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-text-field>
                        <span style="color:red">{{ contactError }}</span>
                    </div>
                    <div style="display: block; ">
                        <span>Mô tả</span><span class="text-blue ml-2">*</span>
                        <v-textarea class="mt-1" v-model="title" placeholder="Nhập mô tả"
                            :error-messages="titleError" required style="background-color: white;" density="compact"
                            single-line hide-details variant="outlined"></v-textarea>
                        <span style="color:red">{{ titleError }}</span>
                    </div>
                    <div style="display: block; ">
                        <span>Ảnh nhà trọ</span><span class="text-blue ml-2">*</span><br>
                        <input @change="handleImageChange" type="file" class="custom-file-input mt-1" />
                    </div>
                </v-container>
                <v-card-actions class="pr-4">
                    <v-spacer></v-spacer>
                    <v-btn width="70px" variant="outlined" height="32px"
                        style="font-family: Public Sans, sans-serif; font-size: 14px; margin-right: 16px; border: 1px solid #A1A9B8;border-radius: 6px;"
                        @click="close()" class="text-capitalize" text="Hủy"></v-btn>
                    <v-btn width="105px" height="32px"
                        style="font-family: Public Sans , sans-serif;font-size: 14px; border-radius: 6px;" 
                        color="#0F60FF" class="text-capitalize" variant="elevated" @click="submit">{{ itemEdit ? "Update" :
                            "Tạo" }}<span class="text-lowercase">{{ itemEdit ? "" : "mới" }}</span></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>
<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { ref, watch, onUpdated, onMounted } from 'vue';
import { showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
import { useLoadingStore } from '@/store/loading';
import { houseApi } from '@/layouts/Admin/House/house.api';
import { AuthStore } from '@/Auth/authStore';
import { useCity } from '@/layouts/Admin/City/Services/city.service';
import { useArea } from '@/layouts/Admin/Area/Services/area.service';
import { useRoom } from '@/layouts/Admin/Roomstyle/Services/roomstyle.service';
const { isAuthenticated } = AuthStore();
const loading = useLoadingStore();
const props = defineProps(['itemEdit'])
const emit = defineEmits(['close', 'loadData'])
const { citysItem } = useCity()
const { areasItem } = useArea()
const { roomstylesItem } = useRoom()
const itemsListCitys = ref([]);
const itemsListAreas = ref([]);
const itemsListRoomstyles = ref([]);
const cityId = ref('');
const areasId = ref('');
const houseId = ref('');
const roomstyleId = ref('');
const loadData = async () => {
    const res = await citysItem()
    if (res) {
        itemsListCitys.value = res.items;
        console.log(res.items);
        console.log(itemsListCitys.value);
    }
    const res1 = await areasItem()
    if (res1) {
        itemsListAreas.value = res1.items;
        console.log(res1.items);
        console.log(itemsListAreas.value);
    }
    const res2 = await roomstylesItem()
    if (res2) {
        itemsListRoomstyles.value = res2.items;
        console.log(res2.items);
        console.log(itemsListRoomstyles.value);
    }
}
watch(() => props.itemEdit, (newValue,) => {
    resetForm()

    if (props.itemEdit !== null) {
        getHouseById(newValue)
    }
});

const getHouseById = (item) => {
    console.log(item)
    houseId.value = item.housesId;
    housename.value = item.housename;
    title.value = item.title;
    interior.value = item.interior;
    price.value = item.price;
    acreage.value = item.price;
    addresshouses.value = item.addresshouses;
    datesubmitted.value = item.datesubmitted;
}
onUpdated(() => {
    if (props.itemEdit === null)
        resetForm()
})


const { handleSubmit, resetForm } = useForm();

const { value: housename, errorMessage: housenameError } = useField(
    'housename',
    yup
        .string()
        .required('Không được bỏ trống')
        .matches(/^[a-zA-Z0-9\sÀ-ỹ]+$/u, 'Tên nhà trọ chỉ được chứa ký tự chữ cái, số và khoảng trắng')
);


const { value: title, errorMessage: titleError } = useField(
    'title',
    yup
        .string()
        .required('Không được bỏ trống')
        .min(10, 'Mô tả phải có ít nhất 10 ký tự')
        .max(500, 'Mô tả không được quá 500 ký tự')
);
const { value: interior, errorMessage: interiorError } = useField(
    'interior',
    yup
        .string()
        .required('Không được bỏ trống')
);
const { value: price, errorMessage: priceError } = useField(
    'price',
    yup
        .number()
        .required('Không được bỏ trống')
        .min(0, 'Giá không được nhỏ hơn 0')
        .typeError('Giá phải là một số')
        .max(1000000000, 'Giá phải nhỏ hơn 1 tỷ')
);

const { value: datesubmitted, errorMessage: datesubmittedError } = useField(
    'datesubmitted',
    yup
        .string()
        .required('Không được bỏ trống')
        .matches(
            /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
            'Ngày sinh không hợp lệ. Vui lòng nhập theo định dạng YYYY-MM-DD.'
        )
        .test('not-in-future', 'Ngày sinh không được trong tương lai', function (value) {
            const datesubmittedDate = new Date(value);
            const currentDate = new Date();
            return datesubmittedDate <= currentDate;
        })
);

const { value: addresshouses, errorMessage: addresshousesError } = useField(
    'addresshouses',
    yup
        .string()
        .required('Không được bỏ trống')
        .min(10, 'Mô tả phải có ít nhất 10 ký tự')
        .max(500, 'Mô tả không được quá 500 ký tự')
);

const { value: contact, errorMessage: contactError } = useField(
    'contact',
    yup
        .string()
        .required('Không được bỏ trống')
        .min(10, 'Mô tả phải có ít nhất 10 ký tự')
        .max(500, 'Mô tả không được quá 500 ký tự')
);

const { value: acreage, errorMessage: acreageError } = useField(
    'acreage',
    yup
        .string()
        .required('Không được bỏ trống')
);
const submit = async () => {
    try {
        
        if (isAuthenticated) {
            loading.setLoading(true)
            const formData = new FormData();
            formData.append('HousesName', housename.value);
            formData.append('Title', title.value);
            formData.append('Interior', interior.value);
            formData.append('Price', price.value);
            formData.append('Acreage', acreage.value);
            formData.append('AddressHouses', addresshouses.value);
            formData.append('DateSubmitted', datesubmitted.value);
            formData.append('AreasId', areasId.value);
            formData.append('CityId', cityId.value);
            formData.append('RoomstyleId',roomstyleId.value);
            formData.append('file', imageFile.value);

            if (props.itemEdit == null) {
                const data = await houseApi.createData(formData);
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
                console.log(houseId.value);
                const data = await houseApi.updateData(houseId.value, formData);
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
        }
        else {
            showWarningsNotification("Login")
        }
    } catch (error) {
        showWarningsNotification(error.message)
    } finally {
        loading.setLoading(false)
    }
};

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
onMounted(() => {
    console.log(isAuthenticated);
    loadData();
})
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