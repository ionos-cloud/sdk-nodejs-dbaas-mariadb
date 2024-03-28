# DBUser

Credentials for the database user to be created.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **username** | **string** | The username for the initial MariaDB user. Some system usernames are restricted (e.g. \"mariadb\", \"admin\", \"standby\").  The username should be compliant with the following rules: - Must not exceed 16 characters - Must start with a letter - Must contain only letters, numbers, or underscores  | [default to undefined] |
| **password** | **string** | The password for a MariaDB user. | [default to undefined] |


