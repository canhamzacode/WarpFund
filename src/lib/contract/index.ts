export const CONTRACT_ADDRESS = '0x11a5a48d2f9a5ac89e614c55a01bcac4175e2343';

export const CONTRACT_CONFIG = {
  address: CONTRACT_ADDRESS as `0x${string}`,
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'campaignId',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'creator',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'goal',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256'
        }
      ],
      name: 'CampaignCreated',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_title',
          type: 'string'
        },
        {
          internalType: 'string',
          name: '_description',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: '_goal',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '_duration',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '_categoryIndex',
          type: 'uint256'
        }
      ],
      name: 'createCampaign',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_category',
          type: 'string'
        }
      ],
      name: 'createCategory',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_campaignId',
          type: 'uint256'
        }
      ],
      name: 'donateToCampaign',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'campaignId',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'donor',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'DonationReceived',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'campaignId',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'creator',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'FundsWithdrawn',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_campaignId',
          type: 'uint256'
        }
      ],
      name: 'refund',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'campaignId',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'donor',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'RefundIssued',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'string[]',
          name: '_categories',
          type: 'string[]'
        }
      ],
      name: 'setCategories',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_campaignId',
          type: 'uint256'
        }
      ],
      name: 'withdrawFunds',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'campaignCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'campaignDonors',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'campaigns',
      outputs: [
        {
          internalType: 'address',
          name: 'creator',
          type: 'address'
        },
        {
          internalType: 'string',
          name: 'title',
          type: 'string'
        },
        {
          internalType: 'string',
          name: 'description',
          type: 'string'
        },
        {
          internalType: 'uint256',
          name: 'goal',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'fundsRaised',
          type: 'uint256'
        },
        {
          internalType: 'bool',
          name: 'withdrawn',
          type: 'bool'
        },
        {
          internalType: 'uint256',
          name: 'categoryIndex',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'categories',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_days',
          type: 'uint256'
        }
      ],
      name: 'convertDaysToSeconds',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'pure',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      name: 'donations',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getAllCampaigns',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'creator',
              type: 'address'
            },
            {
              internalType: 'string',
              name: 'title',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'description',
              type: 'string'
            },
            {
              internalType: 'uint256',
              name: 'goal',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'fundsRaised',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: 'withdrawn',
              type: 'bool'
            },
            {
              internalType: 'uint256',
              name: 'categoryIndex',
              type: 'uint256'
            }
          ],
          internalType: 'struct WarpFund.Campaign[]',
          name: '',
          type: 'tuple[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getAllCategories',
      outputs: [
        {
          internalType: 'string[]',
          name: '',
          type: 'string[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_campaignId',
          type: 'uint256'
        }
      ],
      name: 'getCampaign',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'creator',
              type: 'address'
            },
            {
              internalType: 'string',
              name: 'title',
              type: 'string'
            },
            {
              internalType: 'string',
              name: 'description',
              type: 'string'
            },
            {
              internalType: 'uint256',
              name: 'goal',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256'
            },
            {
              internalType: 'uint256',
              name: 'fundsRaised',
              type: 'uint256'
            },
            {
              internalType: 'bool',
              name: 'withdrawn',
              type: 'bool'
            },
            {
              internalType: 'uint256',
              name: 'categoryIndex',
              type: 'uint256'
            }
          ],
          internalType: 'struct WarpFund.Campaign',
          name: '',
          type: 'tuple'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_campaignId',
          type: 'uint256'
        }
      ],
      name: 'getCampaignCategory',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_campaignId',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: '_donor',
          type: 'address'
        }
      ],
      name: 'getDonorContribution',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_campaignId',
          type: 'uint256'
        }
      ],
      name: 'getDonors',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
};

export const ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'campaignId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'creator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'goal',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      }
    ],
    name: 'CampaignCreated',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_title',
        type: 'string'
      },
      {
        internalType: 'string',
        name: '_description',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: '_goal',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_duration',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_categoryIndex',
        type: 'uint256'
      }
    ],
    name: 'createCampaign',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_category',
        type: 'string'
      }
    ],
    name: 'createCategory',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256'
      }
    ],
    name: 'donateToCampaign',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'campaignId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'donor',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'DonationReceived',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'campaignId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'creator',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'FundsWithdrawn',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256'
      }
    ],
    name: 'refund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'campaignId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'donor',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'RefundIssued',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'string[]',
        name: '_categories',
        type: 'string[]'
      }
    ],
    name: 'setCategories',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256'
      }
    ],
    name: 'withdrawFunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'campaignCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'campaignDonors',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'campaigns',
    outputs: [
      {
        internalType: 'address',
        name: 'creator',
        type: 'address'
      },
      {
        internalType: 'string',
        name: 'title',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'goal',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'fundsRaised',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'withdrawn',
        type: 'bool'
      },
      {
        internalType: 'uint256',
        name: 'categoryIndex',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'categories',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_days',
        type: 'uint256'
      }
    ],
    name: 'convertDaysToSeconds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'donations',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAllCampaigns',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'creator',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'goal',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'fundsRaised',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'withdrawn',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'categoryIndex',
            type: 'uint256'
          }
        ],
        internalType: 'struct WarpFund.Campaign[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAllCategories',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256'
      }
    ],
    name: 'getCampaign',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'creator',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'goal',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'deadline',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'fundsRaised',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'withdrawn',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'categoryIndex',
            type: 'uint256'
          }
        ],
        internalType: 'struct WarpFund.Campaign',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256'
      }
    ],
    name: 'getCampaignCategory',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '_donor',
        type: 'address'
      }
    ],
    name: 'getDonorContribution',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256'
      }
    ],
    name: 'getDonors',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
] as const;
