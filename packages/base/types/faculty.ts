import { Faculty } from "~~/server/prisma/types"
import { IInstitute } from "./institute"
import { IDepartment } from "./department"

export interface IFaculty extends Faculty {
  institute: IInstitute
  departments: IDepartment[]
  _count: { departments: number }
}
