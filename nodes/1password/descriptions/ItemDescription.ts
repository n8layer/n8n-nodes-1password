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
						url: '=/vaults/{{ $parameter.vaultUUID }}/items',
						body: {
							vault: {
								id: '={{ $parameter.vaultUUID }}',
							},
							title: '={{ $parameter.title }}',
							category: '={{ $parameter.category }}',
							tags: '={{ $parameter.tags ? $parameter.tags.split(",").map(tag => tag.trim()) : [] }}',
							urls: '={{ $parameter.urls?.urlProperties || [] }}',
							favorite: '={{ $parameter.favorite || false }}',
							sections: '={{ $parameter.sections?.sectionProperties || [] }}',
							fields: '={{ ($parameter.fields?.fieldProperties || []).map(field => ({ ...field, section: field.sectionId ? { id: field.sectionId } : undefined })) }}',
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
						url: '=/vaults/{{ $parameter.vaultUUID }}/items/{{ $parameter.itemUUID }}',
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
						url: '=/vaults/{{ $parameter.vaultUUID }}/items/{{ $parameter.itemUUID }}',
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
						url: '=/vaults/{{ $parameter.vaultUUID }}/items',
						qs: {
							filter: '={{ $parameter.filter || "" }}',
						},
					},
				},
			},
			// {
			// 	name: 'Update a Subset of an Item',
			// 	value: 'updateItem',
			// 	action: 'Update an item',
			// 	routing: {
			// 		request: {
			// 			method: 'PATCH',
			// 			url: '=/vaults/{{ $parameter.vaultUUID }}/items/{{ $parameter.itemUUID }}',
			// 			body: [
			// 				{
			// 					op: '={{ $parameter.op }}',
			// 					path: '={{ $parameter.path }}',
			// 					value: '={{ $parameter.value }}',
			// 				},
			// 			],
			// 		},
			// 	},
			// },
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
				operation: ['getItems', 'addItem', 'getItemDetails', 'deleteItem', 'updateItem'],
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
				operation: ['getItemDetails', 'deleteItem', 'updateItem'],
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
		type: 'fixedCollection',
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		placeholder: 'Add URL',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'urlProperties',
				displayName: 'URL',
				values: [
					{
						displayName: 'URL',
						name: 'href',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Primary',
						name: 'primary',
						type: 'boolean',
						default: false,
						description: 'Whether this is the primary URL',
					},
				],
			},
		],
		description: 'URL associated with the item',
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
		type: 'string',
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		default: '',
		placeholder: 'tag1, tag2, tag3',
		description: 'Comma-separated list of tags to assign to the item',
	},
	{
		displayName: 'Sections',
		name: 'sections',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		placeholder: 'Add Section',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'sectionProperties',
				displayName: 'Section',
				values: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						description: 'The section ID',
					},
					{
						displayName: 'Label',
						name: 'label',
						type: 'string',
						default: '',
						description: 'The section label',
					},
				],
			},
		],
		description: 'Sections to organize fields within the item',
	},
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				operation: ['addItem'],
			},
		},
		placeholder: 'Add Field',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'fieldProperties',
				displayName: 'Field',
				values: [
					{
						displayName: 'Character Sets',
						name: 'characterSets',
						type: 'multiOptions',
						options: [
							{
								name: 'Letters',
								value: 'LETTERS',
							},
							{
								name: 'Digits',
								value: 'DIGITS',
							},
							{
								name: 'Symbols',
								value: 'SYMBOLS',
							},
						],
						default: ['LETTERS', 'DIGITS'],
						description: 'Character sets to use for password generation',
						displayOptions: {
							show: {
								generate: [true],
							},
						},
					},
					{
						displayName: 'Exclude Characters',
						name: 'excludeCharacters',
						type: 'string',
						default: '',
						description: 'Characters to exclude from password generation',
						displayOptions: {
							show: {
								generate: [true],
							},
						},
					},
					{
						displayName: 'Generate Password',
						name: 'generate',
						type: 'boolean',
						default: false,
						description: 'Whether to generate a password for this field',
						displayOptions: {
							show: {
								purpose: ['PASSWORD'],
							},
						},
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						description: 'The field ID',
					},
					{
						displayName: 'Label',
						name: 'label',
						type: 'string',
						default: '',
						description: 'The field label',
					},
					{
						displayName: 'Password Length',
						name: 'passwordLength',
						type: 'number',
						default: 32,
						description: 'Length of the generated password',
						displayOptions: {
							show: {
								generate: [true],
							},
						},
					},
					{
						displayName: 'Purpose',
						name: 'purpose',
						type: 'options',
						options: [
							{
								name: 'Username',
								value: 'USERNAME',
							},
							{
								name: 'Password',
								value: 'PASSWORD',
							},
							{
								name: 'Notes',
								value: 'NOTES',
							},
						],
						default: 'USERNAME',
						description: 'The field purpose',
					},
					{
						displayName: 'Section ID',
						name: 'sectionId',
						type: 'string',
						default: '',
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Credit Card Number',
								value: 'CREDIT_CARD_NUMBER',
							},
							{
								name: 'Credit Card Type',
								value: 'CREDIT_CARD_TYPE',
							},
							{
								name: 'Date',
								value: 'DATE',
							},
							{
								name: 'Email',
								value: 'EMAIL',
							},
							{
								name: 'Number',
								value: 'NUMBER',
							},
							{
								name: 'One-Time Password',
								value: 'OTP',
							},
							{
								name: 'Phone',
								value: 'PHONE',
							},
							{
								name: 'String',
								value: 'STRING',
							},
							{
								name: 'URL',
								value: 'URL',
							},
						],
						default: 'STRING',
						description: 'The field type',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The field value',
					},
				],
			},
		],
		description: 'Fields to include with the item',
	},
	{
		displayName: 'Operation',
		name: 'op',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['updateItem'],
			},
		},
		options: [
			{
				name: 'Add',
				value: 'add',
				description: 'Add a new value',
			},
			{
				name: 'Remove',
				value: 'remove',
				description: 'Remove a value',
			},
			{
				name: 'Replace',
				value: 'replace',
				description: 'Replace an existing value',
			},
		],
		default: 'replace',
	},
	{
		displayName: 'Path',
		name: 'path',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['updateItem'],
			},
		},
		default: '/title',
		description: 'JSON Pointer path to the field to update (e.g., /title, /favorite, /tags, /fields/0/value, /sections/1/label)',
		placeholder: '/title',
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateItem'],
				op: ['add', 'replace'],
			},
		},
		default: '',
		description: 'The new value to set (not needed for remove operation)',
		placeholder: '"New Title" or true or ["tag1", "tag2"]',
	},
];


