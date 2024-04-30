import { useField, useForm } from 'vee-validate';
import { AuthStore } from '../authStore';
import { showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
import {  useLoadingStore } from '@/store/loading';
import { registerWithPasswordSchema } from '../schema';
import { computed } from 'vue';
export const userRegisterForm = () => {
  const loading = useLoadingStore();
  const authStore = AuthStore();
  const {
    handleSubmit,
    values: formValue,
    setValues,
    validate,
    meta,
  } = useForm({
    validationSchema: registerWithPasswordSchema,
  });
  const {
    value: phone,
    setValue: setPhone,
    errorMessage: phoneError,
  } = useField('phone');

  const {
    value: email,
    setValue: setEmail,
    errorMessage: emailError,
  } = useField('email');

  const {
    value: password,
    setValue: setPassword,
    errorMessage: passwordError,
  } = useField('password');

  const {
    value: confirmPassword,
    setValue: setConfirmPassword,
    errorMessage: confirmPasswordError,
  } = useField('confirmPassword');

  const {
    value: avatar,
    setValue: setAvatar,
    errorMessage: avatarError,
  } = useField('avatar');
  const handleRegister = handleSubmit(async (values) => {
    loading.setLoading(true)
    const res = await authStore.register({
      fullname:values.fullname,
      email: values.email,
      password: values.password,
      phone: values.phone,
      avatar: values.avatar,
    });
    loading.setLoading(false)
    if (res) {
      showSuccessNotification("Đăng ký thành công")
    }
    else {
      showWarningsNotification("Đăng ký thất bại. Vui lòng thử lại");
    }
  });
  const isValidForm = computed(() => meta.value.valid);
  return {
    handleRegister,
    formValue,
    validate,
    isValidForm,
    setValues,
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    confirmPassword,
    setConfirmPassword,
    confirmPasswordError,
    phone,
    setPhone,
    phoneError,
    avatar,
    setAvatar,
    avatarError,
  };
};
