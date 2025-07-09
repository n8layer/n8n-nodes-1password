# n8n-nodes-1password

This is an n8n community node that lets you use 1Password in your n8n workflows using the 1Password Connect API.

1Password is a password manager that allows you to store, organize, and manage your passwords, secrets, and other sensitive information securely across all your devices.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node supports the following operations:

### Items
- **Add an Item** - Create a new item in a vault
- **Delete an Item** - Remove an item from a vault
- **Get Item Details** - Retrieve detailed information about a specific item
- **List Items** - Get all items from a vault with optional filtering


### Vaults
- **Get Vaults** - List all available vaults
- **Get Vault Details** - Retrieve detailed information about a specific vault

### Files
- **Get File Content** - Download the content of a file attached to an item
- **Get File Details** - Retrieve metadata about a file
- **List Files** - Get all files attached to an item

## Credentials

This node requires authentication with a 1Password Connect server. You'll need:

### Prerequisites
1. A 1Password Connect server instance running
2. A valid bearer token for authentication

### Setting up credentials
1. In n8n, go to **Settings** → **Credentials**
2. Click **Add Credential** and select **1Password Bearer Auth API**
3. Fill in the required fields:
   - **Bearer Token**: Your 1Password Connect API token
   - **Base URL**: The URL of your 1Password Connect server (e.g., `http://localhost:8080`)

### Getting a Bearer Token
1. Set up a 1Password Connect server following the [official documentation](https://developer.1password.com/docs/connect/)
2. Generate a Connect token in your 1Password account
3. Use this token in the n8n credentials

## Compatibility

- **Minimum n8n version**: Compatible with n8n workflow automation platform
- **Node.js version**: Requires Node.js >= 20.15
- **API Version**: Uses 1Password Connect API v1
- **License**: AGPL-3.0

This node has been tested with the latest versions of n8n and 1Password Connect API.

## Usage

### Basic Example: Get All Items from a Vault

1. Add the 1Password node to your workflow
2. Select **Item** as the resource
3. Choose **List Items** as the operation
4. Provide the **Vault UUID**
5. Optionally add a filter to search by title or tag

### Advanced Example: Create a New Login Item

1. Set **Resource** to **Item**
2. Set **Operation** to **Add an Item**
3. Configure the following:
   - **Vault UUID**: The target vault ID
   - **Title**: Name for the item
   - **Category**: Select "Login" or another appropriate category
   - **Fields**: Add username, password, and other relevant fields
   - **URLs**: Add associated website URLs
   - **Tags**: Organize with comma-separated tags

### Working with Files

To retrieve files attached to items:
1. Set **Resource** to **File**
2. Choose **List Files** to see all files in an item
3. Use **Get File Content** to download specific files
4. Provide the **Vault UUID**, **Item UUID**, and **File UUID**

### Error Handling

The node includes proper error handling for common scenarios:
- Invalid vault or item UUIDs
- Authentication failures
- Network connectivity issues
- API rate limiting

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [1Password Connect API documentation](https://developer.1password.com/docs/connect/api-reference/)
* [1Password Connect server setup guide](https://developer.1password.com/docs/connect/)
* [Repository](https://github.com/n8layer/n8n-nodes-1password.git)
* [Homepage](https://www.n8layer.io)

For support, contact: support@n8layer.io


