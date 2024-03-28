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


import { DayOfTheWeek } from './day-of-the-week';

/**
 * A weekly 4 hour-long window, during which maintenance might occur. 
 * @export
 * @interface MaintenanceWindow
 */
export interface MaintenanceWindow {

    /**
     * Start of the maintenance window in UTC time.
     * @type {string}
     * @memberof MaintenanceWindow
     */
    time: string;

    /**
     * 
     * @type {DayOfTheWeek}
     * @memberof MaintenanceWindow
     */
    dayOfTheWeek: DayOfTheWeek;
}

