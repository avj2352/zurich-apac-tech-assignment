import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { getDBURI } from '../util/config.util';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    const dbURI = getDBURI();
    console.log(`Connected to: ${dbURI}`);
    return {
      uri: `${dbURI}`,
      useNewUrlParser: true,
      useFindAndModify: false,
      autoIndex: true,      
      poolSize: 10,
      bufferMaxEntries: 0,
    };
  }
}
