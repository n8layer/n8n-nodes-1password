import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import { itemOperations, itemFields } from './descriptions/ItemDescription';
import { vaultOperations, vaultFields } from './descriptions/VaultDescription';
import { fileOperations, fileFields } from './descriptions/FileDescription';

export class OnePassword implements INodeType {
	description: INodeTypeDescription = {
		displayName: '1Password',
		name: '1password',
		icon: 'file:1password.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with 1Password API',
		defaults: {
			name: '1Password',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: '1passwordOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{ $credentials.ApiUrl + "/v1" }}',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Item',
						value: 'item',
					},
					{
						name: 'Vault',
						value: 'vault',
					},
					{
						name: 'File',
						value: 'file',
					},
				],
				default: 'item',
			},
			// Operation
			...itemOperations,
			...itemFields,
			...vaultOperations,
			...vaultFields,
			...fileOperations,
			...fileFields,
		],
	};
}
