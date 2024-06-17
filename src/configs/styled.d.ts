import "styled-components/native"; // Import native for correct types
import { ICustomColors } from "../global/colors/types";

declare module "styled-components/native" {
  // Declare the native module
  export interface DefaultTheme extends ICustomColors {}
}
