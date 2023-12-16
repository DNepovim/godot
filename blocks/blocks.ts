import { Styles } from "../styles/theme";

export interface Block {
  id: string;
  anchor: string;
  order: number;
  palette?: Styles;
  isHidden?: boolean;
}
