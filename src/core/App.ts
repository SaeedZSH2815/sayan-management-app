export class App {

  static varToStrDef(clAny: any, clDef: string): string {
    if (typeof clAny === "string")
      return clAny;
    else
      return clDef;       

  }
}
