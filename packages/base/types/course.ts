import { Course } from "~~/server/prisma/types"
import { IDepartment } from "./department"
import { ILecturer } from "./account"
import { IMaterial } from "./material"

export interface ICourse extends Course {
  department: IDepartment
  lecturer: ILecturer
  materials: IMaterial[]
}
