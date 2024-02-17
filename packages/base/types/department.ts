import { Department } from "~~/server/prisma/types"
import { IFaculty } from "./faculty"
import { IAdmin, ILecturer } from "./account"

export interface IDepartment extends Department {
  faculty: IFaculty
  admins: IAdmin[]
  lecturers: ILecturer[]
}
