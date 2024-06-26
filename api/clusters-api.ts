/* tslint:disable */
/* eslint-disable */
/**
 * IONOS DBaaS MariaDB REST API
 * An enterprise-grade Database is provided as a Service (DBaaS) solution that can be managed through a browser-based \"Data Center Designer\" (DCD) tool or via an easy to use API.  The API allows you to create additional MariaDB database clusters or modify existing ones. It is designed to allow users to leverage the same power and flexibility found within the DCD visual tool. Both tools are consistent with their concepts and lend well to making the experience smooth and intuitive. 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration, DEFAULT_MAX_RETRIES, DEFAULT_MAX_WAIT_TIME } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, backOff, runRequest } from '../base';
// @ts-ignore
import { ClusterList } from '../model';
// @ts-ignore
import { ClusterResponse } from '../model';
// @ts-ignore
import { CreateClusterRequest } from '../model';
// @ts-ignore
import { InlineResponse400 } from '../model';
// @ts-ignore
import { InlineResponse401 } from '../model';
// @ts-ignore
import { InlineResponse403 } from '../model';
// @ts-ignore
import { InlineResponse404 } from '../model';
// @ts-ignore
import { InlineResponse405 } from '../model';
// @ts-ignore
import { InlineResponse415 } from '../model';
// @ts-ignore
import { InlineResponse422 } from '../model';
// @ts-ignore
import { InlineResponse429 } from '../model';
// @ts-ignore
import { InlineResponse500 } from '../model';
// @ts-ignore
import { InlineResponse503 } from '../model';
/**
 * ClustersApi - axios parameter creator
 * @export
 */
export const ClustersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a MariaDB cluster.
         * @summary Delete a cluster
         * @param {string} clusterId The unique ID of the cluster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersDelete: async (clusterId: string, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling clustersDelete.');
            }
            const localVarPath = `/clusters/{clusterId}`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * You can retrieve a MariaDB cluster by using its ID. This value can be found in the response body when a MariaDB cluster is created or when you GET a list of MariaDB clusters. 
         * @summary Fetch a cluster
         * @param {string} clusterId The unique ID of the cluster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersFindById: async (clusterId: string, options: any = {}): Promise<RequestArgs> => {
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling clustersFindById.');
            }
            const localVarPath = `/clusters/{clusterId}`
                .replace(`{${"clusterId"}}`, encodeURIComponent(String(clusterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a list of MariaDB clusters.
         * @summary List clusters
         * @param {number} [limit] The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination.
         * @param {number} [offset] The first element to return. Use together with \&#39;limit\&#39; for pagination.
         * @param {string} [filterName] Response filter to list only the MariaDB clusters that contain the specified name. The value is case insensitive and matched on the \&#39;displayName\&#39; field. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersGet: async (limit?: number, offset?: number, filterName?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/clusters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }

            if ((limit === undefined) && (configuration !== undefined)) {
                limit = configuration.getDefaultParamValue('limit');
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if ((offset === undefined) && (configuration !== undefined)) {
                offset = configuration.getDefaultParamValue('offset');
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if ((filterName === undefined) && (configuration !== undefined)) {
                filterName = configuration.getDefaultParamValue('filterName');
            }
            if (filterName !== undefined) {
                localVarQueryParameter['filter.name'] = filterName;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new MariaDB cluster. 
         * @summary Create a cluster
         * @param {CreateClusterRequest} createClusterRequest The cluster to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersPost: async (createClusterRequest: CreateClusterRequest, options: any = {}): Promise<RequestArgs> => {
            if (createClusterRequest === null || createClusterRequest === undefined) {
                throw new RequiredError('createClusterRequest','Required parameter createClusterRequest was null or undefined when calling clustersPost.');
            }
            const localVarPath = `/clusters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const nonString = typeof createClusterRequest !== 'string';
            const needsSerialization = nonString && configuration && configuration.isJsonMime
                ? configuration.isJsonMime(localVarRequestOptions.headers['Content-Type'])
                : nonString;
            localVarRequestOptions.data =  needsSerialization
                ? JSON.stringify(createClusterRequest !== undefined ? createClusterRequest : {})
                : (createClusterRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ClustersApi - functional programming interface
 * @export
 */
export const ClustersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete a MariaDB cluster.
         * @summary Delete a cluster
         * @param {string} clusterId The unique ID of the cluster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clustersDelete(clusterId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClusterResponse>> {
            const axiosArgs = await ClustersApiAxiosParamCreator(configuration).clustersDelete(clusterId, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * You can retrieve a MariaDB cluster by using its ID. This value can be found in the response body when a MariaDB cluster is created or when you GET a list of MariaDB clusters. 
         * @summary Fetch a cluster
         * @param {string} clusterId The unique ID of the cluster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clustersFindById(clusterId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClusterResponse>> {
            const axiosArgs = await ClustersApiAxiosParamCreator(configuration).clustersFindById(clusterId, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Retrieves a list of MariaDB clusters.
         * @summary List clusters
         * @param {number} [limit] The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination.
         * @param {number} [offset] The first element to return. Use together with \&#39;limit\&#39; for pagination.
         * @param {string} [filterName] Response filter to list only the MariaDB clusters that contain the specified name. The value is case insensitive and matched on the \&#39;displayName\&#39; field. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clustersGet(limit?: number, offset?: number, filterName?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClusterList>> {
            const axiosArgs = await ClustersApiAxiosParamCreator(configuration).clustersGet(limit, offset, filterName, options);
            return runRequest(axiosArgs, configuration);
        },
        /**
         * Creates a new MariaDB cluster. 
         * @summary Create a cluster
         * @param {CreateClusterRequest} createClusterRequest The cluster to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async clustersPost(createClusterRequest: CreateClusterRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ClusterResponse>> {
            const axiosArgs = await ClustersApiAxiosParamCreator(configuration).clustersPost(createClusterRequest, options);
            return runRequest(axiosArgs, configuration);
        },
    }
};

/**
 * ClustersApi - factory interface
 * @export
 */
export const ClustersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete a MariaDB cluster.
         * @summary Delete a cluster
         * @param {string} clusterId The unique ID of the cluster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersDelete(clusterId: string, options?: any): AxiosPromise<ClusterResponse> {
            return ClustersApiFp(configuration).clustersDelete(clusterId, options).then((request) => request(axios, basePath));
        },
        /**
         * You can retrieve a MariaDB cluster by using its ID. This value can be found in the response body when a MariaDB cluster is created or when you GET a list of MariaDB clusters. 
         * @summary Fetch a cluster
         * @param {string} clusterId The unique ID of the cluster.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersFindById(clusterId: string, options?: any): AxiosPromise<ClusterResponse> {
            return ClustersApiFp(configuration).clustersFindById(clusterId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of MariaDB clusters.
         * @summary List clusters
         * @param {number} [limit] The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination.
         * @param {number} [offset] The first element to return. Use together with \&#39;limit\&#39; for pagination.
         * @param {string} [filterName] Response filter to list only the MariaDB clusters that contain the specified name. The value is case insensitive and matched on the \&#39;displayName\&#39; field. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersGet(limit?: number, offset?: number, filterName?: string, options?: any): AxiosPromise<ClusterList> {
            return ClustersApiFp(configuration).clustersGet(limit, offset, filterName, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new MariaDB cluster. 
         * @summary Create a cluster
         * @param {CreateClusterRequest} createClusterRequest The cluster to be created.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        clustersPost(createClusterRequest: CreateClusterRequest, options?: any): AxiosPromise<ClusterResponse> {
            return ClustersApiFp(configuration).clustersPost(createClusterRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for clustersDelete operation in ClustersApi.
 * @export
 * @interface ClustersApiClustersDeleteRequest
 */
export interface ClustersApiClustersDeleteRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof ClustersApiClustersDelete
     */
    readonly clusterId: string
}

/**
 * Request parameters for clustersFindById operation in ClustersApi.
 * @export
 * @interface ClustersApiClustersFindByIdRequest
 */
export interface ClustersApiClustersFindByIdRequest {
    /**
     * The unique ID of the cluster.
     * @type {string}
     * @memberof ClustersApiClustersFindById
     */
    readonly clusterId: string
}

/**
 * Request parameters for clustersGet operation in ClustersApi.
 * @export
 * @interface ClustersApiClustersGetRequest
 */
export interface ClustersApiClustersGetRequest {
    /**
     * The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination.
     * @type {number}
     * @memberof ClustersApiClustersGet
     */
    readonly limit?: number

    /**
     * The first element to return. Use together with \&#39;limit\&#39; for pagination.
     * @type {number}
     * @memberof ClustersApiClustersGet
     */
    readonly offset?: number

    /**
     * Response filter to list only the MariaDB clusters that contain the specified name. The value is case insensitive and matched on the \&#39;displayName\&#39; field. 
     * @type {string}
     * @memberof ClustersApiClustersGet
     */
    readonly filterName?: string
}

/**
 * Request parameters for clustersPost operation in ClustersApi.
 * @export
 * @interface ClustersApiClustersPostRequest
 */
export interface ClustersApiClustersPostRequest {
    /**
     * The cluster to be created.
     * @type {CreateClusterRequest}
     * @memberof ClustersApiClustersPost
     */
    readonly createClusterRequest: CreateClusterRequest
}

/**
 * ClustersApi - object-oriented interface
 * @export
 * @class ClustersApi
 * @extends {BaseAPI}
 */
export class ClustersApi extends BaseAPI {
    /**
     * Delete a MariaDB cluster.
     * @summary Delete a cluster
     * @param {ClustersApiClustersDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClustersApi
     */
    public clustersDelete(requestParameters: ClustersApiClustersDeleteRequest, options?: any) {
        return ClustersApiFp(this.configuration).clustersDelete(requestParameters.clusterId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * You can retrieve a MariaDB cluster by using its ID. This value can be found in the response body when a MariaDB cluster is created or when you GET a list of MariaDB clusters. 
     * @summary Fetch a cluster
     * @param {ClustersApiClustersFindByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClustersApi
     */
    public clustersFindById(requestParameters: ClustersApiClustersFindByIdRequest, options?: any) {
        return ClustersApiFp(this.configuration).clustersFindById(requestParameters.clusterId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a list of MariaDB clusters.
     * @summary List clusters
     * @param {ClustersApiClustersGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClustersApi
     */
    public clustersGet(requestParameters: ClustersApiClustersGetRequest = {}, options?: any) {
        return ClustersApiFp(this.configuration).clustersGet(requestParameters.limit, requestParameters.offset, requestParameters.filterName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new MariaDB cluster. 
     * @summary Create a cluster
     * @param {ClustersApiClustersPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClustersApi
     */
    public clustersPost(requestParameters: ClustersApiClustersPostRequest, options?: any) {
        return ClustersApiFp(this.configuration).clustersPost(requestParameters.createClusterRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
