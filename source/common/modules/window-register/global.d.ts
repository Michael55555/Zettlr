/**
 * @ignore
 * BEGIN HEADER
 *
 * Contains:        Global renderer types
 * CVM-Role:        Types
 * Maintainer:      Hendrik Erz
 * License:         GNU GPL v3
 *
 * Description:     This file contains interfaces used by the renderer. Due to
 *                  the way TypeScript works, these are also available in main
 *                  process files, but should be seen as invalid there.
 *
 * END HEADER
 */

interface CheckboxRadioItem {
  id: string
  label: string
  accelerator?: string
  type: 'checkbox'|'radio'
  enabled: boolean
  checked: boolean
}

interface SeparatorItem {
  type: 'separator'
}

interface SubmenuItem {
  id: string
  label: string
  type: 'submenu'
  enabled: boolean
  submenu: Array<CheckboxRadioItem|SeparatorItem|SubmenuItem|NormalItem>
}

interface NormalItem {
  id: string
  label: string
  accelerator?: string
  type: 'normal'
  enabled: boolean
}

type AnyMenuItem = CheckboxRadioItem | SeparatorItem | SubmenuItem | NormalItem

// Any menu item w/o separators
type InteractiveMenuItem = CheckboxRadioItem | SubmenuItem | NormalItem

interface Rect {
  top: number
  left: number
  width: number
  height: number
}

interface Point {
  x: number
  y: number
}

interface MenuProvider {
  show: (position: Rect|Point, items: AnyMenuItem[], callback: (clickedID: string) => void) => Function
}

declare module NodeJS {
  interface Global {
    config: any
    menuProvider: MenuProvider
  }
}
