import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {CeramicTile} from '../models';
import {CeramicTileRepository} from '../repositories';

export class CeramicTileController {
  constructor(
    @repository(CeramicTileRepository)
    public ceramicTileRepository: CeramicTileRepository,
  ) {}

  @post('/ceramic-tiles', {
    responses: {
      '200': {
        description: 'CeramicTile model instance',
        content: {'application/json': {schema: {'x-ts-type': CeramicTile}}},
      },
    },
  })
  async create(@requestBody() ceramicTile: CeramicTile): Promise<CeramicTile> {
    return await this.ceramicTileRepository.create(ceramicTile);
  }

  @get('/ceramic-tiles/count', {
    responses: {
      '200': {
        description: 'CeramicTile model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CeramicTile)) where?: Where,
  ): Promise<Count> {
    return await this.ceramicTileRepository.count(where);
  }

  @get('/ceramic-tiles', {
    responses: {
      '200': {
        description: 'Array of CeramicTile model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': CeramicTile}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CeramicTile))
    filter?: Filter,
  ): Promise<CeramicTile[]> {
    return await this.ceramicTileRepository.find(filter);
  }

  @patch('/ceramic-tiles', {
    responses: {
      '200': {
        description: 'CeramicTile PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() ceramicTile: CeramicTile,
    @param.query.object('where', getWhereSchemaFor(CeramicTile)) where?: Where,
  ): Promise<Count> {
    return await this.ceramicTileRepository.updateAll(ceramicTile, where);
  }

  @get('/ceramic-tiles/{id}', {
    responses: {
      '200': {
        description: 'CeramicTile model instance',
        content: {'application/json': {schema: {'x-ts-type': CeramicTile}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<CeramicTile> {
    return await this.ceramicTileRepository.findById(id);
  }

  @patch('/ceramic-tiles/{id}', {
    responses: {
      '204': {
        description: 'CeramicTile PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() ceramicTile: CeramicTile,
  ): Promise<void> {
    await this.ceramicTileRepository.updateById(id, ceramicTile);
  }

  @del('/ceramic-tiles/{id}', {
    responses: {
      '204': {
        description: 'CeramicTile DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ceramicTileRepository.deleteById(id);
  }
}
