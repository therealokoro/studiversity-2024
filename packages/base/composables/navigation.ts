// @unocss-include
export type NavLink = {
  label: string
  link: string
  icon: { active: string; default: string }
  isActive: boolean
}

type UserRoleType = "SuperAdmin" | "Admin" | "Lecturer" | "Student"

export const useSidePanel = createSharedComposable(() => {
  const [isExpanded, toggleSidePanel] = useToggle(true)

  return {
    isExpanded: computed(() => isExpanded.value),
    toggleNavBar: toggleSidePanel
  }
})

export const useUserNavLinks = (role: UserRoleType) => {
  const SUPER_ADMIN = [
    {
      label: "Home",
      link: "/super",
      icon: {
        default: "i-mingcute-home-4-line",
        active: "i-mingcute-home-4-fill"
      },
      isActive: false
    },
    {
      label: "Institutes",
      link: "/super/institutes",
      icon: {
        default: ICONS.institute,
        active: "i-mingcute-building-3-fill"
      },
      isActive: false
    },
    {
      label: "Accounts",
      link: "/super/accounts",
      icon: {
        default: "i-mingcute-group-line",
        active: "i-mingcute-group-fill"
      },
      isActive: false
    },
    {
      label: "Uploads",
      link: "/super/uploads",
      icon: {
        default: "i-mingcute-upload-line",
        active: "i-mingcute-upload-fill"
      },
      isActive: false
    },
    {
      label: "Revenue",
      link: "/super/revenue",
      icon: {
        default: ICONS.wallet,
        active: "i-mingcute-wallet-3-fill"
      },
      isActive: false
    }
  ]

  const ADMIN = [
    {
      label: "Home",
      link: "/admin",
      icon: {
        default: "i-mingcute-home-4-line",
        active: "i-mingcute-home-4-fill"
      },
      isActive: false
    },
    {
      label: "Students",
      link: "/admin/students",
      icon: {
        default: "i-mingcute-group-3-line",
        active: "i-mingcute-group-3-fill"
      },
      isActive: false
    },
    {
      label: "Lecturers",
      link: "/admin/lecturers",
      icon: {
        default: "i-mingcute-group-line",
        active: "i-mingcute-group-fill"
      },
      isActive: false
    }
  ]

  const LECTURER = [
    {
      label: "Home",
      link: "/dashboard",
      icon: {
        default: "i-mingcute-home-4-line",
        active: "i-mingcute-home-4-fill"
      },
      isActive: false
    },
    {
      label: "Courses",
      link: "/dashboard/courses",
      icon: {
        default: ICONS.course,
        active: "i-mingcute-book-2-fill"
      },
      isActive: false
    },
    {
      label: "Uploads",
      link: "/dashboard/uploads",
      icon: {
        default: "i-mingcute-upload-line",
        active: "i-mingcute-upload-fill"
      },
      isActive: false
    },
    {
      label: "My Wallet",
      link: "/dashboard/wallet",
      icon: {
        default: ICONS.wallet,
        active: "i-mingcute-wallet-3-fill"
      },
      isActive: false
    }
  ]

  const STUDENT = [
    {
      label: "Home",
      link: "/dashboard",
      icon: {
        default: "i-mingcute-home-4-line",
        active: "i-mingcute-home-4-fill"
      },
      isActive: false
    },
    {
      label: "My Courses",
      link: "/dashboard/courses",
      icon: {
        default: ICONS.course,
        active: "i-mingcute-book-2-fill"
      },
      isActive: false
    },
    {
      label: "My Materials",
      link: "/dashboard/materials",
      icon: {
        default: ICONS.material,
        active: "i-mingcute-document-fill"
      },
      isActive: false
    },
    {
      label: "Past Q&A",
      link: "/dashboard/past-questions",
      icon: {
        default: ICONS.question,
        active: "i-mingcute-list-check-2-fill"
      },
      isActive: false
    }
  ]

  const map: Record<UserRoleType, { links: NavLink[]; root: string }> = {
    SuperAdmin: {
      links: SUPER_ADMIN,
      root: "/super"
    },
    Admin: {
      links: ADMIN,
      root: "/admin"
    },
    Student: {
      links: STUDENT,
      root: "/dashboard"
    },
    Lecturer: {
      links: LECTURER,
      root: "/dashboard"
    }
  }

  return useActivePageLink(map[role].links, map[role].root)
}
export const useActivePageLink = <T extends NavLink>(
  links: T[],
  homeRoute = "/"
) => {
  return computed(() => {
    const route = useRoute()

    return links.map((link) => {
      if (link.link === homeRoute && route.path !== homeRoute) {
        return { ...link, isActive: false }
      }

      const isActive = route.path.startsWith(link.link)
      return { ...link, isActive }
    })
  })
}
