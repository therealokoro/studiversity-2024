interface Item<T> {
  id: string
  data: T
  isSelected: boolean
}

interface Options<T> {
  multiple?: boolean
  initial?: (item: T) => boolean
}

export const useSelectable = <T>(items: T[], options: Options<T> = {}) => {
  const { multiple = false, initial } = options

  const selectedIds = ref<string[]>(getInitialItems())

  function getInitialItems() {
    if (typeof initial === "function") {
      return items.reduce((acc, item, index) => {
        const id = `item-${index}`
        if (initial(item)) {
          acc.push(id)
        }
        return acc
      }, [] as string[])
    } else return []
  }

  const selectableItems: ComputedRef<Item<T>[]> = computed(() => {
    return items.map((item, index) => {
      const id = `item-${index}`
      const isSelected = selectedIds.value.includes(id)

      return {
        id,
        data: item,
        isSelected
      }
    })
  })

  const selectedItems: ComputedRef<T[]> = computed(() => {
    return selectableItems.value
      .filter((item) => item.isSelected)
      .map((item) => item.data)
  })

  const isSelected = (item: T) => {
    const index = selectableItems.value.findIndex(
      (selectableItem) => selectableItem.data === item
    )
    return index !== -1 && selectableItems.value[index].isSelected
  }

  function toggleSelection(id: string) {
    const index = selectableItems.value.findIndex((item) => item.id === id)

    if (index !== -1) {
      if (!multiple) {
        selectedIds.value = [id]
      } else {
        const isSelected = selectableItems.value[index].isSelected

        if (isSelected) {
          selectedIds.value = selectedIds.value.filter((item) => item !== id)
        } else {
          selectedIds.value = [...selectedIds.value, id]
        }
      }
    }
  }

  return {
    selected: selectedItems,
    items: selectableItems,
    select: toggleSelection,
    isSelected
  }
}
