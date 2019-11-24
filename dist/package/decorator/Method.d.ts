import { ActionType } from "../metadata/types/ActionType";
/**
 * Registers an action to be executed when request with specified method comes on a given route.
 * Must be applied on a controller action.
 */
export declare function Method(method: ActionType, route?: RegExp): Function;
/**
 * Registers an action to be executed when request with specified method comes on a given route.
 * Must be applied on a controller action.
 */
export declare function Method(method: ActionType, route?: string): Function;
