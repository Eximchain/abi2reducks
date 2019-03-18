// TEMPLATE CLASS MODULE DECLARATION FILE
// Source: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-class-d-ts.html

// Type definitions for @eximchain/abi2reducks

/*~ Note that ES6 modules cannot directly export class objects.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = ReducksGenerator;

import { MethodAbi } from 'ethereum-types';

/*~ Write your module's methods and properties in this class */
declare class ReducksGenerator {
    constructor(args:ReducksGenerator.ReducksInput);
    generate(): void
}

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
declare namespace ReducksGenerator {
    export type ReducksInput = {
        name: string,
        abi: MethodAbi[]
    }
}