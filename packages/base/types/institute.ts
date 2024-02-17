import { Institute } from "~~/server/prisma/types"
import { IFaculty } from "./faculty"
import { IAdmin, ILecturer, IStudent } from "./account"

export interface IInstitute extends Institute {
  faculties: IFaculty[]
  students: IStudent[]
  lecturers: ILecturer[]
  admins: IAdmin[]
}
