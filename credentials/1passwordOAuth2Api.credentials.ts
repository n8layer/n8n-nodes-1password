import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class OnePasswordOAuth2Api implements ICredentialType {
	name = '1passwordOAuth2Api';
	displayName = '1Password OAuth2 API';
	documentationUrl = 'https://developer.1password.com/docs/api/';
	extends = ['oAuth2Api'];
	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'clientCredentials',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'https://connect.api.1password.com/v1/auth/oauth2/token',
			description: '1Password Connect API OAuth2 token endpoint',
		},
		{
			displayName: 'API URL',
			name: 'ApiUrl',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'https://connect.api.1password.com',
			description: '1Password Connect API base URL',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'read_items write_items',
			description: 'The scope of access for the 1Password API',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'Your 1Password Connect application client ID',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Your 1Password Connect application client secret',
		},
	];
}
