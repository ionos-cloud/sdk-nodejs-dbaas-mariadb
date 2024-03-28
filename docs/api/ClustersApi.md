# ClustersApi

All URIs are relative to *https://mariadb.de-txl.ionos.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clustersDelete**](ClustersApi.md#clustersdelete) | **DELETE** /clusters/{clusterId} | Delete a cluster |
| [**clustersFindById**](ClustersApi.md#clustersfindbyid) | **GET** /clusters/{clusterId} | Fetch a cluster |
| [**clustersGet**](ClustersApi.md#clustersget) | **GET** /clusters | List clusters |
| [**clustersPost**](ClustersApi.md#clusterspost) | **POST** /clusters | Create a cluster |


## clustersDelete

> <ClusterResponse> clustersDelete(clusterId)

Delete a cluster

Delete a MariaDB cluster.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mariadb');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Delete a cluster
api_instance
  .clustersDelete({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersFindById

> <ClusterResponse> clustersFindById(clusterId)

Fetch a cluster

You can retrieve a MariaDB cluster by using its ID. This value can be found in the response body when a MariaDB cluster is created or when you GET a list of MariaDB clusters. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mariadb');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Fetch a cluster
api_instance
  .clustersFindById({
    clusterId: 498ae72f-411f-11eb-9d07-046c59cc737e
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **clusterId** | **string** | The unique ID of the cluster. | [default to undefined] |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersGet

> <ClusterList> clustersGet(opts)

List clusters

Retrieves a list of MariaDB clusters.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mariadb');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// List clusters
api_instance
  .clustersGet({
    limit: 100,
    offset: 200,
    filterName: filterName_example
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
| **filterName** | **string** | Response filter to list only the MariaDB clusters that contain the specified name. The value is case insensitive and matched on the \&#39;displayName\&#39; field.  | [optional][default to undefined] |

### Return type

[**ClusterList**](../models/ClusterList.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clustersPost

> <ClusterResponse> clustersPost(createClusterRequest)

Create a cluster

Creates a new MariaDB cluster. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-dbaas-mariadb');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ClustersApi(config);
// Create a cluster
api_instance
  .clustersPost({
    createClusterRequest: createClusterRequest_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **createClusterRequest** | [**CreateClusterRequest**](../models/CreateClusterRequest.md) | The cluster to be created. |  |

### Return type

[**ClusterResponse**](../models/ClusterResponse.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

