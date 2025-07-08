import type { IAuthenticateGeneric, ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

// eslint-disable-next-line n8n-nodes-base/cred-class-name-unsuffixed
export class OnePasswordApi implements ICredentialType {
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-name-unsuffixed
	name = 'onePasswordApi';

	displayName = '1Password Bearer Auth API';

	documentationUrl = 'https://developer.1password.com/docs/connect/api-reference/';

	genericAuth = true;

	icon = 'file:1password.svg' as Icon;

	properties: INodeProperties[] = [
		{
			displayName: 'Bearer Token',
			name: 'token',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Base URL',
			name: 'baseURL',
			type: 'string',
			placeholder: 'http://localhost:8080',
			default: 'http://localhost:8080',
			required: true,
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{\"Bearer \" + $credentials.token}}',
			},
		},
	};
}
