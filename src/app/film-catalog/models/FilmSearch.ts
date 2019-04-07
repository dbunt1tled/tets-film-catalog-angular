import {Deserializable} from './deserializable';

export class FilmSearch implements Deserializable {
  public page: number;
  public results: [];
  public total_pages: number;
  public total_results: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
