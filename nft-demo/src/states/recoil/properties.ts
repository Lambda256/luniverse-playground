import {atom} from "recoil"
import { KEYS } from "../keys"

// client state
export const PropertiesState = atom({
  key: KEYS.PROPERTIES,
  default: [] as Property[]
})