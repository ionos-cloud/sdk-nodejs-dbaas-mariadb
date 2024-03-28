# Pagination

Pagination information in list responses.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **offset** | **number** | The offset specified in the request (if none was specified, the default offset is 0).  | [optional] [default to 0] |
| **limit** | **number** | The limit specified in the request (if none was specified, the default limit is 100).  | [optional] [default to 100] |
| **total** | **number** | The total number of elements matching the request (without pagination).  | [optional] [default to 0] |
| **_links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] [default to undefined] |


