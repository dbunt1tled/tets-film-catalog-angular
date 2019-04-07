import {Deserializable} from './deserializable';

export class Film implements Deserializable {
  public id?: number;
  public video: boolean;
  public vote_average: number;
  public title: string;
  public original_title: string;
  public popularity: number;
  public poster_path: string;
  public original_language: string;
  public backdrop_path: string;
  public adult: false;
  public overview: string;
  public release_date: string;
  public genre_ids: Array<number>;
  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
