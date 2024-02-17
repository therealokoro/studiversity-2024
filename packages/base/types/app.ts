import { H3Error } from "h3"

export type PageState = {
  loading: boolean
  error: Error | H3Error | null
}