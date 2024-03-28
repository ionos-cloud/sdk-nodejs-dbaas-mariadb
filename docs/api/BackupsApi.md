# BackupsApi

All URIs are relative to *https://mariadb.de-txl.ionos.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**backupsFindById**](BackupsApi.md#backupsfindbyid) | **GET** /backups/{backupId} | Fetch a cluster\&#39;s backups |
| [**backupsGet**](BackupsApi.md#backupsget) | **GET** /backups | List of cluster\&#39;s backups. |
| [**clusterBackupsGet**](BackupsApi.md#clusterbackupsget) | **GET** /clusters/{clusterId}/backups | List backups of cluster |


## backupsFindById

> <BackupResponse> backupsFindById(backupId)

Fetch a cluster\'s backups

Retrieve a MariaDB cluster\'s backups by using its ID. This value can be found when you GET the list of MariaDB cluster backups. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mariadb');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupsApi(config);
// Fetch a cluster\'s backups
api_instance
  .backupsFindById({
    backupId: 498ae72f-411f-11eb-9d07-046c59cc737e
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **backupId** | **string** | The unique ID of the backup. | [default to undefined] |

### Return type

[**BackupResponse**](../models/BackupResponse.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## backupsGet

> <BackupList> backupsGet(opts)

List of cluster\'s backups.

Retrieves all lists of backups for all MariaDB clusters in this contract. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mariadb');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupsApi(config);
// List of cluster\'s backups.
api_instance
  .backupsGet({
    limit: 100,
    offset: 200
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **limit** | **number** | The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination. | [optional][default to 100] |
| **offset** | **number** | The first element to return. Use together with \&#39;limit\&#39; for pagination. | [optional][default to 0] |

### Return type

[**BackupList**](../models/BackupList.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clusterBackupsGet

> <BackupList> clusterBackupsGet(clusterId, opts)

List backups of cluster

Retrieves a list of all backups of the given MariaDB cluster. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mariadb');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.BackupsApi(config);
// List backups of cluster
api_instance
  .clusterBackupsGet({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e,
    limit: 100,
    offset: 200, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |
| **limit** | **number** | The maximum number of elements to return. Use together with \&#39;offset\&#39; for pagination. | [optional][default to 100] |
| **offset** | **number** | The first element to return. Use together with \&#39;limit\&#39; for pagination. | [optional][default to 0] |

### Return type

[**BackupList**](../models/BackupList.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

