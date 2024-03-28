# ClusterProperties

Properties of a database cluster.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **displayName** | **string** | The friendly name of your cluster. | [optional] [default to undefined] |
| **mariadbVersion** | [**MariadbVersion**](MariadbVersion.md) |  | [optional] [default to undefined] |
| **dnsName** | **string** | The DNS name pointing to your cluster. | [optional] [default to undefined] |
| **instances** | **number** | The total number of instances in the cluster (one primary and n-1 secondary).  | [optional] [default to undefined] |
| **ram** | **number** | The amount of memory per instance in gigabytes (GB). | [optional] [default to undefined] |
| **cores** | **number** | The number of CPU cores per instance. | [optional] [default to undefined] |
| **storageSize** | **number** | The amount of storage per instance in gigabytes (GB). | [optional] [default to undefined] |
| **connections** | [**Array&lt;Connection&gt;**](Connection.md) |  | [optional] [default to undefined] |
| **maintenanceWindow** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] [default to undefined] |


