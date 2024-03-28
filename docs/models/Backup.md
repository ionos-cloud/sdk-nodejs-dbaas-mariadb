# Backup

A backup object.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **clusterId** | **string** | The unique ID of the cluster that was backed up. | [optional] [default to undefined] |
| **earliestRecoveryTargetTime** | **string** | The oldest available timestamp to which you can restore. | [optional] [default to undefined] |
| **size** | **number** | Size of all base backups in MiB. This is at least the sum of all base backup sizes.  | [optional] [default to undefined] |
| **baseBackups** | [**Array&lt;BaseBackup&gt;**](BaseBackup.md) |  | [optional] [default to undefined] |


