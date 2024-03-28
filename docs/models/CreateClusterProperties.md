# CreateClusterProperties

Properties with all data needed to create a new MariaDB cluster. 
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **mariadbVersion** | [**MariadbVersion**](MariadbVersion.md) |  | [default to undefined] |
| **instances** | **number** | The total number of instances in the cluster (one primary and n-1 secondary).  | [default to undefined] |
| **cores** | **number** | The number of CPU cores per instance. | [default to undefined] |
| **ram** | **number** | The amount of memory per instance in gigabytes (GB). | [default to undefined] |
| **storageSize** | **number** | The amount of storage per instance in gigabytes (GB). | [default to undefined] |
| **connections** | [**Array&lt;Connection&gt;**](Connection.md) | The network connection for your cluster. Only one connection is allowed.  | [default to undefined] |
| **displayName** | **string** | The friendly name of your cluster. | [default to undefined] |
| **maintenanceWindow** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] [default to undefined] |
| **credentials** | [**DBUser**](DBUser.md) |  | [default to undefined] |


