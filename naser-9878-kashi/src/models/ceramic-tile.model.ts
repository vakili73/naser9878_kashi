import {Entity, model, property} from '@loopback/repository';

@model()
export class CeramicTile extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  img?: string;

  @property({
    type: 'string',
  })
  meterial?: string;

  @property({
    type: 'string',
  })
  glaze?: string;

  @property({
    type: 'string',
  })
  surface?: string;

  @property({
    type: 'string',
  })
  color?: string;

  @property({
    type: 'string',
  })
  slice?: string;

  @property({
    type: 'string',
  })
  company?: string;

  @property({
    type: 'string',
  })
  size?: string;

  @property({
    type: 'string',
  })
  descrip?: string;

  @property({
    type: 'string',
  })
  spectrum?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
  })
  grade?: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  tag?: string[];

  constructor(data?: Partial<CeramicTile>) {
    super(data);
  }
}
