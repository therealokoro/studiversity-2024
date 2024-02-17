import {
  Lecturer,
  Admin,
  SuperAdmin,
  Student,
  Account,
  UserRoleType
} from "~~/server/prisma/types"
import { ICourse } from "./course"
import { IDepartment } from "./department"
import { IMaterial } from "./material"
import { IInstitute } from "./institute"

export type IAccount = Account

export type ILecturer = Lecturer & {
  role: "Lecturer"
  department: IDepartment
  _count: {
    courses: number
  }
}

export type IAdmin = Admin & {
  role: "Admin"
  department: IDepartment
}

export type IStudent = Student & {
  role: "Student"
  department: IDepartment
  courses: ICourse[]
  materials: IMaterial[]
  institute: IInstitute
}

export type ISuperAdmin = SuperAdmin & {
  role: "SuperAdmin"
}

export type IAccountProfile = { role: UserRoleType } & (
  | ISuperAdmin
  | IAdmin
  | ILecturer
  | IStudent
)
