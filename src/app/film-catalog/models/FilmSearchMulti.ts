import {Deserializable} from './deserializable';

export class FilmSearchMulti implements Deserializable {
  public results: [];

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
