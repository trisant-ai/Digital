'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import './ai.css';

// Data Array
const contents = [
  {
    id: 1,
    title:
      'AI, ML, Deep Learning, Generative AI and Data Science: Who Belongs Where?',
    summary:
      'AI is the broad field of building intelligent machines, with machine learning, deep learning and generative AI nested inside it as progressively narrower subsets. Data science is a separate, overlapping discipline that uses these techniques alongside statistics, analytics and domain expertise to turn data into insight.',
    description: {
      'main-p1': '',
      'main-p2': '',
      'main.image': '',
      'main.image-alt': '',
      points: [
        {
          description: "Let's understand together:",
          point: [
            {
              'pt-desc':
                'Artificial intelligence (AI) is the broadest field: building machines that perform tasks needing human-like intelligence. It includes those that learn from data and other methods that don’t learn from data, such as rule-based & expert systems, search & planning, symbolic reasoning and knowledge graphs.',
            },
            {
              'pt-desc':
                'Machine learning (ML) sits inside AI. Instead of following hand-written rules, ML algorithms learn patterns from data to make predictions or decisions, as in spam filtering, recommendations and forecasting.',
            },
            {
              'pt-desc':
                'Deep learning (DL) is a subset of ML that uses multi-layer neural networks. It excels at unstructured data like images, audio and text, powering image and speech recognition through architectures such as CNNs, RNNs and Transformers.',
            },
            {
              'pt-desc':
                'Generative AI creates new content: text, images, audio and code. It is mostly deep learning, using LLMs, diffusion models, GANs and VAEs, which is why it sits largely inside DL. It crosses the boundary slightly because a few classical generative models, such as HMMs and n-grams, are ML without being deep learning.',
            },
            {
              'pt-desc':
                'Data science is different. It is not a layer in the hierarchy but a separate field that combines statistics, programming, visualization and domain knowledge to extract insight from data. It overlaps with ML, DL and Generative AI when they are useful, for example in churn prediction, image classification or document summarization. It also extends beyond AI into A/B testing, dashboards and statistical reporting.',
              'pt-img': '/ai-ml-dl-genai-data-science.png',
              'pt-img-label': 'AI vs ML vs DL vs Gen AI vs DS',
              'pt-img-alt': 'AI vs ML vs DL vs Gen AI vs DS',
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
          AI vs ML vs Deep Learning vs Generative AI vs Data Science
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
                      className="ai-main-img"
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
                                  className="ai-point-img my-4"
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
