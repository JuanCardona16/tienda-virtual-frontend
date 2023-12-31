import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "../redux/types/index";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const userAppSelector: TypedUseSelectorHook<rootState> = useSelector;