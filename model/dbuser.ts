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



/**
 * Credentials for the database user to be created.
 * @export
 * @interface DBUser
 */
export interface DBUser {

    /**
     * The username for the initial MariaDB user. Some system usernames are restricted (e.g. \"mariadb\", \"admin\", \"standby\").  The username should be compliant with the following rules: - Must not exceed 16 characters - Must start with a letter - Must contain only letters, numbers, or underscores 
     * @type {string}
     * @memberof DBUser
     */
    username: string;

    /**
     * The password for a MariaDB user.
     * @type {string}
     * @memberof DBUser
     */
    password: string;
}


