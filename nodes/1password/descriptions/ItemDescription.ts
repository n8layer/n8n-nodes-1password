import { INodeProperties } from "n8n-workflow";

export const itemOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'item',
				],
			},
		},
		options: [
			{
				name: 'Add an Item',
				value: 'addItem',
				action: 'Add an item',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/vaults/{{ $parameter.vaultUUID }}/items',
						body: {
							title: '{{ $parameter.title }}',
							vault: '{{ { "id": $parameter.vaultUUID } }}',
							category: '{{ $parameter.category }}',
							urls: '{{ $parameter.urls }}',
							favorite: '{{ $parameter.favorite }}',
							tags: '{{ $parameter.tags }}',
							fields: '{{ $parameter.fields }}',
							sections: '{{ $parameter.sections }}',
						},
					},
				},
			},
			{
				name: 'Delete an Item',
				value: 'deleteItem',
				action: 'Delete an item',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/vaults/{{ $parameter.vaultUUID }}/items/{{ $parameter.itemUUID }}',
					},
				},
			},
			{
				name: 'Get Item Details',
				value: 'getItemDetails',
				action: 'Get item details',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/vaults/{{ $parameter.vaultUUID }}/items/{{ $parameter.itemUUID }}',
					},
				},
			},
			{
				name: 'List Items',
				value: 'getItems',
				action: 'List items',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/vaults/{{ $parameter.vaultUUID }}/items',
						qs: {
							filter: '{{ $parameter.filter }}',
						},
					},
				},
			},
		],
		default: 'getItems',
	},
];

export const itemFields: INodeProperties[] = [
	{
		displayName: 'Vault UUID',
		name: 'vaultUUID',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['getItems', 'addItem', 'getItemDetails', 'deleteItem'],
			},
		},
		default: '',
		description: 'The UUID of the vault',
	},
	{
		displayName: 'Item UUID',
		name: 'itemUUID',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['getItemDetails', 'deleteItem'],
			},
		},
		default: '',
		description: 'The UUID of the item',
	},
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		description: 'Items can only be filtered by title or tag. Optional.',
		displayOptions: {
			show: {
				operation: ['getItems'],
			},
		},
		default: '',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		default: '',
		description: 'The title of the item',
	},
	{
		displayName: 'Category',
		name: 'category',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		options: [
			{
				name: 'API Credential',
				value: 'API_CREDENTIAL',
			},
			{
				name: 'Bank Account',
				value: 'BANK_ACCOUNT',
			},
			{
				name: 'Credit Card',
				value: 'CREDIT_CARD',
			},
			{
				name: 'Database',
				value: 'DATABASE',
			},
			{
				name: 'Driver License',
				value: 'DRIVER_LICENSE',
			},
			{
				name: 'Email Account',
				value: 'EMAIL_ACCOUNT',
			},
			{
				name: 'Identity',
				value: 'IDENTITY',
			},
			{
				name: 'Login',
				value: 'LOGIN',
			},
			{
				name: 'Medical Record',
				value: 'MEDICAL_RECORD',
			},
			{
				name: 'Membership',
				value: 'MEMBERSHIP',
			},
			{
				name: 'Outdoor License',
				value: 'OUTDOOR_LICENSE',
			},
			{
				name: 'Passport',
				value: 'PASSPORT',
			},
			{
				name: 'Password',
				value: 'PASSWORD',
			},
			{
				name: 'Reward Program',
				value: 'REWARD_PROGRAM',
			},
			{
				name: 'Secure Note',
				value: 'SECURE_NOTE',
			},
			{
				name: 'Server',
				value: 'SERVER',
			},
			{
				name: 'Social Security Number',
				value: 'SOCIAL_SECURITY_NUMBER',
			},
			{
				name: 'Software License',
				value: 'SOFTWARE_LICENSE',
			},
			{
				name: 'SSH Key',
				value: 'SSH_KEY',
			},
			{
				name: 'Wireless Router',
				value: 'WIRELESS_ROUTER',
			},
		],
		default: 'LOGIN',
		description: 'The category of the item',
	},
	{
		displayName: 'URLs',
		name: 'urls',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		default: '[]',
		description: 'Array of URL objects containing URLs for the item',
	},
	{
		displayName: 'Favorite',
		name: 'favorite',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		default: false,
		description: 'Whether to mark the item as a favorite',
	},
	{
		displayName: 'Tags',
		name: 'tags',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		default: '[]',
		description: 'An array of strings of the tags assigned to the item',
	},
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		default: '[]',
		description: 'An array of Field objects of the fields to include with the item',
	},
	{
		displayName: 'Sections',
		name: 'sections',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		default: '[]',
		description: 'An array of Section objects of the sections to include with the item',
	},
];
