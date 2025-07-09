import toast from "react-hot-toast";

let EmailRegx = /\S+@\S+\.\S+/;
// let MobileRegx = /^(?:\+88)?01[3-9]\d{8}$/;
// let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
// let MobileRegx = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
// let MobileRegx = /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/;
// let MobileRegx = "^(?:(?:+|00)88|01)?d{11}$";
// let MobileRegx = "^(?:\\+88|88)?(01[3-9]\\d{8})$";
let MobileRegx = " ^(((+|00)?880)|0)(d){10}$";

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }
  IsMobile(value) {
    return MobileRegx.test(value);
  }
  IsEmail(value) {
    return !EmailRegx.test(value);
  }
  ErrorToast(msg) {
    toast.error(msg);
  }
  SuccessToast(msg) {
    toast.success(msg);
  }
}

export const { IsEmpty, IsMobile, IsEmail, ErrorToast, SuccessToast } =
  new FormHelper();