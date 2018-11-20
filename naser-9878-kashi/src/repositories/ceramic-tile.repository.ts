import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {CeramicTile} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CeramicTileRepository extends DefaultCrudRepository<
  CeramicTile,
  typeof CeramicTile.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CeramicTile, dataSource);
  }
}
