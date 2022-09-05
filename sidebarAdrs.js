// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  adrs: [
    {
      type: 'category',
      label: 'Architectural Decision Records',
      link: {
        type: 'generated-index',
        description: "This page contains a list of accepted Oasis ADRs. To see the currently discussed ADRs or to open a new ADR, visit the official oasisprotocol/adrs repository on github.com.",
        slug: '/adrs',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'adrs',
        },
      ],
    }
  ],
};

module.exports = sidebars;
