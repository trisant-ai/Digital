'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import './nx.css';

// Data Array
const contents = [
  {
    id: 1,
    title: 'Introduction',
    summary:
      'Nx provides the build, monorepo, and developer tooling foundation, while Storybook enables scalable, reusable, documented UI components—together supporting faster and more consistent product development.',
    description: {
      'main-p1':
        'Imagine you have a scenario in which you have to develop multiple surfaces/portals for your clients. In each of such project(s) you may have to develop components. In order to improve collaboration, reusability, profitability, code standardization, monorepo may help, however managing multiple interdependent projects within monorepo requires a capable build tool to efficiently handle the intricacies.',
      'main-p2':
        'There are many great monorepo tools, which are built by great teams, with different philosophies. One such tool is Nx. The Nx team develops and maintains Nx, Nx Cloud, Nx Agents, Nx Console, Nx MCP Server & are maintainers of Lerna. ',
      'main.image': '',
      'main.image-alt': '',
      points: [
        {
          description:
            'Nx is a build system for JavaScript and TypeScript monorepos, with plugins for other languages. Nx core is written in Rust & it supports: ',
          point: [
            {
              'pt-desc':
                'An architectural structure, the monorepo style development, with the code separated into apps and libs and the tools help the team take advantage of keeping things separate.',
            },
            {
              'pt-desc':
                'Nx Agents: They are managed CI workers that distribute Nx tasks across multiple machines, allowing tasks to execute in parallel and reducing CI execution time.',
            },
            {
              'pt-desc':
                'Nx MCP: This is an MCP server provided by Nx that allows AI coding assistants to interact with Nx-related information and capabilities, including Nx Cloud CI, task monitoring, documentation, and workspace-related tooling.',
            },
            {
              'pt-desc':
                'Nx Replay: Nx provides local computation caching. Nx Replay is the Nx Cloud product that provides remote caching.',
            },
            {
              'pt-desc':
                'Nx Console: This is an IDE extension that brings Nx functionality directly into your code editor. It provides editor integrations for VS Code and JetBrains IDEs.',
            },
            {
              'pt-desc':
                'Nx Graph: Helps in understanding architecture of your workspace with the built-in nx graph capabilities.',
            },
            {
              'pt-desc':
                'Nx supports “affected” mechanism, this helps selectively build only those projects that have been impacted by the most recent changes. This improves efficiency of working with monorepos.',
            },
            {
              'pt-desc':
                'Nx integrates with common development tools such as ESLint and formatting tools, and provides generators, task configuration and task orchestration around them.',
            },
          ],
        },
        {
          description:
            'Nx supports different repository structures, including package-based and integrated monorepos. Each approach has its own advantages and trade-offs. Nx features can be enabled independently based on the needs of the workspace.',
          point: [],
        },
        {
          description:
            'As we build out scalable surfaces/portals, we often face challenges in maintaining the growing complexity of component structures. Here Atomic Design pattern can help. Atomic Design pattern can help to make application code scalable, flexible, reusable & readable.',
          point: [],
        },
        {
          description:
            'Atomic design pattern is a methodology for creating design systems. There are five distinct levels in atomic design, at each level the complexity increases. Here are the levels:',
          point: [
            {
              'pt-desc': 'Atoms',
            },
            {
              'pt-desc': 'Molecules',
            },
            {
              'pt-desc': 'Organisms',
            },
            {
              'pt-desc': 'Templates',
            },
            {
              'pt-desc': 'Pages',
            },
          ],
        },
        {
          description:
            'A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications. Storybook can help to build design systems.',
          point: [],
        },
        {
          description:
            "From the Storybook website “Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.” Storybook can help you create, reuse & share UI components.",
          point: [],
        },
        {
          description: '',
          point: [],
        },
        {
          description:
            "Nx can generate Storybook stories for your components. For supported frameworks such as React, Nx analyzes the component's props and can prefill the corresponding Storybook args/controls. Nx also provides generators and tooling for component and E2E testing.",
          point: [
            {
              'pt-desc': '',
              'pt-img': '/Nx+Storybook.png',
              'pt-img-label': 'Nx & Storybook',
              'pt-img-alt': 'Nx & Storybook',
            },
          ],
        },
      ],
    },
    // status: 'Active',
  },
  {
    id: 2,
    title: 'Setup Nx Build System & Storybook',
    summary:
      'Creating Nx workspace, configure UI library with Storybook & generating new React components along with their stories.',
    description: {
      'main-p1': '',
      'main-p2': '',
      'main.image': '',
      'main.image-alt': '',
      points: [
        {
          description: "Let's execute following commands:",
          point: [
            {
              'pt-desc':
                "'npx create-nx-workspace@<version> <monorepo name> --preset=next' - It scaffolds a new, production-ready Nx monorepo workspace specifically tailored for building a Next.js application.",
              'pt-img': '/Nx-workspace.png',
              'pt-img-label': 'Nx Workspace',
              'pt-img-alt': 'Nx Workspace',
            },
            {
              'pt-desc':
                "'npx nx g @nx/react:lib delightful --directory=libs/delightful --publishable --importPath=@delightful/ui' - This generates a new React UI library named delightful which is sharable and publishable inside a Nx workspace.",
              'pt-img': '/Ui-lib.png',
              'pt-img-label': 'UI Lib',
              'pt-img-alt': 'UI Lib',
            },
            {
              'pt-desc':
                "'npm install tailwindcss@latest @tailwindcss/postcss postcss --save-dev' - This installs Tailwind CSS v4 and its required build tools as development dependencies.",
            },
            {
              'pt-desc': 'Create file postcss.config.js and add plugin',
              'pt-img': '/Postcss-config.png',
              'pt-img-label': 'Postcss Config',
              'pt-img-alt': 'Postcss Config',
            },
            {
              'pt-desc': "'@import 'tailwindcss'; - global.css",
            },
            {
              'pt-desc':
                '@source "../../../../libs/delightful/src/**/*.{ts,tsx}"; - Point Tailwind to your shared library so that it scans those files for classes.',
            },
            {
              'pt-desc': 'Add paths to compilerOptions in tsconfig.base.json',
              'pt-img': '/Tsconfig-json.png',
              'pt-img-label': 'tsconfig.base.json',
              'pt-img-alt': 'Tsconfig json',
            },
            {
              'pt-desc':
                "'npm install @base-ui/react' - This installs Base UI, an open-source library of unstyled, headless React components and hooks",
            },
            {
              'pt-desc':
                "'npx nx add @nx/storybook' - This installs and initializes the Storybook plugin within a Nx workspace.",
            },
            {
              'pt-desc':
                "'npx nx g @nx/react:storybook-configuration @delightful/ui' - This configures and initializes Storybook specifically for a React UI library named @delightful/ui within an Nx workspace.",
            },
            {
              'pt-desc':
                "'npm install @tailwindcss/vite --save-dev' - This installs the official Tailwind CSS Vite plugin as a development dependency.",
            },
            {
              'pt-desc': 'This hooks Tailwind CSS into Storybook',
              'pt-img': '/Storybook-main.png',
              'pt-img-label': '.storybook/main.ts',
              'pt-img-alt': '.storybook/main.ts',
            },
            {
              'pt-desc':
                'This code imports a global CSS stylesheet directly into your Storybook preview configuration so that Design tokens, Tailwind CSS, typography, or custom layout rules apply to all your component stories.',
              'pt-img': '/Storybook-preview.png',
              'pt-img-label': '.storybook/preview.ts',
              'pt-img-alt': '.storybook/preview.ts',
            },
          ],
        },
      ],
    },
    // status: 'Active',
  },
  {
    id: 3,
    title: 'Conclusion',
    summary: 'Nx + Storybook',
    description: {
      'main-p1': '',
      'main-p2': '',
      'main.image': '',
      'main.image-alt': '',
      points: [
        {
          description:
            'As we understand together, Nx provides the monorepo build system and developer tooling, Storybook enables teams to develop, test, document, and reuse UI components consistently—together improving collaboration, maintainability, and delivery efficiency.',
          point: [
            {
              'pt-desc':
                'Next.js boilerplate App showing two UI components, Component 1 - a Label & Component 2 - a Button. Next.js App & Storybook both are on Nx Workspace.',
              'pt-img': '/Nx-Nextjs.png',
              'pt-img-label': 'Nx + Storybook - Next.js App',
              'pt-img-alt': 'Nx + Storybook - Next.js',
            },
            {
              'pt-desc': 'Storybook showing UI components',
              'pt-img': '/Storybook.png',
              'pt-img-label': 'Storybook',
              'pt-img-alt': 'Storybook',
            },
          ],
        },
      ],
    },
    // status: 'Active',
  },
];

export default function VPSDMasterDetailPage() {
  const [selectedItemId, setSelectedItemId] = useState<number>(contents[0].id);
  const detailRef = useRef<HTMLDivElement>(null);

  const selectedItem = contents.find((item) => item.id === selectedItemId);

  const handleItemClick = (id: number) => {
    setSelectedItemId(id);

    // Smooth scroll to the details panel on mobile screens
    if (window.innerWidth < 768) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 50);
    }
  };

  interface PointItem {
    'pt-desc': string;
    'pt-img'?: string;
    'pt-img-alt'?: string;
    'pt-img-label'?: string;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl font-extrabold text-black-900 mb-8">
          Nx Build System + Storybook
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Master List Section */}
          <div className="w-full md:w-1/4 flex flex-col gap-3">
            {contents.map((item) => {
              const isActive = selectedItemId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/20 text-white'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-black-800'
                  }`}
                >
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p
                    className={`text-sm mt-1 line-clamp-1 ${
                      isActive ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {item.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/3" ref={detailRef}>
            {selectedItem ? (
              <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm sticky top-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-bold text-black-900">
                    {selectedItem.title}
                  </h2>
                  {/* <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider rounded-full">
                    {selectedItem.status}
                  </span> */}
                </div>
                <h3 className="text-slate-500 font-medium mb-6">
                  {selectedItem.summary}
                </h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-black-700 leading-relaxed text-lg list-[square] list-inside">
                    {selectedItem.description['main-p1']}
                  </p>

                  {selectedItem.description['main-p2'] && (
                    <p className="text-black-700 leading-relaxed text-lg list-[square] list-inside my-4">
                      {selectedItem.description['main-p2']}
                    </p>
                  )}
                  {selectedItem.description['main.image'] && (
                    <Image
                      src={selectedItem.description['main.image']}
                      alt={selectedItem.description['main.image-alt']}
                      width={800}
                      height={425}
                      className="nx-main-img"
                    />
                  )}
                </div>

                <div>
                  {selectedItem.description.points.map(
                    (pointGroup, groupIndex) => (
                      <React.Fragment key={`point-group-${groupIndex}`}>
                        {/* Render the main description for this group */}
                        {pointGroup.description && (
                          <h3 className="text-black-700  text-lg mt-6 mb-3">
                            {pointGroup.description}
                          </h3>
                        )}

                        {/* Iterate over the nested point array */}
                        {pointGroup.point.map((item: PointItem, itemIndex) => {
                          const pointText = item['pt-desc'];
                          const pointImage = item['pt-img'];
                          const pointImageAlt = item['pt-img-alt'];
                          const pointImageLabel = item['pt-img-label'];

                          return (
                            <React.Fragment
                              key={`point-item-${groupIndex}-${itemIndex}`}
                            >
                              {pointText && (
                                <ul className="list-[square] list-outside pl-5">
                                  <li className="text-black-700 leading-relaxed text-lg mb-2">
                                    {pointText}
                                  </li>
                                </ul>
                              )}

                              {pointImageLabel && (
                                <p className="underline text-xl">
                                  {pointImageLabel}
                                </p>
                              )}

                              {pointImage && (
                                <Image
                                  src={pointImage}
                                  alt={pointImageAlt || ''}
                                  width={800}
                                  height={425}
                                  className="nx-point-img my-4"
                                />
                              )}
                            </React.Fragment>
                          );
                        })}
                      </React.Fragment>
                    ),
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center h-full min-h-[400px]">
                <p className="text-slate-400 text-lg">
                  Select an item to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
