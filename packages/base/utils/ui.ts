// @unocss-include
export type ColorTypes = "red" | "green" | "blue" | "yellow" | "violet" | "teal"
type StatsCardType =
  | "wallet"
  | "materials"
  | "courses"
  | "collections"
  | "questions"
  | "notes"
  | "staffs"
  | "students"
  | "institutes"
  // | "custom"

type SingleStatsCard = {
  label: string
  icon: string
  color: {
    bg: string
    border: string
  }
}

export type StatCardInfo = { id: StatsCardType; value: number; label?: string }

export const getColorClasses = (color: ColorTypes) => {
  const colors: Record<ColorTypes, string> = {
    red: "bg-red-200 text-red-800",
    green: "bg-green-200 text-green-800",
    blue: "bg-blue-200 text-blue-800",
    yellow: "bg-yellow-200 text-yellow-800",
    violet: "bg-violet-200 text-violet-800",
    teal: "bg-teal-200 text-teal-800"
  }

  return color ? colors[color] : colors
}

export const getStatCardSettings = (id: StatsCardType) => {
  const CARDS_SETTINGS: Record<StatsCardType, SingleStatsCard> = {
    wallet: {
      label: "Wallet Balance",
      icon: "i-twemoji-money-bag",
      color: {
        bg: "transition bg-red-500/10 hover:bg-red-500/20",
        border: "border-1.7 border-red-5/10"
      }
    },
    materials: {
      label: "My Materials",
      icon: "i-twemoji-open-book",
      color: {
        bg: "transition bg-red-500/10 hover:bg-red-500/20",
        border: "border-1.7 border-red-5/10"
      }
    },
    courses: {
      label: "Courses",
      icon: "i-twemoji-books",
      color: {
        bg: "transition bg-blue-500/10 hover:bg-blue-500/20",
        border: "border-1.7 border-blue-5/10"
      }
    },
    collections: {
      label: "My Collections",
      icon: "i-fluent-emoji-flat-open-file-folder",
      color: {
        bg: "transition bg-green-500/10 hover:bg-green-500/20",
        border: "border-1.7 border-green-5/10"
      }
    },
    questions: {
      label: "Past Questions",
      icon: "i-fluent-emoji-flat-exclamation-question-mark",
      color: {
        bg: "transition bg-orange-500/10 hover:bg-orange-500/20",
        border: "border-1.7 border-orange-5/10"
      }
    },
    notes: {
      label: "My Notes",
      icon: "i-fluent-emoji-flat-spiral-notepad",
      color: {
        bg: "transition bg-yellow-500/10 hover:bg-yellow-500/20",
        border: "border-1.7 border-yellow-5/10"
      }
    },
    staffs: {
      label: "Staffs",
      icon: "i-twemoji-man-teacher-dark-skin-tone",
      color: {
        bg: "transition bg-violet-500/10 hover:bg-violet-500/20",
        border: "border-1.7 border-violet-5/10"
      }
    },
    students: {
      label: "Students",
      icon: "i-twemoji-man-student-dark-skin-tone",
      color: {
        bg: "transition bg-teal-500/10 hover:bg-teal-500/20",
        border: "border-1.7 border-teal-5/10"
      }
    },
    institutes: {
      label: "Institutes",
      icon: "i-twemoji-school",
      color: {
        bg: "transition bg-emerald-500/10 hover:bg-emerald-500/20",
        border: "border-1.7 border-emerald-5/10"
      }
    }
  }

  return CARDS_SETTINGS[id]
}

export const ICONS = {
  accountActive: "i-mingcute-user-follow-2-line",
  wallet: "i-mingcute-wallet-3-line",
  course: "i-mingcute-book-2-line",
  material: "i-mingcute-document-line",
  question: "i-mingcute-list-check-2-line",
  institute: "i-mingcute-building-2-line",
  faculty: "i-mingcute-building-3-line",
  department: "i-mingcute-building-1-line",
  fullname: "i-mingcute-profile-line",
  username: "i-mingcute-at-line",
  email: "i-mingcute-mail-line",
  profile: "i-mingcute-user-1-line",
  level: "i-tabler-123",
  admissionNo: "i-mingcute-idcard-line",
  phoneNumber: "i-tabler-phone"
}
