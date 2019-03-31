import {Deserializable} from './deserializable';

export class Film implements Deserializable {
  public id?: number;
  public name: string;
  public year: string;
  public imgUrl: string;
  public description: string;
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
