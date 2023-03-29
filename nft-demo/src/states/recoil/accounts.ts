import {atom} from "recoil"
import Config from "../../utils/config"
import { KEYS } from "../keys"

// user's wallet accounts
export const AccountsState = atom({
  key: KEYS.ACCOUNT_ADDRESS,
  default: [Config.ACCOUNT_ADDRESS]
})