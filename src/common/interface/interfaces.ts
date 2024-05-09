import { type AxiosResponse } from 'axios';
import type { Ref } from 'vue';
import {
  ErrorCode,
  Gender,
  HttpStatus,
  OrderDirection,
  PageName,
  ProfileType,
  Role,
  UserStatus,
} from '../contant/contants';

export interface IResponseError<T = any> {
  key: string;
  message: string;
  errorCode: ErrorCode;
  data?: T;
}

export interface IBodyResponse<T> extends AxiosResponse {
  success: boolean;
  isRequestError?: boolean;
  code: HttpStatus;
  message: string;
  error: string;
  data: T;
  items:T;
  errors?: IResponseError<any>[];
  totalItems:number;
}

export interface ICommonListQuery {
  page?: number;
  limit?: number;
  orderBy?: string;
  orderDirection?: OrderDirection | string;
  keyword?: string;
  description?:string;
}
export interface ICommonListQueryByHome{
  page?: number;
  limit?: number;
  keyword?: string;
  cityId?:string;
  priceId?:string;
  areaId?:string;
  roomstyleId?:string;
}
export interface ItemsList{
  success:boolean;
  data?:[]
}
export interface IGetListResponse<T> {
  items: T[];
  totalItems: number;
}

export interface IDropDownOption {
  value?: string | number;
  label?: string;
}

// For sidebar

export interface ISidebarItem {
  title: string;
  routeName?: PageName;
  activeRouteNames?: PageName[];
  icon?: string;
  subItems?: ISidebarItem[];
  active?: Ref<boolean>;
  role?: boolean;
  // hasRoles?: SystemRole[];
}

export interface ISidebarGroup {
  groupName?: string;
  items: ISidebarItem[];
  role?: boolean;
}

export interface IOption {
  value: string | number;
  title: string;
  disabled?: boolean;
  other?: any;
}

export interface ITime {
  hours: number;
  minutes: number;
  seconds?: number;
}

export interface IRoleDetail {
  role?: string;
}
export interface IUserProfile {
  id: string;
  code?: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  dob?: string;
  userRole?: Role;
  role?: IRoleDetail;
  type?: ProfileType;
  gender?: Gender;
  features?: string;
  isEmailVerified?: boolean;
  status: UserStatus;
  signedContractDate?: string;
}


// Permissions
export interface IBasePermission {
  create?: boolean;
  delete?: boolean;
  update?: boolean;
  view?: boolean;
}

export interface IClassroomPermission extends IBasePermission {
  viewPersonal?: boolean;
  detailBasic?: boolean;
  detailStatistics?: boolean;
  viewTimeKeeping?: boolean;
  viewAttendance?: boolean;
  viewStudentClassroom?: boolean;
  viewGeneralClassroom?: boolean;
  viewSyllabus?: boolean;
  download?: boolean;
}

export interface ICoursePermission extends IBasePermission {
  viewPersonal?: boolean;
  detailBasic?: boolean;
  detailStatistics?: boolean;
  viewClassroomByCourse?: boolean;
  viewPersonalClassroomByCourse?: boolean;
  viewTeacherByCourse?: boolean;
  viewSubjectByCourse?: boolean;
}

export interface ILessonPermission extends IBasePermission {
  viewPersonal?: boolean;
  updateDocument?: boolean;
  detail?: boolean;
  downloadVideo?: boolean;
}

export interface IUserPermission {
  update?: boolean;
  view?: boolean;
  changePassword?: boolean;
}

export interface ISchedulePermission {
  view?: boolean;
  viewPersonal?: boolean;
  processLeaveRequest?: boolean;
  createRequestLeave?: boolean;
  deleteLeaveRequest?: boolean;
  updateLesson?: boolean;
  createLesson?: boolean;
  attendance?: boolean;
  updateTimeKeeping?: boolean;
  delete?: boolean;
}

export interface ITeacherPermission extends IBasePermission {
  viewClassroomByTeacher?: boolean;
}

export interface ITimekeepingPermission {
  viewPersonal?: boolean;
  view?: boolean;
  create?: boolean;
}

export interface IStudentPermission extends IBasePermission {
  viewClassroomByStudent?: boolean;
}

export interface ISyllabusPermission extends IBasePermission {
  viewPersonal?: boolean;
  download?: boolean;
}

export interface IUserRole {
  user?: IUserPermission;
  role?: IBasePermission;
}

export interface IAuthUserInterface {
  username: string
  email: string
  password: string
  passwordConfirm: string
}
export interface IUserInterface {
  user: string
  isUserLoggedIn: boolean
  token: string | undefined
}


export type IUser={
    id:string
    fullname:string;
    gender:string,
    email:string,
    phonenumber:string,
    address:string,
    active:string,
    avatar?: string;
    role:string
}
export interface ICommonListQueryByHome{
  page?: number;
  limit?: number;
  keyword?: string;
  areaId?:string;
  cityId?:string;
  priceId?:string;
  acreageId?:string;
  roomstyleId?:string;
}
export type IHouse ={
    id:string
    housename:string;
    title:string;
    interior:string;
    price:string;
    addresshouses:string;
    datesubmitted:string;
}
export type  IHouseGetAll= {
    items: [];
    totalItems: number;
}
export interface TokenResponse {
  accessToken: string
}
export interface IResponseError<T = any> {
  key: string;
  message: string;
  errorCode: ErrorCode;
  data?: T;
}

export interface IBodyResponse<T> extends AxiosResponse {
  success: boolean;
  isRequestError?: boolean;
  code: HttpStatus;
  message: string;
  error: string;
  data: T;
  errors?: IResponseError<any>[];
}

export interface ICommonListQuery {
  page?: number;
  limit?: number;
  orderBy?: string;
  orderDirection?: OrderDirection | string;
  keyword?: string;
  
}
export type ILoginResponse = {
  accessToken: string;
  accessTokenExpiration: number;
  refreshToken: string;
  refreshTokenExpiration:number;
  role:string;
  profile: IUser;
}
export type IBodyLogin = {
  email?: string;
  password?: string;
};
export type IBodyRegister = {
  email?: string;
  password?: string;
};
// export type IBodyLogin = {
//   // provider: LoginProvider;
//   email?: string;
//   password?: string;
//   code?: string;
//   redirectUri?: string;
// };
// export interface ILoginResponse {
//   accessToken: {
//     token: string;
//     expiresIn: number;
//   };
//   refreshToken: {
//     token: string;
//     expiresIn: number;
//   };
//   profile: IUser;
// }

export interface IGetListResponse<T> {
  items: T[];
  totalItems: number;
}

export interface IDropDownOption {
  value?: string | number;
  label?: string;
}

// For sidebar

export interface ISidebarItem {
  title: string;
  routeName?: PageName;
  activeRouteNames?: PageName[];
  icon?: string;
  subItems?: ISidebarItem[];
  active?: Ref<boolean>;
  role?: boolean;
  // hasRoles?: SystemRole[];
}

export interface ISidebarGroup {
  groupName?: string;
  items: ISidebarItem[];
  role?: boolean;
}

export interface IOption {
  value: string | number;
  title: string;
  disabled?: boolean;
  other?: any;
}

export interface ITime {
  hours: number;
  minutes: number;
  seconds?: number;
}

export type IOrderDirection = OrderDirection | undefined;

export interface IRoleDetail {
  id: string;
  name?: string;
}
export interface IUserProfile {
  id: string;
  code?: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  dob?: string;
  userRole?: Role;
  role?: IRoleDetail;
  type?: ProfileType;
  gender?: Gender;
  features?: string;
  isEmailVerified?: boolean;
  status: UserStatus;
  signedContractDate?: string;
}
export type IRole={
  roleId: String,
  rolename: String,
  roledescription: String,
}
export interface ITableSorter {
  field: string;
  direction?: IOrderDirection;
}
// Permissions
export interface IBasePermission {
  create?: boolean;
  delete?: boolean;
  update?: boolean;
  view?: boolean;
}

export interface IClassroomPermission extends IBasePermission {
  viewPersonal?: boolean;
  detailBasic?: boolean;
  detailStatistics?: boolean;
  viewTimeKeeping?: boolean;
  viewAttendance?: boolean;
  viewStudentClassroom?: boolean;
  viewGeneralClassroom?: boolean;
  viewSyllabus?: boolean;
  download?: boolean;
}

export interface ICoursePermission extends IBasePermission {
  viewPersonal?: boolean;
  detailBasic?: boolean;
  detailStatistics?: boolean;
  viewClassroomByCourse?: boolean;
  viewPersonalClassroomByCourse?: boolean;
  viewTeacherByCourse?: boolean;
  viewSubjectByCourse?: boolean;
}

export interface ILessonPermission extends IBasePermission {
  viewPersonal?: boolean;
  updateDocument?: boolean;
  detail?: boolean;
  downloadVideo?: boolean;
}

export interface IUserPermission {
  update?: boolean;
  view?: boolean;
  changePassword?: boolean;
}

export interface ISchedulePermission {
  view?: boolean;
  viewPersonal?: boolean;
  processLeaveRequest?: boolean;
  createRequestLeave?: boolean;
  deleteLeaveRequest?: boolean;
  updateLesson?: boolean;
  createLesson?: boolean;
  attendance?: boolean;
  updateTimeKeeping?: boolean;
  delete?: boolean;
}

export interface ITeacherPermission extends IBasePermission {
  viewClassroomByTeacher?: boolean;
}

export interface ITimekeepingPermission {
  viewPersonal?: boolean;
  view?: boolean;
  create?: boolean;
}

export interface IStudentPermission extends IBasePermission {
  viewClassroomByStudent?: boolean;
}

export interface ISyllabusPermission extends IBasePermission {
  viewPersonal?: boolean;
  download?: boolean;
}

export interface IUserRole {
  classroom?: IClassroomPermission;
  course?: ICoursePermission;
  lesson?: ILessonPermission;
  manager?: IBasePermission;
  schedule?: ISchedulePermission;
  student?: IStudentPermission;
  subject?: IBasePermission;
  teacher?: ITeacherPermission;
  timekeeping?: ITimekeepingPermission;
  user?: IUserPermission;
  role?: IBasePermission;
  syllabus?: ISyllabusPermission;
  courseFormSetting?: IBasePermission;
  evaluationClassifiedSetting?: IBasePermission;
  evaluationCriteriaSetting?: IBasePermission;
  settingTimekeeping?: IBasePermission;
}


