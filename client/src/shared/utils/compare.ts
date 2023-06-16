import IRawMaterial from "../models/RawMaterial.model";

export function compare( a: IRawMaterial, b: IRawMaterial ) {
    if ( a.timeStamp > b.timeStamp ){
      return -1;
    }
    if ( a.timeStamp < b.timeStamp ){
      return 1;
    }
    return 0;
  }
  