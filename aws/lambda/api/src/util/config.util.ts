import * as config from 'config';

export type IGoogleConfig = {
  client_id: string,
  client_secret: string,
  redirect_uri: string,
  client_url: string,
};


const db: { uri: string } = config.get('db');
const server: { port: string, name: string, version: string } = config.get('server');
const oauth: {google: IGoogleConfig} = config.get('oauth');
const reqresApi: {api: string} = config.get('reqres');

// serverName
export const getServerName = (): string =>
  process?.env?.serverName ? process.env.serverName : server.name;


// serverVersion
export const getServerVersion = (): string =>
  process?.env?.serverVersion ? process.env.serverVersion : server.version;


// db
export const getDBURI = (): string =>
  process?.env?.db ? process.env.db : db.uri;

// PORT
export const getServerPORT = (): string => 
  process?.env?.PORT ? process.env.PORT : server.port;

// gClientId
export const getGoogleClientId = (): string =>
  process?.env?.gClientId ? process.env.gClientId : oauth.google.client_id;

// gClientSecret
export const getGoogleClientSecret = (): string =>
  process?.env?.gClientSecret ? process.env.gClientSecret : oauth.google.client_secret;

// gRedirectURI
export const getGoogleRedirectURI = (): string =>
  process?.env?.gRedirectURI ? process.env.gRedirectURI : oauth.google.redirect_uri;

// gClientURL
export const getGoogleClientURL = (): string =>
  process?.env?.gClientURL ? process.env.gClientURL : oauth.google.client_url;

// reqresAPI
export const getRequestResponseURL = (): string =>
  process?.env?.reqresAPI ? process.env.reqresAPI : reqresApi.api;