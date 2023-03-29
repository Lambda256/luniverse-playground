import { AxiosError, AxiosResponse } from "axios";

export {}

declare global {
  /* Type of AuthTokenForm */
	namespace AuthTokenFormComponent {
		interface InputLabel {
			required?: boolean;
		}

		interface Input {
			textTransform?: string;
		}

		interface TabBtn {
			active?: boolean;
		}
	}

  /* Type of Error */
  namespace ErrorComponent {
		interface Props {
			error: AxiosError<AxiosData> | Error;
			onClick?: Function;
		}

		interface AxiosData {
			code: string;
			message: string;
			result: boolean;
		}
	}
  
  /* Type of InputForm */
  namespace InputFormComponent {
    interface InputForm {
      title?: string;
      mode?: string;
    }
  
    interface InputLabel {
      required?: boolean;
    }
  
    interface Input {
      textTransform?: string;
    }
  }
  
  /* Type of ItemInfo */
  namespace ItemInfoComponent {
    interface Props {
      itemData: ItemData;
    }
  
    interface Span {
      textTransform?: string;
    }
  
  }
}