import { INodeProperties } from "n8n-workflow";

export const vaultOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'vault',
				],
			},
		},
		options: [
			{
				name: 'Get Vaults',
				value: 'getVaults',
				action: 'Get vaults',
				routing: {
					request: {
						method: 'GET',
						url: '/vaults',
					},
				},
			},
			{
				name: 'Get Vault Details',
				value: 'getVaultDetails',
				action: 'Get vault details',
				routing: {
					request: {
						method: 'GET',
						url: '=/vaults/{{ $parameter.vaultUUID }}',
					},
				},
			},
		],
		default: 'getVaultDetails',
	},
];

export const vaultFields: INodeProperties[] = [
	{
		displayName: 'Vault UUID',
		name: 'vaultUUID',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['getVaultDetails'],
			},
		},
		default: '',
		description: 'The UUID of the vault',
	},
];
