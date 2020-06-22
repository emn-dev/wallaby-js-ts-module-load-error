import { Emitter } from '~/svg/mixins/Emitter';

export interface BaseItem extends paper.Item, Emitter {
  type: String,
}
