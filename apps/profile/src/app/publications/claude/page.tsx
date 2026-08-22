'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import './claude.css';

// Data Array
const contents = [
  {
    id: 1,
    title: 'Introduction & Usage',
    summary:
      'Claude is a next generation AI assistant built by Anthropic and trained to be safe, accurate, and secure to help you do your best work.',
    description: {
      'main-p1':
        "Claude Code is an agentic AI coding tool by Anthropic. It's available in your terminal, IDE, desktop app, and browser. It can read and edit files, execute commands, and integrate with your development tools to build features, fix bugs, and automate development tasks.",
      'main-p2':
        'This article talks about Claude Code usage, its internal working and some of the best practices to use it. ',
      'main.image': '/claude.png',
      'main.image-alt': 'Claude Code',
      points: [
        {
          description:
            'Here are three major ways in which you may use Claude Code to design portals:',
          point: [
            {
              'pt-desc':
                'Reference Design along with Screenshot approach: In this approach you provide Claude Code with a reference design (figma etc). Based on this Claude Code generates output - component/page. Claude then compares generated output page with reference design. If there are any gaps then Claude again works and generates output page again. If again after comparison there are gaps, then this iteration continues until the result is within 2-3px of the reference design. This way Claude’s generated output closely matches the reference design.',
            },
            {
              'pt-desc':
                'Give prompt (text/voice) and then continue to improve till the time, output - component/page closely matches the reference design.',
            },
            {
              'pt-desc':
                'Use Component Registry/Marketplace: This let’s designers and developers share UI components that can be copied directly into codebase or install using Claude Code. Copy ready-to-use prompts or use Model Context Protocol (MCP) integrations. Example: https://21st.dev/, https://promptden.com/.',
              'pt-img': '/claude-usage.png',
              'pt-img-alt': 'Claude Code',
            },
          ],
        },
      ],
    },
    // status: 'Active',
  },
  {
    id: 2,
    title: 'CLAUDE.md',
    summary:
      'CLAUDE.md is a Markdown file where you give Claude Code persistent context and instructions that it automatically reads at the start of every session in that repo.',
    description: {
      'main-p1':
        "CLAUDE.md is a special file that Claude Code automatically reads and injects at the very start of a conversation, before your first message — even before any other context. Because it's loaded first, it effectively shapes how Claude interprets everything that follows.",
      'main-p2':
        'It gives Claude persistent, project-specific context and instructions. When using Claude Code, CLAUDE.md  is automatically read at the start of every session. Think of it as a standing instruction manual for an Claude Code. Instead of retyping your project preferences or tech stack in every new chat, you put them in CLAUDE.md so Claude already understands your project. This can help you to build conventions for different workspaces. The /init command allows you to analyze the current codebase and write a CLAUDE.md file.',
      'main.image': '/claude.md-1.png',
      'main.image-alt': 'Claude Code',
      points: [
        {
          description:
            'Key Engineering advantages of maintaining a CLAUDE.md file are:',
          point: [
            {
              'pt-desc':
                'Token Efficiency: Instead of processing your entire project history or giant documentation manuals, Claude parses a single, compact configuration markdown file at the start of every session.',
            },
            {
              'pt-desc':
                "Scoped Sub-Rules: Claude walks the directory tree and concatenates root plus nested CLAUDE.md files as work moves into subdirectories — so path-specific rules only enter context when you're actually working in that path, rather than bloating a single root file with instructions for every part of the codebase.",
            },
            {
              'pt-desc':
                'Instant Alignment, CLAUDE.md serves as an instant "onboarding file", no need to constantly remind Claude of your project parameters.',
            },
            {
              'pt-desc':
                "CLAUDE.md is the natural place to record your project's build, test, and lint commands, so Claude knows exactly which scripts to run without you re-explaining them each session (actual execution permissions are governed separately via Claude Code's permission settings).",
            },
            {
              'pt-desc':
                'Build shared team guardrails, CLAUDE.md lives directly in your project root as code, it is tracked via Git. The entire engineering team contributes to and shares the exact same AI orchestration rules, ensuring consistency across different developer machines.',
            },
            {
              'pt-desc':
                'Continuous Correction, when Claude hits an error or misunderstands, update CLAUDE.md to avoid same mistake(s).',
            },
          ],
        },
        {
          description:
            'A quick walk through of key best practices in developing CLAUDE.md:',
          point: [
            {
              'pt-desc':
                'Run /init to generate the initial boilerplate automatically so Claude can scan your environment and build a foundational CLAUDE.md.',
            },
            {
              'pt-desc': 'Use bullet points & short headings.',
            },
            {
              'pt-desc': 'Put most important guardrails at the top.',
            },
            {
              'pt-desc': 'Version-control the root CLAUDE.md.',
            },
            {
              'pt-desc':
                'Periodically review & prune, treat like a living code.',
            },
            {
              'pt-desc': 'Do not dump entire style guides or API doc(s).',
            },
            {
              'pt-desc': 'Do not @-include huge files unless really required.',
            },
            {
              'pt-desc': 'Avoid vague or aspirational rules.',
            },
            {
              'pt-desc':
                'Avoid writing long files which are more than 200 lines, it’s better to split.',
            },
            {
              'pt-desc':
                'Avoid forgetting rules addition when Claude keeps making the same mistake(s).',
              'pt-img': '/claude.md-2.png',
              'pt-img-label': 'Sample CLAUDE.md',
              'pt-img-alt': 'Claude Code',
            },
          ],
        },
      ],
    },
    // status: 'Active',
  },
];

export default function MasterDetailPage() {
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
          Claude Code
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

                  <p className="text-black-700 leading-relaxed text-lg list-[square] list-inside my-4">
                    {selectedItem.description['main-p2']}
                  </p>

                  <Image
                    src={selectedItem.description['main.image']}
                    alt={selectedItem.description['main.image-alt']}
                    width={800}
                    height={425}
                    className="claude-main-img"
                  />
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
                                  className="claude-point-img my-4"
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
