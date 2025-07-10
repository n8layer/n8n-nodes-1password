import { INodeProperties } from "n8n-workflow";

export const fileOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'file',
				],
			},
		},
		options: [
			{
				name: 'Get File Content',
				value: 'getFileContent',
				action: 'Get file content',
				routing: {
					request: {
						method: 'GET',
						url: '=/vaults/{{ $parameter.vaultUUID }}/items/{{ $parameter.itemUUID }}/files/{{ $parameter.fileUUID }}/content',
						qs: {
							inline_content: '{{ $parameter.inlineContent }}',
						},
					},
				},
			},
			{
				name: 'Get File Details',
				value: 'getFileDetails',
				action: 'Get file details',
				routing: {
					request: {
						method: 'GET',
						url: '=/vaults/{{ $parameter.vaultUUID }}/items/{{ $parameter.itemUUID }}/files/{{ $parameter.fileUUID }}',
						qs: {
							inline_content: '{{ $parameter.inlineContent }}',
						},
					},
				},
			},
			{
				name: 'List Files',
				value: 'getFiles',
				action: 'List files',
				routing: {
					request: {
						method: 'GET',
						url: '=/vaults/{{ $parameter.vaultUUID }}/items/{{ $parameter.itemUUID }}/files',
						qs: {
							inline_content: '{{ $parameter.inlineContent }}',
						},
					},
				},
			},
		],
		default: 'getFiles',
	},
];

export const fileFields: INodeProperties[] = [
	{
		displayName: 'Vault UUID',
		name: 'vaultUUID',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['getFiles', 'getFileDetails', 'getFileContent'],
			},
		},
		default: '',
	},
	{
		displayName: 'Item UUID',
		name: 'itemUUID',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['getFiles', 'getFileDetails', 'getFileContent'],
			},
		},
		default: '',
	},
	{
		displayName: 'Inline Content',
		name: 'inlineContent',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				operation: ['getFiles', 'getFileDetails', 'getFileContent'],
			},
		},
		default: true,
	},
	{
		displayName: 'File UUID',
		name: 'fileUUID',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['getFileDetails', 'getFileContent'],
			},
		},
		default: '',
	},
];
