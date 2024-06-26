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


import { Connection } from './connection';
import { DBUser } from './dbuser';
import { MaintenanceWindow } from './maintenance-window';
import { MariadbVersion } from './mariadb-version';

/**
 * Properties with all data needed to create a new MariaDB cluster. 
 * @export
 * @interface CreateClusterProperties
 */
export interface CreateClusterProperties {

    /**
     * 
     * @type {MariadbVersion}
     * @memberof CreateClusterProperties
     */
    mariadbVersion: MariadbVersion;

    /**
     * The total number of instances in the cluster (one primary and n-1 secondary). 
     * @type {number}
     * @memberof CreateClusterProperties
     */
    instances: number;

    /**
     * The number of CPU cores per instance.
     * @type {number}
     * @memberof CreateClusterProperties
     */
    cores: number;

    /**
     * The amount of memory per instance in gigabytes (GB).
     * @type {number}
     * @memberof CreateClusterProperties
     */
    ram: number;

    /**
     * The amount of storage per instance in gigabytes (GB).
     * @type {number}
     * @memberof CreateClusterProperties
     */
    storageSize: number;

    /**
     * The network connection for your cluster. Only one connection is allowed. 
     * @type {Array<Connection>}
     * @memberof CreateClusterProperties
     */
    connections: Array<Connection>;

    /**
     * The friendly name of your cluster.
     * @type {string}
     * @memberof CreateClusterProperties
     */
    displayName: string;

    /**
     * 
     * @type {MaintenanceWindow}
     * @memberof CreateClusterProperties
     */
    maintenanceWindow?: MaintenanceWindow;

    /**
     * 
     * @type {DBUser}
     * @memberof CreateClusterProperties
     */
    credentials: DBUser;
}


