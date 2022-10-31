export enum PROVIDER {
    GOOGLE = 'google',
    FACEBOOK = 'facebook'
};

export enum USER_ROLE {
    ADMIN = 'admin',
    FREE = 'free',
    PREMIUM = 'premium'
};

export enum USER_SUBSCRIPTION_TYPE {
    NONE = 'none',
    ONE_TIME = 'one-time',
    ANNUAL = 'annual',
    MONTHLY = 'monthly'
};


export enum COMMON_ERROR {
    USER_NOT_FOUND = `User Details not found`,
    NOT_AUTHORIZED = `Invalid user / user not authorized`,
    JSON_PARSE_ERROR = `Record Not Found / Unable to parse JSON payload`,
    ADD_RECORD = `Error Adding New Record`,
    RECORD_NOT_FOUND = `Record not found`,
    INVALID_QUERY = `Invalid query parameters`,
    INVALID_SEARCH_TYPE = `Invalid search type`,
    INVALID_SEARCH_QUERY = `Invalid search query parameters`,
};

export enum PAGE_ERROR {
    INVALID_PAGE_ID = `Invalid PAGE ID`,
    PAGE_RECORD_NOT_FOUND = `PAGE records unavailable`        
};