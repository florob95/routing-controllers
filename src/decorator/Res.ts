import {defaultMetadataArgsStorage} from "../index";
import {ParamMetadataArgs} from "../metadata/args/ParamMetadataArgs";

/**
 * Injects a Response object to the controller action parameter.
 * Must be applied on a controller action parameters.
 */
export function Res(): Function {
    return function (object: Object, methodName: string, index: number) {
        const metadata: ParamMetadataArgs = {
            target: object.constructor,
            method: methodName,
            index: index,
            type: "response",
            parse: false,
            required: false
        };
        defaultMetadataArgsStorage().params.push(metadata);
    };
}
