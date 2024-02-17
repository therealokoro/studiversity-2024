import { Material, Note } from "~~/server/prisma/types"
import { IDepartment } from "./department"
import { ILecturer, IStudent } from "./account"
import { ICourse } from "./course"

export interface IMaterialNote extends Note {
  material: IMaterial
  student: IStudent
}

export interface IMaterial extends Material {
  department: IDepartment
  lecturer: ILecturer
  course: ICourse
  note: IMaterialNote | null
}
